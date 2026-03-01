import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, User, Plus, X, ShieldCheck, Phone, Mail } from 'lucide-react';
import { hapticFeedback } from '../../lib/haptics';

const BackupPerson = () => {
  const navigate = useNavigate();

  const backupPersons = [
    { id: 1, name: 'Arjun Kumar', relation: 'Brother', status: 'Verified', phone: '+91 98765 43210', initial: 'AK' },
    { id: 2, name: 'Meena Kumar', relation: 'Mother', status: 'Verified', phone: '+91 98765 43211', initial: 'MK' },
  ];

  const handleBack = () => {
    hapticFeedback.light();
    navigate(-1);
  };

  const handleAdd = () => {
    hapticFeedback.medium();
    alert('Add Backup Person feature coming soon!');
  };

  const handleRemove = (name: string) => {
    hapticFeedback.heavy();
    if (confirm(`Are you sure you want to remove ${name} as a backup person?`)) {
      hapticFeedback.success();
      alert(`${name} removed successfully.`);
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-50">
      <div className="bg-white p-6 border-b border-slate-100">
        <div className="flex items-center gap-4 mb-2">
          <button onClick={handleBack} className="p-1">
            <ChevronLeft className="w-6 h-6 text-slate-600" />
          </button>
          <h2 className="text-xl font-bold">Backup Person</h2>
        </div>
        <p className="text-xs text-slate-500 ml-10">Assign someone to handle deliveries when you're busy</p>
      </div>

      <div className="p-6 space-y-6 flex-1 overflow-y-auto no-scrollbar pb-24">
        <button 
          onClick={handleAdd}
          className="w-full py-4 bg-primary/5 border border-dashed border-primary text-primary rounded-2xl font-bold flex items-center justify-center gap-2 active:scale-95 transition-all"
        >
          <Plus className="w-5 h-5" /> Add Backup Person
        </button>

        <div className="space-y-4">
          {backupPersons.map(person => (
            <div key={person.id} className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4">
              <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center font-bold text-slate-600">
                {person.initial}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-slate-800 text-sm truncate">{person.name}</h4>
                  <span className="text-[8px] font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full uppercase">{person.status}</span>
                </div>
                <p className="text-[10px] text-slate-400 mb-1">{person.relation}</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Phone className="w-3 h-3 text-slate-300" />
                    <span className="text-[10px] text-slate-500">{person.phone}</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => handleRemove(person.name)}
                className="p-2 text-slate-300 hover:text-red-500 transition-colors active:scale-90"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        <div className="p-6 bg-blue-50 rounded-[40px] border border-blue-100 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <ShieldCheck className="w-5 h-5 text-primary" />
            </div>
            <h4 className="text-sm font-bold text-blue-800">Why add a backup?</h4>
          </div>
          <p className="text-xs text-blue-600 leading-relaxed">
            If you're unavailable to approve a delivery, your backup person will receive the notification and can authorize the drop-off on your behalf.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BackupPerson;
