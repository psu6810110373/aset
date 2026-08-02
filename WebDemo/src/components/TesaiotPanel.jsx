import React from 'react';
import { Server } from 'lucide-react';

export default function TesaiotPanel() {
  return (
    <div className="bg-slate-900/60 border border-blue-500/30 border-dashed rounded-2xl p-4 text-xs leading-relaxed text-slate-300">
      <div className="font-semibold text-slate-100 mb-2 flex items-center gap-2 text-sm">
        <Server className="w-4 h-4 text-blue-400" />
        แผนการเชื่อมต่อบอร์ดจริง TESAIoT (PSoC Edge E84 Integration Plan)
      </div>

      <div className="space-y-1.5">
        <div>
          <strong className="text-slate-200">Hardware Flow:</strong> PSoC Edge E84 AI Kit &rarr; Sensor Data Processing &rarr; MQTT over Server-TLS &rarr; TESAIoT Platform &rarr; App Dashboard / Supabase DB
        </div>

        <div>
          <strong className="text-slate-200">MQTT Topic Hierarchy:</strong>
          <div className="flex flex-wrap gap-1.5 mt-1 font-mono text-[11px]">
            <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-800 text-blue-400">
              device/labmate-01/telemetry
            </span>
            <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-800 text-blue-400">
              device/labmate-01/telemetry/sensor
            </span>
            <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-800 text-blue-400">
              device/labmate-01/commands/#
            </span>
          </div>
        </div>

        <div className="text-[11px] text-slate-400 pt-1">
          * Current Demo: React + Supabase SIL Simulator | Phase 1: MQTT QoS 1 + Server-TLS | Phase 2: mTLS + OPTIGA™ Trust M Root of Trust
        </div>
      </div>
    </div>
  );
}
