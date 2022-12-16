export class Modal {
	
	modal;
	
	constructor() {
		this.modal = document.getElementById('modal');
	}
	
	openModal() {
		this.modal.classList.remove('hide');
	}
	
	closeModal() {
		this.modal.classList.add('hide')
	}
}