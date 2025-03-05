// this controls hero section
// let nextDom = document.getElementById('next')
// let prevDom = document.getElementById('prev')

// let carouselDom = document.querySelector('.carousel')
// let SliderDom = carouselDom.querySelector('.carousel .list')
// let thumbnailBorderDom = document.querySelector('.carousel .thumbnail')
// let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item')
// let timeDom = document.querySelector('.carousel .time')

// thumbnailBorderDom.appendChild(thumbnailItemsDom[0])
// let timeRunning = 3000
// let timeAutoNext = 7000

// nextDom.onclick = function () {
//   showSlider('next')
// }

// prevDom.onclick = function () {
//   showSlider('prev')
// }
// let runTimeOut
// let runNextAuto = setTimeout(() => {
//   next.click()
// }, timeAutoNext)
// function showSlider(type) {
//   let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item')
//   let thumbnailItemsDom = document.querySelectorAll(
//     '.carousel .thumbnail .item'
//   )

//   if (type === 'next') {
//     SliderDom.appendChild(SliderItemsDom[0])
//     thumbnailBorderDom.appendChild(thumbnailItemsDom[0])
//     carouselDom.classList.add('next')
//   } else {
//     SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1])
//     thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1])
//     carouselDom.classList.add('prev')
//   }
//   clearTimeout(runTimeOut)
//   runTimeOut = setTimeout(() => {
//     carouselDom.classList.remove('next')
//     carouselDom.classList.remove('prev')
//   }, timeRunning)

//   clearTimeout(runNextAuto)
//   runNextAuto = setTimeout(() => {
//     next.click()
//   }, timeAutoNext)
// }

// for the team section
var swiper = new Swiper('.team-swiper', {
  navigation: {
    nextEl: '.swiper-button-nexts',
    prevEl: '.swiper-button-prevs',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    250: {
      slidesPerView: 1.2,
      spaceBetween: 80,
    },
    // when window width is &gt;= 320px
    300: {
      slidesPerView: 1.2,
      spaceBetween: 0,
    },
    // when window width is &gt;= 480px
    400: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    // when window width is &gt;= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    840: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1150: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
})

// gallery section
var gallery = document.querySelector('.gallery')
var galleryItems = document.querySelectorAll('.gallery-item')
var numOfItems = gallery.children.length
var itemWidth = 23 // percent: as set in css

var featured = document.querySelector('.featured-item')

var leftBtn = document.querySelector('.move-btn.left')
var rightBtn = document.querySelector('.move-btn.right')
var leftInterval
var rightInterval

var scrollRate = 0.2
var left

function selectItem(e) {
  if (e.target.classList.contains('active')) return

  featured.style.backgroundImage = e.target.style.backgroundImage

  for (var i = 0; i < galleryItems.length; i++) {
    if (galleryItems[i].classList.contains('active'))
      galleryItems[i].classList.remove('active')
  }

  e.target.classList.add('active')
}

function galleryWrapLeft() {
  var first = gallery.children[0]
  gallery.removeChild(first)
  gallery.style.left = -itemWidth + '%'
  gallery.appendChild(first)
  gallery.style.left = '0%'
}

function galleryWrapRight() {
  var last = gallery.children[gallery.children.length - 1]
  gallery.removeChild(last)
  gallery.insertBefore(last, gallery.children[0])
  gallery.style.left = '-23%'
}

function moveLeft() {
  left = left || 0

  leftInterval = setInterval(function () {
    gallery.style.left = left + '%'

    if (left > -itemWidth) {
      left -= scrollRate
    } else {
      left = 0
      galleryWrapLeft()
    }
  }, 1)
}

function moveRight() {
  //Make sure there is element to the leftd
  if (left > -itemWidth && left < 0) {
    left = left - itemWidth

    var last = gallery.children[gallery.children.length - 1]
    gallery.removeChild(last)
    gallery.style.left = left + '%'
    gallery.insertBefore(last, gallery.children[0])
  }

  left = left || 0

  leftInterval = setInterval(function () {
    gallery.style.left = left + '%'

    if (left < 0) {
      left += scrollRate
    } else {
      left = -itemWidth
      galleryWrapRight()
    }
  }, 1)
}

function stopMovement() {
  clearInterval(leftInterval)
  clearInterval(rightInterval)
}

leftBtn.addEventListener('mouseenter', moveLeft)
leftBtn.addEventListener('mouseleave', stopMovement)
rightBtn.addEventListener('mouseenter', moveRight)
rightBtn.addEventListener('mouseleave', stopMovement)

//Start this baby up
;(function init() {
  var images = [
    '/assets/images/gallery1.jpeg',
    '/assets/images/gallery3.jpeg',
    '/assets/images/gallery4.jpeg',
    '/assets/images/gallery7.jpeg',
    '/assets/images/gallery6.jpeg',
    '/assets/images/gallery3.jpeg',
    '/assets/images/gallery4.jpeg',
    '/assets/images/gallery2.jpeg',
    '/assets/images/gallery8.jpeg',
    '/assets/images/gallery5.jpeg',
  ]

  //Set Initial Featured Image
  featured.style.backgroundImage = 'url(' + images[0] + ')'

  //Set Images for Gallery and Add Event Listeners
  for (var i = 0; i < galleryItems.length; i++) {
    galleryItems[i].style.backgroundImage = 'url(' + images[i] + ')'
    galleryItems[i].addEventListener('click', selectItem)
  }
})()

// This is script file for testimonial section

$('.testimonials-container').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 6000,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa-solid fa-arrow-left'></i>",
    "<i class='fa-solid fa-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 1,
      nav: true,
    },
    768: {
      items: 2,
    },
  },
})
