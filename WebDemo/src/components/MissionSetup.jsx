import React, { useState } from 'react';
import { Package, PlusCircle } from 'lucide-react';

export default function MissionSetup({ onCreateMission, showToast }) {
  const [sender, setSender] = useState('ดร.สมชาย (ผู้ดูแล Lab)');
  const [receiver, setReceiver] = useState('ศ.ดร.อนันต์ (อาจารย์ที่ปรึกษา)');
  const [packageName, setPackageName] = useState('Laboratory Equipment (LAB-042)');
  const [destination, setDestination] = useState('Engineering Laboratory 402');

  const handlePreset = (id) => {
    if (id === 1) {
      setSender('ดร.สมชาย (ผู้ดูแล Lab)');
      setReceiver('ศ.ดร.อนันต์ (อาจารย์ที่ปรึกษา)');
      setPackageName('Laboratory Equipment (LAB-042)');
      setDestination('Engineering Laboratory 402');
    } else {
      setSender('ดร.นิภา (นักวิจัย)');
      setReceiver('ศูนย์ตรวจวิเคราะห์จุลชีววิทยา');
      setPackageName('ตัวอย่างสารชีวเคมี (BIO-SAMP-09)');
      setDestination('Bio-Safety Level 3 Lab');
    }
    showToast('โหลดข้อมูลตัวอย่างเรียบร้อย');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateMission({ sender, receiver, packageName, destination });
  };

  return (
    <div className="bg-slate-900/75 backdrop-blur-md border border-slate-800 rounded-2xl p-5 shadow-lg">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
        <h2 className="text-base font-semibold text-slate-100 flex items-center gap-2">
          <Package className="w-4 h-4 text-blue-400" />
          ตั้งค่าภารกิจ (Mission Setup)
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-4">
        <button
          type="button"
          onClick={() => handlePreset(1)}
          className="bg-slate-800/60 hover:bg-slate-800 text-slate-300 text-xs py-1.5 px-2 rounded-lg border border-slate-700 transition"
        >
          อุปกรณ์ Lab-042
        </button>
        <button
          type="button"
          onClick={() => handlePreset(2)}
          className="bg-slate-800/60 hover:bg-slate-800 text-slate-300 text-xs py-1.5 px-2 rounded-lg border border-slate-700 transition"
        >
          สารเคมีทดลอง
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
            ผู้ส่ง (Sender)
          </label>
          <input
            type="text"
            value={sender}
            onChange={(e) => setSender(e.target.value)}
            className="w-full bg-slate-950/60 border border-slate-700/80 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-blue-500 transition"
            required
          />
        </div>

        <div>
          <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
            ผู้รับ (Receiver)
          </label>
          <input
            type="text"
            value={receiver}
            onChange={(e) => setReceiver(e.target.value)}
            className="w-full bg-slate-950/60 border border-slate-700/80 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-blue-500 transition"
            required
          />
        </div>

        <div>
          <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
            รายการทรัพย์สิน/เอกสาร
          </label>
          <input
            type="text"
            value={packageName}
            onChange={(e) => setPackageName(e.target.value)}
            className="w-full bg-slate-950/60 border border-slate-700/80 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-blue-500 transition"
            required
          />
        </div>

        <div>
          <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
            จุดหมายปลายทาง
          </label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full bg-slate-950/60 border border-slate-700/80 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-blue-500 transition"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full mt-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-2.5 px-4 rounded-lg shadow-md shadow-blue-500/20 text-sm flex items-center justify-center gap-2 transition"
        >
          <PlusCircle className="w-4 h-4" />
          สร้างภารกิจ (Create Mission)
        </button>
      </form>
    </div>
  );
}
