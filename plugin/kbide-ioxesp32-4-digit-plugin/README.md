# IOXESP32_4Digit

ไลบารี่สำหรับ IOXESP32 4-Digit shield แสดงผลตัวเลขและตัวอักษรบน 7 Segment 4 หลัก

> สั่งซื้อ IOXESP32 4-Digit shield ได้ที่ https://www.ioxhop.com/p/1079

## โค้ดโปรแกรมตัวอย่าง

โค้ดโปรแกรมแสดงค่าตัวเลข

````c++
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
````

โค้ดโปรแกรมแสดงค่าอุณหภูมิ

````c++
#include<IOXESP32_4Digit.h>

void setup() {
  Display.begin(); // สั่งให้ IOXESP32 4-Digit shield เริ่มทำงาน
}

void loop() {
  Display.showCelcius(12.1, 1); // แสดงค่าอุณหภูมิหน่วยองศาเซลเซียส ทศนิยม 1 ตำแหน่ง
  delay(500);
}
````

โค้ดโปรแกรมแสดงเวลาตั้งแต่เปิดบอร์ดในรูปแบบ นาที:วินาที

````c++
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
````
