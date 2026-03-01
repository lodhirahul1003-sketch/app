import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bell, 
  Settings, 
  Shield, 
  Package, 
  Activity, 
  Users, 
  Home as HomeIcon, 
  LogOut, 
  Info, 
  History, 
  Video, 
  User, 
  ChevronLeft,
  X
} from 'lucide-react';
import { cn } from '../../lib/utils';

const Dashboard = () => {
  const [isAway, setIsAway] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationLang, setNotificationLang] = useState<'en' | 'hi'>('en');
  const navigate = useNavigate();

  useEffect(() => {
    // Show notification after 2 seconds for demo
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const activities = [
    { id: 1, type: 'delivery', title: 'Dell Laptop Delivered', time: 'Today, 2:34 PM', status: 'Accepted by priya • Order #FK-2891', img: 'https://picsum.photos/seed/laptop/100/100' },
    { id: 2, type: 'delivery', title: 'Nike Shoes Delivered', time: 'Yesterday, 4:12 PM', status: 'Accepted by Arjun • COD ₹ 2,499', img: 'https://picsum.photos/seed/shoes/100/100' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-slate-50 relative overflow-hidden">
      {/* Side Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm z-50"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 left-0 bottom-0 w-[280px] bg-white z-50 shadow-2xl flex flex-col"
            >
              <div className="p-8 bg-primary text-white">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center font-bold text-2xl mb-4 border border-white/30">RK</div>
                <h3 className="text-xl font-bold">Rajesh Kumar</h3>
                <p className="text-white/60 text-xs">rajesh.kumar@gmail.com</p>
              </div>
              
              <div className="flex-1 p-4 space-y-2 overflow-y-auto">
                {[
                  { icon: HomeIcon, label: 'Dashboard', path: '/dashboard' },
                  { icon: Users, label: 'Family Members', path: '/family' },
                  { icon: Package, label: 'Deliveries', path: '/delivery' },
                  { icon: Activity, label: 'Analytics', path: '/analytics' },
                  { icon: Shield, label: 'Security Settings', path: '/settings' },
                  { icon: History, label: 'Activity Log', path: '/dashboard' },
                  { icon: Info, label: 'Help & Support', path: '/settings' },
                ].map((item, i) => (
                  <button 
                    key={i} 
                    onClick={() => { navigate(item.path); setIsMenuOpen(false); }}
                    className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 text-slate-600 font-bold transition-colors"
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="text-sm">{item.label}</span>
                  </button>
                ))}
              </div>
              
              <div className="p-6 border-t border-slate-100">
                <button className="w-full flex items-center gap-4 p-4 rounded-xl text-red-500 font-bold hover:bg-red-50 transition-colors">
                  <LogOut className="w-5 h-5" />
                  <span className="text-sm">Logout</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="bg-primary p-6 pb-12 rounded-b-[40px] relative">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsMenuOpen(true)} className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center border border-white/30">
              <div className="space-y-1">
                <div className="w-4 h-0.5 bg-white rounded-full" />
                <div className="w-3 h-0.5 bg-white rounded-full" />
                <div className="w-4 h-0.5 bg-white rounded-full" />
              </div>
            </button>
            <div className="text-white">
              <h2 className="text-2xl font-bold">Welcome Back</h2>
              <p className="text-white/70 text-sm">Your home is secured</p>
            </div>
          </div>
          <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
            <Bell className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Active/Away Toggle */}
        <div className="bg-white/10 backdrop-blur-md p-1 rounded-xl flex border border-white/20">
          <button 
            onClick={() => setIsAway(false)}
            className={cn(
              "flex-1 py-2 text-sm font-bold rounded-lg transition-all",
              !isAway ? "bg-white text-primary shadow-lg" : "text-white/60"
            )}
          >
            Active
          </button>
          <button 
            onClick={() => { setIsAway(true); navigate('/away-mode'); }}
            className={cn(
              "flex-1 py-2 text-sm font-bold rounded-lg transition-all",
              isAway ? "bg-white text-primary shadow-lg" : "text-white/60"
            )}
          >
            Away
          </button>
        </div>
      </div>

      <div className="px-6 -mt-6 space-y-6 pb-24">
        {/* Live Feed Card */}
        <div className="bg-white p-4 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
          <button onClick={() => navigate('/call')} className="w-full flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                <Video className="w-5 h-5 text-primary" />
              </div>
              <span className="font-bold text-slate-800">Live Feed</span>
            </div>
            <ChevronLeft className="w-5 h-5 text-slate-300 rotate-180" />
          </button>
          
          <div className="relative aspect-video bg-slate-900 rounded-2xl overflow-hidden group cursor-pointer" onClick={() => navigate('/call')}>
            <img 
              src="https://picsum.photos/seed/door/800/450" 
              alt="Door View" 
              className="w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-3 left-3 flex items-center gap-2 bg-red-500 text-white px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              Live
            </div>
          </div>
        </div>

        {/* Visitor Alert */}
        <div className="bg-emerald-50 p-4 rounded-3xl border border-emerald-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
            <User className="w-6 h-6 text-emerald-600" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-sm font-bold text-slate-800">Visitor at Door</h4>
              <span className="text-[10px] font-bold text-orange-500 bg-orange-50 px-2 py-0.5 rounded-full">Pending</span>
            </div>
            <p className="text-[10px] text-slate-500 mb-2">Click to view details</p>
            <div className="flex gap-2">
              <button onClick={() => navigate('/delivery-approval')} className="flex-1 py-2 bg-white border border-emerald-200 text-emerald-600 text-xs font-bold rounded-lg">Approve</button>
              <button className="flex-1 py-2 bg-white border border-red-200 text-red-600 text-xs font-bold rounded-lg">Deny</button>
            </div>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Users, label: 'Manage Family', color: 'bg-blue-50 text-blue-600', path: '/family' },
              { icon: Package, label: 'Delivery Access', color: 'bg-indigo-50 text-indigo-600', path: '/delivery-access' },
              { icon: Shield, label: 'Backup Person', color: 'bg-emerald-50 text-emerald-600', path: '/backup' },
              { icon: Settings, label: 'Security', color: 'bg-orange-50 text-orange-600', path: '/settings' }
            ].map((action, i) => (
              <button key={i} onClick={() => navigate(action.path)} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center gap-3 hover:shadow-md transition-all">
                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", action.color)}>
                  <action.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-slate-700">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">Recent Activity</h3>
            <button className="text-slate-400 text-xs font-semibold flex items-center gap-1">View All <ChevronLeft className="w-3 h-3 rotate-180" /></button>
          </div>
          <div className="space-y-3">
            {activities.map(activity => (
              <div key={activity.id} className="bg-white p-3 rounded-2xl flex items-center gap-4 shadow-sm border border-slate-100">
                <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={activity.img} alt={activity.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-slate-800 text-sm truncate">{activity.title}</h4>
                  <p className="text-[10px] text-slate-400 mb-1">{activity.status}</p>
                  <p className="text-[10px] text-slate-500 flex items-center gap-1">
                    <History className="w-3 h-3" /> {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white border-t border-slate-100 p-4 flex justify-around items-center z-30">
        <button onClick={() => navigate('/dashboard')} className="flex flex-col items-center gap-1 text-primary">
          <HomeIcon className="w-5 h-5" />
          <span className="text-[10px] font-bold">Home</span>
        </button>
        <button onClick={() => navigate('/family')} className="flex flex-col items-center gap-1 text-slate-400">
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

      {/* Simple Mode Notification Modals */}
      <AnimatePresence>
        {showNotification && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setShowNotification(false)} 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.9, opacity: 0, y: 20 }} 
              className="relative w-full max-w-sm bg-white rounded-[40px] p-8 text-center space-y-6 shadow-2xl"
            >
              <button 
                onClick={() => setShowNotification(false)} 
                className="absolute top-4 right-4 p-2 text-slate-300 hover:text-slate-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex justify-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center relative">
                  <Bell className="w-8 h-8 text-primary" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full" />
                </div>
              </div>

              <div className="space-y-2">
                {notificationLang === 'hi' ? (
                  <>
                    <h3 className="text-xl font-bold text-slate-800">आगामी डिलीवरी</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      आपकी डिलीवरी जल्द आने वाली है<br/>
                      कृपया उस समय घर पर उपलब्ध रहें<br/>
                      डिलीवरी आने पर पुष्टि के लिए अपना NFC कार्ड दरवाजे के पैनल पर टैप करें
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-slate-800">Upcoming Delivery</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Your delivery is arriving soon.<br/>
                      Please ensure someone is available.<br/>
                      Tap your NFC card on the door panel to verify when the delivery partner arrives.
                    </p>
                  </>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => setShowNotification(false)} 
                  className="w-full py-4 bg-slate-100 text-slate-800 font-bold rounded-2xl hover:bg-slate-200 transition-colors"
                >
                  Close
                </button>
                <button 
                  onClick={() => setNotificationLang(notificationLang === 'en' ? 'hi' : 'en')}
                  className="text-[10px] font-bold text-primary uppercase tracking-widest"
                >
                  Switch to {notificationLang === 'en' ? 'Hindi' : 'English'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;
