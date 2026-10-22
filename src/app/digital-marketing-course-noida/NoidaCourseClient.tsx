"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import "./noida.css";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    __didmExit?: boolean;
  }
}

interface ModalState {
  isOpen: boolean;
  course: string;
  intent: string;
  profile: string;
}

const COPY: Record<
  string,
  { title: string; sub: string; btn: string; ok: string }
> = {
  callback: {
    title: "Request a Callback",
    sub: "Share your details. Our counsellor will call you with fees, batch timings and EMI options.",
    btn: "Call Me Back →",
    ok: "Our counsellor will call you shortly.",
  },
  brochure: {
    title: "Download Brochure",
    sub: "Get the full syllabus, fees and batch details. We'll send the brochure to your email and WhatsApp.",
    btn: "Send Me the Brochure →",
    ok: "The brochure is on its way to your email and WhatsApp.",
  },
  demo: {
    title: "Book Your Free Demo Class",
    sub: "Attend a live demo class before you enrol. Pick your mode and we will share the next demo slot.",
    btn: "Book My Free Demo →",
    ok: "Our team will call you to confirm your demo slot.",
  },
  roadmap: {
    title: "Get Your Free Career Roadmap",
    sub: "Tell us about yourself. A counsellor will map the right course, skills and first steps for your career goal.",
    btn: "Get My Free Roadmap →",
    ok: "Our counsellor will call you to build your career roadmap.",
  },
  visit: {
    title: "Book a Free Campus Visit",
    sub: "Choose a time to visit DIDM, meet a career counsellor and sit in a live class.",
    btn: "Book My Campus Visit →",
    ok: "Our team will call you to confirm your campus visit.",
  },
  syllabus: {
    title: "Get the Full Syllabus",
    sub: "See all 50+ modules with fees and batch details. We will send the syllabus to your email and WhatsApp.",
    btn: "Send Me the Syllabus →",
    ok: "The full syllabus is on its way to your email and WhatsApp.",
  },
  counselling: {
    title: "Get Free Career Counselling",
    sub: "Tell us about yourself. A counsellor will help you choose the right course.",
    btn: "Book Free Counselling →",
    ok: "Our counsellor will call you shortly.",
  },
};

const TESTIMONIALS = [
  {
    quote:
      "I recently completed the digital marketing course at DIDM and I am very impressed with the institute. The curriculum is impressive and up to date. Trainers are experienced and passionate about teaching.",
    name: "Divya Gupta",
    role: "DIDM Alumni",
    image: "/alumni-divya.jpg",
  },
  {
    quote:
      "I have a wonderful experience with Delhi Institute of Digital Marketing. I recently completed my Master course. If anybody wants to join a digital marketing course, they must go to the Satya Niketan branch.",
    name: "Arjun Ahuja",
    role: "DIDM Alumni",
    image: "/alumni-arjun.jpg",
  },
  {
    quote:
      "Best Digital Marketing Institute in Delhi, they also provide onboard training which helps you get practical experience. If you are looking for a Digital marketing institute then this is the right place.",
    name: "Jitender",
    role: "DIDM Alumni",
    image: "/alumni-jitender.jpg",
  },
  {
    quote:
      "DIDM is the best Digital Marketing institute as per my opinion because after class 12th I was clueless and DIDM showed me the new way to succeed. Now, I am working with a digital agency in Paid ads.",
    name: "Pakhi",
    role: "DIDM Alumni",
    image: "/alumni-pakhi.jpg",
  },
  {
    quote:
      "I am a student of DIDM. I have never faced any issue regarding anything. All trainers are very cooperative and polite. DIDM is the best digital marketing institute in Delhi. I strongly recommend DIDM to everyone.",
    name: "Debasis",
    role: "DIDM Alumni",
    image: "/alumni-debasis.jpg",
  },
];

const CAMPUS_IMAGES = [
  "/campus/campus-3.jpg",
  "/campus/campus-4.jpg",
  "/campus/campus-7.jpg",
  "/campus/campus-8.jpg",
  "/campus/campus-1.jpg",
  "/campus/campus-6.jpg",
];

