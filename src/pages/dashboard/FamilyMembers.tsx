import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  Plus, 
  X, 
  Trash2, 
  Edit2, 
  CheckCircle,
  Home as HomeIcon,
  Users,
  Package,
  Activity,
  Settings
} from 'lucide-react';

const FamilyMembers = () => {
  const navigate = useNavigate();
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState<any>(null);

  const members = [
    { id: 1, name: 'Rajesh Kumar', email: 'rajesh.kumar@gmail.com', role: 'Admin', access: 'Full access', initial: 'RK' },
    { id: 2, name: 'Arjun Kumar', email: 'arjun.kumar@gmail.com', role: 'Full Access', access: 'App Connected', initial: 'AK' },
    { id: 3, name: 'Priya Kumar', email: 'priya.kumar@gmail.com', role: 'Full Access', access: 'App Connected', initial: 'PK' },
    { id: 4, name: 'Meena (Mother)', email: 'No email. NFC Card Only', role: 'Simple Mode', access: 'NFC Card (#4 Large Print)', initial: 'AK' },
  ];

  const handleDelete = () => {
    setShowDeleteModal(false);
    setShowSuccessModal(true);
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-50 pb-24">
      <div className="bg-white p-6 border-b border-slate-100">
        <div className="flex items-center gap-4 mb-2">
          <button onClick={() => navigate('/dashboard')} className="p-1">
            <ChevronLeft className="w-6 h-6 text-slate-600" />
          </button>
          <h2 className="text-xl font-bold">Family Members</h2>
        </div>
        <p className="text-xs text-slate-500 ml-10">Generate visitor access</p>
      </div>

      <div className="p-6 space-y-4">
        <button 
          onClick={() => setShowAddModal(true)}
          className="w-full py-4 bg-primary/5 border border-dashed border-primary text-primary rounded-2xl font-bold flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" /> Add Family Member
        </button>

        <div className="space-y-3">
          {members.map(member => (
            <div key={member.id} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600">
                {member.initial}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-slate-800 truncate">{member.name}</h4>
                  <span className="text-[10px] font-bold text-primary bg-primary/5 px-2 py-0.5 rounded-full">{member.role}</span>
                </div>
                <p className="text-[10px] text-slate-400 truncate">{member.email}</p>
                <p className="text-[10px] text-emerald-500 font-medium">{member.access}</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => { setSelectedMember(member); setShowDeleteModal(true); }}
                  className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-100 space-y-3">
          <h4 className="text-sm font-bold text-slate-800">Access Levels</h4>
          <div className="space-y-2">
            <p className="text-[10px] text-slate-500"><span className="font-bold text-slate-700">Full Access:</span> Can receive any delivery, manage settings</p>
            <p className="text-[10px] text-slate-500"><span className="font-bold text-slate-700">Simple Mode:</span> NFC card only, no app required</p>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white border-t border-slate-100 p-4 flex justify-around items-center z-30">
        <button onClick={() => navigate('/dashboard')} className="flex flex-col items-center gap-1 text-slate-400">
          <HomeIcon className="w-5 h-5" />
          <span className="text-[10px] font-bold">Home</span>
        </button>
        <button onClick={() => navigate('/family')} className="flex flex-col items-center gap-1 text-primary">
          <Users className="w-5 h-5" />
          <span className="text-[10px] font-bold">Members</span>
        </button>
        <button onClick={() => navigate('/delivery')} className="flex flex-col items-center gap-1 text-slate-400">
          <Package className="w-5 h-5" />
          <span className="text-[10px] font-bold">Delivery</span>
        </button>
        <button onClick={() => navigate('/analytics')} className="flex flex-col items-center gap-1 text-slate-400">
          <Activity className="w-5 h-5" />
          <span className="text-[10px] font-bold">Analytics</span>
        </button>
        <button onClick={() => navigate('/settings')} className="flex flex-col items-center gap-1 text-slate-400">
          <Settings className="w-5 h-5" />
          <span className="text-[10px] font-bold">Settings</span>
        </button>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-end justify-center">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowAddModal(false)} className="absolute inset-0 bg-black/40" />
            <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} className="relative w-full max-w-[430px] bg-white rounded-t-[32px] p-8 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Invite Family Member</h3>
                <button onClick={() => setShowAddModal(false)}><X className="w-6 h-6 text-slate-400" /></button>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700">Full Name</label>
                  <input type="text" placeholder="Manasvi Rastogi" className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 focus:outline-none focus:border-primary focus:bg-white transition-all text-sm font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700">Phone number</label>
                  <input type="tel" placeholder="+91 9368327709" className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 focus:outline-none focus:border-primary focus:bg-white transition-all text-sm font-medium" />
                  <p className="text-[10px] text-slate-400">They'll receive an invite to download and register</p>
                </div>
              </div>
              <button onClick={() => setShowAddModal(false)} className="w-full py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/30 active:scale-[0.98] transition-all">Send Invitation</button>
            </motion.div>
          </div>
        )}

        {showDeleteModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowDeleteModal(false)} className="absolute inset-0 bg-black/40" />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative w-full max-w-sm bg-white rounded-3xl p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto">
                <Trash2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Delete Member</h3>
                <p className="text-sm text-slate-500">Are you sure you want to remove {selectedMember?.name} from family members? This action cannot be undone.</p>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setShowDeleteModal(false)} className="flex-1 py-3 bg-slate-100 text-slate-600 font-bold rounded-xl">Cancel</button>
                <button onClick={handleDelete} className="flex-1 py-3 bg-red-500 text-white font-bold rounded-xl">Delete</button>
              </div>
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
                <h3 className="text-xl font-bold">Member Deleted</h3>
                <p className="text-sm text-slate-500">{selectedMember?.name} has been successfully deleted from your family members.</p>
              </div>
              <button onClick={() => setShowSuccessModal(false)} className="w-full py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/30 active:scale-[0.98] transition-all">Close</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FamilyMembers;
