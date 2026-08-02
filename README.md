# LabMate Secure Rover - Software-in-the-Loop Simulation Demo

เอกสารประกอบการใช้งานและทดสอบระบบจำลอง **LabMate Secure Rover (Software-in-the-Loop Simulation)** สำหรับงานแข่ง TESAIoT Secure Edge AI Hackathon 2026

---

## 1. วัตถุประสงค์และข้อตกลงเบื้องต้น (Assumptions & Calibration Notice)

> [!IMPORTANT]
> **ข้อตกลงเรื่องข้อมูลจำลอง (Simulation & Calibration Assumptions):**
> 1. **การจำลองระดับ Software (SIL):** เนื่องจากในรอบนี้ทีมผู้พัฒนาอยู่ในขั้นตอนเตรียมฮาร์ดแวร์ ข้อมูลสัญญาณเซนเซอร์และสถานะการทำงานทั้งหมดในหน้านี้เป็นข้อมูลจำลองผ่าน **Software-in-the-Loop (SIL)**
> 2. **การปรับแต่งเกณฑ์ตรวจจับ (Prototype Threshold Assumption):** Threshold สัญญาณเตือนที่ใช้ใน Prototype ได้แก่:
>    - `peak_g > 2.5g` &rarr; ตรวจพบแรงกระแทก (`IMPACT_DETECTED`)
>    - `tilt_deg > 35.0°` &rarr; ตรวจพบการเอียงผิดปกติ (`EXCESSIVE_TILT`)
>    - `door_state == OPEN` ขณะ `IN_TRANSIT` &rarr; แอบเปิดกล่อง (`UNAUTHORIZED_OPEN`)
>    - `temperature_c > 30.0°C` &rarr; อุณหภูมิสูงเกินเกณฑ์ (`TEMPERATURE_HIGH`)
>    - `humidity_rh > 70.0%` &rarr; ความชื้นสูงเกินเกณฑ์ (`HUMIDITY_HIGH`)
>    
>    *ค่าเหล่านี้เป็นสมมติฐานสำหรับ Prototype และต้องได้รับการ Calibrate ร่วมกับข้อมูลจริงจากเซนเซอร์ BMI270 และฮาร์ดแวร์จริงบนบอร์ด PSoC Edge E84 AI Kit ในรอบถัดไป*
> 3. **ไม่มี Credential ใน Source Code:** หน้า Web Demo ไม่มี Secret, API Key, รหัสผ่าน หรือ SSL Certificate ฝังอยู่ และ QR Code มีเพียง Device Identifiers (`device_id=labmate-01`) เท่านั้น

---

## 2. โครงสร้างไฟล์ทั้งหมดในโฟลเดอร์ (Deliverables Summary)

* `index.html` - Web Demo แบบ Single-file SPA รันได้ทันทีโดยไม่ต้องผ่าน Build Tool หรือ CDN
* `README.md` - เอกสารอธิบายการใช้งาน การ Calibrate และโครงสร้างโครงการ (ไฟล์นี้)
* `sample_telemetry.json` - ข้อมูลตัวอย่าง Snapshot Telemetry ตามมาตรฐาน `DATA_SCHEMA.json`
* `sample_events.json` - ข้อมูลตัวอย่าง Event Log ตามมาตรฐาน Secure Chain of Custody
* `architecture.md` - เอกสารสถาปัตยกรรมระบบ พร้อม Mermaid Diagram และ MQTT Topic Hierarchy
* `TEST_PLAN.md` - แผนการทดสอบระบบ (Acceptance Test Steps)
* `DEMO_SCRIPT.md` - สคริปต์บรรยายวิดีโอสาธิต 60–90 วินาที
* `CAPTURE_LIST.md` - รายการภาพ Screenshot 5 ภาพสำหรับนำไปประกอบในเล่ม Proposal

---

## 3. วิธีการเปิดใช้งาน (Quick Start Guide)

1. เปิดไฟล์ [index.html](file:///D:/Sittinon/Coding%202nd%20year/TESAiot/Myproject/LabMate_Person3_SourcePack/index.html) ผ่าน Web Browser เช่น Google Chrome, Edge หรือ Firefox
2. หน้าจอแสดง Badge **"Software-in-the-Loop Simulation"** สีเหลืองอย่างชัดเจน
3. กดปุ่ม **"สร้างภารกิจ (Create Mission)"** เพื่อเริ่มต้นกระบวนการส่งมอบครุภัณฑ์
4. ทดสอบกระบวนการทั้งหมดตาม State Machine:
   `IDLE` &rarr; ยืนยันผู้ส่ง &rarr; `LOADING` &rarr; ปิดและล็อกกล่อง &rarr; `IN_TRANSIT` &rarr; `ARRIVED` &rarr; ยืนยันผู้รับ &rarr; `COMPLETED`
5. ทดลองกดปุ่มจำลองเซนเซอร์ในส่วน **Event Simulation Controls** เช่น **Impact Detected**, **Door Open**, **Temp High** เพื่อทดสอบ Edge Anomaly Rules และ Event Timeline
6. กดปุ่ม **Export Mission Log (JSON)** เพื่อดาวน์โหลดไฟล์ Log สรุปผลภารกิจ

---

## 4. แผนการเชื่อมต่อบอร์ด PSoC Edge E84 AI Kit ในอนาคต

เมื่อได้รับบอร์ด **Infineon PSoC Edge E84 AI Kit**:
- ข้อมูลจำลองจาก JS Simulator จะถูกแทนที่ด้วยข้อมูลจาก **BMI270 IMU** และเซนเซอร์สภาพแวดล้อมจริง
- รับส่งข้อมูลผ่านโปรโตคอล **MQTT over Server-TLS** ไปยัง TESAIoT Platform
- หัวข้อ MQTT ที่ใช้:
  - Telemetry: `device/{DEVICE_ID}/telemetry`
  - Raw Sensors: `device/{DEVICE_ID}/telemetry/sensor`
  - Control Commands: `device/{DEVICE_ID}/commands/#`
- ยกระดับระบบความปลอดภัยสู่ Hardware Root of Trust ด้วยชิป **OPTIGA™ Trust M** และ **mTLS**
