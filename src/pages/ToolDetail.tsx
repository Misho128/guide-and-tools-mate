
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface ToolDetailData {
  id: string;
  name: string;
  description: string;
  type: 'free' | 'paid' | 'affiliate';
  category: string;
  useCase: string;
  features: string[];
  pros: string[];
  cons: string[];
  ctaText: string;
  ctaLink: string;
  image?: string;
}

const toolDetails: Record<string, ToolDetailData> = {
  'keyword-planner': {
    id: 'keyword-planner',
    name: 'Keyword Planner',
    description: 'Our free Keyword Planner tool helps you discover valuable keywords for your SEO strategy. Find high-volume, low-competition keywords that will help your content rank higher in search results.',
    type: 'free',
    category: 'Keyword Research',
    useCase: 'Use this tool when planning content for your website or blog. It will help you identify keywords that your target audience is searching for, allowing you to create more relevant content.',
    features: [
      'Search volume analysis',
      'Keyword difficulty score',
      'Related keyword suggestions',
      'Search trend data',
      'Competitor keyword analysis'
    ],
    pros: [
      'Completely free to use',
      'No registration required',
      'User-friendly interface',
      'Export results to CSV',
      'Updated keyword data'
    ],
    cons: [
      'Limited to 100 keyword suggestions per search',
      'Less comprehensive than paid tools',
      'No historical data available'
    ],
    ctaText: 'Use Tool Now',
    ctaLink: '/tools/keyword-planner/use',
  },
  'ahrefs': {
    id: 'ahrefs',
    name: 'Ahrefs',
    description: 'Ahrefs is an all-in-one SEO toolset that offers powerful features for backlink analysis, keyword research, competitor analysis, content research, rank tracking, and more.',
    type: 'affiliate',
    category: 'All-in-One SEO',
    useCase: 'Perfect for SEO professionals, digital marketers, and business owners who need comprehensive insights into their website\'s performance and competitors\' strategies.',
    features: [
      'Site Explorer for backlink analysis',
      'Keywords Explorer for keyword research',
      'Content Explorer for content research',
      'Rank Tracker for position monitoring',
      'Site Audit for technical SEO',
      'Alerts for backlink monitoring'
    ],
    pros: [
      'Best-in-class backlink database',
      'Intuitive user interface',
      'Comprehensive competitor analysis',
      'Frequent data updates',
      'Excellent customer support'
    ],
    cons: [
      'Premium pricing',
      'Steep learning curve for beginners',
      'Limited free features'
    ],
    ctaText: 'Try Ahrefs with Our Discount',
    ctaLink: '/affiliate/ahrefs',
    image: 'https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
};

const ToolDetail = () => {
  const { id } = useParams<{ id: string }>();
  const tool = id ? toolDetails[id] : null;

  if (!tool) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Tool Not Found</h1>
            <p className="text-gray-600 mb-6">The tool you're looking for doesn't exist or has been removed.</p>
            <Link to="/tools" className="btn-primary">
              Browse All Tools
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-indigo-50 via-blue-50 to-teal-50 py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center mb-4">
              <Link to="/tools" className="text-sm text-gray-600 hover:text-primary">
                ← Back to Tools
              </Link>
              <span className="mx-2 text-gray-400">•</span>
              <span className="text-sm text-gray-600">{tool.category}</span>
              <span className="ml-auto">
                <span className={`tag ${tool.type === 'free' ? 'tag-free' : tool.type === 'paid' ? 'tag-paid' : 'tag-affiliate'}`}>
                  {tool.type.charAt(0).toUpperCase() + tool.type.slice(1)}
                </span>
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {tool.name}
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mb-8">
              {tool.description}
            </p>
            <a 
              href={tool.ctaLink} 
              className="btn-primary shadow-md text-base"
            >
              {tool.ctaText}
            </a>
          </div>
        </div>
        
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {tool.image && (
                <div className="mb-8 rounded-xl overflow-hidden shadow-sm">
                  <img 
                    src={tool.image} 
                    alt={tool.name} 
                    className="w-full h-auto"
                  />
                </div>
              )}
              
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Use Case</h2>
                <p className="text-gray-700">{tool.useCase}</p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Key Features</h2>
                <ul className="space-y-2">
                  {tool.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 mt-1 text-primary">
                        <Check className="h-5 w-5" />
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Pros</h3>
                  <ul className="space-y-2">
                    {tool.pros.map((pro, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 mt-1 text-seo-green">
                          <Check className="h-5 w-5" />
                        </span>
                        <span className="text-gray-700">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-red-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Cons</h3>
                  <ul className="space-y-2">
                    {tool.cons.map((con, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 mt-1 text-seo-red">
                          <X className="h-5 w-5" />
                        </span>
                        <span className="text-gray-700">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 sticky top-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tool Summary</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Category</p>
                    <p className="font-medium">{tool.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Type</p>
                    <p className="font-medium capitalize">{tool.type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Features</p>
                    <p className="font-medium">{tool.features.length}</p>
                  </div>
                </div>
                <a 
                  href={tool.ctaLink} 
                  className="btn-primary w-full justify-center mb-4"
                >
                  {tool.ctaText}
                </a>
                {tool.type === 'affiliate' && (
                  <p className="text-xs text-gray-500 text-center">
                    This is an affiliate link. We may earn a commission if you sign up.
                  </p>
                )}
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Related Tools</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/tools/keyword-planner" className="text-primary hover:underline text-sm">
                        Keyword Planner
                      </Link>
                    </li>
                    <li>
                      <Link to="/tools/backlink-checker" className="text-primary hover:underline text-sm">
                        Backlink Checker
                      </Link>
                    </li>
                    <li>
                      <Link to="/tools/seo-analyzer" className="text-primary hover:underline text-sm">
                        SEO Analyzer
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <section className="bg-gray-50 py-12 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Explore More SEO Tools
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Check out our full collection of free and premium SEO tools to help improve your website's search performance.
            </p>
            <Link to="/tools" className="btn-primary">
              Browse All Tools
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ToolDetail;
