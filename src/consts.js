import {Modal} from './Modal';
import {TaskList} from './TaskList';

export const MODAL = new Modal();
export const TASK_LIST = new TaskList()
export const FORM = document.getElementById('form');
export const OPEN_MODAL_BTN = document.getElementById('open-modal-btn');
export const FORM_SUBMIT_BTN = document.getElementById('submit-btn');
export const FORM_INPUT = document.getElementById('task-input');
export const ALL_TASKS =  JSON.parse(localStorage.getItem('tasks') || '[]');
export const MODAL_ACCEPT_BTN = document.getElementById('accept-modal-btn');
export const MODAL_CANSEL_BTN = document.getElementById('close-modal-btn');
export const MODAL_START_DATE_INPUT = document.getElementById( 'modal-start')
export const MODAL_END_DATE_INPUT = document.getElementById( 'modal-start')
export const TASKS_LIST_ELEMENT = document.getElementById('list')
