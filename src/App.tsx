import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bell, 
  Shield, 
  Users, 
  Smartphone, 
  ArrowRight, 
  ChevronLeft, 
  Video, 
  Mic, 
  MicOff, 
  VideoOff, 
  PhoneOff,
  Home as HomeIcon,
  History,
  Settings,
  User,
  Menu,
  X,
  Lock,
  Mail,
  Phone
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const SplashScreen = ({ onComplete }: { onComplete: () => void, key?: string }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-xl mb-4">
          <Shield className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-4xl text-white font-bold tracking-tighter">Dvaari</h1>
      </motion.div>
    </motion.div>
  );
};

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      title: "Welcome to Dvaari",
      description: "Your smart doorbell companion that makes every delivery safe, simple, and secure.",
      image: "https://picsum.photos/seed/doorbell/800/800",
      icon: <Bell className="w-8 h-8 text-primary" />
    },
    {
      title: "Verified Deliveries",
      description: "See who's at your door, verify packages instantly, and accept deliveries.",
      image: "https://picsum.photos/seed/delivery/800/800",
      icon: <Shield className="w-8 h-8 text-primary" />
    },
    {
      title: "Family Connected",
      description: "Everyone in your household stays in the loop. Manage access and coordinate seamlessly.",
      image: "https://picsum.photos/seed/family/800/800",
      icon: <Users className="w-8 h-8 text-primary" />
    },
    {
      title: "Simple for Everyone",
      description: "From tech-savvy teens to loving grandparents - just tap your card and you're done.",
      image: "https://picsum.photos/seed/simple/800/800",
      icon: <Smartphone className="w-8 h-8 text-primary" />
    }
  ];

  const next = () => {
    if (step < slides.length - 1) {
      setStep(step + 1);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="flex-1 flex flex-col p-6">
      <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8">
        <motion.div
          key={step}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          className="w-full space-y-8"
        >
          <div className="relative aspect-square w-full max-w-[300px] mx-auto rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={slides[step].image} 
              alt={slides[step].title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">{slides[step].title}</h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              {slides[step].description}
            </p>
          </div>
        </motion.div>

        <div className="flex gap-2">
          {slides.map((_, i) => (
            <div 
              key={i} 
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === step ? "w-8 bg-primary" : "w-2 bg-slate-200"
              )} 
            />
          ))}
        </div>
      </div>

      <div className="space-y-3 pt-8">
        <button onClick={next} className="btn-primary w-full flex items-center justify-center gap-2">
          {step === slides.length - 1 ? "Get Started" : "Next"}
          <ArrowRight className="w-5 h-5" />
        </button>
        <button onClick={() => navigate('/login')} className="w-full py-4 text-slate-400 font-medium">
          Skip
        </button>
      </div>
    </div>
  );
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const navigate = useNavigate();

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOtpSent(true);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="flex-1 flex flex-col p-8">
      <div className="pt-12 pb-8">
        <h1 className="text-4xl font-bold mb-2">Hello!</h1>
        <p className="text-slate-500">Securely log in with your email or mobile number</p>
      </div>

      {!isOtpSent ? (
        <form onSubmit={handleSendOtp} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 ml-1">Email or Phone</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Enter email or phone" 
                className="input-field pl-12"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn-primary w-full">
            Send Verification Code
          </button>
          <div className="text-center">
            <p className="text-slate-500">
              Don't have an account? <button type="button" onClick={() => navigate('/signup')} className="text-primary font-semibold">Sign up</button>
            </p>
          </div>
        </form>
      ) : (
        <form onSubmit={handleVerifyOtp} className="space-y-8">
          <div className="space-y-4">
            <div className="text-center">
              <h2 className="text-2xl font-bold">Verify Code</h2>
              <p className="text-slate-500">Enter the code we just sent to {email}</p>
            </div>
            <div className="flex justify-between gap-3 px-4">
              {otp.map((digit, i) => (
                <input
                  key={i}
                  type="text"
                  maxLength={1}
                  className="w-16 h-16 text-center text-2xl font-bold bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                  value={digit}
                  onChange={(e) => {
                    const newOtp = [...otp];
                    newOtp[i] = e.target.value;
                    setOtp(newOtp);
                    if (e.target.value && e.target.nextSibling) {
                      (e.target.nextSibling as HTMLInputElement).focus();
                    }
                  }}
                />
              ))}
            </div>
            <button type="button" className="w-full text-primary font-medium text-sm">
              Didn't get OTP? Resend code
            </button>
          </div>
          <button type="submit" className="btn-primary w-full">
            Verify & Continue
          </button>
          <button type="button" onClick={() => setIsOtpSent(false)} className="w-full text-slate-400 font-medium">
            Change Email/Phone
          </button>
        </form>
      )}
    </div>
  );
};

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-1 flex flex-col p-8">
      <div className="pt-12 pb-8">
        <h1 className="text-4xl font-bold mb-2">Create Account</h1>
        <p className="text-slate-500">Register your account today using a valid email or mobile</p>
      </div>

      <form className="space-y-5">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
          <input type="text" placeholder="Enter your name" className="input-field" required />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
          <input type="email" placeholder="Enter email address" className="input-field" required />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 ml-1">Mobile Number</label>
          <input type="tel" placeholder="+91 9368327709" className="input-field" required />
        </div>
        
        <div className="pt-4">
          <button type="button" onClick={() => navigate('/dashboard')} className="btn-primary w-full">
            Create Account
          </button>
        </div>
        
        <div className="text-center">
          <p className="text-slate-500">
            Already have an account? <button type="button" onClick={() => navigate('/login')} className="text-primary font-semibold">Sign In</button>
          </p>
        </div>
      </form>
    </div>
  );
};

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const activities = [
    { id: 1, type: 'delivery', title: 'Package Delivered', time: '10:30 AM', status: 'Verified' },
    { id: 2, type: 'visitor', title: 'Unknown Visitor', time: '09:15 AM', status: 'Missed' },
    { id: 3, type: 'family', title: 'Rahul Entered', time: '08:00 AM', status: 'Safe' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-slate-50">
      {/* Header */}
      <div className="bg-white p-6 flex items-center justify-between border-b border-slate-100">
        <button onClick={() => setIsMenuOpen(true)} className="p-2 -ml-2">
          <Menu className="w-6 h-6 text-slate-600" />
        </button>
        <h2 className="text-xl font-bold">Dvaari</h2>
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <User className="w-5 h-5 text-primary" />
        </div>
      </div>

      {/* Live View Preview */}
      <div className="p-6">
        <div className="relative aspect-video bg-slate-900 rounded-3xl overflow-hidden shadow-lg group cursor-pointer" onClick={() => navigate('/call')}>
          <img 
            src="https://picsum.photos/seed/door/800/450" 
            alt="Door View" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
              <Video className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Live
          </div>
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-xs font-medium opacity-80 uppercase tracking-widest">Front Door</p>
            <h3 className="text-lg font-bold">Main Entrance</h3>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 grid grid-cols-2 gap-4">
        <button className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center gap-2">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
            <Lock className="w-6 h-6 text-blue-600" />
          </div>
          <span className="text-sm font-semibold">Unlock Door</span>
        </button>
        <button className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center gap-2">
          <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
            <Users className="w-6 h-6 text-emerald-600" />
          </div>
          <span className="text-sm font-semibold">Family Access</span>
        </button>
      </div>

      {/* Recent Activity */}
      <div className="flex-1 p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">Recent Activity</h3>
          <button className="text-primary text-sm font-semibold">View All</button>
        </div>
        <div className="space-y-3">
          {activities.map(activity => (
            <div key={activity.id} className="bg-white p-4 rounded-2xl flex items-center gap-4 shadow-sm border border-slate-100">
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center",
                activity.type === 'delivery' ? "bg-orange-50 text-orange-600" :
                activity.type === 'visitor' ? "bg-red-50 text-red-600" : "bg-blue-50 text-blue-600"
              )}>
                {activity.type === 'delivery' ? <Smartphone className="w-6 h-6" /> :
                 activity.type === 'visitor' ? <User className="w-6 h-6" /> : <Users className="w-6 h-6" />}
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-800">{activity.title}</h4>
                <p className="text-xs text-slate-500">{activity.time} • {activity.status}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="bg-white border-t border-slate-100 p-4 flex justify-around items-center">
        <button className="p-2 text-primary">
          <HomeIcon className="w-6 h-6" />
        </button>
        <button className="p-2 text-slate-400">
          <History className="w-6 h-6" />
        </button>
        <button className="p-2 text-slate-400">
          <Bell className="w-6 h-6" />
        </button>
        <button className="p-2 text-slate-400">
          <Settings className="w-6 h-6" />
        </button>
      </div>

      {/* Side Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/40 z-40"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-4/5 bg-white z-50 p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Dvaari</h2>
                </div>
                <button onClick={() => setIsMenuOpen(false)}>
                  <X className="w-6 h-6 text-slate-400" />
                </button>
              </div>

              <nav className="flex-1 space-y-6">
                <button className="flex items-center gap-4 text-lg font-semibold text-slate-800 w-full">
                  <User className="w-6 h-6 text-primary" /> My Profile
                </button>
                <button className="flex items-center gap-4 text-lg font-semibold text-slate-800 w-full">
                  <Smartphone className="w-6 h-6 text-primary" /> Connected Devices
                </button>
                <button className="flex items-center gap-4 text-lg font-semibold text-slate-800 w-full">
                  <Shield className="w-6 h-6 text-primary" /> Security Settings
                </button>
                <button className="flex items-center gap-4 text-lg font-semibold text-slate-800 w-full">
                  <Users className="w-6 h-6 text-primary" /> Family Members
                </button>
              </nav>

              <button 
                onClick={() => navigate('/login')}
                className="flex items-center gap-4 text-lg font-semibold text-red-500 w-full pt-8 border-t border-slate-100"
              >
                <PhoneOff className="w-6 h-6" /> Log Out
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

const VideoCall = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col bg-slate-900 relative">
      {/* Remote Video (Doorbell) */}
      <div className="absolute inset-0">
        <img 
          src="https://picsum.photos/seed/visitor/1080/1920" 
          alt="Visitor" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Header */}
      <div className="relative z-10 p-6 flex items-center justify-between">
        <button onClick={() => navigate('/dashboard')} className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <div className="text-center">
          <h3 className="text-white font-bold">Front Door</h3>
          <p className="text-white/60 text-xs uppercase tracking-widest">04:22</p>
        </div>
        <div className="w-10 h-10" /> {/* Spacer */}
      </div>

      {/* Local Video Preview */}
      <div className="absolute top-24 right-6 w-32 aspect-[3/4] bg-slate-800 rounded-2xl overflow-hidden border-2 border-white/30 shadow-2xl z-20">
        {!isVideoOff ? (
          <img 
            src="https://picsum.photos/seed/me/400/600" 
            alt="Me" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <User className="w-8 h-8 text-slate-500" />
          </div>
        )}
      </div>

      {/* Visitor Info */}
      <div className="mt-auto relative z-10 p-8 text-center space-y-2">
        <h2 className="text-3xl font-bold text-white">Delivery Agent</h2>
        <p className="text-white/70">Amazon Logistics • Verified</p>
      </div>

      {/* Controls */}
      <div className="relative z-10 p-8 pb-12 flex items-center justify-center gap-6">
        <button 
          onClick={() => setIsMuted(!isMuted)}
          className={cn(
            "w-16 h-16 rounded-full flex items-center justify-center transition-all",
            isMuted ? "bg-white text-slate-900" : "bg-white/20 text-white backdrop-blur-md border border-white/30"
          )}
        >
          {isMuted ? <MicOff className="w-7 h-7" /> : <Mic className="w-7 h-7" />}
        </button>

        <button 
          onClick={() => navigate('/dashboard')}
          className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/40 active:scale-90 transition-all"
        >
          <PhoneOff className="w-8 h-8 text-white" />
        </button>

        <button 
          onClick={() => setIsVideoOff(!isVideoOff)}
          className={cn(
            "w-16 h-16 rounded-full flex items-center justify-center transition-all",
            isVideoOff ? "bg-white text-slate-900" : "bg-white/20 text-white backdrop-blur-md border border-white/30"
          )}
        >
          {isVideoOff ? <VideoOff className="w-7 h-7" /> : <Video className="w-7 h-7" />}
        </button>
      </div>

      {/* Quick Responses */}
      <div className="relative z-10 px-6 pb-8 overflow-x-auto flex gap-3 no-scrollbar">
        {['Leave at door', 'Coming in 2 mins', 'Wrong house', 'Who is it?'].map(text => (
          <button key={text} className="whitespace-nowrap bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
            {text}
          </button>
        ))}
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="mobile-container">
      <BrowserRouter>
        <AnimatePresence mode="wait">
          {showSplash ? (
            <SplashScreen key="splash" onComplete={() => setShowSplash(false)} />
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-1 flex flex-col"
            >
              <Routes>
                <Route path="/" element={<Onboarding />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/call" element={<VideoCall />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </motion.div>
          )}
        </AnimatePresence>
      </BrowserRouter>
    </div>
  );
}
