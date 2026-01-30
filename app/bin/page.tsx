import Link from "next/link";
import { BinIcon, TagsIcon, VerifyIcon, ConnectIcon } from "@/components/icon";

export default function BinPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-encora-green/5 to-transparent dark:from-encora-green/20">
                <div className="container-encora px-4 sm:px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-encora-green dark:text-white">
                        The Smart Return Bin
                    </h1>
                    <p className="text-xl md:text-2xl text-encora-text/80 dark:text-gray-300 max-w-3xl mx-auto mb-10">
                        Intelligent, secure, and effortless returns. The core of our neutral infrastructure.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link
                            href="/resources/spec-sheet.pdf"
                            target="_blank"
                            className="bg-encora-green hover:bg-encora-green-dark text-white px-8 py-4 rounded-2xl font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            Download Spec Sheet
                        </Link>
                    </div>
                </div>

                {/* Background Decorative Element */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                    <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-encora-mint/20 rounded-full blur-[120px]" />
                    <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] bg-encora-green/10 rounded-full blur-[100px]" />
                </div>
            </section>

            {/* Narrative Section with Comparison */}
            <section className="py-20 bg-white dark:bg-black/20">
                <div className="container-encora px-4 sm:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-encora-green dark:text-white">
                                More than just a drop-off point.
                            </h2>
                            <div className="prose dark:prose-invert text-lg text-encora-text/80 dark:text-gray-300 space-y-4">
                                <p>
                                    Traditional return lockers are passive, limited, and often disconnected from the broader supply chain. They simply store items until someone manually retrieves them.
                                </p>
                                <p>
                                    The <strong>Encora Smart Return Bin</strong> is an active participant in your reverse logistics network. It doesn't just hold items; it initiates the verification and sorting process the moment a return is made.
                                </p>
                                <p>
                                    By instantly reading encoded tags and communicating with our Verification Cloud, the Smart Bin ensures that every return is legitimate, tracked, and ready for its next life—whether that's resale, recycling, or restocking.
                                </p>
                            </div>
                        </div>
                        {/* Retaining a place for an image if needed, or using a visual representation of "Smart vs Traditional" */}
                        <div className="bg-gray-50 dark:bg-white/5 rounded-3xl p-8 border border-gray-100 dark:border-white/10">
                            <h3 className="text-2xl font-semibold mb-6 text-center text-encora-green dark:text-white">Why it's smarter</h3>
                            <ul className="space-y-4">
                                {[
                                    { title: "Real-time Verification", desc: "Instantly validates returned items against database records." },
                                    { title: "Contactless Drop-off", desc: "Seamless experience for customers, no staff intervention needed." },
                                    { title: "Secure Storage", desc: "Anti-theft design ensures items are safe until collection." },
                                    { title: "Data-Driven Insights", desc: "Captures granular data on return volume, timing, and item condition." }
                                ].map((feature, i) => (
                                    <li key={i} className="flex gap-4 items-start">
                                        <div className="mt-1 bg-encora-mint/20 p-2 rounded-full text-encora-green dark:text-encora-mint">
                                            <VerifyIcon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-encora-text dark:text-white">{feature.title}</h4>
                                            <p className="text-sm text-encora-text/70 dark:text-gray-400">{feature.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Differentiators / Features Grid */}
            <section className="py-20 bg-gray-50 dark:bg-white/5">
                <div className="container-encora px-4 sm:px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-encora-green dark:text-white">Key Capabilities</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <BinIcon className="w-10 h-10" />, title: "High Capacity", desc: "Optimized spatial design to maximize storage within a compact footprint." },
                            { icon: <TagsIcon className="w-10 h-10" />, title: "Tag Agnostic", desc: "Compatible with various RFID and NFC standards for broad integration." },
                            { icon: <ConnectIcon className="w-10 h-10" />, title: "Always Connected", desc: "IoT-enabled for continuous status monitoring and alerts." },
                            { icon: <VerifyIcon className="w-10 h-10" />, title: "Instant Feedback", desc: "Provides immediate confirmation to users via integrated display." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white dark:bg-encora-green/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-white/5">
                                <div className="mb-4 text-encora-green dark:text-encora-mint flex justify-center">{item.icon}</div>
                                <h3 className="text-xl font-bold mb-2 text-encora-text dark:text-white">{item.title}</h3>
                                <p className="text-encora-text/70 dark:text-gray-300">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white dark:bg-transparent">
                <div className="container-encora px-4 sm:px-6">
                    <div className="bg-encora-green dark:bg-encora-green/40 rounded-3xl p-8 md:p-12 overflow-hidden relative text-center text-white">
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to upgrade your return infrastructure?</h2>
                            <p className="text-lg md:text-xl opacity-90 mb-8">
                                See the full technical specifications or talk to our team about a pilot program.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/resources/spec-sheet.pdf" target="_blank" className="bg-white text-encora-green px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                                    Download Spec Sheet
                                </Link>
                                <Link href="/contact-us" className="bg-transparent border-2 border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-xl font-bold transition-colors">
                                    Contact Us
                                </Link>
                            </div>
                        </div>

                        {/* Abstract Shapes */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-encora-mint/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                    </div>
                </div>
            </section>
        </div>
    );
}
