import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

const BookSelector = ({ updateFilter, filterOn }) => {
  return (
    <div className="row">
      <div className="ui menu">
        <div
          className={`${filterOn ? "" : "active"} item`}
          onClick={() => updateFilter("")}
        >
          All
        </div>
        <div
          className={`${filterOn ? "active" : ""} item`}
          onClick={() => updateFilter("selected books")}
        >
          Search by Book
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  filterOn: state.filter !== ""
});

export default connect(
  mapStateToProps,
  actions
)(BookSelector);
