import './styles.css';
import {
	addTaskByEnter,
	openTaskCreateModal,
	formSubmitHandler,
	toggleTaskIsCompleted
} from './utils';
import {
	FORM,
	FORM_INPUT,
	OPEN_MODAL_BTN,
	STORE,
	TASK_LIST,
	TASKS_LIST_ELEMENT
} from './consts';


window.addEventListener('load', () => {
	TASK_LIST.renderTaskList(STORE.getAllTasksList());
	
	FORM.addEventListener('submit', (e) => {
		e.preventDefault();
		formSubmitHandler();
	});
	
	OPEN_MODAL_BTN.addEventListener('click', (e) => {
		openTaskCreateModal(e);
	});
	
	FORM_INPUT.addEventListener('keyup', (e) => {
		addTaskByEnter(e);
	}, {once: true});
	
	TASKS_LIST_ELEMENT.addEventListener('change', (e) => {
		toggleTaskIsCompleted(e);
	});
});
