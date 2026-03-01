import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ArrowRight, 
  MapPin, 
  Plus, 
  Lock, 
  Mail, 
  Home as HomeIcon, 
  Warehouse, 
  CheckCircle, 
  Check 
} from 'lucide-react';
import { cn } from '../../lib/utils';

const DeliveryApproval = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0); // 0: Verify ID, 1: Choose Zone, 2: Add Zone, 3: Authorized
  const [deliveryId, setDeliveryId] = useState('');
  const [selectedZone, setSelectedZone] = useState('Point Locker');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  // Add Zone Form State
  const [newZoneName, setNewZoneName] = useState('');
  const [newZoneType, setNewZoneType] = useState('Locker');
  const [newZoneDesc, setNewZoneDesc] = useState('');
  const [newZoneCode, setNewZoneCode] = useState('');

  const zones = [
    'Point Locker',
    'Finish Locker',
    'Manja Locker',
    'Secure Drop Box'
  ];

  const zoneTypes = [
    { id: 'Locker', icon: Lock, label: 'Locker' },
    { id: 'Mailbox', icon: Mail, label: 'Mailbox' },
    { id: 'Front Porch', icon: HomeIcon, label: 'Front Porch' },
    { id: 'Garage', icon: Warehouse, label: 'Garage' }
  ];

  const handleVerify = () => {
    if (deliveryId) setStep(1);
  };

  const handleConfirmZone = () => {
    setStep(3);
  };

  const handleAddZone = () => {
    setShowSuccessModal(true);
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
    setStep(1); // Go back to choose zone after adding
  };

  const renderStep = () => {
    switch (step) {
      case 0: // Verify Delivery
        return (
          <div className="flex-1 flex flex-col bg-slate-50">
            <div className="bg-primary p-6 pb-8 rounded-b-[40px]">
              <div className="flex items-center gap-4 mb-6">
                <button onClick={() => navigate(-1)} className="p-1">
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <h2 className="text-xl font-bold text-white">Verify Delivery</h2>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-slate-800">Confirm Delivery Details</h3>
                  <p className="text-[10px] text-slate-400">Confirm the delivery is permitted in the location.</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase">Enter Delivery ID *</label>
                    <input 
                      type="text" 
                      placeholder="Enter Delivery ID"
                      className="w-full p-4 bg-slate-50 rounded-2xl text-sm font-medium border border-slate-100 focus:outline-none focus:border-primary"
                      value={deliveryId}
                      onChange={(e) => setDeliveryId(e.target.value)}
                    />
                  </div>

                  <button 
                    onClick={handleVerify}
                    disabled={!deliveryId}
                    className={cn(
                      "w-full py-4 rounded-2xl font-bold shadow-lg transition-all flex items-center justify-center gap-2",
                      deliveryId ? "bg-primary text-white shadow-primary/20" : "bg-slate-200 text-slate-400 cursor-not-allowed"
                    )}
                  >
                    Verify {deliveryId && <ArrowRight className="w-4 h-4" />}
                  </button>
                </div>

                <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                  <p className="text-[10px] text-blue-600 leading-relaxed">
                    The delivery ID can be found on your delivery notification or tracking information
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 1: // Choose Drop Zone
        return (
          <div className="flex-1 flex flex-col bg-slate-50">
            <div className="bg-primary p-6 pb-8 rounded-b-[40px]">
              <div className="flex items-center gap-4 mb-6">
                <button onClick={() => setStep(0)} className="p-1">
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <h2 className="text-xl font-bold text-white">Choose Drop Zone</h2>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-slate-800">Select Drop Location</h3>
                <p className="text-[10px] text-slate-400">Choose where the delivery should be dropped.</p>
              </div>

              <div className="space-y-3">
                {zones.map(zone => (
                  <button 
                    key={zone}
                    onClick={() => setSelectedZone(zone)}
                    className={cn(
                      "w-full p-4 bg-white rounded-2xl border flex items-center justify-between transition-all",
                      selectedZone === zone ? "border-primary bg-blue-50/30 shadow-md" : "border-slate-100"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center",
                        selectedZone === zone ? "bg-primary/10 text-primary" : "bg-slate-50 text-slate-400"
                      )}>
                        <MapPin className="w-5 h-5" />
                      </div>
                      <span className={cn("text-sm font-bold", selectedZone === zone ? "text-primary" : "text-slate-700")}>{zone}</span>
                    </div>
                    <div className={cn(
                      "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                      selectedZone === zone ? "border-primary bg-primary" : "border-slate-200"
                    )}>
                      {selectedZone === zone && <div className="w-2 h-2 bg-white rounded-full" />}
                    </div>
                  </button>
                ))}

                <button 
                  onClick={() => setStep(2)}
                  className="w-full p-4 bg-white rounded-2xl border border-dashed border-slate-300 flex items-center justify-center gap-2 text-slate-500 hover:border-primary hover:text-primary transition-all"
                >
                  <Plus className="w-4 h-4" />
                  <span className="text-sm font-bold">Add New Zone</span>
                </button>
              </div>

              <button 
                onClick={handleConfirmZone}
                className="w-full py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 mt-4 flex items-center justify-center gap-2"
              >
                Confirm Zone <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        );

      case 2: // Add New Zone
        return (
          <div className="flex-1 flex flex-col bg-slate-50">
            <div className="bg-primary p-6 pb-8 rounded-b-[40px]">
              <div className="flex items-center gap-4 mb-6">
                <button onClick={() => setStep(1)} className="p-1">
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <h2 className="text-xl font-bold text-white">Add New Zone</h2>
              </div>
            </div>

            <div className="p-6 space-y-6 overflow-y-auto no-scrollbar pb-24">
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-slate-800">Create Drop Zone</h3>
                <p className="text-[10px] text-slate-400">Add a new location for safe deliveries</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase">Zone Name *</label>
                  <input 
                    type="text" 
                    placeholder="eg: Front Door Locker"
                    className="w-full p-4 bg-white rounded-2xl text-sm font-medium border border-slate-100 focus:outline-none focus:border-primary shadow-sm"
                    value={newZoneName}
                    onChange={(e) => setNewZoneName(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase">Zone Type *</label>
                  <div className="grid grid-cols-2 gap-3">
                    {zoneTypes.map(type => (
                      <button 
                        key={type.id}
                        onClick={() => setNewZoneType(type.id)}
                        className={cn(
                          "p-4 rounded-2xl border flex flex-col items-center gap-2 transition-all",
                          newZoneType === type.id ? "border-primary bg-blue-50/50 shadow-sm" : "border-slate-100 bg-white"
                        )}
                      >
                        <type.icon className={cn("w-6 h-6", newZoneType === type.id ? "text-primary" : "text-slate-400")} />
                        <span className={cn("text-[10px] font-bold", newZoneType === type.id ? "text-primary" : "text-slate-500")}>{type.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase">Location Description *</label>
                  <input 
                    type="text" 
                    placeholder="Left side of main entrance"
                    className="w-full p-4 bg-white rounded-2xl text-sm font-medium border border-slate-100 focus:outline-none focus:border-primary shadow-sm"
                    value={newZoneDesc}
                    onChange={(e) => setNewZoneDesc(e.target.value)}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase">Access Code *</label>
                  <input 
                    type="text" 
                    placeholder="eg.. 1234"
                    className="w-full p-4 bg-white rounded-2xl text-sm font-medium border border-slate-100 focus:outline-none focus:border-primary shadow-sm"
                    value={newZoneCode}
                    onChange={(e) => setNewZoneCode(e.target.value)}
                  />
                </div>

                <div className="p-4 bg-white rounded-3xl border border-slate-100 shadow-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-primary">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-slate-800">Zone Preview</h4>
                      <p className="text-[8px] text-slate-400">{newZoneName || 'font door locker'}</p>
                      <p className="text-[8px] text-slate-400">{newZoneType}, {newZoneDesc || 'Left side of main entrance'}</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                  <h4 className="text-[10px] font-bold text-blue-600 mb-1">Secure Delivery</h4>
                  <p className="text-[8px] text-blue-500 leading-relaxed">
                    This zone will be available for delivery personal to drop package safety
                  </p>
                </div>

                <div className="space-y-3">
                  <button 
                    onClick={handleAddZone}
                    className="w-full py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20"
                  >
                    Add Zone
                  </button>
                  <button 
                    onClick={() => setStep(1)}
                    className="w-full py-4 bg-white text-slate-500 rounded-2xl font-bold border border-slate-100"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>

            {/* Success Modal Overlay */}
            <AnimatePresence>
              {showSuccessModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleSuccessModalClose}
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                  />
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="relative w-full max-w-xs bg-white rounded-[40px] p-8 flex flex-col items-center text-center space-y-6 shadow-2xl overflow-hidden"
                  >
                    {/* Confetti simulation */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400" />
                    
                    <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center relative">
                      <CheckCircle className="w-8 h-8 text-emerald-500" />
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute inset-0 bg-emerald-500/10 rounded-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-slate-800">New Zone Created</h3>
                      <p className="text-[10px] text-slate-400 leading-relaxed">
                        Font door location is ready for delivery
                      </p>
                    </div>

                    <button 
                      onClick={handleSuccessModalClose}
                      className="w-full py-4 bg-slate-100 text-slate-800 font-bold rounded-2xl hover:bg-slate-200 transition-colors"
                    >
                      Cancel
                    </button>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>
        );

      case 3: // Authorized
        return (
          <div className="flex-1 flex flex-col bg-slate-50">
            <div className="bg-primary p-6 pb-8 rounded-b-[40px]">
              <div className="flex items-center gap-4 mb-6">
                <button onClick={() => setStep(1)} className="p-1">
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <h2 className="text-xl font-bold text-white">Auchorage & Lock</h2>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="bg-white p-8 rounded-[40px] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center space-y-8">
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest">Zone Status</h3>
                  <p className="text-[10px] text-slate-400">Share with code with Manusvi</p>
                </div>

                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
                  <Check className="w-10 h-10 text-white" />
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-slate-800">Safe Drop Authorized</h4>
                  <p className="text-[10px] text-slate-400">Zone is locked off for delivery</p>
                </div>

                <div className="w-full space-y-4 pt-4 border-t border-slate-50">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Zone:</span>
                    <span className="font-bold text-slate-800">{selectedZone}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Status:</span>
                    <span className="font-bold text-emerald-500">Locked & Secured</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Access Unit:</span>
                    <span className="font-bold text-slate-800">15 min</span>
                  </div>
                </div>

                <button 
                  onClick={() => navigate('/dashboard')}
                  className="w-full py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20"
                >
                  Finish
                </button>

                <p className="text-[8px] text-slate-400 leading-relaxed max-w-[200px]">
                  The delivery personnel has been notified and can now access the secure zone. The zone will automatically lock after delivery completion.
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      {renderStep()}
    </div>
  );
};

export default DeliveryApproval;
