
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface AffiliateTool {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  discountPrice?: string;
  features: string[];
  pros: string[];
  cons: string[];
  bestFor: string;
  ctaText: string;
  ctaLink: string;
}

const affiliateTools: AffiliateTool[] = [
  {
    id: 'ahrefs',
    name: 'Ahrefs',
    description: 'All-in-one SEO toolset for backlink analysis, keyword research, competitor analysis, and more.',
    image: 'https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: '$99/month',
    discountPrice: '$79/month',
    features: [
      'Site Explorer for backlink analysis',
      'Keywords Explorer for keyword research',
      'Content Explorer for content research',
      'Rank Tracker for position monitoring',
      'Site Audit for technical SEO'
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
    bestFor: 'SEO professionals and agencies who need comprehensive competitor and backlink analysis',
    ctaText: 'Get Ahrefs Discount',
    ctaLink: '/affiliate/ahrefs',
  },
  {
    id: 'semrush',
    name: 'SEMrush',
    description: 'Comprehensive SEO platform for keyword research, competitive analysis, site auditing, and more.',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: '$119.95/month',
    discountPrice: '$99.95/month',
    features: [
      'Domain Overview for competitive analysis',
      'Keyword Magic Tool for keyword research',
      'Site Audit for technical SEO issues',
      'Position Tracking for rank monitoring',
      'Backlink Audit for link profile analysis',
      'Social Media Toolkit'
    ],
    pros: [
      'Excellent keyword research tools',
      'Strong competitor analysis features',
      'Comprehensive SEO audit capabilities',
      'Integrated PPC and social media tools',
      'Wide range of features beyond SEO'
    ],
    cons: [
      'Higher price point',
      'Can be overwhelming for beginners',
      'Some data discrepancies compared to other tools'
    ],
    bestFor: 'Digital marketing agencies and businesses that need both SEO and PPC insights',
    ctaText: 'Get SEMrush Discount',
    ctaLink: '/affiliate/semrush',
  },
  {
    id: 'mangools',
    name: 'Mangools',
    description: 'Suite of 5 SEO tools for keyword research, SERP analysis, backlink analysis, and rank tracking.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: '$49/month',
    discountPrice: '$29.90/month',
    features: [
      'KWFinder for keyword research',
      'SERPChecker for SERP analysis',
      'SERPWatcher for rank tracking',
      'LinkMiner for backlink analysis',
      'SiteProfiler for site analysis'
    ],
    pros: [
      'User-friendly interface',
      'Affordable pricing',
      'Great for beginners',
      'Accurate keyword difficulty score',
      'Simple and clean design'
    ],
    cons: [
      'Less comprehensive than premium tools',
      'Limited daily searches on lower plans',
      'Fewer advanced features'
    ],
    bestFor: 'Beginners, bloggers, and small businesses looking for affordable and user-friendly SEO tools',
    ctaText: 'Get Mangools Discount',
    ctaLink: '/affiliate/mangools',
  }
];

const Affiliate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-indigo-50 via-blue-50 to-teal-50 py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <SectionHeading 
              title="Premium SEO Tools" 
              subtitle="Get exclusive discounts on industry-leading SEO software"
              centered
            />
            <p className="max-w-2xl mx-auto text-gray-600 mb-6">
              We've partnered with the best SEO tools in the industry to bring you special discounts. 
              Try these premium tools to take your SEO to the next level.
            </p>
            <p className="text-sm text-gray-500 mb-0">
              Note: We may earn a commission if you purchase through our affiliate links at no extra cost to you.
            </p>
          </div>
        </div>
        
        <div className="section-padding">
          <div className="space-y-16">
            {affiliateTools.map((tool, index) => (
              <div key={tool.id} className={`grid grid-cols-1 lg:grid-cols-3 gap-8 ${
                index < affiliateTools.length - 1 ? 'pb-16 border-b border-gray-200' : ''
              }`}>
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                    <div className="h-48 bg-gray-100 overflow-hidden">
                      <img 
                        src={tool.image} 
                        alt={tool.name} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h2 className="text-xl font-bold text-gray-900 mb-2">{tool.name}</h2>
                      <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                      
                      <div className="mb-4">
                        <span className="text-sm text-gray-500">Regular price:</span>
                        <span className="text-lg font-bold text-gray-900 ml-2 line-through">{tool.price}</span>
                      </div>
                      
                      <div className="mb-6">
                        <span className="text-sm text-gray-500">Discount price:</span>
                        <span className="text-xl font-bold text-seo-green ml-2">{tool.discountPrice}</span>
                      </div>
                      
                      <a 
                        href={tool.ctaLink} 
                        className="btn-primary w-full text-center"
                      >
                        {tool.ctaText}
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                    {tool.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 mt-1 text-primary">
                          <Check className="h-5 w-5" />
                        </span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
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
                    
                    <div>
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
                  
                  <div className="bg-gray-50 rounded-xl p-5 mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Best For</h3>
                    <p className="text-gray-700">{tool.bestFor}</p>
                  </div>
                  
                  <div className="text-right">
                    <a 
                      href={tool.ctaLink} 
                      className="btn-primary"
                    >
                      {tool.ctaText}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Not ready for premium tools?
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Check out our collection of free SEO tools that can help you get started without spending a penny.
            </p>
            <Link to="/tools" className="btn-primary">
              Explore Free SEO Tools
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Affiliate;
