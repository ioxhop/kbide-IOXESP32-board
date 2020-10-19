#include<IOXESP32_4Digit.h>

void setup() {
  Display.begin(); // สั่งให้ IOXESP32 4-Digit shield เริ่มทำงาน
}

void loop() {
  unsigned int min = millis() / 1000 / 60; // แปลงค่าเวลาเป็นหน่วยนาที
  unsigned int sec = millis() / 1000 % 60; // แปลงค่าเวลาเป็นหน่วยวินาที
  Display.showTime(min, sec, true); // แสดงค่าเวลา 2 หลักแรกจากตัวแปร min, แสดงค่าเวลา 2 หลักหลังจากตัวแปร sec
  delay(500);
  Display.showTime(min, sec, false); // แสดงค่าเวลา 2 หลักแรกจากตัวแปร min, แสดงค่าเวลา 2 หลักหลังจากตัวแปร sec
  delay(500);
}
