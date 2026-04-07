'use client';

import { useState } from 'react';
import { Check, ArrowRight, Phone } from 'lucide-react';

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
    description: 'Best for most high-intent inbound businesses',
    features: [
      'Up to 400 missed calls / text responses per month',
      'Advanced qualification & urgency scoring',
      'Multi-step workflows',
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
      'No setup fee • No contract • Cancel anytime',
    ],
    popular: false,
  },
];

export default function CallCapture() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* NAV */}
      <nav className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <span className="text-3xl font-semibold">CallCapture</span>
          <div className="flex items-center gap-10 text-sm">
            <a href="#how" className="hover:text-zinc-400">How it works</a>
            <a href="#proof" className="hover:text-zinc-400">Results</a>
            <a href="#pricing" className="hover:text-zinc-400">Pricing</a>
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl flex items-center gap-2">
              Book a Call <Phone className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-36 pb-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">

          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            You're Losing Thousands<br />
            <span className="text-blue-500">From Missed Calls</span>
          </h1>

          <p className="text-xl text-zinc-400 mb-10">
            Most service businesses miss 30–50% of inbound calls. Those customers go to competitors. CallCapture ensures you respond instantly and capture every opportunity.
          </p>

          <div className="flex gap-4 justify-center">
            <a href="#pricing" className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-2xl font-semibold flex items-center gap-2">
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </a>
            <button className="border border-zinc-700 px-8 py-4 rounded-2xl">
              See Demo
            </button>
          </div>

        </div>
      </section>

      {/* REVENUE CALLOUT */}
      <section className="py-20 px-6 bg-zinc-900 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Miss 20 Calls Per Week?</h2>
          <p className="text-xl text-zinc-400">
            If your average job is $300, that's <span className="text-blue-500 font-semibold">$24,000/month in lost revenue</span>.
          </p>
        </div>
      </section>

      {/* PROOF */}
      <section id="proof" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-10">Real Results</h2>

          <div className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800">
            <p className="text-xl text-zinc-300 mb-6">
              “We captured 37 missed calls in the first week alone. That turned into over $11,200 in booked jobs.”
            </p>
            <p className="text-zinc-500">— HVAC Company, Atlanta</p>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section id="how" className="py-24 px-6 bg-zinc-900">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            'Missed call triggers instant response',
            'We qualify the lead automatically',
            'You receive a ready-to-book client',
          ].map((text, i) => (
            <div key={i} className="bg-zinc-950 p-10 rounded-3xl border border-zinc-800">
              <p className="text-lg text-zinc-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">Simple Pricing</h2>
            <p className="text-zinc-400 mt-4">Free trial on every plan</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier) => {
              const price = isAnnual ? tier.annual : tier.price;
              return (
                <div key={tier.name} className={`bg-zinc-900 p-10 rounded-3xl border ${tier.popular ? 'border-blue-600' : 'border-zinc-800'}`}>
                  <h3 className="text-3xl mb-4">{tier.name}</h3>
                  <p className="text-zinc-400 mb-6">{tier.description}</p>

                  <div className="text-5xl font-bold mb-6">${price}</div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((f, i) => (
                      <li key={i} className="flex gap-2 text-zinc-300">
                        <Check className="w-4 h-4 text-blue-500" /> {f}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-blue-600 py-3 rounded-xl">Start Trial</button>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">Stop Losing Customers Today</h2>
        <button className="bg-blue-600 px-10 py-4 rounded-2xl">Get Started</button>
      </section>

    </div>
  );
}
