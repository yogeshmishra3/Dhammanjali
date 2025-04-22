document.querySelectorAll(".play-btn").forEach((btn, index) => {
    btn.addEventListener("click", function () {
        const videoLinks = [
            "https://www.youtube.com/watch?v=video1", // Replace with actual video links
            "https://www.youtube.com/watch?v=video2"
        ];
        window.open(videoLinks[index], "_blank");
    });
});
