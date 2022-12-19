import {formatDateToNumber} from './utils';


export class Store {
	
	getAllTasksList() {
		return JSON.parse(localStorage.getItem('tasks') || '[]');
	}
	
	addTask(task) {
		const allTasks = this.getAllTasksList();
		allTasks.push(task);
		this.#saveToLocalStore(allTasks);
	}
	
	deleteTask(taskId) {
		let allTasks = this.getAllTasksList().filter(task => task.id !== taskId);
		this.#saveToLocalStore(allTasks);
	}
	
	getTaskDataById(taskId) {
		let taskList = this.getAllTasksList();
		const index = this.#getTaskIndexById({taskList, taskId});
		return {task: taskList[index], taskIndex: index, taskList};
	}
	
	editTaskData(taskId, newTaskData) {
		let {task, taskIndex, taskList} = this.getTaskDataById(taskId);
		taskList[taskIndex] = {
			id: task.id,
			isCompleted: task.isCompleted,
			description: newTaskData.description || task.description,
			end: newTaskData.end || task.end,
			start: newTaskData.start || task.start
		};
		this.#saveToLocalStore(taskList);
	}
	
	toggleTaskIsCompletedStatus(taskId) {
		const {task, taskIndex, taskList} = this.getTaskDataById(taskId);
		task.isCompleted = !task.isCompleted;
		taskList[taskIndex] = task;
		this.#saveToLocalStore(taskList);
	}
	
	searchTaskByDescription(filterText) {
		return this.getAllTasksList().filter(task => task.description.includes(filterText));
	}
	
	searchTaskByDate(date) {
		return this.getAllTasksList().filter(task => task.end === date || task.start === date);
	}
	
	removeCompletedTasks() {
		const filteredList = this.getAllTasksList().filter(task => task.isCompleted !== true);
		this.#saveToLocalStore(filteredList);
	}
	
	getActiveTasks() {
		return this.getAllTasksList().filter(task => task.isCompleted !== true);
	}
	
	getCompletedTasks() {
		return this.getAllTasksList().filter(task => task.isCompleted === true);
	}
	
	getSortedByDateList() {
		const sorted = this.getAllTasksList().sort((a, b) => formatDateToNumber(b.end) - formatDateToNumber(a.end));
		return sorted;
	}
	
	#getTaskIndexById({taskList, taskId}) {
		return taskList.findIndex((item) => Number(item.id) === Number(taskId));
	}
	
	#saveToLocalStore(taskList) {
		localStorage.setItem('tasks', JSON.stringify(taskList));
	}
}
