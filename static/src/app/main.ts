import {Component} from '@angular/core';

@Component({
  selector: 'fountain-app',
  template: require('./main.html')
})
export class MainComponent {

	mainContainerFillClass: any;

	constructor() {
		//let fillClass = (window.innerHeight > window.innerWidth/1.333333333) 
		let fillClass = (window.innerHeight > window.innerWidth/1.7)
		    ? 'fillheight'
		    : 'fillwidth';
		this.mainContainerFillClass = fillClass;
	}

	onResize(event) {
		//let fillClass = (event.target.innerHeight > event.target.innerWidth/1.333333333)
		let fillClass = (event.target.innerHeight > event.target.innerWidth/1.7)  
		    ? 'fillheight'
		    : 'fillwidth';
		this.mainContainerFillClass = fillClass;
	}
}


