"use client";
import Link from "next/link";
import Image from "next/image";
import {
    CheckCircle,
    Smartphone,
    MapPin,
    Zap,
    Scan,
    ArrowDown,
} from "lucide-react";
import React from "react";
import { BinIcon, TagsIcon, VerifyIcon, ConnectIcon } from "@/components/icon";

// Small client image component with fallback
function ImageWithFallback({
    src,
    alt = "",
    className = "",
    placeholder = "/images/placeholder-encora.png",
}: { src: string, alt?: string, className?: string, placeholder?: string }) {
    const [imgSrc, setImgSrc] = React.useState(src);
    return (
        // kept as <img> intentionally so fallback onError works in client
        <img
            src={imgSrc}
            alt={alt}
            className={className}
            onError={() => imgSrc !== placeholder && setImgSrc(placeholder)}
        />
    );
}

export default function BinPage() {
    return (
        <main className="flex flex-col w-full overflow-hidden text-foreground">

            {/* ================= HERO ================= */}
            <section className="relative mt-16 lg:mt-0 min-h-[70vh] sm:min-h-[80vh] lg:min-h-[85vh] flex items-center align-center overflow-hidden bg-card">
                {/* Background Image Layer */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-center"
                    style={{
                        backgroundImage: "url('/images/bin-lifestyle.png')",
                    }}
                />

                {/* Overlay Layer */}
                <div
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                        background: "linear-gradient(to right, rgba(0,0,0,0.45), rgba(0,0,0,0.15))"
                    }}
                />

                <div className="container-encora relative z-10 px-4 sm:px-8 w-full h-full flex items-center">
                    <div className="max-w-[720px] text-left text-white space-y-6">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold tracking-tight leading-tight">
                            The Smart Return Bin
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
                            Effortless, contactless drop-off — with clear on-screen guidance.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-start pt-8">
                            <Link
                                href="#how-it-works"
                                className="inline-flex items-center rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-emerald-700 transition-colors"
                            >
                                How it works
                            </Link>
                            <Link
                                href="/resources/spec-sheet.pdf"
                                target="_blank"
                                className="inline-flex items-center rounded-full border border-slate-200/60 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
                            >
                                Download Spec Sheet
                            </Link>
                        </div>
                    </div>

                </div>

                <Link
                    href="#operators"
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/80 hover:text-white text-sm font-medium flex flex-col items-center gap-2 transition-all hover:scale-105 p-2 rounded-lg hover:bg-white/10"
                >
                    For Operators
                    <ArrowDown className="w-5 h-5 animate-bounce" />
                </Link>
            </section>

            {/* ================= HOW IT WORKS (CONSUMER) ================= */}
            <section id="how-it-works" className="mt-16 md:mt-24 lg:mt-[4rem]">
                <div className="container-encora px-4">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="heading-lg dark:text-white">
                            How it works
                        </h2>
                        <p className="mt-2 text-lg text-encora-green dark:text-encora-mint font-medium">
                            You’ll see confirmation when you’re done.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                img: "/images/Smart bin page step 1.png",
                                title: "Bring your item",
                                desc: "No packaging needed. Just bring your return item.",
                            },
                            {
                                img: "/images/Smart bin page step 2.png",
                                title: "Follow the screen",
                                desc: "Clear, contactless guidance at every step.",
                            },
                            {
                                img: "/images/Smart bin page step 3.png",
                                title: "Drop it in",
                                desc: "Secure drop-off with instant confirmation.",
                            },
                        ].map((step, i) => (
                            <article
                                key={i}
                                className="flex flex-col h-full space-y-3 rounded-2xl border border-slate-200/6 bg-white dark:bg-slate-900/30 p-4 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
                                    <ImageWithFallback
                                        src={step.img}
                                        alt={step.title}
                                        className="w-full h-full object-cover rounded-xl"
                                    />
                                </div>
                                <div className="space-y-2">
                                    {/* 'How it works' card */}
                                    <h3 className="text-lg font-semibold text-foreground dark:text-white">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground dark:text-gray-300">{step.desc}</p>


                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= BIN FEATURES ================= */}
            <section className="mt-16 md:mt-24 lg:mt-[96px]">
                <div className="container-encora px-4">
                    <h2 className="heading-lg text-center mb-16 dark:text-white">
                        Built for quick, everyday returns
                    </h2>

                    <div className="relative max-w-5xl mx-auto">
                        <div className="relative aspect-[4/3] flex items-center justify-center">
                            <Image
                                src="/images/bin-cutout.png"
                                alt="Smart Return Bin"
                                fill
                                className="object-contain"
                            />

                            {/* Desktop pointers */}
                            <div className="hidden md:block absolute inset-0">
                                {/* Pointer 1: Screen */}
                                <div className="absolute top-[35%] left-[5%] lg:left-[10%] flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                                    <div className="text-right bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-white/50">
                                        <h4 className="font-bold text-encora-green dark:text-encora-mint">Guided instructions</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">Clear prompts on-screen</p>
                                    </div>
                                    <span className="w-3 h-3 bg-encora-green rounded-full shadow-[0_0_0_4px_rgba(25,76,77,0.2)]" />
                                </div>

                                {/* Pointer 2: Center opening */}
                                <div className="absolute top-[28%] right-[5%] lg:right-[10%] flex items-center gap-3 flex-row-reverse animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                                    <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-white/50">
                                        <h4 className="font-bold text-encora-green dark:text-encora-mint">Quick drop-off</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">Hands-free return</p>
                                    </div>
                                    <span className="w-3 h-3 bg-encora-green rounded-full shadow-[0_0_0_4px_rgba(25,76,77,0.2)]" />
                                </div>

                                {/* Pointer 3: Side opening/Multiple slots */}
                                <div className="absolute bottom-[45%] left-[15%] lg:left-[20%] flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                                    <div className="text-right bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-white/50">
                                        <h4 className="font-bold text-encora-green dark:text-encora-mint">Multiple intake slots</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">Fits common items</p>
                                    </div>
                                    <span className="w-3 h-3 bg-encora-green rounded-full shadow-[0_0_0_4px_rgba(25,76,77,0.2)]" />
                                </div>

                                {/* Pointer 4: Durable body */}
                                <div className="absolute bottom-[25%] right-[10%] lg:right-[15%] flex items-center gap-3 flex-row-reverse animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
                                    <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-white/50">
                                        <h4 className="font-bold text-encora-green dark:text-encora-mint">Durable design</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">Made for busy places</p>
                                    </div>
                                    <span className="w-3 h-3 bg-encora-green rounded-full shadow-[0_0_0_4px_rgba(25,76,77,0.2)]" />
                                </div>
                            </div>
                        </div>

                        {/* Mobile Fallback Bullets */}
                        <div className="md:hidden grid grid-cols-2 gap-4 mt-8">
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <h4 className="font-bold text-encora-green dark:text-encora-mint text-sm">Guided instructions</h4>
                                <p className="text-xs text-gray-600">Clear prompts on-screen</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <h4 className="font-bold text-encora-green dark:text-encora-mint text-sm">Quick drop-off</h4>
                                <p className="text-xs text-gray-600">Hands-free return</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <h4 className="font-bold text-encora-green dark:text-encora-mint text-sm">Multiple intake slots</h4>
                                <p className="text-xs text-gray-600">Fits common items</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <h4 className="font-bold text-encora-green dark:text-encora-mint text-sm">Durable design</h4>
                                <p className="text-xs text-gray-600">Made for busy places</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= WHY SMARTER (CONSUMER) ================= */}
            <section className="mt-16 md:mt-24 lg:mt-[96px]">
                <div className="container-encora px-4">
                    <h2 className="heading-lg text-center mb-16 dark:text-white">
                        Why it’s smarter
                    </h2>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { icon: CheckCircle, title: "Clear confirmation", desc: "Know instantly your drop-off worked." },
                            { icon: Smartphone, title: "Contactless experience", desc: "No staff needed." },
                            { icon: MapPin, title: "Built for public spaces", desc: "Designed for high-traffic locations." },
                            { icon: Zap, title: "Returns move faster", desc: "Helps items get to their next step sooner." },
                        ].map((c, i) => (
                            <article
                                key={i}
                                className="space-y-3 rounded-2xl border bg-card p-5 h-full hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                                    <c.icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-sm font-semibold dark:text-white">{c.title}</h3>
                                <p className="text-sm text-muted-foreground dark:text-gray-300">{c.desc}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= OPERATORS SECTION ================= */}
            <div id="operators" className="scroll-mt-24" />
            <div className="container-encora px-4">
                <hr className="border-t border-gray-200 dark:border-gray-700" />
            </div>

            <section className="mt-16 md:mt-24 lg:mt-[96px] ">
                <div className="container-encora px-4 ">
                    {/* Intro */}
                    <div className="mx-auto mb-16">
                        <span className="inline-block px-3 text-center py-1 bg-encora-mint/10 text-encora-green dark:text-encora-mint text-xs font-bold uppercase tracking-wider rounded-full mb-4 border border-encora-mint/20">
                            For Operators
                        </span>
                        <h2 className="heading-lg mb-8 text-center dark:text-white">
                            Active returns infrastructure
                        </h2>

                        <div className="prose prose-lg max-w-none">
                            <p className="font-medium text-xl leading-relaxed text-encora-green mb-6 dark:text-encora-mint">
                                More than just a drop-off point.
                            </p>
                            <p className="mb-4 text-muted-foreground dark:text-gray-300">
                                Traditional return lockers are passive, limited, and often disconnected from the broader supply chain. They store items until someone manually retrieves them.
                            </p>
                            <p className="mb-4 text-muted-foreground dark:text-gray-300">
                                The Encora Smart Return Bin is an <strong className="text-foreground dark:text-white">active participant</strong> in your reverse logistics network. It initiates verification and sorting the moment a return is made.
                            </p>
                            <p className="text-muted-foreground dark:text-gray-300">
                                By reading encoded tags and communicating with our Verification Cloud, the Smart Bin helps ensure every return is legitimate, tracked, and ready for its next life — resale, recycling, or restocking.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <Link
                                href="/resources/spec-sheet.pdf"
                                target="_blank"
                                className="inline-flex items-center justify-center rounded-full bg-emerald-600 dark:bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-500/40 dark:shadow-emerald-500/50 hover:bg-emerald-500 dark:hover:bg-emerald-400 transition-colors"
                            >
                                Download Spec Sheet
                            </Link>
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-muted-foreground hover:border-foreground/50 hover:text-foreground transition-colors"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                        {/* Subsection 4A: Why it's smarter (Operator) */}
                        <div className="space-y-8">
                            <h3 className="heading-md dark:text-white">Why it’s smarter</h3>
                            <ul className="space-y-6">
                                {[
                                    { title: "Real-time Verification", desc: "Instantly validates returned items against database records." },
                                    { title: "Contactless Drop-off", desc: "Seamless experience for customers, no staff intervention needed." },
                                    { title: "Secure Storage", desc: "Anti-theft design helps keep items safe until collection." },
                                    { title: "Data-Driven Insights", desc: "Captures granular data on return volume, timing, and item condition." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4">
                                        <div className="w-6 h-6 rounded-full bg-encora-green/10 flex-shrink-0 flex items-center justify-center text-encora-green mt-1">
                                            <CheckCircle className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">{item.title}</h4>
                                            <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Subsection 4B: Key Capabilities */}
                        <div className="space-y-8">
                            <h3 className="heading-md dark:text-white">Key Capabilities</h3>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <Capability
                                    icon={<BinIcon />}
                                    title="High Capacity"
                                    desc="Optimized spatial design to maximize storage within a compact footprint."
                                />
                                <Capability
                                    icon={<TagsIcon />}
                                    title="Tag Agnostic"
                                    desc="Compatible with various RFID and NFC standards for broad integration."
                                />
                                <Capability
                                    icon={<ConnectIcon />}
                                    title="Always Connected"
                                    desc="IoT-enabled for continuous status monitoring and alerts."
                                />
                                <Capability
                                    icon={<VerifyIcon />}
                                    title="Instant Feedback"
                                    desc="Provides immediate confirmation to users via integrated display."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="py-24 text-center">
                <div className="container-encora px-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
                        Ready to upgrade your return infrastructure?
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                        See the full technical specifications or talk to our team about a pilot program.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/resources/spec-sheet.pdf"
                            target="_blank"
                            className="inline-flex items-center justify-center rounded-full bg-emerald-600 dark:bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-500/40 dark:shadow-emerald-500/50 hover:bg-emerald-500 dark:hover:bg-emerald-400 transition-colors"
                        >
                            Download Spec Sheet
                        </Link>
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-muted-foreground hover:border-foreground/50 hover:text-foreground transition-colors"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

        </main >
    );
}

function Capability({ icon, title, desc }: { icon: React.ReactNode; title: string, desc: string }) {
    return (
        <div className="bg-card p-5 rounded-2xl border space-y-3 h-full hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <div className="w-5 h-5 flex items-center justify-center child-svg:w-full child-svg:h-full">
                    {icon}
                </div>
            </div>
            <h4 className="text-sm font-semibold dark:text-white">{title}</h4>
            <p className="text-sm text-muted-foreground dark:text-gray-300 leading-snug">{desc}</p>
        </div>
    );
}
