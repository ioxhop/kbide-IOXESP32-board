#ifndef __IOXESP32_BATTERY__
#define __IOXESP32_BATTERY__

#include "Arduino.h"
#include <Wire.h>

class IOXESP32Battery {
    public:
        void begin() ;

        float volt() ; // Read battery voltage
        int level() ;  // Read battery level in percent

};

extern IOXESP32Battery Battery;

#endif