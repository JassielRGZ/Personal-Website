document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to show selected project tab content
function openProject(evt, projectName) {
    const tabcontent = document.querySelectorAll(".tabcontent");
    const tablinks = document.querySelectorAll(".tablink");

    // Hide all tab content
    tabcontent.forEach(content => {
        content.style.display = "none";
    });

    // Remove active class from all tab links
    tablinks.forEach(link => {
        link.classList.remove("active");
    });

    // Show current tab content and add active class
    document.getElementById(projectName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

// Set default tab to display
document.getElementById("project1").style.display = "block";


