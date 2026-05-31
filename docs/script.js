document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================================================
       SCROLL REVEAL MONITOR ENGINE
       Controls fade-in positions fluidly as the page elements enter user viewport
       ========================================================================== */
    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealThreshold = 80; 

        reveals.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - revealThreshold) {
                element.classList.add("active");
            }
        });
    };

    setTimeout(revealOnScroll, 150); 
    window.addEventListener("scroll", revealOnScroll);


    /* ==========================================================================
       NAVIGATION ELEMENT HIGHLIGHT TRACKER
       Monitors coordinates to highlight corresponding navbar item automatically
       ========================================================================== */
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-item");

    window.addEventListener("scroll", () => {
        let activeSectionId = "";
        
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                activeSectionId = section.getAttribute("id");
            }
        });

        navItems.forEach((item) => {
            item.style.color = "var(--text-main)"; 
            if (item.getAttribute("href").includes(activeSectionId)) {
                item.style.color = "var(--accent-neon)"; 
            }
        });
    });


    /* ==========================================================================
       GALLERY MODAL LIGHTBOX SYSTEM
       Expands layout viewports on item click, drawing metadata details smoothly
       ========================================================================== */
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightboxModal = document.getElementById("lightbox-modal");
    const lightboxImg = document.getElementById("lightbox-target-img");
    const lightboxCaption = document.getElementById("lightbox-target-caption");
    const lightboxClose = document.querySelector(".lightbox-close");

    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            const targetImageSrc = item.getAttribute("data-src");
            const targetCaptionText = item.getAttribute("data-caption");

            lightboxImg.setAttribute("src", targetImageSrc);
            lightboxCaption.textContent = targetCaptionText;
            
            lightboxModal.style.display = "flex";
            document.body.style.overflow = "hidden"; 
        });
    });

    const closeLightbox = () => {
        lightboxModal.style.display = "none";
        document.body.style.overflow = "auto"; 
    };

    lightboxClose.addEventListener("click", closeLightbox);
    lightboxModal.addEventListener("click", (e) => {
        if (e.target === lightboxModal) {
            closeLightbox();
        }
    });
});