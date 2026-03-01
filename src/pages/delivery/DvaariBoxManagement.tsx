import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Package, ShieldCheck, Zap, Info, Plus, X, Trash2 } from 'lucide-react';

const DvaariBoxManagement = () => {
  const navigate = useNavigate();

  const boxes = [
    { id: 1, name: 'Front Porch Box', status: 'Locked', battery: '85%', lastUsed: 'Today, 2:34 PM', icon: Package },
    { id: 2, name: 'Garage Side Box', status: 'Unlocked', battery: '42%', lastUsed: 'Yesterday, 4:12 PM', icon: Package },
  ];

  return (
    <div className="flex-1 flex flex-col bg-slate-50">
      <div className="bg-white p-6 border-b border-slate-100">
        <div className="flex items-center gap-4 mb-2">
          <button onClick={() => navigate(-1)} className="p-1">
            <ChevronLeft className="w-6 h-6 text-slate-600" />
          </button>
          <h2 className="text-xl font-bold">Dvaari Box Management</h2>
        </div>
        <p className="text-xs text-slate-500 ml-10">Manage your secure drop boxes</p>
      </div>

      <div className="p-6 space-y-6 flex-1 overflow-y-auto no-scrollbar pb-24">
        <button className="w-full py-4 bg-primary/5 border border-dashed border-primary text-primary rounded-2xl font-bold flex items-center justify-center gap-2">
          <Plus className="w-5 h-5" /> Add New Drop Box
        </button>

        <div className="space-y-4">
          {boxes.map(box => (
            <div key={box.id} className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm ${box.status === 'Locked' ? 'bg-primary/10 text-primary' : 'bg-orange-50 text-orange-500'}`}>
                <box.icon className="w-7 h-7" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-slate-800 text-sm truncate">{box.name}</h4>
                  <span className={`text-[8px] font-bold px-2 py-0.5 rounded-full uppercase ${box.status === 'Locked' ? 'text-emerald-500 bg-emerald-50' : 'text-orange-500 bg-orange-50'}`}>{box.status}</span>
                </div>
                <p className="text-[10px] text-slate-400 mb-1">Battery: {box.battery}</p>
                <p className="text-[10px] text-slate-500">Last used: {box.lastUsed}</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 text-slate-300 hover:text-red-500 transition-colors">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 bg-blue-50 rounded-[40px] border border-blue-100 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <Info className="w-5 h-5 text-primary" />
            </div>
            <h4 className="text-sm font-bold text-blue-800">Smart Locking</h4>
          </div>
          <p className="text-xs text-blue-600 leading-relaxed">
            Your Dvaari boxes will automatically lock once a delivery is confirmed and the lid is closed. You can manually unlock them from the app if needed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DvaariBoxManagement;
