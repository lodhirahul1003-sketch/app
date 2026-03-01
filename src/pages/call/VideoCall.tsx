import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, PhoneOff, Mic, MicOff, Video, VideoOff } from 'lucide-react';
import { cn } from '../../lib/utils';

const VideoCall = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col bg-black relative">
      {/* Remote Video (Doorbell) */}
      <div className="absolute inset-0">
        <img 
          src="https://picsum.photos/seed/visitor/1080/1920" 
          alt="Visitor" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Header */}
      <div className="relative z-10 p-6 flex items-center justify-between">
        <button onClick={() => navigate('/dashboard')} className="w-10 h-10 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10">
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <div className="text-center">
          <h3 className="text-white font-bold text-sm">Live Feed</h3>
        </div>
        <div className="w-10 h-10" /> {/* Spacer */}
      </div>

      {/* Time Overlay */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 z-10 text-white text-center">
        <p className="text-xs font-medium opacity-80">12: 20:11 AM</p>
      </div>

      {/* Controls */}
      <div className="mt-auto relative z-10 p-8 pb-12 space-y-8">
        <div className="flex justify-center">
          <button 
            onClick={() => navigate('/dashboard')}
            className="bg-red-500 text-white px-8 py-3 rounded-full flex items-center gap-3 font-bold shadow-xl shadow-red-500/30 active:scale-95 transition-all"
          >
            <PhoneOff className="w-5 h-5" /> End Live
          </button>
        </div>

        <div className="flex items-center justify-center gap-6">
          <button 
            onClick={() => setIsMuted(!isMuted)}
            className={cn(
              "w-14 h-14 rounded-full flex items-center justify-center transition-all",
              isMuted ? "bg-white text-slate-900" : "bg-white/10 text-white backdrop-blur-md border border-white/20"
            )}
          >
            {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
          </button>

          <button 
            onClick={() => setIsVideoOff(!isVideoOff)}
            className={cn(
              "w-14 h-14 rounded-full flex items-center justify-center transition-all",
              isVideoOff ? "bg-white text-slate-900" : "bg-white/10 text-white backdrop-blur-md border border-white/20"
            )}
          >
            {isVideoOff ? <VideoOff className="w-6 h-6" /> : <Video className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCall;
