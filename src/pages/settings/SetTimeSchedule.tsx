import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, Clock, ChevronRight, CheckCircle } from 'lucide-react';
import { cn } from '../../lib/utils';

const SetTimeSchedule = () => {
  const navigate = useNavigate();
  const [startTime, setStartTime] = useState('08:30 AM');
  const [endTime, setEndTime] = useState('06:00 PM');
  const [showStartDropdown, setShowStartDropdown] = useState(false);
  const [showEndDropdown, setShowEndDropdown] = useState(false);

  const timeOptions = [
    '08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM', '10:00 AM',
    '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM',
    '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM'
  ];

  return (
    <div className="flex-1 flex flex-col bg-slate-50 relative">
      <div className="bg-primary p-6 pb-8 rounded-b-[40px]">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => navigate(-1)} className="p-1">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <h2 className="text-xl font-bold text-white">Set Time Schedule</h2>
        </div>
      </div>

      <div className="p-6 space-y-6 overflow-y-auto no-scrollbar pb-32">
        <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 flex gap-4">
          <Clock className="w-6 h-6 text-primary flex-shrink-0" />
          <p className="text-[10px] text-blue-600 leading-relaxed">Set your regular away hours. The system will automatically activate during this time period.</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase ml-2">Start Time</label>
            <div className="relative">
              <button 
                onClick={() => setShowStartDropdown(!showStartDropdown)}
                className="w-full p-4 bg-white rounded-2xl border border-slate-100 flex items-center justify-between text-sm font-bold text-slate-800"
              >
                {startTime}
                <ChevronRight className={cn("w-4 h-4 text-slate-300 transition-transform", showStartDropdown ? "rotate-90" : "")} />
              </button>
              <AnimatePresence>
                {showStartDropdown && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-slate-100 shadow-xl z-20 max-h-48 overflow-y-auto no-scrollbar"
                  >
                    {timeOptions.map(time => (
                      <button 
                        key={time}
                        onClick={() => { setStartTime(time); setShowStartDropdown(false); }}
                        className="w-full p-3 text-left text-xs font-bold text-slate-600 hover:bg-slate-50 flex items-center justify-between"
                      >
                        {time}
                        {startTime === time && <CheckCircle className="w-3 h-3 text-primary" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase ml-2">End Time</label>
            <div className="relative">
              <button 
                onClick={() => setShowEndDropdown(!showEndDropdown)}
                className="w-full p-4 bg-white rounded-2xl border border-slate-100 flex items-center justify-between text-sm font-bold text-slate-800"
              >
                {endTime}
                <ChevronRight className={cn("w-4 h-4 text-slate-300 transition-transform", showEndDropdown ? "rotate-90" : "")} />
              </button>
              <AnimatePresence>
                {showEndDropdown && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-slate-100 shadow-xl z-20 max-h-48 overflow-y-auto no-scrollbar"
                  >
                    {timeOptions.map(time => (
                      <button 
                        key={time}
                        onClick={() => { setEndTime(time); setShowEndDropdown(false); }}
                        className="w-full p-3 text-left text-xs font-bold text-slate-600 hover:bg-slate-50 flex items-center justify-between"
                      >
                        {time}
                        {endTime === time && <CheckCircle className="w-3 h-3 text-primary" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <label className="text-[10px] font-bold text-slate-500 uppercase ml-2">Repeat on Days</label>
          <div className="flex gap-2">
            {['Weekdays', 'Weekend', 'Every Day'].map(type => (
              <button key={type} className="flex-1 py-2 bg-white rounded-xl border border-slate-100 text-[10px] font-bold text-slate-500 hover:border-primary hover:text-primary transition-all">
                {type}
              </button>
            ))}
          </div>
          <div className="flex justify-between px-2">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
              <button key={i} className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold transition-all",
                i < 5 ? "bg-primary text-white shadow-md shadow-primary/20" : "bg-white text-slate-400 border border-slate-100"
              )}>
                {day}
              </button>
            ))}
          </div>
          <p className="text-[8px] text-slate-400 ml-2">Active on Mon, Tue, Wed, Thu, Fri</p>
        </div>

        <div className="space-y-4">
          <label className="text-[10px] font-bold text-slate-500 uppercase ml-2">Quick Presets</label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Business Hours', time: '9:00 AM - 5:00 PM' },
              { label: 'Extended Hours', time: '8:00 AM - 6:00 PM' },
              { label: 'Full Day', time: '7:00 AM - 7:00 PM' },
              { label: 'Afternoon/Evening', time: '12:00 PM - 9:00 PM' },
            ].map((preset) => (
              <button key={preset.label} className="p-3 bg-white rounded-2xl border border-slate-100 text-left hover:border-primary transition-all">
                <h4 className="text-[10px] font-bold text-slate-800">{preset.label}</h4>
                <p className="text-[8px] text-slate-400">{preset.time}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 bg-white rounded-2xl border border-slate-100 space-y-1">
          <span className="text-[8px] text-slate-400 uppercase font-bold">Selected Schedule:</span>
          <p className="text-sm font-bold text-primary">{startTime} - {endTime}</p>
        </div>

        <button onClick={() => navigate(-1)} className="w-full py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20">
          Save Time Schedule
        </button>
      </div>
    </div>
  );
};

export default SetTimeSchedule;
