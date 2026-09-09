import { useState } from 'react';
import { Calendar, Users, Mail, Phone, User, MessageSquare, CheckCircle2, Loader2, Send } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { villaInfo } from '@/lib/data';

export default function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    check_in: '',
    check_out: '',
    guests: 2,
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Please enter your name';
    if (!form.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email';
    }
    if (form.check_in && form.check_out && form.check_out <= form.check_in) {
      errs.check_out = 'Check-out must be after check-in';
    }
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus('submitting');

    try {
      const { error } = await supabase.from('inquiries').insert({
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        check_in: form.check_in || null,
        check_out: form.check_out || null,
        guests: form.guests,
        message: form.message || null,
      });

      if (error) throw error;
      setStatus('success');
      setForm({ name: '', email: '', phone: '', check_in: '', check_out: '', guests: 2, message: '' });
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (field: string, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  if (status === 'success') {
    return (
      <section id="book" className="py-24 bg-gradient-to-br from-amber-50 to-stone-50">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-10 text-center shadow-lg border border-amber-100">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-stone-800 mb-3">Inquiry Sent!</h2>
            <p className="text-lg text-stone-500 mb-8">
              Thank you for your interest in Smiling Sparrows. We'll get back to you within
              24 hours to confirm your booking.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="px-6 py-3 rounded-xl bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-colors"
            >
              Send Another Inquiry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="book" className="py-24 bg-gradient-to-br from-amber-50 to-stone-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">Reserve Your Stay</span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mt-2 mb-4">Book Smiling Sparrows</h2>
          <p className="text-lg text-stone-500 max-w-2xl mx-auto">
            Send us your details and we'll confirm availability and pricing within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-lg border border-stone-100 space-y-5">
          {status === 'error' && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
              Something went wrong. Please try again or call us at {villaInfo.phone}.
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-stone-700 mb-2">
                <User className="w-4 h-4 text-amber-600" /> Full Name *
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border transition-colors outline-none ${
                  errors.name ? 'border-red-300 focus:border-red-400' : 'border-stone-200 focus:border-amber-400'
                } focus:ring-2 focus:ring-amber-100`}
                placeholder="Your name"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-stone-700 mb-2">
                <Mail className="w-4 h-4 text-amber-600" /> Email *
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border transition-colors outline-none ${
                  errors.email ? 'border-red-300 focus:border-red-400' : 'border-stone-200 focus:border-amber-400'
                } focus:ring-2 focus:ring-amber-100`}
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-stone-700 mb-2">
              <Phone className="w-4 h-4 text-amber-600" /> Phone Number
            </label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-colors"
              placeholder="+91 98765 43210"
            />
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-stone-700 mb-2">
                <Calendar className="w-4 h-4 text-amber-600" /> Check-in
              </label>
              <input
                type="date"
                value={form.check_in}
                onChange={(e) => handleChange('check_in', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-colors"
              />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-stone-700 mb-2">
                <Calendar className="w-4 h-4 text-amber-600" /> Check-out
              </label>
              <input
                type="date"
                value={form.check_out}
                onChange={(e) => handleChange('check_out', e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border transition-colors outline-none ${
                  errors.check_out ? 'border-red-300 focus:border-red-400' : 'border-stone-200 focus:border-amber-400'
                } focus:ring-2 focus:ring-amber-100`}
              />
              {errors.check_out && <p className="text-red-500 text-xs mt-1">{errors.check_out}</p>}
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-stone-700 mb-2">
                <Users className="w-4 h-4 text-amber-600" /> Guests
              </label>
              <select
                value={form.guests}
                onChange={(e) => handleChange('guests', Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-colors bg-white"
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-stone-700 mb-2">
              <MessageSquare className="w-4 h-4 text-amber-600" /> Message (Optional)
            </label>
            <textarea
              value={form.message}
              onChange={(e) => handleChange('message', e.target.value)}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-colors resize-none"
              placeholder="Any special requests or questions?"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full py-4 rounded-xl bg-amber-600 text-white font-bold text-lg hover:bg-amber-700 transition-all hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" /> Sending...
              </>
            ) : (
              <>
                Send Inquiry <Send className="w-5 h-5" />
              </>
            )}
          </button>

          <p className="text-center text-sm text-stone-400">
            No payment needed now — we'll confirm availability before booking.
          </p>
        </form>
      </div>
    </section>
  );
}
