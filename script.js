const modal = document.getElementById("myModal");
    const openBtn = document.getElementById("openModalBtn");
    const closeBtn = document.getElementById("closeModalBtn");

    openBtn.onclick = () => {
      modal.style.display = "block";
    };

    closeBtn.onclick = () => {
      modal.style.display = "none";
    };

    // Close if clicking outside the modal content
    window.onclick = (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };