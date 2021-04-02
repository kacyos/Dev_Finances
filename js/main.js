const newTransaction = document.querySelector("#newTransaction");
const divModalOverlay = document.querySelector(".modal-overlay");
const divModal = document.querySelector(".modal");
const btnCancel = document.querySelector("#cancel");

const Modal = {
  open() {
    divModalOverlay.classList.add("active");
    divModal.classList.add("active");
  },

  close() {
    divModalOverlay.classList.remove("active");
    divModal.classList.remove("active");
  },
};

newTransaction.addEventListener("click", () => {
  Modal.open();
});

btnCancel.addEventListener("click", () => {
  Modal.close();
});
