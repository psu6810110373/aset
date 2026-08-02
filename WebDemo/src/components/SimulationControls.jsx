import React from 'react';
import { Sliders, AlertTriangle, RotateCcw, CheckCircle, Navigation } from 'lucide-react';

export default function SimulationControls({
  onSimNormal,
  onSimImpact,
  onSimDoorOpen,
  onSimHighTemp,
  onSimTilt,
  onSimArrived,
  onResetAlert,
  onCompleteMission
}) {
  return (
    <div className="bg-slate-900/75 backdrop-blur-md border border-slate-800 rounded-2xl p-5 shadow-lg">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
        <h2 className="text-base font-semibold text-slate-100 flex items-center gap-2">
          <Sliders className="w-4 h-4 text-blue-400" />
          จำลองเหตุการณ์เซนเซอร์ (Event Simulation Controls)
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        <button
          onClick={onSimNormal}
          className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold py-2 px-3 rounded-lg border border-slate-700 transition"
        >
          Normal Motion
        </button>

        <button
          onClick={onSimImpact}
          className="bg-red-500/20 hover:bg-red-500/30 text-red-300 text-xs font-semibold py-2 px-3 rounded-lg border border-red-500/40 flex items-center justify-center gap-1.5 transition"
        >
          <AlertTriangle className="w-3.5 h-3.5" />
          Impact (3.4g)
        </button>

        <button
          onClick={onSimDoorOpen}
          className="bg-red-500/20 hover:bg-red-500/30 text-red-300 text-xs font-semibold py-2 px-3 rounded-lg border border-red-500/40 transition"
        >
          Door Open
        </button>

        <button
          onClick={onSimHighTemp}
          className="bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-semibold py-2 px-3 rounded-lg border border-amber-500/40 transition"
        >
          Temp High (34.5°C)
        </button>

        <button
          onClick={onSimTilt}
          className="bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-semibold py-2 px-3 rounded-lg border border-amber-500/40 transition"
        >
          Tilt (42.0°)
        </button>

        <button
          onClick={onSimArrived}
          className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition shadow-sm"
        >
          <Navigation className="w-3.5 h-3.5" />
          Force Arrived
        </button>

        <button
          onClick={onResetAlert}
          className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold py-2 px-3 rounded-lg border border-slate-700 flex items-center justify-center gap-1.5 transition"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset Alert
        </button>

        <button
          onClick={onCompleteMission}
          className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition shadow-sm"
        >
          <CheckCircle className="w-3.5 h-3.5" />
          Complete Mission
        </button>
      </div>
    </div>
  );
}
