import React from "react";
import { shape, string } from "prop-types";
import Header from "./Header";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
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

const ShowCard = props => (
  <Wrapper>
    <Link
      onClick={props.handleSetDetailsPageChange}
      value="123"
      to={`details/${props.ID}`}
    >
      <Image
        alt={`${props.manufacturer}actual picture`}
        src={`../../public/img/${props.poster}`}
      />
    </Link>
    <div>
      <h3>{props.manufacturer.toUpperCase()}</h3>
      <h4>{props.model}</h4>
      <p>{props.body}</p>
    </div>
  </Wrapper>
);
const mapStateToProps = state => ({ detailsPage: state.detailsPage });
const mapDispatchToProps = dispatch => ({
  handleSetDetailsPageChange(event) {
    dispatch(setDetailsPage(event.target.to));
    console.log(event.target.value);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowCard);
