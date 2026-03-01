import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, Shield, Plus, X, ShieldCheck, Zap, Smartphone, ArrowRight, CheckCircle } from 'lucide-react';
import { cn } from '../../lib/utils';

const DeviceManagement = () => {
  const navigate = useNavigate();
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedApp, setSelectedApp] = useState<any>(null);
  const [verificationCode, setVerificationCode] = useState('');

  const ecommerceApps = [
    { id: 1, name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', status: 'Connected', lastSync: '2 mins ago' },
    { id: 2, name: 'Flipkart', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Flipkart_logo.svg', status: 'Not Connected', lastSync: '-' },
    { id: 3, name: 'Myntra', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Myntra_logo.png', status: 'Connected', lastSync: '1 hour ago' },
    { id: 4, name: 'Zomato', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Zomato_Logo.svg', status: 'Not Connected', lastSync: '-' },
  ];

  const handleConnect = (app: any) => {
    setSelectedApp(app);
    setShowConnectModal(true);
  };

  const handleVerify = () => {
    setShowConnectModal(false);
    setShowVerifyModal(true);
  };

  const handleConfirmVerify = () => {
    setShowVerifyModal(false);
    setShowSuccessModal(true);
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-50">
      <div className="bg-white p-6 border-b border-slate-100">
        <div className="flex items-center gap-4 mb-2">
          <button onClick={() => navigate(-1)} className="p-1">
            <ChevronLeft className="w-6 h-6 text-slate-600" />
          </button>
          <h2 className="text-xl font-bold">Device Management</h2>
        </div>
        <p className="text-xs text-slate-500 ml-10">Manage connected apps and devices</p>
      </div>

      <div className="p-6 space-y-8 flex-1 overflow-y-auto no-scrollbar pb-24">
        <div className="space-y-4">
          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Connected E-commerce Apps</h3>
          <div className="grid grid-cols-1 gap-4">
            {ecommerceApps.map(app => (
              <div key={app.id} className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center p-3 border border-slate-100">
                  <img src={app.logo} alt={app.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-slate-800 text-sm truncate">{app.name}</h4>
                  <p className="text-[10px] text-slate-400 mb-1">{app.status === 'Connected' ? `Last sync: ${app.lastSync}` : 'Not connected'}</p>
                  <div className="flex items-center gap-1">
                    <div className={`w-1.5 h-1.5 rounded-full ${app.status === 'Connected' ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                    <span className={`text-[10px] font-bold ${app.status === 'Connected' ? 'text-emerald-500' : 'text-slate-400'}`}>{app.status}</span>
                  </div>
                </div>
                <button 
                  onClick={() => handleConnect(app)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-[10px] font-bold transition-all",
                    app.status === 'Connected' ? "bg-slate-100 text-slate-600" : "bg-primary text-white shadow-lg shadow-primary/20"
                  )}
                >
                  {app.status === 'Connected' ? 'Manage' : 'Connect'}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
            </div>
            <h4 className="text-sm font-bold text-emerald-800">Secure Integration</h4>
          </div>
          <p className="text-xs text-emerald-600 leading-relaxed">
            Dvaari uses end-to-end encryption to sync your delivery data. We never store your login credentials.
          </p>
        </div>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {showConnectModal && (
          <div className="fixed inset-0 z-50 flex items-end justify-center">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowConnectModal(false)} className="absolute inset-0 bg-black/40" />
            <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} className="relative w-full max-w-[430px] bg-white rounded-t-[32px] p-8 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Connect {selectedApp?.name}</h3>
                <button onClick={() => setShowConnectModal(false)}><X className="w-6 h-6 text-slate-400" /></button>
              </div>
              <div className="flex flex-col items-center text-center space-y-4 p-4">
                <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center p-4 border border-slate-100">
                  <img src={selectedApp?.logo} alt={selectedApp?.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-slate-600">Dvaari will sync your delivery tracking data from {selectedApp?.name} to provide real-time updates.</p>
                </div>
              </div>
              <button onClick={handleVerify} className="w-full py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                Continue to {selectedApp?.name} <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        )}

        {showVerifyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowVerifyModal(false)} className="absolute inset-0 bg-black/40" />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative w-full max-w-sm bg-white rounded-3xl p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto">
                <Smartphone className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Verify Connection</h3>
                <p className="text-sm text-slate-500">Enter the 6-digit code sent to your registered phone number to link {selectedApp?.name}.</p>
              </div>
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5, 6].map((_, i) => (
                  <input 
                    key={i} 
                    type="text" 
                    maxLength={1} 
                    className="w-10 h-12 bg-slate-50 border border-slate-100 rounded-xl text-center font-bold text-lg focus:outline-none focus:border-primary focus:bg-white transition-all"
                    onChange={(e) => {
                      if (e.target.value && i < 5) {
                        (e.target.nextElementSibling as HTMLInputElement)?.focus();
                      }
                      setVerificationCode(prev => prev + e.target.value);
                    }}
                  />
                ))}
              </div>
              <button onClick={handleConfirmVerify} className="w-full py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/30 active:scale-[0.98] transition-all">Verify & Link</button>
              <button className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Resend Code in 45s</button>
            </motion.div>
          </div>
        )}

        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowSuccessModal(false)} className="absolute inset-0 bg-black/40" />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative w-full max-w-sm bg-white rounded-3xl p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Successfully Linked!</h3>
                <p className="text-sm text-slate-500">Your {selectedApp?.name} account is now connected to Dvaari. We'll automatically sync your upcoming deliveries.</p>
              </div>
              <button onClick={() => setShowSuccessModal(false)} className="w-full py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/30 active:scale-[0.98] transition-all">Done</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DeviceManagement;
