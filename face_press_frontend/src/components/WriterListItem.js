import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

const WriterListItem = ({ writer, selectWriter }) => {
  return (
    <div onClick={() => selectWriter(writer.id)} className="ui item">
      <span style={{ cursor: "pointer" }}>{writer.name}</span>
    </div>
  );
};

export default connect(
  null,
  actions
)(WriterListItem);
