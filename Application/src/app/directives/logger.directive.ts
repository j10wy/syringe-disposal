import { Directive, HostBinding, HostListener } from '@angular/core';
@Directive({
	selector: '[appLogger]'
})
export class LoggerDirective {
	constructor() {}
	@HostListener('mouseenter', ['$event'])
	onHover(e) {
		console.log(e);
		console.log('You hovered over a person');
	}
}
