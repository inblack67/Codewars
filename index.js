const isSpecial = (letter) => {
	const regex = /[a-z]/gi;
	return !regex.test(letter);
};

const rot13 = (word) => {
	const wordArr = word.split('');
	console.log(wordArr);
	const cipheredArr = wordArr.map((letter) => {
		if (isSpecial(letter)) {
			return letter;
		}
		const code = letter.charCodeAt(0);
		const ciphered = code + 13;
		console.log(ciphered);
		const cipheredLetter = String.fromCharCode(ciphered);
		console.log(cipheredLetter);
		return cipheredLetter;
	});
	console.log(cipheredArr);
	return cipheredArr.join('');
};

console.log(rot13('test'));
