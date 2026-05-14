import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useHomeData } from '../hooks/useHomeData';
import { useNavigationData } from '../hooks/useNavigationData';
import { collegeRegistry } from '../data/collegeRegistry';

export function Search() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');

  const { news, events, highlights } = useHomeData();
  const navigationData = useNavigationData();

  // Aggregate all searchable items
  const allData = useMemo(() => {
    const items = [];

    // Colleges
    Object.entries(collegeRegistry).forEach(([slug, college]) => {
      items.push({
        id: `college-${slug}`,
        title: college.name,
        description: college.description,
        category: 'Colleges',
        path: `/college/${slug}`,
        tags: [college.location, college.category, college.shortName],
        image: college.img
      });
    });

    // News
    news.forEach(item => {
      items.push({
        id: `news-${item.id}`,
        title: item.title,
        description: item.excerpt,
        category: 'News',
        path: `/news/${item.id}`,
        tags: [item.category, item.date, item.month],
        image: item.image
      });
    });

    // Events
    events.forEach(item => {
      items.push({
        id: `event-${item.id}`,
        title: item.title,
        description: item.caption,
        category: 'Events',
        path: `/events/${item.id}`,
        tags: [item.type, item.location, item.date],
        image: item.image
      });
    });

    // Highlights
    highlights.forEach(item => {
      items.push({
        id: `highlight-${item.slug}`,
        title: item.title,
        description: item.desc,
        category: 'Highlights',
        path: `/highlights/${item.slug}`,
        tags: [],
        image: item.images?.[0]
      });
    });

    // Navigation Links
    Object.keys(navigationData).forEach(menuKey => {
      const menu = navigationData[menuKey];
      if (menu.categories) {
        menu.categories.forEach(cat => {
          cat.items.forEach(item => {
            items.push({
              id: `nav-${item.name}-${item.path}`,
              title: item.name,
              description: item.desc,
              category: 'Pages',
              path: item.path,
              tags: [menuKey, cat.title],
              image: null
            });
          });
        });
      }
      if (menu.items) {
        menu.items.forEach(item => {
          items.push({
            id: `nav-simple-${item.name}-${item.path}`,
            title: item.name,
            description: item.desc,
            category: 'Pages',
            path: item.path,
            tags: [menuKey],
            image: null
          });
        });
      }
    });

    return items;
  }, [news, events, highlights, navigationData]);

  // Normalization function to handle btech vs b.tech
  const normalize = (str) => {
    if (!str) return '';
    return str.toLowerCase().replace(/[.\s-]/g, '');
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get('q') || '';
    setSearchQuery(q);

    if (q.trim()) {
      const normalizedQuery = normalize(q);
      const filtered = allData.filter(item => {
        // Match original string for exactness
        const originalStr = `${item.title} ${item.description} ${item.category} ${item.tags.join(' ')}`.toLowerCase();
        
        // Match normalized string for flexibility (btech vs b.tech)
        const normalizedStr = normalize(`${item.title} ${item.description} ${item.category} ${item.tags.join(' ')}`);
        
        return originalStr.includes(q.toLowerCase()) || normalizedStr.includes(normalizedQuery);
      });
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [location.search, allData]);

  const filteredResults = activeFilter === 'All' 
    ? results 
    : results.filter(r => r.category === activeFilter);

  const categories = ['All', ...new Set(results.map(r => r.category))];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-4">
            Search <span className="text-primary italic">Results</span>
          </h1>
          <p className="text-on-surface-variant font-body">
            {results.length > 0 
              ? `Showing ${filteredResults.length} results for "${searchQuery}"`
              : searchQuery 
                ? `No results found for "${searchQuery}"`
                : "Enter a search term to find what you're looking for."
            }
          </p>
        </div>

        {results.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  activeFilter === cat 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'bg-white text-on-surface hover:bg-gray-50 border border-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResults.map((item) => (
            <Link 
              to={item.path} 
              key={item.id}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col"
            >
              {item.image && (
                <div className="h-48 overflow-hidden relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-wider rounded-full shadow-sm">
                      {item.category}
                    </span>
                  </div>
                </div>
              )}
              <div className="p-8 flex-grow flex flex-col">
                {!item.image && (
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-wider rounded-full">
                      {item.category}
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-display font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-on-surface-variant font-body line-clamp-3 opacity-70 mb-6">
                  {item.description}
                </p>
                <div className="mt-auto flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                  Learn More
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {results.length === 0 && searchQuery && (
          <div className="text-center py-32 bg-white rounded-[3rem] border border-dashed border-gray-200">
            <div className="mb-6 opacity-20 flex justify-center">
              <svg className="w-20 h-20 text-on-surface" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-display font-bold text-on-surface mb-4">No results found</h2>
            <p className="text-on-surface-variant font-body mb-8">Try searching for "B.Tech", "Nursing", or "MBA".</p>
            <Link to="/" className="inline-flex px-8 py-4 bg-primary text-white rounded-xl font-bold text-xs uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 transition-all">
              Back Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
