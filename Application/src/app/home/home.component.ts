import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	clicked: boolean = false;
	page_title: string = `Home`;

	test = (): void => {
		this.clicked = true;
		setTimeout(() => {
			this.clicked = false;
		}, 1000);
		console.log(`Clicked is ${this.clicked}`);
	};
	constructor() {}

	ngOnInit() {}
}
