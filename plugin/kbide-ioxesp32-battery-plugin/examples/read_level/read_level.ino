#include<IOXESP32Battery.h>

void setup() {
  Serial.begin(115200);

  Battery.begin();
}

void loop() {
  Serial.print(Battery.level()); // Read battery level
  Serial.print("%");
  Serial.println();
  delay(500);
}
