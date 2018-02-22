import React from "react";
import Calendar from "../Calendar";
import Header from "../Header";
import Search from "../Search";
import { Link } from "react-router-dom";
import SearchButton from "../SearchButton";
import { connect } from "react-redux";
import { setCitySelector } from "./actionCreator";

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { city: "Гродно" };
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

  render() {
    return (
      <div className="landing">
        <Header />
        <h1>Car rental</h1>
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
              <input type="submit" value="Poisk" />
            </form>
          </div>
          <Calendar />
          <button type="button" className="btn btn-primary">
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
