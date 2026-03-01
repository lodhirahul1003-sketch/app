import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Shield } from 'lucide-react';

// --- Pages ---
import Onboarding from './pages/auth/Onboarding';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import ConnectDevice from './pages/device/ConnectDevice';
import Scanner from './pages/device/Scanner';
import AppPermissions from './pages/device/AppPermissions';
import Dashboard from './pages/dashboard/Dashboard';
import FamilyMembers from './pages/dashboard/FamilyMembers';
import DeliveryList from './pages/delivery/DeliveryList';
import DeliveryApproval from './pages/delivery/DeliveryApproval';
import Analytics from './pages/analytics/Analytics';
import SettingsScreen from './pages/settings/SettingsScreen';
import AwayMode from './pages/settings/AwayMode';
import SetTimeSchedule from './pages/settings/SetTimeSchedule';
import EditProfile from './pages/settings/EditProfile';
import LinkedDevices from './pages/settings/LinkedDevices';
import DeviceManagement from './pages/settings/DeviceManagement';
import NotificationSettings from './pages/settings/NotificationSettings';
import NFCCardSettings from './pages/settings/NFCCardSettings';
import LanguageSettings from './pages/settings/LanguageSettings';
import HelpSupport from './pages/settings/HelpSupport';
import BackupPerson from './pages/settings/BackupPerson';
import DeliveryAccessMethod from './pages/delivery/DeliveryAccessMethod';
import NFCCardAccess from './pages/delivery/NFCCardAccess';
import DvaariBoxManagement from './pages/delivery/DvaariBoxManagement';
import CreateAuthorization from './pages/delivery/CreateAuthorization';
import AuthorizationSuccess from './pages/delivery/AuthorizationSuccess';
import VideoCall from './pages/call/VideoCall';

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

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-100 flex justify-center">
        <div className="w-full max-w-[430px] bg-white shadow-2xl min-h-screen flex flex-col relative overflow-hidden">
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
                  <Route path="/connect-device" element={<ConnectDevice />} />
                  <Route path="/scanner" element={<Scanner />} />
                  <Route path="/permissions" element={<AppPermissions />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/family" element={<FamilyMembers />} />
                  <Route path="/delivery" element={<DeliveryList />} />
                  <Route path="/delivery-approval" element={<DeliveryApproval />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="/settings" element={<SettingsScreen />} />
                  <Route path="/away-mode" element={<AwayMode />} />
                  <Route path="/set-schedule" element={<SetTimeSchedule />} />
                  <Route path="/edit-profile" element={<EditProfile />} />
                  <Route path="/linked-devices" element={<LinkedDevices />} />
                  <Route path="/device-management" element={<DeviceManagement />} />
                  <Route path="/notifications" element={<NotificationSettings />} />
                  <Route path="/nfc-card" element={<NFCCardSettings />} />
                  <Route path="/language" element={<LanguageSettings />} />
                  <Route path="/help-support" element={<HelpSupport />} />
                  <Route path="/backup-person" element={<BackupPerson />} />
                  <Route path="/delivery-access" element={<DeliveryAccessMethod />} />
                  <Route path="/nfc-access" element={<NFCCardAccess />} />
                  <Route path="/dvaari-box" element={<DvaariBoxManagement />} />
                  <Route path="/create-authorization" element={<CreateAuthorization />} />
                  <Route path="/authorization-success" element={<AuthorizationSuccess />} />
                  <Route path="/video-call" element={<VideoCall />} />
                </Routes>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
