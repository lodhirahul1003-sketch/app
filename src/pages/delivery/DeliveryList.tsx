import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ChevronLeft, 
  Settings, 
  Clock, 
  Package, 
  Filter, 
  ArrowRight,
  Home as HomeIcon,
  Users,
  Activity
} from 'lucide-react';
import { cn } from '../../lib/utils';

const DeliveryList = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'active' | 'history'>('active');

  const activeDeliveries = [
    {
      id: 1,
      company: 'Amazon',
      orderId: '#FK-2891',
      status: 'Out for delivery',
      time: 'Today, 2:00 PM - 4:00 PM',
      type: 'In Transit',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
      color: 'bg-orange-50 text-orange-600 border-orange-100'
    },
    {
      id: 2,
      company: 'Flipkart',
      orderId: '#FK-1252',
      status: 'Arrived at Door',
      action: 'Verify Delivery ID',
      type: 'Pending Approval',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Flipkart_logo.svg',
      color: 'bg-blue-50 text-blue-600 border-blue-100'
    }
  ];

  const historyDeliveries = [
    {
      id: 3,
      company: 'Myntra',
      orderId: '#MY-9805',
      status: 'Delivered to Point Locker',
      time: 'Yesterday, 11:30 AM',
      type: 'Delivered',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Myntra_logo.png',
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100'
    },
    {
      id: 4,
      company: 'Zomato',
      orderId: '#ZM-4521',
      status: 'Package Damaged',
      time: '2 days ago',
      type: 'Rejected',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Zomato_Logo.svg',
      color: 'bg-red-50 text-red-600 border-red-100'
    }
  ];

  return (
    <div className="flex-1 flex flex-col bg-slate-50 pb-24">
      {/* Header */}
      <div className="bg-primary p-6 pb-12 rounded-b-[40px] relative">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/dashboard')} className="p-1">
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <h2 className="text-xl font-bold text-white">Delivery</h2>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/dvaari-box')} className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10">
              <Clock className="w-5 h-5 text-white" />
            </button>
            <button onClick={() => navigate('/settings')} className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10">
              <Settings className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
        <div className="ml-10 -mt-4">
          <p className="text-xs text-white/70">Track your packages and manage authorizations.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6 -mt-6">
        <div className="bg-white p-1.5 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex gap-2">
          <button 
            onClick={() => setActiveTab('active')}
            className={cn(
              "flex-1 py-3 rounded-xl text-xs font-bold transition-all",
              activeTab === 'active' ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-slate-400 hover:bg-slate-50"
            )}
          >
            Active
          </button>
          <button 
            onClick={() => setActiveTab('history')}
            className={cn(
              "flex-1 py-3 rounded-xl text-xs font-bold transition-all",
              activeTab === 'history' ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-slate-400 hover:bg-slate-50"
            )}
          >
            History
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
            {activeTab === 'active' ? 'Current Deliveries' : 'Past Deliveries'}
          </h3>
          <button className="text-primary text-[10px] font-bold flex items-center gap-1">
            Filter <Filter className="w-3 h-3" />
          </button>
        </div>

        <div className="space-y-4">
          {(activeTab === 'active' ? activeDeliveries : historyDeliveries).map(delivery => (
            <motion.div 
              key={delivery.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 space-y-4"
            >
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center p-2 border border-slate-100">
                    <img src={delivery.logo} alt={delivery.company} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">{delivery.company}</h4>
                    <p className="text-[10px] text-slate-400">Order {delivery.orderId}</p>
                  </div>
                </div>
                <div className={cn("px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-wider border", delivery.color)}>
                  {delivery.type}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400">
                    <Package className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400">Status</p>
                    <p className="text-xs font-bold text-slate-700">{delivery.status}</p>
                  </div>
                </div>

                {delivery.time && (
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400">{delivery.type === 'Delivered' ? 'Delivered At' : 'Expected'}</p>
                      <p className="text-xs font-bold text-slate-700">{delivery.time}</p>
                    </div>
                  </div>
                )}

                {delivery.action && (
                  <button 
                    onClick={() => navigate('/delivery-approval')}
                    className="w-full py-3 bg-primary/5 text-primary rounded-xl text-[10px] font-bold border border-primary/10 hover:bg-primary hover:text-white transition-all"
                  >
                    Action Required: {delivery.action}
                  </button>
                )}
              </div>

              <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                <button className="text-[10px] font-bold text-slate-400 hover:text-primary transition-colors">View Details</button>
                <button className="text-[10px] font-bold text-primary flex items-center gap-1">
                  Track <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white border-t border-slate-100 p-4 flex justify-around items-center z-30">
        <button onClick={() => navigate('/dashboard')} className="flex flex-col items-center gap-1 text-slate-400">
          <HomeIcon className="w-5 h-5" />
          <span className="text-[10px] font-bold">Home</span>
        </button>
        <button onClick={() => navigate('/family')} className="flex flex-col items-center gap-1 text-slate-400">
          <Users className="w-5 h-5" />
          <span className="text-[10px] font-bold">Members</span>
        </button>
        <button onClick={() => navigate('/delivery')} className="flex flex-col items-center gap-1 text-primary">
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
    </div>
  );
};

export default DeliveryList;
