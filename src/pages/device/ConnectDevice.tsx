import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Smartphone, Zap, Camera } from 'lucide-react';

const ConnectDevice = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col bg-white p-8">
      <button onClick={() => navigate(-1)} className="mb-8 p-1 w-fit">
        <ChevronLeft className="w-6 h-6 text-slate-800" />
      </button>

      <div className="space-y-2 mb-12">
        <h2 className="text-3xl font-bold text-slate-800">Connect Device</h2>
        <p className="text-slate-500">Pair your Dvaari smart hub with your phone</p>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center space-y-12">
        <div className="relative">
          <div className="w-48 h-48 bg-primary/5 rounded-full flex items-center justify-center">
            <Smartphone className="w-24 h-24 text-primary" />
          </div>
          <div className="absolute -top-2 -right-2 w-12 h-12 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-slate-50">
            <Zap className="w-6 h-6 text-yellow-500 fill-yellow-500" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-dashed border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
        </div>

        <div className="space-y-4 w-full">
          <button 
            onClick={() => navigate('/scanner')}
            className="w-full p-6 bg-slate-50 rounded-3xl border border-slate-100 flex items-center gap-6 hover:bg-slate-100 transition-all group"
          >
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
              <Camera className="w-7 h-7 text-primary" />
            </div>
            <div className="text-left">
              <h4 className="font-bold text-slate-800">Scan QR Code</h4>
              <p className="text-xs text-slate-500">Found on the back of your device</p>
            </div>
          </button>

          <button className="w-full p-6 bg-slate-50 rounded-3xl border border-slate-100 flex items-center gap-6 hover:bg-slate-100 transition-all group">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
              <Zap className="w-7 h-7 text-primary" />
            </div>
            <div className="text-left">
              <h4 className="font-bold text-slate-800">Connect via Bluetooth</h4>
              <p className="text-xs text-slate-500">Search for nearby Dvaari devices</p>
            </div>
          </button>
        </div>
      </div>

      <button className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mt-8">Need help connecting?</button>
    </div>
  );
};

export default ConnectDevice;
