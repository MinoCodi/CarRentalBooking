import React, { Component } from "react";
import { shape, string } from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import history from "react-router-dom";
import { setDetailsPage } from "../actionCreators";

const Wrapper = styled.div`
  width: 32%;
  border: 1px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
`;
const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

class ShowCard extends Component {
  goToDetails = event => {
    event.preventDefault();
    this.props.history.push(this.props.detailsPage);
  };
  render() {
    return (
      <Wrapper>
        <Image
          alt={`${this.props.manufacturer}actual picture`}
          src={`../../public/img/${this.props.poster}`}
        />
        <div>
          <h3>{this.props.manufacturer}</h3>
          <form onSubmit={this.goToDetails}>
            <input
              type="submit"
              value={`Заказать`}
              onClick={this.props.handleSetDetailsPageChange}
              name={`/details/${this.props.ID}`}
            />
          </form>
        </div>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({ detailsPage: state.detailsPage });
const mapDispatchToProps = dispatch => ({
  handleSetDetailsPageChange(event) {
    dispatch(setDetailsPage(event.target.name));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowCard);
