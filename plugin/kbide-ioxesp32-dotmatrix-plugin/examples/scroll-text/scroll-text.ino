#include <IOXESP32DotMatrix.h>

void setup() {
  Display.begin(); // สั่งให้ Dot Matrix เริ่มทำงาน
}

void loop() {
  Display.scroll("IOXESP32 DotMatrix shield"); // แสดงข้อความ IOXESP32 DotMatrix shield แบบเลื่อน
  delay(100);
}
