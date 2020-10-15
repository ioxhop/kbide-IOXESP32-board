#include<IOXESP32Battery.h>

void setup() {
  Serial.begin(115200);

  Battery.begin();
}

void loop() {
  Serial.print(Battery.volt()); // Read battery volt
  Serial.print("V");
  Serial.println();
  delay(500);
}
