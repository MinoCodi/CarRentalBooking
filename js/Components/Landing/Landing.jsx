import React from "react";
import Calendar from "../Calendar";
import Header from "../Header";
import Search from "../Search";
import { Link } from "react-router-dom";
import SearchButton from "../SearchButton";
import { connect } from "react-redux";
import { setCitySelector } from "./actionCreator";

class Landing extends React.Component {
  onChange = () => {
    const select = document.getElementById("selectId");
    const value = select.options[select.selectedIndex].value;
    //const text = select.options[select.selectedIndex].value;
    //alert(`Текст: ${text}`);
    //alert(this.props.citySelect);
    return value;
  };

  render() {
    return (
      <div className="landing">
        <Header />
        <h1>Car rental</h1>
        <div>
          <div>
            Выберите город:
            <select
              id="selectId"
              onChange={this.props.handleSetCitySelectorChange}
              value={this.props.citySelector}
            >
              <option value="1">Минск</option>
              <option value="2">Борисов</option>
              <option value="3">Гродно</option>
              <option value="4">Витебск</option>
            </select>
          </div>
          <Calendar />
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
