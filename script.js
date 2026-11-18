function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    const page = document.getElementById(pageId);

    if (page) {
        page.classList.add("active");
        window.scrollTo(0, 0);
    }
}

function openPoem(poemId) {
    const poem = document.getElementById(poemId);

    if (poem) {
        poem.classList.add("show");
    }
}

function closePoem(poemId) {
    const poem = document.getElementById(poemId);

    if (poem) {
        poem.classList.remove("show");
    }
}

// Close popup when clicking outside the poem box
document.querySelectorAll(".overlay").forEach(overlay => {
    overlay.addEventListener("click", function (event) {
        if (event.target === overlay) {
            overlay.classList.remove("show");
        }
    });
});

// Close popup with Escape key
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        document.querySelectorAll(".overlay").forEach(overlay => {
            overlay.classList.remove("show");
        });
    }
});