import React from "react";
import Calendar from "../calendar/Calendar";
import Header from "../header/Header";
import Search from "../search/Search";
import { Link } from "react-router-dom";
import SearchButton from "../searchButton/SearchButton";
import { connect } from "react-redux";
import { setCitySelector } from "./actionCreator";
import styles from "./style";
import PropTypes from 'prop-types';


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

  static propTypes = {
    citySelector: PropTypes.string,
    handleSetCitySelectorChange: PropTypes.func.isRequired

  }

  onChange = () => {
    const select = document.getElementById("selectId");
    const value = select.options[select.selectedIndex].value;
    return value;
  };
  handleSubmit(event) {
    alert(`you choose ${this.state.city}`);
    event.preventDefault();
  }
  handleChange(event) {
    this.setState({ city: event.target.value });
  }
  onChange(value, dateString) {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
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
        <h1>Car Finder</h1>
        <div>
          <div>
            Выберите город:
            <form onSubmit={this.handleSubmit}>
              <select
                defaultValue={this.props.citySelector}
                onChange={this.props.handleSetCitySelectorChange}
              >
                <option value="Минск">Минск</option>
                <option value="Борисов">Борисов</option>
                <option value="Гродно">Гродно</option>
                <option value="Витебск">Витебск</option>
              </select>
            </form>
          </div>
          <button>
            <Link to="/search">ПОИСК</Link>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ citySelector: state.citySelector });
const mapDispatchToProps = dispatch => ({
  handleSetCitySelectorChange(event) {
    dispatch(setCitySelector(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
