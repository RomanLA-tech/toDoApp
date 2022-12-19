import {getCurrentDate, getTomorrowDate} from './utils';


export function getTaskCreateModalTemplate({titleText, input}) {
	const modalContent = document.createElement('div');
	modalContent.classList.add('modal__content');
	
	const title = document.createElement('h2');
	title.innerText = titleText;
	title.classList.add('modal__description');
	
	const inputsGroup = document.createElement('div');
	inputsGroup.classList.add('modal__date-inputs-group');
	
	const labelForStart = document.createElement('label');
	labelForStart.for = 'modal-start';
	labelForStart.innerText = 'Start';
	labelForStart.classList.add('modal__label');
	const dateInputStart = document.createElement('input');
	dateInputStart.type = 'date';
	dateInputStart.id = 'modal-start';
	dateInputStart.classList.add('modal_date-input');
	dateInputStart.value = getCurrentDate();
	
	const labelForEnd = document.createElement('label');
	labelForEnd.for = 'modal-end';
	labelForEnd.innerText = 'End';
	labelForEnd.classList.add('modal__label');
	const dateInputEnd = document.createElement('input');
	dateInputEnd.type = 'date';
	dateInputEnd.id = 'modal-end';
	dateInputEnd.classList.add('modal_date-input');
	dateInputEnd.value = getTomorrowDate(new Date());
	
	inputsGroup.append(labelForStart, dateInputStart, labelForEnd, dateInputEnd);
	
	const buttonGroup = document.createElement('div');
	buttonGroup.classList.add('modal__button-group');
	
	const acceptBtn = document.createElement('button');
	acceptBtn.classList.add('modal__button');
	acceptBtn.id = 'accept-modal-btn';
	acceptBtn.innerText = 'OK';
	
	const cancelBtn = document.createElement('button');
	cancelBtn.classList.add('modal__button');
	cancelBtn.id = 'close-modal-btn';
	cancelBtn.innerText = 'Cancel';
	
	buttonGroup.append(acceptBtn, cancelBtn);
	
	modalContent.append(title);
	if (input) {
		modalContent.append(input, inputsGroup, buttonGroup);
	}
	else {
		modalContent.append(inputsGroup, buttonGroup);
	}
	
	return modalContent;
}
