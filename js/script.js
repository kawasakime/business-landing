const qualityItems = [
  { background: "#aff5cb", shadow: "#37F382" },
  { background: "#FFE3C4", shadow: "#F39D37" },
  { background: "#CFE2FF", shadow: "#3782F3" },
  { background: "#FFD2D2", shadow: "#F33737" },
];

const servicesItems = [
  { primary: "#37F382", secondary: "#44C979" },
  { primary: "#F39D37", secondary: "#CE770F" },
  { primary: "#3782F3", secondary: "#0A50B9" },
  { primary: "#F33737", secondary: "#B70000" },
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

function animateTitle(element) {
  //title main line
  anime({
    targets: element.querySelector(".title h1"),
    translateY: 0,
  });

  //title second line
  anime({
    targets: element.querySelector(".title p"),
    translateY: 0,
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
        opacity: 1,
      });
    }, 300 * i);
  });
}

function animateServicesSection(element) {
  //title
  animateTitle(element);

  element.querySelector(".wrapper").style.overflow = "visible";

  //service items
  document.querySelectorAll("#services-section .services__item").forEach((item, i) => {
    anime({
      targets: item,
      opacity: 1,
      delay: i * 300,
    });

    const indicator = item.querySelector(".services__item-indicator");

    //visible indicator
    anime({
      targets: indicator,
      translateX: -13,
      opacity: 1,
      // delay: 200,
      background: servicesItems[i].primary,
    });

    //change background indicator
    anime({
      targets: indicator,
      duration: 2000,
      background: servicesItems[i].primary,
      delay: i + 400,
      boxShadow: `0px 0px 20px ${servicesItems[i].primary}`,
      duration: 1500,
    });

    //li
    item.querySelectorAll(".services__item-list li").forEach((li, i) => {
      anime({ targets: li, opacity: 1, duration: 4000, delay: i * 500 });
    });

    //price
    anime({
      targets: item.querySelector(".services__item-price"),
      background: `linear-gradient(45deg, #d0d0d0, #d0d0d0,${servicesItems[i].primary}, ${servicesItems[i].secondary})`,
      backgroundSize: "400% 400%",
      backgroundPosition: "100% 50%",
      boxShadow: `0 0 20px ${servicesItems[i].primary}`,
    });
  });
}

function animateWhatUsSection(element) {
  animateTitle(element);

  element.querySelectorAll(".cards__item").forEach((card, i) => {
    anime({
      targets: card,
      opacity: 1,
      duration: 2000,
      delay: 200 * i,
    });

    anime({
      targets: [card.querySelector("img"), card.querySelector("p"), card.querySelector("span")],
      translateX: 0,
      translateY: 0,
      delay: 400 * i,
      duration: 2000,
    });
  });
}

function animateHowWorkSection(element) {
  animateTitle(element);

  element.querySelectorAll(".cards__item").forEach((card, i) => {
    setTimeout(() => {
      anime({ targets: card, translateX: 0, duration: 1000 });
      anime({
        targets: [card.querySelector("span"), card.querySelector("p")],
        opacity: 1,
        delay: 250,
      });
    }, 200 * i);
  });
}

function animateReviewsSection(element) {
  animateTitle(element);

  anime({ targets: element.querySelector(".certificate"), translateX: 0 });

  element.querySelectorAll(".reviews__item").forEach((item, i) => {
    anime({ targets: item, opacity: 1, delay: 300 * i });

    item.querySelectorAll(".rating img").forEach((star, j) => {
      anime({ targets: star, opacity: 1, delay: 300 * i + j * 200 });
    });
  });
}

function animateFormSection(element) {
  anime({ targets: element.querySelector(".img-container"), right: 0 });

  [
    element.querySelector("span"),
    ...element.querySelectorAll("p"),
    ...element.querySelectorAll("form > *"),
  ].forEach((item, i) => {
    anime({
      targets: item,
      opacity: 1,
      translateY: 0,
      delay: 200 * i,
    });
  });
}

// PHONE MASK INPUT

var element = document.querySelector("#form-section .user_phone");
var maskOptions = {
  mask: "+7 (000) 000 00-00",
  lazy: false,
};
var mask = new IMask(element, maskOptions);

// EMAIL MASK
// var element2 = document.getElementById("email");
// var maskOptions2 = {
//   mask: function (value) {
//     if (/^[a-z0-9_\.-]+$/.test(value)) return true;
//     if (/^[a-z0-9_\.-]+@$/.test(value)) return true;
//     if (/^[a-z0-9_\.-]+@[a-z0-9-]+$/.test(value)) return true;
//     if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.$/.test(value)) return true;
//     if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}$/.test(value)) return true;
//     if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.$/.test(value)) return true;
//     if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.[a-z]{1,4}$/.test(value)) return true;
//     return false;
//   },
//   lazy: false,
// };
// var mask2 = new IMask(element2, maskOptions2);

//----------------------------------

// CHART


//----------------------------------

window.scrollTo(0, 0);
animateMainSection();

ScrollReveal().reveal("#second-section .imgs_container", {
  delay: 200,
  duration: 0,
  afterReveal: (element) => {
    animateSecondSection(element);
  },
});

ScrollReveal().reveal("#services-section .services", {
  delay: 0,
  duration: 0,
  afterReveal: () => {
    animateServicesSection(document.querySelector("#services-section"));
  },
});

ScrollReveal().reveal("#what-us-section .cards", {
  delay: 0,
  duration: 0,
  afterReveal: () => {
    animateWhatUsSection(document.querySelector("#what-us-section"));
  },
});

ScrollReveal().reveal("#how-work-section .cards", {
  delay: 0,
  duration: 0,
  afterReveal: () => {
    animateHowWorkSection(document.querySelector("#how-work-section"));
  },
});

ScrollReveal().reveal("#reviews-section .reviews", {
  delay: 0,
  duration: 0,
  afterReveal: () => {
    animateReviewsSection(document.querySelector("#reviews-section"));
  },
});

ScrollReveal().reveal("#form-section .wrapper", {
  delay: 0,
  duration: 0,
  afterReveal: () => {
    animateFormSection(document.querySelector("#form-section"));
  },
});
