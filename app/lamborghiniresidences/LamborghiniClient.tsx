"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Landmark,
  Building2,
  Waves,
  Dumbbell,
  Trees,
  ConciergeBell,
  Zap,
  Plane,
  School,
  ShoppingBag,
  Route,
} from "lucide-react";


const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
};
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

  heroVideo: {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 0,
  opacity: 1, // keeps your gradient aesthetic alive
},

heroOverlay: {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(160deg, rgba(10,10,10,0.85) 0%, rgba(26, 5, 5, 0.65) 50%, rgba(10,10,10,0.95) 100%)",
  zIndex: 1,
},


heroFlex: {
  position: "relative",
  zIndex: 3,
  display: "grid",
  gridTemplateColumns: "1.2fr 0.8fr",
  gap: "40px",
  alignItems: "center",
  width: "100%",
  maxWidth: "1200px",
  padding: "0 40px",
},

heroLeft: {
  textAlign: "left",
},

heroFormBox: {
  background: "rgba(10,10,10,0.7)",
  border: "1px solid rgba(180,0,0,0.25)",
  backdropFilter: "blur(12px)",
  padding: "32px",
  borderRadius: "6px",
},

heroFormInner: {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
},

heroFormTitle: {
  fontSize: "18px",
  color: "#f5f0e8",
  marginBottom: "8px",
  letterSpacing: "0.1em",
  fontFamily: "Montserrat, sans-serif",
},

heroInput: {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(180,0,0,0.2)",
  padding: "14px",
  color: "#fff",
  outline: "none",
},

heroSelect: {
  background: "#140303",
  border: "1px solid rgba(180,0,0,0.2)",
  padding: "14px",
  color: "#aaa",
},

heroSubmit: {
  background: "linear-gradient(135deg, #b40000, #7a0000)",
  border: "none",
  padding: "14px",
  color: "#fff",
  fontWeight: "600",
  cursor: "pointer",
  letterSpacing: "0.2em",
  marginTop: "8px",
},

heroFormNote: {
  fontSize: "11px",
  color: "#888",
  textAlign: "center",
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
    color: "#ededed",
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
  transition: "all 0.4s ease",
  position: "relative" as const,
  overflow: "hidden",
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "#fff",
},
aptOverlay: {
  position: "absolute" as const,
  inset: 0,
  background:
    "linear-gradient(to top, rgba(15,8,4,0.95), rgba(15,8,4,0.4))",
  zIndex: 1,
},
aptContent: {
  position: "relative" as const,
  zIndex: 2,
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

    // AMENITIES SECTION
amenitiesSection: {
  position: "relative",
  background: "#f8f6f2",
  padding: "120px 40px",
  overflow: "hidden",
},

amenitiesGrid: {
  maxWidth: "1200px",
  margin: "60px auto 0",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "28px",
},
amenityCard: {
  border: "1px solid rgba(255,255,255,0.35)",
  padding: "36px",
  background: "rgba(255, 255, 255, 0.33)", // 🔥 transparent glass
  backdropFilter: "blur(1px)",
  WebkitBackdropFilter: "blur(12px)",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  borderRadius: "12px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
  position: "relative",
  overflow: "hidden",
},
amenityIconWrap: {
  display: "flex",              // 🔥 use flex (not inline-flex)
  alignItems: "center",
  justifyContent: "center",
  width: "56px",
  height: "56px",
  borderRadius: "50%",
  background: "rgba(180,0,0,0.06)",
  margin: "0 auto 20px",        // 🔥 THIS centers the whole icon block
},
amenityTitle: {
  fontSize: "18px",
  fontWeight: 600,
  color: "#1a1a1a",
  marginBottom: "6px",
  letterSpacing: "0.04em",
},

amenityDesc: {
  fontSize: "13px",
  color: "#5a5a5a",
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
    color: "#C8A45A",
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
    color: "#ebdfdf",
    textTransform: "uppercase" as const,
    fontFamily: "'Montserrat', sans-serif",
    marginBottom: "24px",
  },

  // WHY INVEST
  reasonsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    marginTop: "60px",
    background: "rgba(180, 0, 0, 0)",
  },
  reasonCard: {
  background: "rgba(10,10,10,0.55)", // semi-transparent
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
  padding: "36px 32px",
  display: "flex",
  gap: "20px",
  alignItems: "flex-start",
  border: "1px solid rgba(180,0,0,0.15)",
  transition: "all 0.4s ease",
  
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
  {
    icon: <Landmark size={26} strokeWidth={1.5} color="#b40000" />,
    title: "Grand Lamborghini Lobby",
    desc: "An entrance that commands respect — soaring Italian marble, Tonino Lamborghini design.",
  },
  {
    icon: <Building2 size={26} strokeWidth={1.5} color="#b40000" />,
    title: "Ultra-Luxury Clubhouse",
    desc: "A members-only retreat with curated spaces for socialising, private events, and refined leisure.",
  },
  {
    icon: <Waves size={26} strokeWidth={1.5} color="#b40000" />,
    title: "Resort-Style Pool Deck",
    desc: "Infinity-edge pool with cabanas and skyline views.",
  },
  {
    icon: <Dumbbell size={26} strokeWidth={1.5} color="#b40000" />,
    title: "Performance Fitness Centre",
    desc: "World-class gym with training zones and wellness spaces.",
  },
  {
    icon: <Trees size={26} strokeWidth={1.5} color="#b40000" />,
    title: "Curated Landscaped Gardens",
    desc: "Green terraces with Italian-inspired outdoor design.",
  },
  {
    icon: <ConciergeBell size={26} strokeWidth={1.5} color="#b40000" />,
    title: "Concierge & Smart Services",
    desc: "24/7 concierge, smart home tech, and valet services.",
  },
];
const locationPoints = [
  {
    icon: <Zap size={18} strokeWidth={1.5} color="#b40000" />,
    text: "Golf Course Extension Road — 5 min",
  },
  {
    icon: <Plane size={18} strokeWidth={1.5} color="#b40000" />,
    text: "IGI Airport — 35 min via NH-48",
  },
  {
    icon: <Building2 size={18} strokeWidth={1.5} color="#b40000" />,
    text: "Cyber Hub / Cyber City — 20 min",
  },
  {
    icon: <School size={18} strokeWidth={1.5} color="#b40000" />,
    text: "Top Schools & Hospitals — 10 min",
  },
  {
    icon: <ShoppingBag size={18} strokeWidth={1.5} color="#b40000" />,
    text: "Premium Malls & Dining — 5 min",
  },
  {
    icon: <Route size={18} strokeWidth={1.5} color="#b40000" />,
    text: "Sohna Road & NH-48 — Direct Access",
  },
];

