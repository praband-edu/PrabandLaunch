"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollReveal, staggerContainer, slideUp, fadeIn } from "@/lib/animations";
import {
  Users,
  GraduationCap,
  User,
  Settings,
  BookOpen,
  ClipboardCheck,
  BarChart,
  DollarSign,
  TrendingUp,
  Award,
  FileText,
  Calendar,
  Brain,
  Eye,
  Target,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Activity,
  Clock,
  CheckCircle,
  AlertCircle,
  PieChart,
  LineChart,
} from "lucide-react";

type Role = "admin" | "teacher" | "student";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const roleFeatures: Record<Role, { title: string; subtitle: string; features: Feature[]; story: string; imagePlaceholder: string }> = {
  admin: {
    title: "Admin Features",
    subtitle: "Complete control and insights for institutional management",
    story: "As an admin, you have complete visibility and control over your institution. Manage your entire academic ecosystem from one powerful dashboard, track financial health, monitor teacher performance, and ensure smooth operations across all departments.",
    imagePlaceholder: "/admin-dashboard.png",
    features: [
      {
        icon: <Users className="w-5 h-5" />,
        title: "Teacher Management",
        description: "Onboard, manage, and monitor teachers with comprehensive profiles and activity tracking",
      },
      {
        icon: <GraduationCap className="w-5 h-5" />,
        title: "Student Management",
        description: "Enroll students, organize batches, and track their academic activity in real-time",
      },
      {
        icon: <BookOpen className="w-5 h-5" />,
        title: "Course Management",
        description: "Create and assign courses, subjects, and Self Learning Materials (SLM) with ease",
      },
      {
        icon: <BarChart className="w-5 h-5" />,
        title: "Central Dashboard",
        description: "Monitor key activity metrics and institutional performance at a glance",
      },
      {
        icon: <DollarSign className="w-5 h-5" />,
        title: "Revenue Tracking",
        description: "Track fee collections, financial trends, and revenue analytics",
      },
      {
        icon: <TrendingUp className="w-5 h-5" />,
        title: "Teacher Contribution Insights",
        description: "Analyze content creation, exam quality, and teaching outcomes",
      },
      {
        icon: <Award className="w-5 h-5" />,
        title: "Top Performers",
        description: "Identify and celebrate best students and teachers with performance rankings",
      },
    ],
  },
  teacher: {
    title: "Teacher Features",
    subtitle: "Powerful tools to create, evaluate, and analyze",
    story: "Empower your teaching with intelligent tools that save time and enhance student outcomes. Create comprehensive question banks, design flexible exams, and gain deep insights into student performance—all while letting AI assist in content creation.",
    imagePlaceholder: "/teacher-dashboard.png",
    features: [
      {
        icon: <FileText className="w-5 h-5" />,
        title: "Question Bank Creation",
        description: "Build structured question banks with topical categorization for easy organization",
      },
      {
        icon: <ClipboardCheck className="w-5 h-5" />,
        title: "Exam & Quiz Creation",
        description: "Create exams, quizzes, and assignments with flexible settings and configurations",
      },
      {
        icon: <BarChart className="w-5 h-5" />,
        title: "Analysis Dashboard",
        description: "Get detailed exam insights at batch, class, and individual student levels",
      },
      {
        icon: <CheckCircle2 className="w-5 h-5" />,
        title: "Assignment Evaluation",
        description: "Evaluate and track assignment status with streamlined workflows",
      },
      {
        icon: <Calendar className="w-5 h-5" />,
        title: "Smart Calendar",
        description: "Plan classes and schedule events with an intelligent calendar system",
      },
      {
        icon: <Brain className="w-5 h-5" />,
        title: "AI Question Suggestions",
        description: "Speed up content creation with AI-generated question suggestions",
      },
    ],
  },
  student: {
    title: "Student Features",
    subtitle: "Learn, practice, and track your progress",
    story: "Experience a seamless learning journey designed around your success. Take exams with confidence, submit assignments digitally, and track your progress with detailed analytics. Stay organized with interactive calendars and access learning materials anytime, anywhere.",
    imagePlaceholder: "/student-dashboard.png",
    features: [
      {
        icon: <ClipboardCheck className="w-5 h-5" />,
        title: "Online Exams & Quizzes",
        description: "Take exams and quizzes through an intuitive, guided interface",
      },
      {
        icon: <FileText className="w-5 h-5" />,
        title: "Digital Assignment Submission",
        description: "Submit assignments and projects digitally with ease",
      },
      {
        icon: <BarChart className="w-5 h-5" />,
        title: "Personal Analytics",
        description: "View detailed result analytics and personalized performance feedback",
      },
      {
        icon: <Calendar className="w-5 h-5" />,
        title: "Interactive Calendar",
        description: "Track deadlines, exams, and events with an interactive calendar",
      },
      {
        icon: <BookOpen className="w-5 h-5" />,
        title: "Access SLM",
        description: "Access Self Learning Materials for independent study",
      },
      {
        icon: <Target className="w-5 h-5" />,
        title: "Progress Dashboard",
        description: "Monitor your progress and rankings for motivation and improvement",
      },
    ],
  },
};

