#include <IOXESP32DotMatrix.h>

void setup() {
    Display.begin(); // สั่งให้ Dot Matrix เริ่มทำงาน
}

void loop() {
    Display.show(String(12)); // แสดงตัวเลข 12 บน Dot Matrix
    delay(100);
}