import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';
import { ACTIVITIES } from '../constants';

const ActivityDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const activity = ACTIVITIES.find(a => a.id === id);

  if (!activity) {
    return <div className="p-10 text-center">Activity not found</div>;
  }

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        
        {/* TopNavBar */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-neutral-200 dark:border-b-neutral-800 px-4 sm:px-6 lg:px-10 py-3 bg-white dark:bg-background-dark sticky top-0 z-50">
          <div className="flex items-center gap-4 text-neutral-900 dark:text-neutral-100 cursor-pointer" onClick={() => navigate('/explore')}>
             <Icon name="local_fire_department" className="text-primary text-2xl" />
             <h2 className="text-neutral-900 dark:text-neutral-100 text-xl font-bold leading-tight tracking-[-0.015em]">Ficara</h2>
          </div>
          <div className="hidden md:flex flex-1 justify-center gap-8">
            <div className="flex items-center gap-9">
              <button onClick={() => navigate('/')} className="text-neutral-800 dark:text-neutral-200 text-sm font-medium leading-normal">Home</button>
              <button onClick={() => navigate('/explore')} className="text-primary font-bold text-sm leading-normal">Explore</button>
              <button className="text-neutral-800 dark:text-neutral-200 text-sm font-medium leading-normal">My Activities</button>
              <button className="text-neutral-800 dark:text-neutral-200 text-sm font-medium leading-normal">Messages</button>
            </div>
          </div>
          <div className="flex flex-1 justify-end items-center gap-4">
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg size-10 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0">
              <Icon name="notifications" className="text-xl" />
            </button>
            <div 
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDyOlzy_beUFKITtjdAUTN8YMDZXsGetxb1e_9-_nKEV0WnR4aWO0pi6cFh3S6_TVOQpXMdW-DtNjitItGbth8G9FwVcH0D6BoylXqsOx1v2ykUQX5oDLVSdOKjMY1GqExQ_iEsDg6JcIGESEtHstLd46IICErV6jC1yHHPTxjLhQRgOyRKcTq2BUBJfWoa2POC_25beA3Vvdbmw4DOBEc4-g1Uua8wj5ujqcX3AdPl-gjpGexokI-R3LEc90UJ1-xLdPzjgVjtEJw")' }}
            ></div>
          </div>
        </header>

        {/* Main Content */}
        <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          {/* Breadcrumbs */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button onClick={() => navigate('/explore')} className="text-neutral-500 dark:text-neutral-400 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary">Explore</button>
            <span className="text-neutral-400 dark:text-neutral-500 text-sm font-medium leading-normal">/</span>
            <span className="text-neutral-900 dark:text-neutral-100 text-sm font-medium leading-normal">{activity.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Column: Visuals */}
            <div className="flex flex-col gap-8">
              {/* HeaderImage */}
              <div 
                className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl min-h-60 sm:min-h-80 shadow-sm"
                style={{ backgroundImage: `url("${activity.image}")` }}
              ></div>
              
              {/* Interactive Map */}
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">Location</h3>
                <div 
                  className="w-full h-60 sm:h-80 rounded-xl overflow-hidden shadow-sm bg-center bg-no-repeat bg-cover" 
                  style={{ backgroundImage: `url("${activity.mapImage}")` }}
                ></div>
              </div>
            </div>

            {/* Right Column: Details */}
            <div className="flex flex-col gap-6">
              {/* Info Card */}
              <div className="bg-white dark:bg-neutral-900/50 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 flex flex-col gap-6">
                
                {/* Chips */}
                <div className="flex gap-2 flex-wrap">
                  <div className="flex h-7 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary/20 px-3">
                    <p className="text-primary text-xs font-bold leading-normal">{activity.category}</p>
                  </div>
                  {/* Mock tags based on category for visual completeness */}
                  <div className="flex h-7 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary/20 px-3">
                     <p className="text-primary text-xs font-bold leading-normal">Outdoor</p>
                  </div>
                </div>

                {/* PageHeading */}
                <h1 className="text-neutral-900 dark:text-neutral-100 text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em]">
                  {activity.title}
                </h1>

                {/* Icon + Text Pairs */}
                <div className="flex flex-col gap-4 text-neutral-700 dark:text-neutral-300">
                  <div className="flex items-center gap-3">
                    <Icon name="calendar_today" className="text-xl text-neutral-500 dark:text-neutral-400" />
                    <span className="text-base font-medium">{activity.dateFull}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="schedule" className="text-xl text-neutral-500 dark:text-neutral-400" />
                    <span className="text-base font-medium">{activity.timeRange}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="location_on" className="text-xl text-neutral-500 dark:text-neutral-400" />
                    <span className="text-base font-medium">{activity.locationName}, {activity.address}</span>
                  </div>
                </div>

                {/* Description */}
                <div className="border-t border-neutral-200 dark:border-neutral-800 pt-4">
                  <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed">
                    {activity.description}
                  </p>
                </div>

                {/* Host Profile Snippet */}
                <div className="border-t border-neutral-200 dark:border-neutral-800 pt-4">
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-3">Hosted by</h3>
                  <div className="flex items-center gap-3">
                    <div 
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" 
                      style={{ backgroundImage: `url("${activity.host.avatar}")` }}
                    ></div>
                    <div className="flex flex-col">
                      <a href="#" className="text-base font-bold text-neutral-900 dark:text-neutral-100 hover:underline">{activity.host.name}</a>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">Joined {activity.host.joined}</p>
                    </div>
                  </div>
                </div>

                {/* Participant Avatar Group */}
                <div className="border-t border-neutral-200 dark:border-neutral-800 pt-4">
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-3">Who's Going? ({activity.filledSlots}/{activity.totalSlots})</h3>
                  <div className="flex items-center -space-x-3">
                    {activity.participants.map((p, idx) => (
                       <div 
                        key={idx}
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 border-2 border-white dark:border-background-dark" 
                        style={{ backgroundImage: `url("${p}")` }}
                       />
                    ))}
                  </div>
                </div>

                {/* Primary CTA Button */}
                <button className="w-full flex items-center justify-center gap-2 h-12 px-6 bg-primary text-white rounded-lg text-base font-bold hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-background-dark">
                   <Icon name="add_circle" />
                   Request to Join
                </button>

              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ActivityDetails;