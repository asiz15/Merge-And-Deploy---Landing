'use strict';

document.addEventListener('DOMContentLoaded', function () {
  console.log('Hello Bulma!');
  // document.querySelector('#btn-project1').addEventListener('click', function () {
  //   console.log('open modal project')
  // })
  window.addEventListener('popstate', function (event) {
    // Log the state data to the console
    var path = JSON.parse(JSON.stringify(window.location));
    if (path.href.slice(-1) === '1') {
      var elements = document.querySelectorAll(".service-card");
      elements.forEach(function (e) {
        e.classList.remove('animate__fadeInUp');
        setTimeout(function () {
          e.classList.toggle('animate__fadeInUp');
        }, 100);
      });
    } else if (path.href.slice(-1) === '2') {
      var elements = document.querySelectorAll(".about-img");
      elements.forEach(function (e) {
        e.classList.remove('animate__fadeInLeft');
        setTimeout(function () {
          e.classList.toggle('animate__fadeInLeft');
        }, 100);
      });
    } else if (path.href.slice(-1) === '3') {
      var elements = document.querySelectorAll(".tech-img");
      elements.forEach(function (e) {
        e.classList.remove('animate__fadeInUp');
        setTimeout(function () {
          e.classList.toggle('animate__fadeInUp');
        }, 100);
      });
    } else if (path.href.slice(-1) === '7') {
      var elements = document.querySelectorAll("#contact");
      elements.forEach(function (e) {
        e.classList.remove('animate__fadeInUp');
        setTimeout(function () {
          e.classList.toggle('animate__fadeInUp');
        }, 100);
      });
    } else if (path.href.slice(-1) === '0') {
      var elements = document.querySelectorAll(".cta");
      elements.forEach(function (e) {
        e.classList.remove('animate__fadeInUp');
        setTimeout(function () {
          e.classList.toggle('animate__fadeInUp');
        }, 100);
      });
    }
  });
});