export default function RoleFeaturesSection() {
  const [activeRole, setActiveRole] = useState<Role>("admin");

  return (
    <section id="role-features" className="bg-gradient-to-b from-white via-gray-50 to-white pt-2 sm:pt-4 lg:pt-6 pb-12 sm:pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          {...scrollReveal}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Sparkles className="w-4 h-4 text-slate-600" fill="currentColor" fillOpacity={0.2} />
            <span className="text-sm font-medium text-slate-700">Role-Based Features</span>
          </motion.div>
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-slate-900 px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Features Tailored for Every Role
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-slate-500 max-w-3xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover how Praband empowers admins, teachers, and students with role-specific tools designed for success
          </motion.p>
        </motion.div>

        {/* Role Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {(["admin", "teacher", "student"] as Role[]).map((role) => (
            <motion.button
              key={role}
              onClick={() => setActiveRole(role)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-200 text-sm sm:text-base ${
                activeRole === role
                  ? "bg-[#00a7e1] text-white shadow-lg scale-105"
                  : "bg-white text-[#00171f] border border-gray-200 hover:border-[#00a7e1]/20 hover:bg-[#00a7e1]/5"
              }`}
              variants={slideUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-2">
                {role === "admin" && <Settings className="w-3 h-3 sm:w-4 sm:h-4" />}
                {role === "teacher" && <User className="w-3 h-3 sm:w-4 sm:h-4" />}
                {role === "student" && <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4" />}
                <span className="capitalize">{role}</span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Active Role Content */}
        <motion.div 
          className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
          key={activeRole}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Side - Story & Features */}
            <motion.div 
              className="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Story Section */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2 sm:mb-3">
                  {roleFeatures[activeRole].title}
                </h3>
                <p className="text-slate-600 mb-3 sm:mb-4 text-base sm:text-lg">
                  {roleFeatures[activeRole].subtitle}
                </p>
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                  {roleFeatures[activeRole].story}
                </p>
              </div>

              {/* Features Grid */}
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                {roleFeatures[activeRole].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="group p-4 rounded-xl border border-gray-100 hover:border-slate-300 hover:shadow-md transition-all duration-200 bg-gray-50 hover:bg-white"
                    variants={slideUp}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-[#00a7e1] text-white group-hover:scale-110 transition-transform">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900 mb-1 text-sm">
                          {feature.title}
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div 
                className="mt-6 sm:mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.button 
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
                  className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#00a7e1] text-white rounded-full text-sm sm:text-base font-medium hover:bg-[#007ea7] transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,167,225,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore {activeRole === "admin" ? "Admin" : activeRole === "teacher" ? "Teacher" : "Student"} Features
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Side - Enhanced Dashboard Preview */}
            <motion.div 
              className="relative bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative w-full h-full max-w-2xl">
                {/* Main Dashboard Container */}
                <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-4 md:p-6 border border-gray-200 overflow-x-auto">
                  {/* Header with Praband Logo */}
                  <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-gray-200 mb-3 sm:mb-4">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                      <img
                        src="https://portal.praband.com/assets/images/logo.jpeg"
                        alt="Praband Logo"
                        className="h-6 sm:h-8 w-auto flex-shrink-0"
                      />
                      <div className="min-w-0">
                        <span className="text-xs sm:text-sm font-bold text-slate-900 capitalize block truncate">
                          {activeRole} Dashboard
                        </span>
                        <span className="text-[10px] sm:text-xs text-slate-500 truncate">Praband Platform</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                      <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-green-400"></div>
                      <span className="text-[10px] sm:text-xs text-slate-500">Live</span>
                    </div>
                  </div>

                  {/* Role-Specific Dashboard Content */}
                  {activeRole === "admin" && (
                    <div className="space-y-3 sm:space-y-4 min-w-[280px]">
                      {/* Key Metrics Row */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                        <MetricCard icon={<Users />} value="1.2K" label="Students" trend="+12%" />
                        <MetricCard icon={<User />} value="45" label="Teachers" trend="+3" />
                        <MetricCard icon={<BookOpen />} value="28" label="Courses" trend="+5" />
                        <MetricCard icon={<DollarSign />} value="₹2.4L" label="Revenue" trend="+18%" />
                      </div>

                      {/* Management Sections */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        <FeatureCard
                          icon={<Users />}
                          title="Teacher Management"
                          items={["45 Active", "3 Pending", "2 New Today"]}
                          progress={92}
                        />
                        <FeatureCard
                          icon={<GraduationCap />}
                          title="Student Management"
                          items={["1,200 Enrolled", "12 New Today", "98% Active"]}
                          progress={88}
                        />
                      </div>

                      {/* Revenue & Analytics */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                          <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                            <div className="flex items-center gap-1.5 sm:gap-2">
                              <DollarSign className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                              <span className="text-[10px] sm:text-xs font-bold text-blue-900 truncate">Revenue Tracking</span>
                            </div>
                            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                          </div>
                          <div className="text-base sm:text-lg font-bold text-blue-900 mb-0.5 sm:mb-1 truncate">₹2,45,000</div>
                          <div className="text-[10px] sm:text-xs text-blue-700 truncate">This Month • +18% from last</div>
                        </div>
                        <div className="p-2 sm:p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                          <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                            <div className="flex items-center gap-1.5 sm:gap-2">
                              <Award className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
                              <span className="text-[10px] sm:text-xs font-bold text-purple-900 truncate">Top Performers</span>
                            </div>
                            <BarChart className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600 flex-shrink-0" />
                          </div>
                          <div className="space-y-1 sm:space-y-1.5">
                            <div className="flex items-center justify-between text-[10px] sm:text-xs">
                              <span className="text-purple-700 truncate">Best Teacher</span>
                              <span className="font-bold text-purple-900 truncate ml-1">Prof. Sharma</span>
                            </div>
                            <div className="flex items-center justify-between text-[10px] sm:text-xs">
                              <span className="text-purple-700 truncate">Top Student</span>
                              <span className="font-bold text-purple-900 truncate ml-1">Ananya V.</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Activity Feed */}
                      <div className="p-2 sm:p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                          <Activity className="w-3 h-3 sm:w-4 sm:h-4 text-slate-600" />
                          <span className="text-[10px] sm:text-xs font-bold text-slate-700">Recent Activity</span>
                        </div>
                        <div className="space-y-1.5 sm:space-y-2">
                          <ActivityItem icon={<CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-600" />} text="5 new students enrolled" time="2m ago" />
                          <ActivityItem icon={<Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-600" />} text="3 exams scheduled" time="15m ago" />
                          <ActivityItem icon={<TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-600" />} text="Revenue milestone reached" time="1h ago" />
                        </div>
                      </div>
                    </div>
                  )}

                  {activeRole === "teacher" && (
                    <div className="space-y-3 sm:space-y-4 min-w-[280px]">
                      {/* Key Metrics */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                        <MetricCard icon={<ClipboardCheck />} value="45" label="Exams Created" trend="+8" />
                        <MetricCard icon={<FileText />} value="320" label="Questions" trend="+45" />
                        <MetricCard icon={<BarChart />} value="92%" label="Avg Score" trend="+5%" />
                      </div>

                      {/* Main Features */}
                      <div className="grid grid-cols-2 gap-3">
                        <FeatureCard
                          icon={<FileText />}
                          title="Question Bank"
                          items={["320 Questions", "12 Topics", "AI Enhanced"]}
                          progress={85}
                        />
                        <FeatureCard
                          icon={<ClipboardCheck />}
                          title="Exams & Quizzes"
                          items={["45 Active", "12 Scheduled", "3 Drafts"]}
                          progress={78}
                        />
                      </div>

                      {/* Analysis & Calendar */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        <div className="p-2 sm:p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                          <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                            <div className="flex items-center gap-1.5 sm:gap-2">
                              <BarChart className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                              <span className="text-[10px] sm:text-xs font-bold text-green-900 truncate">Analysis Dashboard</span>
                            </div>
                            <LineChart className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                          </div>
                          <div className="space-y-1.5 sm:space-y-2">
                            <div className="flex items-center justify-between text-[10px] sm:text-xs">
                              <span className="text-green-700 truncate">Batch Performance</span>
                              <span className="font-bold text-green-900 ml-1">92% Avg</span>
                            </div>
                            <div className="h-1.5 sm:h-2 bg-green-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-600 rounded-full" style={{ width: "92%" }}></div>
                            </div>
                          </div>
                        </div>
                        <div className="p-2 sm:p-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
                          <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                            <div className="flex items-center gap-1.5 sm:gap-2">
                              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600" />
                              <span className="text-[10px] sm:text-xs font-bold text-orange-900 truncate">Smart Calendar</span>
                            </div>
                            <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600 flex-shrink-0" />
                          </div>
                          <div className="space-y-1 sm:space-y-1.5">
                            <div className="text-[10px] sm:text-xs text-orange-700 truncate">Today: 3 Classes</div>
                            <div className="text-[10px] sm:text-xs text-orange-700 truncate">This Week: 12 Events</div>
                            <div className="text-[10px] sm:text-xs font-bold text-orange-900 truncate">Next: Math Class (2:00 PM)</div>
                          </div>
                        </div>
                      </div>

                      {/* AI Features */}
                      <div className="p-2 sm:p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                        <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                          <Brain className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
                          <span className="text-[10px] sm:text-xs font-bold text-purple-900 truncate">AI Question Suggestions</span>
                          <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-500 flex-shrink-0" />
                        </div>
                        <div className="text-[10px] sm:text-xs text-purple-700 mb-1.5 sm:mb-2 truncate">45 questions generated this week</div>
                        <div className="flex gap-1.5 sm:gap-2 flex-wrap">
                          <div className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-purple-200 rounded text-[9px] sm:text-[10px] font-medium text-purple-800">MCQ</div>
                          <div className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-purple-200 rounded text-[9px] sm:text-[10px] font-medium text-purple-800">Subjective</div>
                          <div className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-purple-200 rounded text-[9px] sm:text-[10px] font-medium text-purple-800">Easy</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeRole === "student" && (
                    <div className="space-y-3 sm:space-y-4 min-w-[280px]">
                      {/* Performance Overview */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                        <MetricCard icon={<Target />} value="92%" label="Overall Score" trend="+5%" />
                        <MetricCard icon={<ClipboardCheck />} value="18" label="Exams Taken" trend="+3" />
                        <MetricCard icon={<Award />} value="#12" label="Ranking" trend="↑2" />
                      </div>

                      {/* Main Features */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        <FeatureCard
                          icon={<BarChart />}
                          title="Personal Analytics"
                          items={["92% Avg Score", "18 Exams", "Top 15%"]}
                          progress={92}
                        />
                        <FeatureCard
                          icon={<Calendar />}
                          title="Upcoming Events"
                          items={["2 Exams", "3 Assignments", "1 Deadline"]}
                          progress={65}
                        />
                      </div>

                      {/* Exam & Assignment Status */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                          <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                            <div className="flex items-center gap-1.5 sm:gap-2">
                              <ClipboardCheck className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                              <span className="text-[10px] sm:text-xs font-bold text-blue-900 truncate">Recent Exams</span>
                            </div>
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                          </div>
                          <div className="space-y-1.5 sm:space-y-2">
                            <div className="flex items-center justify-between text-[10px] sm:text-xs">
                              <span className="text-blue-700 truncate">Math Final</span>
                              <span className="font-bold text-blue-900 ml-1">95/100</span>
                            </div>
                            <div className="flex items-center justify-between text-[10px] sm:text-xs">
                              <span className="text-blue-700 truncate">Physics Quiz</span>
                              <span className="font-bold text-blue-900 ml-1">88/100</span>
                            </div>
                          </div>
                        </div>
                        <div className="p-2 sm:p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                          <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                            <div className="flex items-center gap-1.5 sm:gap-2">
                              <FileText className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                              <span className="text-[10px] sm:text-xs font-bold text-green-900 truncate">Assignments</span>
                            </div>
                            <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 flex-shrink-0" />
                          </div>
                          <div className="space-y-1.5 sm:space-y-2">
                            <div className="flex items-center justify-between text-[10px] sm:text-xs">
                              <span className="text-green-700 truncate">Submitted</span>
                              <span className="font-bold text-green-900 ml-1">12/15</span>
                            </div>
                            <div className="flex items-center justify-between text-[10px] sm:text-xs">
                              <span className="text-orange-700 truncate">Pending</span>
                              <span className="font-bold text-orange-900 ml-1">3</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Progress & SLM Access */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        <div className="p-2 sm:p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                            <Target className="w-3 h-3 sm:w-4 sm:h-4 text-slate-600" />
                            <span className="text-[10px] sm:text-xs font-bold text-slate-700 truncate">Progress Dashboard</span>
                          </div>
                          <div className="space-y-1.5 sm:space-y-2">
                            <div className="text-[10px] sm:text-xs text-slate-600 truncate">Mathematics: 95%</div>
                            <div className="h-1 sm:h-1.5 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-[#00a7e1] rounded-full" style={{ width: "95%" }}></div>
                            </div>
                            <div className="text-[10px] sm:text-xs text-slate-600 truncate">Physics: 88%</div>
                            <div className="h-1 sm:h-1.5 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-[#00a7e1] rounded-full" style={{ width: "88%" }}></div>
                            </div>
                          </div>
                        </div>
                        <div className="p-2 sm:p-3 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg border border-indigo-200">
                          <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                            <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-indigo-600" />
                            <span className="text-[10px] sm:text-xs font-bold text-indigo-900 truncate">SLM Access</span>
                          </div>
                          <div className="text-[10px] sm:text-xs text-indigo-700 mb-1 truncate">28 Materials Available</div>
                          <div className="flex gap-1 flex-wrap">
                            <div className="px-1.5 sm:px-2 py-0.5 bg-indigo-200 rounded text-[9px] sm:text-[10px] font-medium text-indigo-800">Math</div>
                            <div className="px-1.5 sm:px-2 py-0.5 bg-indigo-200 rounded text-[9px] sm:text-[10px] font-medium text-indigo-800">Physics</div>
                            <div className="px-1.5 sm:px-2 py-0.5 bg-indigo-200 rounded text-[9px] sm:text-[10px] font-medium text-indigo-800">Chemistry</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-16 sm:w-24 h-16 sm:h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-20 sm:w-32 h-20 sm:h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Feature Count Summary */}
      </div>
    </section>
  );
}

// Helper Components for Dashboard Preview
function MetricCard({ icon, value, label, trend }: { icon: React.ReactNode; value: string; label: string; trend: string }) {
  return (
    <div className="p-2 sm:p-3 bg-gray-50 rounded-lg border border-gray-200">
      <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
        <div className="p-1 sm:p-1.5 rounded-md bg-[#00a7e1] text-white">
          {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: "w-2.5 h-2.5 sm:w-3 sm:h-3" })}
        </div>
        <span className="text-[9px] sm:text-[10px] text-slate-500 truncate">{label}</span>
      </div>
      <div className="flex items-baseline justify-between">
        <span className="text-base sm:text-lg font-bold text-slate-900 truncate">{value}</span>
        <span className="text-[9px] sm:text-[10px] text-green-600 font-medium ml-1">{trend}</span>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, items, progress }: { icon: React.ReactNode; title: string; items: string[]; progress: number }) {
  return (
    <div className="p-2 sm:p-3 bg-gray-50 rounded-lg border border-gray-200">
      <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
        <div className="p-1 sm:p-1.5 rounded-md bg-[#00a7e1] text-white flex-shrink-0">
          {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: "w-2.5 h-2.5 sm:w-3 sm:h-3" })}
        </div>
        <span className="text-[10px] sm:text-xs font-semibold text-slate-700 truncate">{title}</span>
      </div>
      <div className="space-y-0.5 sm:space-y-1 mb-1.5 sm:mb-2">
        {items.map((item, idx) => (
          <div key={idx} className="text-[9px] sm:text-[10px] text-slate-600 truncate">{item}</div>
        ))}
      </div>
      <div className="h-1 sm:h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-[#00a7e1] rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}

function ActivityItem({ icon, text, time }: { icon: React.ReactNode; text: string; time: string }) {
  return (
    <div className="flex items-center gap-1.5 sm:gap-2">
      {icon}
      <span className="text-[10px] sm:text-xs text-slate-600 flex-1 truncate">{text}</span>
      <span className="text-[9px] sm:text-[10px] text-slate-400 flex-shrink-0">{time}</span>
    </div>
  );
}


