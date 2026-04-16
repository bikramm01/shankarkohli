import { useState, useEffect, useRef } from "react";

const styles: Record<string, React.CSSProperties> = {
  root: {
    fontFamily: "'Cormorant Garamond', 'Georgia', serif",
    background: "#0a0a0a",
    color: "#f0ece4",
    minHeight: "100vh",
    overflowX: "hidden",
    cursor: "default",
  },

  // HERO
  hero: {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    background: "linear-gradient(160deg, #0a0a0a 0%, #1a0505 50%, #0a0a0a 100%)",
  },
  heroGrid: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "linear-gradient(rgba(180,0,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(180,0,0,0.07) 1px, transparent 1px)",
    backgroundSize: "60px 60px",
    zIndex: 0,
  },
  heroGlow: {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "600px",
    height: "600px",
    background: "radial-gradient(circle, rgba(180,0,0,0.18) 0%, transparent 70%)",
    zIndex: 0,
    borderRadius: "50%",
  },
  heroContent: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    padding: "0 24px",
    maxWidth: "900px",
  },
  eyebrow: {
    letterSpacing: "0.4em",
    fontSize: "11px",
    color: "#b40000",
    textTransform: "uppercase" as const,
    marginBottom: "32px",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 500,
  },
  heroTitle: {
    fontSize: "clamp(42px, 8vw, 100px)",
    fontWeight: 300,
    lineHeight: 1,
    letterSpacing: "-0.02em",
    marginBottom: "8px",
    color: "#f5f0e8",
  },
  heroTitleBold: {
    fontWeight: 700,
    color: "#c40000",
    fontStyle: "italic",
  },
  heroSub: {
    fontSize: "clamp(16px, 2.5vw, 26px)",
    fontWeight: 300,
    letterSpacing: "0.15em",
    color: "#a89880",
    marginBottom: "48px",
    marginTop: "16px",
  },
  dividerLine: {
    width: "80px",
    height: "1px",
    background: "linear-gradient(90deg, transparent, #b40000, transparent)",
    margin: "0 auto 48px",
  },
  heroCta: {
    display: "inline-flex",
    gap: "16px",
    flexWrap: "wrap" as const,
    justifyContent: "center",
  },
  btnPrimary: {
    background: "linear-gradient(135deg, #b40000, #7a0000)",
    color: "#f5f0e8",
    border: "none",
    padding: "16px 40px",
    fontSize: "12px",
    letterSpacing: "0.3em",
    textTransform: "uppercase" as const,
    cursor: "pointer",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 600,
    clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
    transition: "all 0.3s ease",
  },
  btnSecondary: {
    background: "transparent",
    color: "#f5f0e8",
    border: "1px solid rgba(180,0,0,0.5)",
    padding: "16px 40px",
    fontSize: "12px",
    letterSpacing: "0.3em",
    textTransform: "uppercase" as const,
    cursor: "pointer",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 500,
    clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
    transition: "all 0.3s ease",
  },
  scrollIndicator: {
    position: "absolute",
    bottom: "40px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "8px",
    color: "rgba(180,0,0,0.6)",
    fontSize: "10px",
    letterSpacing: "0.3em",
    fontFamily: "'Montserrat', sans-serif",
    zIndex: 2,
  },

  // NAV
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    background: "linear-gradient(180deg, rgba(10,10,10,0.95) 0%, transparent 100%)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(180,0,0,0.1)",
  },
  navLogo: {
    display: "flex",
    flexDirection: "column" as const,
    lineHeight: 1,
  },
  navLogoMain: {
    fontSize: "20px",
    fontWeight: 700,
    letterSpacing: "0.1em",
    color: "#f5f0e8",
    fontFamily: "'Cormorant Garamond', serif",
  },
  navLogoSub: {
    fontSize: "9px",
    letterSpacing: "0.4em",
    color: "#b40000",
    textTransform: "uppercase" as const,
    fontFamily: "'Montserrat', sans-serif",
  },
  navLinks: {
    display: "flex",
    gap: "32px",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navLink: {
    fontSize: "10px",
    letterSpacing: "0.3em",
    textTransform: "uppercase" as const,
    color: "#a89880",
    cursor: "pointer",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 500,
    transition: "color 0.2s",
  },
  navCta: {
    background: "#b40000",
    color: "#fff",
    border: "none",
    padding: "10px 24px",
    fontSize: "10px",
    letterSpacing: "0.3em",
    textTransform: "uppercase" as const,
    cursor: "pointer",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 600,
  },

  // SECTION
  section: {
    padding: "100px 40px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  sectionLabel: {
    fontSize: "10px",
    letterSpacing: "0.5em",
    color: "#b40000",
    textTransform: "uppercase" as const,
    fontFamily: "'Montserrat', sans-serif",
    marginBottom: "16px",
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  sectionLabelLine: {
    width: "40px",
    height: "1px",
    background: "#b40000",
  },
  sectionTitle: {
    fontSize: "clamp(32px, 5vw, 60px)",
    fontWeight: 300,
    lineHeight: 1.1,
    marginBottom: "24px",
    color: "#f5f0e8",
  },
  sectionTitleAccent: {
    color: "#c40000",
    fontStyle: "italic",
    fontWeight: 700,
  },
  sectionBody: {
    fontSize: "17px",
    lineHeight: 1.8,
    color: "#a89880",
    maxWidth: "660px",
    fontWeight: 300,
  },

  // STATS BAR
  statsBar: {
    background: "linear-gradient(135deg, #1a0505 0%, #0f0f0f 100%)",
    borderTop: "1px solid rgba(180,0,0,0.2)",
    borderBottom: "1px solid rgba(180,0,0,0.2)",
    padding: "48px 40px",
  },
  statsGrid: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "1px",
    background: "rgba(180,0,0,0.15)",
  },
  statItem: {
    padding: "32px",
    textAlign: "center" as const,
    background: "#0a0a0a",
  },
  statNumber: {
    fontSize: "clamp(40px, 5vw, 64px)",
    fontWeight: 300,
    color: "#c40000",
    lineHeight: 1,
    marginBottom: "8px",
    fontStyle: "italic",
  },
  statLabel: {
    fontSize: "10px",
    letterSpacing: "0.3em",
    color: "#a89880",
    textTransform: "uppercase" as const,
    fontFamily: "'Montserrat', sans-serif",
  },

  // APARTMENTS
  aptsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "2px",
    marginTop: "60px",
    background: "rgba(180,0,0,0.1)",
  },
  aptCard: {
    background: "#0f0804",
    padding: "40px 32px",
    borderBottom: "2px solid transparent",
    transition: "all 0.3s ease",
    position: "relative" as const,
    overflow: "hidden",
  },
  aptCardAccent: {
    position: "absolute" as const,
    top: 0,
    left: 0,
    right: 0,
    height: "2px",
    background: "linear-gradient(90deg, #b40000, #ff2200)",
  },
  aptType: {
    fontSize: "11px",
    letterSpacing: "0.4em",
    color: "#b40000",
    textTransform: "uppercase" as const,
    fontFamily: "'Montserrat', sans-serif",
    marginBottom: "16px",
  },
  aptSize: {
    fontSize: "clamp(36px, 4vw, 56px)",
    fontWeight: 300,
    color: "#f5f0e8",
    lineHeight: 1,
    marginBottom: "4px",
  },
  aptSizeUnit: {
    fontSize: "16px",
    color: "#a89880",
    marginLeft: "4px",
  },
  aptPrice: {
    fontSize: "18px",
    color: "#c40000",
    fontWeight: 600,
    margin: "16px 0 20px",
    fontFamily: "'Montserrat', sans-serif",
  },
  aptFeature: {
    fontSize: "13px",
    color: "#a89880",
    padding: "6px 0",
    borderBottom: "1px solid rgba(180,0,0,0.1)",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  aptFeatureDot: {
    width: "4px",
    height: "4px",
    background: "#b40000",
    flexShrink: 0,
  },

  // AMENITIES
  amenitiesSection: {
    background: "linear-gradient(135deg, #0f0404 0%, #0a0a0a 100%)",
    padding: "100px 40px",
  },
  amenitiesGrid: {
    maxWidth: "1200px",
    margin: "60px auto 0",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "24px",
  },
  amenityCard: {
    border: "1px solid rgba(180,0,0,0.15)",
    padding: "32px",
    position: "relative" as const,
    background: "rgba(20,5,5,0.8)",
    transition: "border-color 0.3s",
  },
  amenityIcon: {
    fontSize: "32px",
    marginBottom: "16px",
    display: "block",
  },
  amenityTitle: {
    fontSize: "18px",
    fontWeight: 600,
    color: "#f5f0e8",
    marginBottom: "8px",
    letterSpacing: "0.05em",
  },
  amenityDesc: {
    fontSize: "13px",
    color: "#a89880",
    lineHeight: 1.7,
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 300,
  },

  // LOCATION
  locationSection: {
    padding: "100px 40px",
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "80px",
    alignItems: "center",
  },
  locationList: {
    listStyle: "none",
    margin: "32px 0 0",
    padding: 0,
    display: "flex",
    flexDirection: "column" as const,
    gap: "2px",
  },
  locationItem: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    padding: "14px 20px",
    background: "rgba(180,0,0,0.04)",
    borderLeft: "2px solid rgba(180,0,0,0.3)",
    fontSize: "14px",
    color: "#c8b89a",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 300,
  },
  locationMapBox: {
    background: "linear-gradient(135deg, #150505, #0f0f0f)",
    border: "1px solid rgba(180,0,0,0.2)",
    height: "420px",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    position: "relative" as const,
    overflow: "hidden",
  },
  mapPulse: {
    width: "12px",
    height: "12px",
    background: "#b40000",
    borderRadius: "50%",
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: "0 0 0 20px rgba(180,0,0,0.1), 0 0 0 40px rgba(180,0,0,0.05)",
  },
  mapLabel: {
    position: "absolute" as const,
    bottom: "32px",
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: "11px",
    letterSpacing: "0.3em",
    color: "#b40000",
    fontFamily: "'Montserrat', sans-serif",
    textTransform: "uppercase" as const,
    whiteSpace: "nowrap" as const,
  },

  // COLLAB
  collabSection: {
    background: "#0f0404",
    padding: "80px 40px",
    borderTop: "1px solid rgba(180,0,0,0.15)",
    borderBottom: "1px solid rgba(180,0,0,0.15)",
  },
  collabInner: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1px 1fr",
    gap: "64px",
    alignItems: "center",
  },
  collabDivider: {
    background: "linear-gradient(180deg, transparent, #b40000, transparent)",
    alignSelf: "stretch",
  },
  collabBrand: {
    textAlign: "center" as const,
  },
  collabBrandName: {
    fontSize: "clamp(24px, 4vw, 42px)",
    fontWeight: 700,
    fontStyle: "italic",
    letterSpacing: "0.05em",
  },
  collabBrandSub: {
    fontSize: "11px",
    letterSpacing: "0.4em",
    color: "#a89880",
    textTransform: "uppercase" as const,
    fontFamily: "'Montserrat', sans-serif",
    marginTop: "8px",
  },

  // FORM
  formSection: {
    background: "linear-gradient(180deg, #0a0a0a 0%, #1a0505 50%, #0a0a0a 100%)",
    padding: "100px 40px",
    position: "relative" as const,
    overflow: "hidden",
  },
  formGlow: {
    position: "absolute" as const,
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "800px",
    height: "400px",
    background: "radial-gradient(ellipse at bottom, rgba(180,0,0,0.15) 0%, transparent 70%)",
    zIndex: 0,
  },
  formInner: {
    maxWidth: "680px",
    margin: "0 auto",
    position: "relative" as const,
    zIndex: 1,
  },
  formTitle: {
    textAlign: "center" as const,
    fontSize: "clamp(32px, 5vw, 56px)",
    fontWeight: 300,
    marginBottom: "48px",
  },
  formGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    marginBottom: "16px",
  },
  formInput: {
    width: "100%",
    background: "rgba(180,0,0,0.05)",
    border: "1px solid rgba(180,0,0,0.2)",
    color: "#f5f0e8",
    padding: "16px 20px",
    fontSize: "14px",
    fontFamily: "'Montserrat', sans-serif",
    outline: "none",
    boxSizing: "border-box" as const,
    transition: "border-color 0.3s",
  },
  formSelect: {
    width: "100%",
    background: "#140303",
    border: "1px solid rgba(180,0,0,0.2)",
    color: "#a89880",
    padding: "16px 20px",
    fontSize: "14px",
    fontFamily: "'Montserrat', sans-serif",
    outline: "none",
    boxSizing: "border-box" as const,
    gridColumn: "1 / -1" as const,
  },
  formSubmit: {
    width: "100%",
    background: "linear-gradient(135deg, #b40000, #7a0000)",
    color: "#fff",
    border: "none",
    padding: "20px",
    fontSize: "12px",
    letterSpacing: "0.4em",
    textTransform: "uppercase" as const,
    cursor: "pointer",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 700,
    marginTop: "8px",
    transition: "opacity 0.3s",
    clipPath: "polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)",
  },
  formNote: {
    textAlign: "center" as const,
    fontSize: "11px",
    color: "rgba(168,152,128,0.6)",
    marginTop: "16px",
    fontFamily: "'Montserrat', sans-serif",
    letterSpacing: "0.1em",
  },

  // FOOTER
  footer: {
    background: "#050505",
    borderTop: "1px solid rgba(180,0,0,0.2)",
    padding: "60px 40px 32px",
  },
  footerInner: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  footerTop: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr",
    gap: "64px",
    marginBottom: "48px",
    paddingBottom: "48px",
    borderBottom: "1px solid rgba(180,0,0,0.1)",
  },
  footerBrand: {
    fontSize: "28px",
    fontWeight: 700,
    fontStyle: "italic",
    color: "#f5f0e8",
    marginBottom: "12px",
  },
  footerBrandSub: {
    fontSize: "10px",
    letterSpacing: "0.4em",
    color: "#b40000",
    textTransform: "uppercase" as const,
    fontFamily: "'Montserrat', sans-serif",
    marginBottom: "16px",
  },
  footerBody: {
    fontSize: "13px",
    color: "#7a6a5a",
    lineHeight: 1.7,
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 300,
  },
  footerHeading: {
    fontSize: "11px",
    letterSpacing: "0.3em",
    color: "#b40000",
    textTransform: "uppercase" as const,
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 600,
    marginBottom: "20px",
  },
  footerLinks: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column" as const,
    gap: "10px",
  },
  footerLink: {
    fontSize: "13px",
    color: "#7a6a5a",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 300,
    cursor: "pointer",
  },
  footerMarketer: {
    textAlign: "center" as const,
    fontSize: "12px",
    color: "#4a3a2a",
    fontFamily: "'Montserrat', sans-serif",
    letterSpacing: "0.2em",
    marginTop: "16px",
  },
  footerMarketerName: {
    color: "#b40000",
    fontWeight: 600,
  },

  // DISCLAIMER
  disclaimer: {
    background: "#030303",
    padding: "24px 40px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  disclaimerText: {
    fontSize: "10px",
    color: "#4a3a2a",
    fontFamily: "'Montserrat', sans-serif",
    lineHeight: 1.7,
    letterSpacing: "0.05em",
  },

  // TAG
  tag: {
    display: "inline-block",
    padding: "4px 12px",
    background: "rgba(180,0,0,0.15)",
    border: "1px solid rgba(180,0,0,0.3)",
    fontSize: "10px",
    letterSpacing: "0.3em",
    color: "#b40000",
    textTransform: "uppercase" as const,
    fontFamily: "'Montserrat', sans-serif",
    marginBottom: "24px",
  },

  // WHY INVEST
  reasonsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "2px",
    marginTop: "60px",
    background: "rgba(180,0,0,0.1)",
  },
  reasonCard: {
    background: "#0a0a0a",
    padding: "36px 32px",
    display: "flex",
    gap: "20px",
    alignItems: "flex-start",
  },
  reasonNum: {
    fontSize: "48px",
    fontWeight: 300,
    color: "rgba(180,0,0,0.2)",
    lineHeight: 1,
    fontStyle: "italic",
    flexShrink: 0,
    minWidth: "52px",
  },
  reasonTitle: {
    fontSize: "17px",
    fontWeight: 600,
    color: "#f5f0e8",
    marginBottom: "8px",
    letterSpacing: "0.03em",
  },
  reasonBody: {
    fontSize: "13px",
    color: "#7a6a5a",
    lineHeight: 1.7,
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 300,
  },

  // COLLAB X
  xSymbol: {
    fontSize: "40px",
    color: "rgba(180,0,0,0.4)",
    fontWeight: 300,
    textAlign: "center" as const,
  },
};

