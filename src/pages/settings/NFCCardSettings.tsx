import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, CreditCard, Plus, X, ShieldCheck, Zap, Trash2 } from 'lucide-react';
import { hapticFeedback } from '../../lib/haptics';

const NFCCardSettings = () => {
  const navigate = useNavigate();

  const cards = [
    { id: 1, name: 'Main Door Card', owner: 'Rajesh Kumar', status: 'Active', lastUsed: 'Today, 8:30 AM', icon: CreditCard },
    { id: 2, name: 'Mother\'s Card', owner: 'Meena Kumar', status: 'Active', lastUsed: 'Yesterday, 4:12 PM', icon: CreditCard },
    { id: 3, name: 'Spare Card', owner: 'Unassigned', status: 'Inactive', lastUsed: '-', icon: CreditCard },
  ];

  const handleBack = () => {
    hapticFeedback.light();
    navigate(-1);
  };

  const handlePair = () => {
    hapticFeedback.medium();
    alert('Pairing mode activated. Please tap your NFC card on the hub.');
  };

  const handleDelete = (name: string) => {
    hapticFeedback.heavy();
    if (confirm(`Are you sure you want to remove ${name}?`)) {
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
          <h2 className="text-xl font-bold">NFC Card Settings</h2>
        </div>
        <p className="text-xs text-slate-500 ml-10">Manage physical access cards</p>
      </div>

      <div className="p-6 space-y-6 flex-1 overflow-y-auto no-scrollbar pb-24">
        <button 
          onClick={handlePair}
          className="w-full py-4 bg-primary/5 border border-dashed border-primary text-primary rounded-2xl font-bold flex items-center justify-center gap-2 active:scale-95 transition-all"
        >
          <Plus className="w-5 h-5" /> Pair New NFC Card
        </button>

        <div className="space-y-4">
          {cards.map(card => (
            <div key={card.id} className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm ${card.status === 'Active' ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-400'}`}>
                <card.icon className="w-7 h-7" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-slate-800 text-sm truncate">{card.name}</h4>
                  {card.status === 'Active' && <span className="text-[8px] font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full uppercase">ACTIVE</span>}
                </div>
                <p className="text-[10px] text-slate-400 mb-1">Owner: {card.owner}</p>
                <p className="text-[10px] text-slate-500">Last used: {card.lastUsed}</p>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => handleDelete(card.name)}
                  className="p-2 text-slate-300 hover:text-red-500 transition-colors active:scale-90"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <h4 className="text-sm font-bold text-blue-800">Quick Pairing</h4>
          </div>
          <p className="text-xs text-blue-600 leading-relaxed">
            To pair a new card, tap it against the Dvaari Smart Hub when prompted. The LED will flash blue during pairing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NFCCardSettings;
