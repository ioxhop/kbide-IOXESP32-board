#include<IOXESP32_4Digit.h>

void setup() {
  Display.begin(); // สั่งให้ IOXESP32 4-Digit shield เริ่มทำงาน
}

void loop() {
  Display.showCelcius(12.1, 1); // แสดงค่าอุณหภูมิหน่วยองศาเซลเซียส ทศนิยม 1 ตำแหน่ง
  delay(500);
}
