// app/contact/page.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Headphones, LifeBuoy, MapPin, PhoneCall, Sparkles } from "lucide-react";
import { useState } from "react";
// Ensure this path matches where you saved your Reusable_Fields component
import Reusable_Fields from "../component/ui/Reusable_Fields";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    topic: "", // Added topic to state for the select field
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    // Reusable_Fields passes an event-like object { target: { name, value } }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ firstName: "", lastName: "", email: "", company: "", topic: "", message: "" });
  };

  // Options for the Reusable Select field
  const topicOptions = [
    { label: "Sales & Pricing Inquiry", value: "sales" },
    { label: "Request a Demo", value: "demo" },
    { label: "Technical Support", value: "support" },
    { label: "Partnership Opportunities", value: "partnership" },
    { label: "Other", value: "other" },
  ];

  const contactMethods = [
    { 
      icon: PhoneCall, 
      title: "Talk to Sales", 
      desc: "Interested in Flexi CRM? Just pick up the phone to chat with a member of our sales team.",
      contact: "+91 9150659909",
      link: "tel:+919150659909",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    { 
      icon: LifeBuoy, 
      title: "Customer Support", 
      desc: "Sometimes you need a little help from your friends. Or a Flexi support rep. Don't worry, we're here for you.",
      contact: "flexicrm.in@gmail.com",
      link: "mailto:flexicrm.in@gmail.com",
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    { 
      icon: MapPin, 
      title: "Headquarters", 
      desc: "FIRST FLOOR, 2ND PORTION, 36, Saraswati Nagar Main Rd, Thirumullaivoyal, Chennai, Tamil Nadu — 600062",
      contact: "Get Directions",
      link: "https://maps.google.com/maps?q=36,+Saraswati+Nagar+Main+Rd,+Thirumullaivoyal,+Chennai,+Tamil+Nadu+600062",
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Hero Section */}
      <div className="bg-[#0f172a] text-white pt-16 pb-32 relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[100%] rounded-full bg-gradient-to-b from-blue-600/20 to-purple-600/10 blur-3xl" />
          <div className="absolute top-[60%] -left-[10%] w-[40%] h-[80%] rounded-full bg-gradient-to-t from-blue-500/20 to-emerald-500/10 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Get in touch with <span className="text-[#3395ff]">Flexi</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Whether you're curious about features, a free trial, or even press — we're ready to answer any and all questions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="container mx-auto px-4 md:px-6 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 p-8 md:p-10"
          >
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Send us a message</h2>
              <p className="text-slate-500">Fill out the form below and our team will get back to you within 24 hours.</p>
            </div>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-50 border border-emerald-100 rounded-xl p-8 text-center flex flex-col items-center justify-center min-h-[400px]"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message received!</h3>
                <p className="text-slate-600 max-w-md mx-auto">
                  Thank you for reaching out. One of our specialists will be in touch with you shortly at <span className="font-semibold text-slate-800">{formData.email}</span>.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 pt-2">
                
                {/* First Name & Last Name (Reusable Fields) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Reusable_Fields
                    type="text"
                    name="firstName"
                    label="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <Reusable_Fields
                    type="text"
                    name="lastName"
                    label="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email & Company (Reusable Fields) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Reusable_Fields
                    type="email"
                    name="email"
                    label="Work Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <Reusable_Fields
                    type="text"
                    name="company"
                    label="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                {/* Topic Select (Reusable Fields) */}
                <div>
                  <Reusable_Fields
                    type="select"
                    name="topic"
                    label="Topic"
                    placeholder="Select a topic..."
                    value={formData.topic}
                    onChange={handleChange}
                    options={topicOptions}
                    required
                  />
                </div>

                {/* Message Textarea (Reusable Fields) */}
                <div>
                  <Reusable_Fields
                    type="textarea"
                    name="message"
                    label="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ translateY: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 rounded-xl font-bold text-white bg-[#3395ff] hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all duration-300 flex items-center justify-center cursor-pointer gap-2 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Request...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                  <p className="text-xs text-slate-500 text-center mt-4">
                    By submitting this form, you agree to our <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> and <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>.
                  </p>
                </div>
              </form>
            )}
          </motion.div>

          {/* Right Column: Contact Methods & Trust Signals */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6 pt-4 lg:pt-0"
          >
            {contactMethods.map((method, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${method.bg} ${method.color}`}>
                    <method.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{method.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">{method.desc}</p>
                    <a 
                      href={method.link} 
                      className={`inline-flex items-center text-sm font-bold ${method.color} hover:underline`}
                    >
                      {method.contact}
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Enterprise Support Box */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white relative overflow-hidden mt-8">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Sparkles className="w-24 h-24" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <Headphones className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-bold tracking-wider text-blue-400 uppercase">Enterprise Support</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Need immediate assistance?</h3>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  Our enterprise customers get 24/7 priority support with a guaranteed 1-hour response time SLA.
                </p>
                <button className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 text-white rounded-xl text-sm font-semibold transition-colors border border-white/10">
                  View Enterprise Plans
                </button>
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* Map Section - Full Width, Grayscale styling pointing to Chennai HQ */}
      <div className="w-full h-[400px] mt-24 border-t border-slate-200">
        <iframe
          src="https://maps.google.com/maps?q=36,+Saraswati+Nagar+Main+Rd,+Thirumullaivoyal,+Chennai,+Tamil+Nadu+600062&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
          title="Office Location Map"
        />
      </div>

    </div>
  );
}