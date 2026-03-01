import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Smartphone, CreditCard, Key, ShieldCheck, ChevronRight } from 'lucide-react';

const DeliveryAccessMethod = () => {
  const navigate = useNavigate();

  const methods = [
    { id: 'app', icon: Smartphone, label: 'App Authorization', desc: 'Approve via real-time notification', active: true, path: '/dashboard' },
    { id: 'nfc', icon: CreditCard, label: 'NFC Card Access', desc: 'Tap physical card on door panel', active: true, path: '/nfc-access' },
    { id: 'code', icon: Key, label: 'One-Time Passcode', desc: 'Generate a temporary access code', active: false, path: '/create-authorization' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-slate-50">
      <div className="bg-white p-6 border-b border-slate-100">
        <div className="flex items-center gap-4 mb-2">
          <button onClick={() => navigate(-1)} className="p-1">
            <ChevronLeft className="w-6 h-6 text-slate-600" />
          </button>
          <h2 className="text-xl font-bold">Access Methods</h2>
        </div>
        <p className="text-xs text-slate-500 ml-10">Manage how deliveries are authorized</p>
      </div>

      <div className="p-6 space-y-6 flex-1 overflow-y-auto no-scrollbar">
        <div className="space-y-4">
          {methods.map(method => (
            <button 
              key={method.id}
              onClick={() => navigate(method.path)}
              className="w-full bg-white p-6 rounded-[32px] shadow-sm border border-slate-100 flex items-center gap-6 hover:bg-slate-50 transition-all group text-left"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform ${method.active ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-400'}`}>
                <method.icon className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-800">{method.label}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{method.desc}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-300" />
            </button>
          ))}
        </div>

        <div className="p-6 bg-emerald-50 rounded-[40px] border border-emerald-100 flex items-center gap-6">
          <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-sm flex-shrink-0">
            <ShieldCheck className="w-8 h-8 text-emerald-500" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-800">Secure Access</h4>
            <p className="text-[10px] text-slate-500 leading-relaxed">All access methods are encrypted and logged for your security.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAccessMethod;
