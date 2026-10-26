// =========================================================
// GALLERY DATA
// =========================================================

const galleryData = {

    pictures: {
        title: "Pictures",

        images: [
            "images/picturemount.jpg",
            "images/pictures4.jpg",
            "images/pictures5.jpg",
            "images/pictures8.jpg",
            "images/pictures17.jpg",
            "images/pictures9.jpg",
            "images/pictures10.jpg",
            "images/pictures16.jpg",
        ]
    },


    mirrors: {
        title: "Mirrors",

        images: [
            "images/mirror2.jpg",
            "images/mirror5.jpg",
            "images/mirror8.jpg",
            "images/mirror11.jpg",
            "images/mirror12.jpg",
            "images/mirrors3.jpg",
            "images/mirrors4.jpg",
            "images/mirrors10.jpg",
            "images/mirrors12.jpg",
            "images/mirrors13.jpg",
            "images/mirrors14.jpg",
            "images/mirrors15.jpg",
            "images/mirrors16.jpg",
            "images/mirrors17.jpg",
        ]
    },


    tvs: {
        title: "TVs",

        images: [
            "images/tvmount2.avif",
            "images/tvs2.jpg",
            "images/tvs3.jpg",
            "images/tvs5.jpg"
        ]
    },


    canvas: {
        title: "Canvas Art",

        images: [
            "images/largecanvas.jpg.webp",
            "images/canvas3.jpg",
            "images/canvas4.jpg",
            "images/canvas5.jpg",
            "images/canvas6.jpg",
            "images/canvas7.jpg",
            "images/canvas8.jpg",
            "images/canvas9.jpg",
            "images/canvas10.jpg",
            "images/canvas11.jpg",
            "images/canvas12.jpg",
            "images/canvas12.jpeg",
        ]
    },


    whiteboards: {
        title: "Whiteboards",

        images: [
            "images/whiteboard.jpg.avif",
            "images/whiteboard2.jpg",
            "images/whiteboard3.jpg"
        ]
    },


    animalheads: {
        title: "Animal Heads",

        images: [
            "images/animalhead2.jpg",
            "images/animal.jpg",
            "images/animal2.jpg",
            "images/animal3.jpg",
            "images/animal4.jpg",
            "images/animal5.jpg",
        ]
    },


    office: {
        title: "Office",

        images: [
            "images/whiteboard-b.jpeg",
            "images/office.jpg",
            "images/office3.jpg",
            "images/office4.jpg",
            "images/office5.jpg",
            "images/office6.jpg",
            "images/office7.jpg",
            "images/office8.jpg",
            "images/office9.jpg",
            "images/office10.jpg",
            "images/office11.jpg",
        ]
    },


    home: {
        title: "Home",

        images: [
            "images/wallcollage.jpeg",
            "images/home.jpg",
            "images/home14.jpg",
            "images/tvs7.jpg",
            "images/home7.jpg",
            "images/home9.jpg",
            "images/home14.jpg",
            "images/home10.jpg",
            "images/home11.jpg",
            "images/home12.jpg",
            "images/home13.jpg",
        ]
    },


    custom: {
        title: "Custom",

        images: [
            "images/picturecollage.jpeg",
            "images/custom5.jpg",
            "images/custom6.jpg",
            "images/custom7.jpg",
            "images/custom8.jpg",
            "images/custom12.jpg",
            "images/custom13.jpg",
            "images/custom14.jpg",
            "images/custom15.jpg",
            "images/custom16.jpg",
            "images/custom17.jpg",
        ]
    }

};


// =========================================================
// DOM ELEMENTS
// =========================================================

const galleryItems =
    document.querySelectorAll(".gallery-item");

const lightbox =
    document.getElementById("galleryLightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxCategory =
    document.getElementById("lightboxCategory");

const lightboxCounter =
    document.getElementById("lightboxCounter");

const lightboxClose =
    document.getElementById("lightboxClose");

const lightboxPrev =
    document.getElementById("lightboxPrev");

const lightboxNext =
    document.getElementById("lightboxNext");


// =========================================================
// GALLERY STATE
// =========================================================

let currentGallery = null;

let currentIndex = 0;


// =========================================================
// OPEN GALLERY
// =========================================================

function openGallery(galleryName) {

    currentGallery =
        galleryData[galleryName];

    currentIndex = 0;

    updateGallery();

    lightbox.classList.add("active");

    lightbox.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "lightbox-open"
    );

}


// =========================================================
// UPDATE GALLERY
// =========================================================

function updateGallery() {

    if (!currentGallery) {
        return;
    }


    const currentImage =
        currentGallery.images[currentIndex];


    lightboxImage.src =
        currentImage;


    lightboxImage.alt =
        `${currentGallery.title} mounting example`;


    lightboxCategory.textContent =
        currentGallery.title;


    lightboxCounter.textContent =
        `${currentIndex + 1} / ${currentGallery.images.length}`;


    /*
        If the category only has one image,
        there is no reason to show arrows.
    */

    if (currentGallery.images.length <= 1) {

        lightboxPrev.style.display = "none";

        lightboxNext.style.display = "none";

    } else {

        lightboxPrev.style.display = "grid";

        lightboxNext.style.display = "grid";

    }

}


// =========================================================
// NEXT IMAGE
// =========================================================

function nextImage() {

    if (!currentGallery) {
        return;
    }


    currentIndex++;


    if (
        currentIndex >=
        currentGallery.images.length
    ) {

        currentIndex = 0;

    }


    updateGallery();

}


// =========================================================
// PREVIOUS IMAGE
// =========================================================

function previousImage() {

    if (!currentGallery) {
        return;
    }


    currentIndex--;


    if (currentIndex < 0) {

        currentIndex =
            currentGallery.images.length - 1;

    }


    updateGallery();

}


// =========================================================
// CLOSE GALLERY
// =========================================================

function closeGallery() {

    lightbox.classList.remove("active");

    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "lightbox-open"
    );

}


// =========================================================
// GALLERY CARD EVENTS
// =========================================================

galleryItems.forEach(item => {

    item.addEventListener("click", () => {

        const galleryName =
            item.dataset.gallery;

        openGallery(galleryName);

    });

});


// =========================================================
// LIGHTBOX BUTTON EVENTS
// =========================================================

lightboxClose.addEventListener(
    "click",
    closeGallery
);


lightboxNext.addEventListener(
    "click",
    nextImage
);


lightboxPrev.addEventListener(
    "click",
    previousImage
);


// =========================================================
// CLOSE WHEN CLICKING OUTSIDE IMAGE
// =========================================================

lightbox.addEventListener("click", event => {

    if (event.target === lightbox) {

        closeGallery();

    }

});


// =========================================================
// KEYBOARD CONTROLS
// =========================================================

document.addEventListener("keydown", event => {

    if (!lightbox.classList.contains("active")) {
        return;
    }


    if (event.key === "Escape") {

        closeGallery();

    }


    if (event.key === "ArrowRight") {

        nextImage();

    }


    if (event.key === "ArrowLeft") {

        previousImage();

    }

});