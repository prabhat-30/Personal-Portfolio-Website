var typed = new Typed(".text", {
    strings: ["Full-Stack Java Developer", "SQL Developer"],
    typeSpeed: 100, 
    backSpeed: 100,
    backDelay: 1000,
    loop: true
    });

    // Select the 'back to top' button
    const toTopButton = document.querySelector(".top");

    // Add an event listener for the scroll event
    window.addEventListener("scroll", () => {
        // If the user has scrolled more than 800px from the top
        if (window.scrollY > 778) {
            // Add the 'show' class to the button
            toTopButton.classList.add("show");
        } else {
            // Otherwise, remove the 'show' class
            toTopButton.classList.remove("show");
        }
    });


    // Select the menu toggle button and navbar
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.navbar a');

    // Toggle menu
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });

    // Auto-close when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            menuToggle.classList.remove('open');
        });
    });

