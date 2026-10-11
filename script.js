const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {
    const setMenuOpen = (isOpen) => {
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
        navigation.classList.toggle("is-open", isOpen);
    };

    menuToggle.addEventListener("click", () => {
        setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
    });

    navigation.addEventListener("click", (event) => {
        if (event.target.closest("a")) {
            setMenuOpen(false);
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
            setMenuOpen(false);
            menuToggle.focus();
        }
    });

    window.matchMedia("(min-width: 768px)").addEventListener("change", (event) => {
        if (event.matches) {
            setMenuOpen(false);
        }
    });
}

// Use the international country code and digits only when configuring this number.
const restaurantWhatsApp = "";
const whatsappButton = document.getElementById("whatsapp-button");

if (whatsappButton) {
    const phoneNumber = restaurantWhatsApp.trim();

    if (/^\d{7,15}$/.test(phoneNumber)) {
        const message = encodeURIComponent(
            "Hello Banaadir Restaurant! I would like to ask about your menu."
        );

        whatsappButton.href = `https://wa.me/${phoneNumber}?text=${message}`;
        whatsappButton.target = "_blank";
        whatsappButton.rel = "noopener noreferrer";
        whatsappButton.setAttribute("aria-label", "Contact Banaadir Restaurant on WhatsApp (opens in a new tab)");
    } else {
        whatsappButton.href = "#contact";
        whatsappButton.setAttribute("aria-disabled", "true");
        whatsappButton.setAttribute("tabindex", "-1");
        whatsappButton.classList.add("is-disabled");
        whatsappButton.addEventListener("click", (event) => event.preventDefault());
    }
}