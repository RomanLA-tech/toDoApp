import './styles.css';
import {Task} from './Task';
import {ALL_TASKS, FORM, MODAL, MODAL_CANSEL_BTN, OPEN_MODAL_BTN, TASK_LIST} from './consts';



window.addEventListener('load', () => {
	TASK_LIST.render(ALL_TASKS);
	
	FORM.addEventListener('submit', () => {
		new Task().createTask();
	});
	
	OPEN_MODAL_BTN.addEventListener('click', (e) => {
		e.preventDefault();
		MODAL.openModal();
	});
	
	MODAL_CANSEL_BTN.addEventListener('click', () => {
		MODAL.closeModal();
	});
	
});
