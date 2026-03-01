import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Key, Calendar, Clock, User, ArrowRight, ShieldCheck } from 'lucide-react';

const CreateAuthorization = () => {
  const navigate = useNavigate();
  const [visitorName, setVisitorName] = useState('');
  const [deliveryId, setDeliveryId] = useState('');

  return (
    <div className="flex-1 flex flex-col bg-slate-50">
      <div className="bg-white p-6 border-b border-slate-100">
        <div className="flex items-center gap-4 mb-2">
          <button onClick={() => navigate(-1)} className="p-1">
            <ChevronLeft className="w-6 h-6 text-slate-600" />
          </button>
          <h2 className="text-xl font-bold">Create Authorization</h2>
        </div>
        <p className="text-xs text-slate-500 ml-10">Generate a one-time access code</p>
      </div>

      <div className="p-6 space-y-6 flex-1 overflow-y-auto no-scrollbar pb-24">
        <div className="bg-white p-6 rounded-[32px] shadow-sm border border-slate-100 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-2">Visitor / Partner Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                <input 
                  type="text" 
                  placeholder="eg: Amazon Delivery" 
                  className="w-full p-4 pl-12 bg-slate-50 rounded-2xl border border-slate-100 focus:outline-none focus:border-primary focus:bg-white transition-all text-sm font-bold text-slate-700"
                  value={visitorName}
                  onChange={(e) => setVisitorName(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-2">Delivery ID (Optional)</label>
              <div className="relative">
                <Key className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                <input 
                  type="text" 
                  placeholder="eg: #FK-2891" 
                  className="w-full p-4 pl-12 bg-slate-50 rounded-2xl border border-slate-100 focus:outline-none focus:border-primary focus:bg-white transition-all text-sm font-bold text-slate-700"
                  value={deliveryId}
                  onChange={(e) => setDeliveryId(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-2">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                  <input type="text" defaultValue="Today" className="w-full p-4 pl-10 bg-slate-50 rounded-2xl border border-slate-100 text-xs font-bold text-slate-700" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-2">Expiry</label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                  <input type="text" defaultValue="2 Hours" className="w-full p-4 pl-10 bg-slate-50 rounded-2xl border border-slate-100 text-xs font-bold text-slate-700" />
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 flex items-center gap-4">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <ShieldCheck className="w-5 h-5 text-primary" />
            </div>
            <p className="text-[10px] text-blue-600 leading-relaxed">This code will be valid for a single entry and will expire after the set time.</p>
          </div>

          <button 
            onClick={() => navigate('/authorization-success')}
            disabled={!visitorName}
            className={`w-full py-4 rounded-2xl font-bold shadow-lg transition-all flex items-center justify-center gap-2 ${visitorName ? 'bg-primary text-white shadow-primary/20' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
          >
            Generate Code <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAuthorization;