const reasons = [
  { title: "The Lamborghini Name", body: "Globally iconic brand driving long-term value." },
  { title: "SPR – Gurgaon's Gold Corridor", body: "High-growth corridor with strong appreciation potential." },
  { title: "Extraordinary Scarcity", body: "Limited inventory ensures rarity-driven demand." },
  { title: "Signature Global Track Record", body: "Trusted developer with consistent delivery history." },
  { title: "Curated Luxury Ecosystem", body: "Lifestyle-led amenities designed for elite living." },
  { title: "Long-Term Asset Growth", body: "Positioned for strong capital appreciation over time." },
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

        .amenity-hover {
  position: relative;
}

.amenity-hover::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    transparent 30%,
    rgba(255,255,255,0.4),
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
}

.amenity-hover:hover::before {
  opacity: 1;
}

.amenity-hover:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 25px 80px rgba(0,0,0,0.18);
  border-color: rgba(180,0,0,0.5);
}

.amenity-hover:hover svg {
  transform: scale(1.15);
  stroke: #7a0000;
  transition: all 0.3s ease;
}

/* ICON FLOAT (subtle luxury motion) */
@keyframes floatSoft {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
}

/* ICON GLOW BREATH */
@keyframes iconPulse {
  0%, 100% { opacity: 0.85; }
  50% { opacity: 1; }
}

/* APPLY TO ICONS */
.location-icon svg {
  animation: floatSoft 4s ease-in-out infinite,
             iconPulse 3.5s ease-in-out infinite;
  transition: all 0.3s ease;
}

/* STAGGER (IMPORTANT → organic feel) */
.locationItem:nth-child(1) svg { animation-delay: 0s; }
.locationItem:nth-child(2) svg { animation-delay: 0.4s; }
.locationItem:nth-child(3) svg { animation-delay: 0.8s; }
.locationItem:nth-child(4) svg { animation-delay: 1.2s; }
.locationItem:nth-child(5) svg { animation-delay: 1.6s; }
.locationItem:nth-child(6) svg { animation-delay: 2s; }

/* HOVER INTERACTION */
.locationItem:hover svg {
  animation: none;
  transform: scale(1.15);
  stroke: #7a0000;
}

/* ITEM HOVER */
.locationItem {
  transition: all 0.3s ease;
}

.locationItem:hover {
  background: rgba(180,0,0,0.08);
  transform: translateX(6px);
}

