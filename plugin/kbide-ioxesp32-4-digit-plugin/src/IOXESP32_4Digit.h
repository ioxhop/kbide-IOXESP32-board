#include "Arduino.h"
#include <Wire.h>

#define DEC 10 ///< Print value in decimal format (base 10)
#define HEX 16 ///< Print value in hexadecimal format (base 16)
#define OCT 8  ///< Print value in octal format (base 8)
#define BIN 2  ///< Print value in binary format (base 2)
#define BYTE 0 ///< Issue 7-segment data as raw bits

class IOXESP32_4Digit {
  private:
    uint8_t position; ///< Current print position, 0-3

    int write_byte(uint8_t cmd) ;
    int write_bytes(uint8_t *buff, int n) ;
  
  public:
    IOXESP32_4Digit() ;
    
    void begin();
    void setBrightness(int b);
    void blinkRate(int b);
    void writeDisplay();
    void clear();
  
    uint16_t displaybuffer[8]; ///< Raw display data
  
    size_t write(uint8_t c);
  
    void print(char c, int base = BYTE);
    void print(unsigned char b, int base = BYTE);
    void print(int n, int base = DEC);
    void print(unsigned int n, int base = DEC);
    void print(long n, int base = DEC);
    void print(unsigned long n, int base = DEC);
    void print(double n, int digits = 2);
  
    void writeDigitRaw(uint8_t x, uint8_t bitmask);
    void writeDigitNum(uint8_t x, uint8_t num, bool dot = false);
    void colon(bool state);
    void printNumber(long n, uint8_t base = DEC);
    void printFloat(double n, uint8_t fracDigits = 2, uint8_t base = DEC);
    void printError();
    void writeColon();
  
    void showDotPoint(uint8_t x, bool show);
  
    void turn_on() ;
    void turn_off() ;

    void showCelcius(double n = 0, uint8_t fracDigits = 1, uint8_t base = DEC) ;
    void showTime(unsigned int a, unsigned int b, bool colon) ;
    
};

extern IOXESP32_4Digit Display;
