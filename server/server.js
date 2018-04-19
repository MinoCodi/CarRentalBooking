const express = require("express");
const data = require("./data/data.json");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers");
	next();
});

app.use(express.static("data"));

app.get("/car/:id", (req, res) => {
	const sendCar = data.cars[req.params.id];
	res.send(sendCar);
});

app.get("/search", (req, res) => {
	const newSearch = { cars: [] };
	newSearch.cars = data.cars.filter( (car) => { return car.city == req.query.city; } );
	res.send(newSearch);
});

app.post("/selectedCity", urlencodedParser, function (request, response) {
	if(!request.body) return response.sendStatus(400);
	response.send(` Выбран город ${request.body.userName}`);
});

app.listen(3000, () =>
	console.warn("Server is running. Listening on port 3000")
);
console.warn("----------------------------------------------------");
