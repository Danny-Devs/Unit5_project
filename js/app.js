const galleryData = [
  {
    href: "photos/01.jpg",
    title: "Hay bales",
    caption: "I love hay bales. Took this snap on a drive through the countryside past some straw fields.",
    src: "photos/thumbnails/01.jpg",
    alt: "Hay bales",
  },
  {
    href: "photos/02.jpg",
    title: "Lake",
    caption: "The lake was so calm today. We had a great view of the snow on the mountains from here.",
    src: "photos/thumbnails/02.jpg",
    alt: "Lake",
  },
  {
    href: "photos/03.jpg",
    title: "Canyon",
    caption: "I hiked to the top of the mountain and got this picture of the canyon and trees below.",
    src: "photos/thumbnails/03.jpg",
    alt: "Canyon",
  },
  {
    href: "photos/04.jpg",
    title: "Iceberg",
    caption: "It was amazing to see an iceberg up close, it was so cold but didn’t snow today.",
    src: "photos/thumbnails/04.jpg",
    alt: "Iceberg",
  },
  {
    href: "photos/05.jpg",
    title: "Desert",
    caption: "The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.",
    src: "photos/thumbnails/05.jpg",
    alt: "Desert",
  },
  {
    href: "photos/06.jpg",
    title: "Fall",
    caption: "Fall is coming, I love when the leaves on the trees start to change color.",
    src: "photos/thumbnails/06.jpg",
    alt: "Fall",
  },
  {
    href: "photos/07.jpg",
    title: "Plantation",
    caption: "I drove past this plantation yesterday, everything is so green!",
    src: "photos/thumbnails/07.jpg",
    alt: "Plantation",
  },
  {
    href: "photos/08.jpg",
    title: "Dunes",
    caption: "My summer vacation to the Oregon Coast. I love the sandy dunes!",
    src: "photos/thumbnails/08.jpg",
    alt: "Dunes",
  },
  {
    href: "photos/09.jpg",
    title: "Countryside Lane",
    caption: "We enjoyed a quiet stroll down this countryside lane.",
    src: "photos/thumbnails/09.jpg",
    alt: "Countryside Lane",
  },
  {
    href: "photos/10.jpg",
    title: "Sunset",
    caption: "Sunset at the coast! The sky turned a lovely shade of orange.",
    src: "photos/thumbnails/10.jpg",
    alt: "Sunset",
  },
  {
    href: "photos/11.jpg",
    title: "Cave",
    caption: "I did a tour of a cave today and the view of the landscape below was breathtaking.",
    src: "photos/thumbnails/11.jpg",
    alt: "Cave",
  },
  {
    href: "photos/12.jpg",
    title: "Bluebells",
    caption: "I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.",
    src: "photos/thumbnails/12.jpg",
    alt: "Bluebells",
  },
]

let html = '';

for (let i=0; i<galleryData.length; i++) {
  html += `
      <a href=${galleryData[i].href} data-caption=${galleryData[i].caption}>
        <img src=${galleryData[i].src} alt="${galleryData[i].alt}">
      </a>   
  `;
}

let gallery = document.querySelector(".gallery")

gallery.innerHTML = html;


// baguetteBox.run('.gallery', {
//   captions: true,
//   titleTag: true,
// });