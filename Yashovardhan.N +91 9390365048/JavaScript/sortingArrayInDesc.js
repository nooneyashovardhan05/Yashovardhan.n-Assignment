class sortArray {
	constructor() {
		let sizeOfArray = prompt("enter size of array");
		sizeOfArray = parseInt(sizeOfArray);

		if (!isNaN(sizeOfArray)) {
			let array = [];

			for (let i = 0; i < sizeOfArray; i++) {
				let number = prompt("enter elements of array");
				let arrayElementInput = parseInt(number);

				if (!isNaN(arrayElementInput)) {
					array.push(arrayElementInput);
				} else {
					console.log("enter only integer elements");
					i--;
				}
			}
			array.sort().reverse();
			console.log(array);
		} else {
			console.log("enter only number for size of array");
		}
	}
}

new sortArray();
