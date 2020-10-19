#include<IOXESP32_4Digit.h>

void setup() {
  Display.begin(); // สั่งให้ IOXESP32 4-Digit shield เริ่มทำงาน
}

void loop() {
  Display.print(1234); // แสดงผลตัวเลข 1234
  delay(500);
  Display.print(12.5, 1); // แสดงผลตัวเลข 12.5 ทศนิยม 1 ตำแหน่ง
  delay(500);
  int rand = random(-999, 9999); // สุ่มตัวเลข -999 ถึง 9999 แล้วเก็บลงตัวแปร rand
  Display.print(rand); // แสดงผลตัวเลขจากตัวแปร rand
  delay(500);
}
