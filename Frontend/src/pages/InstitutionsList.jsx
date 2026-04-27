import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHomeData } from '../hooks/useHomeData';
import { getCollege } from '../data/collegeRegistry';

export default function InstitutionsList() {
  const containerRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { institutionCategories } = useHomeData();

  // Flatten all colleges from categories
  const allColleges = institutionCategories.flatMap(category =>
    category.colleges.map(college => ({
      ...college,
      category: category.title,
      categoryImg: category.img,
      categoryDescription: category.description
    }))
  );

  // Filter colleges based on search and category
  const filteredColleges = allColleges.filter(college => {
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         college.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || college.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <main ref={containerRef} className="bg-surface min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary-darker">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2000&q=80" 
            alt="Campus Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-darker/50"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-white mb-6 leading-tight">
            All <span className="text-yellow-300">Institutions</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Explore our complete network of specialized colleges and institutes, each dedicated to excellence in their respective domains.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-yellow-300">{allColleges.length}</div>
              <div className="text-sm text-white/80 uppercase tracking-wider">Institutions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-yellow-300">{institutionCategories.length}</div>
              <div className="text-sm text-white/80 uppercase tracking-wider">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-yellow-300">50k+</div>
              <div className="text-sm text-white/80 uppercase tracking-wider">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-yellow-300">100%</div>
              <div className="text-sm text-white/80 uppercase tracking-wider">Placement</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search institutions by name or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-lg"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Categories
              </button>
              {institutionCategories.map((category) => (
                <button
                  key={category.title}
                  onClick={() => setSelectedCategory(category.title)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                    selectedCategory === category.title
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="mb-8 text-center">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-primary">{filteredColleges.length}</span> institution{filteredColleges.length !== 1 ? 's' : ''}
            </p>
          </div>

          {filteredColleges.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredColleges.map((college, index) => {
                const collegeData = getCollege(college.slug);
                return (
                  <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    {/* Image Section */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={collegeData?.img || college.categoryImg} 
                        alt={college.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      
                      {/* Category Badge */}
                      <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                        {college.category}
                      </span>
                      
                      {/* Quick Stats */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex gap-4">
                          {collegeData?.students && (
                            <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
                              <div className="text-xs font-bold text-gray-900">{collegeData.students}</div>
                              <div className="text-[8px] text-gray-600 uppercase">Students</div>
                            </div>
                          )}
                          {collegeData?.programs && (
                            <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
                              <div className="text-xs font-bold text-gray-900">{collegeData.programs}</div>
                              <div className="text-[8px] text-gray-600 uppercase">Programs</div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <h3 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                        {college.name}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {collegeData?.description || college.categoryDescription}
                      </p>

                      {/* Highlights */}
                      {collegeData?.highlights && (
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {collegeData.highlights.slice(0, 3).map((highlight, idx) => (
                              <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Action Button */}
                      <Link
                        to={`/college/${college.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-bold uppercase tracking-wider rounded-xl hover:bg-primary-dark transition-colors"
                      >
                        Explore Institution
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">No institutions found</h3>
                <p className="text-gray-600">
                  Try adjusting your search terms or browse all categories
                </p>
                <button
                  onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
                  className="mt-4 px-6 py-2 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-dark transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display text-white mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Discover the perfect institution for your academic journey and career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="px-8 py-4 bg-white text-primary font-bold uppercase tracking-wider rounded-xl hover:bg-gray-100 transition-colors"
            >
              Explore Programs
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-transparent text-white border-2 border-white font-bold uppercase tracking-wider rounded-xl hover:bg-white hover:text-primary transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
