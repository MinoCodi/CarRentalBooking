import React from "react";
import Calendar from "../Calendar";
import Header from "../Header";
import Search from "../Search/Search";
import { Link } from "react-router-dom";
import SearchButton from "../SearchButton";
import { connect } from "react-redux";
import { setCitySelector } from "./actionCreator";

import { DatePicker } from "antd";
import moment from "moment";
const { MonthPicker, RangePicker } = DatePicker;

import { Button } from "antd";

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = { city: "Гродно" };
    this.currentDate;
  }
  onChange = () => {
    const select = document.getElementById("selectId");
    const value = select.options[select.selectedIndex].value;
    //const text = select.options[select.selectedIndex].value;
    //alert(`Текст: ${text}`);
    //alert(this.props.citySelect);
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
    const dateFormat = "DD/MM/YYYY";

    return (
      <div className="landing">
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
          <RangePicker
            defaultValue={[
              moment(this.currentDate, dateFormat),
              moment(this.currentDate, dateFormat)
            ]}
            format={dateFormat}
            onChange={this.onChange}
          />
          <Button type="primary">
            <Link to="/search">ПОИСК</Link>
          </Button>
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
