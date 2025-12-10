import React, { useState, useRef, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';
import { ACTIVITIES } from '../constants';

const Explore: React.FC = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'List' | 'Map'>('List');
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Drag to scroll state
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const filters = ['All', 'Food', 'Sports', 'Entertainment'];

  const displayedActivities = activeFilter === 'All' 
    ? ACTIVITIES.filter(a => parseInt(a.id) <= 6) 
    : ACTIVITIES.filter(a => a.category === activeFilter);

  const handleSuggestionClick = (id: string) => {
    navigate(`/activity/${id}`);
  };

  // Mouse Event Handlers for Dragging
  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!mapContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - mapContainerRef.current.offsetLeft);
    setStartY(e.pageY - mapContainerRef.current.offsetTop);
    setScrollLeft(mapContainerRef.current.scrollLeft);
    setScrollTop(mapContainerRef.current.scrollTop);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !mapContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - mapContainerRef.current.offsetLeft;
    const y = e.pageY - mapContainerRef.current.offsetTop;
    const walkX = (x - startX) * 1.5; // Scroll-fast multiplier
    const walkY = (y - startY) * 1.5;
    mapContainerRef.current.scrollLeft = scrollLeft - walkX;
    mapContainerRef.current.scrollTop = scrollTop - walkY;
  };

  return (
    <div className="relative flex h-screen min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-hidden">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f4f2f0] dark:border-b-background-dark/50 px-6 py-3 shrink-0">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 text-black dark:text-white cursor-pointer" onClick={() => navigate('/')}>
            <div className="size-6 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-black dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Ficara</h2>
          </div>
          
          <div className="relative group hidden sm:block">
            <label className="flex flex-col min-w-40 !h-10 w-80">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                <div className="text-[#897261] dark:text-gray-400 flex border-none bg-[#f4f2f0] dark:bg-background-dark/50 items-center justify-center pl-4 rounded-l-lg border-r-0">
                  <Icon name="search" style={{ fontSize: '20px' }} />
                </div>
                <input 
                  className="form-input peer flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-black dark:text-white focus:outline-0 focus:ring-0 border-none bg-[#f4f2f0] dark:bg-background-dark/50 h-full placeholder:text-[#897261] dark:placeholder:text-gray-400 px-4 pl-2 text-base font-normal leading-normal" 
                  placeholder="Search activities..." 
                />
              </div>
            </label>
            <div className="absolute top-full mt-2 w-full bg-white dark:bg-background-dark/80 backdrop-blur-sm rounded-lg shadow-lg border border-[#f4f2f0] dark:border-background-dark/50 z-10 invisible group-focus-within:visible peer-focus:visible">
              <div className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: '20px', fontVariationSettings: "'FILL' 1, 'wght' 500" }}>auto_awesome</span>
                  <h3 className="text-sm font-bold text-black dark:text-white">AI Suggestions</h3>
                </div>
                <div className="flex flex-col gap-2">
                  <button 
                    onClick={() => handleSuggestionClick("1")}
                    className="flex items-center gap-3 p-2 rounded-md hover:bg-[#f4f2f0] dark:hover:bg-background-dark/50 w-full text-left"
                  >
                    <span className="material-symbols-outlined text-[#897261] dark:text-gray-400" style={{ fontSize: '20px' }}>sports_tennis</span>
                    <span className="text-black dark:text-white text-sm">Badminton near you this week</span>
                  </button>
                  <button 
                    onClick={() => handleSuggestionClick("5")}
                    className="flex items-center gap-3 p-2 rounded-md hover:bg-[#f4f2f0] dark:hover:bg-background-dark/50 w-full text-left"
                  >
                    <span className="material-symbols-outlined text-[#897261] dark:text-gray-400" style={{ fontSize: '20px' }}>music_note</span>
                    <span className="text-black dark:text-white text-sm">Live music events</span>
                  </button>
                  <button 
                    onClick={() => handleSuggestionClick("2")}
                    className="flex items-center gap-3 p-2 rounded-md hover:bg-[#f4f2f0] dark:hover:bg-background-dark/50 w-full text-left"
                  >
                    <span className="material-symbols-outlined text-[#897261] dark:text-gray-400" style={{ fontSize: '20px' }}>coffee</span>
                    <span className="text-black dark:text-white text-sm">Cafes for co-working</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/create')}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Create Activity</span>
          </button>
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#f4f2f0] dark:bg-background-dark/50 text-black dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
            <Icon name="notifications" style={{ fontSize: '20px' }} />
          </button>
          <div 
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCvmM-WWugNP37S9PsAihBiXKTm2coq1yhTVlCPyRVkFg7Hnkd2n1JM0odRNQrWZrtckr9-ZOj5_3oK3QmJGiIgKv6V1YHmzyiQTEPxWPsh5QF82T0_p2JNqQsbB4XKpH02IXWKPVGr2HslmvKac-A_ijewog-zW1imDVmgqva5TQup6TGjZsnKfEQhKMTGDATiBRWDt-BAJUoIOwXP3HMxSlfrgwBG1Oxw-J1ywnGI2CbsKb7nMxWan9jEljr1FDn2_yH7tgxk6CI")' }}
          ></div>
        </div>
      </header>

      <main className="flex-grow flex flex-col min-h-0">
        <div className="px-6 py-4 border-b border-solid border-b-[#f4f2f0] dark:border-b-background-dark/50 flex items-center justify-between shrink-0">
          <div className="flex gap-3 overflow-x-auto">
            {filters.map(filter => (
              <button 
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg pl-4 pr-4 
                  ${activeFilter === filter 
                    ? 'bg-primary text-white' 
                    : 'bg-[#f4f2f0] dark:bg-background-dark/50 text-[#181411] dark:text-gray-300'
                  }`}
              >
                <p className="text-sm font-medium leading-normal">{filter}</p>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex h-10 w-60 items-center justify-center rounded-lg bg-[#f4f2f0] dark:bg-background-dark/50 p-1">
              <label className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 ${viewMode === 'List' ? 'bg-white dark:bg-background-dark/80 shadow-[0_0_4px_rgba(0,0,0,0.1)] text-[#181411] dark:text-white' : 'text-[#897261] dark:text-gray-400'}`}>
                <span className="truncate text-sm font-medium leading-normal">List View</span>
                <input checked={viewMode === 'List'} onChange={() => setViewMode('List')} className="invisible w-0" name="view-toggle" type="radio" value="List View" />
              </label>
              <label className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 ${viewMode === 'Map' ? 'bg-white dark:bg-background-dark/80 shadow-[0_0_4px_rgba(0,0,0,0.1)] text-[#181411] dark:text-white' : 'text-[#897261] dark:text-gray-400'}`}>
                <span className="truncate text-sm font-medium leading-normal">Map View</span>
                <input checked={viewMode === 'Map'} onChange={() => setViewMode('Map')} className="invisible w-0" name="view-toggle" type="radio" value="Map View" />
              </label>
            </div>
            <button className="flex h-10 w-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f4f2f0] dark:bg-background-dark/50 text-[#181411] dark:text-white">
              <Icon name="tune" style={{ fontSize: '20px' }} />
            </button>
          </div>
        </div>

        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          {/* List View */}
          <div className={`flex flex-col overflow-y-auto ${viewMode === 'Map' ? 'hidden md:flex' : 'flex'}`}>
            <div className="p-4 flex flex-col gap-4">
              {displayedActivities.map((activity) => (
                <div 
                  key={activity.id} 
                  className="flex flex-col sm:flex-row items-stretch justify-between gap-4 rounded-lg bg-white dark:bg-background-dark/30 p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)] cursor-pointer"
                  onClick={() => navigate(`/activity/${activity.id}`)}
                >
                  <div className="flex flex-[2_2_0px] flex-col justify-between gap-4">
                    <div className="flex flex-col gap-1">
                      <p className="text-[#897261] dark:text-gray-400 text-sm font-normal leading-normal">{activity.category}</p>
                      <p className="text-[#181411] dark:text-white text-base font-bold leading-tight">{activity.title}</p>
                      <p className="text-[#897261] dark:text-gray-400 text-sm font-normal leading-normal">{activity.distance} - {activity.timeString}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex -space-x-2">
                          {activity.participants.slice(0, 4).map((avatar, i) => (
                            <div key={i} className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-6 ring-2 ring-white dark:ring-[#2d2116]" style={{ backgroundImage: `url('${avatar}')` }}></div>
                          ))}
                        </div>
                        <p className="ml-2 text-[#897261] dark:text-gray-400 text-sm">{activity.filledSlots}/{activity.totalSlots} slots left</p>
                      </div>
                      <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f2f0] dark:bg-background-dark/50 text-[#181411] dark:text-white text-sm font-medium leading-normal w-fit">
                        <span className="truncate">Join</span>
                      </button>
                    </div>
                  </div>
                  <div className="w-full sm:w-40 h-40 sm:h-auto bg-center bg-no-repeat bg-cover rounded-lg flex-1" style={{ backgroundImage: `url('${activity.image}')` }}></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Map View */}
          <div 
            ref={mapContainerRef}
            className={`bg-gray-200 dark:bg-gray-800 relative overflow-auto ${viewMode === 'List' ? 'hidden md:block' : 'block'} ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div className="relative w-[150%] h-[150%] min-w-[1000px] min-h-[800px] pointer-events-none">
              <img 
                alt="Map view showing locations of activities" 
                className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf_K-rQP2IPpbEvUlRVWzzg04J3ZtuIg_DsAXAwhy_nccOk7ePnvHe9W3RQnFVTu7aZLOVuz8cfSi1zv2X2yhj3swtQTPlunrQx6rYfplLkUezRSILY7qB-RnHw2lKXNInEADNw6zJy6YtypnwgupZ4_Qmtu55R3byPKB-uaqEpmNORcaJO46q0ULx1ZD4vr5MpPmbDDXJ4Eh8mziB9rQwoRfUU2s16JruBP0NWtRUyCnTj5W-5NJpkjZ5D--JPXBFueotFS8Sye8" 
              />
              
              {/* Pins - Use pointer-events-auto so they remain clickable despite container strictness during non-drag */}
              {displayedActivities.map((activity) => (
                <div 
                  key={activity.id}
                  className="absolute group cursor-pointer pointer-events-auto"
                  style={{ top: `${activity.coordinates.top}%`, left: `${activity.coordinates.left}%` }}
                  onClick={(e) => {
                    // Prevent click if we were dragging
                    if (!isDragging) {
                      handleSuggestionClick(activity.id);
                    }
                    e.stopPropagation();
                  }}
                  onMouseDown={(e) => e.stopPropagation()} // Allow clicking the pin without starting a map drag
                >
                  {/* Pin Icon */}
                  <div className="-translate-x-1/2 -translate-y-full transform transition-transform duration-200 group-hover:scale-125 group-hover:-translate-y-[110%]">
                    <Icon 
                      name="location_on" 
                      className="text-4xl text-primary drop-shadow-md" 
                      style={{ fontVariationSettings: "'FILL' 1" }} 
                    />
                  </div>

                  {/* Tooltip Card */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 hidden group-hover:flex flex-col w-56 bg-white dark:bg-[#1c1f27] p-2 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 z-50 animate-fade-in">
                    <div className="h-28 w-full rounded-lg bg-cover bg-center mb-2" style={{backgroundImage: `url('${activity.image}')`}}></div>
                    <div className="px-1 pb-1">
                      <p className="text-xs font-bold text-primary uppercase mb-0.5">{activity.category}</p>
                      <p className="text-sm font-bold text-neutral-900 dark:text-white leading-tight mb-1 line-clamp-2">{activity.title}</p>
                      <p className="text-xs text-neutral-500">{activity.timeString}</p>
                    </div>
                    {/* Arrow Pointer */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white dark:border-t-[#1c1f27]"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <div className="absolute bottom-8 right-8 flex flex-col items-end gap-4 z-10">
        <button 
          onClick={() => navigate('/chat')}
          className="flex h-14 w-14 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary text-white shadow-lg transition-transform duration-200 ease-in-out hover:scale-110 hover:bg-primary/90"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '28px', fontVariationSettings: "'FILL' 1, 'wght' 500" }}>auto_awesome</span>
        </button>
        <button 
          onClick={() => navigate('/create')}
          className="flex h-16 w-16 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary text-white shadow-lg hover:bg-primary/90"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>add</span>
        </button>
      </div>
    </div>
  );
};

export default Explore;