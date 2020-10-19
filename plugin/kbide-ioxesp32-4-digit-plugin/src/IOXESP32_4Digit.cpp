#include "IOXESP32_4Digit.h"

#define HT16K33_ADDR 0x70

#define HT16K33_OSC_OFF          0x20
#define HT16K33_OSC_ON           0x21
#define HT16K33_DISP_OFF         0x80
#define HT16K33_DISP_ON          0x81
#define HT16K33_DIM_SET_8_16     0xe7
#define HT16K33_DIM_SET_16_16    0xef
#define HT16K33_DISP_ADDR_PTR    0x00
#define HT16K33_CMD_BRIGHTNESS   0xE0
#define HT16K33_BLINK_CMD        0x80
#define HT16K33_BLINK_DISPLAYON  0x01
#define HT16K33_BLINK_OFF    0
#define HT16K33_BLINK_2HZ    1
#define HT16K33_BLINK_1HZ    2
#define HT16K33_BLINK_HALFHZ 3

uint8_t cmd_init[] = {
  HT16K33_OSC_ON,
  HT16K33_DIM_SET_8_16,
  HT16K33_DISP_ON
};


static const uint8_t numbertable[] = {
  0x3F, /* 0 */
  0x06, /* 1 */
  0x5B, /* 2 */
  0x4F, /* 3 */
  0x66, /* 4 */
  0x6D, /* 5 */
  0x7D, /* 6 */
  0x07, /* 7 */
  0x7F, /* 8 */
  0x6F, /* 9 */
  0x77, /* a */
  0x7C, /* b */
  0x39, /* C */
  0x5E, /* d */
  0x79, /* E */
  0x71, /* F */
};

IOXESP32_4Digit::IOXESP32_4Digit() {

}

void IOXESP32_4Digit::setBrightness(int b) {
  b = min(b, 15);
  
  this->write_byte(HT16K33_CMD_BRIGHTNESS | b);
}

void IOXESP32_4Digit::blinkRate(int b) {
  b = min(3, b);

  this->write_byte(HT16K33_BLINK_CMD | HT16K33_BLINK_DISPLAYON | (b << 1));
}

void IOXESP32_4Digit::begin() {
  Wire.begin();
  
  this->write_byte(HT16K33_OSC_ON);
  this->blinkRate(HT16K33_BLINK_OFF);
  this->setBrightness(15);
}

void IOXESP32_4Digit::writeDisplay() {
  uint8_t data[1 + 16];
  data[0] = HT16K33_DISP_ADDR_PTR;
  uint8_t inx = 1;
  for (uint8_t i=0;i<8;i++) {
    data[inx++] = displaybuffer[i] & 0xFF;
    data[inx++] = displaybuffer[i] >> 8;
  }

  this->write_bytes(data, 1 + 16);
}

void IOXESP32_4Digit::clear() {
  memset(displaybuffer, 0, 8);
}

void IOXESP32_4Digit::print(unsigned long n, int base) {
  if (base == 0) {
    this->write(n);
  } else {
    this->printNumber(n, base);
  }
  this->writeDisplay();
}

void IOXESP32_4Digit::print(char c, int base) { 
  this->print((long)c, base); 
  this->writeDisplay();
}

void IOXESP32_4Digit::print(unsigned char b, int base) {
  print((unsigned long)b, base);
  this->writeDisplay();
}

void IOXESP32_4Digit::print(int n, int base) { 
  print((long)n, base); 
  this->writeDisplay();
}

void IOXESP32_4Digit::print(unsigned int n, int base) {
  print((unsigned long)n, base);
  this->writeDisplay();
}

void IOXESP32_4Digit::print(double n, int digits) { 
  printFloat(n, digits); 
  this->writeDisplay();
}

size_t IOXESP32_4Digit::write(uint8_t c) {
  uint8_t r = 0;

  if (c == '\n')
    position = 0;
  if (c == '\r')
    position = 0;

  if ((c >= '0') && (c <= '9')) {
    writeDigitNum(position, c - '0');
    r = 1;
  }

  position++;
  if (position == 2)
    position++;

  return r;
}

void IOXESP32_4Digit::writeDigitRaw(uint8_t d, uint8_t bitmask)
{
  if (d > 4)
    return;
  displaybuffer[d] = bitmask;
}

void IOXESP32_4Digit::colon(bool state) {
  if (state)
    displaybuffer[4] |= 0x03;
  else
    displaybuffer[4] &= ~0x03;
  writeColon();
}

void IOXESP32_4Digit::writeColon(void) {
  uint8_t buff[3] = { 0x08, (uint8_t)(displaybuffer[4] & 0xFF), (uint8_t)(displaybuffer[4] >> 8) };
  this->write_bytes(buff, 3);
}

void IOXESP32_4Digit::writeDigitNum(uint8_t d, uint8_t num, bool dot) {
  if (d > 4)
    return;

  writeDigitRaw(d, numbertable[num] | (dot << 7));
}

void IOXESP32_4Digit::print(long n, int base) { 
  printNumber(n, base); 
}

void IOXESP32_4Digit::printNumber(long n, uint8_t base) {
  printFloat(n, 0, base);
}