@keyframes mapPulseLuxury {
  0% {
    box-shadow: 0 0 0 0 rgba(180,0,0,0.5);
  }
  70% {
    box-shadow: 0 0 0 30px rgba(180,0,0,0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(180,0,0,0);
  }
}

input::placeholder {
  color: rgba(245,240,232,0.4);
}

input:focus {
  border-bottom: 1px solid #b40000;
  box-shadow: 0 8px 25px rgba(180,0,0,0.2);
}
      `}</style>

     {/* NAV */}
<nav
  style={{
    ...styles.nav,
    background: scrolled
      ? "rgba(10,10,10,0.98)"
      : "linear-gradient(180deg, rgba(10,10,10,0.95) 0%, transparent 100%)",
  }}
>
  {/* LOGO */}

<div
  style={{ cursor: "pointer" }}
  onClick={() =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
>
  <div style={styles.navLogo}>
    <Image
      src="/images/lambo/lamborghini-logo.png"
      alt="Lamborghini"
      width={160}
      height={40}
      style={{
        height: "30px",
        width: "auto",
      }}
      priority
    />
    <div style={styles.navLogoSub}>Residences · Gurugram</div>
  </div>
</div>
  {/* NAV LINKS */}
  <ul style={styles.navLinks} className="nav-links">
    {[
      { label: "Overview", id: "overview" },
      { label: "Apartments", id: "apartments" },
      { label: "Amenities", id: "amenities" },
      { label: "Location", id: "location" },
      { label: "Invest", id: "invest" },
    ].map((l) => (
      <li key={l.label}>
        <a
          href={`#${l.id}`}
          style={{
            ...styles.navLink,
            textDecoration: "none",
          }}
        >
          {l.label}
        </a>
      </li>
    ))}
  </ul>

  {/* CTA (CALL BUTTON) */}
  <a
    href="tel:+919811422554"
    style={{
      ...styles.navCta,
      textDecoration: "none",
      display: "inline-block",
    }}
    className="btn-hover"
  >
    +91 98114 22554
  </a>
</nav>
{/* HERO */}

<section
  style={{
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  }}
>
  {/* VIDEO */}
  <video
    autoPlay
    loop
    muted
    playsInline
    style={{
      position: "absolute",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: 0,
      filter: "brightness(0.7) contrast(1.1)",
    }}
  >
    <source src="/videos/lambo/lamborghini-hero.mp4" />
  </video>
<div
  style={{
    position: "absolute",
    inset: 0,
    background: `
  linear-gradient(110deg, rgba(0,0,0,0.6) 15%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.2)),
  radial-gradient(circle at 20% 40%, rgba(0,0,0,0.5), transparent 60%),
  radial-gradient(circle at 80% 20%, rgba(255,0,0,0.08), transparent 60%)
`,
    zIndex: 1,
  }}
/>

  {/* LIGHT SWEEP */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(120deg, transparent 40%, rgba(255,255,255,0.08), transparent 60%)",
      zIndex: 1,
      animation: "lightSweep 8s linear infinite",
    }}
  />

  {/* CONTENT */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    style={{
      position: "relative",
      zIndex: 2,
      width: "100%",
      maxWidth: "1200px",
      padding: "0 40px",
      display: "grid",
      gridTemplateColumns: "1fr 420px",
      gap: "60px",
      alignItems: "center",
    }}
  >
    {/* LEFT */}
<div style={{ maxWidth: "600px" }}>
  {/* EYEBROW */}
  <div
    style={{
      fontSize: "10px",
      letterSpacing: "0.5em",
      color: "#b40000",
      marginBottom: "22px",
      fontFamily: "'Montserrat', sans-serif",
      opacity: 0.9,
    }}
  >
    RERA APPROVED · NEW LAUNCH 2026
  </div>

  {/* TITLE */}
  <h1
    style={{
      fontSize: "clamp(60px, 7vw, 110px)",
      fontWeight: 300,
      lineHeight: 1.02,
      color: "#f5f0e8",
      letterSpacing: "-0.02em",
      marginBottom: "16px",
      textShadow: "0 8px 40px rgba(0,0,0,0.6)",
    }}
  >
    Lamborghini
    <br />
    <span
      style={{
        fontWeight: 700,
        color: "#b40000",
        fontStyle: "italic",
      }}
    >
      Residences
    </span>
  </h1>
<p
  style={{
    fontSize: "18px",
    color: "rgba(245,240,232,0.85)",
    textShadow: "0 10px 60px rgba(0,0,0,0.9)",
    marginBottom: "28px",
    fontWeight: 300,
    lineHeight: 1.6,
    maxWidth: "520px",
  }}
>
  India’s First Lamborghini Branded Residences in Gurgaon  
</p>
  {/* PREMIUM DIVIDER */}
  <div
    style={{
      width: "80px",
      height: "1px",
      background: "linear-gradient(90deg, #b40000, transparent)",
      margin: "26px 0",
    }}
  />

  {/* LOCATION */}
  <p
    style={{
      fontSize: "16px",
      color: "#a89880",
      letterSpacing: "0.25em",
      fontFamily: "'Montserrat', sans-serif",
      marginBottom: "36px",
    }}
  >
    SECTOR 71 · SOUTHERN PERIPHERAL ROAD · GURUGRAM
  </p>

  {/* FEATURES GRID */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "14px 40px",
      fontSize: "13px",
      fontFamily: "'Montserrat', sans-serif",
      color: "#a89880",
    }}
  >
    <div style={{ display: "flex", gap: "10px" }}>
      <span style={{ color: "#b40000" }}>01</span>
      <span>800 Ultra Luxury Residences</span>
    </div>

    <div style={{ display: "flex", gap: "10px" }}>
      <span style={{ color: "#b40000" }}>02</span>
      <span>Italian Design by Lamborghini</span>
    </div>

    <div style={{ display: "flex", gap: "10px" }}>
      <span style={{ color: "#b40000" }}>03</span>
      <span>Private Lift & Skyline Views</span>
    </div>

    <div style={{ display: "flex", gap: "10px" }}>
      <span style={{ color: "#b40000" }}>04</span>
      <span>Starting ₹5 Cr+</span>
    </div>
  </div>

  {/* BOTTOM LINE (SUBTLE LUXURY TOUCH) */}
  <div
    style={{
      marginTop: "40px",
      width: "120px",
      height: "1px",
      background: "rgba(180,0,0,0.2)",
    }}
  />
