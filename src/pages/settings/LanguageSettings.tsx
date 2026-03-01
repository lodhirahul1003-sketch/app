import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Globe, CheckCircle } from 'lucide-react';
import { cn } from '../../lib/utils';

const LanguageSettings = () => {
  const navigate = useNavigate();
  const [selectedLang, setSelectedLang] = useState('English');

  const languages = [
    { name: 'English', native: 'English', code: 'en' },
    { name: 'Hindi', native: 'हिन्दी', code: 'hi' },
    { name: 'Marathi', native: 'मराठी', code: 'mr' },
    { name: 'Bengali', native: 'বাংলা', code: 'bn' },
    { name: 'Telugu', native: 'తెలుగు', code: 'te' },
    { name: 'Tamil', native: 'தமிழ்', code: 'ta' },
    { name: 'Gujarati', native: 'ગુજરાતી', code: 'gu' },
    { name: 'Kannada', native: 'ಕನ್ನಡ', code: 'kn' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-slate-50">
      <div className="bg-white p-6 border-b border-slate-100">
        <div className="flex items-center gap-4 mb-2">
          <button onClick={() => navigate(-1)} className="p-1">
            <ChevronLeft className="w-6 h-6 text-slate-600" />
          </button>
          <h2 className="text-xl font-bold">Language</h2>
        </div>
        <p className="text-xs text-slate-500 ml-10">Choose your preferred language</p>
      </div>

      <div className="p-6 space-y-4 flex-1 overflow-y-auto no-scrollbar">
        <div className="grid grid-cols-1 gap-3">
          {languages.map(lang => (
            <button 
              key={lang.code}
              onClick={() => setSelectedLang(lang.name)}
              className={cn(
                "w-full p-5 bg-white rounded-3xl border flex items-center justify-between transition-all",
                selectedLang === lang.name ? "border-primary bg-blue-50/30 shadow-md" : "border-slate-100"
              )}
            >
              <div className="flex items-center gap-4">
                <div className={cn(
                  "w-12 h-12 rounded-2xl flex items-center justify-center",
                  selectedLang === lang.name ? "bg-primary/10 text-primary" : "bg-slate-50 text-slate-400"
                )}>
                  <Globe className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h4 className={cn("text-sm font-bold", selectedLang === lang.name ? "text-primary" : "text-slate-700")}>{lang.name}</h4>
                  <p className="text-[10px] text-slate-400">{lang.native}</p>
                </div>
              </div>
              {selectedLang === lang.name && <CheckCircle className="w-6 h-6 text-primary" />}
            </button>
          ))}
        </div>

        <button onClick={() => navigate(-1)} className="w-full py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 mt-8 active:scale-95 transition-all">
          Apply Language
        </button>
      </div>
    </div>
  );
};

export default LanguageSettings;
