import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, Zap, Camera, X } from 'lucide-react';

const Scanner = () => {
  const navigate = useNavigate();
  const [isScanning, setIsScanning] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsScanning(false);
      navigate('/permissions');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex-1 flex flex-col bg-black relative overflow-hidden">
      {/* Camera View Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src="https://picsum.photos/seed/qr/1080/1920" 
          alt="QR Scanner" 
          className="w-full h-full object-cover opacity-40 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Scanner Overlay */}
      <div className="relative z-10 flex-1 flex flex-col p-8">
        <div className="flex items-center justify-between mb-12">
          <button onClick={() => navigate(-1)} className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <div className="text-center">
            <h3 className="text-white font-bold text-sm">Scan QR Code</h3>
            <p className="text-white/50 text-[10px]">Align code within the frame</p>
          </div>
          <button className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10">
            <Zap className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-64 h-64">
            {/* Corner Borders */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-primary rounded-tl-3xl" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-primary rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-primary rounded-bl-3xl" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-primary rounded-br-3xl" />
            
            {/* Scanning Line */}
            <motion.div 
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="absolute left-0 right-0 h-0.5 bg-primary shadow-[0_0_15px_rgba(37,99,235,0.8)] z-20"
            />
          </div>
        </div>

        <div className="mt-auto space-y-6">
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-4">
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
              <Camera className="w-5 h-5 text-primary" />
            </div>
            <p className="text-white/80 text-xs leading-relaxed">Scanning for Dvaari Smart Hub... Please hold steady.</p>
          </div>
          <button onClick={() => navigate('/permissions')} className="w-full py-4 bg-white text-slate-800 rounded-2xl font-bold shadow-xl active:scale-95 transition-all">
            Enter Code Manually
          </button>
        </div>
      </div>
    </div>
  );
};

export default Scanner;
