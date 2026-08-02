import React from 'react';
import { History, ShieldAlert, CheckCircle2, Info, AlertTriangle } from 'lucide-react';

export default function ChainOfCustodyTimeline({ events }) {
  const getSeverityStyle = (severity) => {
    switch (severity) {
      case 'CRITICAL':
        return 'border-l-red-500 text-red-400 bg-red-950/10';
      case 'WARNING':
        return 'border-l-amber-500 text-amber-400 bg-amber-950/10';
      case 'SUCCESS':
        return 'border-l-emerald-500 text-emerald-400 bg-emerald-950/10';
      default:
        return 'border-l-blue-500 text-blue-400 bg-slate-950/40';
    }
  };

  const getSeverityIcon = (severity) => {
    switch (severity) {
      case 'CRITICAL':
        return <ShieldAlert className="w-3.5 h-3.5 text-red-400" />;
      case 'WARNING':
        return <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />;
      case 'SUCCESS':
        return <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />;
      default:
        return <Info className="w-3.5 h-3.5 text-blue-400" />;
    }
  };

  return (
    <div className="bg-slate-900/75 backdrop-blur-md border border-slate-800 rounded-2xl p-5 shadow-lg">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
        <h2 className="text-base font-semibold text-slate-100 flex items-center gap-2">
          <History className="w-4 h-4 text-blue-400" />
          Secure Chain-of-Custody Timeline
        </h2>
        <span className="text-xs text-slate-400 font-mono bg-slate-800 px-2.5 py-1 rounded-md">
          {events.length} Events Logged
        </span>
      </div>

      <div className="max-h-80 overflow-y-auto pr-1 space-y-2.5 scrollbar-thin scrollbar-thumb-slate-700">
        {events.length === 0 ? (
          <div className="text-center py-6 text-slate-500 text-sm">
            ยังไม่มีรายการ Event บันทึกไว้
          </div>
        ) : (
          events.map((evt) => (
            <div
              key={evt.event_id || evt.timestamp}
              className={`border-l-4 rounded-r-lg p-3 border-y border-r border-slate-800/80 ${getSeverityStyle(evt.severity)}`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-xs font-bold flex items-center gap-1.5">
                  {getSeverityIcon(evt.severity)}
                  [{evt.severity}] {evt.event_type}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  {new Date(evt.timestamp).toLocaleTimeString()}
                </span>
              </div>
              <div className="text-[11px] text-blue-300 font-medium mb-1">
                Source: {evt.actor} | ID: {evt.event_id}
              </div>
              <div className="text-xs text-slate-200">
                {evt.description}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
