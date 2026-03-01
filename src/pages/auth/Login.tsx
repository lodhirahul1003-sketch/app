import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, Eye, EyeOff, ArrowRight } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex-1 flex flex-col bg-white p-8">
      <button onClick={() => navigate(-1)} className="mb-8 p-1 w-fit">
        <ChevronLeft className="w-6 h-6 text-slate-800" />
      </button>

      <div className="space-y-2 mb-12">
        <h2 className="text-3xl font-bold text-slate-800">Welcome Back</h2>
        <p className="text-slate-500">Sign in to continue securing your home</p>
      </div>

      <div className="space-y-6 flex-1">
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
          <button className="text-primary text-[10px] font-bold uppercase tracking-widest ml-1">Forgot Password?</button>
        </div>

        <button 
          onClick={() => navigate('/dashboard')}
          className="w-full py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          Sign In <ArrowRight className="w-5 h-5" />
        </button>

        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
          <div className="relative flex justify-center text-[10px] uppercase font-bold text-slate-400 tracking-widest"><span className="bg-white px-4">Or continue with</span></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 p-4 border border-slate-100 rounded-2xl font-bold text-xs hover:bg-slate-50 transition-all">
            <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" /> Google
          </button>
          <button className="flex items-center justify-center gap-2 p-4 border border-slate-100 rounded-2xl font-bold text-xs hover:bg-slate-50 transition-all">
            <img src="https://www.apple.com/favicon.ico" className="w-4 h-4" alt="Apple" /> Apple
          </button>
        </div>
      </div>

      <p className="text-center text-sm text-slate-500 mt-8">
        Don't have an account? <button onClick={() => navigate('/signup')} className="text-primary font-bold">Sign Up</button>
      </p>
    </div>
  );
};

export default Login;
