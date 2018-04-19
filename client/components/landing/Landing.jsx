import React from "react";
import Header from "../header/Header";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./style";
import PropTypes from "prop-types";
import {setCityFilter} from "/";

// import { DatePicker } from "antd";
// import moment from "moment";
// const { MonthPicker, RangePicker } = DatePicker;
//
// import { Button } from "antd";

// <RangePicker
//   defaultValue={[
//     moment(this.currentDate, dateFormat),
//     moment(this.currentDate, dateFormat)
//   ]}
//   format={dateFormat}
//   onChange={this.onChange}
// />

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

	onChange2(value, dateString ) {
		//console.log("Selected Time: ", value);
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
		const currentDate = `${now.getDate()}/${monthNormilizer()}/${now.getFullYear()}`;

		this.currentDate = currentDate;
	}

	render() {
		//const dateFormat = "DD/MM/YYYY";

		return (
			<div className={styles.landing}>
				<Header />
				<h1>Car finder</h1>
				<div>
					{/* Выбор города ниже: */}
					<div>
						<div className={styles.text}>Выберите город:</div>
						<form>
							<select
								onChange={this.props.handleSetCitySelectorChange}>
								<option disabled> Выберите город: </option>
								<option value="Minsk">Минск</option>
								<option value="Borisov">Борисов</option>
								<option value="Grodno">Гродно</option>
								<option value="Vitebsk">Витебск</option>
							</select>
						</form>
					</div>
					{/* Выбор города выше */}
					<button>
						<Link to="/search">ПОИСК</Link>
					</button>
				</div>
			</div>
		);
	}
}
Landing.propTypes = {
	cityFilter: PropTypes.string,
	handleSetCitySelectorChange: PropTypes.func.isRequired

};
const mapStateToProps = state => ({ cityFilter: state.cityFilter });
const mapDispatchToProps = dispatch => ({
	handleSetCitySelectorChange(event) {
		dispatch(setCityFilter(event.target.value));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
