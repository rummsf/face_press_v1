import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

const WriterDetails = ({ writer }) => {
  return (
    <div className="ui card">
      <div className="image">
        <img src={writer.image} alt={writer.slug} />
      </div>
      <div className="content">
        <div className="header">{writer.name}</div>
        <div className="meta">{writer.date}</div>
        <div className="meta">
          {writer.dimensions.width} in. x {writer.dimensions.height} in.
        </div>
        <div className="meta">{writer.books}</div>
        <div className="description">
          <p>{writer.url}</p>
          <p>{writer.biography}</p>
        </div>
      </div>
    </div>
  );
};

export default connect(
  null,
  actions
)(WriterDetails);
