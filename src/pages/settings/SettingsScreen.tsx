import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, 
  User, 
  Smartphone, 
  Bell, 
  Shield, 
  CreditCard, 
  Globe, 
  HelpCircle, 
  LogOut, 
  ChevronRight,
  Home as HomeIcon,
  Users,
  Package,
  Activity,
  Settings
} from 'lucide-react';
import { hapticFeedback } from '../../lib/haptics';

const SettingsScreen = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    hapticFeedback.light();
    navigate('/dashboard');
  };

  const handleNavigate = (path: string) => {
    hapticFeedback.light();
    navigate(path);
  };

  const handleLogout = () => {
    hapticFeedback.heavy();
    if (confirm('Are you sure you want to logout?')) {
      hapticFeedback.success();
      navigate('/login');
    }
  };

  const sections = [
    {
      title: 'Profile Settings',
      items: [
        { icon: User, label: 'Edit Profile', path: '/edit-profile' },
        { icon: Smartphone, label: 'Linked Devices', path: '/linked-devices' },
        { icon: Shield, label: 'Device Management', path: '/device-management' },
      ]
    },
    {
      title: 'App Settings',
      items: [
        { icon: Bell, label: 'Notifications', path: '/notifications' },
        { icon: CreditCard, label: 'NFC Card Settings', path: '/nfc-card' },
        { icon: Globe, label: 'Language', path: '/language' },
      ]
    },
    {
      title: 'Support',
      items: [
        { icon: HelpCircle, label: 'Help & Support', path: '/help-support' },
      ]
    }
  ];

  return (
    <div className="flex-1 flex flex-col bg-slate-50 pb-24">
      <div className="bg-white p-6 border-b border-slate-100">
        <div className="flex items-center gap-4">
          <button onClick={handleBack} className="p-1">
            <ChevronLeft className="w-6 h-6 text-slate-600" />
          </button>
          <h2 className="text-xl font-bold">Settings</h2>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar p-6 space-y-8">
        {sections.map((section, i) => (
          <div key={i} className="space-y-4">
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">{section.title}</h3>
            <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
              {section.items.map((item, j) => (
                <button 
                  key={j} 
                  onClick={() => handleNavigate(item.path)}
                  className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0 active:bg-slate-100"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-bold text-slate-700">{item.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                </button>
              ))}
            </div>
          </div>
        ))}

        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-4 p-4 bg-red-50 rounded-3xl text-red-500 font-bold hover:bg-red-100 transition-colors active:scale-95"
        >
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
            <LogOut className="w-5 h-5" />
          </div>
          <span className="text-sm">Logout from all devices</span>
        </button>
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white border-t border-slate-100 p-4 flex justify-around items-center z-30">
        <button onClick={() => handleNavigate('/dashboard')} className="flex flex-col items-center gap-1 text-slate-400">
          <HomeIcon className="w-5 h-5" />
          <span className="text-[10px] font-bold">Home</span>
        </button>
        <button onClick={() => handleNavigate('/family')} className="flex flex-col items-center gap-1 text-slate-400">
          <Users className="w-5 h-5" />
          <span className="text-[10px] font-bold">Members</span>
        </button>
        <button onClick={() => handleNavigate('/delivery')} className="flex flex-col items-center gap-1 text-slate-400">
          <Package className="w-5 h-5" />
          <span className="text-[10px] font-bold">Delivery</span>
        </button>
        <button onClick={() => handleNavigate('/analytics')} className="flex flex-col items-center gap-1 text-slate-400">
          <Activity className="w-5 h-5" />
          <span className="text-[10px] font-bold">Analytics</span>
        </button>
        <button onClick={() => handleNavigate('/settings')} className="flex flex-col items-center gap-1 text-primary">
          <Settings className="w-5 h-5" />
          <span className="text-[10px] font-bold">Settings</span>
        </button>
      </div>
    </div>
  );
};

export default SettingsScreen;
