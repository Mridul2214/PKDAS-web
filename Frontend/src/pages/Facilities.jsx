import React from 'react';

export function Facilities() {
  const facilities = [
    {
      title: "Infrastructure",
      desc: "Modern classrooms with digital learning tools.",
      img: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Labs",
      desc: "Fully equipped computer and science laboratories.",
      img: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Library",
      desc: "Extensive collection of academic resources.",
      img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Hostel",
      desc: "Safe and comfortable accommodation for students.",
      img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <main className="pt-32 pb-24 bg-surface min-h-[80vh]">
      <div className="container mx-auto px-6">
        <h1 className="text-display-lg md:text-7xl font-display text-on-surface mb-16 max-w-4xl">Campus Facilities</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {facilities.map((fac, idx) => (
             <div key={idx} className={`flex flex-col ${idx % 2 !== 0 ? 'md:mt-32' : ''}`}>
                <div className="h-80 md:h-[500px] w-full overflow-hidden mb-8">
                   <img src={fac.img} alt={fac.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0" />
                </div>
                <h2 className="text-3xl font-display text-on-surface mb-4">{fac.title}</h2>
                <p className="text-lg font-body text-on-surface-variant max-w-md">{fac.desc}</p>
             </div>
          ))}
        </div>
      </div>
    </main>
  );
}
