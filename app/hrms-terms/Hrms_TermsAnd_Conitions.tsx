// app/hrms-terms-and-conditions/page.tsx
const Hrms_TermsAnd_Conitions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      
      {/* Hero Section */}
      {/* FIX: Added pt-32 to account for fixed header, standardized padding */}
      <div className="relative bg-gradient-to-r from-[#1E5FA8] to-[#8B5CF6] text-white overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container relative max-w-4xl mx-auto px-4 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Legal Document</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-sora mb-4 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto px-2">
            Learn how we collect, use, and protect your employee and payroll data when you use HRMS
          </p>
          <div className="mt-8 inline-flex items-center gap-2 text-xs md:text-sm text-white/80 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Effective Date: 10 April 2026</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container max-w-4xl mx-auto px-4 py-12 lg:py-20">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          
          {/* 1. Introduction Section */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-gray-100">
            {/* FIX: Mobile stacking for Icon and Content using flex-col sm:flex-row */}
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1E5FA8] to-[#8B5CF6] rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1 w-full">
                <h2 className="text-xl md:text-2xl font-bold font-sora text-gray-900 mb-3 md:mb-4">1. Introduction</h2>
                <div className="space-y-3 text-sm md:text-base text-gray-600 leading-relaxed">
                  <p>
                    Welcome to <span className="font-semibold text-[#8B5CF6]">Flexi HRMS</span>, a product developed and operated by 
                    <span className="font-semibold text-gray-800"> Webdads2u Private Limited</span> ("Company", "we", "our", "us").
                  </p>
                  <p>
                    Flexi HRMS is a comprehensive Human Resource Management System (HRMS) platform designed to help companies manage employees, 
                    payroll, attendance, and related HR operations.
                  </p>
                  <p>
                    This Privacy Policy explains how we collect, use, store, and protect your information when you use our application.
                  </p>
                  <div className="mt-4 p-4 bg-blue-50/50 rounded-xl border border-blue-100/50">
                    <p className="text-blue-800 text-sm flex items-start gap-2">
                      <span className="font-semibold mt-0.5">✓</span> 
                      <span>By accessing or using Flexi HRMS, you agree to the terms of this Privacy Policy.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Information We Collect */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-gray-100 bg-gray-50/30">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <div className="flex-1 w-full">
                <h2 className="text-xl md:text-2xl font-bold font-sora text-gray-900 mb-3 md:mb-4">2. Information We Collect</h2>
                <p className="text-sm md:text-base text-gray-600 mb-6">We collect the following types of information:</p>
                
                <div className="space-y-8">
                  {/* CLEANUP: Mapped sections for consistent responsive layout */}
                  {[
                    {
                      id: "A", color: "blue", title: "Account Information",
                      items: ["Name", "Email address", "Phone number", "Company name", "Login credentials (securely encrypted)", "Department and role information"]
                    },
                    {
                      id: "B", color: "orange", title: "Employee Personal Data",
                      items: ["Full name", "Date of birth", "Gender", "Contact information (phone, email, address)", "Emergency contact details", "National identification numbers (Aadhaar, PAN, etc.)", "Photograph"]
                    },
                    {
                      id: "C", color: "green", title: "Employment Information",
                      items: ["Employee ID", "Department and designation", "Date of joining", "Employment type and status", "Job history and experience", "Educational qualifications", "Previous employment details"]
                    },
                    {
                      id: "D", color: "red", title: "Payroll & Financial Data",
                      items: ["Bank account details", "Salary structure (basic, allowances, deductions)", "Tax information (TDS, PF, ESI)", "Payroll run details", "Payslip records", "Loan and advance details", "Reimbursement claims"]
                    },
                    {
                      id: "E", color: "yellow", title: "Attendance & Leave Data",
                      items: ["Daily attendance records", "Check-in/check-out times", "Leave applications and balances", "Work-from-home records", "Overtime and shift details"]
                    },
                    {
                      id: "F", color: "indigo", title: "Documents",
                      items: ["Educational certificates", "Identity proofs", "Address proofs", "Bank statements", "Offer letters and appointment letters", "Relieving letters and experience certificates", "Medical certificates"]
                    },
                    {
                      id: "G", color: "purple", title: "Technical Information",
                      items: ["IP address", "Device information", "Browser type", "Usage data", "Log data for security and performance monitoring", "Location data (for attendance tracking, if enabled)"]
                    }
                  ].map((section, idx) => (
                    <div key={idx}>
                      <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-3 flex items-center gap-3">
                        <span className={`w-7 h-7 bg-${section.color}-100 text-${section.color}-600 rounded-full flex items-center justify-center text-xs font-bold shrink-0`}>
                          {section.id}
                        </span>
                        {section.title}
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 pl-0 sm:pl-10">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm md:text-base text-gray-600">
                            {/* FIX: shrink-0 mt-0.5 ensures perfectly aligned checkmarks on mobile */}
                            <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 3. How We Use Your Information */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-gray-100">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1 w-full">
                <h2 className="text-xl md:text-2xl font-bold font-sora text-gray-900 mb-3 md:mb-4">3. How We Use Your Information</h2>
                <p className="text-sm md:text-base text-gray-600 mb-4">We use the collected data to:</p>
                <ul className="space-y-3 pl-0 sm:pl-2">
                  {[
                    "Provide employee management and HR services",
                    "Process monthly payroll and generate payslips",
                    "Track attendance and manage leave applications",
                    "Maintain employee records and documents",
                    "Calculate salary, deductions, and taxes",
                    "Generate compliance reports (PF, ESI, TDS, etc.)",
                    "Authenticate users and manage secure login access",
                    "Enable multiple companies to securely access their own HRMS workspace",
                    "Improve application performance and functionality",
                    "Ensure system security and prevent unauthorized access",
                    "Send service-related updates, payroll notifications, and important alerts",
                    "Comply with legal, tax, and regulatory requirements"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm md:text-base text-gray-600">
                      <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-purple-50/50 rounded-xl border border-purple-100/50">
                  <p className="text-purple-700 text-sm flex items-start gap-3">
                    <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>Each company's data is securely isolated and not accessible to other companies. Employee data is accessible only to authorized HR personnel within the respective organization.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Data Sharing and Disclosure */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-gray-100 bg-gray-50/30">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <div className="flex-1 w-full">
                <h2 className="text-xl md:text-2xl font-bold font-sora text-gray-900 mb-3 md:mb-4">4. Data Sharing and Disclosure</h2>
                <div className="space-y-5">
                  <div className="p-4 bg-green-50/80 rounded-xl border border-green-200/60">
                    <p className="text-green-800 font-medium text-sm md:text-base">✓ We do not sell, trade, or rent personal, employee, or payroll data to third parties.</p>
                  </div>
                  <p className="text-sm md:text-base text-gray-600">We may share information only in the following cases:</p>
                  <ul className="space-y-3 pl-0 sm:pl-2">
                    {[
                      "With trusted cloud hosting and infrastructure providers",
                      "With government authorities for tax compliance (PF, ESI, TDS filings)",
                      "When required by law or regulatory authorities",
                      "To protect the legal rights and safety of the Company",
                      "With authorized banking partners for salary disbursement (encrypted and secure)"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm md:text-base text-gray-600">
                        <svg className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 p-4 bg-blue-50/50 rounded-xl border border-blue-100/50">
                    <p className="text-blue-700 text-sm">All third-party providers are obligated to maintain strict data security and confidentiality standards.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Data Security */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-gray-100">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="flex-1 w-full">
                <h2 className="text-xl md:text-2xl font-bold font-sora text-gray-900 mb-3 md:mb-4">5. Data Security</h2>
                <p className="text-sm md:text-base text-gray-600 mb-5">Given the sensitive nature of HR and payroll data, we implement strict security measures, including:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    "End-to-end encryption for sensitive data (salary, bank details, identification numbers)",
                    "Encrypted password storage",
                    "Role-based access control (RBAC)",
                    "Secure server infrastructure with firewall protection",
                    "Restricted database access with audit logs",
                    "Regular security audits and vulnerability assessments",
                    "Multi-factor authentication (MFA) for admin accounts",
                    "Continuous monitoring for unauthorized access and suspicious activity",
                    "Secure backup and disaster recovery systems"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 sm:p-4 bg-gray-50/80 rounded-xl border border-gray-100">
                      <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-yellow-50/80 rounded-xl border border-yellow-200/60">
                  <p className="text-yellow-800 text-sm flex items-start gap-3">
                    <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>However, no digital system is completely secure, and we cannot guarantee absolute security. Users are advised to maintain strong passwords and report any suspicious activity immediately.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 6. Data Retention */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-gray-100 bg-gray-50/30">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-green-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1 w-full">
                <h2 className="text-xl md:text-2xl font-bold font-sora text-gray-900 mb-3 md:mb-4">6. Data Retention</h2>
                <p className="text-sm md:text-base text-gray-600 mb-4">We retain employee and payroll data:</p>
                <ul className="space-y-3 pl-0 sm:pl-2 mb-6">
                  {[
                    "As long as the employee account is active",
                    "For a minimum of 7 years after employment termination (as per statutory requirements)",
                    "As required to comply with tax, labor, and legal obligations",
                    "For audit and compliance purposes"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm md:text-base text-gray-600">
                      <svg className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-4 bg-purple-50/50 rounded-xl border border-purple-100/50">
                  <p className="text-purple-700 text-sm flex items-start gap-3">
                    <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    <span>Authorized company administrators can request data deletion, subject to legal retention requirements.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 7. User Rights */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-gray-100">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1 w-full">
                <h2 className="text-xl md:text-2xl font-bold font-sora text-gray-900 mb-3 md:mb-4">7. User Rights</h2>
                <p className="text-sm md:text-base text-gray-600 mb-5">Users (employees and HR administrators) have the right to:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-8">
                  {[
                    "Access their personal and payroll data",
                    "Correct inaccurate or incomplete information",
                    "Request a copy of their data in portable format",
                    "Request deletion of their account and associated data (subject to legal requirements)",
                    "Withdraw consent where applicable (except where processing is required by law)",
                    "Lodge a complaint with relevant data protection authorities"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 sm:p-4 bg-gray-50/80 rounded-xl border border-gray-100">
                      <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="p-5 bg-gradient-to-r from-blue-50/80 to-purple-50/80 rounded-2xl border border-blue-100/50">
                  <p className="text-gray-800 mb-4 font-semibold">To exercise these rights, contact us:</p>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                    <a href="mailto:flexihrms.in@gmail.com" className="flex items-center gap-2.5 text-[#1E5FA8] hover:underline group">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">flexihrms.in@gmail.com</span>
                    </a>
                    
                    <a href="tel:+919150659909" className="flex items-center gap-2.5 text-[#F5921E] hover:underline group">
                      <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">+91 9150659909</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 8. Employee Rights and Employer Responsibilities */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-gray-100 bg-gray-50/30">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="flex-1 w-full">
                <h2 className="text-xl md:text-2xl font-bold font-sora text-gray-900 mb-3 md:mb-4">8. Employee Rights and Employer Responsibilities</h2>
                <ul className="space-y-3 pl-0 sm:pl-2">
                  {[
                    "Employers using Flexi HRMS are responsible for ensuring they have the legal right to collect and process employee data",
                    "Employers must inform employees about data collection and usage",
                    "Employers must comply with applicable labor laws and data protection regulations",
                    "Employees have the right to view and verify their own data within the system",
                    "Employees can raise concerns about data accuracy or misuse with their HR department"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm md:text-base text-gray-600">
                      <svg className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 9. Children's Privacy */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-gray-100">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="flex-1 w-full">
                <h2 className="text-xl md:text-2xl font-bold font-sora text-gray-900 mb-3 md:mb-4">9. Children's Privacy</h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Flexi HRMS is intended for business and employment use only and is not designed for individuals under the age of 18. 
                  We do not knowingly collect data from minors.
                </p>
              </div>
            </div>
          </div>

          {/* 10. Third-Party Services */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-gray-100 bg-gray-50/30">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4-3-9s1.34-9 3-9" />
                </svg>
              </div>
              <div className="flex-1 w-full">
                <h2 className="text-xl md:text-2xl font-bold font-sora text-gray-900 mb-3 md:mb-4">10. Third-Party Services</h2>
                <p className="text-sm md:text-base text-gray-600 mb-5">Flexi HRMS may use third-party services such as:</p>
                <ul className="space-y-3 pl-0 sm:pl-2 mb-6">
                  {[
                    "Cloud hosting and infrastructure providers",
                    "Payment gateways for salary disbursement",
                    "SMS and email notification services",
                    "Biometric attendance system integrations (if applicable)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm md:text-base text-gray-600">
                      <svg className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100/50">
                  <p className="text-blue-700 text-sm">These providers process data only on our behalf and under strict confidentiality and data protection agreements.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 11. Biometric and Location Data */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-gray-100">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.3.283-2.535.78-3.652m5.57 11.346c-.413.593-.84 1.18-1.283 1.76m4.564-8.647c.452.6.83 1.268 1.124 2.006" />
                </svg>
              </div>
              <div className="flex-1 w-full">
                <h2 className="text-xl md:text-2xl font-bold font-sora text-gray-900 mb-3 md:mb-4">11. Biometric and Location Data (if applicable)</h2>
                <p className="text-sm md:text-base text-gray-600 mb-5">If biometric attendance (fingerprint, face recognition) or GPS-based attendance tracking is enabled:</p>
                <ul className="space-y-3 pl-0 sm:pl-2">
                  {[
                    "Such data is collected only with explicit employee consent",
                    "Biometric data is encrypted and stored securely",
                    "Location data is used solely for attendance verification",
                    "Employees can opt out of biometric attendance if alternate methods are available",
                    "Biometric templates are not shared with third parties"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm md:text-base text-gray-600">
                      <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 12. Cross-Border Data Transfer */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-gray-100 bg-gray-50/30">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1 w-full">
                <h2 className="text-xl md:text-2xl font-bold font-sora text-gray-900 mb-3 md:mb-4">12. Cross-Border Data Transfer</h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  If you are accessing Flexi HRMS from outside India, please note that your data may be transferred to and processed in India. 
                  We ensure that such transfers comply with applicable data protection laws and maintain adequate security measures.
                </p>
              </div>
            </div>
          </div>

          {/* 13. Updates to This Privacy Policy */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-gray-100">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div className="flex-1 w-full">
                <h2 className="text-xl md:text-2xl font-bold font-sora text-gray-900 mb-3 md:mb-4">13. Updates to This Privacy Policy</h2>
                <p className="text-sm md:text-base text-gray-600 mb-5">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements.
                </p>
                <ul className="space-y-3 pl-0 sm:pl-2">
                  {[
                    "Any changes will be published within the application or on our official website",
                    "Users will be notified of significant changes via email or in-app notification",
                    "Continued use of Flexi HRMS after updates means you accept the revised policy"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm md:text-base text-gray-600">
                      <svg className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 14. Compliance with Indian Laws */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-gray-100 bg-gray-50/30">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <div className="flex-1 w-full">
                <h2 className="text-xl md:text-2xl font-bold font-sora text-gray-900 mb-3 md:mb-4">14. Compliance with Indian Laws</h2>
                <p className="text-sm md:text-base text-gray-600 mb-5">Flexi HRMS complies with:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    "The Information Technology Act, 2000",
                    "The Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011",
                    "The Payment of Wages Act, 1936",
                    "The Employees' Provident Funds and Miscellaneous Provisions Act, 1952",
                    "The Employees' State Insurance Act, 1948",
                    "The Income Tax Act, 1961",
                    "Other applicable labor and employment laws in India"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                      <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 15. Contact Information */}
          <div className="p-6 sm:p-8 lg:p-10 bg-gradient-to-r from-[#1E5FA8]/5 to-[#8B5CF6]/5">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1E5FA8] to-[#8B5CF6] rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex-1 w-full">
                <h2 className="text-xl md:text-2xl font-bold font-sora text-gray-900 mb-3 md:mb-4">15. Contact Information</h2>
                <p className="text-sm md:text-base text-gray-600 mb-4">If you have any questions, concerns, or requests regarding this Privacy Policy or data protection, please contact:</p>
                
                <div className="p-5 sm:p-6 bg-white rounded-2xl shadow-sm border border-gray-200">
                  <p className="font-bold text-gray-900 text-lg">Webdads2u Private Limited</p>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    FIRST FLOOR, 2ND PORTION, 36, Saraswati Nagar Main Rd,<br />
                    Saraswati Nagar, Thirumullaivoyal,<br />
                    Chennai, Tamil Nadu — 600062, India
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-5 pt-5 border-t border-gray-100">
                    <a href="mailto:flexihrms.in@gmail.com" className="flex items-center gap-2.5 text-[#1E5FA8] hover:underline group">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">flexihrms.in@gmail.com</span>
                    </a>
                    
                    <a href="tel:+919150659909" className="flex items-center gap-2.5 text-[#F5921E] hover:underline group">
                      <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">+91 9150659909</span>
                    </a>
                  </div>
                  
                  <div className="mt-5 pt-5 border-t border-gray-100">
                    <p className="font-semibold text-gray-900 text-sm">Data Protection Officer (DPO):</p>
                    <p className="text-gray-600 text-sm mt-1">For specific data protection queries, you may reach out to our Data Protection Officer at the above contact details.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Acknowledgment Section */}
          <div className="p-6 sm:p-8 lg:p-10 bg-gradient-to-r from-blue-50/80 to-indigo-50/80">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1 w-full">
                <h2 className="text-xl md:text-2xl font-bold font-sora text-gray-900 mb-3 md:mb-4">Acknowledgment</h2>
                <div className="p-4 sm:p-5 bg-white rounded-xl shadow-sm border border-gray-200">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    By using Flexi HRMS, you acknowledge that you have read, understood, and agreed to this Privacy Policy. 
                    If you do not agree with any part of this policy, please discontinue use of the application immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 text-gray-500 text-xs sm:text-sm">
          <p>© 2026 Webdads2u Private Limited. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Hrms_TermsAnd_Conitions