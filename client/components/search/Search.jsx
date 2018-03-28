import React, { Component } from "react";
import { connect } from "react-redux";
import { setSearchPage } from "/";
import ShowCard from "../showCard/ShowCard";
import Header from "../header/Header";
import styles from "./style";
import PropTypes from "prop-types";

class Search extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		const url = "/data";
		this.props.loadCars(url);
	}

	render() {
		const { cars } = this.props.searchPage;
		return (
			<React.Fragment>
				{cars.length ? (
					<div className={styles.search}>
						<Header />
						<div>{cars.map(car => <ShowCard key={car.ID} {...car} />)} </div>
					</div>
				) : ( <h1>Loading...</h1> )}
			</React.Fragment>
		);
	}
}
Search.propTypes = {
	loadCars: PropTypes.func.isRequired,
	searchPage: PropTypes.object.isRequired
};


const mapStateToProps = state => ({ searchPage: state.searchPage });
const mapDispatchToProps = dispatch => ({
	loadCars(url) {
		dispatch(setSearchPage(url));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
