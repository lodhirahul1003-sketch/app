import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, HelpCircle, MessageSquare, Phone, Mail, ChevronRight, Search, Info } from 'lucide-react';
import { hapticFeedback } from '../../lib/haptics';

const HelpSupport = () => {
  const navigate = useNavigate();

  const faqs = [
    'How to pair a new NFC card?',
    'What to do if the hub is offline?',
    'How to share access with family?',
    'Setting up delivery zones',
    'Troubleshooting video feed'
  ];

  const handleBack = () => {
    hapticFeedback.light();
    navigate(-1);
  };

  const handleAction = (action: string) => {
    hapticFeedback.medium();
    alert(`${action} feature coming soon!`);
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-50">
      <div className="bg-white p-6 border-b border-slate-100">
        <div className="flex items-center gap-4 mb-2">
          <button onClick={handleBack} className="p-1">
            <ChevronLeft className="w-6 h-6 text-slate-600" />
          </button>
          <h2 className="text-xl font-bold">Help & Support</h2>
        </div>
        <p className="text-xs text-slate-500 ml-10">We're here to help you</p>
      </div>

      <div className="p-6 space-y-8 flex-1 overflow-y-auto no-scrollbar pb-24">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
          <input type="text" placeholder="Search for help..." className="w-full p-4 pl-12 bg-white rounded-2xl border border-slate-100 focus:outline-none focus:border-primary text-sm font-medium shadow-sm" />
        </div>

        <div className="space-y-4">
          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Contact Us</h3>
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => handleAction('Live Chat')}
              className="bg-white p-6 rounded-3xl border border-slate-100 flex flex-col items-center gap-3 hover:shadow-md transition-all active:scale-95"
            >
              <div className="w-12 h-12 bg-blue-50 text-primary rounded-2xl flex items-center justify-center">
                <MessageSquare className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-slate-700">Live Chat</span>
            </button>
            <button 
              onClick={() => handleAction('Call Support')}
              className="bg-white p-6 rounded-3xl border border-slate-100 flex flex-col items-center gap-3 hover:shadow-md transition-all active:scale-95"
            >
              <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-slate-700">Call Support</span>
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Frequently Asked Questions</h3>
          <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
            {faqs.map((faq, i) => (
              <button 
                key={i} 
                onClick={() => handleAction(faq)}
                className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0 active:bg-slate-100"
              >
                <span className="text-xs font-bold text-slate-600">{faq}</span>
                <ChevronRight className="w-4 h-4 text-slate-300" />
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 bg-primary/5 rounded-[40px] border border-primary/10 flex items-center gap-6">
          <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-sm flex-shrink-0">
            <Info className="w-8 h-8 text-primary" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-800">User Manual</h4>
            <p className="text-[10px] text-slate-500 leading-relaxed">Download the full guide to master your Dvaari system.</p>
            <button 
              onClick={() => handleAction('Download PDF')}
              className="text-[10px] font-bold text-primary uppercase tracking-widest pt-1 hover:underline active:scale-95"
            >
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