</div>
    {/* RIGHT FORM */}
    <FormComponent />
  </motion.div>

  {/* ANIMATIONS */}
  <style>{`
    @keyframes lightSweep {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }

    button:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(255,0,0,0.3);
    }

    @media(max-width:768px){
      section > div {
        grid-template-columns: 1fr !important;
      }
    }
  `}</style>

   <div style={styles.scrollIndicator} className="scroll-bounce">
          <span style={{ letterSpacing: "0.3em", fontSize: "9px", fontFamily: "Montserrat,sans-serif" }}>SCROLL</span>
          <svg width="14" height="20" viewBox="0 0 14 20" fill="none"><rect x="5.5" y="1" width="3" height="7" rx="1.5" fill="none" stroke="rgba(180,0,0,0.6)" strokeWidth="1.5"/><line x1="7" y1="12" x2="7" y2="19" stroke="rgba(180,0,0,0.6)" strokeWidth="1.5"/><polyline points="4,16 7,19 10,16" fill="none" stroke="rgba(180,0,0,0.6)" strokeWidth="1.5"/></svg>
        </div>
</section>


 <section id="overview"
  style={{
    padding: "120px 0",
    position: "relative",
  }}
>
  <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
    <Image
      src="/images/lambo/lambo.png"
      alt="Lamborghini Residences Exterior"
      width={1600}
      height={900}
      style={{
        width: "100%",
        height: "auto",
        objectFit: "cover",
      }}
    />
  </div>

  {/* TEXT OVERLAY */}
  <div
    style={{
      position: "absolute",
      bottom: "60px",
      left: "50%",
      transform: "translateX(-50%)",
      textAlign: "center",
      color: "#fff",
    }}
  >
    <div style={{ letterSpacing: "0.4em", fontSize: "10px", color: "#b40000" }}>
      ICONIC ARCHITECTURE
    </div>
    <h2 style={{ fontSize: "40px", fontWeight: 300 }}>
      Designed to be Seen.
    </h2>
  </div>
</section>
   {/* COLLAB */}
<div
  style={{
    ...styles.collabSection,
    position: "relative",
    overflow: "hidden",
  }}
