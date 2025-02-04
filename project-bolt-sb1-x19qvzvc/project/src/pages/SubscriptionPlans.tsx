import React from 'react';
import { Check } from 'lucide-react';
import { Subscription } from '../types';

const subscriptionPlans: Subscription[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 9.99,
    duration: 1,
    features: [
      'HD streaming',
      'Watch on 1 device',
      'Cancel anytime',
      'Limited content library'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 14.99,
    duration: 1,
    features: [
      '4K Ultra HD',
      'Watch on 4 devices',
      'Cancel anytime',
      'Full content library',
      'Offline downloads',
      'Ad-free experience'
    ]
  },
  {
    id: 'family',
    name: 'Family',
    price: 19.99,
    duration: 1,
    features: [
      '4K Ultra HD',
      'Watch on 6 devices',
      'Cancel anytime',
      'Full content library',
      'Offline downloads',
      'Ad-free experience',
      'Family controls',
      'Multiple profiles'
    ]
  }
];

export default function SubscriptionPlans() {
  return (
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Choose Your Plan</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Select the perfect plan for your entertainment needs. All plans include our best movies and shows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {subscriptionPlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-gray-800 rounded-lg p-8 flex flex-col"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">${plan.price}</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}