import { create } from 'zustand';
import type { User, Challenge, Activity } from '../types';

interface Store {
  user: User | null;
  challenges: Challenge[];
  activities: Activity[];
  setUser: (user: User | null) => void;
  addPoints: (points: number) => void;
  completeChallenge: (challengeId: string) => void;
  addActivity: (activity: Activity) => void;
}

export const useStore = create<Store>((set) => ({
  user: null,
  challenges: [],
  activities: [],
  setUser: (user) => set({ user }),
  addPoints: (points) => 
    set((state) => ({
      user: state.user ? { ...state.user, points: state.user.points + points } : null
    })),
  completeChallenge: (challengeId) =>
    set((state) => ({
      challenges: state.challenges.map((challenge) =>
        challenge.id === challengeId ? { ...challenge, completed: true } : challenge
      )
    })),
  addActivity: (activity) =>
    set((state) => ({
      activities: [...state.activities, activity]
    }))
}));