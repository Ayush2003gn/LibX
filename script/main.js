const popup = document.getElementById("popup");

document.getElementById("openPopup").onclick = () => {
    popup.style.display = "flex";
};

document.getElementById("closePopup").onclick = () => {
    popup.style.display = "none";
};

// Close when clicking outside the dialog
popup.onclick = (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
};