import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(10, "Message is too short").max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    toast.success("Message sent — we'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="pb-28 pt-4 relative">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            {[
              { icon: Mail, label: "Group Email", value: "investwisefinance@gmail.com", href: "mailto:investwisefinance@gmail.com" },
              { icon: Phone, label: "Phone", value: "+94 94 701 6158", href: "tel:+94 94 701 6158" },
              { icon: MapPin, label: "Location", value: "SLIIT, Malabe, Sri Lanka" },
            ].map((it) => (
              <a
                key={it.label}
                href={it.href || "#"}
                className="glass-strong rounded-2xl p-5 flex items-center gap-4 group hover:border-gold/30 transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-gold grid place-items-center shadow-glow group-hover:scale-110 transition-transform">
                  <it.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-gold">
                    {it.label}
                  </p>
                  <p className="font-medium mt-0.5">{it.value}</p>
                </div>
              </a>
            ))}

            <div className="glass rounded-2xl p-5">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                Office Hours
              </p>
              <p className="text-sm">Mon — Fri · 9:00 AM — 5:00 PM (IST)</p>
              <p className="text-sm text-muted-foreground mt-1">
                Responses within 24 working hours.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-strong rounded-2xl p-6 md:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Jane Doe"
                  maxLength={100}
                  className="bg-secondary/60 border-border h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jane@example.com"
                  maxLength={255}
                  className="bg-secondary/60 border-border h-11"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your inquiry..."
                rows={6}
                maxLength={1000}
                className="bg-secondary/60 border-border resize-none"
              />
              <p className="text-[11px] text-muted-foreground text-right">
                {form.message.length}/1000
              </p>
            </div>

            <Button type="submit" variant="hero" size="lg" disabled={loading} className="w-full sm:w-auto">
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send Message
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;