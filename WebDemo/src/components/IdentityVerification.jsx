import React from 'react';
import { QrCode, UserCheck, KeyRound, Lock } from 'lucide-react';

export default function IdentityVerification({
  state,
  onAuthSender,
  onAuthReceiver,
  onLockAndTransit
}) {
  const isSenderAuthEnabled = state.state === 'IDLE' || (state.state === 'LOADING' && state.door_state === 'OPEN');
  const isReceiverAuthEnabled = state.state === 'ARRIVED' || state.state === 'AWAITING_RECEIVER';

  return (
    <div className="bg-white border border-[#e2e8f0] rounded-2xl p-6 shadow-clinical flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
          <h2 className="text-base font-semibold font-display text-[#0c2b4e] flex items-center gap-2">
            <QrCode className="w-4 h-4 text-[#1d546c]" />
            การยืนยันตัวตน (QR Verification)
          </h2>
        </div>

        <div className="flex flex-col items-center text-center gap-3">
          <div className="bg-white p-3 rounded-xl shadow-clinical inline-block border border-slate-200">
            <svg width="120" height="120" viewBox="0 0 29 29" className="block">
              <rect width="29" height="29" fill="#ffffff" />
              <rect x="2" y="2" width="7" height="7" fill="#0c2b4e" /><rect x="3" y="3" width="5" height="5" fill="#ffffff" /><rect x="4" y="4" width="3" height="3" fill="#0c2b4e" />
              <rect x="20" y="2" width="7" height="7" fill="#0c2b4e" /><rect x="21" y="3" width="5" height="5" fill="#ffffff" /><rect x="22" y="4" width="3" height="3" fill="#0c2b4e" />
              <rect x="2" y="20" width="7" height="7" fill="#0c2b4e" /><rect x="3" y="21" width="5" height="5" fill="#ffffff" /><rect x="4" y="22" width="3" height="3" fill="#0c2b4e" />
              <rect x="10" y="3" width="2" height="2" fill="#0c2b4e" /><rect x="14" y="2" width="3" height="2" fill="#0c2b4e" /><rect x="11" y="6" width="3" height="3" fill="#0c2b4e" />
              <rect x="3" y="10" width="2" height="4" fill="#0c2b4e" /><rect x="7" y="12" width="2" height="2" fill="#0c2b4e" /><rect x="10" y="10" width="4" height="4" fill="#0c2b4e" />
              <rect x="16" y="11" width="3" height="3" fill="#0c2b4e" /><rect x="21" y="10" width="4" height="2" fill="#0c2b4e" /><rect x="20" y="14" width="2" height="4" fill="#0c2b4e" />
              <rect x="12" y="16" width="3" height="3" fill="#0c2b4e" /><rect x="16" y="17" width="4" height="2" fill="#0c2b4e" /><rect x="10" y="21" width="4" height="2" fill="#0c2b4e" />
              <rect x="15" y="22" width="3" height="4" fill="#0c2b4e" /><rect x="22" y="20" width="4" height="4" fill="#0c2b4e" />
            </svg>
          </div>

          <div className="text-xs text-[#43474e] font-mono break-all bg-[#f4f4f4] p-2.5 rounded-xl border border-[#e2e8f0] w-full">
            <span className="text-[#74777f] block text-[10px] uppercase font-sans font-semibold">Encrypted Identity Token</span>
            <span className="text-[#0c2b4e] font-semibold">device_id=labmate-01&mission_id={state.mission_id}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-4">
        {state.state === 'LOADING' && state.door_state === 'OPEN' ? (
          <button
            onClick={onLockAndTransit}
            className="col-span-2 bg-[#059669] hover:bg-[#047857] text-white text-xs font-semibold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition shadow-clinical"
          >
            <Lock className="w-3.5 h-3.5" />
            ปิดฝากล่อง & ล็อกเพื่อเริ่มส่ง
          </button>
        ) : (
          <button
            disabled={!isSenderAuthEnabled}
            onClick={onAuthSender}
            className="bg-[#f4f4f4] hover:bg-[#e8e8e8] disabled:opacity-40 text-[#0c2b4e] text-xs font-semibold py-2.5 px-3 rounded-xl border border-[#c4c6cf] flex items-center justify-center gap-1.5 transition"
          >
            <UserCheck className="w-3.5 h-3.5 text-[#1d546c]" />
            ยืนยันผู้ส่ง
          </button>
        )}

        <button
          disabled={!isReceiverAuthEnabled}
          onClick={onAuthReceiver}
          className="bg-[#f4f4f4] hover:bg-[#e8e8e8] disabled:opacity-40 text-[#0c2b4e] text-xs font-semibold py-2.5 px-3 rounded-xl border border-[#c4c6cf] flex items-center justify-center gap-1.5 transition"
        >
          <KeyRound className="w-3.5 h-3.5 text-[#059669]" />
          ยืนยันผู้รับ
        </button>
      </div>
    </div>
  );
}
