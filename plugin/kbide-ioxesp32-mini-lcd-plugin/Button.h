#ifndef __BUTTON_H__
#define __BUTTON_H__

#include "Arduino.h"

typedef void (*EventCallback)(void);

class Button {
  private: 
    int mode;

    TaskHandle_t buttonLoopTaskHandle;
    
  public:
    int pin, active;
    
    EventCallback onClickCb = NULL;
    EventCallback onPressCb = NULL;
    EventCallback onLongPressCb = NULL;
    EventCallback onReleaseCb = NULL;
    
    Button(int pin, int mode = INPUT, int active = HIGH) ;
    ~Button() ;

    void begin() ;
    void onClick(EventCallback cb) ;
    void onPress(EventCallback cb) ;
    void onLongPress(EventCallback cb) ;
    void onRelease(EventCallback cb) ;

    bool isPress() ;
    
}
;

#endif
