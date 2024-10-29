const modalIcon = document.getElementById("modalIcon");
const modalRootDiv = document.getElementById("modalRoot");
const closeModalButton = document.getElementById("closeModal");

const showModal = () => {
    modalRootDiv.classList.add("modal-root--show");
};

const closeModal = () => {
    modalRootDiv.classList.remove("modal-root--show");
};

modalIcon.addEventListener("click", showModal);
closeModalButton.addEventListener("click", closeModal);