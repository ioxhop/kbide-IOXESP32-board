#include "Button.h"

void buttonLoopTask(void* p) {
  Button *btn = (Button*) p;
  bool SWFlag = false;
  bool SWLongPressFlag = false;
  uint32_t SWPressTime = 0;
  while (1) {
    bool press = digitalRead(btn->pin) == btn->active;
    if (press && !SWFlag) {
      SWFlag = true;
      SWPressTime = millis();
      if (btn->onPressCb) btn->onPressCb();
    } else if (!press && SWFlag) {
      if (!SWLongPressFlag) {
        uint32_t diff = millis() - SWPressTime;
        if (diff > 100 && diff < 1000) { // short press
          Serial.println("SW short press");
          if (btn->onClickCb) btn->onClickCb();
        }
      }
      SWLongPressFlag = false;
      SWFlag = false;
      if (btn->onReleaseCb) btn->onReleaseCb();
    }
    if (SWFlag) {
      uint32_t diff = millis() - SWPressTime;
      if (diff >= 1000) { // long press
        Serial.println("SW long press");
        if (btn->onLongPressCb) btn->onLongPressCb();
        SWPressTime += 500;
        SWLongPressFlag = true;
      }
    }
    delay(10);
  }
  vTaskDelete(NULL);
}

Button::Button(int pin, int mode, int active) {
  this->pin = pin;
  this->mode = mode;
  this->active = active;
}

Button::~Button() {
  pinMode(this->pin, INPUT);
}

void Button::begin() {
  pinMode(this->pin, this->mode);

  xTaskCreatePinnedToCore(buttonLoopTask, "buttonLoopTask", 1 * 1024, this, 10, &buttonLoopTaskHandle, 1);
}

void Button::onClick(EventCallback cb) { onClickCb = cb; };
void Button::onPress(EventCallback cb) { onPressCb = cb; };
void Button::onLongPress(EventCallback cb) { onLongPressCb = cb; };
void Button::onRelease(EventCallback cb) { onReleaseCb = cb; };

bool Button::isPress() {
  return digitalRead(this->pin) == this->active;
}
