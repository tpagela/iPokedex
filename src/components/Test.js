const ModalButtons = () => {
    const openModalButtons = document.querySelectorAll('[data-modal-target]');
    const closeModalButtons = document.querySelectorAll('[data-close-button]');
    const overlay = document.getElementById('overlay')

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelector(button.dataset.modalTarget)
            openModal(modal)
        })
    })


    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('modal')
            closeModal(modal)
        })
    })

}

const openModal = (modal) => {
    if (modal === null) return
    modal.classList.add('active');
    modal.classList.add('active');
}

const closeModal = (modal) => {
    if (modal === null) return
    modal.classList.remove('active');
    modal.classList.remove('active');
}

{/* <button data-modal-target="#modal">Open Modal</button>
<div class="modal" id="modal">
    <div class="modal-header">
        <div class="title">Example modal</div>
        <button data-close-button class="close-button">&times;</button>
    </div>
    <div class="modal-body">
        Sed ut perspiciatis unde
    </div>
</div>
<div id="overlay"></div> */}