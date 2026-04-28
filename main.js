if (
  document.querySelector(".card-img-link") &&
  document.querySelector(".card-btn-link")
) {
  const imgs = document.querySelectorAll(".card-img-link");
  const btns = document.querySelectorAll(".card-btn-link");

  const activateCss = function (e, i) {
    e.classList.add("hovered");
    i.classList.add("hovered");
  };
  const deactiveCss = function (e, i) {
    e.classList.remove("hovered");
    i.classList.remove("hovered");
  };

  const mouseAction = function (a, b) {
    a.forEach((el, index) => {
      el.addEventListener("mouseover", () => {
        activateCss(el, b[index]);
      });
      el.addEventListener("mouseout", () => {
        deactiveCss(el, b[index]);
      });
    });
  };

  mouseAction(imgs, btns);
  mouseAction(btns, imgs);
}

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, TextPlugin);
  // gsap code here!
  ScrollSmoother.create({
    smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
    effects: true, // looks for data-speed and data-lag attributes on elements
    smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
  });

  const nav = document.querySelector("nav");
  const body = document.body;

  const toggleNavClasses = () => {
    if (!nav) return;

    if (window.scrollY > 200) {
      nav.classList.remove("p-top");
    } else {
      nav.classList.add("p-top");
    }
  };

  window.addEventListener("scroll", toggleNavClasses);
  toggleNavClasses();

  if (document.querySelector(".hero-content")) {
    gsap.from(".hero-content > *", {
      y: 40,
      opacity: 0,
      duration: 2,
      ease: "power3.out",
      stagger: 0.2,
    });
  } else {
    gsap.from("h1", {
      x: 100,
      autoAlpha: 0,
      duration: 2,
      ease: "power3.out",
    });
  }

  gsap.utils.toArray(".t-h2").forEach((t) => {
    gsap.from(t, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: t,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });

  gsap.utils.toArray(".section-content").forEach((s) => {
    gsap.from(s.children, {
      y: 40,
      opacity: 0,
      duration: 2,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: s,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });
  gsap.utils.toArray(".row").forEach((row) => {
    const cols = row.querySelectorAll('[class*="col"]');

    gsap.from(cols, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: row,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });

  gsap.set([".outer-ring", ".inner-wave"], {
    transformOrigin: "50% 50%",
    svgOrigin: "604.875 600.59",
  });

  gsap.to(".outer-ring", {
    rotation: 360,
    duration: 18,
    ease: "none",
    repeat: -1,
  });

  gsap.to(".inner-wave", {
    rotation: -360,
    duration: 12,
    ease: "none",
    repeat: -1,
  });
});
