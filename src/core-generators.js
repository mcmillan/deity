import Range from './range';
import { getRandomElementOf } from './util';

export function string(options, range) {
	let length = new Range(range).getRandomInt();
	let str = '';

	for (let i = 0; i < length; i++) {
		str += getRandomElementOf(options.letters);
	}

	return str;
}

export function number(options, range, precision) {
	let random = new Range(range).getRandom();

	if (typeof precision !== 'number') {
		return random;
	}

	if (precision < 1) {
		return random.toFixed(-Math.log10(precision));
	}

	return Math.round(random / precision) * precision;
}

export function int(options, range) {
	return new Range(range).getRandomInt();

}

export function boolean(options, bias = 0.5) {
	return Math.random() < bias;
}

export function array(options, ...generators) {
	let generatorString = getRandomElementOf(generators);
	return new Generator(generatorString).resolve();
}

export function repeat(n, generatorString) {
	let value = new Generator(generatorString).resolve();
	return new Array(n + 1).join(value);
}