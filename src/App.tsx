import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Mail, ArrowRight, Play, Briefcase, GraduationCap, Award, Send } from 'lucide-react';
import './index.css';

// Lightweight Custom SVG Components
const Phone = ({ size = 20, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72|12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const Behance = ({ size = 20, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 8h-6v1h6V8z" />
    <path d="M9 12H5v3h4c1.1 0 2-.9 2-2s-.9-2-2-2z" />
    <path d="M8.5 6H5v3h3.5a1.5 1.5 0 1 0 0-3z" />
    <path d="M12 11.5c0 3-2.5 5.5-5.5 5.5H3V4h4c3 0 5 1.8 5 4.5 0 1.2-.5 2.3-1.5 3z" />
    <path d="M18.5 10c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5c1.2 0 2.2-.6 2.8-1.5l-2.2-.8c-.2.4-.6.7-1.1.7-.5 0-.9-.3-1.1-.7h5c0-2.6-1.6-4.7-3.6-4.7zm0 2c.5 0 .9.3 1 .7h-2.1c.1-.4.5-.7 1.1-.7z" />
  </svg>
);

const Linkedin = ({ size = 20, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const BEHANCE_PROJECTS = [
  {
    title: "TACTIX",
    category: "Board",
    url: "https://www.behance.net/gallery/229099573/TACTIX",
    desc: "Tactical board game concept featuring highly detailed interface mockups, movement grids, action triggers, and dynamic vector game panels.",
    icon: "🎯",
    color: "linear-gradient(135deg, #eedcff, #ffd6ee)"
  },
  {
    title: "Slot and Keno Game",
    category: "Slots",
    url: "https://www.behance.net/gallery/228837191/Slot-and-keno-game",
    desc: "Complete slot and keno casino application assets. Features polished theme wrappers, slot reels, card templates, and vibrant payout sheets.",
    icon: "🎰",
    color: "linear-gradient(135deg, #ffd6ee, #fef7ff)"
  },
  {
    title: "Card Shuffle",
    category: "Card",
    url: "https://www.behance.net/gallery/224591983/card-suffle",
    desc: "Animation blueprints and interface layouts centered around seamless deck shuffle behaviors, transitions, and clean tactile components.",
    icon: "🎴",
    color: "linear-gradient(135deg, #ffd6ee, #eedcff)"
  },
  {
    title: "Blast Bloom",
    category: "Casual",
    url: "https://www.behance.net/gallery/216701645/Blast-Bloom",
    desc: "Playful casual matching layout showcasing cute garden grid assets, particle burst designs, and friendly mobile dashboard frameworks.",
    icon: "🌸",
    color: "linear-gradient(135deg, #eedcff, #fef7ff)"
  },
  {
    title: "Tile Legend",
    category: "Casual",
    url: "https://www.behance.net/gallery/216571549/Tile-Legend",
    desc: "Polished matching game concept boasting gorgeous wooden textures, tile badges, progressive level map screens, and custom button states.",
    icon: "🧩",
    color: "linear-gradient(135deg, #ffd6ee, #eedcff)"
  },
  {
    title: "Marble Blast Icon",
    category: "Icon",
    url: "https://www.behance.net/gallery/216361407/Marble-Blast-Game-Icon",
    desc: "Exquisite 3D-styled vector game launcher icon featuring sharp refraction lenses, vibrant color palettes, and App Store standard presets.",
    icon: "🔮",
    color: "linear-gradient(135deg, #eedcff, #ffd6ee)"
  },
  {
    title: "Callbreak Card Game",
    category: "Card",
    url: "https://www.behance.net/gallery/187747323/Callbreak-Card-Game-Promo-Video",
    desc: "High-engagement advertising mockups, promotional video guidelines, and UI scoreboards for India's popular card game launcher.",
    icon: "🃏",
    color: "linear-gradient(135deg, #ffd6ee, #fef7ff)"
  },
  {
    title: "OKEY Game Icon",
    category: "Icon",
    url: "https://www.behance.net/gallery/187746895/OKEY-Game-Icon",
    desc: "Custom graphical launcher asset for Okey rummy tile game, utilizing clean shadows, metallic gradients, and high contrast highlights.",
    icon: "👑",
    color: "linear-gradient(135deg, #ffd6ee, #eedcff)"
  },
  {
    title: "Seep Card Game",
    category: "Card",
    url: "https://www.behance.net/gallery/187745997/Seep-card-game-promo-video",
    desc: "Promotional animation timelines, screen transitions, and detailed graphic asset pack configured for standard 2D casual gameplay loop.",
    icon: "♠️",
    color: "linear-gradient(135deg, #eedcff, #fef7ff)"
  },
  {
    title: "29 Card Game Icon",
    category: "Icon",
    url: "https://www.behance.net/gallery/187745483/29-Card-Game-Icon",
    desc: "Custom graphical launcher asset forrummy tile game, utilizing clean shadows, metallic gradients, and high contrast highlights.",
    icon: "👑",
    color: "linear-gradient(135deg, #ffd6ee, #eedcff)"
  },
  {
    title: "Cribbage Board Icon",
    category: "Icon",
    url: "https://www.behance.net/gallery/187744615/Cribbage-Board-Game-Icon",
    desc: "Launcher icon design combining physical wood textures with digital UI parameters to capture classic tabletop appeal.",
    icon: "🪵",
    color: "linear-gradient(135deg, #eedcff, #ffd6ee)"
  },
  {
    title: "Backgammon Game UI",
    category: "Board",
    url: "https://www.behance.net/gallery/183175163/Backgammon-game-screenshots",
    desc: "Exquisite board illustrations, layout overlays, chip token variations, and full gameplay screens designed for modern casual devices.",
    icon: "🎲",
    color: "linear-gradient(135deg, #ffd6ee, #fef7ff)"
  }
] as const;

// Reusable Scroll Animation Presets
const scrollFadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-120px" },
  transition: { duration: 0.65 }
};

function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'portfolio' | 'contact'>('home');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Slots & Casual' | 'Card & Board' | 'Game Icons'>('All');

  // Unified Page Switcher with smooth scroll to top
  const navigateToTab = (tab: 'home' | 'about' | 'portfolio' | 'contact') => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredProjects = BEHANCE_PROJECTS.filter(proj => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Slots & Casual') return proj.category === 'Slots' || proj.category === 'Casual';
    if (selectedCategory === 'Card & Board') return proj.category === 'Card' || proj.category === 'Board';
    if (selectedCategory === 'Game Icons') return proj.category === 'Icon';
    return true;
  });

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, background: 'rgba(254, 247, 255, 0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="nav-inner-container section-container" style={{ padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div 
            className="nav-brand display-font" 
            onClick={() => navigateToTab('home')} 
            style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-1)', cursor: 'pointer' }}
          >
            Pinal Ghodadara
          </div>
          <div className="nav-tabs" style={{ display: 'flex', gap: '8px', background: '#eedcff', padding: '4px', borderRadius: '9999px' }}>
            {(['home', 'about', 'portfolio', 'contact'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => navigateToTab(tab)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '9999px',
                  border: 'none',
                  background: activeTab === tab ? 'var(--accent-1)' : 'transparent',
                  color: activeTab === tab ? '#FFFFFF' : 'var(--accent-2)',
                  fontFamily: 'var(--font-main)',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  textTransform: 'capitalize',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {tab}
              </button>
            ))}
          </div>
          <button className="btn-primary nav-cta" onClick={() => navigateToTab('contact')} style={{ padding: '8px 20px', fontSize: '0.85rem' }}>
            Co-op Mode
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main style={{ flex: 1, paddingTop: '100px' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'home' && (
              <div className="section-container" style={{ paddingTop: '40px' }}>
                {/* Hero Header */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                  <span className="chip" style={{ marginBottom: '1.5rem' }}>
                    🚀 Live Game Pipeline Active
                  </span>
                  <h1 style={{ fontSize: '3.75rem', fontWeight: 900, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                    Pinal Ghodadara
                  </h1>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-1)', marginBottom: '1.5rem' }}>
                    Game Designer // 2D Game UI Artist & Animator
                  </h2>
                  <p style={{ maxWidth: '650px', margin: '0 auto 2.5rem auto', color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6' }}>
                    Knowledgeable and detail-oriented Game UI Artist accustomed to delivering high-quality assets within tight timelines. Expert in creating immersive visual experiences and unique game animations.
                  </p>
                  <div className="hero-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                    <button className="btn-primary" onClick={() => navigateToTab('contact')}>
                      Contact / Level Up <ArrowRight size={18} />
                    </button>
                    <button className="btn-outline" onClick={() => navigateToTab('portfolio')}>
                      View Selected Works
                    </button>
                  </div>
                </motion.div>

                {/* Program Icons Row */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', margin: '0 auto 5rem auto', flexWrap: 'wrap', maxWidth: '800px' }}
                >
                  {['Photoshop', 'Illustrator', 'GenAI Pipeline', 'After Effects'].map((tool) => (
                    <span key={tool} className="chip purple" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 24px', fontSize: '0.95rem' }}>
                      ● {tool}
                    </span>
                  ))}
                </motion.div>

                {/* System Specs Column split */}
                <motion.div 
                  {...scrollFadeUp}
                  className="grid md:grid-cols-2 gap-8" 
                  style={{ marginTop: '5rem' }}
                >
                  <div className="glass-panel" style={{ padding: '2.5rem' }}>
                    <span className="chip" style={{ marginBottom: '1.25rem' }}>Core Vibe</span>
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Professional Profile</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1rem', marginBottom: '1.5rem' }}>
                      Offers well-developed analytical skills and important ability to remain calm in stressful situations. Seeking a position where creative skills and design knowledge can be an asset to build cohesive, delightful casual and slot game layouts.
                    </p>
                    <button className="btn-outline" onClick={() => navigateToTab('about')} style={{ width: '100%', justifyContent: 'center' }}>
                      Review Full Specs
                    </button>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {[
                      { company: "Meprotech", role: "Game Designer & Animator", detail: "2D Game Designer." },
                      { company: "Pixasoft Infotech", role: "2D Game Designer & Game Animator", detail: "Create Unique Slot Game Design and Slot Game Animations." },
                      { company: "Ganesha System", role: "2D Game Designer & Game Animator", detail: "Create Unique Casual Game Design and Game Animations." },
                      { company: "Mobilix Solutions Pvt Ltd", role: "2D Game Designer & Game Animator", detail: "Worked closely with Senior Artists and Game Designers to refine styles." }
                    ].map((job, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="glass-panel" 
                        style={{ padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '4px' }}
                      >
                        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-1)', fontFamily: 'var(--font-code)' }}>{job.company}</span>
                        <h4 style={{ fontSize: '1.05rem', fontWeight: 700 }}>{job.role}</h4>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>"{job.detail}"</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Mini selected works show */}
                <div style={{ marginTop: '6rem' }}>
                  <motion.h3 
                    {...scrollFadeUp}
                    style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem' }}
                  >
                    Featured Behance Works
                  </motion.h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    {BEHANCE_PROJECTS.slice(0, 4).map((proj, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.12 }}
                        className="glass-panel" 
                        style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                      >
                        <div style={{ height: '180px', background: proj.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <span style={{ fontSize: '4.5rem' }}>{proj.icon}</span>
                        </div>
                        <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                          <span className="chip" style={{ fontSize: '11px', padding: '4px 10px', marginBottom: '8px', alignSelf: 'flex-start' }}>{proj.category} Design</span>
                          <h4 style={{ fontSize: '1.3rem', margin: '8px 0', fontWeight: 800 }}>{proj.title}</h4>
                          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', flex: 1 }}>
                            {proj.desc}
                          </p>
                          <a href={proj.url} target="_blank" rel="noreferrer" className="btn-outline" style={{ width: '100%', justifyContent: 'center', padding: '8px' }}>
                            Inspect on Behance <Play size={14} />
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div 
                    {...scrollFadeUp}
                    style={{ textAlign: 'center', marginTop: '3rem' }}
                  >
                    <button className="btn-primary" onClick={() => navigateToTab('portfolio')}>
                      Explore All 12 Projects <ArrowRight size={16} />
                    </button>
                  </motion.div>
                </div>

                {/* Level Up Banner */}
                <motion.div 
                  {...scrollFadeUp}
                  className="glass-panel" 
                  style={{ marginTop: '6rem', padding: '4rem 2rem', textAlign: 'center', background: 'linear-gradient(135deg, #ffd6ee, #eedcff)' }}
                >
                  <h3 style={{ fontSize: '2.25rem', fontWeight: 900, marginBottom: '1rem' }}>Ready to level up your game vision.</h3>
                  <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 2.5rem auto' }}>
                    Currently seeking new positions where my creative skills and game design knowledge can be used as an asset. Let's create something extraordinary together.
                  </p>
                  <button className="btn-primary" onClick={() => navigateToTab('contact')} style={{ background: 'var(--accent-1)', fontSize: '15px' }}>
                    Start Co-op Mode
                  </button>
                </motion.div>
              </div>
            )}

            {activeTab === 'about' && (
              <div className="section-container">
                {/* About Hero */}
                <div className="grid md:grid-cols-2 gap-8 items-center" style={{ marginBottom: '5rem' }}>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.65 }}
                  >
                    <span className="chip purple" style={{ marginBottom: '1.25rem' }}>Profile Specifications</span>
                    <h2 style={{ fontSize: '2.75rem', lineHeight: '1.2', marginBottom: '1.5rem' }}>
                      Crafting <span style={{ color: 'var(--accent-1)', fontStyle: 'italic' }}>Immersive Worlds</span> with Visual Art.
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7' }}>
                      I build clean vector layouts, engaging animations, and premium style kits. With a solid foundation in computer applications and structural game designs, I blend artistic logic with efficient pipelines.
                    </p>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.65, delay: 0.15 }}
                    style={{ display: 'flex', justifyContent: 'center' }}
                  >
                    <div className="visual-circle">
                      <Gamepad2 size={48} color="var(--accent-1)" />
                    </div>
                  </motion.div>
                </div>

                {/* Timeline and Skill Columns */}
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Experience Column */}
                  <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Briefcase size={20} color="var(--accent-1)" /> Experience
                    </h3>
                    <div style={{ borderLeft: '2px solid var(--glass-border)', paddingLeft: '1.25rem', marginLeft: '8px' }}>
                      {[
                        { company: "Meprotech", title: "Game Designer & Animator", detail: "2D Game Designer." },
                        { company: "Ganesha System", title: "Game Designer & Animator", detail: "Casual Game Art & Animation Loops." },
                        { company: "Pixasoft Infotech", title: "Slot UI Artist & Animator", detail: "Slot machine UI and spin triggers." },
                        { company: "Mobilix Solutions", title: "Game UI/UX Designer", detail: "Guideline asset packing & vector syncs." }
                      ].map((item, idx) => (
                        <motion.div 
                          key={idx} 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.45, delay: idx * 0.1 }}
                          style={{ marginBottom: '2rem', position: 'relative' }}
                        >
                          <div style={{ position: 'absolute', left: '-27px', top: '4px', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-1)' }}></div>
                          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-1)' }}>{item.company}</span>
                          <h4 style={{ fontSize: '1.05rem', margin: '2px 0' }}>{item.title}</h4>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{item.detail}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Education Column */}
                  <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                  >
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <GraduationCap size={22} color="var(--accent-2)" /> Education
                    </h3>
                    <div style={{ borderLeft: '2px solid var(--glass-border)', paddingLeft: '1.25rem', marginLeft: '8px' }}>
                      <div style={{ position: 'relative', marginBottom: '2rem' }}>
                        <div style={{ position: 'absolute', left: '-27px', top: '4px', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-2)' }}></div>
                        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-2)' }}>Veer Narmad University</span>
                        <h4 style={{ fontSize: '1.05rem', margin: '2px 0' }}>Bachelor of Computer Applications</h4>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Surat, Gujarat | 2018 - 2021</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Skills Arsenal */}
                  <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                  >
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Award size={20} color="var(--accent-3)" /> Core Arsenal
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {["UI Architecture", "2D Sprite Sheet packing", "Frame-by-Frame dynamics", "Casual Character loops", "Color Balance Sync", "Vector Asset Export"].map((skill, idx) => (
                        <motion.div 
                          key={skill} 
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: idx * 0.08 }}
                          className="glass-panel" 
                          style={{ padding: '10px 16px', borderRadius: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}
                        >
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-3)' }}></span>
                          <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Bottom interactive showcase banner */}
                <motion.div 
                  {...scrollFadeUp}
                  className="glass-panel" 
                  style={{ marginTop: '5rem', padding: '3.5rem 2rem', textAlign: 'center', background: 'linear-gradient(135deg, #eedcff, #ffd6ee)' }}
                >
                  <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Designing the Future of Play</h3>
                  <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 2rem auto', fontSize: '0.95rem' }}>
                    Compiling all UI sprite bundles, matching anchor coordinates, and optimizing loading times. Ready for seamless game engine injection.
                  </p>
                  <button className="btn-primary" onClick={() => navigateToTab('portfolio')}>
                    Explore Assets
                  </button>
                </motion.div>
              </div>
            )}

            {activeTab === 'portfolio' && (
              <div className="section-container">
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                  <span className="chip" style={{ marginBottom: '1rem' }}>Selected Works</span>
                  <h2 style={{ fontSize: '2.5rem' }}>Interactive UI & Animations</h2>
                  <p style={{ color: 'var(--text-secondary)' }}>A refined gallery of custom slot machinery, casual maps, and board games direct from Behance.</p>
                </motion.div>

                {/* Category Filters Bar */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '3.5rem', background: '#eedcff', padding: '4px', borderRadius: '9999px', maxWidth: '700px', margin: '0 auto 3.5rem auto', flexWrap: 'wrap' }}
                >
                  {(['All', 'Slots & Casual', 'Card & Board', 'Game Icons'] as const).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      style={{
                        padding: '8px 20px',
                        borderRadius: '9999px',
                        border: 'none',
                        background: selectedCategory === cat ? 'var(--accent-1)' : 'transparent',
                        color: selectedCategory === cat ? '#FFFFFF' : 'var(--accent-2)',
                        fontFamily: 'var(--font-main)',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </motion.div>

                {/* Selected works list layout */}
                <motion.div 
                  layout
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredProjects.map((proj, idx) => (
                    <motion.div 
                      layout
                      key={proj.title} 
                      initial={{ opacity: 0, scale: 0.95, y: 30 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, delay: (idx % 3) * 0.1 }}
                      className="glass-panel" 
                      style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                    >
                      <div style={{ height: '160px', background: proj.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontSize: '4rem' }}>{proj.icon}</span>
                      </div>
                      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <span className="chip purple" style={{ alignSelf: 'flex-start', marginBottom: '10px', fontSize: '10px' }}>{proj.category} Asset</span>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '6px', fontWeight: 800 }}>{proj.title}</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1.5rem', flex: 1, lineHeight: '1.5' }}>{proj.desc}</p>
                        <a href={proj.url} target="_blank" rel="noreferrer" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                          Inspect Asset <Play size={14} />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Studio Pipeline Diagnostics */}
                <motion.div 
                  {...scrollFadeUp}
                  className="glass-panel" 
                  style={{ marginTop: '5rem', padding: '1.5rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }}></span>
                    <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>Active Artboards Optimized</span>
                  </div>
                  <div style={{ display: 'flex', gap: '2rem' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Total UI Sprites: <strong style={{ color: 'var(--text-primary)' }}>142 assets</strong></span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Animation Frames: <strong style={{ color: 'var(--text-primary)' }}>1,024</strong></span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Frame Rate Cap: <strong style={{ color: 'var(--text-primary)' }}>60 FPS</strong></span>
                  </div>
                </motion.div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="section-container">
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                  <span className="chip" style={{ marginBottom: '1rem' }}>Get in Touch</span>
                  <h2 style={{ fontSize: '2.5rem' }}>Level up your next adventure.</h2>
                  <p style={{ color: 'var(--text-secondary)' }}>Ready to scale your next creative game launch? Let's connect.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                  {/* Left info column */}
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65 }}
                    className="glass-panel" 
                    style={{ padding: '2.5rem', background: '#ffd6ee' }}
                  >
                    <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Co-op Channels</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '0.95rem' }}>
                      Looking for a dedicated visual designer or game animator to boost your project assets? Connect with me directly through these channels.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Phone size={18} color="var(--accent-1)" />
                        </div>
                        <div>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block' }}>Call Directly</span>
                          <a href="tel:+916355665198" style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'none' }}>+91 63556 65198</a>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Mail size={18} color="var(--accent-2)" />
                        </div>
                        <div>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block' }}>Mail Inquiry</span>
                          <a href="mailto:ghodadarapinal2001@gmail.com" style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'none' }}>ghodadarapinal2001@gmail.com</a>
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <a href="https://www.behance.net/ghodadarapinal?tracking_source=search_users|ghodadara+pinal" target="_blank" rel="noreferrer" className="btn-outline" style={{ border: '1px solid var(--text-primary)', color: 'var(--text-primary)', background: '#FFFFFF', padding: '8px 16px', fontSize: '0.8rem' }}>
                        Behance <Behance size={14} />
                      </a>
                      <a href="https://www.linkedin.com/in/ghodadara-pinal-183ab5211/" target="_blank" rel="noreferrer" className="btn-outline" style={{ border: '1px solid var(--text-primary)', color: 'var(--text-primary)', background: '#FFFFFF', padding: '8px 16px', fontSize: '0.8rem' }}>
                        LinkedIn <Linkedin size={14} />
                      </a>
                    </div>
                  </motion.div>

                  {/* Right Form Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65 }}
                    className="glass-panel" style={{ padding: '2.5rem' }}
                  >
                    <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      <div>
                        <label className="form-label">Your Name</label>
                        <input type="text" className="form-input" placeholder="e.g. John Doe" />
                      </div>

                      <div>
                        <label className="form-label">Email Address</label>
                        <input type="email" className="form-input" placeholder="e.g. john@company.com" />
                      </div>

                      <div>
                        <label className="form-label">Project Requirements</label>
                        <textarea className="form-input" rows={4} placeholder="Brief details about your gaming quest or asset needs..."></textarea>
                      </div>

                      <button type="submit" className="btn-primary" style={{ justifyContent: 'center', width: '100%', gap: '10px' }}>
                        Inspect Pipeline <Send size={16} />
                      </button>
                    </form>
                  </motion.div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '3rem 2rem', borderTop: '1px solid var(--glass-border)', color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: 'auto' }}>
        <p>MISSION ACCOMPLISHED © PINAL GHODADARA</p>
      </footer>
    </div>
  );
}

export default App;
