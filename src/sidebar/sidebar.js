import {State} from '../utils/state';

export class Sidebar {

	static inject(){ return [State]; }

	constructor(state){
		this.state = state
	}

}