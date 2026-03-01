import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Camera, User, Mail, Phone, ShieldCheck } from 'lucide-react';

const EditProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col bg-slate-50">
      <div className="bg-primary p-6 pb-20 rounded-b-[40px] relative">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => navigate(-1)} className="p-1">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <h2 className="text-xl font-bold text-white">Edit Profile</h2>
        </div>
        
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
          <div className="relative">
            <div className="w-24 h-24 bg-white rounded-[32px] shadow-xl p-1">
              <div className="w-full h-full bg-slate-100 rounded-[28px] flex items-center justify-center font-bold text-2xl text-slate-400">RK</div>
            </div>
            <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary text-white rounded-2xl shadow-lg flex items-center justify-center border-4 border-white">
              <Camera className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 pt-20 space-y-6 flex-1 overflow-y-auto no-scrollbar">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-2">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
              <input type="text" defaultValue="Rajesh Kumar" className="w-full p-4 pl-12 bg-white rounded-2xl border border-slate-100 focus:outline-none focus:border-primary text-sm font-bold text-slate-700" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
              <input type="email" defaultValue="rajesh.kumar@gmail.com" className="w-full p-4 pl-12 bg-white rounded-2xl border border-slate-100 focus:outline-none focus:border-primary text-sm font-bold text-slate-700" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-2">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
              <input type="tel" defaultValue="+91 9368327709" className="w-full p-4 pl-12 bg-white rounded-2xl border border-slate-100 focus:outline-none focus:border-primary text-sm font-bold text-slate-700" />
            </div>
          </div>
        </div>

        <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center gap-4">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
          </div>
          <div className="flex-1">
            <h4 className="text-[10px] font-bold text-emerald-700 uppercase">Verified Account</h4>
            <p className="text-[8px] text-emerald-600">Your identity has been verified with Dvaari Secure</p>
          </div>
        </div>

        <button onClick={() => navigate(-1)} className="w-full py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 active:scale-95 transition-all">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
