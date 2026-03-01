import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, Eye, EyeOff, ArrowRight, ShieldCheck } from 'lucide-react';

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex-1 flex flex-col bg-white p-8">
      <button onClick={() => navigate(-1)} className="mb-8 p-1 w-fit">
        <ChevronLeft className="w-6 h-6 text-slate-800" />
      </button>

      <div className="space-y-2 mb-8">
        <h2 className="text-3xl font-bold text-slate-800">Create Account</h2>
        <p className="text-slate-500">Start your journey to a smarter, safer home</p>
      </div>

      <div className="space-y-5 flex-1 overflow-y-auto no-scrollbar">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Full Name</label>
          <input 
            type="text" 
            placeholder="Rajesh Kumar" 
            className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 focus:outline-none focus:border-primary focus:bg-white transition-all text-sm font-medium"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Email Address</label>
          <input 
            type="email" 
            placeholder="rajesh.kumar@gmail.com" 
            className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 focus:outline-none focus:border-primary focus:bg-white transition-all text-sm font-medium"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Password</label>
          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="••••••••" 
              className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 focus:outline-none focus:border-primary focus:bg-white transition-all text-sm font-medium"
            />
            <button 
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          <div className="flex items-center gap-2 ml-1">
            <ShieldCheck className="w-3 h-3 text-emerald-500" />
            <span className="text-[10px] text-slate-400 font-medium">Strong password required</span>
          </div>
        </div>

        <div className="flex items-start gap-3 p-1">
          <input type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-200 text-primary focus:ring-primary" />
          <p className="text-[10px] text-slate-500 leading-relaxed">
            I agree to the <span className="text-primary font-bold">Terms of Service</span> and <span className="text-primary font-bold">Privacy Policy</span>
          </p>
        </div>

        <button 
          onClick={() => navigate('/connect-device')}
          className="w-full py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          Create Account <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      <p className="text-center text-sm text-slate-500 mt-8">
        Already have an account? <button onClick={() => navigate('/login')} className="text-primary font-bold">Sign In</button>
      </p>
    </div>
  );
};

export default Signup;
