import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { useState, type FormEvent } from "react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "esriakanth.011@gmail.com", href: "mailto:esriakanth.011@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9959024711", href: "tel:+91 9959024711" },
  { icon: MapPin, label: "Location", value: "Patancheru, Hyd", href: "#" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // const res = await fetch("http://localhost:5000/api/send-email", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });

      const res = await fetch("https://myportfolio-us0s.onrender.com/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });


      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message. Try again later.");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending message.");
    }
  };


  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="section-heading text-4xl font-bold tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-text-secondary">
            Have a project in mind or want to discuss an opportunity? I'd love to
            hear from you.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="glass rounded-2xl p-5 card-hover flex items-center gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                  <item.icon size={22} />
                </div>
                <div>
                  <p className="text-sm text-text-muted">{item.label}</p>
                  <p className="font-medium">{item.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass rounded-2xl p-6 sm:p-8 lg:col-span-2"
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex h-full flex-col items-center justify-center py-12 text-center"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                  <CheckCircle size={32} className="text-green-400" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Message Sent!</h3>
                <p className="text-text-secondary">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-text-secondary">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-border-light bg-surface-light px-4 py-3 text-sm text-white placeholder:text-text-muted outline-none transition-colors focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-text-secondary">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-border-light bg-surface-light px-4 py-3 text-sm text-white placeholder:text-text-muted outline-none transition-colors focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-text-secondary">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-xl border border-border-light bg-surface-light px-4 py-3 text-sm text-white placeholder:text-text-muted outline-none transition-colors focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20"
                    placeholder="Project collaboration"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-text-secondary">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full resize-none rounded-xl border border-border-light bg-surface-light px-4 py-3 text-sm text-white placeholder:text-text-muted outline-none transition-colors focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 font-medium text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-xl hover:shadow-indigo-500/30 hover:scale-105 active:scale-95"
                >
                  Send Message
                  <Send size={18} className="transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
