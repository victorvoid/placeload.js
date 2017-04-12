export const getUnit = str => str.replace(/[0-9]/g, '');
export const isPorcent = str => getUnit(str) === '%';
export const isPixel = str => getUnit(str) === 'px';
export const toPorcent = str => `${str}%`;
export const toPixel = str => `${str}px`;
