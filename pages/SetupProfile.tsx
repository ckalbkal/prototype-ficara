import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';

interface Interest {
  name: string;
  icon: string;
}

const INTERESTS: Interest[] = [
  { name: 'Culinary', icon: 'restaurant' },
  { name: 'Sports', icon: 'sports_soccer' },
  { name: 'Music', icon: 'music_note' },
  { name: 'Business', icon: 'work' },
  { name: 'Art & Culture', icon: 'palette' },
  { name: 'Tech', icon: 'laptop_mac' },
  { name: 'Foodie', icon: 'ramen_dining' },
  { name: 'Outdoors', icon: 'hiking' },
];

const SetupProfile: React.FC = () => {
  const navigate = useNavigate();
  // Pre-select some to match screenshot
  const [selected, setSelected] = useState<string[]>(['Culinary', 'Music', 'Tech']);

  const toggleInterest = (name: string) => {
    if (selected.includes(name)) {
      setSelected(selected.filter(i => i !== name));
    } else {
      setSelected([...selected, name]);
    }
  };

  const handleContinue = () => {
    navigate('/explore');
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8 bg-background-light dark:bg-background-dark">
      <main className="w-full max-w-2xl">
        <div className="flex flex-col gap-8">
          
          {/* Progress Bar */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-6 justify-between">
              <p className="text-neutral-800 dark:text-white/90 text-base font-medium leading-normal">Step 1 of 2</p>
            </div>
            <div className="rounded bg-[#e6e0db] dark:bg-background-dark/80 overflow-hidden">
              <div className="h-2 rounded bg-primary" style={{ width: '50%' }}></div>
            </div>
          </div>

          {/* Main Content Card */}
          <div className="flex flex-col rounded-xl border border-[#e6e0db] dark:border-white/10 bg-white dark:bg-[#2a1e13] shadow-sm">
            
            {/* Page Heading */}
            <div className="flex flex-col gap-6 p-6 sm:p-8">
              <div className="flex flex-wrap justify-between gap-3">
                <div className="flex min-w-72 flex-col gap-2">
                  <h1 className="text-neutral-800 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                    Create Your Ficara Profile
                  </h1>
                  <p className="text-neutral-500 dark:text-white/60 text-base font-normal leading-normal">
                    Help us find your people. Select 3–5 interests.
                  </p>
                </div>
              </div>

              {/* Search and Chips */}
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-white/50" />
                  <input 
                    type="search" 
                    placeholder="Search for interests..."
                    className="w-full rounded-lg border border-[#e6e0db] dark:border-white/20 bg-background-light dark:bg-background-dark/50 h-12 pl-10 pr-4 text-neutral-800 dark:text-white/90 placeholder:text-neutral-500 dark:placeholder:text-white/50 focus:border-primary focus:ring-primary"
                  />
                </div>

                <div className="flex gap-3 flex-wrap">
                  {INTERESTS.map((interest) => {
                    const isSelected = selected.includes(interest.name);
                    return (
                      <button 
                        key={interest.name}
                        onClick={() => toggleInterest(interest.name)}
                        className={`flex h-10 cursor-pointer shrink-0 items-center justify-center gap-x-2 rounded-lg pl-3 pr-4 transition-colors
                          ${isSelected 
                            ? 'bg-primary/20 dark:bg-primary/30 ring-2 ring-primary dark:ring-primary/80' 
                            : 'bg-[#f4f2f0] dark:bg-white/10 hover:bg-[#e6e0db] dark:hover:bg-white/20'
                          }`}
                      >
                        <Icon 
                          name={interest.icon} 
                          className={`text-base ${isSelected ? 'text-primary dark:text-orange-300' : 'text-neutral-800 dark:text-white/90'}`}
                        />
                        <p className={`text-sm font-medium leading-normal ${isSelected ? 'text-primary dark:text-orange-300' : 'text-neutral-800 dark:text-white/90'}`}>
                          {interest.name}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div className="flex flex-col gap-4 border-t border-[#e6e0db] dark:border-white/10 bg-background-light dark:bg-background-dark/30 p-6 sm:p-8 rounded-b-xl sm:rounded-b-none sm:border-b">
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold text-neutral-800 dark:text-white">Find activities near you</h2>
                <p className="text-base text-neutral-500 dark:text-white/60">Allow location access to discover what's happening around you.</p>
              </div>
              <button className="flex w-full min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-5 bg-primary/20 dark:bg-primary/30 text-primary dark:text-orange-300 text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/30 dark:hover:bg-primary/40">
                <Icon name="my_location" />
                <span className="truncate">Use My Current Location</span>
              </button>
            </div>

            {/* Footer Section (Bottom rounded in desktop) */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-[#e6e0db] dark:border-white/10 p-6 sm:p-8 rounded-b-xl bg-white dark:bg-[#2a1e13]">
              <div className="flex items-start gap-3">
                <Icon name="security" className="text-neutral-500 dark:text-white/60 mt-0.5" />
                <p className="text-sm text-neutral-500 dark:text-white/60 max-w-sm">
                  Your exact location is never shared. We only use it to show you nearby activities.
                </p>
              </div>
              <div className="flex w-full sm:w-auto flex-1 sm:flex-none gap-3 justify-end">
                <button 
                  onClick={handleContinue}
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-transparent text-neutral-800 dark:text-white/90 text-base font-bold leading-normal tracking-[0.015em] hover:bg-black/5 dark:hover:bg-white/10"
                >
                  <span className="truncate">Skip for now</span>
                </button>
                <button 
                  onClick={handleContinue}
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90"
                >
                  <span className="truncate">Continue</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default SetupProfile;