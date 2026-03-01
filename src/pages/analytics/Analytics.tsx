import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, 
  Activity, 
  Package, 
  Users, 
  TrendingUp, 
  Calendar,
  Home as HomeIcon,
  Settings,
  Package as PackageIcon
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area 
} from 'recharts';

const Analytics = () => {
  const navigate = useNavigate();

  const deliveryData = [
    { name: 'Mon', count: 4 },
    { name: 'Tue', count: 3 },
    { name: 'Wed', count: 6 },
    { name: 'Thu', count: 2 },
    { name: 'Fri', count: 8 },
    { name: 'Sat', count: 5 },
    { name: 'Sun', count: 3 },
  ];

  const visitorData = [
    { name: '9 AM', count: 2 },
    { name: '12 PM', count: 5 },
    { name: '3 PM', count: 8 },
    { name: '6 PM', count: 4 },
    { name: '9 PM', count: 1 },
  ];

  return (
    <div className="flex-1 flex flex-col bg-slate-50 pb-24">
      <div className="bg-white p-6 border-b border-slate-100">
        <div className="flex items-center gap-4 mb-2">
          <button onClick={() => navigate('/dashboard')} className="p-1">
            <ChevronLeft className="w-6 h-6 text-slate-600" />
          </button>
          <h2 className="text-xl font-bold">Analytics</h2>
        </div>
        <p className="text-xs text-slate-500 ml-10">Insights into your home activity</p>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar p-6 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm space-y-2">
            <div className="w-10 h-10 bg-blue-50 text-primary rounded-xl flex items-center justify-center">
              <Package className="w-5 h-5" />
            </div>
            <h4 className="text-[10px] font-bold text-slate-400 uppercase">Total Deliveries</h4>
            <p className="text-2xl font-bold text-slate-800">31</p>
            <div className="flex items-center gap-1 text-emerald-500">
              <TrendingUp className="w-3 h-3" />
              <span className="text-[10px] font-bold">+12% this month</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm space-y-2">
            <div className="w-10 h-10 bg-emerald-50 text-emerald-500 rounded-xl flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="text-[10px] font-bold text-slate-400 uppercase">Total Visitors</h4>
            <p className="text-2xl font-bold text-slate-800">142</p>
            <div className="flex items-center gap-1 text-emerald-500">
              <TrendingUp className="w-3 h-3" />
              <span className="text-[10px] font-bold">+5% this month</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-[40px] border border-slate-100 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-800">Weekly Deliveries</h3>
            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
              <Calendar className="w-3 h-3" />
              <span>Last 7 Days</span>
            </div>
          </div>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={deliveryData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                <YAxis hide />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-[40px] border border-slate-100 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-800">Visitor Traffic</h3>
            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
              <Activity className="w-3 h-3" />
              <span>Peak Hours</span>
            </div>
          </div>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={visitorData}>
                <defs>
                  <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="count" stroke="#10b981" fillOpacity={1} fill="url(#colorCount)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
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
        <button onClick={() => navigate('/delivery')} className="flex flex-col items-center gap-1 text-slate-400">
          <PackageIcon className="w-5 h-5" />
          <span className="text-[10px] font-bold">Delivery</span>
        </button>
        <button onClick={() => navigate('/analytics')} className="flex flex-col items-center gap-1 text-primary">
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

export default Analytics;
