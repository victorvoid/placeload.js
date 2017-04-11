import { curry, map, isNil } from 'ramda';

export const addClass = curry((element, className) => {
	element.className += ` ${className}`;
	return element;
});

export const position = curry((element, pos) => {
	if(!isNil(pos.top))    element.style.top = pos.top;
	if(!isNil(pos.bottom)) element.style.top = pos.bottom;
	if(!isNil(pos.left))   element.style.top = pos.left;
	if(!isNil(pos.right))  element.style.top = pos.right;
	return element;
});

export const size = curry((element, tam) => {
	if(!isNil(tam.width)) element.style.width = tam.width;
	if(!isNil(tam.height)) element.style.height = tam.height;
	return element;
});

export const divElement = styled => {
	let element = document.createElement('div');
	if(!isNil(styled.className)) {
		 element = addClass(element, styled.className);
	}
	if(!isNil(styled.position)){
		element = position(element, styled.position);
	}

	if(!isNil(styled.size)){
		element = size(element, styled.size);
	}
		 return element;
};
