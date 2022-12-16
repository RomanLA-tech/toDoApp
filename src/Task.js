import {ALL_TASKS, FORM_INPUT, MODAL_END_DATE_INPUT, MODAL_START_DATE_INPUT} from './consts';


export class Task {
	
	
	constructor(description, start, end,) {
		this.description = description;
		this.start = start;
		this.end = end;
		this.isCompleted = false;
	}
	
	createTask() {
		this.description = FORM_INPUT.value;
		this.start = MODAL_START_DATE_INPUT.value;
		this.end = MODAL_END_DATE_INPUT.value;
		return this.addTaskToLocalStorage({
			id: new Date(),
			description: this.description,
			start: this.start || new Date(),
			end: this.end || new Date(),
			isCompleted: false
		});
	}
	
	addTaskToLocalStorage(task) {
		const allTasks = ALL_TASKS;
		allTasks.push(task);
		localStorage.setItem('tasks', JSON.stringify(allTasks));
	}
	
	editDescription(newDescription) {
		this.description = newDescription
	}
}