>
  {/* SUBTLE RED GLOW */}
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "500px",
      height: "500px",
      background:
        "radial-gradient(circle, rgba(180,0,0,0.12), transparent 70%)",
      zIndex: 0,
    }}
  />

  <div
    style={{
      ...styles.collabInner,
      gridTemplateColumns: "1fr 120px 1fr",
      position: "relative",
      zIndex: 2,
      alignItems: "center",
    }}
    className="collab-inner"
  >
    {/* LEFT BRAND */}
    <div style={styles.collabBrand}>
      
      {/* LOGO */}
      <img
        src="/images/lambo/lamborghini-logo.png"
        alt="Tonino Lamborghini"
        style={{
          height: "42px",
          marginBottom: "18px",
          opacity: 0.95,
          filter: "drop-shadow(0 6px 25px rgba(180,0,0,0.3))",
        }}
      />

      <div style={{ ...styles.collabBrandName, color: "#c40000" }}>
        TONINO LAMBORGHINI
      </div>

      <div style={styles.collabBrandSub}>
        Italian Heritage · Global Luxury
      </div>

      {/* 🔥 SHORT POWER LINE */}
      <p
        style={{
          fontSize: "13px",
          marginTop: "14px",
          color: "#a89880",
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        Italian excellence redefining global luxury living.
      </p>
    </div>

    {/* CENTER SYMBOL */}
    <div
      style={{
        textAlign: "center",
        fontSize: "42px",
        color: "rgba(180,0,0,0.5)",
        fontWeight: 300,
      }}
    >
      ×
    </div>

    {/* RIGHT BRAND */}
    <div style={styles.collabBrand}>
      
      {/* LOGO */}
      <img
        src="/images/lambo/signature-logo.png"
        alt="Signature Global"
        style={{
          height: "50px",
          width: "auto",
          marginBottom: "18px",
          opacity: 0.95,
          filter: "drop-shadow(0 6px 20px rgba(0,0,0,0.3))",
        }}
      />

      <div style={{ ...styles.collabBrandName, color: "#f5f0e8" }}>
        SIGNATURE GLOBAL
      </div>

      <div style={styles.collabBrandSub}>
        India's Trusted Developer
      </div>

      {/* 🔥 SHORT POWER LINE */}
      <p
        style={{
          fontSize: "13px",
          marginTop: "14px",
          color: "#a89880",
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        Delivering landmark developments across Gurugram.
      </p>
    </div>
  </div>

  {/* BOTTOM LUXURY LINE */}
  <div
    style={{
      marginTop: "60px",
      width: "120px",
      height: "1px",
      background: "linear-gradient(90deg, #b40000, transparent)",
      marginLeft: "auto",
      marginRight: "auto",
    }}
  />
</div>
<section
  style={{
    position: "relative",
    height: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  }}
>
  {/* 🎥 VIDEO */}
  <video
    autoPlay
    loop
    muted
    playsInline
    style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: 0,
      filter: "brightness(0.45) contrast(1.1)",
    }}
  >
    <source src="/videos/lambo/invest-bg.mp4" />
  </video>

  {/* 🔥 DARK OVERLAY */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(180deg, rgba(0,0,0,0.85), rgba(0,0,0,0.6))",
      zIndex: 1,
    }}
  />

  {/* ✨ CONTENT */}
  <div
    style={{
      position: "relative",
      zIndex: 2,
      textAlign: "center",
      maxWidth: "800px",
      padding: "0 20px",
    }}
  >
    {/* SMALL TAG */}
    <div
      style={{
        fontSize: "10px",
        letterSpacing: "0.5em",
        color: "#b40000",
        marginBottom: "20px",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      GLOBAL LAUNCH
    </div>

    {/* MAIN FOMO LINE */}
    <h2
      style={{
        fontSize: "clamp(32px, 5vw, 56px)",
        fontWeight: 300,
        color: "#f5f0e8",
        lineHeight: 1.2,
        marginBottom: "20px",
      }}
    >
      Expected to Sell Out <br />
      <span style={{ color: "#b40000", fontStyle: "italic" }}>
        Within Days
      </span>
    </h2>

    {/* SUPPORT LINE */}
    <p
      style={{
        fontSize: "14px",
        color: "#c8b89a",
        fontFamily: "'Montserrat', sans-serif",
        lineHeight: 1.7,
      }}
    >
      From Miami to Dubai, Lamborghini-branded residences are claimed  
      within days of launch. Gurugram is next.
    </p>

    {/* OPTIONAL CTA */}
   <div style={{ marginTop: "30px" }}>
  <button
    onClick={() =>
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
      })
    }
    style={{
      background: "linear-gradient(135deg, #b40000, #7a0000)",
      border: "none",
      padding: "14px 36px",
      color: "#fff",
      fontSize: "11px",
      letterSpacing: "0.3em",
      cursor: "pointer",
    }}
    className="btn-hover"
  >
    Get Priority Access →
  </button>
</div>
  </div>
</section>


    {/* APARTMENTS */}
<section id="apartments" style={{ padding: "100px 40px" }}>
  <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
    
    <div style={styles.sectionLabel}>
      <span style={styles.sectionLabelLine} /> Residences
    </div>

    <h2 style={styles.sectionTitle}>
      Choose Your <span style={styles.sectionTitleAccent}>Canvas</span>
    </h2>

    <p style={styles.sectionBody}>
      Three configurations. One standard — absolute luxury. Each residence is a manifesto of space, light, and Italian-led design intent.
    </p>

    {/* GRID */}
    <div style={styles.aptsGrid} className="apts-grid">
      {[
        {
          type: "3 BHK",
          size: "2,000+",
          price: "Starting ₹5 Cr*",
          image: "/images/lambo/apartments/3bhk.png",
          features: [
            "Grand living & dining",
            "Premium Italian finishes",
            "Floor-to-ceiling windows",
            "Panoramic balcony",
          ],
        },
        {
          type: "4 BHK",
          size: "2,400+",
          price: "Starting ₹6 Cr*",
          image: "/images/lambo/apartments/4bhk.png",
          features: [
            "Expanded living spaces",
            "Private utility alcove",
            "Double master suite",
            "Smart home integration",
          ],
        },
        {
          type: "4 BHK + Utility",
          size: "2,800",
          price: "Starting ₹7 Cr*",
          image: "/images/lambo/apartments/4bhk-utility.png",
          features: [
            "Flagship configuration",
            "Dedicated staff quarters",
            "Extended wraparound balcony",
            "Private foyer entrance",
          ],
        },
      ].map((apt, i) => (
  <div key={`${apt.type}-${i}`}
          style={{
            ...styles.aptCard,
            backgroundImage: `url(${apt.image})`,
          }}
          className="apt-card-hover"
        >
          {/* OVERLAY */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(15,8,4,0.95), rgba(15,8,4,0.4))",
              zIndex: 1,
            }}
          />

          {/* CONTENT */}
          <div style={{ position: "relative", zIndex: 2 }}>
            
            <div style={styles.aptCardAccent} />

            <div style={styles.aptType}>{apt.type}</div>

            <div style={styles.aptSize}>
              {apt.size}
              <span style={styles.aptSizeUnit}>sq.ft.</span>
            </div>

            <div style={styles.aptPrice}>{apt.price}</div>

            {apt.features.map((f, i) => (
  <div key={`${f}-${i}`} style={styles.aptFeature}>
                <div style={styles.aptFeatureDot} /> {f}
              </div>
            ))}

            <button
             onClick={() =>
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
      })
    }
              style={{
                ...styles.btnSecondary,
                marginTop: "24px",
                width: "100%",
              }}
              className="btn-hover"
            >
              Enquire
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


    {/* AMENITIES */}
