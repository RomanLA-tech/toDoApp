import './styles.css';
import {
	addTaskByEnter,
	deleteTaskFromList,
	getActiveTasksList,
	getAllTasksList,
	getCompletedTasksList,
	openTaskCreateModal,
	openTaskEditModal,
	removeCompletedTasksFromList,
	searchTaskByDate,
	searchTaskByDescription,
	sortBySelectedValue,
	formSubmitHandler,
	toggleTaskIsCompleted
} from './utils';
import {
	DATE_FILTER_INPUT,
	FILTER_ACTIVE_BTN,
	FILTER_ALL_BTN,
	FILTER_COMPLETED_BTN,
	FORM,
	FORM_INPUT,
	OPEN_MODAL_BTN,
	REMOVE_COMPLETED_BTN,
	SEARCH_TEXT_INPUT,
	SORT_BY_SELECT,
	STORE,
	TASK_LIST,
	TASKS_LIST_ELEMENT
} from './consts';


window.addEventListener('load', () => {
	TASK_LIST.renderTaskList(STORE.getAllTasksList());
	
	FORM.addEventListener('submit', formSubmitHandler);
	
	OPEN_MODAL_BTN.addEventListener('click', (e) => {
		openTaskCreateModal(e);
	});
	
	FORM_INPUT.addEventListener('keyup', (e) => {
		addTaskByEnter(e);
	}, {once: true});
	
	TASKS_LIST_ELEMENT.addEventListener('click', (e) => {
		openTaskEditModal(e);
	});
	
	TASKS_LIST_ELEMENT.addEventListener('click', (e) => {
		deleteTaskFromList(e);
	});
	
	TASKS_LIST_ELEMENT.addEventListener('change', (e) => {
		toggleTaskIsCompleted(e);
	});
	
	SEARCH_TEXT_INPUT.addEventListener('input', (e) => {
		searchTaskByDescription(e);
	});
	
	DATE_FILTER_INPUT.addEventListener('change', (e) => {
		searchTaskByDate(e);
	});
	
	FILTER_ALL_BTN.addEventListener('click', getAllTasksList);
	
	FILTER_ACTIVE_BTN.addEventListener('click', getActiveTasksList);
	
	FILTER_COMPLETED_BTN.addEventListener('click', getCompletedTasksList);
	
	REMOVE_COMPLETED_BTN.addEventListener('click', removeCompletedTasksFromList);
	
	SORT_BY_SELECT.addEventListener('change', sortBySelectedValue);
});
