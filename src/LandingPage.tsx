import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Utensils,
  MapPin,
  Package,
  Heart,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Smartphone,
} from "lucide-react";
import { FaFacebook, FaXTwitter, FaTiktok, FaInstagram } from "react-icons/fa6";
import { useLanguage } from "./LanguageContext";
import type { Lang } from "./translations";

const LOGO_URL = "/makletna-logo.png";

const ICON_MAP: Record<string, React.ReactNode> = {
  utensils: <Utensils size={22} />,
  "map-pin": <MapPin size={22} />,
  package: <Package size={22} />,
  heart: <Heart size={22} />,
};

function AppStoreBadge() {
  return (
    <a
      href="#register"
      aria-label="Download on the App Store"
      style={{ display: "inline-block", textDecoration: "none", flexShrink: 0 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 135 40"
        width="135"
        height="40"
        role="img"
        aria-label="Download on the App Store"
        style={{ direction: "ltr" } as React.CSSProperties}
      >
        <rect width="135" height="40" rx="7" fill="#1A1A1A" />
        <rect x="0.5" y="0.5" width="134" height="39" rx="6.5" fill="none" stroke="rgba(255,255,255,0.15)" />
        {/* Apple logo */}
        <path
          d="M19.5 10.1c-.8 1-2.1 1.8-3.4 1.6-.2-1.3.5-2.7 1.2-3.6.8-1 2.2-1.7 3.3-1.8.2 1.4-.4 2.8-1.1 3.8zm1.1 1.7c-1.9-.1-3.5 1.1-4.4 1.1-.9 0-2.3-1-3.8-1-2 0-3.8 1.1-4.8 2.9-2.1 3.6-.5 8.9 1.5 11.8 1 1.4 2.2 3 3.7 3 1.5-.1 2-.9 3.8-.9 1.8 0 2.3.9 3.8.9 1.6 0 2.6-1.4 3.6-2.8 1.1-1.6 1.6-3.2 1.6-3.3-.1 0-3-1.2-3-4.6 0-2.9 2.3-4.2 2.5-4.4-1.4-2-3.5-2.2-4.1-2.2l-.4.5z"
          fill="white"
        />
        {/* "Download on the" */}
        <text x="31" y="16" fontFamily="'Helvetica Neue',Helvetica,Arial,sans-serif" fontSize="8" fill="white" fontWeight="400" letterSpacing="0.3">
          Download on the
        </text>
        {/* "App Store" */}
        <text x="31" y="29" fontFamily="'Helvetica Neue',Helvetica,Arial,sans-serif" fontSize="14.5" fill="white" fontWeight="600" letterSpacing="-0.3">
          App Store
        </text>
      </svg>
    </a>
  );
}

function GooglePlayBadge() {
  return (
    <a
      href="#register"
      aria-label="Get it on Google Play"
      style={{ display: "inline-block", textDecoration: "none", flexShrink: 0 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 135 40"
        width="135"
        height="40"
        role="img"
        aria-label="Get it on Google Play"
        style={{ direction: "ltr" } as React.CSSProperties}
      >
        <rect width="135" height="40" rx="7" fill="#1A1A1A" />
        <rect x="0.5" y="0.5" width="134" height="39" rx="6.5" fill="none" stroke="rgba(255,255,255,0.15)" />
        {/* Google Play triangle (simplified colorful logo) */}
        <path d="M8.7 8.1c-.4.4-.6 1-.6 1.8v20.4c0 .8.2 1.4.6 1.8l.1.1 11.4-11.4v-.3L8.8 8z" fill="#00CFD5" />
        <path d="M23.9 24.3l-3.8-3.8v-.3l3.8-3.8.1.1 4.5 2.6c1.3.7 1.3 1.9 0 2.6l-4.5 2.6-.1.1z" fill="#FFBC00" />
        <path d="M24 24.2L20.1 20.3 8.7 31.7c.4.5 1.1.5 1.9.1L24 24.2z" fill="#F4433C" />
        <path d="M24 16.4L10.6 9.2c-.8-.5-1.5-.4-1.9.1L20.1 19.7 24 16.4z" fill="#00EE76" />
        {/* "GET IT ON" */}
        <text x="31" y="16" fontFamily="'Helvetica Neue',Helvetica,Arial,sans-serif" fontSize="8" fill="white" fontWeight="400" letterSpacing="0.5">
          GET IT ON
        </text>
        {/* "Google Play" */}
        <text x="31" y="29" fontFamily="'Helvetica Neue',Helvetica,Arial,sans-serif" fontSize="14.5" fill="white" fontWeight="600" letterSpacing="-0.3">
          Google Play
        </text>
      </svg>
    </a>
  );
}

function FadeIn({
  children,
  delay = 0,
  className = "",
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

function PhoneMockup() {
  return (
    <div className="phone-mockup">
      <div className="phone-notch" />
      <div className="phone-screen">
        {/* App top bar */}
        <div style={{
          background: "#D32F2F",
          padding: "28px 14px 12px",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}>
          <img src={LOGO_URL} alt="Makletna" style={{ height: 22, filter: "brightness(0) invert(1)" }} />
          <span style={{ color: "#fff", fontSize: 13, fontWeight: 800, letterSpacing: "-0.01em" }}>Makletna</span>
        </div>

        {/* Search bar */}
        <div style={{ padding: "10px 12px 6px" }}>
          <div style={{
            background: "#f2ede7",
            borderRadius: 10,
            padding: "7px 10px",
            fontSize: 11,
            color: "#9C7B6A",
            display: "flex",
            alignItems: "center",
            gap: 5,
          }}>
            <MapPin size={11} color="#D32F2F" />
            Chercher un repas...
          </div>
        </div>

        {/* Category pills */}
        <div style={{ padding: "4px 12px", display: "flex", gap: 5, overflowX: "hidden" }}>
          {["🍲 Couscous", "🥗 Salade", "🍖 Grillé"].map((c, i) => (
            <div key={i} style={{
              background: i === 0 ? "#D32F2F" : "#f2ede7",
              color: i === 0 ? "#fff" : "#5C4A3D",
              borderRadius: 20,
              padding: "4px 9px",
              fontSize: 9,
              fontWeight: 700,
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}>{c}</div>
          ))}
        </div>

        {/* Kitchen cards */}
        <div style={{ padding: "6px 12px", display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            { name: "Cuisine de Fatima", rating: "4.9", dish: "Couscous maison", price: "350 DA", color: "#f9f0e6" },
            { name: "Chez Ammi Hocine", rating: "4.8", dish: "Chakhchoukha", price: "280 DA", color: "#fde8e8" },
            { name: "Makla Taïb", rating: "4.7", dish: "Dolma & Bourek", price: "320 DA", color: "#e8f4f0" },
          ].map((k, i) => (
            <div key={i} style={{
              background: "#fff",
              borderRadius: 10,
              padding: 8,
              display: "flex",
              alignItems: "center",
              gap: 8,
              boxShadow: "0 1px 6px rgba(44,24,16,0.07)",
            }}>
              <div style={{
                width: 40,
                height: 40,
                borderRadius: 8,
                background: k.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                flexShrink: 0,
              }}>🍽️</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 10, fontWeight: 800, color: "#2C1810", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{k.name}</div>
                <div style={{ fontSize: 9, color: "#9C7B6A", marginTop: 1 }}>{k.dish}</div>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <div style={{ fontSize: 9, color: "#D32F2F", fontWeight: 800 }}>{k.price}</div>
                <div style={{ fontSize: 9, color: "#9C7B6A" }}>⭐ {k.rating}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const langs: { code: Lang; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "ar", label: "AR" },
    { code: "fr", label: "FR" },
  ];

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      padding: "14px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "rgba(250, 248, 244, 0.85)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(44, 24, 16, 0.07)",
    }}>
      <img src={LOGO_URL} alt="Makletna" style={{ height: 38, objectFit: "contain" }} />

      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{
          display: "flex",
          background: "rgba(44,24,16,0.05)",
          border: "1.5px solid rgba(44,24,16,0.09)",
          borderRadius: 10,
          padding: 3,
          gap: 2,
        }}>
          {langs.map(({ code, label }) => (
            <button
              key={code}
              onClick={() => setLang(code)}
              style={{
                padding: "5px 11px",
                borderRadius: 7,
                border: "none",
                fontSize: 12,
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "all 0.15s",
                background: lang === code ? "#D32F2F" : "transparent",
                color: lang === code ? "#fff" : "rgba(44,24,16,0.5)",
              }}
            >{label}</button>
          ))}
        </div>

        <a
          href="#register"
          className="btn-primary"
          style={{ padding: "8px 18px", fontSize: 13, borderRadius: 10, textDecoration: "none" }}
        >
          {t.nav.register}
        </a>
      </div>
    </nav>
  );
}

function HeroSection() {
  const { t, lang, isRtl } = useLanguage();
  return (
    <section style={{
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "120px 24px 80px",
      overflow: "hidden",
    }}>
      {/* Subtle background blobs */}
      <div className="blob-a" style={{
        position: "absolute", top: "5%", left: "-10%",
        width: 700, height: 700, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(211,47,47,0.07) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />
      <div className="blob-b" style={{
        position: "absolute", bottom: "0%", right: "-10%",
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,160,80,0.07) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: 1100,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 60,
        flexWrap: "wrap",
        position: "relative",
        zIndex: 1,
      }}>
        {/* Left: text */}
        <div style={{ flex: "1 1 400px", maxWidth: 580 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: 20 }}
          >
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(211,47,47,0.08)", border: "1px solid rgba(211,47,47,0.2)",
              color: "#D32F2F", borderRadius: 100, padding: "6px 16px",
              fontSize: 13, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase",
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: "50%", background: "#D32F2F",
                display: "inline-block",
              }} />
              {t.hero.badge}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Logo in hero for EN/FR, Arabic text for AR */}
            {lang === "ar" ? (
              <h1 style={{
                fontSize: "clamp(52px, 9vw, 88px)",
                fontWeight: 900, lineHeight: 1.02,
                letterSpacing: "-0.03em", marginBottom: 8,
                fontFamily: "'Playpen Sans Arabic', serif",
                color: "#2C1810",
              }}>
                ماكلتنا
              </h1>
            ) : (
              <div style={{ marginBottom: 8 }}>
                <img
                  src={LOGO_URL}
                  alt="Makletna"
                  style={{ height: "clamp(70px, 11vw, 110px)", objectFit: "contain", display: "block" }}
                />
              </div>
            )}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontSize: "clamp(17px, 2.8vw, 24px)",
              fontWeight: 700, color: "#5C4A3D",
              marginBottom: 16, lineHeight: 1.4,
            }}
          >
            {t.hero.tagline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              fontSize: "clamp(14px, 1.7vw, 16px)",
              color: "#7A5C50", lineHeight: 1.75,
              marginBottom: 32, maxWidth: 500,
            }}
          >
            {t.hero.description}
          </motion.p>

          {/* App store badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28, flexWrap: "wrap" }}
          >
            <AppStoreBadge />
            <GooglePlayBadge />
            <div style={{
              display: "flex", alignItems: "center", gap: 6,
              color: "#9C7B6A", fontSize: 12, fontWeight: 600,
            }}>
              <Smartphone size={14} color="#D32F2F" />
              {t.hero.appTagline ?? "Available soon"}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.44 }}
            style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
          >
            <a href="#register" className="btn-primary" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
              {t.hero.cta}
              {isRtl ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
            </a>
            <a href="#features" className="btn-outline" style={{ textDecoration: "none" }}>
              {t.hero.secondary}
            </a>
          </motion.div>
        </div>

        {/* Right: Phone mockup */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            flex: "0 0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ position: "relative" }}>
            <PhoneMockup />
            {/* Floating order badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: 80,
                right: -50,
                background: "#fff",
                borderRadius: 14,
                padding: "10px 14px",
                boxShadow: "0 8px 30px rgba(44,24,16,0.14)",
                border: "1px solid rgba(44,24,16,0.06)",
                minWidth: 130,
              }}
            >
              <div style={{ fontSize: 10, color: "#9C7B6A", fontWeight: 600 }}>🎉 Nouvelle commande</div>
              <div style={{ fontSize: 12, fontWeight: 800, color: "#2C1810", marginTop: 2 }}>Couscous Kabyle</div>
              <div style={{ fontSize: 10, color: "#D32F2F", fontWeight: 700 }}>450 DA • En route</div>
            </motion.div>
            {/* Floating rating badge */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              style={{
                position: "absolute",
                bottom: 90,
                left: -56,
                background: "#fff",
                borderRadius: 12,
                padding: "8px 12px",
                boxShadow: "0 8px 24px rgba(44,24,16,0.12)",
                border: "1px solid rgba(44,24,16,0.06)",
              }}
            >
              <div style={{ fontSize: 16 }}>⭐ 4.9</div>
              <div style={{ fontSize: 10, color: "#9C7B6A", fontWeight: 600, marginTop: 1 }}>Fatima • Top Chef</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const { t } = useLanguage();
  return (
    <section id="features" style={{
      padding: "100px 24px",
      background: "rgba(44,24,16,0.02)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="section-label">{t.features.sectionLabel}</span>
          <h2 style={{
            fontSize: "clamp(28px, 5vw, 46px)",
            fontWeight: 900, color: "#2C1810",
            marginTop: 16, letterSpacing: "-0.03em",
          }}>
            {t.features.title}
          </h2>
          <div className="section-divider" />
          <p style={{ fontSize: 16, color: "#7A5C50", marginTop: 14 }}>
            {t.features.subtitle}
          </p>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {t.features.items.map((item, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div
                className="glass"
                style={{
                  padding: 28, borderRadius: 20, height: "100%",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(211,47,47,0.12)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 24px rgba(44,24,16,0.06)";
                }}
              >
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: "rgba(211,47,47,0.08)",
                  border: "1px solid rgba(211,47,47,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#D32F2F", marginBottom: 20,
                }}>
                  {ICON_MAP[item.icon]}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: "#2C1810", marginBottom: 10 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 14, color: "#7A5C50", lineHeight: 1.65 }}>
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const { t, isRtl } = useLanguage();
  return (
    <section id="how-it-works" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="section-label">{t.howItWorks.sectionLabel}</span>
          <h2 style={{
            fontSize: "clamp(28px, 5vw, 46px)",
            fontWeight: 900, color: "#2C1810",
            marginTop: 16, letterSpacing: "-0.03em",
          }}>
            {t.howItWorks.title}
          </h2>
          <div className="section-divider" />
          <p style={{ fontSize: 16, color: "#7A5C50", marginTop: 14 }}>
            {t.howItWorks.subtitle}
          </p>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
          {[
            { data: t.howItWorks.customers, accent: "#D32F2F" },
            { data: t.howItWorks.providers, accent: "#C0472A" },
          ].map(({ data, accent }, gi) => (
            <FadeIn key={gi} delay={gi * 0.15}>
              <div className="glass" style={{ borderRadius: 24, padding: 32, height: "100%" }}>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: `${accent}10`, border: `1px solid ${accent}25`,
                  borderRadius: 100, padding: "6px 14px", marginBottom: 28,
                }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: accent }}>{data.title}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                  {data.steps.map((step, si) => (
                    <div key={si} style={{
                      display: "flex", gap: 18, alignItems: "flex-start",
                      flexDirection: isRtl ? "row-reverse" : "row",
                    }}>
                      <div style={{ flexShrink: 0 }}>
                        <div className="step-number" style={{ color: `${accent}20` }}>{step.step}</div>
                      </div>
                      <div style={{ paddingTop: 6 }}>
                        <h4 style={{ fontSize: 15, fontWeight: 800, color: "#2C1810", marginBottom: 5 }}>
                          {step.title}
                        </h4>
                        <p style={{ fontSize: 13.5, color: "#7A5C50", lineHeight: 1.6 }}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProposeSection() {
  const { t } = useLanguage();
  return (
    <section style={{ padding: "100px 24px", background: "rgba(44,24,16,0.02)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <FadeIn>
          <div className="glass-strong" style={{ borderRadius: 28, padding: "52px 44px", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{
              position: "absolute", top: -80, left: "50%", transform: "translateX(-50%)",
              width: 400, height: 280, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(211,47,47,0.07) 0%, transparent 70%)",
              filter: "blur(40px)", pointerEvents: "none",
            }} />
            <span className="section-label">{t.propose.sectionLabel}</span>
            <h2 style={{
              fontSize: "clamp(26px, 4vw, 40px)",
              fontWeight: 900, color: "#2C1810",
              marginTop: 16, marginBottom: 18, letterSpacing: "-0.03em",
            }}>
              {t.propose.title}
            </h2>
            <p style={{
              fontSize: 16, color: "#7A5C50", lineHeight: 1.75,
              maxWidth: 580, margin: "0 auto 44px",
            }}>
              {t.propose.description}
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
              {t.propose.stats.map((stat, i) => (
                <div key={i} style={{
                  background: "#fff",
                  border: "1.5px solid rgba(44,24,16,0.08)",
                  borderRadius: 16, padding: "18px 28px",
                  minWidth: 130, textAlign: "center",
                  boxShadow: "0 2px 16px rgba(44,24,16,0.06)",
                }}>
                  <div style={{ fontSize: 28, fontWeight: 900, color: "#D32F2F", letterSpacing: "-0.03em", marginBottom: 4 }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: 12, color: "#7A5C50", fontWeight: 600 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

const WILAYAS = [
  { code: "01", en: "Adrar", ar: "أدرار" },
  { code: "02", en: "Chlef", ar: "الشلف" },
  { code: "03", en: "Laghouat", ar: "الأغواط" },
  { code: "04", en: "Oum El Bouaghi", ar: "أم البواقي" },
  { code: "05", en: "Batna", ar: "باتنة" },
  { code: "06", en: "Bejaia", ar: "بجاية" },
  { code: "07", en: "Biskra", ar: "بسكرة" },
  { code: "08", en: "Bechar", ar: "بشار" },
  { code: "09", en: "Blida", ar: "البليدة" },
  { code: "10", en: "Bouira", ar: "البويرة" },
  { code: "11", en: "Tamanrasset", ar: "تمنراست" },
  { code: "12", en: "Tebessa", ar: "تبسة" },
  { code: "13", en: "Tlemcen", ar: "تلمسان" },
  { code: "14", en: "Tiaret", ar: "تيارت" },
  { code: "15", en: "Tizi Ouzou", ar: "تيزي وزو" },
  { code: "16", en: "Alger", ar: "الجزائر" },
  { code: "17", en: "Djelfa", ar: "الجلفة" },
  { code: "18", en: "Jijel", ar: "جيجل" },
  { code: "19", en: "Setif", ar: "سطيف" },
  { code: "20", en: "Saida", ar: "سعيدة" },
  { code: "21", en: "Skikda", ar: "سكيكدة" },
  { code: "22", en: "Sidi Bel Abbes", ar: "سيدي بلعباس" },
  { code: "23", en: "Annaba", ar: "عنابة" },
  { code: "24", en: "Guelma", ar: "قالمة" },
  { code: "25", en: "Constantine", ar: "قسنطينة" },
  { code: "26", en: "Medea", ar: "المدية" },
  { code: "27", en: "Mostaganem", ar: "مستغانم" },
  { code: "28", en: "M'sila", ar: "المسيلة" },
  { code: "29", en: "Mascara", ar: "معسكر" },
  { code: "30", en: "Ouargla", ar: "ورقلة" },
  { code: "31", en: "Oran", ar: "وهران" },
  { code: "32", en: "El Bayadh", ar: "البيض" },
  { code: "33", en: "Illizi", ar: "إليزي" },
  { code: "34", en: "Bordj Bou Arreridj", ar: "برج بوعريريج" },
  { code: "35", en: "Boumerdes", ar: "بومرداس" },
  { code: "36", en: "El Tarf", ar: "الطارف" },
  { code: "37", en: "Tindouf", ar: "تندوف" },
  { code: "38", en: "Tissemsilt", ar: "تيسمسيلت" },
  { code: "39", en: "El Oued", ar: "الوادي" },
  { code: "40", en: "Khenchela", ar: "خنشلة" },
  { code: "41", en: "Souk Ahras", ar: "سوق أهراس" },
  { code: "42", en: "Tipaza", ar: "تيبازة" },
  { code: "43", en: "Mila", ar: "ميلة" },
  { code: "44", en: "Ain Defla", ar: "عين الدفلى" },
  { code: "45", en: "Naama", ar: "النعامة" },
  { code: "46", en: "Ain Temouchent", ar: "عين تموشنت" },
  { code: "47", en: "Ghardaia", ar: "غرداية" },
  { code: "48", en: "Relizane", ar: "غليزان" },
  { code: "49", en: "Timimoun", ar: "تيميمون" },
  { code: "50", en: "Bordj Badji Mokhtar", ar: "برج باجي مختار" },
  { code: "51", en: "Ouled Djellal", ar: "أولاد جلال" },
  { code: "52", en: "Beni Abbes", ar: "بني عباس" },
  { code: "53", en: "In Salah", ar: "عين صالح" },
  { code: "54", en: "In Guezzam", ar: "عين قزام" },
  { code: "55", en: "Touggourt", ar: "تقرت" },
  { code: "56", en: "Djanet", ar: "جانت" },
  { code: "57", en: "El M'Ghair", ar: "المغير" },
  { code: "58", en: "El Meniaa", ar: "المنيعة" },
  { code: "59", en: "Aflou", ar: "أفلو" },
  { code: "60", en: "Barika", ar: "بريكة" },
  { code: "61", en: "Ksar Chellala", ar: "قصر الشلالة" },
  { code: "62", en: "Messaad", ar: "مسعد" },
  { code: "63", en: "Ain Oussera", ar: "عين وسارة" },
  { code: "64", en: "Boussaada", ar: "بوسعادة" },
  { code: "65", en: "El Abiodh Sidi Cheikh", ar: "الأبيض سيدي الشيخ" },
  { code: "66", en: "El Kantara", ar: "القنطرة" },
  { code: "67", en: "Bir El Ater", ar: "بئر العاتر" },
  { code: "68", en: "Ksar El Boukhari", ar: "قصر البخاري" },
  { code: "69", en: "El Aricha", ar: "العريشة" },
];

function RegisterSection() {
  const { t, lang } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", role: "customer" as "customer" | "provider", phone: "", wilaya: "" });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const wilayaObj = WILAYAS.find((w) => w.code === form.wilaya);
      const wilayaLabel = wilayaObj ? `${wilayaObj.code} — ${wilayaObj.en}` : form.wilaya;

      const payload = new FormData();
      payload.append("name", form.name);
      payload.append("email", form.email);
      payload.append("role", form.role);
      payload.append("phone", form.phone);
      payload.append("wilaya", wilayaLabel);
      payload.append("_subject", `New Makletna Registration — ${form.name}`);
      payload.append("_captcha", "false");
      payload.append("_template", "table");

      const res = await fetch("https://formsubmit.co/ossama12batouche@gmail.com", {
        method: "POST",
        body: payload,
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setSuccess(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setError(msg || t.form.error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="register" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <FadeIn style={{ textAlign: "center", marginBottom: 40 }}>
          <span className="section-label">{t.form.sectionLabel}</span>
          <h2 style={{
            fontSize: "clamp(26px, 4vw, 40px)",
            fontWeight: 900, color: "#2C1810",
            marginTop: 16, letterSpacing: "-0.03em",
          }}>
            {t.form.title}
          </h2>
          <div className="section-divider" />
          <p style={{ fontSize: 15, color: "#7A5C50", marginTop: 14, lineHeight: 1.6 }}>
            {t.form.subtitle}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="glass-strong" style={{ borderRadius: 24, padding: 36 }}>
            {success ? (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{
                  width: 64, height: 64, borderRadius: "50%",
                  background: "rgba(46,125,50,0.08)", border: "1.5px solid rgba(46,125,50,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 20px", color: "#2E7D32",
                }}>
                  <CheckCircle2 size={30} />
                </div>
                <h3 style={{ fontSize: 21, fontWeight: 800, color: "#2C1810", marginBottom: 10 }}>
                  {t.form.success}
                </h3>
                <p style={{ fontSize: 14, color: "#7A5C50", lineHeight: 1.65 }}>
                  {t.form.successMessage}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <label style={{ fontSize: 13, color: "#5C4A3D", fontWeight: 700, display: "block", marginBottom: 6 }}>
                    {t.form.name}
                  </label>
                  <input
                    className="input-field" type="text"
                    placeholder={t.form.namePlaceholder}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label style={{ fontSize: 13, color: "#5C4A3D", fontWeight: 700, display: "block", marginBottom: 6 }}>
                    {t.form.email}
                  </label>
                  <input
                    className="input-field" type="email"
                    dir="ltr"
                    placeholder={t.form.emailPlaceholder}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label style={{ fontSize: 13, color: "#5C4A3D", fontWeight: 700, display: "block", marginBottom: 6 }}>
                    {t.form.role}
                  </label>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    {[
                      { value: "customer", label: t.form.roleCustomer },
                      { value: "provider", label: t.form.roleProvider },
                    ].map(({ value, label }) => (
                      <button
                        key={value} type="button"
                        onClick={() => setForm({ ...form, role: value as "customer" | "provider" })}
                        style={{
                          padding: "12px 8px", borderRadius: 10, fontFamily: "inherit",
                          border: `1.5px solid ${form.role === value ? "rgba(211,47,47,0.4)" : "rgba(44,24,16,0.1)"}`,
                          background: form.role === value ? "rgba(211,47,47,0.07)" : "#fff",
                          color: form.role === value ? "#D32F2F" : "#7A5C50",
                          fontSize: 13, fontWeight: 700, cursor: "pointer", transition: "all 0.15s",
                        }}
                      >{label}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: 13, color: "#5C4A3D", fontWeight: 700, display: "block", marginBottom: 6 }}>
                    {t.form.wilaya}
                  </label>
                  <select
                    className="input-field"
                    dir="ltr"
                    value={form.wilaya}
                    onChange={(e) => setForm({ ...form, wilaya: e.target.value })}
                    style={{ cursor: "pointer" }}
                  >
                    <option value="">{t.form.wilayaPlaceholder}</option>
                    {WILAYAS.map((w) => (
                      <option key={w.code} value={w.code}>
                        {w.code} — {lang === "ar" ? w.ar : w.en}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: 13, color: "#5C4A3D", fontWeight: 700, display: "block", marginBottom: 6 }}>
                    {t.form.phone}
                  </label>
                  <input
                    className="input-field" type="tel"
                    dir="ltr"
                    placeholder={t.form.phonePlaceholder}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                {error && (
                  <div style={{
                    background: "rgba(211,47,47,0.06)", border: "1px solid rgba(211,47,47,0.2)",
                    borderRadius: 10, padding: "10px 14px", fontSize: 13, color: "#D32F2F",
                  }}>
                    {error}
                  </div>
                )}
                <button type="submit" disabled={submitting} className="btn-primary" style={{ marginTop: 4 }}>
                  {submitting ? t.form.submitting : t.form.submit}
                </button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const socialLinks = [
    { icon: <FaInstagram size={18} />, href: "https://instagram.com/makletna", label: "Instagram" },
    { icon: <FaFacebook size={18} />, href: "https://facebook.com/makletna", label: "Facebook" },
    { icon: <FaXTwitter size={18} />, href: "https://x.com/makletna", label: "X (Twitter)" },
    { icon: <FaTiktok size={18} />, href: "https://tiktok.com/@makletna", label: "TikTok" },
  ];

  return (
    <footer style={{
      padding: "60px 24px 36px",
      borderTop: "1px solid rgba(44,24,16,0.08)",
      background: "rgba(44,24,16,0.02)",
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: 40, marginBottom: 44,
      }}>
        <div>
          <img src={LOGO_URL} alt="Makletna" style={{ height: 44, objectFit: "contain", marginBottom: 12 }} />
          <p style={{ fontSize: 14, color: "#7A5C50", lineHeight: 1.6 }}>{t.footer.tagline}</p>
        </div>

        <div>
          <h4 style={{ fontSize: 12, fontWeight: 800, color: "#5C4A3D", marginBottom: 14, textTransform: "uppercase", letterSpacing: "0.07em" }}>
            {t.footer.contact}
          </h4>
          <a href={`mailto:${t.footer.email}`} style={{ display: "flex", alignItems: "center", gap: 7, color: "#7A5C50", fontSize: 14, textDecoration: "none" }}>
            ✉️ {t.footer.email}
          </a>
        </div>

        <div>
          <h4 style={{ fontSize: 12, fontWeight: 800, color: "#5C4A3D", marginBottom: 14, textTransform: "uppercase", letterSpacing: "0.07em" }}>
            {t.footer.social}
          </h4>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {socialLinks.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  width: 38, height: 38, borderRadius: 10,
                  background: "#fff", border: "1.5px solid rgba(44,24,16,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#5C4A3D", textDecoration: "none",
                  transition: "background 0.15s, color 0.15s, border-color 0.15s",
                  boxShadow: "0 1px 6px rgba(44,24,16,0.06)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#D32F2F";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#D32F2F";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#fff";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#5C4A3D";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(44,24,16,0.1)";
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div style={{
        borderTop: "1px solid rgba(44,24,16,0.07)", paddingTop: 22,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: 10, maxWidth: 1100, margin: "0 auto",
      }}>
        <span style={{ fontSize: 13, color: "#9C7B6A" }}>© {year} Makletna. {t.footer.rights}</span>
        <span style={{ fontSize: 13, color: "#9C7B6A" }}>{t.footer.madeIn}</span>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#FAF8F4" }}>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ProposeSection />
        <RegisterSection />
      </main>
      <Footer />
    </div>
  );
}