<div id="amenities" style={styles.amenitiesSection}>
  
  {/* BACKGROUND IMAGE */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      backgroundImage: "url('/images/lambo/amenities-bg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.5,
      zIndex: 0,
    }}
  />

  {/* LIGHT OVERLAY */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(to bottom, rgba(83, 80, 79, 0.51), rgba(19, 18, 18, 0.78))",
      zIndex: 1,
    }}
  />

  {/* CONTENT */}
  <div style={{ position: "relative", zIndex: 2 }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      
      {/* LABEL */}
      <div style={styles.sectionLabel}>
        <span style={styles.sectionLabelLine} /> Amenities
      </div>

      {/* TITLE */}
      <h2 style={{ ...styles.sectionTitle, color: "#1a1a1a" }}>
        Crafted for{" "}
        <span style={{ ...styles.sectionTitleAccent, color: "#b40000" }}>
          Extraordinary
        </span>{" "}
        Living
      </h2>

   {/* SUBTEXT (NEW — IMPORTANT) */}
    <p
  style={{
    maxWidth: "700px",
    margin: "0 0 50px 0", // remove auto centering
    fontSize: "14px",
    color: "#c1b8b8",
    lineHeight: 1.8,
    fontFamily: "'Montserrat', sans-serif",
    textAlign: "left",
  }}
>
Not just amenities - a private ecosystem designed to elevate everyday living into an experience of comfort, prestige, and effortless luxury.</p>
      {/* GRID */}
      <div style={styles.amenitiesGrid} className="amenities-grid">
        {amenities.map((a, i) => (
  <div key={`${a.title}-${i}`} style={styles.amenityCard}className="amenity-hover">
            
            {/* ICON WRAPPER */}
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "rgba(180,0,0,0.06)",
                marginBottom: "18px",
              }}
            >
              {a.icon}
            </span>

            {/* CONTENT */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={styles.amenityTitle}>{a.title}</div>
              <div style={styles.amenityDesc}>{a.desc}</div>
            </div>

          </div>
        ))}
      </div>
    </div>
  </div>
</div>

      {/* LOCATION */}
      <div id="location" style={{ background: "#0a0a0a", padding: "80px 40px" }}>
        <div style={{ ...styles.locationSection, maxWidth: "1200px", margin: "0 auto", gridTemplateColumns: "1fr 1fr" }} className="location-section">
          <div>
            <div style={styles.sectionLabel}><span style={styles.sectionLabelLine} /> Location</div>
            <h2 style={styles.sectionTitle}>Sector 71, <span style={styles.sectionTitleAccent}>SPR Gurgaon</span></h2>
            <p style={styles.sectionBody}>Positioned at the intersection of everything that matters in Gurugram - corporate corridors, lifestyle destinations, and seamless connectivity to NCR and beyond.</p>
            <ul style={styles.locationList}>
              {locationPoints.map((p, i) => (
  <li key={`${p.text}-${i}`} style={styles.locationItem}>
    <span className="location-icon">
  {p.icon}
</span>
    <span>{p.text}</span>
  </li>
))}
            </ul>
          </div>
          <div style={styles.locationMapBox}>
  
  {/* MAP IMAGE */}
  <img
    src="/images/lambo/location-map.png"
    alt="Location Map"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      position: "absolute",
      inset: 0,
      zIndex: 0,
    }}
  />

  {/* DARK OVERLAY (IMPORTANT) */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(to top, rgba(10,10,10,0.85), rgba(10,10,10,0.2))",
      zIndex: 1,
    }}
  />

  {/* LOCATION PIN */}
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 2,
    }}
  >
    <div className="map-pin" />
  </div>

  {/* LABEL */}
  <div style={styles.mapLabel}>
    SECTOR 71 · SOUTHERN PERIPHERAL ROAD · GURUGRAM
  </div>
</div>
        </div>
      </div>
