const express = require("express");
const data = require("./data/data.json");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const fs = require("fs");

const today = new Date();

const monthAndDateNormilizer = n => {
	const monthNormilizer = (increment) => {
		let m = today.getMonth();
		if(increment) {
			if(m == 11) {
				m = 0;
			}
			else {
				m++;
			}
		}
		if (m < 9) {
			const n = m + 1;
			return (m =`0${n}`);
		} else if (m >= 9) {
			m += 1;
			return (`${m}`);
		}
	};

	const dayNormilizer = n => {
		let d = today.getDate();
		let f = d + n;

		if(f > 28) {
			let month = monthNormilizer();
			if( month == "01" ||
					month == "03" ||
					month == "05" ||
					month == "07" ||
					month == "08" ||
					month == "10" ||
					month == "12") {
				d = f - 31;

				if(f == 29 || f == 30 || f == 31) {
					d = f;
					return (`${monthNormilizer()}-${d}`);
				}

				if(d < 10) {
					d = `0${d}`;
				}
				return (`${monthNormilizer(true)}-${d}`);
			}

			if(	month == "04" ||
					month == "06" ||
					month == "09" ||
					month == "11") {
				d = f - 30;

				if(f == 29 || f == 30) {
					d = f;
					return (`${monthNormilizer()}-${d}`);
				}

				if(d < 10) {
					d = `0${d}`;
				}
				return (`${monthNormilizer(true)}-${d}`);
			}

			if(month == "02") {
				d = f - 28;
				if(d < 10) {
					d = `0${d}`;
				}
				return (`${monthNormilizer(true)}-${d}`);
			}
		}

		else if(f <= 28) {
			if(f < 10) {
				f = `0${f}`;
			}
			return (`${monthNormilizer()}-${f}`);
		}
	};

	return dayNormilizer(n);
};


const currentDate = `${today.getFullYear()}-${monthAndDateNormilizer(0)}`;
const threeDaysAfterCurrentDate = `${today.getFullYear()}-${monthAndDateNormilizer(3)}`;
const sevenDaysAfterCurrentDate = `${today.getFullYear()}-${monthAndDateNormilizer(7)}`;

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

// //Availiable cars a week after app launch date
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
