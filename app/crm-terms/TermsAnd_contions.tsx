// app/terms-and-conditions/page.tsx
const TermsAnd_contions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      
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
            Learn how we collect, use, and protect your information when you use CRM
          </p>
          <div className="mt-8 inline-flex items-center gap-2 text-xs md:text-sm text-white/80 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Effective Date: 20 March 2026</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container max-w-4xl mx-auto px-4 py-12 lg:py-20">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          
          {/* 1. Introduction Section */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-gray-100">
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
                    Welcome to <span className="font-semibold text-[#8B5CF6]">Flexi CRM</span>, a product developed and operated by 
                    <span className="font-semibold text-gray-800"> Webdads2u Private Limited</span> ("Company", "we", "our", "us").
                  </p>
                  <p>
                    Flexi CRM is a business Customer Relationship Management (CRM) platform designed to help companies manage leads, 
                    customers, sales, and related business activities.
                  </p>
                  <p>
                    This Privacy Policy explains how we collect, use, store, and protect your information when you use our application.
                  </p>
                  <div className="mt-4 p-4 bg-blue-50/50 rounded-xl border border-blue-100/50">
                    <p className="text-blue-800 text-sm flex items-start gap-2">
                      <span className="font-semibold mt-0.5">✓</span> 
                      <span>By accessing or using Flexi CRM, you agree to the terms of this Privacy Policy.</span>
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
                  {[
                    {
                      id: "A", color: "blue", title: "Account Information",
                      items: ["Name", "Email address", "Phone number", "Company name", "Login credentials (securely encrypted)"]
                    },
                    {
                      id: "B", color: "orange", title: "Business & CRM Data",
                      items: ["Lead details (name, phone number, email, company information)", "Customer information", "Sales and project data", "Notes, comments, and activity logs", "Internal team user details"]
                    },
                    {
                      id: "C", color: "purple", title: "Technical Information",
                      items: ["IP address", "Device information", "Browser type", "Usage data", "Log data for security and performance monitoring"]
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
                    "Provide lead management services (Version 1 functionality)",
                    "Authenticate users and manage secure login access",
                    "Enable multiple companies to securely access their own CRM workspace",
                    "Improve application performance and functionality",
                    "Ensure system security and prevent unauthorized access",
                    "Send service-related updates and important notifications",
                    "Comply with legal and regulatory requirements"
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
                    <span>Each company's data is securely isolated and not accessible to other companies.</span>
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
                    <p className="text-green-800 font-medium text-sm md:text-base">✓ We do not sell, trade, or rent personal or business data to third parties.</p>
                  </div>
                  <p className="text-sm md:text-base text-gray-600">We may share information only in the following cases:</p>
                  <ul className="space-y-3 pl-0 sm:pl-2">
                    {[
                      "With trusted cloud hosting and infrastructure providers",
                      "When required by law or government authorities",
                      "To protect the legal rights and safety of the Company"
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
                    <p className="text-blue-700 text-sm">All third-party providers are obligated to maintain strict data security standards.</p>
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
                <p className="text-sm md:text-base text-gray-600 mb-5">We implement appropriate technical and organizational measures, including:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    "Encrypted password storage",
                    "Role-based access control",
                    "Secure server infrastructure",
                    "Restricted database access",
                    "Continuous monitoring for unauthorized access"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 sm:p-4 bg-gray-50/80 rounded-xl border border-gray-100">
                      <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-yellow-50/80 rounded-xl border border-yellow-200/60">
                  <p className="text-yellow-800 text-sm flex items-start gap-3">
                    <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>However, no digital system is completely secure, and we cannot guarantee absolute security.</span>
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
                <p className="text-sm md:text-base text-gray-600 mb-4">We retain user data:</p>
                <ul className="space-y-3 pl-0 sm:pl-2 mb-6">
                  {[
                    "As long as the account is active",
                    "As required to provide our services",
                    "As necessary to comply with legal obligations"
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
                    <span>Users can request account deletion and data removal at any time.</span>
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
                <p className="text-sm md:text-base text-gray-600 mb-5">Users have the right to:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-8">
                  {[
                    "Access their personal data",
                    "Correct inaccurate or incomplete information",
                    "Request deletion of their account and associated data",
                    "Withdraw consent where applicable"
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
                    <a href="mailto:flexicrm.in@gmail.com" className="flex items-center gap-2.5 text-[#1E5FA8] hover:underline group">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">flexicrm.in@gmail.com</span>
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

          {/* 8. Children's Privacy */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-gray-100 bg-gray-50/30">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="flex-1 w-full">
                <h2 className="text-xl md:text-2xl font-bold font-sora text-gray-900 mb-3 md:mb-4">8. Children's Privacy</h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Flexi CRM is intended for business use only and is not designed for individuals under the age of 18. 
                  We do not knowingly collect data from minors.
                </p>
              </div>
            </div>
          </div>

          {/* 9. Third-Party Services */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-gray-100">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4-3-9s1.34-9 3-9" />
                </svg>
              </div>
              <div className="flex-1 w-full">
                <h2 className="text-xl md:text-2xl font-bold font-sora text-gray-900 mb-3 md:mb-4">9. Third-Party Services</h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Flexi CRM may use third-party services such as cloud hosting and infrastructure providers. 
                  These providers process data only on our behalf and under strict confidentiality agreements.
                </p>
              </div>
            </div>
          </div>

          {/* 10. Updates to This Privacy Policy */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-gray-100 bg-gray-50/30">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div className="flex-1 w-full">
                <h2 className="text-xl md:text-2xl font-bold font-sora text-gray-900 mb-3 md:mb-4">10. Updates to This Privacy Policy</h2>
                <p className="text-sm md:text-base text-gray-600 mb-4">
                  We may update this Privacy Policy from time to time.
                </p>
                <div className="p-4 bg-amber-50/80 rounded-xl border border-amber-200/60">
                  <p className="text-amber-800 text-sm leading-relaxed">
                    Any changes will be published within the application or on our official website. 
                    Continued use of Flexi CRM after updates means you accept the revised policy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 11. Contact Information */}
          <div className="p-6 sm:p-8 lg:p-10 bg-gradient-to-r from-[#1E5FA8]/5 to-[#8B5CF6]/5">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1E5FA8] to-[#8B5CF6] rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex-1 w-full">
                <h2 className="text-xl md:text-2xl font-bold font-sora text-gray-900 mb-3 md:mb-4">11. Contact Information</h2>
                <p className="text-sm md:text-base text-gray-600 mb-4">If you have any questions or concerns regarding this Privacy Policy, please contact:</p>
                
                <div className="p-5 sm:p-6 bg-white rounded-2xl shadow-sm border border-gray-200">
                  <p className="font-bold text-gray-900 text-lg">Webdads2u Private Limited</p>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    FIRST FLOOR, 2ND PORTION, 36, Saraswati Nagar Main Rd,<br />
                    Saraswati Nagar, Thirumullaivoyal,<br />
                    Chennai, Tamil Nadu — 600062, India
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-5 pt-5 border-t border-gray-100">
                    <a href="mailto:flexicrm.in@gmail.com" className="flex items-center gap-2.5 text-[#1E5FA8] hover:underline group">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">flexicrm.in@gmail.com</span>
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

export default TermsAnd_contions