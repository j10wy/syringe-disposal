import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'trimmer'
})
export class TrimmerPipe implements PipeTransform {
	transform(value: string): string {
		return value
			.split('')
			.map((item) => `${item}.`)
			.join('')
			.toUpperCase();
	}
}
