# LabMate Secure Rover - 90-Second Technical Demo Video Script

**ชื่อคลิป:** LabMate Secure Rover - Software-in-the-Loop Simulation Demo  
**ความยาว:** 60 – 90 วินาที  
**ผู้ดำเนินบทบาท:** Presenter / Technical Demo Coach  

---

## Timeline สคริปต์วิดีโอ (60-90 วินาที)

### [0:00 - 0:15] ช่วงที่ 1: Introduction & Product Positioning
- **หน้าจอ:** เปิด `index.html` ชี้ป้าย **"Software-in-the-Loop Simulation"** และ Device ID: `labmate-01`
- **บทพูด (Voiceover):**  
  > "สวัสดีครับ นี่คือระบบ Software-in-the-Loop Simulation ของ **LabMate Secure Rover** หุ่นยนต์ขนส่งครุภัณฑ์และเอกสารสำคัญภายในมหาวิทยาลัยที่เน้นระบบ **Secure Chain of Custody** แม้วันนี้เรายังอยู่ในขั้นตอนจำลองสัญญาณเซนเซอร์ แต่ Data Schema และ State Machine ทั้งหมดเขียนรองรับการเชื่อมต่อบอร์ด PSoC Edge E84 AI Kit และ TESAIoT Platform 100% ครับ"

---

### [0:15 - 0:35] ช่วงที่ 2: Mission Creation & Sender Authentication
- **หน้าจอ:** กดปุ่ม "Load Preset Equipment", กด "สร้างภารกิจ", แสดง Mission ID `MIS-20260802-001`, แล้วกด "Authenticate Sender"
- **บทพูด (Voiceover):**  
  > "เริ่มต้น ผู้ส่งกรอกรายละเอียดอุปกรณ์และจุดหมาย จากนั้นสแกน QR เพื่อยืนยันตัวตนผู้ส่ง ระบบจะทำการปลดล็อกกล่อง บันทึก Event สู่ Chain-of-Custody Timeline ทันที เมื่อใส่ของเรียบร้อย ปิดและล็อกกล่อง หุ่นยนต์จะเริ่มเดินทางในสถานะ **IN_TRANSIT** ครับ"

---

### [0:35 - 0:60] ช่วงที่ 3: Real-time Telemetry & Anomaly Detection (Impact & Door Open)
- **หน้าจอ:** ค่าเซนเซอร์ขยับ Real-time -> กดปุ่ม **"Impact Detected"** (เห็น Peak G เด้ง 3.4g, การ์ดขึ้นเตือนสีแดง ALERT) -> กด **"Reset Alert"** -> กด **"Unauthorized Door Open"**
- **บทพูด (Voiceover):**  
  > "ระหว่างเดินทาง ระบบสตรีมข้อมูล IMU, ความเอียง, อุณหภูมิ และความชื้นแบบ Real-time หากเกิดเหตุไม่คาดคิด เช่น แรงกระแทกเกิน 2.5g หรือมีการเปิดกล่องผิดเวลาระหว่างเดินทาง ระบบ Edge Rule จะสลับสู่สถานะ **ALERT** แจ้งเตือนสีแดง และบันทึก Log ความรุนแรงแบบ CRITICAL ทันที"

---

### [0:60 - 0:80] ช่วงที่ 4: Arrival & Receiver Authentication
- **หน้าจอ:** กด "ถึงจุดหมาย (Arrived)" -> กด "Authenticate Receiver" -> กด "เสร็จสิ้นภารกิจ" (State -> COMPLETED สีเขียว)
- **บทพูด (Voiceover):**  
  > "เมื่อถึงจุดหมาย หุ่นยนต์เข้าสู่สถานะ **ARRIVED** ผู้รับต้องยืนยันตัวตนผ่าน QR ประตูจึงจะปลดล็อกให้รับของ และเปลี่ยนสถานะเป็น **COMPLETED** อย่างปลอดภัย"

---

### [0:80 - 0:90] ช่วงที่ 5: Audit Trail Export & Conclusion
- **หน้าจอ:** กดปุ่ม **"Export Mission Log"** (แสดงไฟล์ JSON ที่โหลดมา) และชี้ Panel TESAIoT Architecture Plan
- **บทพูด (Voiceover):**  
  > "สุดท้าย เราสามารถ Export Audit Trail Log เป็น JSON เพื่อใช้ตรวจสอบย้อนหลังได้ 100% และพร้อมยกระดับสู่บอร์ด PSoC Edge E84 AI Kit และ MQTT Over TLS ในรอบถัดไป ขอบคุณครับ!"
