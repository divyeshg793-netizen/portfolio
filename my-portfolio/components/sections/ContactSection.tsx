"use client";

import { useRef, useState } from "react";
import { Playfair_Display, Inter } from "next/font/google";
import { useInView } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const playfair = Playfair_Display({ subsets: ["latin"], style: ["normal", "italic"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] });

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormState("success");
        e.currentTarget.reset();
      } else {
        console.error("Form submission failed", data);
        setFormState("idle");
        alert("Failed to send message. Please check your access key.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setFormState("idle");
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <section id="contact" className="relative w-full py-32 lg:py-48 bg-transparent z-10 border-t border-[#D4C7B4]/50 overflow-hidden" ref={ref}>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
        
        {/* Left: Dramatic Headline */}
        <div className={`transition-all duration-1000 transform ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className={`${playfair.className} text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-[#2C2520] mb-10`}>
            LET'S BUILD <br/>
            <span className="text-[#D96C4A] italic">SOMETHING</span> <br/>
            INTELLIGENT.
          </h2>
          
          <p className={`${inter.className} text-[#6D645A] text-lg font-medium mb-12 max-w-md`}>
            Looking for a technical partner, AI/ML engineer, or creative developer to bring complex ideas to reality?
          </p>

          <div className="flex items-center space-x-6">
            <a href="mailto:contact@example.com" data-cursor="hover" className="text-[#2C2520] hover:text-[#D96C4A] transition-colors p-3 border border-[#D96C4A]/50 rounded-full bg-[#F9F6F0] hover:bg-[#D96C4A]/10 shadow-sm">
              <Mail size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" data-cursor="hover" className="text-[#2C2520] hover:text-[#D96C4A] transition-colors p-3 border border-[#D96C4A]/50 rounded-full bg-[#F9F6F0] hover:bg-[#D96C4A]/10 shadow-sm">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" data-cursor="hover" className="text-[#2C2520] hover:text-[#D96C4A] transition-colors p-3 border border-[#D96C4A]/50 rounded-full bg-[#F9F6F0] hover:bg-[#D96C4A]/10 shadow-sm">
              <FaLinkedin size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" data-cursor="hover" className="text-[#2C2520] hover:text-[#D96C4A] transition-colors p-3 border border-[#D96C4A]/50 rounded-full bg-[#F9F6F0] hover:bg-[#D96C4A]/10 shadow-sm">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Right: Form */}
        <div className={`transition-all duration-1000 delay-200 transform ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} bg-[#F9F6F0]/80 backdrop-blur-md border border-[#D96C4A]/30 rounded-[2.5rem] p-8 sm:p-10 shadow-2xl`}>
          {formState === "success" ? (
            <div className="h-full flex flex-col items-center justify-center p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6">
                <div className="w-8 h-8 rounded-full bg-emerald-500" />
              </div>
              <h3 className={`${playfair.className} text-3xl text-[#2C2520] mb-4`}>Transmission Received</h3>
              <p className={`${inter.className} text-[#6D645A] font-medium`}>
                I'll review your message and get back to you shortly.
              </p>
              <button 
                onClick={() => setFormState("idle")}
                className="mt-8 text-xs font-bold tracking-widest uppercase text-[#D96C4A] hover:text-[#2C2520] transition-colors"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
              <div className="relative group">
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="NAME" 
                  className="w-full bg-transparent border-b border-[#D96C4A]/30 pb-4 text-[#2C2520] placeholder-[#6D645A]/70 focus:outline-none focus:border-[#D96C4A] transition-colors font-mono text-sm tracking-widest"
                />
              </div>
              <div className="relative group pt-4">
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="EMAIL" 
                  className="w-full bg-transparent border-b border-[#D96C4A]/30 pb-4 text-[#2C2520] placeholder-[#6D645A]/70 focus:outline-none focus:border-[#D96C4A] transition-colors font-mono text-sm tracking-widest"
                />
              </div>
              <div className="relative group pt-4">
                <textarea 
                  name="message"
                  required
                  placeholder="MESSAGE" 
                  rows={4}
                  className="w-full bg-transparent border-b border-[#D96C4A]/30 pb-4 text-[#2C2520] placeholder-[#6D645A]/70 focus:outline-none focus:border-[#D96C4A] transition-colors font-mono text-sm tracking-widest resize-none"
                />
              </div>
              
              <div className="pt-8">
                <button 
                  type="submit"
                  disabled={formState === "submitting"}
                  data-cursor="hover"
                  className="group relative flex items-center justify-between w-full p-6 border border-[#D96C4A] text-[#D96C4A] rounded-full hover:bg-[#D96C4A] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="text-sm tracking-widest font-semibold uppercase">
                    {formState === "submitting" ? "Initiating..." : "Start a Conversation"}
                  </span>
                  <ArrowUpRight size={20} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          )}
        </div>

      </div>

      <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
        <p className="text-[10px] tracking-[0.3em] text-[#6D645A] font-mono uppercase font-bold">
          © {new Date().getFullYear()} DIVYESH. ALL RIGHTS RESERVED.
        </p>
      </div>
    </section>
  );
}
