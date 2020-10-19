# IOXESP32DotMatrix

ไลบารี่สำหรับ IOXESP32 DotMatrix shield แสดงผลตัวเลขและตัวอักษรและรูปภาพบน Dot Matrix

> สั่งซื้อ IOXESP32 DotMatrix shield ได้ที่ https://www.ioxhop.com/p/1080

## โค้ดโปรแกรมตัวอย่าง

โค้ดโปรแกรมแสดงตัวเลข 2 หลัก

````c++
#include <IOXESP32DotMatrix.h>

void setup() {
    Display.begin(); // สั่งให้ Dot Matrix เริ่มทำงาน
}

void loop() {
    Display.show(String(12)); // แสดงตัวเลข 12 บน Dot Matrix
    delay(100);
}
````

โค้ดโปรแกรมแสดงข้อความแบบวิ่ง

````c++
#include <IOXESP32DotMatrix.h>

void setup() {
  Display.begin(); // สั่งให้ Dot Matrix เริ่มทำงาน
}

void loop() {
  Display.scroll("IOXESP32 DotMatrix shield"); // แสดงข้อความ IOXESP32 DotMatrix shield แบบเลื่อน
  delay(100);
}
````
