"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, ArrowRight, BarChart, Calendar, Share2, ChevronDown, Plus, Copy, Link2, Users, Clock, FileText, TrendingUp, Check, Zap, Expand, GraduationCap, BookOpen, ClipboardCheck, FileQuestion, GraduationCap as GradCap, IndianRupee, LayoutDashboard } from "lucide-react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function StickyFeatureSection() {
  const [isMobile, setIsMobile] = useState(false);
  const introRef = useRef<HTMLDivElement>(null);
  const tabsWrapperRef = useRef<HTMLDivElement>(null);
  const stickyContainerRef = useRef<HTMLDivElement>(null);
  const textSection1Ref = useRef<HTMLDivElement>(null);
  const textSection2Ref = useRef<HTMLDivElement>(null);
  const textSection3Ref = useRef<HTMLDivElement>(null);
  const video1Ref = useRef<HTMLDivElement>(null);
  const video2Ref = useRef<HTMLDivElement>(null);
  const video3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || isMobile) return;

    const ctx = gsap.context(() => {
      // Pin the intro text section
      ScrollTrigger.create({
        trigger: introRef.current,
        start: "top top",
        end: "bottom top",
        pin: ".intro-text-content",
        pinSpacing: false,
      });

      // Main sticky section with scroll-driven content changes
      const stickyTrigger = ScrollTrigger.create({
        trigger: tabsWrapperRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: stickyContainerRef.current,
        pinSpacing: false,
      });

      // Calculate scroll distances for 3 sections
      const totalHeight = tabsWrapperRef.current?.offsetHeight || 0;
      const sectionHeight = totalHeight / 3;

      // Section 1: Initial state (text 1 + video 1 visible)
      gsap.set(textSection1Ref.current, { opacity: 1, pointerEvents: "auto" });
      gsap.set(video1Ref.current, { opacity: 1, y: 0 });
      gsap.set(textSection2Ref.current, { opacity: 0, pointerEvents: "none" });
      gsap.set(textSection3Ref.current, { opacity: 0, pointerEvents: "none" });
      gsap.set(video2Ref.current, { opacity: 0, y: 50 });
      gsap.set(video3Ref.current, { opacity: 0, y: 50 });

      // Transition from Section 1 to Section 2
      ScrollTrigger.create({
        trigger: tabsWrapperRef.current,
        start: "top top",
        end: `+=${sectionHeight}`,
        onUpdate: (self) => {
          const progress = self.progress;
          
          // Fade out text 1, fade in text 2
          gsap.to(textSection1Ref.current, {
            opacity: 1 - progress,
            duration: 0.1,
            overwrite: true,
          });
          gsap.to(textSection2Ref.current, {
            opacity: progress,
            duration: 0.1,
            overwrite: true,
          });

          // Fade out video 1, fade in video 2
          gsap.to(video1Ref.current, {
            opacity: 1 - progress,
            y: -50 * progress,
            duration: 0.1,
            overwrite: true,
          });
          gsap.to(video2Ref.current, {
            opacity: progress,
            y: 50 - 50 * progress,
            duration: 0.1,
            overwrite: true,
          });

          // Update pointer events
          if (progress > 0.5) {
            gsap.set(textSection1Ref.current, { pointerEvents: "none" });
            gsap.set(textSection2Ref.current, { pointerEvents: "auto" });
          } else {
            gsap.set(textSection1Ref.current, { pointerEvents: "auto" });
            gsap.set(textSection2Ref.current, { pointerEvents: "none" });
          }
        },
      });

      // Transition from Section 2 to Section 3
      ScrollTrigger.create({
        trigger: tabsWrapperRef.current,
        start: `top+=${sectionHeight} top`,
        end: `+=${sectionHeight}`,
        onUpdate: (self) => {
          const progress = self.progress;
          
          // Fade out text 2, fade in text 3
          gsap.to(textSection2Ref.current, {
            opacity: 1 - progress,
            duration: 0.1,
            overwrite: true,
          });
          gsap.to(textSection3Ref.current, {
            opacity: progress,
            duration: 0.1,
            overwrite: true,
          });

          // Fade out video 2, fade in video 3
          gsap.to(video2Ref.current, {
            opacity: 1 - progress,
            y: -50 * progress,
            duration: 0.1,
            overwrite: true,
          });
          gsap.to(video3Ref.current, {
            opacity: progress,
            y: 50 - 50 * progress,
            duration: 0.1,
            overwrite: true,
          });

          // Update pointer events
          if (progress > 0.5) {
            gsap.set(textSection2Ref.current, { pointerEvents: "none" });
            gsap.set(textSection3Ref.current, { pointerEvents: "auto" });
          } else {
            gsap.set(textSection2Ref.current, { pointerEvents: "auto" });
            gsap.set(textSection3Ref.current, { pointerEvents: "none" });
          }
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, [isMobile]);

  // Mobile version - simple stacked layout
  if (isMobile) {
    return (
      <div id="intelligent-features" className="bg-white scroll-mt-20 pt-2 pb-16">
        {/* Header */}
        <div className="text-center px-4 max-w-5xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-slate-600" />
            <span className="text-sm font-medium text-slate-700">Intelligent Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-slate-900">
            Designed for real-world
            <br />
            education workflows
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-3xl mx-auto">
            From setup to daily use, Praband streamlines academic workflows — making attendance, exams, and reporting feel simple from day one.
          </p>
        </div>

        {/* Section 1 */}
        <div className="px-4 mb-12">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-[#00171f] rounded-3xl p-6 md:p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                Designed for real-world education workflows
              </h3>
              <p className="text-sm md:text-base text-gray-200 mb-6 leading-relaxed">
                From setup to daily use, Praband streamlines academic workflows — making attendance, exams, and reporting feel simple from day one.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#00a7e1] flex items-center justify-center">
                  <Check className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-[#00a7e1] flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-[#00a7e1] flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
              </div>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.querySelector("#contact");
                  if (contactSection) {
                    const offset = 100;
                    const elementPosition = contactSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
                className="px-6 py-3 bg-[#00a7e1] text-white rounded-lg font-medium hover:bg-[#007ea7] transition-colors"
              >
                Get started with Praband
              </button>
            </div>
            
            {/* Cards Grid */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900">Overall Application Summary</h3>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                  <div className="w-8 h-8 bg-[#00a7e1]/20 rounded-lg flex items-center justify-center mb-2">
                    <BookOpen className="w-4 h-4 text-[#00a7e1]" />
                  </div>
                  <div className="text-xs text-gray-500 mb-1">Courses</div>
                  <div className="text-xl font-bold text-gray-900">24</div>
                </div>
                <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                  <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center mb-2">
                    <ClipboardCheck className="w-4 h-4 text-cyan-600" />
                  </div>
                  <div className="text-xs text-gray-500 mb-1">Assignments</div>
                  <div className="text-xl font-bold text-gray-900">8</div>
                </div>
                <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                    <FileQuestion className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="text-xs text-gray-500 mb-1">Quizzes</div>
                  <div className="text-xl font-bold text-gray-900">7</div>
                </div>
                <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                    <FileText className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="text-xs text-gray-500 mb-1">Exams</div>
                  <div className="text-xl font-bold text-gray-900">25</div>
                </div>
                <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mb-2">
                    <Users className="w-4 h-4 text-orange-600" />
                  </div>
                  <div className="text-xs text-gray-500 mb-1">Students</div>
                  <div className="text-xl font-bold text-gray-900">24</div>
                </div>
                <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mb-2">
                    <GradCap className="w-4 h-4 text-red-600" />
                  </div>
                  <div className="text-xs text-gray-500 mb-1">Teachers</div>
                  <div className="text-xl font-bold text-gray-900">76</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="px-4 mb-12">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-[#00171f] rounded-3xl p-6 md:p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                Complete student & teacher management
              </h3>
              <p className="text-sm md:text-base text-gray-200 mb-6 leading-relaxed">
                Manage profiles, track performance, and organize your institution with intuitive interfaces designed for educators.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#00a7e1] flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-[#00a7e1] flex items-center justify-center">
                  <GradCap className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-[#00a7e1] flex items-center justify-center">
                  <BarChart className="w-5 h-5" />
                </div>
              </div>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.querySelector("#contact");
                  if (contactSection) {
                    const offset = 100;
                    const elementPosition = contactSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
                className="px-6 py-3 bg-[#00a7e1] text-white rounded-lg font-medium hover:bg-[#007ea7] transition-colors"
              >
                Get started with Praband
              </button>
            </div>
            
            {/* Student/Teacher Cards */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Student & Teacher Management</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Arjun Verma', course: 'Grade 10', type: 'student' },
                  { name: 'Priya Sharma', course: 'Grade 11', type: 'student' },
                  { name: 'Prof. Singh', subject: 'Mathematics', type: 'teacher' },
                  { name: 'Dr. Sharma', subject: 'Physics', type: 'teacher' }
                ].map((item, i) => (
                  <div key={i} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-3 shadow-md border border-gray-100">
                    <div className="relative mb-2">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-[#00a7e1] via-[#007ea7] to-[#003459] mx-auto`}></div>
                      <div className={`absolute -bottom-1 -right-1 w-5 h-5 ${item.type === 'student' ? 'bg-[#003459]' : 'bg-orange-500'} rounded-full border-2 border-white flex items-center justify-center`}>
                        {item.type === 'student' ? <Check className="w-2.5 h-2.5 text-white" /> : <GradCap className="w-2.5 h-2.5 text-white" />}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900 text-xs mb-1">{item.name}</div>
                      <div className="text-xs text-gray-500">{item.type === 'student' ? item.course : item.subject}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-[#00171f] rounded-3xl p-6 md:p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                AI-powered question generation
              </h3>
              <p className="text-sm md:text-base text-gray-200 mb-6 leading-relaxed">
                Generate exam questions instantly with AI, manage your question bank, and create courses—all in one powerful platform.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#00a7e1] flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-[#00a7e1] flex items-center justify-center">
                  <FileQuestion className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-[#00a7e1] flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
              </div>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.querySelector("#contact");
                  if (contactSection) {
                    const offset = 100;
                    const elementPosition = contactSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
                className="px-6 py-3 bg-[#00a7e1] text-white rounded-lg font-medium hover:bg-[#007ea7] transition-colors"
              >
                Get started with Praband
              </button>
            </div>
            
            {/* AI Question Card */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">AI Search</h3>
              <div className="bg-gray-50 rounded-lg p-3 mb-3">
                <div className="text-xs text-gray-500 mb-1">Disclaimer</div>
                <div className="text-xs text-gray-700">
                  Questions are generated by AI. Please review and verify them before use.
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs font-medium">Medium</span>
                  <span className="text-xs text-gray-500">ID: #12345</span>
                </div>
                <h4 className="font-bold text-sm text-gray-900 mb-2">Shakespearean Tragedy Quote</h4>
                <p className="text-xs text-gray-700 mb-2">
                  Which of William Shakespeare&apos;s tragedies features the famous soliloquy that begins with the line, &apos;To be, or not to be, that is the question&apos;?
                </p>
                <div className="space-y-1 mb-2">
                  {['A. Romeo and Juliet', 'B. Othello', 'C. Hamlet', 'D. Macbeth'].map((opt) => (
                    <div key={opt} className={`text-xs p-2 rounded ${opt.includes('C.') ? 'bg-green-50 border border-green-200' : 'bg-gray-50'}`}>
                      {opt}
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 flex-wrap mb-2">
                  {['Shakespeare', 'Tragedy', 'Hamlet'].map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-[#00a7e1]/20 text-[#00a7e1] rounded text-xs">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 bg-[#00a7e1]/20 text-[#00a7e1] rounded-lg text-xs flex-1">Edit</button>
                  <button className="px-3 py-1.5 bg-green-600 text-white rounded-lg text-xs flex-1">Add to Bank</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Desktop version - parallax scrolling
  return (
    <div id="intelligent-features" className="bg-white scroll-mt-20 pt-2">
      {/* Intro Wrapper - Pinned Text Section */}
      <div
        ref={introRef}
        className="relative flex items-center justify-center bg-gradient-to-b from-white via-gray-50 to-white"
        style={{ height: "90vh" }}
      >
        <div className="intro-text-content text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-slate-600" />
            <span className="text-sm font-medium text-slate-700">Intelligent Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-slate-900">
            Designed for real-world
            <br />
            education workflows
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto">
            From setup to daily use, Praband streamlines academic workflows — making attendance, exams, and reporting feel simple from day one.
          </p>
        </div>
      </div>

      {/* Sticky Tabs Section - Very Tall Scrolling Container */}
      <div
        ref={tabsWrapperRef}
        className="relative bg-white"
        style={{ height: "550vh" }}
      >
        {/* Sticky Container - Fixed During Scroll */}
        <div
          ref={stickyContainerRef}
          className="sticky top-0 w-full h-screen overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full">
            {/* Left Side - Text Content */}
            <div className="relative flex items-center justify-center p-8 lg:p-16 bg-white">
              {/* Dot pattern background */}
              <div 
                className="absolute inset-0 opacity-[0.15]" 
                style={{ 
                  backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', 
                  backgroundSize: '20px 20px' 
                }}
              />
              <div className="relative w-full max-w-xl z-10">
                {/* Text Section 1 */}
                <div
                  ref={textSection1Ref}
                  className="absolute inset-0 flex flex-col justify-center space-y-6"
                >
                  <div className="bg-[#00171f] rounded-3xl p-8 lg:p-12 text-white">
                    <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                      Designed for real-world education workflows
                    </h3>
                    <p className="text-base lg:text-lg text-gray-200 mb-8 leading-relaxed">
                      From setup to daily use, Praband streamlines academic workflows — making attendance, exams, and reporting feel simple from day one.
                    </p>
                    
                    {/* Icons */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-10 h-10 rounded-full bg-[#00a7e1] flex items-center justify-center">
                        <Check className="w-5 h-5" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#00a7e1] flex items-center justify-center">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#00a7e1] flex items-center justify-center">
                        <Users className="w-5 h-5" />
                      </div>
                    </div>
                    
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        const contactSection = document.querySelector("#contact");
                        if (contactSection) {
                          const offset = 100;
                          const elementPosition = contactSection.getBoundingClientRect().top;
                          const offsetPosition = elementPosition + window.pageYOffset - offset;
                          window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth",
                          });
                        }
                      }}
                      className="px-6 py-3 bg-[#00a7e1] text-white rounded-lg font-medium hover:bg-[#007ea7] transition-colors"
                    >
                      Get started with Praband
                    </button>
                  </div>
                </div>

                {/* Text Section 2 */}
                <div
                  ref={textSection2Ref}
                  className="absolute inset-0 flex flex-col justify-center space-y-6"
                >
                  <div className="bg-[#00171f] rounded-3xl p-8 lg:p-12 text-white">
                    <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                      Complete student & teacher management
                    </h3>
                    <p className="text-base lg:text-lg text-gray-200 mb-8 leading-relaxed">
                      Manage profiles, track performance, and organize your institution with intuitive interfaces designed for educators.
                    </p>
                    
                    {/* Icons */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-10 h-10 rounded-full bg-[#00a7e1] flex items-center justify-center">
                        <Users className="w-5 h-5" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#00a7e1] flex items-center justify-center">
                        <GradCap className="w-5 h-5" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#00a7e1] flex items-center justify-center">
                        <BarChart className="w-5 h-5" />
                      </div>
                    </div>
                    
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        const contactSection = document.querySelector("#contact");
                        if (contactSection) {
                          const offset = 100;
                          const elementPosition = contactSection.getBoundingClientRect().top;
                          const offsetPosition = elementPosition + window.pageYOffset - offset;
                          window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth",
                          });
                        }
                      }}
                      className="px-6 py-3 bg-[#00a7e1] text-white rounded-lg font-medium hover:bg-[#007ea7] transition-colors"
                    >
                      Get started with Praband
                    </button>
                  </div>
                </div>

                {/* Text Section 3 */}
                <div
                  ref={textSection3Ref}
                  className="absolute inset-0 flex flex-col justify-center space-y-6"
                >
                  <div className="bg-[#00171f] rounded-3xl p-8 lg:p-12 text-white">
                    <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                      AI-powered question generation
                    </h3>
                    <p className="text-base lg:text-lg text-gray-200 mb-8 leading-relaxed">
                      Generate exam questions instantly with AI, manage your question bank, and create courses—all in one powerful platform.
                    </p>
                    
                    {/* Icons */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-10 h-10 rounded-full bg-[#00a7e1] flex items-center justify-center">
                        <Zap className="w-5 h-5" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#00a7e1] flex items-center justify-center">
                        <FileQuestion className="w-5 h-5" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#00a7e1] flex items-center justify-center">
                        <BookOpen className="w-5 h-5" />
                      </div>
                    </div>
                    
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        const contactSection = document.querySelector("#contact");
                        if (contactSection) {
                          const offset = 100;
                          const elementPosition = contactSection.getBoundingClientRect().top;
                          const offsetPosition = elementPosition + window.pageYOffset - offset;
                          window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth",
                          });
                        }
                      }}
                      className="px-6 py-3 bg-[#00a7e1] text-white rounded-lg font-medium hover:bg-[#007ea7] transition-colors"
                    >
                      Get started with Praband
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Feature Cards Grid */}
            <div className="relative flex items-center justify-center bg-white p-8 lg:p-16">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Subtle dot pattern background */}
                <div 
                  className="absolute inset-0 opacity-[0.15]" 
                  style={{ 
                    backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', 
                    backgroundSize: '20px 20px' 
                  }}
                />
                {/* Section 1 - Dashboard Overview (Your Portal Design) */}
                <div
                  ref={video1Ref}
                  className="absolute inset-0 flex items-center justify-center z-10 p-4 overflow-y-auto"
                >
                  <div className="w-full max-w-4xl space-y-6">
                    {/* Overall Application Summary Cards */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Overall Application Summary</h3>
                      <div className="grid grid-cols-3 gap-4">
                        {/* Courses */}
                        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                          <div className="w-10 h-10 bg-[#00a7e1]/20 rounded-lg flex items-center justify-center mb-3">
                            <BookOpen className="w-5 h-5 text-[#00a7e1]" />
                          </div>
                          <div className="text-sm text-gray-500 mb-1">Courses</div>
                          <div className="text-2xl font-bold text-gray-900">24</div>
                        </div>
                        
                        {/* Assignments */}
                        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                          <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mb-3">
                            <ClipboardCheck className="w-5 h-5 text-cyan-600" />
                          </div>
                          <div className="text-sm text-gray-500 mb-1">Assignments</div>
                          <div className="text-2xl font-bold text-gray-900">8</div>
                        </div>
                        
                        {/* Quizzes */}
                        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                            <FileQuestion className="w-5 h-5 text-purple-600" />
                          </div>
                          <div className="text-sm text-gray-500 mb-1">Quizzes</div>
                          <div className="text-2xl font-bold text-gray-900">7</div>
                        </div>
                        
                        {/* Exams */}
                        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                            <FileText className="w-5 h-5 text-green-600" />
                          </div>
                          <div className="text-sm text-gray-500 mb-1">Exams</div>
                          <div className="text-2xl font-bold text-gray-900">25</div>
                        </div>
                        
                        {/* Students */}
                        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                            <Users className="w-5 h-5 text-orange-600" />
                          </div>
                          <div className="text-sm text-gray-500 mb-1">Students</div>
                          <div className="text-2xl font-bold text-gray-900">24</div>
                        </div>
                        
                        {/* Teachers */}
                        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-3">
                            <GradCap className="w-5 h-5 text-red-600" />
                          </div>
                          <div className="text-sm text-gray-500 mb-1">Teachers</div>
                          <div className="text-2xl font-bold text-gray-900">76</div>
                        </div>
                      </div>
                    </div>

                    {/* Popular/Trending Courses Chart */}
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Popular/Trending Courses</h3>
                      <div className="space-y-2">
                        {['SQL and Database Fundamentals', 'Python Programming - Advanced', 'Java Programming Essentials'].map((course, idx) => (
                          <div key={course} className="flex items-center gap-3">
                            <div className="flex-1">
                              <div className="text-sm text-gray-700 mb-1">{course}</div>
                              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-[#00a7e1] rounded-full" 
                                  style={{ width: `${100 - idx * 15}%` }}
                                ></div>
                              </div>
                            </div>
                            <div className="w-3 h-3 bg-[#00a7e1] rounded"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 2 - Student/Teacher Management (Enhanced Showcase) */}
                <div
                  ref={video2Ref}
                  className="absolute inset-0 flex items-center justify-center z-10 p-4 overflow-y-auto"
                >
                  <div className="w-full max-w-5xl space-y-8">
                    {/* Student Management Grid */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">Student Management</h3>
                          <p className="text-sm text-gray-500">Manage and track all your students</p>
                        </div>
                        <div className="bg-[#00a7e1]/10 px-4 py-2 rounded-lg">
                          <div className="text-xs text-gray-500 mb-1">Total Students</div>
                          <div className="text-2xl font-bold text-[#00a7e1]">24</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 gap-4">
                        {[
                          { name: 'Arjun Verma', course: 'Grade 10' },
                          { name: 'Priya Sharma', course: 'Grade 11' },
                          { name: 'Rohan Kumar', course: 'Grade 9' },
                          { name: 'Kavya Patel', course: 'Grade 12' }
                        ].map((student, i) => (
                          <div key={i} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all cursor-pointer group">
                            <div className="relative mb-3">
                              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00a7e1] via-[#007ea7] to-[#003459] mx-auto group-hover:scale-110 transition-transform shadow-lg"></div>
                              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#003459] rounded-full border-2 border-white flex items-center justify-center">
                                <Check className="w-3 h-3 text-white" />
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="font-semibold text-gray-900 text-sm mb-1">{student.name}</div>
                              <div className="text-xs text-gray-500 mb-2">{student.course}</div>
                              <div className="flex items-center justify-center gap-1 text-xs text-[#00a7e1]">
                                <BarChart className="w-3 h-3" />
                                <span>View Profile</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Teacher Management Grid */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">Teacher Management</h3>
                          <p className="text-sm text-gray-500">Organize your teaching staff</p>
                        </div>
                        <div className="bg-purple-50 px-4 py-2 rounded-lg">
                          <div className="text-xs text-gray-500 mb-1">Total Teachers</div>
                          <div className="text-2xl font-bold text-purple-600">76</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 gap-4">
                        {[
                          { name: 'Prof. Singh', subject: 'Mathematics' },
                          { name: 'Dr. Sharma', subject: 'Physics' },
                          { name: 'Ms. Patel', subject: 'Chemistry' },
                          { name: 'Mr. Kumar', subject: 'Biology' }
                        ].map((teacher, i) => (
                          <div key={i} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all cursor-pointer group">
                            <div className="relative mb-3">
                              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00a7e1] via-[#007ea7] to-[#00a7e1] mx-auto group-hover:scale-110 transition-transform shadow-lg"></div>
                              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center">
                                <GradCap className="w-3 h-3 text-white" />
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="font-semibold text-gray-900 text-sm mb-1">{teacher.name}</div>
                              <div className="text-xs text-gray-500 mb-2">{teacher.subject}</div>
                              <div className="flex items-center justify-center gap-1 text-xs text-purple-600">
                                <Users className="w-3 h-3" />
                                <span>View Details</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 3 - AI Question Bank & Courses (Your Portal Design) */}
                <div
                  ref={video3Ref}
                  className="absolute inset-0 flex items-center justify-center z-10 p-4 overflow-y-auto"
                >
                  <div className="w-full max-w-4xl space-y-6">
                    {/* AI Search / Question Bank */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">AI Search</h3>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">Search</button>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4 mb-4">
                        <div className="text-xs text-gray-500 mb-2">Disclaimer</div>
                        <div className="text-sm text-gray-700">
                          Questions are generated by AI. Please review and verify them before use to ensure accuracy and appropriateness.
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs font-medium">Medium</span>
                          <span className="text-xs text-gray-500">ID: #12345</span>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">Shakespearean Tragedy Quote</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          Which of William Shakespeare&apos;s tragedies features the famous soliloquy that begins with the line, &apos;To be, or not to be, that is the question&apos;?
                        </p>
                        <div className="space-y-2 mb-3">
                          {['A. Romeo and Juliet', 'B. Othello', 'C. Hamlet', 'D. Macbeth'].map((opt) => (
                            <div key={opt} className={`text-sm p-2 rounded ${opt.includes('C.') ? 'bg-green-50 border border-green-200' : 'bg-gray-50'}`}>
                              {opt}
                            </div>
                          ))}
                        </div>
                        <div className="flex gap-2 flex-wrap mb-3">
                          {['Shakespeare', 'Tragedy', 'Hamlet', 'Literature'].map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-[#00a7e1]/20 text-[#00a7e1] rounded text-xs">{tag}</span>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <button className="px-4 py-2 bg-[#00a7e1]/20 text-[#00a7e1] rounded-lg text-sm">Edit Question</button>
                          <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm">Add to Question Bank</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

