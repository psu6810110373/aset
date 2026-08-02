# Test Plan & Verification Guide (ACCEPTANCE TEST PASS-THROUGH)

แผนการทดสอบระบบ Software-in-the-Loop Simulation สำหรับ LabMate Secure Rover

---

## 1. Test Matrix & Execution Steps

| Step | Case / Action | Expected Result | Pass Criteria |
|:---:|:---|:---|:---:|
| **01** | เปิดไฟล์ `index.html` บน Web Browser | แสดงผลหน้า Web App โดยมี Badge "Software-in-the-Loop Simulation" ชัดเจน | ไม่มี JavaScript Error ใน Console |
| **02** | ตรวจสอบสถานะเริ่มต้น (Initial State) | State = `IDLE`, Telemetry อัปเดตทุก 1 วินาที, Connection = ONLINE | Card สตรีมข้อมูลต่อเนื่อง |
| **03** | กรอกข้อมูลและกด **"สร้างภารกิจ (Create Mission)"** | สร้าง Mission ID อัตโนมัติ (เช่น MIS-20260802-001) และเปลี่ยนสถานะเป็น `IDLE` | มี Event `MISSION_CREATED` บน Timeline |
| **04** | กด **"Authenticate Sender"** | ผู้ส่งยืนยันตัวตนสำเร็จ เปลี่ยนสถานะเป็น `LOADING`, ฝากล่องปลดล็อก | มี Event `SENDER_AUTHENTICATED` สีเขียว |
| **05** | กด **"ปิดฝาและล็อกกล่อง"** | สถานะเปลี่ยนเป็น `LOCKED` ฝากล่อง CLOSED, ตัวล็อก LOCKED | มี Event `DOOR_LOCKED` บน Timeline |
| **06** | กด **"เริ่มออกเดินทาง (Start Transit)"** | สถานะเปลี่ยนเป็น `IN_TRANSIT`, Rover Simulator จำลองการเคลื่อนที่ | มี Event `TRANSIT_STARTED` |
| **07** | กดปุ่ม **"Impact Detected"** | เกิดแรงกระแทก peak_g > 2.5g, สถานะเปลี่ยนเป็น `ALERT` (CRITICAL) | Card แสดงสีแดง, Timeline บันทึกสีแดง |
| **08** | กดปุ่ม **"Reset Alert"** | ปลดสถานะเตือน ระบบกลับสู่ `IN_TRANSIT` หรือสถานะเดิม | Timeline บันทึกการ Reset Alert |
| **09** | กดปุ่ม **"Unauthorized Door Open"** | ฝากล่องเปิดขณะ `IN_TRANSIT`, เกิดแจ้งเตือน `UNAUTHORIZED_OPEN` | สถานะเปลี่ยนเป็น `ALERT` สีแดง |
| **10** | กดปุ่ม **"ถึงจุดหมาย (Arrived)"** | สถานะเปลี่ยนเป็น `ARRIVED` / `AWAITING_RECEIVER` | ปุ่ม Authenticate Receiver เปิดใช้งาน |
| **11** | กด **"Authenticate Receiver"** | ผู้รับยืนยันตัวตนสำเร็จ ฝากล่องปลดล็อก | มี Event `RECEIVER_AUTHENTICATED` |
| **12** | กด **"เสร็จสิ้นภารกิจ (Complete Mission)"** | สถานะเปลี่ยนเป็น `COMPLETED`, บันทึก Chain of Custody สมบูรณ์ | ทุก Workflow ผ่าน 100% |
| **13** | กด **"Export Mission Log (JSON)"** | ดาวน์โหลดไฟล์ `.json` ที่มีข้อมูล Telemetry Snapshot และ Events ทั้งหมด | โครงสร้าง JSON ถูกต้องตาม `DATA_SCHEMA.json` |
| **14** | กด **"Reset Demo"** | ระบบรีเซ็ตกลับสู่สถานะตั้งต้นพร้อมทำ Demo รอบถัดไป | ทำซ้ำได้ >= 5 รอบโดยไม่ต้อง Reload หน้าเว็บ |

---

## 2. Repeated Demo Stability Test
- ทดสอบดำเนินกระบวนการตั้งแต่ข้อ 3 ถึง 14 ต่อเนื่องกันอย่างน้อย **5 รอบ** ใน Tab เดียวกัน
- ตรวจสอบ memory leak และ timing event interval ว่ายังทำงานได้แม่นยำ 1.0s ตลอดเวลา
