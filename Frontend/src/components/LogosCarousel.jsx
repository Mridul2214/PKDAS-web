import React from 'react';

export function LogosCarousel() {
  const logos = [
    { name: "Tech Mahindra", url: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Tech_Mahindra_New_Logo.svg" },
    { name: "TCS", url: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" },
    { name: "Infosys", url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
    { name: "Wipro", url: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
    { name: "Cognizant", url: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg" },
    { name: "IBM", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" }
  ];

  return (
    <div className="w-full overflow-hidden whitespace-nowrap py-12 bg-white flex items-center shadow-ambient rounded-xl relative">
       {/* Gradient masks for smooth fading edges */}
       <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
       <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

       <div className="inline-block animate-slide-left mr-8">
           {logos.map((logo, i) => (
               <img key={i} src={logo.url} alt={logo.name} className="inline-block h-8 md:h-12 w-auto mx-8 md:mx-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
           ))}
           {/* Duplicate for infinite effect */}
           {logos.map((logo, i) => (
               <img key={`dup-${i}`} src={logo.url} alt={logo.name} className="inline-block h-8 md:h-12 w-auto mx-8 md:mx-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
           ))}
       </div>
    </div>
  );
}
