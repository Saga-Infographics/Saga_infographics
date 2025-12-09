import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

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
      excerpt: 'Mobile traffic now accounts for over 60% of web browsing. Here\'s why responsive design is no longer optional.',
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
      title: 'Social Media Trends You Can\'t Ignore This Year',
      excerpt: 'Stay ahead of the curve with these emerging social media trends that are reshaping digital marketing.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'Nov 8, 2024',
      readTime: '5 min read',
      category: 'Social Media',
    },
  ];

  const categories = ['All', 'SEO', 'Marketing', 'Web Development', 'Content', 'Analytics', 'Social Media'];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-orange-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-orange-500">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert insights, industry trends, and practical tips to help you succeed in the digital world
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  index === 0
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-orange-500'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  <button className="text-orange-500 font-semibold hover:text-orange-600 flex items-center gap-2 group">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4].map((page) => (
              <button
                key={page}
                className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                  page === 1
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-orange-500'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get the latest digital marketing insights delivered straight to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
