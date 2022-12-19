import {Modal} from './Modal';
import {TaskList} from './TaskList';
import {Store} from './Store';


export const MODAL = new Modal();
export const TASK_LIST = new TaskList();
export const STORE = new Store();

export const OVERLAY = document.getElementById('overlay');
export const FORM = document.getElementById('form');
export const MODAL_WINDOW = document.getElementById('modal');
export const OPEN_MODAL_BTN = document.getElementById('open-modal-btn');
export const FORM_INPUT = document.getElementById('task-input');
export const TASKS_LIST_ELEMENT = document.getElementById('list');
