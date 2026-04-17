import React from 'react';
import { Link } from 'react-router-dom';
import { WavyDivider } from './WavyDivider';
import { CardContainer, CardBody, CardItem } from '../ui/3d-card';

export const HomeCulture = ({ cultureSections }) => {
  return (
    <section className="relative z-[20] py-32 bg-surface overflow-hidden">
      <WavyDivider type="wave2" color="white" position="top" flipped={true} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 max-w-3xl mx-auto text-center">
          <div className="gsap-reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-on-surface-variant text-xs font-bold tracking-widest uppercase mb-5">
            Student Experience
          </div>
          <h2 className="gsap-reveal text-5xl md:text-6xl lg:text-7xl font-display font-bold text-on-surface leading-none mb-5">
            Campus
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600"> Life</span>
          </h2>
          <p className="gsap-reveal text-on-surface-variant font-body text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
            A world beyond academics — discover the vibrant events, sports, arts, and clubs that make NASC a truly unforgettable place to grow.
          </p>
        </div>

        <div className="flex flex-col gap-24 md:gap-32">
          {cultureSections.map((section, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`gsap-reveal-${section.reverse ? 'right' : 'left'} w-full ${section.reverse ? 'lg:order-2' : 'lg:order-1'}`}>
                <CardContainer className="w-full">
                  <CardBody className="w-full h-[300px] md:h-[400px] lg:h-[460px] rounded-2xl overflow-hidden relative shadow-2xl">
                    <CardItem translateZ={60} className="w-full h-full">
                      <video
                        src={section.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </CardItem>
                    <CardItem
                      translateZ={90}
                      className="absolute top-4 left-4 px-3 py-1 bg-primary/90 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest rounded-full"
                    >
                      {section.subtitle}
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>

              <div className={`gsap-reveal-${section.reverse ? 'left' : 'right'} max-w-xl mx-auto lg:mx-0 ${section.reverse ? 'lg:order-1' : 'lg:order-2'}`}>
                <p className="gsap-reveal text-primary font-cursive text-3xl lg:text-4xl capitalize mb-2 drop-shadow-md">{section.subtitle}</p>
                <h2 className="gsap-reveal text-4xl md:text-5xl font-display text-on-surface mb-6 font-bold leading-tight">{section.title}</h2>
                <p className="gsap-reveal text-on-surface-variant font-body leading-relaxed mb-10 text-lg md:text-xl">{section.description}</p>
                <div className="gsap-reveal">
                  <Link to={section.buttonLink} className="inline-block px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors shadow-lg">
                    {section.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
