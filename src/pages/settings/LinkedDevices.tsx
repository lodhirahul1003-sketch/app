import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Smartphone, Plus, X, ShieldCheck, Zap } from 'lucide-react';

const LinkedDevices = () => {
  const navigate = useNavigate();

  const devices = [
    { id: 1, name: 'iPhone 15 Pro', model: 'Current Device', status: 'Online', lastActive: 'Active now', icon: Smartphone },
    { id: 2, name: 'Samsung S23 Ultra', model: 'Arjun\'s Phone', status: 'Online', lastActive: '2 mins ago', icon: Smartphone },
    { id: 3, name: 'iPad Pro 12.9', model: 'Home Tablet', status: 'Offline', lastActive: 'Yesterday, 4:12 PM', icon: Smartphone },
  ];

  return (
    <div className="flex-1 flex flex-col bg-slate-50">
      <div className="bg-white p-6 border-b border-slate-100">
        <div className="flex items-center gap-4 mb-2">
          <button onClick={() => navigate(-1)} className="p-1">
            <ChevronLeft className="w-6 h-6 text-slate-600" />
          </button>
          <h2 className="text-xl font-bold">Linked Devices</h2>
        </div>
        <p className="text-xs text-slate-500 ml-10">Manage devices with app access</p>
      </div>

      <div className="p-6 space-y-6 flex-1 overflow-y-auto no-scrollbar">
        <button className="w-full py-4 bg-primary/5 border border-dashed border-primary text-primary rounded-2xl font-bold flex items-center justify-center gap-2">
          <Plus className="w-5 h-5" /> Link New Device
        </button>

        <div className="space-y-4">
          {devices.map(device => (
            <div key={device.id} className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm ${device.status === 'Online' ? 'bg-emerald-50 text-emerald-500' : 'bg-slate-100 text-slate-400'}`}>
                <device.icon className="w-7 h-7" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-slate-800 text-sm truncate">{device.name}</h4>
                  {device.id === 1 && <span className="text-[8px] font-bold text-primary bg-primary/5 px-2 py-0.5 rounded-full">THIS DEVICE</span>}
                </div>
                <p className="text-[10px] text-slate-400 mb-1">{device.model}</p>
                <div className="flex items-center gap-1">
                  <div className={`w-1.5 h-1.5 rounded-full ${device.status === 'Online' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}`} />
                  <span className="text-[10px] text-slate-500">{device.lastActive}</span>
                </div>
              </div>
              <button className="p-2 text-slate-300 hover:text-red-500 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <ShieldCheck className="w-5 h-5 text-primary" />
            </div>
            <h4 className="text-sm font-bold text-blue-800">Security Tip</h4>
          </div>
          <p className="text-xs text-blue-600 leading-relaxed">
            Only link devices you trust. You can remotely revoke access for any device from this screen if it's lost or stolen.
          </p>
          <button className="text-xs font-bold text-primary flex items-center gap-1">
            Learn more about device security <Zap className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkedDevices;
