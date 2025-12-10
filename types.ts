export interface User {
  id: string;
  name: string;
  avatar: string;
  joined: string;
}

export interface Activity {
  id: string;
  category: 'Sports' | 'Food' | 'Entertainment' | 'Business' | 'Art & Culture' | 'Music' | 'Tech' | 'Outdoors';
  title: string;
  distance: string;
  timeString: string; // e.g., "Tonight at 8 PM"
  dateFull: string; // e.g., "Saturday, October 28, 2024"
  timeRange: string; // e.g., "08:00 AM - 10:00 AM"
  locationName: string;
  address: string;
  image: string;
  mapImage: string;
  description: string;
  totalSlots: number;
  filledSlots: number;
  participants: string[]; // Avatar URLs
  host: User;
  coordinates: {
    top: number; // Percentage 0-100
    left: number; // Percentage 0-100
  };
}

export interface SlideData {
  image: string;
  title: string;
  description: string;
}