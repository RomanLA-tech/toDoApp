import {TASKS_LIST_ELEMENT} from './consts';


export class TaskList {
	
	renderTaskList(tasks) {
		const noTasksMessage = 'No tasks present';
		TASKS_LIST_ELEMENT.innerHTML = '';
		if (tasks.length === 0) {
			TASKS_LIST_ELEMENT.innerHTML = `<h2 class='tasks-list__title'>${noTasksMessage}<h2>`;
		}
		else {
			tasks.forEach(task => {
				this.renderSingleTask(task);
			});
		}
	}
	
	renderSingleTask(task) {
		const element = document.createElement('article');
		element.classList.add('task');
		element.dataset.id = task.id;
		element.append(this.#getTaskHTML(task));
		TASKS_LIST_ELEMENT.prepend(element);
	}
	
	#getTaskHTML(task) {
		let {start, end, description, isCompleted} = task;
		const isChecked = () => isCompleted ? 'checked' : '';
		
		const taskElement = document.createElement('div');
		if (isCompleted) {
			taskElement.classList.add('completed');
		}
		else {
			taskElement.classList.add('task__container');
		}
		
		const checkBosContainer = document.createElement('div');
		checkBosContainer.classList.add('task__checkbox-container');
		checkBosContainer.innerHTML = `<input class='task_checkbox' type='checkbox' ${isChecked()} />`;
		
		const datesContainer = document.createElement('div');
		datesContainer.innerHTML = `<span class='task__date'>Start: ${start}</span>
		<span class='task__date'>End: ${end}</span>`;
		
		const taskDescription = document.createElement('h3');
		taskDescription.classList.add('task__description');
		taskDescription.innerText = `${description}`;
		
		const taskActionsContainer = document.createElement('div');
		taskActionsContainer.classList.add('task__actions-container');
		
		const editTaskBtn = document.createElement('button');
		editTaskBtn.classList.add('task__edit-btn');
		editTaskBtn.title = 'Edit task';
		editTaskBtn.innerText = 'Edit';
		
		const deleteTaskBtn = document.createElement('button');
		deleteTaskBtn.classList.add('task__delete-btn');
		deleteTaskBtn.title = 'Delete task';
		deleteTaskBtn.innerText = 'Delete';
		
		taskActionsContainer.append(editTaskBtn, deleteTaskBtn);
		
		taskElement.append(checkBosContainer, datesContainer, taskDescription, taskActionsContainer);
		
		if (isCompleted) {
			taskElement.classList.add('completed');
		}
		
		return taskElement;
	}
}
