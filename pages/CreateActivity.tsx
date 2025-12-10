import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';

const CreateActivity: React.FC = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1);
  };

  const handleSubmit = () => {
    // In a real app, this would submit data.
    navigate('/explore');
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center py-10 sm:py-20 px-4 sm:px-0">
          <div className="layout-content-container flex flex-col max-w-[560px] flex-1">
            
            <div className="flex flex-col gap-8">
              {/* Page Heading */}
              <div className="flex flex-col gap-2">
                <h1 className="text-neutral-800 dark:text-white tracking-tight text-3xl sm:text-4xl font-bold leading-tight">
                  Create a New Activity
                </h1>
                <p className="text-neutral-500 dark:text-gray-400 text-base font-normal leading-normal">
                  Let's get something planned. Fill in the details to connect with others.
                </p>
              </div>

              {/* Form */}
              <div className="flex flex-col gap-6">
                
                {/* What */}
                <label className="flex flex-col w-full">
                  <p className="text-neutral-800 dark:text-white text-base font-medium leading-normal pb-2">What?</p>
                  <input 
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-neutral-800 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#e6e0db] dark:border-gray-700 bg-white dark:bg-background-dark h-14 placeholder:text-neutral-500 dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal" 
                    placeholder="e.g., Morning Coffee Run" 
                  />
                </label>

                {/* Where */}
                <label className="flex flex-col w-full">
                  <p className="text-neutral-800 dark:text-white text-base font-medium leading-normal pb-2">Where?</p>
                  <div className="flex w-full flex-1 items-stretch rounded-lg">
                    <input 
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-neutral-800 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#e6e0db] dark:border-gray-700 bg-white dark:bg-background-dark h-14 placeholder:text-neutral-500 dark:placeholder:text-gray-500 p-[15px] rounded-r-none border-r-0 text-base font-normal leading-normal" 
                      placeholder="Search for a location or address" 
                    />
                    <div className="text-neutral-500 dark:text-gray-400 flex border border-[#e6e0db] dark:border-gray-700 bg-white dark:bg-background-dark items-center justify-center px-4 rounded-r-lg border-l-0">
                      <Icon name="location_on" className="text-2xl" />
                    </div>
                  </div>
                </label>

                {/* When */}
                <div className="flex flex-col sm:flex-row w-full gap-6">
                  <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-neutral-800 dark:text-white text-base font-medium leading-normal pb-2">When?</p>
                    <input 
                      type="date"
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-neutral-800 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#e6e0db] dark:border-gray-700 bg-white dark:bg-background-dark h-14 placeholder:text-neutral-500 dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal" 
                    />
                  </label>
                  <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-neutral-800 dark:text-white text-base font-medium leading-normal pb-2">Time</p>
                    <input 
                      type="time"
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-neutral-800 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#e6e0db] dark:border-gray-700 bg-white dark:bg-background-dark h-14 placeholder:text-neutral-500 dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal" 
                    />
                  </label>
                </div>

                {/* How many people */}
                <div className="flex flex-col w-full">
                  <p className="text-neutral-800 dark:text-white text-base font-medium leading-normal pb-2">How many people?</p>
                  <div className="flex items-center justify-between rounded-lg border border-[#e6e0db] dark:border-gray-700 bg-white dark:bg-background-dark p-2 h-14">
                    <button className="flex items-center justify-center h-10 w-10 rounded-md text-neutral-500 dark:text-gray-400 hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary dark:hover:text-primary transition-colors">
                      <Icon name="remove" className="text-2xl" />
                    </button>
                    <span className="text-lg font-bold text-neutral-800 dark:text-white">2</span>
                    <button className="flex items-center justify-center h-10 w-10 rounded-md text-neutral-500 dark:text-gray-400 hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary dark:hover:text-primary transition-colors">
                      <Icon name="add" className="text-2xl" />
                    </button>
                  </div>
                </div>

                {/* Description */}
                <label className="flex flex-col w-full">
                  <p className="text-neutral-800 dark:text-white text-base font-medium leading-normal pb-2">Description (Optional)</p>
                  <textarea 
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-neutral-800 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#e6e0db] dark:border-gray-700 bg-white dark:bg-background-dark min-h-36 placeholder:text-neutral-500 dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal" 
                    placeholder="Add a few more details..."
                  ></textarea>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col-reverse sm:flex-row items-center gap-4 pt-4">
                <button 
                  onClick={handleCancel}
                  className="flex items-center justify-center h-12 w-full rounded-full text-base font-bold text-center text-neutral-800 dark:text-white bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleSubmit}
                  className="flex items-center justify-center h-12 w-full rounded-full text-base font-bold text-center text-white bg-primary hover:bg-primary/90 transition-colors"
                >
                  Create Activity
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateActivity;