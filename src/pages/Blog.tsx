
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import BlogCard, { BlogCardProps } from '../components/BlogCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const blogPosts: BlogCardProps[] = [
  {
    id: 'seo-beginners-guide',
    title: 'The Complete SEO Beginner\'s Guide for 2023',
    excerpt: 'Learn the fundamentals of SEO and how to create a strategy that will help you rank higher in search engines.',
    date: 'June 15, 2023',
    category: 'SEO Basics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'keyword-research',
    title: 'How to Do Keyword Research Like a Pro',
    excerpt: 'Discover the strategies and tools professional SEOs use to find the most valuable keywords for their clients.',
    date: 'May 28, 2023',
    category: 'Keyword Research',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'technical-seo-audit',
    title: 'Technical SEO Audit: A Step-by-Step Guide',
    excerpt: 'Learn how to perform a comprehensive technical SEO audit to identify and fix issues affecting your website performance.',
    date: 'May 12, 2023',
    category: 'Technical SEO',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'backlink-building',
    title: 'Effective Link Building Strategies That Still Work',
    excerpt: 'Explore white-hat link building techniques that can help improve your domain authority and search rankings.',
    date: 'April 30, 2023',
    category: 'Link Building',
    image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'on-page-seo',
    title: 'On-Page SEO: The Ultimate Checklist',
    excerpt: 'A comprehensive checklist for optimizing your website pages to improve their search engine visibility and rankings.',
    date: 'April 18, 2023',
    category: 'On-Page SEO',
    image: 'https://images.unsplash.com/photo-1540103711724-ebf833bde8d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ahrefs-vs-semrush',
    title: 'Ahrefs vs SEMrush: Which SEO Tool Is Better?',
    excerpt: 'A detailed comparison of two leading SEO tools to help you decide which one is best for your specific needs.',
    date: 'April 5, 2023',
    category: 'Tool Comparison',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'local-seo-guide',
    title: 'Local SEO: How to Rank in Google Maps',
    excerpt: 'Strategies and techniques to improve your local business visibility in Google Maps and local search results.',
    date: 'March 22, 2023',
    category: 'Local SEO',
    image: 'https://images.unsplash.com/photo-1569288063643-5d29ad6a7059?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'content-optimization',
    title: 'Content Optimization Tips for Better Rankings',
    excerpt: 'Learn how to optimize your content for both search engines and users to achieve better rankings and engagement.',
    date: 'March 10, 2023',
    category: 'Content SEO',
    image: 'https://images.unsplash.com/photo-1503551723145-6c040742065b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'seo-tools-stack',
    title: 'The Essential SEO Tools Stack for 2023',
    excerpt: 'Discover the must-have SEO tools for different aspects of search engine optimization in 2023.',
    date: 'February 28, 2023',
    category: 'SEO Tools',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

const categories = [
  "All Categories",
  "SEO Basics",
  "Keyword Research",
  "Technical SEO",
  "On-Page SEO",
  "Link Building",
  "Content SEO",
  "Local SEO",
  "Tool Comparison",
  "SEO Tools"
];

const Blog = () => {
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    // Filter by category
    const matchesCategory = categoryFilter === "All Categories" || post.category === categoryFilter;
    
    // Filter by search query
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-indigo-50 via-blue-50 to-teal-50 py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="SEO Guides & Articles" 
              subtitle="Learn from our comprehensive guides and tutorials"
              centered
            />
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-xl leading-5 bg-white shadow-sm placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary focus:border-primary sm:text-base"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="section-padding">
          <div className="mb-8">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Filter by category</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`text-sm px-3 py-1 rounded-full ${
                    categoryFilter === category
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setCategoryFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">
                Try adjusting your filters or search terms.
              </p>
            </div>
          )}
        </div>
        
        <section className="bg-primary py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Want to improve your SEO skills?
            </h2>
            <p className="text-base md:text-lg text-white/80 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter for the latest SEO tips, guides, and tool recommendations.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  className="px-4 py-3 rounded-lg flex-grow"
                  placeholder="Your email address"
                />
                <button className="btn-primary bg-white text-primary hover:bg-gray-100 flex-shrink-0">
                  Subscribe
                </button>
              </div>
              <p className="text-white/60 text-sm mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
