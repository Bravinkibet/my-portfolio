javascript
// JavaScript for dynamic styling
document.addEventListener("DOMContentLoaded", function() {
    // Change background color of about me section on mouseover
    document.getElementById("about-me-section").addEventListener("mouseover", function() {
        this.style.backgroundColor = "#e9e9e9";
    });

    // Change background color back on mouseout
    document.getElementById("about-me-section").addEventListener("mouseout", function() {
        this.style.backgroundColor = "transparent";
    });
});