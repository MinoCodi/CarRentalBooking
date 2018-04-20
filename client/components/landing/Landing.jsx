import React from "react";
import Header from "../header/Header";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./style";
import PropTypes from "prop-types";
import { setCityFilter } from "/";
import { setStartDate } from "/";
import { setEndDate } from "/";

class Landing extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
		this.state = { city: "Гродно" };
		this.currentDate;
	}

	onChange()  {
		const select = document.getElementById("selectId");
		const value = select.options[select.selectedIndex].value;
		return value;
	}

	handleSubmit(event) {
		alert(`you choose ${this.state.city}`);
		event.preventDefault();
	}

	handleChange(event) {
		this.setState({ city: event.target.value });
	}

	onChange2(value, dateString) {
		console.warn("Formatted Selected Time: ", dateString);
	}

	componentWillMount() {
		const now = new Date();
		const monthNormilizer = () => {
			let m = now.getMonth();
			if (m < 9) {
				const n = m + 1;
				return (m = `0${n}`);
			} else if (m >= 9) {
				return (m += 1);
			}
		};

		const currentDate = `${now.getFullYear()}-${monthNormilizer()}-${now.getDate()}`;

		this.currentDate = currentDate;
	}

	render() {
		return (
			<div className={styles.landing}>
				<Header />
				<h1>Car finder</h1>
				<div>
					{/* Выбор даты и города ниже: */}
					<div>
						<div className={styles.text}>Выберите дату:</div>
						{/* Дата ниже: */}
						<input type="date" id="startDate"
							defaultValue={this.props.date1}
							min={this.currentDate}
							onChange={this.props.handleSetStartDate}></input>

						<input type="date" id="endDate"
							defaultValue={this.props.date1}
							min={this.props.date2}
							onChange={this.props.handleSetEndDate}></input>
						{/* Дата выше: */}
						<form>
							<select
								onChange={this.props.handleSetCitySelectorChange}
								defaultValue={this.props.city}>
								<option hidden value="ChooseCity">Выберите город:</option>
								<option value="Minsk">Минск</option>
								<option value="Borisov">Борисов</option>
								<option value="Grodno">Гродно</option>
								<option value="Vitebsk">Витебск</option>
							</select>
						</form>
					</div>
					{/* Выбор даты и города выше */}
					<button>
						<Link to="/search">ПОИСК</Link>
					</button>
				</div>
			</div>
		);
	}
}

Landing.propTypes = {
	city: PropTypes.string.isRequired,
	handleSetCitySelectorChange: PropTypes.func.isRequired,
	handleSetStartDate: PropTypes.func.isRequired,
	handleSetEndDate: PropTypes.func.isRequired,
	date1: PropTypes.string.isRequired,
	date2: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
	city: state.filters.city,
	date1: state.filters.startDate,
	date2: state.filters.endDate
});

const mapDispatchToProps = dispatch => ({
	handleSetCitySelectorChange(event) {
		dispatch(setCityFilter(event.target.value));
	},
	handleSetStartDate(event) {
		dispatch(setStartDate(event.target.value));
	},
	handleSetEndDate(event) {
		dispatch(setEndDate(event.target.value));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
