function showCookieModal() {
    const cookieAccepted = localStorage.getItem("cookieAccepted");
    const cookieModal = document.getElementById("cookie-modal");
  
    if (!cookieAccepted) {
      cookieModal.classList.add("show");
    }
  
    document.getElementById("accept-cookies").addEventListener("click", () => {
      localStorage.setItem("cookieAccepted", "true");
      cookieModal.classList.remove("show");
    });
  }
  
  document.addEventListener("DOMContentLoaded", showCookieModal);
  