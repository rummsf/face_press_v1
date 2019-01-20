import React, { Component } from "react";
import { connect } from "react-redux";
import WriterList from "../components/writerList";
import WriterDetails from "../components/writerDetails";
import * as actions from "../actions/writerActions";

class WriterContainer extends Component {
  componentDidMount() {
    this.props.fetchWriters();
  }

  render() {
    console.log("props: ", this.props);
    return (
      <div className="row">
        <div className="six wide column">
          <WriterList writers={this.props.writers} />
        </div>
        <div className="ten wide column">
          {this.props.activeWriter ? (
            <WriterDetails writer={this.props.activeWriter} />
          ) : (
            <h3>View Details</h3>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  writers: state.writers.filter(writer =>
    writer.title.toLowerCase().includes(state.filter)
  ),
  activeWriter: state.writers.find(
    writer => writer.id === state.activeWriterId
  ),
  filter: state.filter
});

export default connect(
  mapStateToProps,
  actions
)(WriterContainer);
