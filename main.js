const sidebar = document.querySelector('#sidebar');
const menuBtn = document.querySelector('#menu-btn');
const closeSidebarBtn = document.querySelector('#close-sidebar-btn');
const sidebarOverlay = document.querySelector('#sidebar-overlay'); // Corrected selector

//Open the sidebar
menuBtn.onclick = () => openSidebar();

//Close the sidebar
closeSidebarBtn.onclick = () => closeSidebar();
sidebarOverlay.onclick = () => closeSidebar();

//Close on tab click
const menuTabs = document.querySelectorAll('.tab'); // Assuming you have defined menuTabs
menuTabs.forEach((tab) => {
    tab.onclick = () => closeSidebar();
});

// Function to open sidebar
const openSidebar = () => {
    sidebar.classList.add('active');
    sidebarOverlay.classList.add('active');
};

// Function to close the sidebar
const closeSidebar = () => {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
};

// Active Tab
const sections = document.querySelectorAll('section')
menuTabs[0].classList.add('active');
window.onscroll = () => {
    sections.forEach((section) => {
        let top = window.scrollY;
        let offset = section.offsetTop - 100;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
        if(top >= offset && top < offset + height){
            menuTabs.forEach((tab) => {
                tab.classList.remove('active');
                document.querySelector('.tabs-container a[href*='+id+']').classList.add('active')
            })
        }
    })
}

// Hero Odometer
const odometers = document.querySelectorAll('.odometer');
setTimeout(function(){
    odometers.forEach((list) =>{
        let id = list.getAttribute('id');
        if (id === 'customers'){
            list.innerHTML = 250
        }
        if (id === 'experience'){
            list.innerHTML = 6
        }
        if (id === 'projects-completed'){
            list.innerHTML = 1.5
        }
    })
}, 3500)

// About Video
const playButton = document.querySelector('.play');
const videoContainer = document.querySelector('#video-container');
const closeButton = document.querySelector('#close-btn');
const video = document.querySelector('#video');

playButton.onclick = () => openVideo();
closeButton.onclick = () => closeVideo();


//Function to open video
const openVideo = () => {
    videoContainer.classList.add('active');
    video.play()
    video.currentTime = 0;
}

//Function to close video
const closeVideo = () => {
    videoContainer.classList.remove('active');
    video.pause();
}

//Feedback starts
$('.feedbacks-container').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
        {
            breakpoint: 900,
            settings:{
                slidesToShow: 2
            }
        },
        {
            breakpoint: 600,
            settings:{
                slidesToShow: 1
            }
        },
    ]
});

// Gsap animations start
//nav animations
gsap.timeline({delay: 1})
.fromTo(
    ['nav .logo .name', 'nav .logo .logo-icon'],
    {
        opacity: 0,
        x: -100,
    },
    {
        opacity: 1,
        x: 0,
        stagger: 0.5
    }
)
.fromTo(
    'nav .tabs-container .tab',
    {
        opacity: 0,
        x: 100,
    },
    {
        opacity: 1,
        x: 0,
        stagger: 0.5
    }
)
.fromTo(
    'nav .handles-container .icon-wrapper',
    {
        opacity: 0,
        y: -50,
    },
    {
        opacity: 1,
        y: 0,
        stagger: 0.5
    }
)
.fromTo(
    'nav .contact-btn',
    {
        opacity: 0,
        x: 100,
    },
    {
        opacity: 1,
        x: 0,
    }
)

//hero animations
gsap.timeline({delay: 0.5})
.fromTo(
    '#hero .hero-image',
    {
        scale: 0,
    },
    {
        scale: 1,
        delay: 0.5,
    }
)
.fromTo(
    ['#hero .heading-1', '#hero .description'],
    {
        x: -20,
        opacity: 0,
    },
    {
        x: 0,
        opacity: 1,
        stagger: 0.5,
    }
)
.fromTo(
    '#hero .facts-container .fact',
    {
        x: 50,
        opacity: 0,
    },
    {
        x: 0,
        opacity: 1,
        stagger: 0.5,
    }
)
.fromTo(
    '#hero .buttons-wrapper .btn',
    {
        x: 50,
        opacity: 0,
    },
    {
        x: 0,
        opacity: 1,
        stagger: 0.5,
    }
)

// about animations
gsap.registerPlugin(ScrollTrigger);
gsap.timeline({
    delay: 0.5,
    scrollTrigger: {
        trigger: '#about',
        start: '20% bottom',
        end: 'bottom top'
    }
})
.fromTo(
    ['#about .section-header .sub-title','#about .section-header .heading-1', '#about .section-header .muted'],
    {
        opacity: 0,
        y: 60
    },
    {
        opacity: 1,
        y: 0,
        stagger: 0.5
    }
)
.fromTo(
    ['#about .section-header .readmore-btn','#about .section-header .play-btn'],
    {
        opacity: 0,
        x: -100
    },
    {
        opacity: 1,
        x: 0,
        stagger: 0.5
    }
)
.fromTo(
    '#about .brands-container',
    {
        opacity: 0,
        x: 100
    },
    {
        opacity: 1,
        x: 0,
    }
)
.fromTo(
    '#about .education-experience-container .heading-1',
    {
        opacity: 0,
        x: -50
    },
    {
        opacity: 1,
        x: 0,
        stagger: 0.5
    }
)