#ifndef __IOXESP32_DOT_MATRIX_H__
#define __IOXESP32_DOT_MATRIX_H__

#include "Arduino.h"
#include <Wire.h>
#include <stdio.h>
#include <string.h>

class IOXESP32DotMatrix {
  private:
    int write(uint8_t cmd) ;
    int write_bytes(uint8_t *buff, int n) ;
    
  public:
    IOXESP32DotMatrix() ;
    
    void begin() ;
    void setBrightness(int b) ;
    void blinkRate(int b) ;
    void clear() ;
    void raw(uint8_t *buf) ;
    void show(String text) ;
    void scroll(String text, int speed=60) ;
    
};

extern IOXESP32DotMatrix Display;

#endif
