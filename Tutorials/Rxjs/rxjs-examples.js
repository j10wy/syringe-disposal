import $ from "jquery";
import Rx from "rxjs/Rx";
import { switchMap } from "rxjs/operator/switchMap";

/**
 * CREATING OBSERVABLES FROM EVENTS
 * The code below creates observables from events in the browser
 */

const btn = $("#btn");
const btnStream$ = Rx.Observable.fromEvent(btn, "click");

const input = $("#input");
const output = $("#output");
const inputStream$ = Rx.Observable.fromEvent(input, "keyup");

const moveStream$ = Rx.Observable.fromEvent(document, "mousemove");
const mouseMove = $("#mousemove");

// Takes three functions
// 1) The event
// 2) Error handler
// 3) On complete
btnStream$.subscribe(
	event => {
		console.log(event.target);
	},
	err => {
		console.log(err);
	},
	() => {
		console.log("Complete");
	}
);

inputStream$.subscribe(
	event => {
		output.append(event.currentTarget.value);
	},
	err => {
		console.log(err);
	},
	() => {
		console.log("Complete");
	}
);

moveStream$.subscribe(
	event => {
		mouseMove.text(`X: ${event.clientX} | Y: ${event.clientY}`);
	},
	err => {
		console.log(err);
	},
	() => {
		console.log("Complete");
	}
);

/**
 * CREATING OBSERVABLES FROM ARRAYS
 */

const numbers = [35, 163, 12, 144];
const numbers$ = Rx.Observable.from(numbers);

numbers$.subscribe(
	val => {
		console.log(val);
	},
	err => {
		console.log(err);
	},
	() => { }
);

const posts = [
	{ title: "Post One", body: "This is the body" },
	{ title: "Post Two", body: "This is the body" },
	{ title: "Post Three", body: "This is the body" }
];

const posts$ = Rx.Observable.from(posts);

posts$.subscribe(
	post => {
		$("#posts").append(`<p>${post.title}</p>`);
	},
	err => {
		console.log(err);
	},
	() => { }
);

const set = new Set(["Hello", 44, true]);
const set$ = Rx.Observable.from(set);

set$.subscribe(
	post => {
		$("#setstream").append(`<p>${post}</p>`);
	},
	err => {
		console.log(err);
	},
	() => { }
);

const myMap = new Map([[1, 2], [3, 4], [5, 6]]);
const myMap$ = Rx.Observable.from(myMap);

myMap$.subscribe(
	ms => {
		console.log(ms);
		$("#mapstream").append(`<p>${ms}</p>`);
	},
	err => {
		console.log(err);
	},
	() => { }
);

/**
 * CREATING OBSERVABLES FROM SCRATCH
 */

const obs$ = new Rx.Observable(observer => {
	observer.next("Hello!");
	observer.error(new Error("OPPS!"));
});

obs$
	.catch(err => {
		return Rx.Observable.of(err);
	})
	.subscribe(
		e => {
			console.log(e);
		},
		err => {
			console.log(err);
		},
		() => {
			console.log("Complete");
		}
	);

/**
 * POPULAR METHODS
 */

// Merge Map
Rx.Observable.of("Hello")
	.mergeMap(val => {
		return Rx.Observable.of(`${val} Everyone!`);
	})
	.subscribe(x => {
		console.log(x);
	});

// Switch Map

function getMovie(movie) {
	return $
		.ajax({
			url: "http://www.omdbapi.com/?apikey=b5d42a3&t=" + movie,
			dataType: "json"
		})
		.promise();
}

const inputSource$ = Rx.Observable.fromEvent($("#searchBox"), "keyup")
	.map(event => event.target.value)
	.switchMap(movie => {
		return Rx.Observable.fromPromise(getMovie(movie));
	});

inputSource$.subscribe(movietitle => {
	console.log(movietitle);
});