export default function NoidaCourseClient() {
  const router = useRouter();

  // Modal State
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    course: "",
    intent: "callback",
    profile: "",
  });

  // Hero Form State
  const [heroForm, setHeroForm] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    profile: "Student / Fresher",
    mode: "Classroom",
  });
  const [heroLoading, setHeroLoading] = useState(false);
  const [heroSuccess, setHeroSuccess] = useState(false);
  const [heroError, setHeroError] = useState("");

  // Band Form State
  const [bandForm, setBandForm] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
  });
  const [bandLoading, setBandLoading] = useState(false);
  const [bandSuccess, setBandSuccess] = useState(false);
  const [bandError, setBandError] = useState("");

  // Modal Form State
  const [modalForm, setModalForm] = useState({
    name: "",
    phone: "",
    email: "",
    mode: "Classroom",
  });
  const [modalLoading, setModalLoading] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [modalError, setModalError] = useState("");

  // Testimonials Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonialTimer = useRef<NodeJS.Timeout | null>(null);
  const isTestimonialHovered = useRef(false);

  // Campus Slider State
  const [currentCampusSlide, setCurrentCampusSlide] = useState(0);
  const campusTimer = useRef<NodeJS.Timeout | null>(null);

  // Progress bars animation state
  const [isWjVisible, setIsWjVisible] = useState(false);
  const wjRef = useRef<HTMLDivElement | null>(null);

  // Touch coordinates for swipe
  const touchStartRef = useRef<number | null>(null);
  const campusTouchStartRef = useRef<number | null>(null);

  // Open Modal Handler
  const openModal = (course = "", intent = "callback", profile = "") => {
    setModal({
      isOpen: true,
      course,
      intent,
      profile,
    });
    setModalSuccess(false);
    setModalError("");
  };

  const closeModal = () => {
    setModal((prev) => ({ ...prev, isOpen: false }));
  };

  // Submit helper
  const submitLead = async ({
    name,
    email,
    phone,
    course,
    intent = "counselling",
    profile = "",
    mode = "Classroom",
  }: {
    name: string;
    email: string;
    phone: string;
    course: string;
    intent?: string;
    profile?: string;
    mode?: string;
  }) => {
    // 1. Post to existing API route (hits DIDM CRM API and triggers Brevo SMTP mails)
    await axios.post("/api/lead", {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      course: course || "Digital Marketing Master Course",
      location: "Noida",
      city: "Noida",
      state: "Noida",
      enquirysource: "Adword",
      interestlevel: "High",
      intent,
      profile,
      mode,
    });

    // 2. Fire Google Ads conversion if gtag exists
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "form_submit", { send_to: "AW-10840521883" });
    }

    // 3. Save to sessionStorage for thank you page
    try {
      sessionStorage.setItem(
        "didmLead",
        JSON.stringify({
          name,
          course: course || "AI Powered Digital Marketing Course",
          intent,
        })
      );
    } catch (e) {
      // ignore storage errors
    }
  };

  // Handle Hero Submit
  const handleHeroSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHeroError("");
    if (!heroForm.name || !heroForm.phone || !heroForm.email || !heroForm.course) {
      setHeroError("Please fill all required fields.");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(heroForm.phone.trim())) {
      setHeroError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setHeroLoading(true);
    try {
      await submitLead({
        name: heroForm.name,
        email: heroForm.email,
        phone: heroForm.phone,
        course: heroForm.course,
        intent: "brochure",
        profile: heroForm.profile,
        mode: heroForm.mode,
      });
      setHeroSuccess(true);
      setTimeout(() => {
        router.push("/thank-you");
      }, 1500);
    } catch (err: any) {
      console.error(err);
      setHeroError("Something went wrong. Please try again.");
    } finally {
      setHeroLoading(false);
    }
  };

  // Handle Band Submit
  const handleBandSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBandError("");
    if (!bandForm.name || !bandForm.phone || !bandForm.email || !bandForm.course) {
      setBandError("Please fill all required fields.");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(bandForm.phone.trim())) {
      setBandError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setBandLoading(true);
    try {
      await submitLead({
        name: bandForm.name,
        email: bandForm.email,
        phone: bandForm.phone,
        course: bandForm.course,
        intent: "brochure",
      });
      setBandSuccess(true);
      setTimeout(() => {
        router.push("/thank-you");
      }, 1500);
    } catch (err: any) {
      console.error(err);
      setBandError("Something went wrong. Please try again.");
    } finally {
      setBandLoading(false);
    }
  };

  // Handle Modal Submit
  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setModalError("");
    if (!modalForm.name || !modalForm.phone || !modalForm.email) {
      setModalError("Please fill all required fields.");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(modalForm.phone.trim())) {
      setModalError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setModalLoading(true);
    try {
      await submitLead({
        name: modalForm.name,
        email: modalForm.email,
        phone: modalForm.phone,
        course: modal.course,
        intent: modal.intent,
        profile: modal.profile,
        mode: modalForm.mode,
      });
      setModalSuccess(true);
      setTimeout(() => {
        closeModal();
        router.push("/thank-you");
      }, 1500);
    } catch (err: any) {
      console.error(err);
      setModalError("Something went wrong. Please try again.");
    } finally {
      setModalLoading(false);
    }
  };

  // Testimonials Auto-Slide
  useEffect(() => {
    const play = () => {
      testimonialTimer.current = setInterval(() => {
        if (!isTestimonialHovered.current) {
          setCurrentSlide((prev) => (prev + 1) % TESTIMONIALS.length);
        }
      }, 5000);
    };
    play();
    return () => {
      if (testimonialTimer.current) clearInterval(testimonialTimer.current);
    };
  }, []);

  // Campus Auto-Slide
  useEffect(() => {
    campusTimer.current = setInterval(() => {
      setCurrentCampusSlide((prev) => (prev + 1) % CAMPUS_IMAGES.length);
    }, 4000);
    return () => {
      if (campusTimer.current) clearInterval(campusTimer.current);
    };
  }, []);

  // IntersectionObserver for Who Can Join progress bars
  useEffect(() => {
    if (!wjRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsWjVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(wjRef.current);
    return () => observer.disconnect();
  }, []);

  // Exit intent for desktop
  useEffect(() => {
    const handleMouseOut = (e: MouseEvent) => {
      if (e.relatedTarget || e.clientY > 10 || modal.isOpen) return;
      let shown = false;
      try {
        shown = sessionStorage.getItem("didmExit") === "1";
        sessionStorage.setItem("didmExit", "1");
      } catch (err) {}
      if (!shown && !window.__didmExit) {
        window.__didmExit = true;
        openModal("Not sure – need guidance", "counselling");
      }
    };
    document.addEventListener("mouseout", handleMouseOut);
    return () => document.removeEventListener("mouseout", handleMouseOut);
  }, [modal.isOpen]);

  // Modal ESC key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && modal.isOpen) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modal.isOpen]);

  const activeCopy = COPY[modal.intent] || COPY.callback;

  return (
    <div className="noida-page">
      {/* TOPBAR */}
      <div className="topbar">
        🎯 New batch starting soon in Noida — <b>Limited seats</b>. Book your FREE demo class today!
      </div>

      {/* HEADER */}
      <header>
        <div className="wrap">
          <a href="#" className="logo">
            <img
              src="/didm-logo.jpg"
              alt="Delhi Institute of Digital Marketing (DIDM)"
              width={824}
              height={209}
            />
          </a>
          <nav>
            <a href="#courses">Courses</a>
            <a href="#why">Why Us</a>
            <a href="#curriculum">Curriculum</a>
            <a href="#placements">Placements</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a href="tel:+918447222054" className="btn hdemo">
            📞 Book Free Demo
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="enquire">
        <div className="wrap">
          <div>
            <span
              className="tag"
              style={{ background: "rgba(255,255,255,.1)", color: "#fff" }}
            >
              #1 AI Powered Digital Marketing Institute
            </span>
            <h1>
              Become a Job-Ready <em>Digital Marketer</em> in Just 3–6 Months
            </h1>
            <p className="lead">
              AI Powered Master in Digital Marketing Course with live projects, real ad
              budgets, the latest AI marketing tools and 100% placement assistance.
              Classroom &amp; live-online batches in Noida.
            </p>
            <ul className="ticks">
              <li>50+ Modules incl. AI Marketing</li>
              <li>30+ Global Industry Certifications</li>
              <li>Recording (LMS) &amp; Live Session</li>
              <li>Assignment | Case Studies | Live Projects</li>
              <li>02 Months Agency Based Internship</li>
              <li>FREE – E-Notes, E-Books, Tools</li>
              <li>100% Placement Assistance</li>
              <li>Weekday &amp; Weekend Batches</li>
            </ul>
            <div className="rating">
              <div>
                <span className="stars">★★★★★</span>
                <br />
                <b>4.9/5</b> Google Rating
              </div>
              <div>
                <b>70K+</b>
                <br />
                Students Trained
              </div>
              <div>
                <b>650+</b>
                <br />
                Hiring Partners
              </div>
            </div>
          </div>

          <div className="formcard">
            {!heroSuccess ? (
              <form onSubmit={handleHeroSubmit} noValidate>
                <h3>Get Free Career Counselling</h3>
                <p>Fill in your details — our counsellor will call you within 30 minutes.</p>
                {heroError && (
                  <div style={{ color: "#bf282f", fontSize: "0.85rem", marginBottom: "8px" }}>
                    {heroError}
                  </div>
                )}
                <label htmlFor="fname">Full Name*</label>
                <input
                  id="fname"
                  name="name"
                  required
                  placeholder="Enter your name"
                  value={heroForm.name}
                  onChange={(e) => setHeroForm({ ...heroForm, name: e.target.value })}
                />
                <label htmlFor="fphone">Mobile Number*</label>
                <input
                  id="fphone"
                  name="phone"
                  type="tel"
                  required
                  maxLength={10}
                  placeholder="10-digit mobile number"
                  value={heroForm.phone}
                  onChange={(e) =>
                    setHeroForm({
                      ...heroForm,
                      phone: e.target.value.replace(/\D/g, "").slice(0, 10),
                    })
                  }
                />
                <label htmlFor="femail">Email*</label>
                <input
                  id="femail"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={heroForm.email}
                  onChange={(e) => setHeroForm({ ...heroForm, email: e.target.value })}
                />
                <label htmlFor="fcourse">Interested Course*</label>
                <select
                  id="fcourse"
                  name="course"
                  required
                  value={heroForm.course}
                  onChange={(e) => setHeroForm({ ...heroForm, course: e.target.value })}
                >
                  <option value="">Select a course</option>
                  <option value="AI Diploma – Digital Marketing Intelligence (DMI)">
                    AI Diploma – Digital Marketing Intelligence (DMI)
                  </option>
                  <option value="Master in Digital Marketing (MIDM)">
                    Master in Digital Marketing (MIDM)
                  </option>
                  <option value="Advanced Digital Marketing (AIDM)">
                    Advanced Digital Marketing (AIDM)
                  </option>
                  <option value="Professional in Digital Marketing">
                    Professional in Digital Marketing
                  </option>
                  <option value="Not sure – need guidance">Not sure – need guidance</option>
                </select>
                <div className="form-row">
                  <div>
                    <label htmlFor="fprofile">You are a</label>
                    <select
                      id="fprofile"
                      name="profile"
                      value={heroForm.profile}
                      onChange={(e) => setHeroForm({ ...heroForm, profile: e.target.value })}
                    >
                      <option>Student / Fresher</option>
                      <option>Working Professional</option>
                      <option>Business Owner</option>
                      <option>Freelancer</option>
                      <option>Career Switcher</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="fmode">Preferred Mode</label>
                    <select
                      id="fmode"
                      name="mode"
                      value={heroForm.mode}
                      onChange={(e) => setHeroForm({ ...heroForm, mode: e.target.value })}
                    >
                      <option>Classroom</option>
                      <option>Live Online</option>
                    </select>
                  </div>
                </div>
                <button className="btn" type="submit" disabled={heroLoading}>
                  {heroLoading ? "Submitting..." : "Download Brochure →"}
                </button>
                <small>🔒 Your information is 100% safe with us.</small>
              </form>
            ) : (
              <div className="form-ok">
                <b>✓ Thank you!</b>
                The brochure is on its way to your email and WhatsApp. Our counsellor will also call
                you shortly.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="wrap">
          <div className="grid">
            <div className="stat">
              <b>70K+</b>
              <span>Students Trained</span>
            </div>
            <div className="stat">
              <b>650+</b>
              <span>Hiring Partners</span>
            </div>
            <div className="stat">
              <b>30+</b>
              <span>Certifications</span>
            </div>
            <div className="stat">
              <b>4.9★</b>
              <span>Average Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="trustbar" aria-label="Awards, partners and certifications">
        <div className="wrap tb-grid">
          <div className="tb-item">
            <span>Awarded By</span>
            <div className="tb-logo">
              <img
                src="/trust/t1.png"
                alt="ASSOCHAM and Justdial"
                width={366}
                height={82}
                loading="lazy"
              />
            </div>
          </div>
          <div className="tb-item">
            <span>Media Partner</span>
            <div className="tb-logo">
              <img
                src="/trust/t2.png"
                alt="isomes and News24"
                width={356}
                height={82}
                loading="lazy"
              />
            </div>
          </div>
          <div className="tb-item">
            <span>Edu. Associates</span>
            <div className="tb-logo">
              <img
                src="/trust/t3.png"
                alt="SkillShiksha and JIMS"
                width={358}
                height={82}
                loading="lazy"
              />
            </div>
          </div>
          <div className="tb-item">
            <span>Certified By</span>
            <div className="tb-logo">
              <img
                src="/trust/t4.png"
                alt="Ministry of MSME, Govt. of India and ISO 9001"
                width={296}
                height={82}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" className="cwrap">
        <div className="wrap">
          <div className="center">
            <span className="tag dark">Our Courses</span>
            <h2>
              Choose Your Path to a <em>High-Paying</em> Marketing Career
            </h2>
            <p className="sub">
              Classroom or live online. Every program includes live projects, industry
              certifications and placement support.
            </p>
          </div>

          <article className="feature">
            <div className="fbody">
              <div className="frow">
                <span className="fnew">NEW</span>
                <span className="fbadge">🎁 Get Up to Rs.10K During Specialization</span>
              </div>
              <h3>
                AI Diploma Program
                <br />
                <em>Digital Marketing Intelligence (DMI)</em>
              </h3>
              <div className="fgrid">
                <div>
                  <i>🎓</i>
                  <b>UGC Approved</b>
                  <span>Diploma from a UGC approved university</span>
                </div>
                <div>
                  <i>💼</i>
                  <b>PPO</b>
                  <span>Pre-Placement Offer</span>
                </div>
                <div>
                  <i>🤖</i>
                  <b>AI-Genesis</b>
                  <span>Integration of Generative AI</span>
                </div>
                <div>
                  <i>🏢</i>
                  <b>Agency Floor</b>
                  <span>3-Months real-time experience certificate</span>
                </div>
              </div>
              <div className="fbtns">
                <button
                  className="btn cta"
                  type="button"
                  onClick={() =>
                    openModal(
                      "AI Diploma – Digital Marketing Intelligence (DMI)",
                      "callback"
                    )
                  }
                >
                  Check Eligibility &amp; Fees <span aria-hidden="true">→</span>
                </button>
                <button
                  className="btn ghost-light"
                  type="button"
                  onClick={() =>
                    openModal(
                      "AI Diploma – Digital Marketing Intelligence (DMI)",
                      "brochure"
                    )
                  }
                >
                  Download Brochure
                </button>
                <a
                  className="btn wabtn"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/918447222054?text=Hi%2C%20I%20want%20details%20of%20the%20AI%20Diploma%20Program%20(DMI)"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
            <div className="fimg">
              <img
                src="/course-dmi.jpg"
                alt="AI Diploma – Digital Marketing Intelligence (DMI)"
                width={424}
                height={239}
                loading="lazy"
              />
              <span className="chip c1">✓ UGC Approved</span>
              <span className="chip c2">✓ Pre-Placement Offer</span>
            </div>
          </article>

          <div className="courses">
            <article className="course hot">
              <div className="cimg">
                <span className="ribbon">🔥 Most Popular</span>
                <img
                  src="/course-midm.jpg"
                  alt="Master in Digital Marketing (MIDM)"
                  width={598}
                  height={476}
                  loading="lazy"
                />
                <span className="ctag">Master Course</span>
              </div>
              <div className="cbody">
                <h3>
                  Master in Digital Marketing <em>(MIDM)</em>
                </h3>
                <div className="cstats">
                  <div>
                    <b>500+</b>
                    <span>Hours Training</span>
                  </div>
                  <div>
                    <b>2 Mo</b>
                    <span>Internship</span>
                  </div>
                  <div>
                    <b>30+</b>
                    <span>Certifications</span>
                  </div>
                </div>
                <ul>
                  <li>Classroom &amp; Online Training Available</li>
                  <li>LMS Recording + Live Sessions Access</li>
                  <li>Hands-on Live Projects</li>
                  <li>Free E-Notes &amp; E-Books</li>
                </ul>
                <div className="cperks">
                  <span>✓ Free Demo Class</span>
                  <span>✓ Easy EMI</span>
                </div>
                <button
                  className="btn cta"
                  type="button"
                  onClick={() =>
                    openModal("Master in Digital Marketing (MIDM)", "callback")
                  }
                >
                  Get Fees &amp; Batch Details <span aria-hidden="true">→</span>
                </button>
                <div className="clinks">
                  <button
                    type="button"
                    className="btn sbtn brochure"
                    onClick={() =>
                      openModal("Master in Digital Marketing (MIDM)", "brochure")
                    }
                  >
                    Download Brochure
                  </button>
                  <a
                    className="btn sbtn wabtn"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://wa.me/918447222054?text=Hi%2C%20I%20want%20details%20of%20Master%20in%20Digital%20Marketing%20(MIDM)"
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </article>

            <article className="course">
              <div className="cimg">
                <img
                  src="/course-aidm.jpg"
                  alt="Advanced Digital Marketing (AIDM)"
                  width={597}
                  height={477}
                  loading="lazy"
                />
                <span className="ctag">Advanced Course</span>
              </div>
              <div className="cbody">
                <h3>
                  Advanced Digital Marketing <em>(AIDM)</em>
                </h3>
                <div className="cstats">
                  <div>
                    <b>140+</b>
                    <span>Hours Training</span>
                  </div>
                  <div>
                    <b>Live</b>
                    <span>Projects</span>
                  </div>
                  <div>
                    <b>27+</b>
                    <span>Certifications</span>
                  </div>
                </div>
                <ul>
                  <li>In Class | Online</li>
                  <li>Recording (LMS) | Live Sessions</li>
                  <li>E-Notes &amp; E-Books</li>
                </ul>
                <div className="cperks">
                  <span>✓ Free Demo Class</span>
                  <span>✓ Easy EMI</span>
                </div>
                <button
                  className="btn cta"
                  type="button"
                  onClick={() =>
                    openModal("Advanced Digital Marketing (AIDM)", "callback")
                  }
                >
                  Get Fees &amp; Batch Details <span aria-hidden="true">→</span>
                </button>
                <div className="clinks">
                  <button
                    type="button"
                    className="btn sbtn brochure"
                    onClick={() =>
                      openModal("Advanced Digital Marketing (AIDM)", "brochure")
                    }
                  >
                    Download Brochure
                  </button>
                  <a
                    className="btn sbtn wabtn"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://wa.me/918447222054?text=Hi%2C%20I%20want%20details%20of%20Advanced%20Digital%20Marketing%20(AIDM)"
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </article>

            <article className="course">
              <div className="cimg">
                <img
                  src="/course-pidm.jpg"
                  alt="Professional in Digital Marketing"
                  width={598}
                  height={477}
                  loading="lazy"
                />
                <span className="ctag">Professional Course</span>
              </div>
              <div className="cbody">
                <h3>Professional in Digital Marketing</h3>
                <div className="cstats">
                  <div>
                    <b>Custom</b>
                    <span>Module</span>
                  </div>
                  <div>
                    <b>Live</b>
                    <span>Projects</span>
                  </div>
                  <div>
                    <b>Google</b>
                    <span>+ DIDM Cert</span>
                  </div>
                </div>
                <ul>
                  <li>In Class | Online</li>
                  <li>E-Notes</li>
                  <li>Google + DIDM Certification</li>
                </ul>
                <div className="cperks">
                  <span>✓ Free Demo Class</span>
                  <span>✓ Easy EMI</span>
                </div>
                <button
                  className="btn cta"
                  type="button"
                  onClick={() =>
                    openModal("Professional in Digital Marketing", "callback")
                  }
                >
                  Get Fees &amp; Batch Details <span aria-hidden="true">→</span>
                </button>
                <div className="clinks">
                  <button
                    type="button"
                    className="btn sbtn brochure"
                    onClick={() =>
                      openModal("Professional in Digital Marketing", "brochure")
                    }
                  >
                    Download Brochure
                  </button>
                  <a
                    className="btn sbtn wabtn"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://wa.me/918447222054?text=Hi%2C%20I%20want%20details%20of%20Professional%20in%20Digital%20Marketing"
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </article>
          </div>

          <div className="trust">
            <span>✓ Free Demo Class</span>
            <span>✓ Easy EMI Options</span>
            <span>✓ 100% Placement Assistance</span>
            <span>✓ Classroom &amp; Live Online</span>
          </div>

          <div className="unsure">
            <div>
              <b>Not sure which course is right for you?</b>
              <span>
                Talk to a career counsellor for free. Get a course recommendation, fee details and
                EMI options in 10 minutes.
              </span>
            </div>
            <a className="btn cta" href="tel:+918447222054">
              📞 Get Free Counselling
            </a>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="whybest">
        <div className="wrap wbgrid">
          <div className="wbtext">
            <span className="tag">Why DIDM</span>
            <h2>
              <span className="hash">#</span>Why we are Best in Digital Marketing Training Institute{" "}
              <em>PAN INDIA</em>
            </h2>
            <p className="wblead">
              At Delhi Institute of Digital Marketing <b className="red">(DIDM)</b>, we stand out
              as the leaders in the digital marketing training domain, and there are more than{" "}
              <b>150+ reasons</b> to join our training program.
            </p>
            <div className="wbstats">
              <div>
                <b>4.8/5</b>
                <span>Training &amp; Services Rating</span>
              </div>
              <div>
                <b>150+</b>
                <span>Reasons to Join</span>
              </div>
              <div>
                <b>650+</b>
                <span>Placement Partners</span>
              </div>
            </div>
            <ul className="wblist">
              <li>AI Based Master’s Program in Digital Marketing</li>
              <li>50+ Advanced Modules | 30+ Certifications</li>
              <li>02 Months Agency Based Internship</li>
              <li>FREE ( E-Notes | E-Books | LMS )</li>
              <li>650+ Placement Partner</li>
              <li>Start Earning during Training Program</li>
              <li>ISO Certification | MSME Certified</li>
              <li>Flexible Timing &amp; Batches</li>
              <li>100% Placement Support</li>
              <li>100% Practical Training</li>
              <li>All Branches with Metro Connectivity</li>
              <li>Awarded - ASSOCHAM | IFA | WASME</li>
            </ul>
            <div className="wbbtns">
              <a className="btn cta" href="tel:+918447222054">
                📞 Book Free Demo Class
              </a>
              <a className="btn dark" href="#curriculum">
                Know More Now
              </a>
            </div>
          </div>

          <aside className="wbside">
            <div
              className="tcard"
              onMouseEnter={() => {
                isTestimonialHovered.current = true;
              }}
              onMouseLeave={() => {
                isTestimonialHovered.current = false;
              }}
              onTouchStart={(e) => {
                touchStartRef.current = e.touches[0].clientX;
              }}
              onTouchEnd={(e) => {
                if (touchStartRef.current === null) return;
                const dx = e.changedTouches[0].clientX - touchStartRef.current;
                touchStartRef.current = null;
                if (Math.abs(dx) > 40) {
                  setCurrentSlide((prev) =>
                    dx < 0
                      ? (prev + 1) % TESTIMONIALS.length
                      : (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
                  );
                }
              }}
            >
              <div className="thead">
                <div className="tq" aria-hidden="true">
                  &ldquo;
                </div>
                <span className="tlabel">Student Reviews</span>
              </div>
              <div className="tslides">
                {TESTIMONIALS.map((review, idx) => (
                  <figure
                    key={idx}
                    className={`tslide ${idx === currentSlide ? "is-active" : ""}`}
                  >
                    <blockquote>{review.quote}</blockquote>
                    <div className="stars">★★★★★</div>
                    <figcaption>
                      <img
                        src={review.image}
                        alt={review.name}
                        width={160}
                        height={160}
                        loading="lazy"
                      />
                      <div>
                        <b>{review.name}</b>
                        <span>{review.role}</span>
                      </div>
                    </figcaption>
                  </figure>
                ))}
              </div>
              <div className="tnav">
                <button
                  type="button"
                  className="tarrow"
                  aria-label="Previous review"
                  onClick={() =>
                    setCurrentSlide((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
                  }
                >
                  ‹
                </button>
                <div className="tdots">
                  {TESTIMONIALS.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`tdot ${idx === currentSlide ? "is-active" : ""}`}
                      aria-label={`Show review ${idx + 1}`}
                      onClick={() => setCurrentSlide(idx)}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  className="tarrow"
                  aria-label="Next review"
                  onClick={() =>
                    setCurrentSlide((prev) => (prev + 1) % TESTIMONIALS.length)
                  }
                >
                  ›
                </button>
              </div>
            </div>
            <div className="awards">
              <div>
                <i>🏅</i>
                <b>ISO Certified</b>
              </div>
              <div>
                <i>🏛️</i>
                <b>MSME Certified</b>
              </div>
              <div>
                <i>🏆</i>
                <b>ASSOCHAM | IFA | WASME Awarded</b>
              </div>
              <div>
                <i>🚇</i>
                <b>Metro Connected Branches</b>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* WHO CAN JOIN */}
      <section className="whojoin" id="who">
        <div className="wrap">
          <div className="wjcard">
            <div className="wjtext">
              <span className="tag">Who Can Join</span>
              <h2>
                Who can join our most <em>demanding</em> AI Powered Digital Marketing Course?
              </h2>
              <p>
                We are the best digital marketing training institute across Delhi NCR, with multiple
                locations. At DIDM, the AI Powered Digital Marketing Course is designed for{" "}
                <b>Students, Job Seekers, Working Professionals, Businessmen, Startups, House Wives</b>{" "}
                and others.
              </p>
              <ul className="wjchecks">
                <li>No technical background needed</li>
                <li>Classroom &amp; live online batches</li>
                <li>Weekday &amp; weekend timings</li>
              </ul>
              <a className="btn demo" href="tel:+918447222054">
                START WITH DEMO <span className="arr" aria-hidden="true">➜</span>
              </a>
            </div>
            <div ref={wjRef} className={`wjpanel ${isWjVisible ? "go" : ""}`}>
              <div className="wjhead">
                <b>Current Market Trends</b>
                <span>Tap your profile to book a free demo</span>
              </div>
              <button
                type="button"
                className="seg"
                onClick={() =>
                  openModal("Not sure – need guidance", "demo", "Student / Fresher")
                }
              >
                <span className="seg-ic" aria-hidden="true">🎓</span>
                <span className="seg-main">
                  <span className="seg-top">
                    <b>Job Seekers | Students</b>
                    <em>83%</em>
                  </span>
                  <span className="seg-bar">
                    <span className="seg-fill" style={{ width: "83%" }}></span>
                  </span>
                  <span className="seg-txt">Start a high-growth career right after college</span>
                </span>
                <span className="seg-go" aria-hidden="true">→</span>
              </button>
              <button
                type="button"
                className="seg"
                onClick={() =>
                  openModal("Not sure – need guidance", "demo", "Working Professional")
                }
              >
                <span className="seg-ic" aria-hidden="true">💼</span>
                <span className="seg-main">
                  <span className="seg-top">
                    <b>Working Professional</b>
                    <em>71%</em>
                  </span>
                  <span className="seg-bar">
                    <span className="seg-fill" style={{ width: "71%" }}></span>
                  </span>
                  <span className="seg-txt">Switch careers or get promoted faster</span>
                </span>
                <span className="seg-go" aria-hidden="true">→</span>
              </button>
              <button
                type="button"
                className="seg"
                onClick={() =>
                  openModal("Not sure – need guidance", "demo", "Business Owner")
                }
              >
                <span className="seg-ic" aria-hidden="true">🚀</span>
                <span className="seg-main">
                  <span className="seg-top">
                    <b>Business Man | Startups</b>
                    <em>87%</em>
                  </span>
                  <span className="seg-bar">
                    <span className="seg-fill" style={{ width: "87%" }}></span>
                  </span>
                  <span className="seg-txt">Generate leads &amp; sales without an agency</span>
                </span>
                <span className="seg-go" aria-hidden="true">→</span>
              </button>
              <button
                type="button"
                className="seg"
                onClick={() =>
                  openModal("Not sure – need guidance", "demo", "Freelancer")
                }
              >
                <span className="seg-ic" aria-hidden="true">🏡</span>
                <span className="seg-main">
                  <span className="seg-top">
                    <b>Freelance | House Wife</b>
                    <em>63%</em>
                  </span>
                  <span className="seg-bar">
                    <span className="seg-fill" style={{ width: "63%" }}></span>
                  </span>
                  <span className="seg-txt">Earn from home with flexible hours</span>
                </span>
                <span className="seg-go" aria-hidden="true">→</span>
              </button>
              <button
                type="button"
                className="seg"
                onClick={() =>
                  openModal("Not sure – need guidance", "demo", "Career Switcher")
                }
              >
                <span className="seg-ic" aria-hidden="true">✨</span>
                <span className="seg-main">
                  <span className="seg-top">
                    <b>Other Segment</b>
                    <em>81%</em>
                  </span>
                  <span className="seg-bar">
                    <span className="seg-fill" style={{ width: "81%" }}></span>
                  </span>
                  <span className="seg-txt">Anyone who wants to learn digital marketing</span>
                </span>
                <span className="seg-go" aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section id="curriculum" className="curr">
        <div className="wrap">
          <div className="center">
            <span className="tag">Course Curriculum</span>
            <h2>
              <em>50+ Modules</em> That Make You Job-Ready
            </h2>
            <p className="sub">
              From branding and AI-powered SEO to Google Ads, social media, e-commerce and placement
              prep. One complete training program.
            </p>
          </div>
          <div className="mgrid">
            <div className="mtile">
              <span className="mnum">01</span>
              <span className="mic" aria-hidden="true">🎨</span>
              <b>Digital Marketing Fundamentals</b>
            </div>
            <div className="mtile">
              <span className="mnum">02</span>
              <span className="mic" aria-hidden="true">🖥️</span>
              <b>Website Creation with WordPress</b>
            </div>
            <div className="mtile">
              <span className="mnum">03</span>
              <span className="mic" aria-hidden="true">🔍</span>
              <b>Search Engine Optimization (SEO)</b>
            </div>
            <div className="mtile">
              <span className="mnum">04</span>
              <span className="mic" aria-hidden="true">📢</span>
              <b>Google Ads (PPC)</b>
            </div>
            <div className="mtile">
              <span className="mnum">05</span>
              <span className="mic" aria-hidden="true">👥</span>
              <b>Social Media Marketing</b>
            </div>
            <div className="mtile">
              <span className="mnum">06</span>
              <span className="mic" aria-hidden="true">♾️</span>
              <b>Meta &amp; LinkedIn Ads</b>
            </div>
            <div className="mtile">
              <span className="mnum">07</span>
              <span className="mic" aria-hidden="true">🤖</span>
              <b>AI in Digital Marketing</b>
            </div>
            <div className="mtile">
              <span className="mnum">08</span>
              <span className="mic" aria-hidden="true">📧</span>
              <b>Content &amp; Email Marketing</b>
            </div>
            <div className="mtile">
              <span className="mnum">09</span>
              <span className="mic" aria-hidden="true">📊</span>
              <b>Web Analytics (GA4 &amp; GTM)</b>
            </div>
            <div className="mtile">
              <span className="mnum">10</span>
              <span className="mic" aria-hidden="true">🛒</span>
              <b>E-commerce &amp; Affiliate Marketing</b>
            </div>
            <div className="mtile">
              <span className="mnum">11</span>
              <span className="mic" aria-hidden="true">⭐</span>
              <b>Online Reputation &amp; Influencer Marketing</b>
            </div>
            <div className="mtile">
              <span className="mnum">12</span>
              <span className="mic" aria-hidden="true">💼</span>
              <b>Freelancing &amp; Career Readiness</b>
            </div>
          </div>
          <div className="mtoggle">
            <button
              type="button"
              className="btn ghost mbtn"
              onClick={() =>
                openModal("Not sure – need guidance", "syllabus")
              }
            >
              View All 50+ Modules <span aria-hidden="true">→</span>
            </button>
          </div>
          <div className="mbanner">
            <div className="mb-ic" aria-hidden="true">
              🎓
            </div>
            <div className="mb-text">
              <b>
                <em>01</em> Training Program &amp; <em>30+</em> Certifications
              </b>
              <span>Talk to a counsellor for fees, EMI options and the next batch date.</span>
            </div>
            <button
              className="btn cta"
              type="button"
              onClick={() =>
                openModal("Not sure – need guidance", "callback")
              }
            >
              Get Fees &amp; Batch Details <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="toolsec" id="tools">
        <div className="wrap">
          <div className="center">
            <span className="tag">Tools You'll Master</span>
            <h2>
              <em>AI Tools &amp; Platforms</em> You Will Master
            </h2>
            <p className="sub">
              Hands-on training with the industry standard tools used by working professionals.
            </p>
          </div>

          <div className="aiband">
            <div className="aihead">
              <span className="ainew">NEW</span>
              <h3>AI Driven Tools</h3>
              <p>Learn to plan, create and optimise campaigns with Generative AI.</p>
            </div>
            <div className="aigrid">
              <div className="ai-tile">
                <span className="ai-ic" style={{ background: "#10a37f" }}>
                  G
                </span>
                <div>
                  <b>ChatGPT</b>
                  <span>Content, ad copy &amp; prompts</span>
                </div>
              </div>
              <div className="ai-tile">
                <span className="ai-ic" style={{ background: "#fff", color: "#111318" }}>
                  N
                </span>
                <div>
                  <b>NotebookLM</b>
                  <span>AI research &amp; notes from your sources</span>
                </div>
              </div>
              <div className="ai-tile">
                <span className="ai-ic" style={{ background: "#5b3fd6" }}>
                  D
                </span>
                <div>
                  <b>Durable</b>
                  <span>AI website builder in minutes</span>
                </div>
              </div>
              <div className="ai-tile">
                <span
                  className="ai-ic"
                  style={{
                    background: "linear-gradient(135deg,#4285f4,#9b72cb,#d96570)",
                  }}
                >
                  ✦
                </span>
                <div>
                  <b>Gemini</b>
                  <span>Multimodal AI by Google</span>
                </div>
              </div>
              <div className="ai-tile">
                <span
                  className="ai-ic"
                  style={{ background: "#fff", color: "#111318", fontSize: ".95rem" }}
                >
                  II
                </span>
                <div>
                  <b>ElevenLabs</b>
                  <span>AI voiceovers for ads &amp; videos</span>
                </div>
              </div>
              <div className="ai-tile">
                <span className="ai-ic" style={{ background: "#fff", color: "#111318" }}>
                  I
                </span>
                <div>
                  <b>Ideogram</b>
                  <span>AI images &amp; text-in-image creatives</span>
                </div>
              </div>
            </div>
          </div>

          <div className="aiband mk">
            <div className="aihead">
              <h3>Marketing, SEO &amp; Ads Tools</h3>
              <p>Run real campaigns, track results and grow brands with the tools agencies use every day.</p>
            </div>
            <div className="aigrid">
              <div className="ai-tile">
                <span
                  className="ai-ic"
                  style={{
                    background: "linear-gradient(135deg,#4285f4,#34a853 55%,#fbbc04)",
                    fontSize: ".95rem",
                  }}
                >
                  GA
                </span>
                <div>
                  <b>Google Ads</b>
                  <span>Search, Display &amp; YouTube ads</span>
                </div>
              </div>
              <div className="ai-tile">
                <span className="ai-ic" style={{ background: "#1877f2" }}>
                  f
                </span>
                <div>
                  <b>Facebook / Meta Ads</b>
                  <span>Facebook &amp; Instagram ads</span>
                </div>
              </div>
              <div className="ai-tile">
                <span className="ai-ic" style={{ background: "#0a66c2", fontSize: ".95rem" }}>
                  in
                </span>
                <div>
                  <b>LinkedIn Ads</b>
                  <span>B2B lead generation</span>
                </div>
              </div>
              <div className="ai-tile">
                <span className="ai-ic" style={{ background: "#111318" }}>
                  X
                </span>
                <div>
                  <b>X (Twitter) Ads</b>
                  <span>Promoted posts &amp; trends</span>
                </div>
              </div>
              <div className="ai-tile">
                <span
                  className="ai-ic"
                  style={{
                    background: "linear-gradient(135deg,#f9ab00,#e37400)",
                    fontSize: ".85rem",
                  }}
                >
                  GA4
                </span>
                <div>
                  <b>Google Analytics 4</b>
                  <span>Traffic &amp; conversion tracking</span>
                </div>
              </div>
              <div className="ai-tile">
                <span className="ai-ic" style={{ background: "#246fdb", fontSize: ".85rem" }}>
                  GTM
                </span>
                <div>
                  <b>Google Tag Manager</b>
                  <span>Tags, pixels &amp; events</span>
                </div>
              </div>
              <div className="ai-tile">
                <span
                  className="ai-ic"
                  style={{
                    background: "linear-gradient(135deg,#4285f4,#34a853 55%,#fbbc04)",
                    fontSize: ".85rem",
                  }}
                >
                  GSC
                </span>
                <div>
                  <b>Google Search Console</b>
                  <span>Indexing &amp; search performance</span>
                </div>
              </div>
              <div className="ai-tile">
                <span className="ai-ic" style={{ background: "#4285f4", fontSize: ".95rem" }}>
                  KP
                </span>
                <div>
                  <b>Google Keyword Planner</b>
                  <span>Keyword research for ads</span>
                </div>
              </div>
              <div className="ai-tile">
                <span className="ai-ic" style={{ background: "#ff642d" }}>
                  S
                </span>
                <div>
                  <b>SEMrush</b>
                  <span>Competitor &amp; keyword research</span>
                </div>
              </div>
              <div className="ai-tile">
                <span
                  className="ai-ic"
                  style={{ background: "linear-gradient(135deg,#054ada,#ff8800)" }}
                >
                  a
                </span>
                <div>
                  <b>Ahrefs</b>
                  <span>Backlinks &amp; SEO audits</span>
                </div>
              </div>
              <div className="ai-tile">
                <span className="ai-ic" style={{ background: "#1fa5d8" }}>
                  M
                </span>
                <div>
                  <b>Moz</b>
                  <span>Domain authority &amp; SEO</span>
                </div>
              </div>
              <div className="ai-tile">
                <span className="ai-ic" style={{ background: "#a4286a" }}>
                  Y
                </span>
                <div>
                  <b>Yoast SEO</b>
                  <span>On-page SEO for WordPress</span>
                </div>
              </div>
              <div className="ai-tile">
                <span className="ai-ic" style={{ background: "#f26c3d" }}>
                  U
                </span>
                <div>
                  <b>Ubersuggest</b>
                  <span>Keywords &amp; content ideas</span>
                </div>
              </div>
              <div className="ai-tile">
                <span
                  className="ai-ic"
                  style={{
                    background: "linear-gradient(135deg,#fbbc04,#4285f4)",
                    fontSize: ".95rem",
                  }}
                >
                  AS
                </span>
                <div>
                  <b>Google AdSense</b>
                  <span>Earn from your website</span>
                </div>
              </div>
              <div className="ai-tile">
                <span className="ai-ic" style={{ background: "#34a853", fontSize: ".85rem" }}>
                  GBP
                </span>
                <div>
                  <b>Google Business Profile</b>
                  <span>Local SEO &amp; Maps listing</span>
                </div>
              </div>
              <div className="ai-tile">
                <span className="ai-ic" style={{ background: "#21759b" }}>
                  W
                </span>
                <div>
                  <b>WordPress</b>
                  <span>Build websites &amp; blogs</span>
                </div>
              </div>
              <div className="ai-tile">
                <span className="ai-ic" style={{ background: "#e8c21a", fontSize: ".95rem" }}>
                  MC
                </span>
                <div>
                  <b>Mailchimp</b>
                  <span>Email campaigns &amp; automation</span>
                </div>
              </div>
              <div className="ai-tile">
                <span
                  className="ai-ic"
                  style={{ background: "linear-gradient(135deg,#00c4cc,#7d2ae8)" }}
                >
                  C
                </span>
                <div>
                  <b>Canva</b>
                  <span>Social posts &amp; creatives</span>
                </div>
              </div>
              <div className="ai-tile">
                <span className="ai-ic" style={{ background: "#15c39a" }}>
                  G
                </span>
                <div>
                  <b>Grammarly</b>
                  <span>Error-free copywriting</span>
                </div>
              </div>
              <div className="ai-tile">
                <span className="ai-ic" style={{ background: "#0866ff", fontSize: ".95rem" }}>
                  MB
                </span>
                <div>
                  <b>Meta Business Suite</b>
                  <span>Schedule &amp; manage social</span>
                </div>
              </div>
            </div>
          </div>
          <div className="center tcta">
            <a className="btn cta" href="tel:+918447222054">
              📞 Book Free Demo Class
            </a>
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section id="placements" className="careers">
        <div className="wrap">
          <div className="center">
            <span className="tag">Career Options</span>
            <h2>
              Career Options <em>For You</em>
            </h2>
            <p className="sub">
              After completing our AI Powered Digital Marketing Course, choose the path that fits you:
              a job or your own business.
            </p>
          </div>
          <div className="pgrid">
            <article className="path job">
              <div className="ptop">
                <span className="pic" aria-hidden="true">💼</span>
                <div>
                  <span className="peyebrow">Path 1 · Get Hired</span>
                  <h3>Internship / Job</h3>
                </div>
              </div>
              <p className="pdesc">
                Land a role at an agency or brand with our placement support and 650+ hiring partners.
              </p>
              <ul className="pitems">
                <li><span aria-hidden="true">🎯</span>Digital Marketing Specialist</li>
                <li><span aria-hidden="true">📱</span>Social Media Manager</li>
                <li><span aria-hidden="true">🔍</span>SEO Specialist</li>
                <li><span aria-hidden="true">💰</span>PPC Specialist</li>
                <li><span aria-hidden="true">✍️</span>Content Marketer</li>
                <li><span aria-hidden="true">📧</span>Email Marketing Specialist</li>
                <li><span aria-hidden="true">📊</span>Digital Marketing Analyst</li>
                <li><span aria-hidden="true">🛒</span>E-commerce Manager</li>
              </ul>
              <button
                type="button"
                className="btn pbtn"
                onClick={() =>
                  openModal(
                    "Not sure – need guidance",
                    "counselling",
                    "Career path: Internship / Job"
                  )
                }
              >
                Get Job-Ready <span aria-hidden="true">→</span>
              </button>
            </article>

            <span className="por" aria-hidden="true">
              OR
            </span>

            <article className="path biz">
              <div className="ptop">
                <span className="pic" aria-hidden="true">🚀</span>
                <div>
                  <span className="peyebrow">Path 2 · Grow Your Business</span>
                  <h3>Entrepreneurship</h3>
                </div>
              </div>
              <p className="pdesc">
                Use digital marketing to grow your own business or startup, without depending on an agency.
              </p>
              <ul className="pitems">
                <li><span aria-hidden="true">🌐</span>Improved Online Presence</li>
                <li><span aria-hidden="true">🎯</span>Targeted Marketing</li>
                <li><span aria-hidden="true">📣</span>Enhanced Brand Awareness</li>
                <li><span aria-hidden="true">📈</span>Increased Website Traffic</li>
                <li><span aria-hidden="true">💬</span>Better Customer Engagement</li>
                <li><span aria-hidden="true">🧲</span>Lead Generation</li>
                <li><span aria-hidden="true">💸</span>Cost-Effective Marketing</li>
                <li><span aria-hidden="true">✅</span>Improved Conversion Rates</li>
              </ul>
              <button
                type="button"
                className="btn pbtn"
                onClick={() =>
                  openModal(
                    "Not sure – need guidance",
                    "counselling",
                    "Career path: Entrepreneurship"
                  )
                }
              >
                Grow My Business <span aria-hidden="true">→</span>
              </button>
            </article>
          </div>

          <div className="pcta">
            <div className="pcta-text">
              <b>Not sure which career path is right for you?</b>
              <span>
                Get a free 1-on-1 career roadmap from our counsellors: the right course, the skills
                you need and your first steps.
              </span>
            </div>
            <div className="pcta-btns">
              <button
                className="btn cta"
                type="button"
                onClick={() =>
                  openModal("Not sure – need guidance", "roadmap")
                }
              >
                Get My Free Career Roadmap <span aria-hidden="true">→</span>
              </button>
              <a
                className="btn wabtn"
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/918447222054?text=Hi%2C%20I%20want%20career%20guidance%20for%20digital%20marketing"
              >
                💬 Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CAMPUS VISIT */}
      <section className="campus" id="campus">
        <div className="wrap cgrid">
          <div className="ctext">
            <span className="tag">Campus Visit</span>
            <h2>
              Get the <em>DIDM</em> Campus Experience
            </h2>
            <p className="clead">Talk to us in-person</p>
            <ul className="cpoints">
              <li>
                <span className="cpi" aria-hidden="true">📍</span>
                Walk into the DIDM campus for a free 1:1 session
              </li>
              <li>
                <span className="cpi" aria-hidden="true">👤</span>
                Chat with an expert about your career in digital marketing
              </li>
              <li>
                <span className="cpi" aria-hidden="true">📅</span>
                Experience the campus vibe before you commit
              </li>
            </ul>
            <button
              className="btn cta big"
              type="button"
              onClick={() =>
                openModal("Not sure – need guidance", "visit")
              }
            >
              📅 Talk to us in-person <span aria-hidden="true">→</span>
            </button>
            <p className="cnote">Free visit. No obligation to enrol.</p>
          </div>

          <div className="cpanel">
            <div
              className="cshow"
              onTouchStart={(e) => {
                campusTouchStartRef.current = e.touches[0].clientX;
              }}
              onTouchEnd={(e) => {
                if (campusTouchStartRef.current === null) return;
                const dx = e.changedTouches[0].clientX - campusTouchStartRef.current;
                campusTouchStartRef.current = null;
                if (Math.abs(dx) > 40) {
                  setCurrentCampusSlide((prev) =>
                    dx < 0
                      ? (prev + 1) % CAMPUS_IMAGES.length
                      : (prev - 1 + CAMPUS_IMAGES.length) % CAMPUS_IMAGES.length
                  );
                }
              }}
            >
              {CAMPUS_IMAGES.map((src, idx) => (
                <img
                  key={idx}
                  className={`cslide ${idx === currentCampusSlide ? "is-active" : ""}`}
                  src={src}
                  alt="DIDM students at the campus graduation ceremony"
                  width={470}
                  height={395}
                />
              ))}
              <div className="cbadges">
                <span className="cb1">DIDM CAMPUS</span>
                <span className="cb2">🚇 Metro Connected</span>
              </div>
              <div className="cdots">
                {CAMPUS_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`cdot ${idx === currentCampusSlide ? "is-active" : ""}`}
                    aria-label={`Show photo ${idx + 1}`}
                    onClick={() => setCurrentCampusSlide(idx)}
                  />
                ))}
              </div>
            </div>
            <div className="cfoot">
              <div>
                <b>Open 7 Days</b>
                <span>Walk-ins welcome</span>
              </div>
              <div>
                <b>Multiple branches</b>
                <span>across Delhi NCR &amp; Noida</span>
              </div>
              <div>
                <b>70K+</b>
                <span>Students trained</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="soft">
        <div className="wrap">
          <div className="center">
            <span className="tag">FAQs</span>
            <h2>Frequently Asked Questions</h2>
            <p className="sub"></p>
          </div>
          <div className="faq">
            <details open>
              <summary>What is the duration of the AI Powered Digital Marketing Course?</summary>
              <p>
                We offer the <b>AI Diploma Program in Digital Marketing Intelligence (DMI)</b> with
                a diploma from a UGC approved university, plus three Certification Programs:{" "}
                <b>Master in Digital Marketing (MIDM)</b> with 500+ hours of practical training and a
                2-month internship, <b>Advanced Digital Marketing (AIDM)</b> with 140+ hours of
                training, and <b>Professional in Digital Marketing</b> with a customized module.
                Weekday, weekend and online batches are available. Request a callback for the exact
                duration and batch dates.
              </p>
            </details>
            <details>
              <summary>Do I need any prior experience or technical background?</summary>
              <p>
                No. The course starts from the basics, so students, freshers, professionals and
                business owners from any background can join.
              </p>
            </details>
            <details>
              <summary>Do you provide placement assistance?</summary>
              <p>
                Yes. We provide 100% placement assistance including resume building, mock interviews
                and interview opportunities with our hiring partners.
              </p>
            </details>
            <details>
              <summary>Which certifications will I get?</summary>
              <p>
                You'll receive the DIDM course certificate and be prepared for industry
                certifications such as Google Ads, Google Analytics and Meta Blueprint.
              </p>
            </details>
            <details>
              <summary>Can I attend a demo class before enrolling?</summary>
              <p>
                Absolutely. Book a free demo class using the form above and experience our teaching
                style first.
              </p>
            </details>
            <details>
              <summary>Is EMI available for the course fee?</summary>
              <p>
                Yes, easy EMI options are available. Speak to our counsellor for details on current
                offers.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="band">
        <div className="wrap bgrid">
          <div className="btext">
            <h2>Start Your AI Powered Digital Marketing Career Today</h2>
            <p>Seats fill fast. Book your free demo class and get a personalised career plan.</p>
            <ul className="bticks">
              <li>Full 50+ module syllabus</li>
              <li>Fees, EMI options &amp; batch timings</li>
              <li>30+ certifications &amp; placement details</li>
            </ul>
            <div className="btns">
              <a className="btn" href="tel:+918447222054">
                📞 Book Free Demo Class
              </a>
              <a href="tel:+918447222054" className="btn ghost">
                📞 Call Now
              </a>
            </div>
          </div>
          <div className="bform">
            {!bandSuccess ? (
              <form onSubmit={handleBandSubmit} noValidate>
                <h3>📄 Download Brochure</h3>
                <p>Get the full syllabus, fees and batch details on email &amp; WhatsApp.</p>
                {bandError && (
                  <div style={{ color: "#bf282f", fontSize: "0.85rem", marginBottom: "8px" }}>
                    {bandError}
                  </div>
                )}
                <label htmlFor="bname">Full Name*</label>
                <input
                  id="bname"
                  name="name"
                  required
                  placeholder="Enter your name"
                  value={bandForm.name}
                  onChange={(e) => setBandForm({ ...bandForm, name: e.target.value })}
                />
                <label htmlFor="bphone">Mobile Number*</label>
                <input
                  id="bphone"
                  name="phone"
                  type="tel"
                  required
                  maxLength={10}
                  placeholder="10-digit mobile number"
                  value={bandForm.phone}
                  onChange={(e) =>
                    setBandForm({
                      ...bandForm,
                      phone: e.target.value.replace(/\D/g, "").slice(0, 10),
                    })
                  }
                />
                <label htmlFor="bemail">Email*</label>
                <input
                  id="bemail"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={bandForm.email}
                  onChange={(e) => setBandForm({ ...bandForm, email: e.target.value })}
                />
                <label htmlFor="bcourse">Interested Course*</label>
                <select
                  id="bcourse"
                  name="course"
                  required
                  value={bandForm.course}
                  onChange={(e) => setBandForm({ ...bandForm, course: e.target.value })}
                >
                  <option value="">Select a course</option>
                  <option value="AI Diploma – Digital Marketing Intelligence (DMI)">
                    AI Diploma – Digital Marketing Intelligence (DMI)
                  </option>
                  <option value="Master in Digital Marketing (MIDM)">
                    Master in Digital Marketing (MIDM)
                  </option>
                  <option value="Advanced Digital Marketing (AIDM)">
                    Advanced Digital Marketing (AIDM)
                  </option>
                  <option value="Professional in Digital Marketing">
                    Professional in Digital Marketing
                  </option>
                  <option value="Not sure – need guidance">Not sure – need guidance</option>
                </select>
                <button className="btn cta" type="submit" disabled={bandLoading}>
                  {bandLoading ? "Submitting..." : "Download Brochure →"}
                </button>
                <small>🔒 No spam. Your details are safe with us.</small>
              </form>
            ) : (
              <div className="form-ok">
                <b>✓ Thank you!</b>
                The brochure is on its way to your email and WhatsApp.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="copy">© 2026 DIDM. All rights reserved.</div>
        </div>
      </footer>

      {/* MOBILE STICKY BAR */}
      <div className="mbar">
        <a href="tel:+918447222054" className="call">
          📞 Call Now
        </a>
        <a href="#enquire" className="enq">
          Enquire Now
        </a>
      </div>

      {/* FLOATING WHATSAPP */}
      <a
        className="noida-wa"
        href="https://wa.me/918447222054?text=Hi%2C%20I%27m%20interested%20in%20the%20AI%20Powered%20Digital%20Marketing%20Course%20in%20Noida"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32">
          <path d="M16 3C9 3 3.3 8.7 3.3 15.7c0 2.2.6 4.4 1.7 6.3L3 29l7.2-1.9c1.8 1 3.9 1.5 5.9 1.5 7 0 12.7-5.7 12.7-12.7S23 3 16 3zm0 23.2c-1.9 0-3.8-.5-5.4-1.5l-.4-.2-4.3 1.1 1.1-4.2-.3-.4c-1.1-1.7-1.6-3.6-1.6-5.6C5.1 9.9 10 5.1 16 5.1S26.9 10 26.9 15.9 22 26.2 16 26.2zm6-7.7c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1c-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.3s0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.6.1-.2 0-.4 0-.6s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.1-1.2 2.7 1.2 3.2 1.4 3.4c.2.2 2.4 3.6 5.7 5 2.8 1.1 3.4.9 4 .8.6-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z" />
        </svg>
      </a>

      {/* LEAD MODAL */}
      {modal.isOpen && (
        <div
          className="noida-modal"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="mbox">
            <button
              className="mclose"
              type="button"
              aria-label="Close"
              onClick={closeModal}
            >
              ×
            </button>
            {!modalSuccess ? (
              <form onSubmit={handleModalSubmit} noValidate>
                <h3>{activeCopy.title}</h3>
                {modal.course && !modal.course.startsWith("Not sure") && (
                  <div className="mcourse">{modal.course}</div>
                )}
                <p className="msub">{activeCopy.sub}</p>

                {modalError && (
                  <div style={{ color: "#bf282f", fontSize: "0.85rem", marginBottom: "8px" }}>
                    {modalError}
                  </div>
                )}

                <label htmlFor="mname">Full Name*</label>
                <input
                  id="mname"
                  name="name"
                  required
                  placeholder="Enter your name"
                  value={modalForm.name}
                  onChange={(e) => setModalForm({ ...modalForm, name: e.target.value })}
                  autoFocus
                />
                <label htmlFor="mphone">Mobile Number*</label>
                <input
                  id="mphone"
                  name="phone"
                  type="tel"
                  required
                  maxLength={10}
                  placeholder="10-digit mobile number"
                  value={modalForm.phone}
                  onChange={(e) =>
                    setModalForm({
                      ...modalForm,
                      phone: e.target.value.replace(/\D/g, "").slice(0, 10),
                    })
                  }
                />
                <label htmlFor="memail">Email*</label>
                <input
                  id="memail"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={modalForm.email}
                  onChange={(e) => setModalForm({ ...modalForm, email: e.target.value })}
                />
                <label htmlFor="mmode">Preferred Mode</label>
                <select
                  id="mmode"
                  name="mode"
                  value={modalForm.mode}
                  onChange={(e) => setModalForm({ ...modalForm, mode: e.target.value })}
                >
                  <option>Classroom</option>
                  <option>Live Online</option>
                </select>
                <button className="btn" type="submit" disabled={modalLoading}>
                  {modalLoading ? "Submitting..." : activeCopy.btn}
                </button>
                <small>🔒 No spam. Your details are safe with us.</small>
              </form>
            ) : (
              <div className="form-ok">
                <b>✓ Thank you!</b>
                <span>{activeCopy.ok}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
