"use client";

import { motion, useInView } from "framer-motion";
import { useRef , useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";
import { ChevronLeft,  ChevronRight } from "lucide-react";

/* ───────── ANIMATION SYSTEM ───────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
    >
      {children}
    </motion.div>
  );
}

/* ───────── DATA ───────── */
const stats = [
  { value: "12+", label: "Years Experience" },
  { value: "₹1000+ Cr", label: "Transactions" },
  { value: "A-Grade", label: "Developers" },
  { value: "HNI", label: "Clients" },
];

const services = [
  "Investment Strategy",
  "Deal Negotiation",
  "Transaction Management",
  "Financial Structuring",
  "Portfolio Planning",
  "Property Management",
];

const residences = [
  "Westin Residences",
  "Elie Saab Residences",
  "Tonino Lamborghini",
];

export default function Page() {

const [activeIndex, setActiveIndex] = useState<number>(0);

const videos: string[] = [
  "/videos/testimonials/video1.mp4",
  "/videos/testimonials/video2.mp4",
  "/videos/testimonials/video3.mp4",
  "/videos/testimonials/video4.mp4",
  "/videos/testimonials/video5.mp4",
  "/videos/testimonials/video6.mp4",
];

const next = () => {
  setActiveIndex((prev: number) => (prev + 1) % videos.length);
};

const prevSlide = () => {
  setActiveIndex((prev: number) => (prev - 1 + videos.length) % videos.length);
};
  return (
    <main style={{ background: "#0A0A0A", color: "#E8E2D9" }}>

      <Header />

  {/* ═════════ HERO ═════════ */}
<section
  style={{
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    padding: "100px 20px",
  }}
>
  <div className="w-full max-w-6xl mx-auto grid gap-8 md:gap-10 lg:gap-12 items-center md:grid-cols-[1fr_380px] lg:grid-cols-[1fr_420px]">

    {/* IMAGE (TOP ON MOBILE) */}
   <motion.div
  whileHover={{ scale: 1.02 }}
  style={{ transformOrigin: "left center" }}
  className="relative mx-auto md:ml-auto w-full max-w-[280px] md:max-w-[380px] aspect-[3/4] order-1 md:order-2 md:-ml-10 lg:-ml-16"
>
  <div className="absolute -inset-6 bg-[radial-gradient(circle,rgba(200,164,90,0.12),transparent)]" />

  <Image
    src="/images/shankar-kohli.JPG"
    alt="Shankar Kohli"
    fill
    sizes="(max-width: 768px) 280px, (max-width: 1200px) 380px, 380px"
    className="object-cover object-[50%_20%]"
    priority
  />
</motion.div>
    {/* TEXT */}
    <div className="max-w-lg mx-auto order-2 md:order-1 text-left">
      <Reveal>
        <p className="text-[#C8A45A] text-[10px] tracking-[0.3em] mb-4">
          FOUNDER OF MARK REAL ESSTATE
        </p>
      </Reveal>

      <Reveal>
        {/* MOBILE */}
        <h1 className="block md:hidden text-3xl font-serif mb-4">
          Shankar Kohli
        </h1>

        {/* DESKTOP */}
        <div className="hidden md:block">
          <h1 className="text-6xl font-serif italic leading-tight">
            Shankar
          </h1>
          <h1 className="text-6xl font-serif mb-5">
            Kohli
          </h1>
        </div>
      </Reveal>

      <Reveal>
        <div className="w-10 h-[1px] bg-[#C8A45A] mb-5" />
      </Reveal>

      <Reveal>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
          Helping Gurugram’s most discerning investors acquire ultra-luxury residences with precision, discretion, and unmatched access.
        </p>
      </Reveal>

      <Reveal>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
              },
            },
          }}
         className="flex gap-2 md:gap-3 justify-center md:justify-start"
        >

          {/* PRIMARY CTA */}
         <motion.button
  variants={{
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }}
  whileHover="hover"
  whileTap={{ scale: 0.97 }}
  onClick={() => {
    window.location.href =
      "mailto:info@markrealesstate.com?subject=Deep-Dive Consultation&body=Hello,%0D%0A%0D%0AI would like to book a deep-dive consultation.";
  }}
  className="relative flex-1 bg-[#C8A45A] text-black py-2 md:py-3 text-xs md:text-sm tracking-[0.08em] flex items-center justify-center gap-2 overflow-hidden group"
