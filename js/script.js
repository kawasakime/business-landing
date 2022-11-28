const qualityItems = [
  { background: "#aff5cb", shadow: "#37F382" },
  { background: "#FFE3C4", shadow: "#F39D37" },
  { background: "#CFE2FF", shadow: "#3782F3" },
  { background: "#FFD2D2", shadow: "#F33737" },
];

function standartAnimation(element, delay) {
  anime({
    targets: element,
    opacity: 1,
    translateX: 0,
    delay: delay,
    duration: 1000,
  });
}

function animateCoin(element, deg, duration) {
  anime({
    targets: element,
    keyframes: [{ translateZ: 0 }, { translateZ: `${deg}` }, { translateZ: 0 }],
    duration: duration,
    easing: "linear(1, .8)",
    loop: true,
  });
}

function animateMainSection() {
  //header
  anime({
    targets: "#main-section header",
    translateY: 0,
  });

  //title
  standartAnimation("#main-section .title h1", 0);
  standartAnimation("#main-section .title h2", 500);

  //blocks
  const blocks = document.querySelectorAll(".blocks .block");

  blocks.forEach((element, i) => {
    standartAnimation(element, 300 * i);
    anime({
      targets: element.querySelector(".block__indicator"),
      boxShadow: "0px 0px 10px #22cbd5",
      background: "#22cbd5",
      delay: 300 * i + 400,
    });
  });

  //button
  anime({
    targets: "#main-section button",
    opacity: 1,
    translateX: 0,
    delay: 1000,
  });

  //coins
  anime({
    targets: "#main-section .bg-coins",
    translateY: 0,
    duration: 2000,
  });
}

function animateSecondSection(element) {
  document.querySelector("#second-section").scrollIntoView({ block: "center", behavior: "smooth" });

  //img container
  anime({ targets: element, translateX: 0 });

  //coins
  anime({ targets: "#second-section .dollar", opacity: 1, delay: 1000 });
  anime({ targets: "#second-section .euro", opacity: 1, delay: 1400 });

  //typing title
  new Typed("#second-section .title h1", {
    strings: ["Как организовать бизнес с доходом от 1 млн в месяц?"],
    typeSpeed: 0,
    backSpeed: 2000,
    cursorChar: "",
    shuffle: true,
    smartBackspace: false,
    loop: false,
  });

  //translate second title
  setTimeout(() => {
    anime({ targets: "#second-section .title p", translateY: 0 });
  }, 1200);

  //quality items
  document.querySelectorAll("#second-section .quality__item").forEach((el, i) => {
    setTimeout(() => {
      anime({
        targets: el.querySelector(".quality__item-indicator"),
        // delay: i * 200,
        background: qualityItems[i].background,
        boxShadow: `0px 0px 10px ${qualityItems[i].shadow}`,
        translateX: 0,
      });

      anime({
        targets: el.querySelector("span"),
        width: "100%",
        // delay: 1000,
      });

      anime({
        targets: el.querySelector("img"),
        translateX: 0,
        delay: 1000,
      });

      anime({
        targets: el.querySelector("p"),
        opacity: 1
      })
    }, 300 * i);
  });
}

window.scrollTo(0, 0);
animateMainSection();

ScrollReveal().reveal("#second-section .imgs_container", {
  delay: 0,
  duration: 0,
  afterReveal: (element) => {
    animateSecondSection(element);
  },
});
