addEventListener("message", messageHandler, true);

function messageHandler (evt) {
	var weight;
	var height;
	var bmi;

	if(evt.data.units == "en") {
		weight = Number(evt.data.weight);
		height = Number(evt.data.height);
	}
	else if(evt.data.units == "metric") {
		weight = Number(evt.data.weight) * 2.20462262;
		height = Number(evt.data.height) * 0.393700787;
	}
	bmi = Number(weight * 703) / (Number(height) * Number(height));
	bmi = bmi.toFixed(3);
	postMessage(bmi);
}