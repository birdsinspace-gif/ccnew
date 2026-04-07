'use client';

import { useState } from 'react';
import { ArrowRight, Check, Phone } from 'lucide-react';

const pricing = {
  monthly: {
    label: 'Monthly',
    price: 497,
    subtext: 'Billed monthly',
    cta: 'Get Started',
  },
  annual: {
    label: 'Annual',
    price: 417,
    subtext: 'Billed annually at $5,004/year, save $960',
    cta: 'Get Started',
  },
};

const features = [
  'Instant missed-call response',
  'Lead capture and qualification',
  'Clean lead delivery',
  'No contracts, cancel anytime',
];

const industries = [
  {
    title: 'Medical aesthetics',
    description: 'Med spas, cosmetic clinics',
  },
  {
    title: 'Legal intake',
    description: 'Law firms, case intake teams',
  },
  {
    title: 'Professional services',
    description: 'Consulting, financial advisory',
  },
  {
    title: 'Appointment-based businesses',
    description: 'Any scheduled-service provider',
  },
  {
    title: 'Inbound-dependent businesses',
    description: 'Any business that depends on inbound calls',
  },
];

const steps = [
  'A client calls your business',
  'You miss the call',
  'CallCapture responds instantly with a professional text',
  'We collect key information, name, service need, urgency',
  'You receive a clean, ready-to-follow-up lead',
];