void IOXESP32_4Digit::printFloat(double n, uint8_t fracDigits, uint8_t base) {
  uint8_t numericDigits = 4; // available digits on display
  bool isNegative = false;   // true if the number is negative

  // is the number negative?
  if (n < 0) {
    isNegative = true; // need to draw sign later
    --numericDigits;   // the sign will take up one digit
    n *= -1;       // pretend the number is positive
  }

  // calculate the factor required to shift all fractional digits
  // into the integer part of the number
  double toIntFactor = 1.0;
  for (int i = 0; i < fracDigits; ++i)
    toIntFactor *= base;

  // create integer containing digits to display by applying
  // shifting factor and rounding adjustment
  uint32_t displayNumber = n * toIntFactor + 0.5;

  // calculate upper bound on displayNumber given
  // available digits on display
  uint32_t tooBig = 1;
  for (int i = 0; i < numericDigits; ++i)
    tooBig *= base;

  // if displayNumber is too large, try fewer fractional digits
  while (displayNumber >= tooBig)
  {
    --fracDigits;
    toIntFactor /= base;
    displayNumber = n * toIntFactor + 0.5;
  }

  // did toIntFactor shift the decimal off the display?
  if (toIntFactor < 1) {
    printError();
  } else {
    // otherwise, display the number
    int8_t displayPos = 3;

    if (displayNumber) { // if displayNumber is not 0
      for (uint8_t i = 0; displayNumber || i <= fracDigits; ++i) {
        bool displayDecimal = (fracDigits != 0 && i == fracDigits);
        writeDigitNum(displayPos--, displayNumber % base, displayDecimal);
        /*if (displayPos == 2)
          writeDigitRaw(displayPos--, 0x00);*/
        displayNumber /= base;
      }
    } else {
      writeDigitNum(displayPos--, 0, false);
    }

    // display negative sign if negative
    if (isNegative)
      writeDigitRaw(displayPos--, 0x40);

    // clear remaining display positions
    while (displayPos >= 0)
      writeDigitRaw(displayPos--, 0x00);

    displaybuffer[4] &= ~0x04;
  }
}

void IOXESP32_4Digit::printError(void) {
  for (uint8_t i = 0; i < 4; ++i) {
    writeDigitRaw(i, (i == 2 ? 0x00 : 0x40));
  }
}

void IOXESP32_4Digit::showDotPoint(uint8_t x, bool show) {
  if (x > 4) return;

  if (show) {
    displaybuffer[x] |= (1 << 7);
  } else {
    displaybuffer[x] &= ~(1 << 7);
  }
}

void IOXESP32_4Digit::turn_on() {
  write_byte(HT16K33_DISP_ON);
}

void IOXESP32_4Digit::turn_off() {
  write_byte(HT16K33_DISP_OFF);
}

void IOXESP32_4Digit::showCelcius(double n, uint8_t fracDigits, uint8_t base) {
  // --------------------
  uint8_t numericDigits = 3; // available digits on display
  bool isNegative = false;   // true if the number is negative

  // is the number negative?
  if (n < 0) {
    isNegative = true; // need to draw sign later
    --numericDigits;   // the sign will take up one digit
    n *= -1;       // pretend the number is positive
  }

  // calculate the factor required to shift all fractional digits
  // into the integer part of the number
  double toIntFactor = 1.0;
  for (int i = 0; i < fracDigits; ++i)
    toIntFactor *= base;

  // create integer containing digits to display by applying
  // shifting factor and rounding adjustment
  uint32_t displayNumber = n * toIntFactor + 0.5;

  // calculate upper bound on displayNumber given
  // available digits on display
  uint32_t tooBig = 1;
  for (int i = 0; i < numericDigits; ++i)
    tooBig *= base;

  // if displayNumber is too large, try fewer fractional digits
  while (displayNumber >= tooBig)
  {
    --fracDigits;
    toIntFactor /= base;
    displayNumber = n * toIntFactor + 0.5;
  }

  // did toIntFactor shift the decimal off the display?
  if (toIntFactor < 1) {
    printError();
  } else {
    // otherwise, display the number
    int8_t displayPos = 2;

    if (displayNumber) { // if displayNumber is not 0
      for (uint8_t i = 0; displayNumber || i <= fracDigits; ++i) {
        bool displayDecimal = (fracDigits != 0 && i == fracDigits);
        writeDigitNum(displayPos--, displayNumber % base, displayDecimal);
        /*if (displayPos == 2)
          writeDigitRaw(displayPos--, 0x00);*/
        displayNumber /= base;
      }
    } else {
      writeDigitNum(displayPos--, 0, false);
    }

    // display negative sign if negative
    if (isNegative)
      writeDigitRaw(displayPos--, 0x40);

    // clear remaining display positions
    while (displayPos >= 0)
      writeDigitRaw(displayPos--, 0x00);
  }
  // --------------------

  displaybuffer[4] |= 0x04;
  this->writeDigitRaw(3, 0x39);
  
  this->writeDisplay();
}

void IOXESP32_4Digit::showTime(unsigned int a, unsigned int b, bool colon) {
  this->writeDigitNum(0, (int)(a / 10), false);
  this->writeDigitNum(1, (int)(a % 10), false);
  this->writeDigitNum(2, (int)(b / 10), false);
  this->writeDigitNum(3, (int)(b % 10), false);
  
  if (colon)
    displaybuffer[4] |= 0x03;
  else
    displaybuffer[4] &= ~0x03;
  
  this->writeDisplay();
}

int IOXESP32_4Digit::write_byte(uint8_t cmd) {
  Wire.beginTransmission(HT16K33_ADDR);
  Wire.write(cmd);
  return Wire.endTransmission();
}

int IOXESP32_4Digit::write_bytes(uint8_t *buff, int n) {
  Wire.beginTransmission(HT16K33_ADDR);
  Wire.write(buff, n);
  return Wire.endTransmission();
}

IOXESP32_4Digit Display;
