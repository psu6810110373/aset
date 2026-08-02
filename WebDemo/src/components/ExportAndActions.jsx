import React from 'react';
import { Download, Copy, RefreshCw } from 'lucide-react';

export default function ExportAndActions({ onExportJSON, onCopyPayload, onResetDemo }) {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={onExportJSON}
        className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 px-4 rounded-xl shadow-md shadow-blue-600/20 text-xs sm:text-sm flex items-center justify-center gap-2 transition"
      >
        <Download className="w-4 h-4" />
        Export Mission Log (JSON)
      </button>

      <button
        onClick={onCopyPayload}
        className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold py-2.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition"
      >
        <Copy className="w-4 h-4 text-blue-400" />
        Copy Latest Payload
      </button>

      <button
        onClick={onResetDemo}
        className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold py-2.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition"
      >
        <RefreshCw className="w-4 h-4 text-amber-400" />
        Reset Demo
      </button>
    </div>
  );
}
