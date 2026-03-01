import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Bell, Package, User, Shield, Info } from 'lucide-react';

const NotificationSettings = () => {
  const navigate = useNavigate();

  const settings = [
    { 
      title: 'Delivery Alerts',
      items: [
        { icon: Package, label: 'Out for Delivery', desc: 'Notify when package is on its way', active: true },
        { icon: Bell, label: 'Arrived at Door', desc: 'Notify when delivery partner arrives', active: true },
        { icon: Info, label: 'Delivery Updates', desc: 'Notify about delays or rescheduling', active: false },
      ]
    },
    { 
      title: 'Security & Access',
      items: [
        { icon: Shield, label: 'Unauthorized Access', desc: 'Alert if someone tries to force open', active: true },
        { icon: User, label: 'Family Member Entry', desc: 'Notify when family members arrive', active: false },
        { icon: Bell, label: 'Low Battery Alert', desc: 'Notify when smart hub battery is low', active: true },
      ]
    }
  ];

  return (
    <div className="flex-1 flex flex-col bg-slate-50">
      <div className="bg-white p-6 border-b border-slate-100">
        <div className="flex items-center gap-4 mb-2">
          <button onClick={() => navigate(-1)} className="p-1">
            <ChevronLeft className="w-6 h-6 text-slate-600" />
          </button>
          <h2 className="text-xl font-bold">Notifications</h2>
        </div>
        <p className="text-xs text-slate-500 ml-10">Choose what you want to be notified about</p>
      </div>

      <div className="p-6 space-y-8 flex-1 overflow-y-auto no-scrollbar">
        {settings.map((section, i) => (
          <div key={i} className="space-y-4">
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">{section.title}</h3>
            <div className="space-y-3">
              {section.items.map((item, j) => (
                <div key={j} className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm ${item.active ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-400'}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-800 text-sm">{item.label}</h4>
                    <p className="text-[10px] text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className={`w-12 h-6 rounded-full relative transition-colors ${item.active ? 'bg-primary' : 'bg-slate-300'}`}>
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${item.active ? 'right-1' : 'left-1'}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 flex items-center gap-4">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
            <Bell className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1">
            <h4 className="text-[10px] font-bold text-blue-700 uppercase">Critical Alerts</h4>
            <p className="text-[8px] text-blue-600 leading-relaxed">Critical security alerts will always be sent regardless of these settings.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;
