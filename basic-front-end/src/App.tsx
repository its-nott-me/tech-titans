import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sprout } from 'lucide-react';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import Garden from './pages/Garden';
import Challenges from './pages/Challenges';
import Community from './pages/Community';
import Profile from './pages/Profile';
import Rewards from './pages/Rewards';
import CarbonFootprintForm from './components/onboarding/CarbonFootprintForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Sprout className="h-8 w-8 text-emerald-600" />
                <h1 className="text-2xl font-bold text-emerald-900">Carbon Grove</h1>
              </div>
            </div>
          </div>
        </header>

        <Navigation />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/garden" element={<Garden />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/community" element={<Community />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/onboarding" element={<CarbonFootprintForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;