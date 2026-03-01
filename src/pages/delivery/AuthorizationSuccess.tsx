import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, CheckCircle, Smartphone, Zap, ShieldCheck, ArrowRight, Share2 } from 'lucide-react';

const AuthorizationSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col bg-slate-50">
      <div className="bg-white p-6 border-b border-slate-100">
        <div className="flex items-center gap-4 mb-2">
          <button onClick={() => navigate('/dashboard')} className="p-1">
            <ChevronLeft className="w-6 h-6 text-slate-600" />
          </button>
          <h2 className="text-xl font-bold">Authorization Success</h2>
        </div>
        <p className="text-xs text-slate-500 ml-10">Access code generated successfully</p>
      </div>

      <div className="p-6 space-y-8 flex-1 overflow-y-auto no-scrollbar pb-24">
        <div className="flex flex-col items-center justify-center space-y-8 py-8">
          <div className="relative">
            <div className="w-32 h-32 bg-emerald-50 rounded-full flex items-center justify-center relative">
              <CheckCircle className="w-16 h-16 text-emerald-500" />
              <div className="absolute inset-0 bg-emerald-500/10 rounded-full animate-ping" />
            </div>
          </div>

          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-slate-800">Code: 829105</h3>
            <p className="text-sm text-slate-500">Share this code with your visitor</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-[40px] shadow-sm border border-slate-100 space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">Visitor:</span>
              <span className="font-bold text-slate-800">Amazon Delivery</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">Valid Until:</span>
              <span className="font-bold text-slate-800">Today, 4:30 PM</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">Entry Type:</span>
              <span className="font-bold text-emerald-500">Single Entry Only</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 p-4 bg-slate-50 rounded-2xl font-bold text-xs hover:bg-slate-100 transition-all">
              <Share2 className="w-4 h-4 text-primary" /> Share Code
            </button>
            <button className="flex items-center justify-center gap-2 p-4 bg-slate-50 rounded-2xl font-bold text-xs hover:bg-slate-100 transition-all">
              <Smartphone className="w-4 h-4 text-primary" /> Copy Code
            </button>
          </div>
        </div>

        <div className="p-6 bg-blue-50 rounded-[40px] border border-blue-100 flex items-center gap-6">
          <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-sm flex-shrink-0">
            <ShieldCheck className="w-8 h-8 text-primary" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-800">Secure Access</h4>
            <p className="text-[10px] text-slate-500 leading-relaxed">This code will automatically expire after use or at the set time.</p>
          </div>
        </div>

        <button 
          onClick={() => navigate('/dashboard')}
          className="w-full py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          Back to Dashboard <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default AuthorizationSuccess;
