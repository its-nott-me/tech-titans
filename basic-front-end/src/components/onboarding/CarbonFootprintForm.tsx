import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Car, Home, ShoppingBag, Utensils } from 'lucide-react';

interface FormData {
  transportation: string;
  homeEnergy: string;
  dietType: string;
  shoppingHabits: string;
  milesDriven: number;
  flightsPerYear: number;
}

const CarbonFootprintForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    transportation: '',
    homeEnergy: '',
    dietType: '',
    shoppingHabits: '',
    milesDriven: 0,
    flightsPerYear: 0,
  });

  const calculateFootprint = () => {
    // Basic calculation - can be made more sophisticated
    let total = 0;
    
    // Transportation impact
    total += formData.milesDriven * 0.404; // kg CO2 per mile
    total += formData.flightsPerYear * 900; // Average CO2 per flight

    // Diet impact
    const dietFactors = {
      'meat-heavy': 3.3,
      'average': 2.5,
      'vegetarian': 1.7,
      'vegan': 1.5
    };
    total += (dietFactors[formData.dietType as keyof typeof dietFactors] || 2.5) * 365;

    return Math.round(total);
  };

  const handleSubmit = () => {
    const footprint = calculateFootprint();
    // Save user data and footprint
    navigate('/dashboard');
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Transportation</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  How many miles do you drive per year?
                </label>
                <input
                  type="number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  value={formData.milesDriven}
                  onChange={(e) => setFormData({...formData, milesDriven: Number(e.target.value)})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  How many flights do you take per year?
                </label>
                <input
                  type="number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  value={formData.flightsPerYear}
                  onChange={(e) => setFormData({...formData, flightsPerYear: Number(e.target.value)})}
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Diet & Lifestyle</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">What best describes your diet?</label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  value={formData.dietType}
                  onChange={(e) => setFormData({...formData, dietType: e.target.value})}
                >
                  <option value="">Select...</option>
                  <option value="meat-heavy">Meat with every meal</option>
                  <option value="average">Average (meat few times a week)</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="vegan">Vegan</option>
                </select>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Results</h2>
            <div className="bg-emerald-50 p-6 rounded-lg">
              <p className="text-lg font-medium text-emerald-800">
                Your estimated carbon footprint is:
              </p>
              <p className="text-3xl font-bold text-emerald-600 mt-2">
                {calculateFootprint()} kg CO₂/year
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">Suggestions to reduce your footprint:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                {formData.milesDriven > 5000 && (
                  <li>Consider carpooling or using public transportation to reduce driving emissions</li>
                )}
                {formData.flightsPerYear > 2 && (
                  <li>Try to combine trips or use video conferencing when possible</li>
                )}
                {formData.dietType === 'meat-heavy' && (
                  <li>Reducing meat consumption can significantly lower your carbon footprint</li>
                )}
              </ul>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-6">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= i ? 'bg-emerald-600 text-white' : 'bg-gray-200'
              }`}
            >
              {i}
            </div>
          ))}
        </div>
        <div className="h-2 bg-gray-200 rounded">
          <div
            className="h-full bg-emerald-600 rounded transition-all"
            style={{ width: `${((step - 1) / 2) * 100}%` }}
          />
        </div>
      </div>

      {renderStep()}

      <div className="mt-8 flex justify-between">
        {step > 1 && (
          <button
            onClick={() => setStep(step - 1)}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Back
          </button>
        )}
        <button
          onClick={() => step === 3 ? handleSubmit() : setStep(step + 1)}
          className="ml-auto px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
        >
          {step === 3 ? 'Complete' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default CarbonFootprintForm;