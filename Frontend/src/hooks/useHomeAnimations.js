import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useHomeAnimations(container) {
  useGSAP(() => {
    // Reveal individual elements
    const reveals = gsap.utils.toArray('.gsap-reveal');
    gsap.set(reveals, { opacity: 0, y: 30 });
    reveals.forEach((element) => {
      gsap.to(element, {
        opacity: 1, y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: element, start: 'top 90%', toggleActions: 'play none none none' }
      });
    });

    // Patterned Reveals - Left
    const revealsLeft = gsap.utils.toArray('.gsap-reveal-left');
    gsap.set(revealsLeft, { opacity: 0, x: -50 });
    revealsLeft.forEach((element) => {
      gsap.to(element, {
        opacity: 1, x: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: { trigger: element, start: 'top 90%' }
      });
    });

    // Patterned Reveals - Right
    const revealsRight = gsap.utils.toArray('.gsap-reveal-right');
    gsap.set(revealsRight, { opacity: 0, x: 50 });
    revealsRight.forEach((element) => {
      gsap.to(element, {
        opacity: 1, x: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: { trigger: element, start: 'top 90%' }
      });
    });

    // Stagger parent blocks
    const staggerSections = gsap.utils.toArray('.gsap-stagger-parent');
    staggerSections.forEach((parent) => {
      const children = parent.querySelectorAll('.gsap-stagger-child');
      gsap.set(children, { opacity: 0, y: 30, scale: 0.95 });
      gsap.to(children, {
        opacity: 1, y: 0, scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.2)',
        scrollTrigger: { trigger: parent, start: 'top 85%' }
      });
    });

    // Parallax effect for image cards
    gsap.utils.toArray('.parallax-img-container').forEach((container) => {
      const img = container.querySelector('img');
      if (!img) return;
      gsap.fromTo(img, 
        { yPercent: -12 },
        {
          yPercent: 12,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          },
          force3D: true
        }
      );
    });

    // Empowering Next Gen Images (Right side)
    const aboutImages = gsap.utils.toArray('.about-floating-img');
    if (aboutImages.length > 0) {
      aboutImages.forEach((img) => {
        const isCentered = img.classList.contains('-translate-x-1/2');
        gsap.set(img, {
          opacity: 0,
          y: 120, // Reduced from 200 for smoother feel
          ...(isCentered ? { xPercent: -50, yPercent: -50 } : {})
        });
      });

      gsap.to(aboutImages, {
        opacity: 1,
        y: 0,
        duration: 1.4,
        stagger: 0.12,
        ease: 'power3.out', // Shifting to power3 for smoother deceleration
        force3D: true,
        scrollTrigger: {
          trigger: '.about-image-grid-trigger',
          start: 'top 85%',
        }
      });
    }

    // About Section Background Elements
    const bgShapes = gsap.utils.toArray('.about-bg-shape');
    if (bgShapes.length > 0) {
      gsap.set(bgShapes, { opacity: 0, scale: 0.7 });
      gsap.to(bgShapes, {
        opacity: 1,
        scale: 1,
        duration: 2.5,
        stagger: 0.4,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about-section-trigger',
          start: 'top 80%',
        }
      });
    }

    const bgDots = container.current?.querySelector('.about-bg-dots');
    if (bgDots) {
      gsap.set(bgDots, { opacity: 0, y: 40 });
      gsap.to(bgDots, {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-section-trigger',
          start: 'top 85%',
        }
      });
    }

    // Generic Section Background Blobs Reveal
    const sectionBlobs = gsap.utils.toArray('.section-bg-blob');
    if (sectionBlobs.length > 0) {
      gsap.set(sectionBlobs, { opacity: 0, scale: 0.8 });
      sectionBlobs.forEach((blob) => {
        gsap.to(blob, {
          opacity: 1,
          scale: 1,
          duration: 3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: blob,
            start: 'top 95%',
          }
        });
      });
    }

    // Robust multi-stage refresh to handle SPA navigation timing
    // Stage 1: after next paint
    requestAnimationFrame(() => ScrollTrigger.refresh());
    // Stage 2: after images start loading and layout shifts settle
    const t1 = setTimeout(() => ScrollTrigger.refresh(true), 500);
    // Stage 3: final safety net after heavy assets load
    const t2 = setTimeout(() => ScrollTrigger.refresh(true), 1500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };

  }, { scope: container });
}
