import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, Shield, Clock, Bell, Info, ChevronRight, CheckCircle } from 'lucide-react';
import { cn } from '../../lib/utils';

const AwayMode = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex-1 flex flex-col bg-slate-50">
      <div className="bg-primary p-6 pb-12 rounded-b-[40px] relative">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => navigate('/dashboard')} className="p-1">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <h2 className="text-xl font-bold text-white">Away Mode</h2>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="text-white font-bold">Away Mode Status</h3>
            <p className="text-white/60 text-[10px]">{isActive ? 'Currently Active' : 'Currently Inactive'}</p>
          </div>
          <button 
            onClick={() => setIsActive(!isActive)}
            className={cn(
              "w-14 h-8 rounded-full relative transition-all duration-300",
              isActive ? "bg-emerald-500" : "bg-white/20"
            )}
          >
            <div className={cn(
              "absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 shadow-md",
              isActive ? "right-1" : "left-1"
            )} />
          </button>
        </div>
      </div>

      <div className="p-6 space-y-6 flex-1 overflow-y-auto no-scrollbar pb-24">
        <div className="space-y-4">
          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Smart Features</h3>
          <div className="space-y-3">
            {[
              { icon: Shield, label: 'Auto-Authorization', desc: 'Automatically approve trusted partners', active: true },
              { icon: Bell, label: 'Priority Alerts', desc: 'Get notified for every visitor', active: true },
              { icon: Clock, label: 'Time Schedule', desc: 'Set specific hours for away mode', active: false, path: '/set-schedule' },
            ].map((feature, i) => (
              <button 
                key={i} 
                onClick={() => feature.path && navigate(feature.path)}
                className="w-full bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4 hover:bg-slate-50 transition-all"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm ${feature.active ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-400'}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-bold text-slate-800 text-sm">{feature.label}</h4>
                  <p className="text-[10px] text-slate-500 leading-relaxed">{feature.desc}</p>
                </div>
                {feature.path ? (
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                ) : (
                  <div className={`w-10 h-5 rounded-full relative transition-colors ${feature.active ? 'bg-primary' : 'bg-slate-300'}`}>
                    <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${feature.active ? 'right-1' : 'left-1'}`} />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 bg-blue-50 rounded-[40px] border border-blue-100 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <Info className="w-5 h-5 text-primary" />
            </div>
            <h4 className="text-sm font-bold text-blue-800">How it works</h4>
          </div>
          <p className="text-xs text-blue-600 leading-relaxed">
            When Away Mode is active, Dvaari will use your pre-set rules to manage visitors and deliveries. You'll still receive live notifications for any unusual activity.
          </p>
        </div>

        <button onClick={() => navigate('/dashboard')} className="w-full py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 active:scale-95 transition-all">
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default AwayMode;
