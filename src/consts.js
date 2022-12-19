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
export const FILTER_ALL_BTN = document.getElementById('filter-all');
export const FILTER_ACTIVE_BTN = document.getElementById('filter-active');
export const FILTER_COMPLETED_BTN = document.getElementById('filter-completed');
export const REMOVE_COMPLETED_BTN = document.getElementById('remove-completed');
export const SORT_BY_SELECT = document.getElementById('sort-select');
export const FORM_INPUT = document.getElementById('task-input');
export const DATE_FILTER_INPUT = document.getElementById('filter-date-input');
export const SEARCH_TEXT_INPUT = document.getElementById('filter-text-input');
export const TASKS_LIST_ELEMENT = document.getElementById('list');
