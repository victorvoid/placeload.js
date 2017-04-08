import { curry, map, isNil } from 'ramda';

export const addClass = curry((element, className) => {
	element.className += ` ${className}`;
	return element;
});

export const divElement = styled => {
	let element = document.createElement('div');
	if(!isNil(styled.className)) {
		 element = addClass(element, styled.className);
	}
		 return element;
};
