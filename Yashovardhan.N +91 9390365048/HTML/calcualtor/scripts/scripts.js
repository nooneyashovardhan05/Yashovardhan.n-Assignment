document.addEventListener("DOMContentLoaded", () => {
	let equationInput = document.querySelector(".equation-input");

	document.querySelectorAll(".equation-input-value").forEach((button) => {
		button.addEventListener("click", () => {
			equationInput.value += button.value;
		});
	});

	document.querySelector(".all-clear").addEventListener("click", () => {
		equationInput.value = "";
	});

	document.querySelector(".evaluate").addEventListener("click", () => {
		try {
			let inputValue = "" + equationInput.value;

			if (inputValue.includes("×")) {
				inputValue = inputValue.replace(/×/g, "*");
			}

			if (inputValue.includes("÷")) {
				inputValue = inputValue.replace(/÷/g, "/");
			}

			if (eval(inputValue)) {
				equationInput.value = Math.round(Number(eval(inputValue)) * 1000000000000) / 1000000000000;
			}
		} catch (error) {
			alert("enter correct expression");
			equationInput.value = "";
		}
	});
});
