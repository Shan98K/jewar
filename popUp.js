function attachPopup(linkId, popupId) {
    const link = document.getElementById(linkId);
    const popup = document.getElementById(popupId);
    let timeout;

    function showPopup() {
        clearTimeout(timeout);
        popup.classList.add("show");
        timeout = setTimeout(() => popup.classList.remove("show"), 1000); // 1 second
    }

    link.addEventListener("click", (e) => {
        e.preventDefault();
        showPopup();
    });

    link.addEventListener("mouseenter", showPopup);
}

attachPopup("fb-link-header", "fb-popup-header");

attachPopup("fb-link-footer", "fb-popup-footer");