>
  <span className="absolute inset-0 bg-[#C8A45A]/20 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl" />

  <span className="relative z-10">Book Deep-Dive</span>

  <motion.span
    className="relative z-10"
    variants={{ hover: { x: 5 } }}
    transition={{ duration: 0.3 }}
  >
    →
  </motion.span>
</motion.button>

          {/* SECONDARY CTA */}
          <motion.button
  variants={{
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }}
  whileHover={{
    borderColor: "#C8A45A",
    color: "#fff",
    backgroundColor: "rgba(200,164,90,0.06)",
  }}
  whileTap={{ scale: 0.97 }}
  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
  onClick={() => {
    document
      .getElementById("deals")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="flex-1 border border-gray-700 text-[#C8A45A] py-2 md:py-3 text-xs md:text-sm tracking-[0.08em] flex items-center justify-center gap-2 cursor-pointer"
>
  <span>View Projects</span>
</motion.button>

        </motion.div>
      </Reveal>


<Reveal>
  <div className="mt-8 pt-6 border-t border-[#1a1a1a] flex flex-wrap md:flex-nowrap gap-y-4 md:gap-x-12 justify-center md:justify-start text-center md:text-left">

    {stats.map((s, i) => (
      <div key={i} className="flex flex-col items-center md:items-start flex-1 min-w-[45%] md:min-w-0">

        <span className="text-[#C8A45A]/90 text-sm md:text-base font-serif">
          {s.value}
        </span>

        <span className="text-[#555]/80 text-[9px] tracking-[0.12em] mt-1 uppercase whitespace-nowrap">
          {s.label}
        </span>

      </div>
    ))}

  </div>
</Reveal>
    </div>

  </div>
</section>
<section id="investors" data-section="investors" className="py-24 md:py-36 px-5 bg-[#0f0f0f]">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">

   <Reveal>
  <div className="relative w-full h-[340px] md:h-[480px] overflow-hidden group">

    <Image
      src="/images/luxury-investor.jpg"
      alt="Luxury Real Estate Advisory"
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
      className="object-cover scale-105 transition duration-700 ease-out group-hover:scale-110"
    />

    {/* DARK LUXURY OVERLAY */}
    <div className="absolute inset-0 bg-black/20 transition duration-700 group-hover:bg-black/30" />

    {/* GRADIENT */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

    {/* GOLD ACCENT */}
    <div className="absolute bottom-0 left-0 w-20 h-[2px] bg-[#C8A45A]" />

  </div>
</Reveal>

    {/* TEXT */}
    <div>

      <p className="text-[#C8A45A] text-[10px] tracking-[0.35em] mb-5">
        FOR SERIOUS INVESTORS
      </p>

      <Reveal>
        <h2 className="text-2xl md:text-4xl leading-snug mb-6">
          Designed for Investors Who Value
          <span className="block italic text-[#C8A45A] mt-2">
            Precision Over Hype
          </span>
        </h2>
      </Reveal>

      <Reveal>
        <div className="w-10 h-[1px] bg-[#C8A45A] mb-8" />
      </Reveal>

      <div className="space-y-5">

        {[
          "Deploying ₹5Cr+ into luxury real estate assets",
          "Seeking pre-launch or discreet off-market access",
          "NRI & HNI investors focused on strategic entry",
          "Prioritising long-term value over short-term noise",
        ].map((item, i) => (
          <Reveal key={i}>
            <div className="flex gap-4 items-start">
              <div className="w-3 h-[1px] bg-[#C8A45A] mt-3" />
              <p className="text-[#9a9a9a] text-sm leading-relaxed">
                {item}
              </p>
            </div>
          </Reveal>
        ))}

      </div>

    </div>

  </div>
</section>
{/* ═════════ FEATURED INTERVIEW (PREMIUM) ═════════ */}
<section className="relative py-16 md:py-24 px-5 overflow-hidden">

  {/* 🔥 ANIMATED GOLD GLOW (REFINED) */}
  <div className="absolute inset-0 -z-10 overflow-hidden">

    <motion.div
      animate={{ x: ["-20%", "20%", "-20%"], y: ["-10%", "10%", "-10%"] }}
      transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      className="absolute w-[600px] h-[600px] bg-[#C8A45A]/10 blur-[140px] rounded-full"
    />

    <motion.div
      animate={{ x: ["20%", "-20%", "20%"], y: ["10%", "-10%", "10%"] }}
      transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      className="absolute right-0 w-[400px] h-[400px] bg-[#C8A45A]/5 blur-[120px] rounded-full"
    />

  </div>

  <div className="max-w-6xl mx-auto">

    {/* CARD */}
    <div className="relative bg-[#0f0f0f]/90 backdrop-blur-sm border border-[#1a1a1a] rounded-sm p-6 md:p-10 grid md:grid-cols-2 gap-10 md:gap-14 items-center hover:border-[#C8A45A]/30 transition duration-500">

      {/* LEFT: VIDEO */}
      <Reveal>
        <div className="flex justify-center">
          <div className="relative w-full max-w-[420px] aspect-[4/5] bg-black overflow-hidden group">

            <video
              src="/videos/interview.mp4"
              controls
              className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
            />

            {/* OVERLAY FOR DEPTH */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

          </div>
        </div>
      </Reveal>

      {/* RIGHT: TEXT */}
      <div className="max-w-md">

        <Reveal>
          <p className="text-[#C8A45A] text-[10px] tracking-[0.35em] mb-5">
            FEATURED
          </p>
        </Reveal>

        <Reveal>
          <h2 className="text-xl md:text-2xl mb-5 text-[#E8E2D9] leading-snug">
            How High-Net-Worth Investors Secure
            <span className="block italic text-[#C8A45A] mt-1">
              Private Luxury Opportunities
            </span>
          </h2>
        </Reveal>

        <Reveal>
          <p className="text-[#8A8A8A] text-sm md:text-base leading-relaxed">
            A deep dive into Gurugram’s evolving luxury market — uncovering how
            off-market deals are accessed, timed, and structured for maximum value.
          </p>
        </Reveal>

        {/* GOLD DIVIDER */}
        <Reveal>
          <div className="w-10 h-[1px] bg-[#C8A45A] my-6" />
        </Reveal>

        <Reveal>
          <p className="text-[#C8A45A] text-[11px] tracking-[0.15em]">
            Exclusive insights • Market timing • Private inventory
          </p>
        </Reveal>

      </div>

    </div>

  </div>
</section>

{/* ═════════ AUTHORITY (WITH IMAGE) ═════════ */}
<section className="py-24 md:py-36 px-5">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">

    {/* IMAGE */}
    <div className="order-1 md:order-2">
      <Reveal>
  <div className="relative w-full h-[340px] md:h-[520px] overflow-hidden group">

    <Image
      src="/images/authority.jpg"
      alt="Luxury Real Estate Advisory"
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
      className="object-cover scale-105 transition duration-700 group-hover:scale-110"
    />

    {/* OVERLAY */}
    <div className="absolute inset-0 bg-black/50" />

    {/* GRADIENT */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

    {/* GOLD LINE */}
    <div className="absolute bottom-0 left-0 w-20 h-[2px] bg-[#C8A45A]" />

  </div>
</Reveal>
    </div>

    {/* TEXT */}
    <div className="max-w-xl order-2 md:order-1 mt-8 md:mt-0">

      <Reveal>
        <p className="text-[#C8A45A] text-[10px] tracking-[0.35em] mb-5">
          AUTHORITY
        </p>
      </Reveal>

      <Reveal>
        <h2 className="text-2xl md:text-4xl text-[#E8E2D9] leading-snug mb-6">
          Strategic Precision Behind
          <span className="block italic text-[#C8A45A] mt-1">
            Every Investment Decision
          </span>
        </h2>
      </Reveal>

      <Reveal>
        <p className="text-[#8A8A8A] text-sm md:text-base leading-relaxed max-w-lg">
          A decade of guiding high-net-worth investors in acquiring premium real estate assets across Gurugram - with a focus on timing, access, and long-term value creation.
        </p>
      </Reveal>

      <Reveal>
        <div className="w-10 h-[1px] bg-[#C8A45A] my-6" />
      </Reveal>

      <Reveal>
        <p className="text-[#C8A45A] text-[11px] tracking-[0.15em]">
          Off-market opportunities • Direct developer access • Discreet transactions
        </p>
      </Reveal>

    </div>

  </div>
</section>
  {/* ═════════ STRATEGIC DEALS (WITH IMAGES) ═════════ */}
<section id="deals" data-section="deals" className="py-24 md:py-36 px-5 bg-[#0f0f0f] relative overflow-hidden">

  {/* SUBTLE GOLD GLOW */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute w-[500px] h-[500px] bg-[#C8A45A]/10 blur-[140px] rounded-full left-[20%] top-[-100px]" />
  </div>

  <div className="max-w-6xl mx-auto">

    {/* LABEL */}
    <p className="text-[#C8A45A] text-[10px] tracking-[0.35em] mb-5">
      STRATEGIC DEALS
    </p>

    {/* HEADING */}
    <Reveal>
      <h2 className="text-2xl md:text-4xl text-[#E8E2D9] mb-16 max-w-2xl leading-snug">
        Real Investment Outcomes,
        <span className="block italic text-[#C8A45A] mt-1">
          Not Just Promises
        </span>
      </h2>
    </Reveal>

    {/* GRID */}
    <div className="grid md:grid-cols-3 gap-8">

      {[
        {
          title: "Westin Residences",
          result: "22% Appreciation",
          desc: "Entered at pre-launch stage with early allocation advantage.",
          img: "/images/westin.jpg",
        },
        {
          title: "Elie Saab Residences",
          result: "High Demand Entry",
          desc: "Secured limited inventory before official market release.",
          img: "/images/elie-saab.webp",
        },
        {
          title: "Lamborghini Residences",
          result: "Premium Positioning",
          desc: "Strategically acquired during early phase.",
          img: "/images/lamborghini.jpeg",
        },
      ].map((item, i) => (
        <Reveal key={i}>
          <div className="group relative bg-[#111] border border-[#1a1a1a] hover:border-[#C8A45A]/30 transition duration-500 overflow-hidden">

            {/* IMAGE */}
            <div className="relative h-[260px] md:h-[490px] overflow-hidden">
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover scale-105 transition duration-700 group-hover:scale-110"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition duration-500" />

              {/* GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>

            {/* CONTENT */}
            <div className="p-6 md:p-7">

              {/* STEP */}
              <span className="text-[#C8A45A]/40 text-xs mb-2 block">
                0{i + 1}
              </span>

              {/* TITLE */}
              <h3 className="text-[#E8E2D9] text-lg mb-1">
                {item.title}
              </h3>

              {/* RESULT */}
              <p className="text-[#C8A45A] text-sm mb-3 tracking-[0.12em]">
                {item.result}
              </p>

              {/* DESC */}
              <p className="text-[#8A8A8A] text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* GOLD LINE */}
              <div className="w-8 h-[1px] bg-[#C8A45A] mt-5 group-hover:w-12 transition-all duration-300" />

            </div>

          </div>
        </Reveal>
      ))}

    </div>

  </div>
</section>

{/* ═════════ RECOGNITION (AUTO SCROLL PREMIUM) ═════════ */}
<section className="py-20 md:py-28 px-5 bg-[#0f0f0f] overflow-hidden">
  <div className="max-w-6xl mx-auto text-center">

    {/* LABEL */}
    <p className="text-[#C8A45A] text-[10px] tracking-[0.35em] mb-6">
      RECOGNITION
    </p>

    {/* HEADING */}
    <h2 className="text-[#E8E2D9] text-xl md:text-2xl mb-4">
      Recognised Across Industry Platforms
    </h2>

    {/* SUBTEXT (optional but powerful) */}
    <p className="text-[#8A8A8A] text-xs md:text-sm mb-12">
      Featured across leading real estate platforms and industry awards
    </p>

    {/* SCROLL WRAPPER */}
    <div className="relative">

      {/* SCROLL TRACK */}
      <div className="flex gap-6 md:gap-10 w-full animate-scroll">

        {[
          "/images/awards/1.jpg",
          "/images/awards/2.jpg",
          "/images/awards/3.jpg",
          "/images/awards/4.jpg",
        ]
          .concat([
            "/images/awards/1.jpg",
            "/images/awards/2.jpg",
            "/images/awards/3.jpg",
            "/images/awards/4.jpg",
          ]) // duplicate for loop
          .map((img, i) => (
            <div
              key={i}
              className="relative min-w-[200px] md:min-w-[240px] h-[260px] md:h-[300px] overflow-hidden group rounded-sm"
            >

              {/* IMAGE */}
              <Image
                src={img}
                alt="Award Recognition"
                fill
                sizes="(max-width: 768px) 200px, (max-width: 1200px) 240px, 240px"
                className="object-cover transition duration-700 ease-out group-hover:scale-105"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition duration-500" />

              {/* GRADIENT DEPTH */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            </div>
          ))}

      </div>

      {/* LEFT FADE */}
      <div className="absolute left-0 top-0 h-full w-16 md:w-24 bg-gradient-to-r from-[#0f0f0f] to-transparent pointer-events-none" />

      {/* RIGHT FADE */}
      <div className="absolute right-0 top-0 h-full w-16 md:w-24 bg-gradient-to-l from-[#0f0f0f] to-transparent pointer-events-none" />

    </div>

  </div>
</section>
     {/* ═════════ STRATEGIC ADVISORY (PREMIUM) ═════════ */}
<section id="advisory" data-section="advisory" className="py-24 md:py-36 px-5 bg-[#0f0f0f]">
  <div className="max-w-6xl mx-auto">

    {/* LABEL */}
    <p className="text-[#C8A45A] text-[10px] tracking-[0.35em] mb-5">
      STRATEGIC ADVISORY
    </p>

    {/* HEADING */}
    <Reveal>
      <h2 className="text-2xl md:text-4xl text-[#E8E2D9] mb-16 max-w-2xl leading-snug">
        A Structured Approach to
        <span className="block italic text-[#C8A45A] mt-1">
          High-Value Real Estate Investing
        </span>
      </h2>
    </Reveal>

    {/* GRID */}
    <div className="grid md:grid-cols-3 gap-8">

      {[
        {
          step: "01",
          title: "Strategic Identification",
          desc: "Curating high-potential assets based on timing, demand cycles, and long-term appreciation.",
        },
        {
          step: "02",
          title: "Private Acquisition",
          desc: "Securing early access inventory through direct developer relationships and structured negotiation.",
        },
        {
          step: "03",
          title: "Value Optimisation",
          desc: "Positioning assets for maximum growth through timing, holding strategy, and exit planning.",
        },
      ].map((item, i) => (
        <Reveal key={i}>
          <div className="group relative p-8 bg-[#111] border border-[#1a1a1a] hover:border-[#C8A45A]/30 transition duration-500">

            {/* STEP */}
            <span className="text-[#C8A45A]/40 text-xs mb-3 block">
              {item.step}
            </span>

            {/* TITLE */}
            <h3 className="text-[#E8E2D9] text-lg mb-3">
              {item.title}
            </h3>

            {/* DESC */}
            <p className="text-[#8A8A8A] text-sm leading-relaxed">
              {item.desc}
            </p>

            {/* GOLD LINE */}
            <div className="w-8 h-[1px] bg-[#C8A45A] mt-6 group-hover:w-12 transition-all duration-300" />

          </div>
        </Reveal>
      ))}

    </div>

    {/* CTA */}
    <Reveal>
      <div className="mt-20 text-center">

        <p className="text-[#8A8A8A] text-sm mb-6">
          A discreet, end-to-end system designed for serious investors.
        </p>

       <a href="mailto:info@markrealesstate.com?subject=Private Consultation Request">
  <button className="bg-[#C8A45A] text-black px-8 py-3 text-sm tracking-[0.1em] hover:opacity-90 transition">
    Request Private Consultation
  </button>
</a>

      </div>
    </Reveal>

  </div>
</section>

 <section className="section-dark">
      <div className="section-inner text-center">

        {/* LABEL */}
        <p className="text-[#C8A45A] text-[10px] tracking-[0.35em] mb-4">
          TRUST & INSIGHTS
        </p>

        {/* HEADING */}
        <Reveal>
          <h2 className="text-2xl md:text-4xl mb-14 md:mb-16 max-w-3xl mx-auto leading-snug">
            Trusted by Investors, Backed by Leading Developers
          </h2>
        </Reveal>

        {/* LOGOS */}
        <Reveal>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 opacity-60 mb-16">
            {["DLF", "M3M", "Trump", "EMAAR", "Adani"].map((brand, i) => (
              <div
                key={i}
                className="text-sm tracking-widest text-[#aaa] hover:text-white transition duration-300"
              >
                {brand}
              </div>
            ))}
          </div>
        </Reveal>

        {/* 🎥 VIDEO CAROUSEL */}
        <Reveal>
          <div className="relative flex items-center justify-center">

            {/* GRADIENT EDGES */}
            <div className="absolute left-0 top-0 h-full w-24 md:w-32 bg-gradient-to-r from-[#0f0f0f] to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-24 md:w-32 bg-gradient-to-l from-[#0f0f0f] to-transparent z-20 pointer-events-none" />

            {/* LEFT BUTTON */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-0 z-30 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 p-3 rounded-full transition"
            >
              <ChevronLeft size={18} />
            </button>

            {/* RIGHT BUTTON */}
            <button
              onClick={next}
              className="absolute right-2 md:right-0 z-30 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 p-3 rounded-full transition"
            >
              <ChevronRight size={18} />
            </button>

            {/* SLIDER */}
            <div className="relative w-full max-w-5xl flex items-center justify-center h-[260px] md:h-[360px]">

              {videos.map((src, i) => {
                const isActive = i === activeIndex;
                const isLeft =
                  i === (activeIndex - 1 + videos.length) % videos.length;
                const isRight =
                  i === (activeIndex + 1) % videos.length;

                return (
                  <motion.div
                    key={i}
                    animate={{
                      scale: isActive ? 1 : 0.8,
                      opacity: isActive ? 1 : 0.25,
                      x: isActive ? 0 : isLeft ? -260 : isRight ? 260 : 0,
                      rotate: isActive ? 0 : isLeft ? -6 : isRight ? 6 : 0,
                      filter: isActive ? "blur(0px)" : "blur(3px)",
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute w-[300px] md:w-[440px] aspect-[4/3] bg-black overflow-hidden rounded-xl shadow-lg"
                    style={{
                      zIndex: isActive ? 10 : 1,
                    }}
                  >
                    <video
                      src={src}
                      controls={isActive}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                );
              })}

            </div>
          </div>
        </Reveal>
      </div>
    </section>
    
{/* ═════════ WHY CLIENTS CHOOSE US (HERO BG) ═════════ */}
<section
  className="relative py-24 md:py-36 px-5 overflow-hidden bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/luxury-bg.jpg')",
  }}
>

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/60" />

  {/* GRADIENT */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/80" />

  {/* CONTENT */}
  <div className="relative z-10 max-w-6xl mx-auto">

    {/* LABEL */}
    <p className="text-[#C8A45A] text-[10px] tracking-[0.35em] mb-5">
      DIFFERENTIATION
    </p>

    {/* HEADING */}
    <Reveal>
      <h2 className="text-2xl md:text-4xl text-[#E8E2D9] mb-16 max-w-2xl leading-snug">
        Why High-Net-Worth Investors
        <span className="block italic text-[#C8A45A] mt-1">
          Choose Strategic Advisory
        </span>
      </h2>
    </Reveal>

    {/* GLASS CARD */}
    <div className="bg-black/40 backdrop-blur-md border border-white/10 p-8 md:p-12">

      <div className="grid md:grid-cols-2 gap-10 md:gap-16">

        {[
          {
            title: "Off-Market Access",
            desc: "Opportunities not publicly listed, available only through direct relationships.",
          },
          {
            title: "Direct Developer Network",
            desc: "Strong connections ensuring priority allocation and early entry pricing.",
          },
          {
            title: "Negotiation Advantage",
            desc: "Structured deals designed to maximise value and minimise downside risk.",
          },
          {
            title: "Portfolio-First Approach",
            desc: "Focused on long-term asset growth, not just individual transactions.",
          },
        ].map((item, i) => (
          <Reveal key={i}>
            <div className="group">
              <h3 className="text-[#E8E2D9] text-lg mb-2">
                {item.title}
              </h3>

              <p className="text-[#B0B0B0] text-sm leading-relaxed max-w-md">
                {item.desc}
              </p>

              <div className="w-8 h-[1px] bg-[#C8A45A] mt-4 group-hover:w-12 transition-all duration-300" />
            </div>
          </Reveal>
        ))}

      </div>

    </div>

  </div>
</section>
     {/* ═════════ FINAL CTA (PREMIUM CLOSE) ═════════ */}
<section id="final-cta" data-section="final-cta" className="relative py-28 md:py-36 px-5 text-center overflow-hidden">

  {/* BACKGROUND */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/images/luxury-bg.jpg')" }}
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/70" />

  <div className="relative z-10 max-w-3xl mx-auto">

    {/* LABEL */}
    <p className="text-[#C8A45A] text-[10px] tracking-[0.35em] mb-6">
      PRIVATE ACCESS
    </p>

    {/* HEADING */}
    <Reveal>
      <h2 className="text-2xl md:text-4xl text-[#E8E2D9] mb-6 leading-snug">
        Access Opportunities
        <span className="block italic text-[#C8A45A] mt-2">
          Not Available Publicly
        </span>
      </h2>
    </Reveal>

    {/* SUBTEXT */}
    <Reveal>
      <p className="text-[#B0B0B0] text-sm md:text-base mb-10">
        A limited number of investors are onboarded each month for
        private consultation and access to off-market deals.
      </p>
    </Reveal>

    {/* CTA BUTTONS */}
    <Reveal>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">

        {/* PRIMARY */}
       <button
  onClick={() => {
    window.location.href =
      "mailto:info@markrealesstate.com?subject=Private Consultation Request";
  }}
  className="bg-[#C8A45A] text-black px-8 py-3 text-sm tracking-[0.1em] hover:opacity-90 transition"
>
  Request Private Consultation
</button>

        {/* SECONDARY */}
        <a href="#deals">
  <button className="border border-[#C8A45A] text-[#C8A45A] px-8 py-3 text-sm tracking-[0.1em] hover:bg-[#C8A45A]/10 transition">
    View Available Opportunities
  </button>
</a>

      </div>
    </Reveal>

    {/* TRUST LINE */}
    <p className="text-[#777] text-xs mt-6">
      Discreet • By Invitation • No Obligation
    </p>

  </div>
</section>

      <Footer />

    </main>
  );
}