const amenities = [
  { icon: "🏛", title: "Grand Lamborghini Lobby", desc: "An entrance that commands respect — soaring ceilings, Italian marble, and bold design cues inspired by the Tonino Lamborghini aesthetic." },
  { icon: "♟", title: "Ultra-Luxury Clubhouse", desc: "A members-only retreat with curated spaces for socialising, private events, and refined leisure — crafted for those who expect the exceptional." },
  { icon: "🏊", title: "Resort-Style Pool Deck", desc: "An infinity-edge pool with cabanas and landscaped surrounds, designed for immersive relaxation with a panoramic Gurgaon skyline backdrop." },
  { icon: "💪", title: "Performance Fitness Centre", desc: "A world-class gym equipped with premium machines, personal training zones, and a dedicated yoga & meditation studio." },
  { icon: "🌿", title: "Curated Landscaped Gardens", desc: "Sprawling green terraces and sculpture gardens that bring Italian sensibilities to your outdoor sanctuary amidst the city." },
  { icon: "🎯", title: "Concierge & Smart Services", desc: "Round-the-clock dedicated concierge, smart home integration, and valet services ensure every need is anticipated before it arises." },
];

const locationPoints = [
  "⚡ Golf Course Extension Road — 5 min",
  "✈️ IGI Airport — 35 min via NH-48",
  "🏢 Cyber Hub / Cyber City — 20 min",
  "🏫 Top Schools & Hospitals — 10 min",
  "🛍 Premium Malls & Dining — 5 min",
  "🛣 Sohna Road & NH-48 — Direct Access",
];

