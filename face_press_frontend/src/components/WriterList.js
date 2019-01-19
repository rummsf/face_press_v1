import React from "react";
import WriterListItem from "./WriterListItem";

const WriterList = ({ writers }) => {
  const writerItems = writers.map(writer => (
    <WriterListItem key={writer.id} writer={writer} />
  ));
  return <div className="ui relaxed divided list scroll">{writerItems}</div>;
};

export default WriterList;
