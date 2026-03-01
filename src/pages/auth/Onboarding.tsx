import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight } from 'lucide-react';

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const steps = [
    {
      title: "Secure Your Deliveries",
      description: "Dvaari ensures your packages are safe even when you're not home with smart access control.",
      image: "https://picsum.photos/seed/secure/800/800"
    },
    {
      title: "Real-time Monitoring",
      description: "Watch live feed of your doorstep and communicate with delivery partners instantly.",
      image: "https://picsum.photos/seed/monitor/800/800"
    },
    {
      title: "Family Access",
      description: "Easily manage access for your family members with secure NFC cards and app access.",
      image: "https://picsum.photos/seed/family/800/800"
    }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-white">
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="absolute inset-0 flex flex-col"
          >
            <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-8">
              <div className="w-64 h-64 rounded-[40px] overflow-hidden shadow-2xl shadow-primary/20 rotate-3">
                <img 
                  src={steps[currentStep].image} 
                  alt={steps[currentStep].title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-slate-800 leading-tight">{steps[currentStep].title}</h2>
                <p className="text-slate-500 text-sm leading-relaxed px-4">{steps[currentStep].description}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="p-8 space-y-8">
        <div className="flex justify-center gap-2">
          {steps.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-300 ${i === currentStep ? 'w-8 bg-primary' : 'w-2 bg-slate-200'}`} 
            />
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <button 
            onClick={() => navigate('/login')}
            className="text-slate-400 font-bold text-sm"
          >
            Skip
          </button>
          <button 
            onClick={nextStep}
            className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/30 active:scale-95 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
