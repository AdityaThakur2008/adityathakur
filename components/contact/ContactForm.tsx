"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { motion } from "framer-motion";


export default function ContactForm() {

  const [loading, setLoading] = useState(false);

const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
}); 

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  setFormData((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }));
};

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  try {
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) {
      toast.error(data.message || "Failed to send message.");
      return;
    }

    toast.success("Message sent successfully 🚀");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

  } catch (err) {
    console.error(err);

    toast.error("Something went wrong.");
  } finally {
    setLoading(false);
  }
};

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="w-full bg-card border border-border/50 rounded-[2rem] p-6 md:p-10 relative overflow-hidden h-full flex flex-col"
    >
      {/* Top Right Subtle Glow */}
      <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-primary/20 blur-[80px] rounded-full pointer-events-none" />

      <div className="flex items-center gap-4 mb-8 relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
          <Send size={20} className="text-primary -ml-1 mt-1" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">Send me a message</h3>
          <p className="text-sm text-muted-foreground">I usually reply within 24 hours.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-1 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground ml-1">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              name="name"
              required
              className="w-full bg-secondary/30 border border-border/50 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground ml-1">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              name="email"
              required
              className="w-full bg-secondary/30 border border-border/50 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-foreground ml-1">Subject</label>
          <input
            type="text"
            placeholder="What's this about?"
            value={formData.subject}
            onChange={handleChange}
            name="subject"
            required
            className="w-full bg-secondary/30 border border-border/50 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
          />
        </div>

        <div className="flex flex-col gap-1.5 flex-1">
          <label className="text-sm font-medium text-foreground ml-1">Message</label>
          <textarea
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            name="message"
            required
            className="w-full h-full min-h-[120px] bg-secondary/30 border border-border/50 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all mt-2"
        >
          <Send size={18} />
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </motion.div>
  );
}