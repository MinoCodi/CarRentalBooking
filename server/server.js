const express = require("express");
const data = require("./data/data.json");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const fs = require("fs");

const today = new Date();
const monthNormilizer = () => {
	let m = today.getMonth();
	if (m < 9) {
		const n = m + 1;
		return (m = `0${n}`);
	} else if (m >= 9) {
		return (m += 1);
	}
};

const currentDate = `${today.getFullYear()}-${monthNormilizer()}-${today.getDate()}`;
const threeDaysAfterCurrentDate = `${today.getFullYear()}-${monthNormilizer()}-${today.getDate() + 3}`;
const sevenDaysAfterCurrentDate = `${today.getFullYear()}-${monthNormilizer()}-${today.getDate() + 7}`;

//Availiable cars on app launch date
data.cars[0].startDate = `${currentDate}`;
data.cars[1].startDate = `${currentDate}`;
data.cars[2].startDate = `${currentDate}`;
data.cars[3].startDate = `${currentDate}`;
data.cars[4].startDate = `${currentDate}`;
data.cars[5].startDate = `${currentDate}`;

//Availiable cars 3 days after app launch date
data.cars[12].startDate = `${threeDaysAfterCurrentDate}`;
data.cars[13].startDate = `${threeDaysAfterCurrentDate}`;
data.cars[14].startDate = `${threeDaysAfterCurrentDate}`;
data.cars[15].startDate = `${threeDaysAfterCurrentDate}`;
data.cars[16].startDate = `${threeDaysAfterCurrentDate}`;
data.cars[17].startDate = `${threeDaysAfterCurrentDate}`;

//Availiable cars a week after app launch date
data.cars[6].startDate = `${sevenDaysAfterCurrentDate}`;
data.cars[7].startDate = `${sevenDaysAfterCurrentDate}`;
data.cars[8].startDate = `${sevenDaysAfterCurrentDate}`;
data.cars[9].startDate = `${sevenDaysAfterCurrentDate}`;
data.cars[10].startDate = `${sevenDaysAfterCurrentDate}`;
data.cars[11].startDate = `${sevenDaysAfterCurrentDate}`;

fs.writeFile("./data/data.json", JSON.stringify(data, null, 2), function (err) {
	if (err) return console.warn(err);
	console.warn(JSON.stringify(data, null, 2));
});

const app = express();

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers");
	res.header("Content-Type: text/javascript");
	next();
});

app.use(express.static("data"));

app.get("/car/:id", (req, res) => {
	const sendCar = data.cars[req.params.id];
	res.send(sendCar);
});

app.get("/search", (req, res) => {
	const newSearch = { cars: [] };
	newSearch.cars = data.cars.filter( (car) => { return (car.city == req.query.city && car.startDate == req.query.startDate); } );
	res.send(newSearch);
	console.warn(req.query);
});

app.post("/selectedCity", urlencodedParser, function (request, response) {
	if(!request.body) return response.sendStatus(400);
	response.send(` Выбран город ${request.body.userName}`);
});

app.listen(3000, () =>
	console.warn("Server is running. Listening on port 3000")
);
console.warn("----------------------------------------------------");
