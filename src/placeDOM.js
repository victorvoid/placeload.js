import { curry } from 'ramda';

export const addClass = curry((element, className) => {
	element.className += ` ${className}`;
	return element;
});

export const divElement = document.createElement('div');
