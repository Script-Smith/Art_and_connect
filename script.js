// GSAP Animations for Hero Section
gsap.from(".hero h1", {
  duration: 1.5,
  opacity: 0,
  y: 50,
  ease: "power3.out",
});

gsap.from(".hero p", {
  duration: 1.5,
  delay: 0.2,
  opacity: 0,
  y: 50,
  ease: "power3.out",
});

gsap.to(".hero", {
  backgroundPosition: "center 150%",
  duration: 6,
  ease: "linear",
  repeat: -1,
  yoyo: true,
});

// Scroll-triggered animations for About Section
gsap.from(".story-container", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 100,
  duration: 1,
  ease: "power2.out",
});

// Parallax Image Effect
gsap.to(".parallax-image", {
  scrollTrigger: {
    trigger: ".story-container",
    scrub: true,
  },
  y: "-20%",
  ease: "none",
});

// Product Card Entrance Animation
gsap.from(".product-item", {
  scrollTrigger: {
    trigger: ".products",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  scale: 0.9,
  stagger: 0.2,
  duration: 1,
  ease: "power2.out",
});

// Step-by-step Process Animation
gsap.from(".step", {
  scrollTrigger: {
    trigger: ".process",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  x: 100,
  stagger: 0.2,
  duration: 1.2,
  ease: "power2.out",
});

gsap.registerPlugin(ScrollTrigger);

// Hover animations for each product item
document.querySelectorAll(".product-item").forEach((item) => {
  const img = item.querySelector("img");
  const bg = item.querySelector(".product-bg");

  const hoverTl = gsap.timeline({ paused: true });

  hoverTl
    .to(img, {
      scale: 1.1,
      rotation: 5,
      duration: 0.3,
      ease: "power2.out",
    })
    .to(
      bg,
      {
        opacity: 0.1,
        rotation: 15,
        duration: 0.3,
        ease: "power2.out",
      },
      0
    )
    .to(
      item,
      {
        y: -10,
        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
        duration: 0.3,
        ease: "power2.out",
      },
      0
    );

  item.addEventListener("mouseenter", () => hoverTl.play());
  item.addEventListener("mouseleave", () => hoverTl.reverse());
});

// Scroll-triggered animations
gsap.utils.toArray(".product-item").forEach((item, index) => {
  gsap.to(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
      toggleActions: "play none none reverse",
    },
    rotation: index % 2 === 0 ? 5 : -5,
    scale: 1.05,
    duration: 1,
  });
});



