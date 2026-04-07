'use client';

import { useState } from 'react';
import { Check, ArrowRight, Phone } from 'lucide-react';

const tiers = [
  {
    name: 'Core',
    price: 397,
    annual: 327,
    description: 'Perfect for growing teams',
    features: [
      'Up to 150 missed calls / text responses per month',
      'Instant professional SMS follow-up',
      'Capture name, service need & urgency',
      'Clean ready-to-follow-up lead delivery',
      'Basic integrations',
      'Team notifications (up to 4 users)',
      'No setup fee • No contract • Cancel anytime',
    ],
    popular: false,
  },
  {
    name: 'Growth',
    price: 597,
    annual: 497,
    description: 'Best for most high-value inbound businesses',
    features: [
      'Up to 400 missed calls / text responses per month',
      'Advanced lead qualification',
      'Multi-step workflows',
      'Deeper CRM & scheduling integrations',
      'Detailed ROI analytics',
      'Priority support + onboarding',
      'Team access up to 8 users',
      'No setup fee • No contract • Cancel anytime',
    ],
    popular: true,
  },
  {
    name: 'Pro',
    price: 997,
    annual: 827,
    description: 'For high-volume & premium operations',
    features: [
      'Up to 800+ missed calls / text responses per month',
      'Fully custom scripts & logic',
      'Advanced CRM sync',
      'Premium reporting',
      'White-glove onboarding',
      'Priority support',
      'No setup fee • No contract • Cancel anytime',
    ],
    popular: false,
  },
];

export default function CallCapture() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b bg-white">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="text-2xl font-semibold">CallCapture</div>
          <div className="flex items-center gap-8 text-sm">
            <a href="#how" className="hover:text-zinc-600">How it works</a>
            <a href="#pricing" className="hover:text-zinc-600">Pricing</a>
            <a href="#faq" className="hover:text-zinc-600">FAQ</a>
            <button className="bg-zinc-900 text-white px-6 py-2.5 rounded-xl flex items-center gap-2 hover:bg-black">
              Try Live Demo <Phone className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-none">
            Turn Missed Calls<br />
            Into <span className="text-zinc-700">Captured Clients</span>
          </h1>
          <p className="text-2xl text-zinc-600 mt-6 mb-10">
            Instant SMS response. Smart qualification. Clean leads delivered to your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="bg-zinc-900 hover:bg-black text-white px-10 py-4 rounded-2xl text-lg font-semibold flex items-center justify-center gap-3">
              Start 14-Day Free Trial <ArrowRight className="w-5 h-5" />
            </a>
            <button className="border border-zinc-300 hover:bg-zinc-50 px-8 py-4 rounded-2xl text-lg font-medium">
              Try the Live Demo
            </button>
          </div>
          <p className="text-sm text-zinc-500 mt-8">No credit card required • Cancel anytime</p>
        </div>
      </section>

      {/* How it Works */}
      <section id="how" className="py-24 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tight">How CallCapture Works</h2>
            <p className="text-xl text-zinc-600 mt-4">From missed call to captured client in seconds</p>
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              "A client calls your business",
              "You miss the call",
              "Instant professional text response",
              "We collect name, service need & urgency",
              "You receive a clean, ready-to-follow-up lead",
            ].map((text, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-zinc-100 hover:border-zinc-200 transition">
                <div className="text-5xl font-bold text-zinc-300 mb-6">0{i+1}</div>
                <p className="text-lg">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold tracking-tight mb-6">Missed Calls Are Missed Revenue</h2>
          <p className="text-xl text-zinc-600">
            Most callers don’t leave voicemails — they call someone else. CallCapture ensures you respond first, every time.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold tracking-tight text-center mb-16">Built for High-Value Inbound Businesses</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Medical Aesthetics — Med spas & cosmetic clinics",
              "Legal Intake — Law firms & case intake teams",
              "Professional Services — Consulting & financial advisory",
              "Appointment-Based Businesses",
              "Any inbound-dependent high-value service",
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-zinc-100 text-center hover:border-zinc-200 transition">
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tight">Simple Pricing for Real Results</h2>
            <p className="text-xl text-zinc-600 mt-4">14-Day Free Trial on every plan • No contract • Cancel anytime</p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-zinc-100 rounded-2xl p-1 text-sm">
              <button onClick={() => setIsAnnual(false)} className={`px-8 py-3 rounded-xl transition ${!isAnnual ? 'bg-white shadow' : ''}`}>Monthly</button>
              <button onClick={() => setIsAnnual(true)} className={`px-8 py-3 rounded-xl transition ${isAnnual ? 'bg-white shadow' : ''}`}>Annual <span className="text-emerald-600 text-xs">— Save 17%</span></button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier) => {
              const price = isAnnual ? tier.annual : tier.price;
              return (
                <div key={tier.name} className={`relative bg-white border rounded-3xl p-10 flex flex-col ${tier.popular ? 'border-zinc-900 shadow-2xl scale-[1.02]' : 'border-zinc-200'}`}>
                  {tier.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-xs font-bold px-6 py-1.5 rounded-full">MOST POPULAR</div>}
                  
                  <h3 className="text-4xl font-semibold mb-2">{tier.name}</h3>
                  <p className="text-zinc-600 mb-8">{tier.description}</p>

                  <div className="mb-10">
                    <span className="text-6xl font-bold">${price}</span>
                    <span className="text-zinc-500">/month</span>
                  </div>

                  <ul className="space-y-4 mb-12 flex-1">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-600 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="#" className={`block text-center py-4 rounded-2xl font-semibold text-lg ${tier.popular ? 'bg-zinc-900 text-white' : 'bg-zinc-100 hover:bg-zinc-200'}`}>
                    Start 14-Day Free Trial
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 px-6 bg-zinc-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-bold tracking-tight mb-6">Stop Letting Opportunities Slip Through</h2>
          <p className="text-2xl text-zinc-400 mb-10">Capture more clients and respond faster — without adding headcount.</p>
          <a href="#pricing" className="inline-block bg-white text-zinc-900 px-12 py-5 rounded-2xl text-xl font-semibold hover:bg-zinc-100">
            Start Your 14-Day Free Trial
          </a>
        </div>
      </section>

      <footer className="bg-white py-12 text-center text-sm text-zinc-500 border-t">
        © {new Date().getFullYear()} CallCapture. All rights reserved.<br />
        Built for businesses that refuse to lose clients to missed calls.
      </footer>
    </div>
  );
}