const reasons = [
  { title: "The Lamborghini Name", body: "A globally iconic brand that commands instant prestige. Branded residences consistently outperform the market in value retention and appreciation." },
  { title: "SPR – Gurgaon's Gold Corridor", body: "Southern Peripheral Road is one of NCR's fastest-appreciating micro-markets, driven by infrastructure growth and premium corporate demand." },
  { title: "Extraordinary Scarcity", body: "Fewer than a handful of true Italian branded residences exist across India. Rarity is the foundation of enduring luxury value." },
  { title: "Signature Global's Track Record", body: "One of India's most trusted developers, with a consistent record of on-time delivery and transparent buyer relationships in Gurgaon." },
  { title: "Ultra-Luxury Amenity Ecosystem", body: "Every facility is curated, not just constructed — creating a daily lifestyle experience that is difficult to replicate anywhere in NCR." },
  { title: "Long-Term Asset Appreciation", body: "With India's luxury real estate market expanding rapidly, a globally branded address in Gurgaon represents a generational investment opportunity." },
];

export default function LamborghiniResidences() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", config: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Load fonts
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&family=Montserrat:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) setSubmitted(true);
  };

  return (
    <div style={styles.root}>
      {/* FONT STYLE */}
      <style>{`
        @keyframes pulse { 0%,100%{box-shadow:0 0 0 0 rgba(180,0,0,0.4),0 0 0 0 rgba(180,0,0,0.2)} 50%{box-shadow:0 0 0 24px rgba(180,0,0,0.1),0 0 0 48px rgba(180,0,0,0.05)}}
        @keyframes bounceY {0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(8px)}}
        @keyframes fadeIn {from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)}}
        .map-pulse { animation: pulse 2.5s ease-in-out infinite; }
        .scroll-bounce { animation: bounceY 1.8s ease-in-out infinite; }
        .hero-content-anim { animation: fadeIn 1s ease 0.2s both; }
        .btn-hover:hover { opacity: 0.85; transform: scale(1.02); }
        .apt-card-hover:hover { background: #180a0a !important; }
        .amenity-hover:hover { border-color: rgba(180,0,0,0.5) !important; }
        input::placeholder, textarea::placeholder { color: rgba(168,152,128,0.4); }
        input:focus, select:focus, textarea:focus { border-color: rgba(180,0,0,0.6) !important; }
        @media(max-width:768px){
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .apts-grid, .amenities-grid, .reasons-grid { grid-template-columns: 1fr !important; }
          .location-section { grid-template-columns: 1fr !important; }
          .collab-inner { grid-template-columns: 1fr !important; }
          .footer-top { grid-template-columns: 1fr !important; }
          .nav-links { display: none !important; }
          .form-grid { grid-template-columns: 1fr !important; }
          .collab-divider { display: none !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{ ...styles.nav, background: scrolled ? "rgba(10,10,10,0.98)" : "linear-gradient(180deg, rgba(10,10,10,0.95) 0%, transparent 100%)" }}>
        <div style={styles.navLogo}>
          <div style={styles.navLogoMain}>LAMBORGHINI</div>
          <div style={styles.navLogoSub}>Residences · Gurgaon</div>
        </div>
        <ul style={styles.navLinks} className="nav-links">
          {["Overview", "Apartments", "Amenities", "Location", "Invest"].map(l => (
            <li key={l} style={styles.navLink}>{l}</li>
          ))}
        </ul>
        <button style={styles.navCta} className="btn-hover">Enquire Now</button>
      </nav>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroGrid} />
        <div style={styles.heroGlow} />
        <div style={styles.heroContent} className="hero-content-anim">
          <div style={styles.tag}>RERA Approved · New Launch 2026</div>
          <div style={styles.eyebrow}>Tonino Lamborghini × Signature Global</div>
          <h1 style={styles.heroTitle}>
            The <span style={styles.heroTitleBold}>Lamborghini</span><br />Residences
          </h1>
          <p style={styles.heroSub}>Sector 71, Southern Peripheral Road · Gurugram</p>
          <div style={styles.dividerLine} />
          <p style={{ ...styles.sectionBody, textAlign: "center", margin: "0 auto 40px", fontSize: "16px" }}>
            Italy's most iconic design philosophy meets Gurgaon's most coveted address. 800 ultra-luxury residences across 5 towers — built for those who recognise no ceiling.
          </p>
          <div style={styles.heroCta}>
            <button style={styles.btnPrimary} className="btn-hover">Book a Site Visit</button>
            <button style={styles.btnSecondary} className="btn-hover">Download Brochure</button>
          </div>
        </div>
        <div style={styles.scrollIndicator} className="scroll-bounce">
          <span style={{ letterSpacing: "0.3em", fontSize: "9px", fontFamily: "Montserrat,sans-serif" }}>SCROLL</span>
          <svg width="14" height="20" viewBox="0 0 14 20" fill="none"><rect x="5.5" y="1" width="3" height="7" rx="1.5" fill="none" stroke="rgba(180,0,0,0.6)" strokeWidth="1.5"/><line x1="7" y1="12" x2="7" y2="19" stroke="rgba(180,0,0,0.6)" strokeWidth="1.5"/><polyline points="4,16 7,19 10,16" fill="none" stroke="rgba(180,0,0,0.6)" strokeWidth="1.5"/></svg>
        </div>
      </section>

      {/* STATS */}
      <div style={styles.statsBar}>
        <div style={{ ...styles.statsGrid, gridTemplateColumns: "repeat(4, 1fr)" }} className="stats-grid">
          {[
            { num: "12.5", label: "Acres of Development" },
            { num: "5", label: "Iconic Towers" },
            { num: "G+40", label: "Floors High" },
            { num: "800", label: "Exclusive Residences" },
          ].map(s => (
            <div key={s.label} style={styles.statItem}>
              <div style={styles.statNumber}>{s.num}</div>
              <div style={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* OVERVIEW */}
      <section style={styles.section}>
        <div style={styles.sectionLabel}><span style={styles.sectionLabelLine} /> The Project</div>
        <h2 style={styles.sectionTitle}>A Landmark <span style={styles.sectionTitleAccent}>Built Different</span></h2>
        <p style={styles.sectionBody}>
          Signature Global Lamborghini Residences is not a luxury project — it is a standard. Rising 40 floors above Sector 71 on Gurgaon's Southern Peripheral Road, the five towers draw their design DNA directly from Tonino Lamborghini: sharp silhouettes, bold geometric forms, Italian precision in every finish. This is what it means to live beyond expectation.
        </p>
      </section>

      {/* COLLAB */}
      <div style={styles.collabSection}>
        <div style={{ ...styles.collabInner, gridTemplateColumns: "1fr 1px 1fr" }} className="collab-inner">
          <div style={styles.collabBrand}>
            <div style={{ ...styles.collabBrandName, color: "#c40000" }}>TONINO LAMBORGHINI</div>
            <div style={styles.collabBrandSub}>Italian Heritage · Global Luxury</div>
            <p style={{ ...styles.sectionBody, fontSize: "13px", marginTop: "16px", textAlign: "center" }}>
              Founded on the spirit of Italian excellence — transforming iconic automotive prestige into a global luxury lifestyle brand, now present in real estate, fashion, and hospitality.
            </p>
          </div>
          <div style={styles.collabDivider} className="collab-divider" />
          <div style={styles.collabBrand}>
            <div style={{ ...styles.collabBrandName, color: "#f5f0e8" }}>SIGNATURE GLOBAL</div>
            <div style={styles.collabBrandSub}>India's Trusted Developer</div>
            <p style={{ ...styles.sectionBody, fontSize: "13px", marginTop: "16px", textAlign: "center" }}>
              One of India's leading real estate companies, renowned for delivering landmark projects in Gurugram with uncompromising quality, on-time execution, and buyer-first transparency.
            </p>
          </div>
        </div>
      </div>

      {/* APARTMENTS */}
      <section style={{ padding: "100px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={styles.sectionLabel}><span style={styles.sectionLabelLine} /> Residences</div>
          <h2 style={styles.sectionTitle}>Choose Your <span style={styles.sectionTitleAccent}>Canvas</span></h2>
          <p style={styles.sectionBody}>Three configurations. One standard — absolute luxury. Each residence is a manifesto of space, light, and Italian-led design intent.</p>

          <div style={{ ...styles.aptsGrid, gridTemplateColumns: "repeat(3, 1fr)" }} className="apts-grid">
            {[
              {
                type: "3 BHK", size: "2,000+", price: "Starting ₹5 Cr*",
                features: ["Grand living & dining", "Premium Italian finishes", "Floor-to-ceiling windows", "Panoramic balcony"],
              },
              {
                type: "4 BHK", size: "2,400+", price: "Starting ₹6 Cr*",
                features: ["Expanded living spaces", "Private utility alcove", "Double master suite", "Smart home integration"],
              },
              {
                type: "4 BHK + Utility", size: "2,800", price: "Starting ₹7 Cr*",
                features: ["Flagship configuration", "Dedicated staff quarters", "Extended wraparound balcony", "Private foyer entrance"],
              },
            ].map(apt => (
              <div key={apt.type} style={styles.aptCard} className="apt-card-hover">
                <div style={styles.aptCardAccent} />
                <div style={styles.aptType}>{apt.type}</div>
                <div style={styles.aptSize}>{apt.size}<span style={styles.aptSizeUnit}>sq.ft.</span></div>
                <div style={styles.aptPrice}>{apt.price}</div>
                {apt.features.map(f => (
                  <div key={f} style={styles.aptFeature}>
                    <div style={styles.aptFeatureDot} /> {f}
                  </div>
                ))}
                <button style={{ ...styles.btnSecondary, marginTop: "24px", display: "block", width: "100%", textAlign: "center" }} className="btn-hover">
                  Enquire
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <div style={styles.amenitiesSection}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={styles.sectionLabel}><span style={styles.sectionLabelLine} /> Amenities</div>
          <h2 style={styles.sectionTitle}>Crafted for <span style={styles.sectionTitleAccent}>Extraordinary</span> Living</h2>
          <div style={{ ...styles.amenitiesGrid, gridTemplateColumns: "repeat(3, 1fr)" }} className="amenities-grid">
            {amenities.map(a => (
              <div key={a.title} style={styles.amenityCard} className="amenity-hover">
                <span style={styles.amenityIcon}>{a.icon}</span>
                <div style={styles.amenityTitle}>{a.title}</div>
                <div style={styles.amenityDesc}>{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LOCATION */}
      <div style={{ background: "#0a0a0a", padding: "80px 40px" }}>
        <div style={{ ...styles.locationSection, maxWidth: "1200px", margin: "0 auto", gridTemplateColumns: "1fr 1fr" }} className="location-section">
          <div>
            <div style={styles.sectionLabel}><span style={styles.sectionLabelLine} /> Location</div>
            <h2 style={styles.sectionTitle}>Sector 71, <span style={styles.sectionTitleAccent}>SPR Gurgaon</span></h2>
            <p style={styles.sectionBody}>Positioned at the intersection of everything that matters in Gurugram — corporate corridors, lifestyle destinations, and seamless connectivity to NCR and beyond.</p>
            <ul style={styles.locationList}>
              {locationPoints.map(p => (
                <li key={p} style={styles.locationItem}>{p}</li>
              ))}
            </ul>
          </div>
          <div style={styles.locationMapBox}>
            <div style={{ ...styles.mapPulse }} className="map-pulse" />
            {/* decorative grid lines */}
            <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.15 }} viewBox="0 0 400 420">
              {[80, 160, 240, 320].map(x => <line key={x} x1={x} y1="0" x2={x} y2="420" stroke="#b40000" strokeWidth="0.5" />)}
              {[70, 140, 210, 280, 350].map(y => <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#b40000" strokeWidth="0.5" />)}
              <circle cx="200" cy="210" r="60" fill="none" stroke="#b40000" strokeWidth="0.8" />
              <circle cx="200" cy="210" r="110" fill="none" stroke="#b40000" strokeWidth="0.4" />
            </svg>
            <div style={styles.mapLabel}>SECTOR 71 · SOUTHERN PERIPHERAL ROAD · GURUGRAM</div>
          </div>
        </div>
      </div>

      {/* WHY INVEST */}
      <section style={{ ...styles.section, maxWidth: "100%", padding: "100px 40px", background: "linear-gradient(180deg, #0a0a0a, #0f0404 50%, #0a0a0a)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={styles.sectionLabel}><span style={styles.sectionLabelLine} /> Investment Case</div>
          <h2 style={styles.sectionTitle}>Why <span style={styles.sectionTitleAccent}>Smart Capital</span> Is Moving Here</h2>
          <div style={{ ...styles.reasonsGrid, gridTemplateColumns: "repeat(2, 1fr)" }} className="reasons-grid">
            {reasons.map((r, i) => (
              <div key={r.title} style={styles.reasonCard}>
                <div style={styles.reasonNum}>0{i + 1}</div>
                <div>
                  <div style={styles.reasonTitle}>{r.title}</div>
                  <div style={styles.reasonBody}>{r.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <div style={styles.formSection}>
        <div style={styles.formGlow} />
        <div style={styles.formInner}>
          <div style={{ ...styles.sectionLabel, justifyContent: "center" }}>
            <span style={styles.sectionLabelLine} /> Register Interest <span style={styles.sectionLabelLine} />
          </div>
          <h2 style={{ ...styles.formTitle }}>
            Claim Your <span style={styles.sectionTitleAccent}>Priority Access</span>
          </h2>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "48px 0" }}>
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>✓</div>
              <div style={{ fontSize: "22px", color: "#f5f0e8", marginBottom: "12px" }}>Thank you, {formData.name}.</div>
              <p style={{ color: "#a89880", fontFamily: "Montserrat,sans-serif", fontSize: "14px" }}>Our luxury sales team will contact you within 24 hours.</p>
            </div>
          ) : (
            <>
              <div style={{ ...styles.formGrid, gridTemplateColumns: "1fr 1fr" }} className="form-grid">
                <input style={styles.formInput} placeholder="Your Full Name *" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                <input style={styles.formInput} placeholder="Phone Number *" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                <input style={{ ...styles.formInput, gridColumn: "1 / -1" }} placeholder="Email Address" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                <select style={styles.formSelect} value={formData.config} onChange={e => setFormData({ ...formData, config: e.target.value })}>
                  <option value="">Select Configuration</option>
                  <option>3 BHK — 2,000+ sq.ft. (₹5 Cr+)</option>
                  <option>4 BHK — 2,400+ sq.ft. (₹6 Cr+)</option>
                  <option>4 BHK + Utility — 2,800 sq.ft. (₹7 Cr+)</option>
                </select>
                <textarea style={{ ...styles.formInput, gridColumn: "1 / -1", height: "100px", resize: "none" } as React.CSSProperties} placeholder="Any specific requirements..." value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} />
              </div>
              <button style={styles.formSubmit} className="btn-hover" onClick={handleSubmit}>
                Request Priority Callback
              </button>
              <p style={styles.formNote}>Your information is completely confidential. No spam, ever.</p>
            </>
          )}
        </div>
      </div>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <div style={{ ...styles.footerTop, gridTemplateColumns: "2fr 1fr 1fr" }} className="footer-top">
            <div>
              <div style={styles.footerBrand}>Lamborghini Residences</div>
              <div style={styles.footerBrandSub}>Sector 71, SPR · Gurugram</div>
              <p style={styles.footerBody}>An exclusive collaboration between Tonino Lamborghini and Signature Global — bringing the Italian spirit of boldness, precision, and prestige to the Gurgaon skyline.</p>
            </div>
            <div>
              <div style={styles.footerHeading}>Quick Links</div>
              <ul style={styles.footerLinks}>
                {["Overview", "Apartments", "Amenities", "Location", "Investment Case", "Contact"].map(l => (
                  <li key={l} style={styles.footerLink}>{l}</li>
                ))}
              </ul>
            </div>
            <div>
              <div style={styles.footerHeading}>Contact</div>
              <ul style={styles.footerLinks}>
                <li style={{ ...styles.footerLink, color: "#b40000" }}>Mark Real Estate</li>
                <li style={styles.footerLink}>Shankar Kohli</li>
                <li style={styles.footerLink}>Founder & Director</li>
                <li style={{ ...styles.footerLink, marginTop: "12px" }}>📞 +91 9911 370 700</li>
                <li style={styles.footerLink}>📧 info@markrealestate.in</li>
              </ul>
            </div>
          </div>
          <p style={styles.disclaimerText}>
            *Disclaimer: All information provided is for general informational purposes only and may be subject to change without notice. This project may not be RERA registered at present. Prices are indicative and subject to revision. Interested buyers are advised to independently verify all project details with the developer. Mark Real Estate shall not be liable for any decisions made based on this information.
          </p>
          <p style={styles.footerMarketer}>
            Marketed by <span style={styles.footerMarketerName}>Shankar Kohli</span> · Founder, <span style={styles.footerMarketerName}>Mark Real Estate</span> · Gurgaon's Ultra-Luxury Real Estate Specialists
          </p>
        </div>
      </footer>
    </div>
  );
}
