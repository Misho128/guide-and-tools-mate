
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, FileText, Settings, Map } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import ToolCard, { ToolCardProps } from '../components/ToolCard';
import BlogCard, { BlogCardProps } from '../components/BlogCard';
import CategoryCard from '../components/CategoryCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const featuredTools: ToolCardProps[] = [
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
  }
];

const latestGuides: BlogCardProps[] = [
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
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection 
          title="Free SEO Tools & Resources for Every Website"
          subtitle="BestSEOTools.com provides free tools, practical guides, and honest reviews to help you improve your search rankings."
          ctaText="Explore SEO Tools"
          ctaLink="/tools"
        />
        
        {/* Featured Tools Section */}
        <section className="section-padding">
          <SectionHeading 
            title="Featured SEO Tools" 
            subtitle="Our most popular tools to help you optimize your website"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.id} {...tool} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/tools" className="btn-secondary">
              View All Tools
            </Link>
          </div>
        </section>
        
        {/* Tool Categories Grid */}
        <section className="section-padding bg-gray-50">
          <SectionHeading 
            title="SEO Tool Categories" 
            subtitle="Find the right tools for your specific SEO needs"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryCard 
              title="Keyword Research" 
              icon={<Search className="h-6 w-6 text-white" />}
              description="Find the best keywords to target for your SEO strategy"
              link="/tools?category=keyword-research"
              color="bg-seo-blue"
            />
            <CategoryCard 
              title="Technical SEO" 
              icon={<Settings className="h-6 w-6 text-white" />}
              description="Tools to improve your website's technical performance"
              link="/tools?category=technical-seo"
              color="bg-seo-purple"
            />
            <CategoryCard 
              title="Content Tools" 
              icon={<FileText className="h-6 w-6 text-white" />}
              description="Create and optimize content that ranks higher in search results"
              link="/tools?category=content-tools"
              color="bg-seo-teal"
            />
            <CategoryCard 
              title="Local SEO" 
              icon={<Map className="h-6 w-6 text-white" />}
              description="Boost your visibility in local search results"
              link="/tools?category=local-seo"
              color="bg-seo-green"
            />
          </div>
        </section>
        
        {/* Latest Guides Section */}
        <section className="section-padding">
          <SectionHeading 
            title="Latest SEO Guides" 
            subtitle="Practical advice and tutorials to help you master SEO"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestGuides.map((guide) => (
              <BlogCard key={guide.id} {...guide} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/blog" className="btn-secondary">
              Read All Guides
            </Link>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-primary py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to improve your search rankings?
            </h2>
            <p className="text-base md:text-lg text-white/80 mb-8 max-w-3xl mx-auto">
              Explore our free SEO tools, learn from our comprehensive guides, or get premium software at a discount.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tools" className="btn-primary bg-white text-primary hover:bg-gray-100">
                Free SEO Tools
              </Link>
              <Link to="/affiliate" className="btn-primary bg-transparent border border-white hover:bg-white/10">
                Premium Software
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
