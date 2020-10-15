#include "IOXESP32Battery.h"

#define MCP3421_ADDR 0x68

void IOXESP32Battery::begin() {
    Wire.begin();

    // Config bit
    Wire.beginTransmission(MCP3421_ADDR);
    Wire.write(0x9C); // Continuous Conversion Mode, 18bit, 1V/V
    Wire.endTransmission();
}

float IOXESP32Battery::volt() {
    int n = Wire.requestFrom(MCP3421_ADDR, 3);
    if (n != 3) {
        return -1;
    }
    uint32_t value = 0;
    value |= ((uint32_t)Wire.read() & 0x03) << 16;
    value |= (uint32_t)Wire.read() << 8;
    value |= (uint32_t)Wire.read();
    return value / 131071.0 * 4.5;
}

int IOXESP32Battery::level() {
    float volt = this->volt();
    float level = (volt - 3.0) / (4.0 - 3.0) * 100.0;
    level = constrain(level, 0, 100);
    return level;
}

IOXESP32Battery Battery;
