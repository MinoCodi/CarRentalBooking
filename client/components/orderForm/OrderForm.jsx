import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setUserName } from "/";
import { setUserSurname } from "/";
import { setUserEmail } from "/";
import PropTypes from "prop-types";
import styles from "./style";

class OrderForm extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<span>
				<form action="" >
					<label htmlFor="uname" className={styles.form}>Введите фамилию:
						<input type="text" id="uname" name="surname" onSubmit={this.props.handleSetUserName} />
  				</label>
  				<label htmlFor="uname" className={styles.form}>Введите имя:
  					<input type="text" id="uname" name="name" onSubmit={this.props.handleSetSurname} />
  				</label>
  				<label htmlFor="uemail" className={styles.form}>Введите Email:
  					<input type="text" id="uemail" name="email" onSubmit={this.props.handleSetUserEmail} />
  				</label>
				</form>

				<button type="submit">
				ORDER
				</button>
			</span>
		);
	}
}

OrderForm.propTypes = {
	userName: PropTypes.string.isRequired,
	userSurname: PropTypes.string.isRequired,
	userEmail: PropTypes.string.isRequired,
	handleSetUserName: PropTypes.func.isRequired,
	handleSetSurname: PropTypes.func.isRequired,
	handleSetUserEmail: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	userName: state.order.userName,
	userSurname: state.order.userSurname,
	userEmail: state.order.userEmail
});

const mapDispatchToProps = dispatch => ({
	handleSetUserName(event) {
		dispatch(setUserName(event.target.value));
	},
	handleSetSurname(event) {
		dispatch(setUserSurname(event.target.value));
	},
	handleSetUserEmail(event) {
		dispatch(setUserEmail(event.target.value));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
