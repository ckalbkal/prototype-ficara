import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WELCOME_SLIDES } from '../constants';
import Icon from '../components/Icon';

const Welcome: React.FC = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  // In a real carousel we might want next/prev logic, but the design implies a specific flow or just display.
  // We'll just display the current one and dots.
  
  const currentSlide = WELCOME_SLIDES[currentIndex];

  const handleNext = () => {
    if (currentIndex < WELCOME_SLIDES.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-hidden bg-background-light dark:bg-background-dark">
      <header className="absolute top-0 left-0 right-0 z-10 p-4">
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Icon name="local_fire_department" className="text-primary text-3xl" />
            <span className="text-2xl font-bold text-neutral-800 dark:text-white">Ficara</span>
          </div>
          <button onClick={() => navigate('/login')} className="text-sm font-medium text-neutral-500 dark:text-white/60 hover:text-primary dark:hover:text-primary">
            Skip Intro
          </button>
        </div>
      </header>

      <main className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
          <div className="layout-content-container flex w-full max-w-7xl flex-1 flex-col items-center">
            
            {/* Carousel Content */}
            <div className="flex overflow-hidden w-full max-w-sm">
              <div className="flex w-full flex-col gap-4 rounded-xl bg-white dark:bg-background-dark/50 shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-none pb-6">
                 <div 
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-t-xl" 
                  style={{ backgroundImage: `url("${currentSlide.image}")` }}
                 />
                 <div className="flex flex-col flex-1 justify-between px-6 gap-4">
                   <div className="text-center">
                     <h2 className="text-neutral-800 dark:text-white text-xl font-bold leading-tight">
                        {currentSlide.title}
                     </h2>
                     <p className="text-neutral-500 dark:text-white/60 text-sm font-normal leading-normal mt-2">
                        {currentSlide.description}
                     </p>
                   </div>
                 </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col items-center w-full max-w-sm mt-8">
              <div className="flex items-center justify-center p-4 space-x-2">
                {WELCOME_SLIDES.map((_, idx) => (
                  <span 
                    key={idx}
                    className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-5 bg-primary' : 'w-2 bg-primary/20 dark:bg-white/20'}`}
                  />
                ))}
              </div>

              <div className="flex justify-center w-full px-4 py-3">
                <button 
                  onClick={handleNext}
                  className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] shadow-sm hover:opacity-90 transition-opacity"
                >
                  <span className="truncate">{currentIndex === WELCOME_SLIDES.length - 1 ? 'Get Started' : 'Next'}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Welcome;