<section id="invest"
  style={{
    position: "relative",
    padding: "110px 40px",
    overflow: "hidden",
  }}
>
  {/* 🎥 BACKGROUND VIDEO */}
  <video
    autoPlay
    loop
    muted
    playsInline
    style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: 0,
      filter: "brightness(0.5) contrast(1.1)", // 🔥 lighter
    }}
  >
    <source src="/videos/lambo/invest-bg.mp4" />
  </video>

  {/* 🔥 LIGHTER OVERLAY */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(180deg, rgba(10,10,10,0.65), rgba(15,4,4,0.75))",
      zIndex: 1,
    }}
  />

  {/* ✨ TOP FADE (NEW — DEPTH) */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "120px",
      background:
        "linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)",
      zIndex: 1,
    }}
  />

  {/* ✨ RED AMBIENT GLOW */}
  <div
    style={{
      position: "absolute",
      top: "30%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "600px",
      height: "600px",
      background:
        "radial-gradient(circle, rgba(180,0,0,0.12), transparent 70%)",
      zIndex: 1,
    }}
  />

  {/* 📦 CONTENT */}
  <div style={{ position: "relative", zIndex: 2 }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      
      {/* LABEL */}
      <div style={styles.sectionLabel}>
        <span style={styles.sectionLabelLine} /> Investment Case
      </div>

      {/* TITLE */}
      <h2 style={styles.sectionTitle}>
        Why <span style={styles.sectionTitleAccent}>Smart Capital</span> Is Moving Here
      </h2>

      {/* 🔥 COMPRESSED POWER COPY */}
      <p
        style={{
          maxWidth: "640px",
          marginBottom: "50px",
          color: "#e0d2b8", // 🔥 brighter text
          lineHeight: 1.7,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "14px",
        }}
      >
        The next global luxury drop has arrived in India.  
        Limited supply meets rising global demand in Gurugram.
      </p>

      {/* GRID */}
      <div
        style={{
          ...styles.reasonsGrid,
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "22px", // 🔥 more breathing
          background: "transparent",
        }}
        className="reasons-grid"
      >
        {reasons.map((r, i) => (
  <div
    key={`${r.title}-${i}`}
            style={{
              ...styles.reasonCard,
              background: "rgba(255,255,255,0.04)", // very light glass
backdropFilter: "blur(14px)",
WebkitBackdropFilter: "blur(14px)",
border: "1px solid rgba(255,255,255,0.08)",
boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
              borderRadius: "12px",
              transition: "all 0.4s ease",
            }}
            className="reasonCard"
          >
            <div style={styles.reasonNum}>0{i + 1}</div>

            <div>
              <div style={styles.reasonTitle}>{r.title}</div>

              <div
                style={{
                  ...styles.reasonBody,
                  color: "#a89880", // 🔥 improved readability
                }}
              >
                {r.body}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
      {/* FORM */}
      <div id="contact" style={styles.formSection}>
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
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
  
  <img
    src="/images/lambo/lamborghini-logo.png"
    alt="Lamborghini Residences"
    style={{
      height: "40px",
      width: "auto",
      opacity: 0.9,
      filter: "brightness(0.95)",
    }}
  />


</div>
              <div style={styles.footerBrandSub}>Sector 71, SPR · Gurugram</div>
              <p style={styles.footerBody}>An exclusive collaboration between Tonino Lamborghini and Signature Global - bringing the Italian spirit of boldness, precision, and prestige to the Gurgaon skyline.</p>
            </div>
            <div>
              <div style={styles.footerHeading}>Quick Links</div>
             <ul style={styles.footerLinks}>
  {[
    { label: "Overview", id: "overview" },
    { label: "Apartments", id: "apartments" },
    { label: "Amenities", id: "amenities" },
    { label: "Location", id: "location" },
    { label: "Investment Case", id: "invest" },
    { label: "Contact", id: "contact" },
  ].map((l) => (
    <li key={l.label}>
      <a
        href={`#${l.id}`}
        style={{
          ...styles.footerLink,
          textDecoration: "none",
          display: "inline-block",
        }}
      >
        {l.label}
      </a>
    </li>
  ))}
</ul>
            </div>
            <div>
              <div style={styles.footerHeading}>Contact</div>
              <ul style={styles.footerLinks}>
                <li style={{ ...styles.footerLink, color: "#b40000" }}>Mark Real Estate</li>
                <li style={styles.footerLink}>Shankar Kohli</li>
                <li style={styles.footerLink}>Founder & Director</li>
                <li style={{ ...styles.footerLink, marginTop: "12px" }}>📞 +91 98114 22554</li>
                <li style={styles.footerLink}>📧 info@markrealestate.com</li>
              </ul>
            </div>
          </div>
          <p style={styles.disclaimerText}>
            *Disclaimer: All information provided is for general informational purposes only and may be subject to change without notice. This project may not be RERA registered at present. Prices are indicative and subject to revision. Interested buyers are advised to independently verify all project details with the developer. Mark Real Estate shall not be liable for any decisions made based on this information.
          </p>
          <p style={styles.footerMarketer}>
Marketed by{" "}
<a
  href="/"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    ...styles.footerMarketerName,
    textDecoration: "none",
    borderBottom: "1px solid rgba(180,0,0,0.4)",
  }}
>
  Shankar Kohli
</a>{" "}
· Founder,{" "}
<a
  href="https://markrealesstate.com/"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    ...styles.footerMarketerName,
    textDecoration: "none",
    borderBottom: "1px solid rgba(180,0,0,0.4)",
  }}
