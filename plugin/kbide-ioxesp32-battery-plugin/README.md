# IOXESP32Battery

ไลบารี่สำหรับ IOXESP32 Battery shield อ่านค่าแรงดันไฟฟ้าและระดับพลังงานของแบตเตอรี่ อ่านเอกสารการใช้งานโดยละเอียดได้ที่ ...

> สั่งซื้อ IOXESP32 Battery shield ได้ที่ 

## โค้ดโปรแกรมตัวอย่าง

โค้ดโปรแกรมอ่านค่าระดับแบตเตอรี่ แสดงผลใน Serial Monotor (อ่านค่าได้ 100% เสมอขณะชาร์จ)

````c++
#include<IOXESP32Battery.h>

void setup() {
  Serial.begin(115200);

  Battery.begin();
}

void loop() {
  Serial.print(Battery.level());
  Serial.print("%");
  Serial.println();
  delay(500);
}
````

โค้ดโปรแกรมอ่านแรงดันไฟฟ้าของแบตเตอรี่ แสดงผลใน Serial Monotor

````c++
#include<IOXESP32Battery.h>

void setup() {
  Serial.begin(115200);

  Battery.begin();
}

void loop() {
  Serial.print(Battery.volt());
  Serial.print("V");
  Serial.println();
  delay(500);
}
````

