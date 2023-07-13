
"use strict";
// Sweet Alert CDN through JS
let script = document.createElement("script");
script.type = 'text/javascript';
script.src="https://unpkg.com/sweetalert/dist/sweetalert.min.js";
document.body.appendChild(script);

// Header

let header = $(`
<nav class="navbar navbar-expand-lg fixed-top dark-theme" id="navbar">
<a class="navbar-brand" href="index.html">Khiem Hoang</a>
<div class="hamburger_wrapper navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

  <div id="js-hamburger" class="hamburger">
    <span class="first"></span>
    <span class="second"></span>
    <span class="third"></span>
  </div>

</div>

<div class="collapse navbar-collapse " id="navbarSupportedContent">
  <ul class="navbar-nav ml-auto" id = "navbar-content">
   <li class="nav-item nav-item-hover"><a class="nav-link" href="index.html">Home</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="experience.html">Experience</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="education.html">Education</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="research.html">Research</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="projects.html">Projects</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="skills.html">Skills</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="404.html">References</a></li>
  </ul>
</div>
</nav>`);


//"Scroll to top" button
let upArrow = $(`
  <button id="btnScrollToTop" onclick="scrollToTop()"><i class="fas fa-2x fa-angle-up"></i></button>
  <link rel="stylesheet" type="text/css" href="./css/style.css" />
  })
`);

$(document).ready(function () {
  // updating the color of the swiper bullets (initial update of color)
  updateColorOfSwiperBullets(localStorage.getItem("lightMode"));

  //function for the "Scroll To Top" button to detect the footer
  $(window).scroll(function () {
    //The button will be hidden until we scroll more than the window's height
    if ($(window).scrollTop() < $(window).height()) {
      $("#btnScrollToTop").css("visibility", "hidden");
    } else {
      $("#btnScrollToTop").css("visibility", "visible");
      //The button will change it's color when it hits the footer
      if (
        $(window).scrollTop() + $(window).height() >
        $(document).height() - 838
      ) {
        // 838 should be changed if footer's height is changed so that the button changes it's color exactly when it hits the footer (preferably 14 less than the computer height of the footer)
        $("#btnScrollToTop").css("background-color", "#6a00bb");
      } else {
        $("#btnScrollToTop").css("background-color", "#6a00bb");
      }
    }
  });
});

//function to scroll to top
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

// Window Loads
$(function () {
  let bodyElement = $(`body`);
  bodyElement.prepend(header);
  bodyElement.append(footer);
  bodyElement.append(upArrow);
  $("#btnScrollToTop").css("visibility", "hidden");

  //toggler hamburger functions
  const menuBtn = document.querySelector(".navbar-toggler");
  let menuOpen = false;
  menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      menuOpen = true;
    } else {
      menuBtn.classList.remove("open");
      menuOpen = false;
    }
  });
});

// function for toggling hamburger is-active class

$(function () {
  $("#js-hamburger").on("click", function () {
    $(this).toggleClass("is-active");
  });
});

// Navbar current page highlight

let loader = document.querySelector(".loader-container");

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disappear");
}
$(function () {
  $("a.nav-link").each(function () {
    if ($(this).prop("href") == window.location.href) {
      $(this).addClass("current-link");
    }
  });
});

//function to remove underline on hover

$(document).ready(function () {
  $("a.nav-link").hover(
    function () {
      $(this).removeClass("current-link");
    },
    function () {
      if ($(this).prop("href") == window.location.href) {
        $(this).addClass("current-link");
      }
    }
  );
});

localStorage.setItem("lightMode", "dark");


// function to update swiper bullets
function updateColorOfSwiperBullets(lightMode) {
  document.querySelectorAll(".swiper-pagination-bullet").forEach((bullet) => {
    if (lightMode == "light") {
      bullet.style.backgroundColor = "blue";
    } else {
      bullet.style.backgroundColor = "white";
    }
  });
}

window.addEventListener("storage", function () {
    app.setAttribute("light-mode", "dark");
});

//send button animation


$(function submitAnimation() {
  const name = document.querySelector("#name")
  const emailAdress = document.querySelector("#email")
  const text = document.querySelector("#textArea")
  const emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  $("#lnch").on("click", function () {

    // Check if the name field is empty or contains a number
    if (name.value == "" || (/\d/.test(name.value))) {
      swal("Error !","Please enter a valid name !","error");
      return;
    }
    // Check if the email field is empty or email is not valid ex: test@@email.com
    else if (emailAdress.value == "" || !(emailPattern.test(emailAdress.value))) {
      swal("Error !","Please enter a valid email !","error");
      return;
    }
    // Check if the message field is empty
    else if (text.value == "") {
      swal("Error !","Please enter a valid message !","error");
      return;
    }
    else {

      setTimeout(function () {
        $("#lnch").addClass("launching").text("Sending");
        $("#lnch_btn").addClass("launching");
      }, 0);
      setTimeout(function () {
        $("#lnch").addClass("launched").text("SENT");
        $("#lnch_btn").addClass("launched");
      }, 1500);
      // Wait for 2.2 seconds so that the send button animation can be fully played before submitting the form
      setTimeout(() => {
        document.querySelector('form').submit();
      }, 2200);
    }
  });
});
