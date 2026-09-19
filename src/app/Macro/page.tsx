"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Clock3,
  Download,
  FileText,
  Layers3,
  Zap,
  Settings,
  Workflow,
  ShieldCheck,
  Rocket,
  PlayCircle,
} from "lucide-react";

export default function Home() {
  const handleStripeCheckout = async () => {
    // Replace with your Stripe Checkout URL or API route
    window.location.href = "/api/create-checkout-session";
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  const benefits = [
    "Automatic drawing creation",
    "Standardised engineering output",
    "Faster documentation workflow",
    "Reduced repetitive CAD tasks",
    "Increased engineering productivity",
  ];

  const features = [
    {
      icon: Layers3,
      title: "Smart View Generation",
      desc: "Automatically inserts the correct drawing views and layouts.",
    },
    {
      icon: FileText,
      title: "Automatic Dimensions",
      desc: "Create consistent documentation with minimal manual input.",
    },
    {
      icon: Settings,
      title: "Sheet Template Support",
      desc: "Works with your existing title blocks and company templates.",
    },
    {
      icon: Workflow,
      title: "Batch Processing Ready",
      desc: "Scale documentation across multiple components quickly.",
    },
    {
      icon: ShieldCheck,
      title: "Custom Standards",
      desc: "Maintain consistency across teams and projects.",
    },
    {
      icon: Rocket,
      title: "Assembly Support",
      desc: "Generate documentation for both parts and assemblies.",
    },
  ];

  const faqs = [
    {
      q: "Which versions of SolidWorks are supported?",
      a: "The macro is designed for modern SolidWorks releases. Specific tested versions can be listed here.",
    },
    {
      q: "Is this a subscription?",
      a: "No. This is a one-time purchase with lifetime use.",
    },
    {
      q: "How is the software delivered?",
      a: "Instant digital download following successful Stripe payment.",
    },
    {
      q: "Can it work with our existing templates?",
      a: "Yes. The macro is designed to integrate with established drawing templates and standards.",
    },
  ];

  return (
    <main className="bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[140px]" />
        <div className="absolute right-0 top-96 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute left-0 bottom-0 h-[450px] w-[450px] rounded-full bg-violet-700/10 blur-[120px]" />
      </div>

      {/* Hero */}
      <section className="relative px-6 pt-24 pb-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
              Engineering Productivity Software
            </div>

            <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
              Generate Professional
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}
                SolidWorks Drawings
              </span>
              <br />
              In Seconds
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl text-slate-300">
              Stop spending hours creating repetitive engineering drawings.
              SolidWorks Drawing Automator automatically generates
              professional documentation from parts and assemblies with
              minimal user input.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={handleStripeCheckout}
                className="group flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold transition hover:scale-105"
              >
                <Download size={20} />
                Download Now – NZD $149
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </button>

              #demo
                <PlayCircle size={20} />
                Watch Demo
              </a>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-400">
              <span>✓ One-Time Purchase</span>
              <span>✓ Instant Download</span>
              <span>✓ Lifetime Use</span>
              <span>✓ No Subscription</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold">
                Engineering Documentation,
                <span className="text-cyan-400"> Automated</span>
              </h2>

              <p className="mt-6 text-lg text-slate-300">
                The macro automatically creates professional SolidWorks
                drawings using intelligent view placement, template support,
                and standardised workflows.
              </p>

              <div className="mt-8 space-y-5">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 text-slate-200"
                  >
                    <Check className="text-cyan-400" size={18} />
                    {benefit}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-4 shadow-2xl">
                <div className="aspect-video rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <div className="text-center">
                    <FileText
                      size={80}
                      className="mx-auto text-cyan-400"
                    />
                    <p className="mt-4 text-lg font-medium">
                      Software Preview
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before After */}
      <section
        id="demo"
        className="border-y border-white/10 bg-white/[0.02] px-6 py-24 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-bold">
            Before vs After Automation
          </h2>

          <p className="mt-4 text-center text-slate-400">
            See the difference between manual drawing production and automated
            generation.
          </p>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-red-500/20 bg-slate-950 p-6">
              <h3 className="mb-4 text-xl font-semibold text-red-400">
                BEFORE
              </h3>

              <div className="aspect-video rounded-2xl bg-slate-900 flex items-center justify-center">
                <p className="text-slate-500">
                  Insert Before Video URL
                </p>
              </div>

              <p className="mt-4 text-slate-400">
                Manual view creation, repetitive clicks, drawing setup,
                annotation and formatting.
              </p>
            </div>

            <div className="rounded-3xl border border-cyan-500/20 bg-slate-950 p-6">
              <h3 className="mb-4 text-xl font-semibold text-cyan-400">
                AFTER
              </h3>

              <div className="aspect-video rounded-2xl bg-slate-900 flex items-center justify-center">
                <p className="text-slate-500">
                  Insert After Video URL
                </p>
              </div>

              <p className="mt-4 text-slate-400">
                Select model → Run macro → Drawing generated automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-4xl font-bold">How It Works</h2>

          <div className="mt-16 grid gap-6 md:grid-cols-4">
            {[
              "Install Macro",
              "Select Part or Assembly",
              "Generate Drawing Automatically",
              "Review & Export",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/20 text-xl font-bold text-cyan-400">
                  {index + 1}
                </div>
                <h3 className="mt-5 font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-4xl font-bold">
            Time Saved = Profit Earned
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8">
              <Clock3 className="text-cyan-400" size={36} />
              <div className="mt-4 text-5xl font-bold">90%</div>
              <p className="mt-2 text-slate-400">
                Less time spent generating drawings
              </p>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8">
              <Zap className="text-cyan-400" size={36} />
              <div className="mt-4 text-5xl font-bold">10x</div>
              <p className="mt-2 text-slate-400">
                Faster documentation workflow
              </p>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8">
              <Rocket className="text-cyan-400" size={36} />
              <div className="mt-4 text-5xl font-bold">1 Day</div>
              <p className="mt-2 text-slate-400">
                Typical ROI for active users
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-bold">
            Built For Serious Engineers
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-cyan-500/30"
              >
                <feature.icon className="text-cyan-400" size={32} />
                <h3 className="mt-4 text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="mt-3 text-slate-400">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-4xl font-bold">
            Trusted By Engineers
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              "[Placeholder Testimonial]",
              "[Placeholder Testimonial]",
              "[Placeholder Testimonial]",
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-3xl border border-white/10 bg-white/5 p-8"
              >
                <p className="text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-[32px] border border-cyan-500/30 bg-gradient-to-b from-cyan-500/10 to-slate-950 p-10 text-center">
            <div className="text-cyan-400 font-semibold">
              ONE-TIME PURCHASE
            </div>

            <h2 className="mt-4 text-5xl font-bold">NZD $149</h2>

            <p className="mt-4 text-slate-300">
              Lifetime access. No monthly fees. No subscriptions.
            </p>

            <div className="mt-8 space-y-4 text-left">
              {[
                "Instant download",
                "Lifetime use",
                "No subscription",
                "Works with company templates",
                "Assembly & Part support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check className="text-cyan-400" size={18} />
                  {item}
                </div>
              ))}
            </div>

            <button
              onClick={handleStripeCheckout}
              className="mt-10 w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 font-semibold transition hover:scale-[1.02]"
            >
              Buy Now with Stripe
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="font-semibold">{faq.q}</h3>
                <p className="mt-3 text-slate-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-6xl rounded-[40px] border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-12 text-center">
          <h2 className="text-5xl font-bold">
            Stop Drawing.
            <br />
            Start Engineering.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-300">
            Recover hours every week by automating repetitive drawing
            documentation tasks and focusing on design work that actually
            creates value.
          </p>

          <button
            onClick={handleStripeCheckout}
            className="mt-10 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-5 text-lg font-semibold transition hover:scale-105"
          >
            Download Now – NZD $149
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10 text-center text-slate-500">
        <p className="font-medium text-slate-300">
          SolidWorks Drawing Automator
        </p>

        <p className="mt-2">
          Engineering Productivity Software for SolidWorks Users
        </p>

        <p className="mt-4 text-sm">
          © {new Date().getFullYear()} SolidWorks Drawing Automator.
          All rights reserved.
        </p>
      </footer>
    </main>
  );
}
