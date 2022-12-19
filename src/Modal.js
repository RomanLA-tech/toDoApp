import {MODAL_WINDOW, OVERLAY} from './consts';


export class Modal {
	
	constructor() {
		this.modal = document.getElementById('modal');
	}
	
	openModal(template) {
		this.modal.classList.remove('hide');
		OVERLAY.classList.remove('hide');
		this.modal.appendChild(template);
		const textInput = MODAL_WINDOW.querySelector('#modal-edit-text');
		const acceptBtn = MODAL_WINDOW.querySelector('#accept-modal-btn');
		const cancelBtn = MODAL_WINDOW.querySelector('#close-modal-btn');
		const dateStartInput = MODAL_WINDOW.querySelector('#modal-start');
		const dateEndInput = MODAL_WINDOW.querySelector('#modal-end');
		cancelBtn.addEventListener('click', () => this.closeModal());
		return {dateStartInput, dateEndInput, acceptBtn, textInput};
	}
	
	closeModal() {
		this.modal.removeChild(this.modal.children[0]);
		this.modal.classList.add('hide');
		OVERLAY.classList.add('hide');
	}
}
