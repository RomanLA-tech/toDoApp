import {Task} from './Task';
import {
	FORM, FORM_INPUT, MODAL, STORE, TASK_LIST
} from './consts';
import {getEditTaskModalTemplate, getTaskCreateModalTemplate} from './templates';


/*---DATE---*/
export function getTomorrowDate(date) {
	const day = date.getDate() + 1;
	const month = date.getMonth() + 1;
	const year = date.getFullYear();
	return `${year}-${month}-${day}`;
}

export function getCurrentDate(date = new Date()) {
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();
	return `${year}-${month}-${day}`;
}

export function formatDateToNumber(date) {
	return Number(date.split('-').join(''));
}

/*---FORM---*/
export function formSubmitHandler() {
	const description = FORM_INPUT.value;
	new Task(description).create();
	if (description !== '') {
		TASK_LIST.renderTaskList(STORE.getAllTasksList());
		MODAL.closeModal();
		FORM.reset();
	}
	else {
	}
}

export function addTaskByEnter(e) {
	if (e.code !== 'Enter') {
	}
	else {
		formSubmitHandler();
	}
}

/*---TASKS---*/
export function deleteTaskFromList(e) {
	if (e.target.classList.contains('task__delete-btn')) {
		const task = e.target.closest('.task');
		const id = task.dataset.id;
		STORE.deleteTask(id);
		TASK_LIST.renderTaskList(STORE.getAllTasksList());
	}
}

export function toggleTaskIsCompleted(e) {
	if (e.target.classList.contains('task_checkbox')) {
		const el = e.target.closest('.task');
		const id = el.dataset.id;
		STORE.toggleTaskIsCompletedStatus(id);
		TASK_LIST.renderTaskList(STORE.getAllTasksList());
	}
}

export function getEditedTaskData(e) {
	if (e.target.classList.contains('task__edit-btn')) {
		const el = e.target.closest('.task');
		const id = el.dataset.id;
		return STORE.getTaskDataById(id);
	}
}

/*---MODAL---*/
export function openTaskCreateModal(e) {
	e.preventDefault();
	let description = FORM_INPUT.value;
	if (description === '') {
		alert('Please type your task firstly');
		return;
	}
	const {
		dateStartInput, dateEndInput, acceptBtn
	} = MODAL.openModal(getTaskCreateModalTemplate({titleText: 'Create task:'}));
	acceptBtn.addEventListener('click', () => {
		new Task(description, dateStartInput.value, dateEndInput.value).create();
		TASK_LIST.renderTaskList(STORE.getAllTasksList());
		MODAL.closeModal();
		FORM.reset();
	});
}

export function openTaskEditModal(e) {
	const {task} = getEditedTaskData(e);
	const {dateStartInput, dateEndInput, acceptBtn, textInput} = MODAL.openModal(getEditTaskModalTemplate());
	dateStartInput.value = task.start;
	dateEndInput.value = task.end;
	textInput.value = task.description;
	acceptBtn.addEventListener('click', () => {
		STORE.editTaskData(task.id, {
			description: textInput.value, start: dateStartInput.value, end: dateEndInput.value
		});
		TASK_LIST.renderTaskList(STORE.getAllTasksList());
		MODAL.closeModal();
	});
}



