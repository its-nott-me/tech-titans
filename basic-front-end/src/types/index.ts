export interface User {
  id: string;
  username: string;
  email: string;
  points: number;
  level: number;
  streakDays: number;
  badges: Badge[];
  garden: GardenItem[];
  achievements: Achievement[];
  carbonFootprint: number;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: Date;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  tier: 'bronze' | 'silver' | 'gold';
  progress?: number;
  unlocked: boolean;
  unlockedAt?: Date;
}

export interface GardenItem {
  id: string;
  type: 'tree' | 'plant' | 'flower';
  name: string;
  level: number;
  position: { x: number; y: number };
  plantedAt: Date;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  points: number;
  type: 'daily' | 'weekly' | 'special';
  category: 'transport' | 'energy' | 'waste' | 'food';
  completed: boolean;
  endDate?: Date;
}

export interface Activity {
  id: string;
  userId: string;
  challengeId: string;
  type: 'challenge' | 'achievement';
  points: number;
  completedAt: Date;
  carbonSaved: number;
}