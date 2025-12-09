import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50/50">
      <section className="bg-gradient-to-b from-white to-gray-50/50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-[#FF6B00] mb-6">
            Get in <span className="text-[#FF6B00]">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Let's start the conversation today
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#FF6B00] mb-6">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you have a project in mind or just want to explore possibilities,
                we're here to help. Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#FF6B00] to-[#FF8C00]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#FF6B00]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#FF6B00] mb-1">Email</h3>
                    <a href="mailto:hello@sagainfographics.com" className="text-gray-600 hover:text-[#FF6B00]">
                      hello@sagainfographics.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#FF6B00] to-[#FF8C00]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#FF6B00]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#FF6B00] mb-1">Phone</h3>
                    <a href="tel:+1234567890" className="text-gray-600 hover:text-[#FF6B00]">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#FF6B00] to-[#FF8C00]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#FF6B00]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#FF6B00] mb-1">Office</h3>
                    <p className="text-gray-600">
                      123 Digital Avenue<br />
                      Suite 456<br />
                      Tech City, TC 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#FF6B00] to-[#FF8C00]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-[#FF6B00]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#FF6B00] mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/1234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#FF6B00]"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-b from-white to-gray-50/50 rounded-2xl p-6 border-2 border-[#FF6B00]/30 hover:border-[#FF6B00] transition-all">
                <h3 className="font-semibold text-[#FF6B00] mb-3">Business Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-white to-gray-50/50 rounded-2xl shadow-xl p-8 border-2 border-[#FF6B00]/30 hover:border-[#FF6B00] transition-all">
              <h3 className="text-2xl font-bold text-[#FF6B00] mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#FF6B00] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#FF6B00]/30 hover:border-[#FF6B00] transition-all bg-gradient-to-b from-white to-gray-50/50 text-[#FF6B00] placeholder-[#1C1C1E]/50 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#FF6B00] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#FF6B00]/30 hover:border-[#FF6B00] transition-all bg-gradient-to-b from-white to-gray-50/50 text-[#FF6B00] placeholder-[#1C1C1E]/50 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[#FF6B00] mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#FF6B00]/30 hover:border-[#FF6B00] transition-all bg-gradient-to-b from-white to-gray-50/50 text-[#FF6B00] placeholder-[#1C1C1E]/50 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#FF6B00] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#FF6B00]/30 hover:border-[#FF6B00] transition-all bg-gradient-to-b from-white to-gray-50/50 text-[#FF6B00] placeholder-[#1C1C1E]/50 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FF6B00] text-white px-6 py-4 rounded-xl font-bold shadow-lg shadow-[#FF6B00]/40 hover:shadow-2xl hover:shadow-[#FF6B00]/60 hover:bg-[#FF6B00] transition-colors flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-b from-white to-gray-50/50 rounded-2xl p-12 text-center border-2 border-[#FF6B00]/30 hover:border-[#FF6B00] transition-all">
            <h2 className="text-3xl font-bold text-[#FF6B00] mb-4">
              Prefer to Book a Demo?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Schedule a personalized demo with our team to see how we can help transform your business
            </p>
            <button className="bg-[#FF6B00] text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-[#FF6B00]/40 hover:shadow-2xl hover:shadow-[#FF6B00]/60 hover:bg-gradient-to-r from-[#FF6B00] to-[#FF8C00]/90 transition-colors">
              Schedule a Demo Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}