export default function CallCapturePage() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');
  const currentPlan = pricing[billing];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="text-2xl font-semibold tracking-tight">
            CallCapture
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#how" className="text-sm text-zinc-300 transition hover:text-white">
              How It Works
            </a>
            <a href="#industries" className="text-sm text-zinc-300 transition hover:text-white">
              Industries
            </a>
            <a href="#pricing" className="text-sm text-zinc-300 transition hover:text-white">
              Pricing
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              Book a Call <Phone className="h-4 w-4" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 pb-24 pt-36 md:pt-40">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-5 py-2 text-sm text-zinc-300">
            <span>Built for high-value inbound businesses</span>
          </div>

          <h1 className="mx-auto mb-8 max-w-5xl text-5xl font-bold tracking-tight text-white md:text-7xl md:leading-[1.02]">
            Turn Missed Calls Into Captured Clients Automatically
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl">
            When your team is busy or unavailable, CallCapture instantly responds to inbound callers,
            captures their information, and helps you convert more opportunities without lifting a finger.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#demo"
              className="inline-flex min-w-[220px] items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-zinc-950 transition hover:bg-zinc-200"
            >
              Try the Live Demo <ArrowRight className="h-5 w-5" />
            </a>

            <a
              href="#contact"
              className="inline-flex min-w-[220px] items-center justify-center gap-3 rounded-2xl border border-zinc-700 px-8 py-4 text-base font-semibold text-white transition hover:bg-zinc-900"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* Problem / Value */}
      <section className="border-y border-zinc-800 bg-zinc-900 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Missed Calls Are Missed Revenue
            </p>
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              Most callers don’t leave voicemails
            </h2>
            <div className="space-y-4 text-lg text-zinc-400">
              <p>They move on to the next provider within minutes.</p>
              <p>Every missed call is a lost opportunity.</p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Speed Wins Business
            </p>
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              Be the First to Respond, Every Time
            </h2>
            <p className="text-lg leading-8 text-zinc-400">
              CallCapture ensures every inbound call is handled instantly, even when you can’t answer.
              Speed wins business. We make sure you never miss the moment.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">How It Works</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-5">
            {steps.map((step, index) => (
              <div
                key={step}
                className="rounded-3xl border border-zinc-800 bg-zinc-900 p-7 transition hover:border-zinc-700"
              >
                <div className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
                  Step {index + 1}
                </div>
                <p className="text-base leading-7 text-zinc-300">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo */}
      <section id="demo" className="bg-zinc-900 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              What the Experience Feels Like
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-400">
              Professional, immediate, and built to help you convert high-intent inbound leads faster.
            </p>
          </div>

          <div className="mx-auto max-w-2xl rounded-3xl border border-zinc-800 bg-zinc-950 p-8 shadow-2xl shadow-black/20">
            <div className="space-y-5 text-left text-sm md:text-base">
              <div className="rounded-2xl bg-zinc-900 px-5 py-4 text-zinc-300">
                Incoming call from prospective client
              </div>
              <div className="rounded-2xl bg-blue-600 px-5 py-4 text-white">
                Hi, thanks for reaching out to [Business Name]. We saw your call. How can we help?
              </div>
              <div className="rounded-2xl bg-zinc-900 px-5 py-4 text-zinc-300">
                I’m looking to book a consultation this week.
              </div>
              <div className="rounded-2xl bg-blue-600 px-5 py-4 text-white">
                Absolutely. Can you share your name and the best time to follow up?
              </div>
              <div className="rounded-2xl bg-zinc-900 px-5 py-4 text-zinc-300">
                Lead captured, qualified, and delivered to your team.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Built for High-Intent Inbound Businesses
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="rounded-3xl border border-zinc-800 bg-zinc-900 p-7 transition hover:border-zinc-700"
              >
                <h3 className="mb-3 text-xl font-semibold text-white">{industry.title}</h3>
                <p className="text-sm leading-7 text-zinc-400">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-zinc-900 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Simple, Scalable Pricing
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-zinc-400">
              Flat pricing, no contracts, and built to pay for itself with just one captured client.
            </p>
          </div>

          <div className="mb-10 flex justify-center">
            <div className="inline-flex rounded-2xl border border-zinc-800 bg-zinc-950 p-1">
              <button
                onClick={() => setBilling('monthly')}
                className={`rounded-xl px-6 py-3 text-sm font-medium transition ${
                  billing === 'monthly'
                    ? 'bg-white text-zinc-950'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling('annual')}
                className={`rounded-xl px-6 py-3 text-sm font-medium transition ${
                  billing === 'annual'
                    ? 'bg-white text-zinc-950'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Annual
              </button>
            </div>
          </div>

          <div className="mx-auto max-w-2xl rounded-[2rem] border border-zinc-800 bg-zinc-950 p-10 text-center shadow-2xl shadow-black/20">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              {currentPlan.label}
            </p>

            <div className="mb-3">
              <span className="text-6xl font-bold tracking-tight text-white">${currentPlan.price}</span>
              <span className="ml-2 text-lg text-zinc-400">/mo</span>
            </div>

            <p className="mb-8 text-sm text-zinc-500">{currentPlan.subtext}</p>

            <div className="mb-8 space-y-4 text-left">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 rounded-2xl bg-zinc-900 px-4 py-4">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <span className="text-zinc-300">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-blue-700"
            >
              {currentPlan.cta}
            </a>

            <p className="mt-5 text-sm text-zinc-500">
              Custom onboarding available for early partners
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-5 text-4xl font-bold tracking-tight md:text-6xl">
            Stop Letting Opportunities Slip Through
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-zinc-400">
            Capture more clients, respond faster, and grow your business without adding headcount.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#demo"
              className="inline-flex min-w-[220px] items-center justify-center rounded-2xl bg-white px-8 py-4 text-base font-semibold text-zinc-950 transition hover:bg-zinc-200"
            >
              Try the Demo
            </a>
            <a
              href="mailto:hello@callcapture.cc"
              className="inline-flex min-w-[220px] items-center justify-center rounded-2xl border border-zinc-700 px-8 py-4 text-base font-semibold text-white transition hover:bg-zinc-900"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-zinc-950 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-zinc-500 md:flex-row">
          <div className="font-medium text-zinc-300">CallCapture</div>
          <div className="flex items-center gap-6">
            <a href="#" className="transition hover:text-white">
              Privacy
            </a>
            <a href="#" className="transition hover:text-white">
              Terms
            </a>
          </div>
          <div>© 2026 CallCapture. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
