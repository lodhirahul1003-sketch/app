import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Camera, Bell, MapPin, ShieldCheck } from 'lucide-react';

const AppPermissions = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col bg-white p-8">
      <button onClick={() => navigate(-1)} className="mb-8 p-1 w-fit">
        <ChevronLeft className="w-6 h-6 text-slate-800" />
      </button>

      <div className="space-y-2 mb-12">
        <h2 className="text-3xl font-bold text-slate-800">App Permissions</h2>
        <p className="text-slate-500">Enable features for a seamless experience</p>
      </div>

      <div className="flex-1 space-y-6">
        {[
          { icon: Camera, label: 'Camera Access', desc: 'Used to scan QR codes and video calls', active: true },
          { icon: Bell, label: 'Notifications', desc: 'Get alerts for visitors and deliveries', active: true },
          { icon: MapPin, label: 'Location Services', desc: 'Required for device pairing and security', active: false },
          { icon: ShieldCheck, label: 'Security Storage', desc: 'Safely store your access credentials', active: true }
        ].map((perm, i) => (
          <div key={i} className="flex items-center gap-6 p-4 bg-slate-50 rounded-3xl border border-slate-100">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm ${perm.active ? 'bg-primary/10 text-primary' : 'bg-slate-200 text-slate-400'}`}>
              <perm.icon className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-slate-800 text-sm">{perm.label}</h4>
              <p className="text-[10px] text-slate-500 leading-relaxed">{perm.desc}</p>
            </div>
            <div className={`w-12 h-6 rounded-full relative transition-colors ${perm.active ? 'bg-primary' : 'bg-slate-300'}`}>
              <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${perm.active ? 'right-1' : 'left-1'}`} />
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4 mt-12">
        <button 
          onClick={() => navigate('/dashboard')}
          className="w-full py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/30 active:scale-[0.98] transition-all"
        >
          Allow All Permissions
        </button>
        <button 
          onClick={() => navigate('/dashboard')}
          className="w-full py-4 bg-white text-slate-400 rounded-2xl font-bold border border-slate-100 active:scale-[0.98] transition-all"
        >
          Skip for Now
        </button>
      </div>
    </div>
  );
};

export default AppPermissions;
