
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ToolCard, { ToolCardProps } from '../components/ToolCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const toolData: ToolCardProps[] = [
  {
    id: 'keyword-planner',
    name: 'Keyword Planner',
    description: 'Discover high-value keywords for your SEO strategy with our free keyword research tool.',
    type: 'free',
    category: 'Keyword Research',
    ctaText: 'Use Tool',
  },
  {
    id: 'backlink-checker',
    name: 'Backlink Checker',
    description: 'Analyze your backlink profile and find new opportunities to improve your domain authority.',
    type: 'free',
    category: 'Link Building',
    ctaText: 'Use Tool',
  },
  {
    id: 'seo-analyzer',
    name: 'SEO Analyzer',
    description: 'Get a comprehensive analysis of your website\'s on-page SEO with actionable recommendations.',
    type: 'free',
    category: 'Technical SEO',
    ctaText: 'Use Tool',
  },
  {
    id: 'ahrefs',
    name: 'Ahrefs',
    description: 'All-in-one SEO toolset for backlink analysis, keyword research, competitor analysis, and more.',
    type: 'affiliate',
    category: 'All-in-One SEO',
    ctaText: 'Try with Discount',
    image: 'https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'semrush',
    name: 'SEMrush',
    description: 'Comprehensive SEO platform for keyword research, competitive analysis, site auditing, and more.',
    type: 'affiliate',
    category: 'All-in-One SEO',
    ctaText: 'Try with Discount',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'meta-tag-analyzer',
    name: 'Meta Tag Analyzer',
    description: 'Check if your meta tags are optimized for search engines and improve them with recommendations.',
    type: 'free',
    category: 'Technical SEO',
    ctaText: 'Use Tool',
  },
  {
    id: 'rank-tracker',
    name: 'Rank Tracker',
    description: 'Monitor your website\'s position in search results for your target keywords over time.',
    type: 'free',
    category: 'Rank Tracking',
    ctaText: 'Use Tool',
  },
  {
    id: 'content-optimizer',
    name: 'Content Optimizer',
    description: 'Get recommendations to improve your content\'s relevance and readability for better ranking.',
    type: 'free',
    category: 'Content Tools',
    ctaText: 'Use Tool',
  },
  {
    id: 'mangools',
    name: 'Mangools',
    description: 'Suite of 5 SEO tools for keyword research, SERP analysis, backlink analysis, and rank tracking.',
    type: 'affiliate',
    category: 'All-in-One SEO',
    ctaText: 'Try with Discount',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

const categories = [
  "All Categories",
  "Keyword Research",
  "Technical SEO",
  "Content Tools",
  "Link Building",
  "Rank Tracking",
  "All-in-One SEO",
  "Local SEO"
];

const ToolsLibrary = () => {
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [typeFilter, setTypeFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTools = toolData.filter((tool) => {
    // Filter by category
    const matchesCategory = categoryFilter === "All Categories" || tool.category === categoryFilter;
    
    // Filter by type
    const matchesType = typeFilter === "all" || tool.type === typeFilter;
    
    // Filter by search query
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-indigo-50 via-blue-50 to-teal-50 py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="SEO Tools Library" 
              subtitle="Browse our collection of free and recommended premium tools"
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
                  placeholder="Search for tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="section-padding">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div className="mb-4 md:mb-0">
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
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Filter by type</h3>
              <div className="flex gap-2">
                <button
                  className={`text-sm px-3 py-1 rounded-full ${
                    typeFilter === 'all'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setTypeFilter('all')}
                >
                  All Types
                </button>
                <button
                  className={`text-sm px-3 py-1 rounded-full ${
                    typeFilter === 'free'
                      ? 'bg-seo-green text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setTypeFilter('free')}
                >
                  Free
                </button>
                <button
                  className={`text-sm px-3 py-1 rounded-full ${
                    typeFilter === 'affiliate'
                      ? 'bg-seo-purple text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setTypeFilter('affiliate')}
                >
                  Affiliate
                </button>
              </div>
            </div>
          </div>
          
          {filteredTools.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map((tool) => (
                <ToolCard key={tool.id} {...tool} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No tools found</h3>
              <p className="text-gray-600">
                Try adjusting your filters or search terms.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ToolsLibrary;
