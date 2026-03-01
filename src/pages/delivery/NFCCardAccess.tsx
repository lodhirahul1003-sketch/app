import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, CreditCard, ShieldCheck, Zap, Info } from 'lucide-react';

const NFCCardAccess = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col bg-slate-50">
      <div className="bg-white p-6 border-b border-slate-100">
        <div className="flex items-center gap-4 mb-2">
          <button onClick={() => navigate(-1)} className="p-1">
            <ChevronLeft className="w-6 h-6 text-slate-600" />
          </button>
          <h2 className="text-xl font-bold">NFC Card Access</h2>
        </div>
        <p className="text-xs text-slate-500 ml-10">Use your physical card for quick access</p>
      </div>

      <div className="p-6 space-y-8 flex-1 overflow-y-auto no-scrollbar pb-24">
        <div className="flex flex-col items-center justify-center space-y-12 py-8">
          <div className="relative">
            <div className="w-64 h-40 bg-gradient-to-br from-primary to-blue-600 rounded-3xl shadow-2xl p-6 flex flex-col justify-between text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="flex justify-between items-start">
                <CreditCard className="w-10 h-10 text-white/80" />
                <div className="w-12 h-8 bg-yellow-400/20 rounded-lg border border-yellow-400/30 flex items-center justify-center">
                  <div className="w-6 h-4 bg-yellow-400/40 rounded-sm" />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] text-white/60 font-bold tracking-widest uppercase">Dvaari Secure Access</p>
                <p className="text-lg font-bold tracking-widest">•••• •••• •••• 2891</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-slate-50">
              <Zap className="w-8 h-8 text-primary fill-primary/20" />
            </div>
          </div>

          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold text-slate-800">Ready to Tap</h3>
            <p className="text-sm text-slate-500">Hold your card near the door panel to verify your identity</p>
          </div>
        </div>

        <div className="p-6 bg-blue-50 rounded-[40px] border border-blue-100 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <Info className="w-5 h-5 text-primary" />
            </div>
            <h4 className="text-sm font-bold text-blue-800">How to use</h4>
          </div>
          <p className="text-xs text-blue-600 leading-relaxed">
            When the delivery partner arrives, simply tap your card on the designated NFC area on the Dvaari door panel. The system will instantly verify your access and authorize the delivery.
          </p>
        </div>

        <div className="p-6 bg-emerald-50 rounded-[40px] border border-emerald-100 flex items-center gap-6">
          <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-sm flex-shrink-0">
            <ShieldCheck className="w-8 h-8 text-emerald-500" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-800">Secure Verification</h4>
            <p className="text-[10px] text-slate-500 leading-relaxed">Every tap is encrypted and logged for your security.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFCCardAccess;
