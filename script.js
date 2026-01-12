gsap.registerPlugin(ScrollTrigger);


// pre loader animation
gsap.fromTo(
    ".loading-page",
    { opacity: 50 },
    {
        opacity: 0,
        display: "none", // hide the loading page after animation
        duration: 3,
        delay: 1,
        onComplete: () => {
            // after the pre-loader animation is complete, we can start animating the main content
            // animating title
            gsap.fromTo(
                ".intro h1", // animating the title on main page
                {opacity: 0, y: 50},
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    delay: 0.5,
                }
            );
            // animating image
            gsap.fromTo(
                ".profile-pic img",
                {opacity: 0},
                {
                    opacity: 1,
                    duration: 1.5,
                    delay: 1,
                }
            );
            // animating text on main page
            gsap.fromTo(
                ".intro p",
                {opacity: 0, y: 30},
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    delay: 1,
                }
            );
        }
    }
);
// animating logo name on pre-loader
    gsap.fromTo(
    ".logo-name",
    {
        y: 50,
        opacity: 0,
    },
    {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 0.4,
    }
);

    // to open and close fullscreen nav
    function openNav() {
    document.getElementById("myNav").style.display = "flex"; // show the nav
    gsap.to("#myNav", { opacity: 1, duration: 0.5 });
    

    const menuItems = document.querySelectorAll("#menu li"); // select all menu items
    menuItems.forEach((item, index) => { // loop through each menu item
        // animate each menu item from left to right
        gsap.fromTo(
            item,
            { opacity: 0, x: -300 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                delay: index * 0.1,
                onComplete: () =>{
                    
                }
            }
        );
    });

    const menuSocial = document.querySelectorAll(".social i"); // select all social icons
    menuSocial.forEach((item, index) => { // loop through each social icon
        // animate each social icon from left to right
        gsap.fromTo(
            item,
            { opacity: 0},
            {
                opacity: 1,
                duration: 1.5,
                delay: index * 0.2,
            }
        );
    });
}

function closeNav() {
    const menuItems = document.querySelectorAll("#menu li"); // 
    menuItems.forEach((item, index) => {
        gsap.to(item, {
            opacity: 0,
            x: -75,
            duration: .5,
            delay: index * 0.1,
            onComplete: () => { // after each item is hidden, we check if it's the last item
                // if it's the last item, we hide the nav
                if (index === menuItems.length - 1) {
                    gsap.to("#myNav", { opacity: 0, duration: 0.5, onComplete: () => {
                        document.getElementById("myNav").style.display = "none";
                    }});
                }
            }
        });
    });
    const menuSocial = document.querySelectorAll(".social i");
menuSocial.forEach((item, index) => {
    gsap.to(item, {
        opacity: 0,
        duration: 0.5,
        delay: index * 0.1,
    });
});
}

// Function to scroll to a specific section smoothly
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: section,
                offsetY: 50 // Adjust offset if you have a fixed header that might cover content
            },
            ease: "power2.inOut"
        });
        closeNav(); // Close the navigation overlay after clicking a link
    }
}

// Attach scrollToSection to navigation links in the overlay
document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor link behavior
        const targetId = this.getAttribute('data-text').toLowerCase(); // Get the text, convert to lowercase
        // Use a switch statement or if-else to map data-text to section IDs
        if (targetId === 'home') {
            scrollToSection('home');
        } else if (targetId === 'about') {
            scrollToSection('about');
        } else if (targetId === 'projects') {
            scrollToSection('project');
        } else if (targetId === 'skills') {
            scrollToSection('skills');
        } else if (targetId === 'contact') {
            scrollToSection('contact');
        }
    });
});

// ScrollTrigger animations for revealing sections
gsap.utils.toArray(".section-container").forEach(section => {
    gsap.fromTo(section,
        { opacity: 0, y: 50 }, 
        {
            opacity: 1,
            y: 0, 
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: section,
                start: "top 80%", 
                end: "bottom top", 
                toggleActions: "play none none none", 
            }
        }
    );
});
