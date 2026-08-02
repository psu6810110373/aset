import React from 'react';
import { Activity } from 'lucide-react';

export default function StateBanner({ state }) {
  const getBannerStyle = (currentState) => {
    switch (currentState) {
      case 'ALERT':
        return 'bg-red-500/15 border-red-500/50 text-red-300';
      case 'COMPLETED':
        return 'bg-emerald-500/15 border-emerald-500/50 text-emerald-300';
      case 'IN_TRANSIT':
        return 'bg-blue-500/15 border-blue-500/50 text-blue-300';
      case 'ARRIVED':
        return 'bg-amber-500/15 border-amber-500/50 text-amber-300';
      default:
        return 'bg-slate-800/80 border-slate-700 text-slate-300';
    }
  };

  const getIndicatorStyle = (currentState) => {
    switch (currentState) {
      case 'ALERT':
        return 'bg-red-500 shadow-lg shadow-red-500/80 animate-pulse';
      case 'COMPLETED':
        return 'bg-emerald-500 shadow-lg shadow-emerald-500/80';
      case 'IN_TRANSIT':
        return 'bg-blue-500 shadow-lg shadow-blue-500/80 animate-pulse';
      default:
        return 'bg-slate-400';
    }
  };

  return (
    <div className={`border rounded-xl p-4 flex items-center justify-between transition-colors ${getBannerStyle(state.state)}`}>
      <div className="flex items-center gap-3">
        <div className={`w-3.5 h-3.5 rounded-full ${getIndicatorStyle(state.state)}`} />
        <div>
          <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-medium">
            สถานะปัจจุบัน (Current Mission State)
          </span>
          <span className="font-mono font-bold text-lg tracking-wide">
            {state.state}
          </span>
        </div>
      </div>

      <div className="text-right">
        <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-medium">
          Mission Identifier
        </span>
        <span className="font-mono font-semibold text-sm text-blue-400 flex items-center gap-1 justify-end">
          <Activity className="w-3.5 h-3.5" />
          {state.mission_id}
        </span>
      </div>
    </div>
  );
}
