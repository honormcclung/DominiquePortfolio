// story-page-animation.js
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".story-section");

    const handleScroll = () => {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Check if the section is in the viewport
            if (rect.top < windowHeight - 150 && rect.bottom > 150) {
                section.classList.add("visible");
            } else {
                section.classList.remove("visible");
            }
        });
    };

    // Trigger on load and on scroll
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on load for initial visibility
});
