// app/encora-access/page.tsx
"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { BinIcon, TagsIcon, VerifyIcon, ConnectIcon } from "@/components/icon";
import { HERO_STATS, HOW_STEPS, WHERE_FITS } from "./data";



export default function EncoraAccessPage() {
  const sectionRef = useRef(null);
  return (
    <main className="min-h-screen text-foreground">
      {/* HERO */}

      {/* Hero Section */}
      <section
        ref={sectionRef}
        className="relative mt-16 lg:mt-0 min-h-[80vh] sm:min-h-[80vh] lg:min-h-[90vh] flex items-center overflow-hidden py-[25px] sm:py-0"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: "url('/images/RetAI page hero photo. .png')",
          }}
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 100%)",
          }}
        />

        {/* Content */}
        <div className="container-encora relative z-10 px-4 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400 text-center lg:text-left">
            Encora Access
          </p>

          {/* MAIN GRID */}
          <div className="grid grid-cols-12 gap-8 items-center mt-6">
            {/* LEFT CONTENT */}
            <div className="col-span-12 lg:col-span-8 space-y-6">
              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center lg:text-left">
                <span className="block leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white max-w-3xl">
                  Kill the returns line.
                  <br />
                  Keep the customer.
                </span>
              </h1>

              {/* Description */}
              <p className="text-[1.1rem] text-sm sm:text-base text-white/90 leading-relaxed text-center lg:text-left max-w-3xl">
                RetAI by Encora turns your manual returns desk into a smart,
                self-serve drop point. Cut labor hours, shrink lines, and capture
                real-time data on every return.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-center">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-500/40 hover:bg-emerald-500 transition-colors"
                >
                  Book a 20-minute demo
                </Link>

                <Link
                  href="#how-it-works"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
                >
                  See how it works
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE (NOW PERFECTLY CENTERED) */}
            <div className="col-span-12 lg:col-span-4 flex justify-center lg:justify-end self-center">
              <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-xl p-1">
                <Image
                  src="/images/retai-logo-updated.png"
                  alt="RetAI logo"
                  width={200}
                  height={60}
                  className="object-contain rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid gap-4 md:grid-cols-3 place-items-center">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.title}
                className="rounded-2xl border border-white/20 bg-black/40 backdrop-blur-md p-4 text-center w-full"
              >
                <p className="text-sm font-semibold text-emerald-400">
                  {stat.title}
                </p>
                <p className="mt-1 text-xs text-white/80">
                  {stat.subtitle}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* RETURNS PAIN SECTION */}
      {/* <section className="mx-auto max-w-6xl px-4 mt-16 md:mt-24 lg:mt-[96px]">
        <div className="space-y-3">
          <h2 className="text-center heading-lg mb-12 dark:text-white">
            Returns lines are killing margins and patience.
          </h2>
          <p className="max-w-3xl text-sm text-muted-foreground sm:text-base">
            Returns are up. Labor is tight. And every customer waiting in line
            for a basic return is one less customer shopping.
          </p>
        </div>
        <p className="max-w-3xl text-sm text-muted-foreground sm:text-base">
          Most stores still treat returns like it&apos;s 1999: a staffed
          counter, manual ID and receipt checks, and almost no data on why items
          come back. RetAI moves that work into an always-on, smart return point
          without adding headcount.
        </p>

        <div className="mt-4 space-y-2">
          <h3 className="text-sm font-semibold text-muted-foreground">
            Today&apos;s reality
          </h3>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li>
              • High labor cost: associates spend hours daily keying in simple
              returns.
            </li>
            <li>
              • Customer frustration: long lines for a 30-second drop-off.
            </li>
            <li>• No visibility: no clear returns patterns until too late.</li>
          </ul>
        </div>
      </section> */}

      {/* RETURNS PAIN SECTION */}
      <section className="mx-auto max-w-6xl px-4 mt-16 md:mt-24 lg:mt-[96px]">
        <h2 className="text-center heading-lg mb-12 dark:text-white">
          Returns lines are killing margins and patience.
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* LEFT BLOCK */}
          <div className="rounded-2xl border bg-card p-6 space-y-4">
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Returns are up. Labor is tight. And every customer waiting in line
              for a basic return is one less customer shopping.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Most stores still treat returns like it&apos;s 1999: a staffed
              counter, manual ID and receipt checks, and almost no data on why
              items come back. RetAI moves that work into an always-on, smart
              return point without adding headcount.
            </p>
          </div>

          {/* RIGHT BLOCK */}
          <div className="rounded-2xl border bg-card p-6">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">
              Today&apos;s reality
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • High labor cost: associates spend hours daily keying in simple
                returns.
              </li>
              <li>
                • Customer frustration: long lines for a 30-second drop-off.
              </li>
              <li>
                • No visibility: no clear returns patterns until too late.
              </li>
            </ul>
          </div>
        </div>
      </section>


      {/* MEET RETAI */}
      <section className="mx-auto space-y-3 max-w-6xl px-4 mt-16 md:mt-24 lg:mt-[96px]">
        <div className="space-y-3">
          <h2 className="text-center heading-lg mb-12 dark:text-white">
            Meet RetAI – your smart return assistant.
          </h2>
          <p className="max-w-6xl text-center text-sm text-muted-foreground sm:text-base">
            RetAI combines a secure self-serve return bin with computer vision,
            ID checks, and transaction verification. Customers drop items in
            seconds. You get clean data and lower labor costs.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border bg-card p-5">
            <h3 className="text-sm font-semibold">Self-serve returns</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              No counter required. No app download needed.
            </p>
          </article>
          <article className="rounded-2xl border bg-card p-5">
            <h3 className="text-sm font-semibold">Verified, traceable items</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Every return tied to a real order and rules.
            </p>
          </article>
          <article className="rounded-2xl border bg-card p-5">
            <h3 className="text-sm font-semibold">Actionable data</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              See what&apos;s coming back, why, and from where.
            </p>
          </article>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-6xl space-y-3 px-4 mt-16 md:mt-24 lg:mt-[96px]">
        <div className="space-y-3">
          <h2 className="text-center heading-lg mb-12 dark:text-white">
            How RetAI works in your store.
          </h2>
          <p className="max-w-6xl text-center text-sm text-muted-foreground sm:text-base">
            A simple flow that works alongside your existing POS—no
            rip-and-replace.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {HOW_STEPS.map((step, i) => (
            <article
              key={i}
              className="space-y-3 rounded-2xl border bg-card p-5"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-sm font-semibold text-emerald-300">
                {step.icon}
              </div>
              <h3 className="text-sm font-semibold">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.body}</p>
            </article>
          ))}
        </div>
        {/* <p className="text-sm text-muted-foreground">
          Works with your POS — no rip-and-replace.
        </p> */}
      </section>

      {/* BEFORE & AFTER */}
      <section className="mx-auto max-w-6xl px-4 mt-16 md:mt-24 lg:mt-[96px]">
        <h2 className="text-center heading-lg mb-12 dark:text-white">
          Before and after RetAI.
        </h2>
        <p className="max-w-6xl text-center text-sm text-muted-foreground sm:text-base">
          Move from long manual lines to fast self-serve verification.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <div className="relative h-56 border bg-card w-full aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/retai-before.jpeg"
                alt="Manual returns line (today)"
                fill
                className="w-full h-full object-cover rounded-xl "
              />
            </div>
            <p className="text-sm text-center font-semibold text-emerald-600 dark:text-emerald-400">
              Manual returns line (today)
            </p>
          </div>
          <div className="space-y-3">
            <div className="relative h-56 border bg-card w-full aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/reuse-return.jpg"
                alt="Self-serve RetAI kiosk (after)"
                fill
                className="w-full h-full object-cover rounded-xl "
              />
            </div>
            <p className="text-sm font-semibold text-center text-emerald-600 dark:text-emerald-400">
              Self-serve RetAI kiosk (after)
            </p>
          </div>
        </div>
      </section>

      {/* UPGRADE FROM MANUAL */}
      <section className="mx-auto max-w-6xl px-4 mt-16 md:mt-24 lg:mt-[96px]">
        <h2 className="text-center heading-lg mb-12 dark:text-white">
          Upgrade from manual to smart returns.
        </h2>
        <div className="flex flex-col md:flex-row justify-around gap-8">
          <div>
            <h3 className="text-sm font-semibold ">Today, manual counter</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              <li>• Associate manually looks up orders</li>
              <li>• Checks receipts and rules</li>
              <li>• Processes one item at a time</li>
              <li>• No clean returns data</li>
              <li>• Long lines slow operations</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold ">With RetAI by Encora</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              <li>• Customers self-serve returns in under a minute</li>
              <li>• Automatic policy + order verification</li>
              <li>• Batch processing during quieter times</li>
              <li>• Each return tagged with reason, channel, packaging</li>
              <li>• Lines shrink; shoppers stay in-store</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BUILT FOR OPS / CX / RISK */}
      <section className="mx-auto max-w-6xl px-4 mt-16 md:mt-24 lg:mt-[96px]">
        <h2 className="text-center heading-lg mb-12 dark:text-white">
          Built for Ops, CX, and Risk teams.
        </h2>
        <div className="grid gap-6 md:grid-cols-3 md:place-items-center">
          <div>
            <h3 className="text-sm font-semibold ">For operations</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              <li>• Reduce counter workload</li>
              <li>• Spread out return volume</li>
              <li>• Extend return hours without staffing</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold ">For customer experience</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              <li>• Fast, guided self-serve returns</li>
              <li>• No account or app required</li>
              <li>• Keep foot traffic in-store</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold ">
              For risk &amp; loss prevention
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              <li>• Verified returns, not anonymous drops</li>
              <li>• Flags repeat abuse</li>
              <li>• Full audit trail of items</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WORKS WITH SYSTEMS + WHERE FITS */}
      {/* <section className="mx-auto max-w-6xl px-4 mt-16 md:mt-24 lg:mt-[96px]">
        <div className="space-y-4">
          <h2 className="text-center heading-lg mb-12 dark:text-white">
            Works with your existing systems.
          </h2>
          <p className="max-w-6xl text-center text-sm text-muted-foreground sm:text-base">
            RetAI plugs into POS, e-commerce, and returns workflows. Hardware +
            software + monitoring included.
          </p>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li>• API-friendly for POS, OMS, returns systems</li>
            <li>• Cloud-managed kiosks and bins</li>
            <li>• Configurable rules per brand/store</li>
          </ul>
          <p className="mt-2 text-xs text-slate-400">
            System diagram: Store → RetAI kiosk → POS/OMS → cloud dashboard.
          </p>
        </div>
      </section> */}
      {/* Where RetAI fits first.Let’s talk about your use case */}
      <section className="mx-auto max-w-6xl px-4 mt-16 md:mt-24 lg:mt-[96px]">
        <div className="space-y-4">
          <h2 className="text-center heading-lg mb-12 dark:text-white">
            Where RetAI fits first.
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {WHERE_FITS.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border bg-card p-5"
              >
                <h3 className="text-sm font-semibold  text-emerald-600 dark:text-emerald-400">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* ----------- */}

      {/* FINAL CTA */}
      <section className="mx-auto max-w-6xl px-4 rounded-3xl border border-emerald-500/40  p-6 sm:p-8 mt-16 md:mt-24 lg:mt-[96px] mb-16">
        <h2 className="text-2xl text-center font-semibold sm:text-3xl">
          Be an early pilot partner.
        </h2>
        <p className="max-w-6xl text-sm text-muted-foreground sm:text-base">
          We&apos;re working with early retail partners to test RetAI in live
          stores. If you face long returns lines or rising labor costs,
          let&apos;s co-design a pilot.
        </p>
        <div className="mt-4 flex flex-wrap gap-3  justify-center">
          <Link
            href="/contact?context=retai-pilot"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 dark:bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-500/40 dark:shadow-emerald-500/50 hover:bg-emerald-500 dark:hover:bg-emerald-400 transition-colors"
          >
            Schedule a pilot scoping call
          </Link>
          <Link
            href="/resources/retai-pilot-expanded.pdf"
            download
            target="_blank"
            className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-muted-foreground hover:border-foreground/50 hover:text-foreground transition-colors"
          >
            Download the 1-page pilot overview
          </Link>
        </div>
      </section>
    </main>
  );
}
