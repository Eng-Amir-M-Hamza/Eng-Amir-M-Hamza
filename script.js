document.addEventListener("DOMContentLoaded", () => {

    const toggleBtn = document.getElementById("themeToggle");

    // Load saved theme
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
    }

    // Toggle
    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");

            if (document.body.classList.contains("light-mode")) {
                localStorage.setItem("theme", "light");
            } else {
                localStorage.setItem("theme", "dark");
            }
        });
    }
});

// open project function (you already use it)
function openProject(page) {
    window.location.href = page;
}
