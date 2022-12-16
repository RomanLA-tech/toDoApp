import {ALL_TASKS, TASK_LIST, TASKS_LIST_ELEMENT} from './consts';
import {Task} from './Task';

export class TaskList {
	
	render(tasks) {
		tasks.forEach(task => TASKS_LIST_ELEMENT.appendChild(this.getTaskHTML(task)));
	}
	
	deleteTask(id) {
		let allTasks = ALL_TASKS.filter(task => task.id !== id);
		localStorage.clear();
		localStorage.setItem('tasks', JSON.stringify(allTasks));
	}
	
	getTaskHTML(task) {
		const task_el = document.createElement('div');
		task_el.classList.add('task');
		
		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');
		
		task_el.appendChild(task_content_el);
		
		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task.description;
		task_input_el.setAttribute('readonly', 'readonly');
		
		task_content_el.appendChild(task_input_el);
		
		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';
		
		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';
		
		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);
		
		task_el.appendChild(task_actions_el);
		
		task_edit_el.addEventListener('click', () => {
			if (task_edit_el.innerText.toLowerCase() === 'edit') {
				task_edit_el.innerText = 'Save';
				task_input_el.removeAttribute('readonly');
				task_input_el.focus();
				new Task().editDescription(task_input_el.value);
			}
			else {
				task_edit_el.innerText = 'Edit';
				task_input_el.setAttribute('readonly', 'readonly');
			}
		});
		
		task_delete_el.addEventListener('click', () => {
			TASK_LIST.deleteTask(task.id);
			TASKS_LIST_ELEMENT.removeChild(task_el);
		});
		return task_el;
	}
}

