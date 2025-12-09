import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function Blog() {
  const blogPosts = [
    {
      title: '10 SEO Strategies to Boost Your Rankings in 2024',
      excerpt: 'Discover the latest SEO techniques that will help your website climb to the top of search engine results pages.',
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'Nov 20, 2024',
      readTime: '5 min read',
      category: 'SEO',
    },
    {
      title: 'The Complete Guide to Marketing Automation',
      excerpt: 'Learn how to streamline your marketing efforts and increase efficiency with smart automation strategies.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'Nov 18, 2024',
      readTime: '8 min read',
      category: 'Marketing',
    },
    {
      title: 'Why Your Business Needs a Mobile-First Website',
      excerpt: "Mobile traffic now accounts for over 60% of web browsing. Here's why responsive design is no longer optional.",
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'Nov 15, 2024',
      readTime: '6 min read',
      category: 'Web Development',
    },
    {
      title: 'Content Marketing: Creating Value for Your Audience',
      excerpt: 'Effective content marketing goes beyond promotion. Learn how to create content that truly resonates.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'Nov 12, 2024',
      readTime: '7 min read',
      category: 'Content',
    },
    {
      title: 'Data-Driven Marketing: Making Decisions with Analytics',
      excerpt: 'Transform your marketing strategy using data analytics to understand customer behavior and optimize campaigns.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'Nov 10, 2024',
      readTime: '6 min read',
      category: 'Analytics',
    },
    {
      title: "Social Media Trends You Can't Ignore This Year",
      excerpt: 'Stay ahead of the curve with these emerging social media trends that are reshaping digital marketing.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'Nov 8, 2024',
      readTime: '5 min read',
      category: 'Social Media',
    },
  ];

  const categories = ['All', 'SEO', 'Marketing', 'Web Development', 'Content', 'Analytics', 'Social Media'];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-gradient-to-r from-[#FF6B00] to-[#FF8C00]/10 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute top-10 right-4 w-72 h-72 bg-gradient-to-r from-[#FF6B00] to-[#FF8C00]/20 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-[-80px] left-1/2 w-96 h-96 bg-gradient-to-r from-[#FF6B00] to-[#FF8C00]/10 rounded-full blur-3xl opacity-40"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center space-y-5">
          <div className="inline-flex items-center gap-2 bg-white/80 border border-[#FF6B00]/10 text-[#FF6B00] rounded-full px-4 py-2 text-sm font-semibold shadow-lg shadow-[#FF6B00]/5">
            Fresh insights every week
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-[#FF6B00] leading-tight">
            Ideas, trends, and <span className="text-[#FF6B00]">playbooks</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Curated thinking from our strategists, designers, and engineers on what moves the needle in digital.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 border-b border-[#FF6B00]/10/60 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-3 justify-center">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all border ${
                index === 0
                  ? 'bg-[#FF6B00] text-white border-transparent shadow-xl shadow-[#FF6B00]/10'
                  : 'bg-gradient-to-b from-white to-gray-50/50 text-[#FF6B00] border-[#FF6B00]/10 hover:border-[#FF6B00]/30 hover:text-[#FF6B00]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#F5F5F7]/30 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="group relative bg-gradient-to-b from-white to-gray-50/50 rounded-2xl overflow-hidden border border-[#FF6B00]/10 shadow-lg shadow-[#FF6B00]/5 hover:shadow-2xl transition-all"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-[#FF6B00] px-3 py-1 rounded-full text-xs font-semibold border border-[#FF6B00]/10 shadow-lg shadow-[#FF6B00]/5">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#FF6B00] group-hover:text-[#FF6B00] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
                  <button className="inline-flex items-center gap-2 text-[#FF6B00] font-semibold group-hover:gap-3 transition-all">
                    Read article
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-6xl mx-auto flex justify-center gap-2">
          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              className={`w-11 h-11 rounded-2xl font-semibold transition-all border ${
                page === 1
                  ? 'bg-[#FF6B00] text-white border-transparent shadow-xl shadow-[#FF6B00]/10'
                  : 'bg-gradient-to-b from-white to-gray-50/50 text-[#FF6B00] border-[#FF6B00]/10 hover:border-[#FF6B00]/30 hover:text-[#FF6B00]'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-3xl border border-[#FF6B00]/10 bg-gradient-to-r from-[#F5F5F7] via-white to-white shadow-xl">
          <div className="absolute -left-12 top-0 w-48 h-48 bg-gradient-to-r from-[#FF6B00] to-[#FF8C00]/10 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute right-6 -bottom-10 w-52 h-52 bg-gradient-to-r from-[#FF6B00] to-[#FF8C00]/20 rounded-full blur-3xl opacity-50"></div>

          <div className="relative px-8 py-14 text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6B00] to-[#FF8C00]/10 border-2 border-[#FF6B00]/30 hover:border-[#FF6B00] transition-all text-[#FF6B00] px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-[#FF6B00]/5">
              Stay ahead
            </div>
            <h2 className="text-4xl font-bold text-[#FF6B00]">Subscribe to our newsletter</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get fresh tactics, templates, and case studies delivered monthly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto pt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-2xl border border-[#FF6B00]/15 bg-[#FFFFFF] text-[#FF6B00] placeholder-[#1C1C1E]/50 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
              />
              <button className="bg-[#FF6B00] text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-[#FF6B00]/40 hover:shadow-2xl hover:shadow-[#FF6B00]/60 shadow-xl shadow-[#FF6B00]/10 hover:shadow-lg transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}






