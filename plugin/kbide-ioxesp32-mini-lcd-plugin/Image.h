#include "Arduino.h"

struct tft_image {
    uint16_t width;
    uint16_t height;
    std::vector<uint16_t> data;
};
