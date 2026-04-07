'use client';

import { useState } from 'react';
import { Check, ArrowRight, Phone, Zap } from 'lucide-react';

const tiers = [
  {
    name: 'Core',
    price: 397,
    annual: 327,
    description: 'For growing high-value inbound teams',
    features: [
      'Up to 150 missed calls / text responses per month',
      'Instant professional SMS follow-up',
      'Capture name, service need & urgency',
      'Clean ready-to-follow-up lead delivery',
      'Basic calendar / CRM note integration',
      'Team notifications (up to 4 users)',
      'Basic analytics',
      'No setup fee • No contract • Cancel anytime',
    ],
    popular: false,
  },
  {
    name: 'Growth',
    price: 597,
    annual: 497,
    description: 'Best for most high-intent inbound businesses',
    features: [
      'Up to 400 missed calls / text responses per month',
      'Advanced qualification (urgency scoring)',
      'Multi-step workflows & time-of-day rules',
      'Deeper CRM & scheduling integrations',
      'Detailed ROI analytics',
      'Priority support + quick onboarding',
      'Team access up to 8 users',
      'No setup fee • No contract • Cancel anytime',
    ],
    popular: true,
  },
  {
    name: 'Pro',
    price: 997,
    annual: 827,
    description: 'For premium & high-volume operations',
    features: [
      'Up to 800+ missed calls / text responses per month',
      'Fully custom scripts & branching logic',
      'Advanced CRM & intake system sync',
      'Premium reporting & revenue attribution',
      'White-glove onboarding',
      'Higher team limits & priority support',
      'Low-cost overages if needed',
      'No setup fee • No contract • Cancel anytime',
    ],
    popular: false,
  },
];

export default function CallCapture() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-yellow-500 rounded-xl flex items-center justify-center">
              <Zap className="w-5 h-5 text-zinc-950" />
            </div>
            <span className="text-2xl font-semibold tracking-tight">CallCapture</span>
          </div>
          <div className="flex items-center gap-8 text-sm">
            <a href="#how" className="hover:text-yellow-400">How it works</a>
            <a href="#pricing" className="hover:text-yellow-400">Pricing</a>
            <a href="#faq" className="hover:text-yellow-400">FAQ</a>
            <button className="bg-yellow-500 hover:bg-yellow-400 text-zinc-950 px-6 py-2.5 rounded-2xl font-medium flex items-center gap-2">
              Try Live Demo <Phone className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-700 rounded-full px-5 py-2 mb-8">
            <span className="text-yellow-400">⚡</span>
            <span className="text-sm font-medium">Missed calls = missed revenue</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
            Turn Missed Calls<br />
            Into <span className="text-yellow-400">Captured Clients</span>
          </h1>
          <p className="text-2xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            Instant SMS response → capture key details → deliver clean, ready-to-follow-up leads.<br />
            Built for high-value inbound businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="bg-yellow-500 hover:bg-yellow-400 text-zinc-950 px-10 py-4 rounded-2xl text-lg font-semibold flex items-center justify-center gap-3">
              Start 14-Day Free Trial <ArrowRight className="w-5 h-5" />
            </a>
            <button className="border border-zinc-700 hover:border-zinc-500 px-8 py-4 rounded-2xl text-lg font-medium">
              Try the Live Demo
            </button>
          </div>
          <p className="text-sm text-zinc-500 mt-8">No credit card required • No setup fee • Cancel anytime</p>
        </div>
      </section>

      {/* How it Works */}
      <section id="how" className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold tracking-tight mb-4">How CallCapture Works</h2>
          <p className="text-xl text-zinc-400 mb-16">From missed call to captured client in seconds</p>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              "A client calls your business",
              "You miss the call",
              "Instant professional text response",
              "We collect name, service need & urgency",
              "You receive a clean ready-to-follow-up lead",
            ].map((text, i) => (
              <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-yellow-500/50 transition">
                <div className="text-6xl font-bold text-yellow-500/30 mb-6">0{i+1}</div>
                <p className="text-lg">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value */}
      <section className="py-24 px-6 bg-zinc-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold tracking-tight mb-6">Missed Calls Are Missed Revenue</h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Most callers don’t leave voicemails. They move on. CallCapture makes sure you’re the first to respond — every time.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold tracking-tight text-center mb-16">Built for High-Intent Inbound Businesses</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Medical Aesthetics — Med spas & cosmetic clinics",
              "Legal Intake — Law firms & case intake teams",
              "Professional Services — Consulting & financial advisory",
              "Appointment-Based Businesses",
              "Any high-value inbound service",
            ].map((item, i) => (
              <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-yellow-500/30 transition">
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tight mb-4">Simple Pricing for High-Value Results</h2>
            <p className="text-xl text-zinc-400">14-Day Free Trial on every plan • No contract • Cancel anytime</p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-zinc-900 rounded-2xl p-1">
              <button 
                onClick={() => setIsAnnual(false)} 
                className={`px-8 py-3 rounded-xl transition ${!isAnnual ? 'bg-zinc-800 shadow' : 'text-zinc-400'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setIsAnnual(true)} 
                className={`px-8 py-3 rounded-xl transition ${isAnnual ? 'bg-zinc-800 shadow' : 'text-zinc-400'}`}
              >
                Annual <span className="text-yellow-400 text-xs">— Save ~17%</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier) => {
              const price = isAnnual ? tier.annual : tier.price;
              return (
                <div 
                  key={tier.name} 
                  className={`relative rounded-3xl p-10 border flex flex-col transition-all ${tier.popular ? 'border-yellow-500 bg-zinc-900 scale-[1.02]' : 'border-zinc-800 hover:border-zinc-700'}`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-zinc-950 px-6 py-1 rounded-full text-xs font-bold">MOST POPULAR</div>
                  )}
                  <h3 className="text-4xl font-semibold mb-2">{tier.name}</h3>
                  <p className="text-zinc-400 mb-8">{tier.description}</p>
                  
                  <div className="mb-10">
                    <span className="text-6xl font-bold tracking-tighter">${price}</span>
                    <span className="text-zinc-400">/month</span>
                  </div>

                  <ul className="space-y-4 mb-12 flex-1">
                    {tier.features.map((f, i) => (
                      <li key={i} className="flex gap-3">
                        <Check className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-300">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a 
                    href="#" 
                    className={`block text-center py-4 rounded-2xl font-semibold text-lg transition-all ${tier.popular ? 'bg-yellow-500 text-zinc-950 hover:bg-yellow-400' : 'bg-zinc-800 hover:bg-zinc-700'}`}
                  >
                    Start 14-Day Free Trial
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 px-6 bg-black border-t border-zinc-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl font-bold tracking-tight mb-6">Stop Letting Opportunities Slip Through</h2>
          <p className="text-2xl text-zinc-400 mb-10">Capture more clients and respond faster — without adding headcount.</p>
          <a href="#pricing" className="inline-block bg-yellow-500 hover:bg-yellow-400 text-zinc-950 px-12 py-5 rounded-2xl text-xl font-semibold">
            Start Your 14-Day Free Trial
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 py-12 text-center text-sm text-zinc-500 border-t border-zinc-900">
        © {new Date().getFullYear()} CallCapture. All rights reserved.<br />
        Built for businesses that refuse to lose clients to missed calls.
      </footer>
    </div>
  );
}
