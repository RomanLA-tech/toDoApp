import {STORE} from './consts';
import {getCurrentDate, getTomorrowDate} from './utils';


export class Task {
	
	constructor(description, start, end,) {
		this.description = description;
		this.start = start;
		this.end = end;
	}
	
	create() {
		return STORE.addTask({
			id: Date.now().toString(),
			description: this.description,
			start: this.start || getCurrentDate(new Date()),
			end: this.end || getTomorrowDate(new Date()),
			isCompleted: false
		});
	}
}