>
  Mark Real Estate
</a>{" "}
· Gurgaon's Ultra-Luxury Real Estate Specialists          </p>
        </div>
      </footer>
    </div>
  );
}


function FormComponent() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    name: "",
    phone: "",
    city: "",
    budget: "",
    config: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    field: keyof typeof data
  ) => {
    setData({ ...data, [field]: e.target.value });
  };

  return (
    <div
      style={{
        position: "relative",
        padding: "42px 34px",
        border: "1px solid rgba(180,0,0,0.25)",
        background:
          "linear-gradient(180deg, rgba(34, 31, 31, 0.36), rgba(0, 0, 0, 0.58))",
        boxShadow: "0 30px 80px rgba(0,0,0,0.7)",
        backdropFilter: "blur(1px)",
        overflow: "hidden",
      }}
    >
      {/* 🔴 TOP GLOW LINE */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, #b40000, transparent)",
        }}
      />

      {/* STEP */}
      <div
        style={{
          fontSize: "10px",
          letterSpacing: "0.4em",
          color: "#b40000",
          marginBottom: "20px",
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        STEP {step} / 2
      </div>

      {/* PROGRESS BAR */}
      <div
        style={{
          height: "2px",
          background: "rgba(255,255,255,0.08)",
          marginBottom: "26px",
        }}
      >
        <div
          style={{
            width: step === 1 ? "50%" : "100%",
            height: "100%",
            background: "#b40000",
            transition: "0.4s ease",
          }}
        />
      </div>

      <AnimatePresence mode="wait">
        {/* STEP 1 */}
        {step === 1 && (
          <motion.div
            key="1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            <FormInput
              placeholder="Full Name"
              onChange={(e) => handleChange(e, "name")}
            />
            <FormInput
              placeholder="Phone Number"
              onChange={(e) => handleChange(e, "phone")}
            />
            <FormInput
              placeholder="City"
              onChange={(e) => handleChange(e, "city")}
            />

            <button style={styles.formSubmit} onClick={() => setStep(2)}>
              Continue →
            </button>
            
          </motion.div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <motion.div
            key="2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            <FormSelect onChange={(e) => handleChange(e, "budget")}>
              <option>Budget Range</option>
              <option>₹5–6 Cr</option>
              <option>₹6–8 Cr</option>
              <option>₹8 Cr+</option>
            </FormSelect>

            <FormSelect onChange={(e) => handleChange(e, "config")}>
              <option>Configuration</option>
              <option>3 BHK</option>
              <option>4 BHK</option>
            </FormSelect>

            <button
              style={styles.formSubmit}
              onClick={() => {
                console.log(data);
                alert("Lead Captured ✅");
              }}
            >
              Get Details
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TRUST LINE */}
      <div
        style={{
          marginTop: "24px",
          fontSize: "11px",
          color: "rgba(245,240,232,0.6)",
          textAlign: "center",
          letterSpacing: "0.2em",
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        RERA APPROVED · NO SPAM · INSTANT CALLBACK
      </div>
    </div>
  );
}

function FormInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      style={{
        width: "100%",
        marginBottom: "22px",
        padding: "14px 0",
        background: "transparent",
        border: "none",
        borderBottom: "1px solid rgba(180,0,0,0.5)" ,
        color: "#f5f0e8",
        fontSize: "14px",
        fontFamily: "'Montserrat', sans-serif",
        outline: "none",
        transition: "all 0.3s ease",
      }}
    />
  );
}

function FormSelect(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      style={{
        width: "100%",
        marginBottom: "22px",
        padding: "14px 0",
        background: "transparent",
        border: "none",
        borderBottom: "1px solid rgba(180,0,0,0.25)",
        color: "#f5f0e8",
        fontSize: "14px",
        fontFamily: "'Montserrat', sans-serif",
      }}
    />
  );
}

const btnPrimary = {
  width: "100%",
  padding: "16px",
  background: "linear-gradient(135deg, #b40000, #7a0000)",
  border: "none",
  color: "#fff",
  fontSize: "11px",
  letterSpacing: "0.3em",
  fontFamily: "'Montserrat', sans-serif",
  cursor: "pointer",
  marginTop: "10px",
  transition: "all 0.3s ease",
};

