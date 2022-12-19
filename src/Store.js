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
	
	getTaskDataById(taskId) {
		let taskList = this.getAllTasksList();
		const index = this.#getTaskIndexById({taskList, taskId});
		return {task: taskList[index], taskIndex: index, taskList};
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
	
	#getTaskIndexById({taskList, taskId}) {
		return taskList.findIndex((item) => Number(item.id) === Number(taskId));
	}
	
	#saveToLocalStore(taskList) {
		localStorage.setItem('tasks', JSON.stringify(taskList));
	}
}