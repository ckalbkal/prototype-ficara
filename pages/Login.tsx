import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/setup');
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark">
      <div className="flex-grow">
        <div className="flex flex-col md:flex-row min-h-screen">
          <div 
            className="hidden md:flex md:w-1/2 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD55lzsUIX9jAdI7Vjxwo40VO6P__VJHYpWJvtdSzCat1k1hpJBO8Tpk5WsZPAQOAS_4zlq-tjS5dXAGg2rrcW5_c5cbcIws5aMm6AbFdzG6CxYojEJdVuW7oVL2tRG-M8mOaFsJLgxqxD0Wyrv0PKSbAgtf1zh6FArwqVGORvAI7j8AOdpi3nXe5KAbNsq73G0SuCm_PASUQDHsWWyQ7nujAvYb81oMIbvkrla6WCqbrhDkecT3QmJyMzCbQvN5cJbvjPilnHP30s")' }}
          >
          </div>
          
          <main className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-8 lg:p-12">
            <div className="w-full max-w-md">
              <div className="flex items-center gap-3 mb-8">
                <Icon name="explore" className="text-4xl text-primary" />
                <h1 className="text-3xl font-bold text-neutral-800 dark:text-white">Ficara</h1>
              </div>

              <div className="flex flex-col gap-2 text-left mb-8">
                <h2 className="text-neutral-800 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl">
                  Join the fun.
                </h2>
                <p className="text-neutral-800/70 dark:text-white/70 text-sm font-normal leading-normal sm:text-base">
                  Connect and discover activities with people near you.
                </p>
              </div>

              <label className="flex flex-col min-w-40 h-14 w-full max-w-full sm:h-16">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                  <div className="text-neutral-500 dark:text-white/60 flex border-none bg-[#f4f2f0] dark:bg-[#2e2319] items-center justify-center pl-4 rounded-l-lg border-r-0">
                    <Icon name="call" />
                  </div>
                  <input 
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-neutral-800 dark:text-white focus:outline-0 focus:ring-0 border-none bg-[#f4f2f0] dark:bg-[#2e2319] focus:border-none h-full placeholder:text-neutral-500 dark:placeholder:text-white/60 px-4 rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal sm:text-base"
                    placeholder="Enter your phone number"
                  />
                  <div className="flex items-center justify-center rounded-r-lg border-l-0 border-none bg-[#f4f2f0] dark:bg-[#2e2319] pr-2">
                    <button 
                      onClick={handleContinue}
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 sm:h-12 sm:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] sm:text-base hover:bg-primary/90 transition-colors"
                    >
                      <span className="truncate">Continue</span>
                    </button>
                  </div>
                </div>
              </label>

              <p className="text-neutral-500 dark:text-white/60 text-sm font-normal leading-normal pb-3 pt-3 px-1 text-center sm:text-left">
                By continuing, you agree to our Terms of Service and Privacy Policy. We'll send a one-time code to your number via WhatsApp or SMS.
              </p>

              <div className="flex items-center my-6">
                <hr className="flex-grow border-t border-[#f4f2f0] dark:border-white/10" />
                <span className="px-3 text-sm text-neutral-500 dark:text-white/60">OR</span>
                <hr className="flex-grow border-t border-[#f4f2f0] dark:border-white/10" />
              </div>

              <div className="flex flex-col gap-3">
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#f4f2f0] dark:bg-[#2e2319] text-neutral-800 dark:text-white text-base font-bold leading-normal tracking-[0.015em] w-full hover:bg-[#e9e7e5] dark:hover:bg-[#3a2d20] transition-colors">
                  <span className="truncate">Continue with Google</span>
                </button>
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#f4f2f0] dark:bg-[#2e2319] text-neutral-800 dark:text-white text-base font-bold leading-normal tracking-[0.015em] w-full hover:bg-[#e9e7e5] dark:hover:bg-[#3a2d20] transition-colors">
                  <span className="truncate">Continue with Apple</span>
                </button>
              </div>

            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Login;