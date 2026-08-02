import React from 'react';
import { DoorClosed, Lock, Zap, Compass, Thermometer, Droplets, Wind, BatteryCharging } from 'lucide-react';

export default function TelemetryCards({ state }) {
  const isImpactAlert = state.acceleration.peak_g > 2.5;
  const isTiltWarn = state.orientation.tilt_deg > 35.0;
  const isTempWarn = state.environment.temperature_c > 30.0;
  const isDoorOpen = state.door_state === 'OPEN';
  const isUnlocked = state.lock_state === 'UNLOCKED';

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {/* Door State */}
      <div className={`bg-slate-950/60 border rounded-xl p-3.5 relative overflow-hidden transition ${
        isDoorOpen ? 'border-red-500/50 bg-red-950/10' : 'border-slate-800'
      }`}>
        <div className={`absolute top-0 left-0 w-1 h-full ${isDoorOpen ? 'bg-red-500' : 'bg-emerald-500'}`} />
        <div className="flex items-center justify-between text-slate-400 mb-1">
          <span className="text-[11px] font-semibold uppercase tracking-wider">Door State</span>
          <DoorClosed className="w-4 h-4" />
        </div>
        <div className={`text-base font-bold font-mono ${isDoorOpen ? 'text-red-400' : 'text-emerald-400'}`}>
          {state.door_state}
        </div>
        <div className="text-[10px] text-slate-500 mt-1">Solenoid Latch Status</div>
      </div>

      {/* Lock State */}
      <div className={`bg-slate-950/60 border rounded-xl p-3.5 relative overflow-hidden transition ${
        isUnlocked ? 'border-amber-500/50 bg-amber-950/10' : 'border-slate-800'
      }`}>
        <div className={`absolute top-0 left-0 w-1 h-full ${isUnlocked ? 'bg-amber-500' : 'bg-blue-500'}`} />
        <div className="flex items-center justify-between text-slate-400 mb-1">
          <span className="text-[11px] font-semibold uppercase tracking-wider">Lock State</span>
          <Lock className="w-4 h-4" />
        </div>
        <div className={`text-base font-bold font-mono ${isUnlocked ? 'text-amber-400' : 'text-blue-400'}`}>
          {state.lock_state}
        </div>
        <div className="text-[10px] text-slate-500 mt-1">Security Latch</div>
      </div>

      {/* Peak Impact */}
      <div className={`bg-slate-950/60 border rounded-xl p-3.5 relative overflow-hidden transition ${
        isImpactAlert ? 'border-red-500/50 bg-red-950/20' : 'border-slate-800'
      }`}>
        <div className={`absolute top-0 left-0 w-1 h-full ${isImpactAlert ? 'bg-red-500' : 'bg-emerald-500'}`} />
        <div className="flex items-center justify-between text-slate-400 mb-1">
          <span className="text-[11px] font-semibold uppercase tracking-wider">Peak Impact</span>
          <Zap className="w-4 h-4" />
        </div>
        <div className={`text-base font-bold font-mono ${isImpactAlert ? 'text-red-400 animate-pulse' : 'text-slate-100'}`}>
          {state.acceleration.peak_g} g
        </div>
        <div className="text-[10px] text-slate-500 mt-1">Threshold: &le; 2.5g</div>
      </div>

      {/* Orientation / Tilt */}
      <div className={`bg-slate-950/60 border rounded-xl p-3.5 relative overflow-hidden transition ${
        isTiltWarn ? 'border-amber-500/50 bg-amber-950/20' : 'border-slate-800'
      }`}>
        <div className={`absolute top-0 left-0 w-1 h-full ${isTiltWarn ? 'bg-amber-500' : 'bg-emerald-500'}`} />
        <div className="flex items-center justify-between text-slate-400 mb-1">
          <span className="text-[11px] font-semibold uppercase tracking-wider">Orientation / Tilt</span>
          <Compass className="w-4 h-4" />
        </div>
        <div className={`text-base font-bold font-mono ${isTiltWarn ? 'text-amber-400' : 'text-slate-100'}`}>
          {state.orientation.tilt_deg}&deg;
        </div>
        <div className="text-[10px] text-slate-500 mt-1">Threshold: &le; 35&deg;</div>
      </div>

      {/* Temperature */}
      <div className={`bg-slate-950/60 border rounded-xl p-3.5 relative overflow-hidden transition ${
        isTempWarn ? 'border-amber-500/50 bg-amber-950/20' : 'border-slate-800'
      }`}>
        <div className={`absolute top-0 left-0 w-1 h-full ${isTempWarn ? 'bg-amber-500' : 'bg-emerald-500'}`} />
        <div className="flex items-center justify-between text-slate-400 mb-1">
          <span className="text-[11px] font-semibold uppercase tracking-wider">Temperature</span>
          <Thermometer className="w-4 h-4" />
        </div>
        <div className={`text-base font-bold font-mono ${isTempWarn ? 'text-amber-400' : 'text-slate-100'}`}>
          {state.environment.temperature_c} &deg;C
        </div>
        <div className="text-[10px] text-slate-500 mt-1">Threshold: &le; 30&deg;C</div>
      </div>

      {/* Humidity */}
      <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-3.5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
        <div className="flex items-center justify-between text-slate-400 mb-1">
          <span className="text-[11px] font-semibold uppercase tracking-wider">Humidity</span>
          <Droplets className="w-4 h-4" />
        </div>
        <div className="text-base font-bold font-mono text-slate-100">
          {state.environment.humidity_rh} %
        </div>
        <div className="text-[10px] text-slate-500 mt-1">Threshold: &le; 70%</div>
      </div>

      {/* Pressure */}
      <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-3.5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
        <div className="flex items-center justify-between text-slate-400 mb-1">
          <span className="text-[11px] font-semibold uppercase tracking-wider">Pressure</span>
          <Wind className="w-4 h-4" />
        </div>
        <div className="text-base font-bold font-mono text-slate-100">
          {state.environment.pressure_hpa} hPa
        </div>
        <div className="text-[10px] text-slate-500 mt-1">Barometer Normal</div>
      </div>

      {/* Battery */}
      <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-3.5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500" />
        <div className="flex items-center justify-between text-slate-400 mb-1">
          <span className="text-[11px] font-semibold uppercase tracking-wider">Battery</span>
          <BatteryCharging className="w-4 h-4 text-emerald-400" />
        </div>
        <div className="text-base font-bold font-mono text-emerald-400">
          {state.battery_percent}%
        </div>
        <div className="text-[10px] text-slate-500 mt-1">
          Updated: {new Date().toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}
