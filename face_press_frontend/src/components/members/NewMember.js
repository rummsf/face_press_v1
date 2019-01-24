import React from "react";
import { Field, reduxForm } from "redux-form";

class NewMember extends React.Component {
  renderInput({ input, label }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form"
      >
        <Field
          name="Name"
          component={this.renderInput}
          label="What is your name?"
        />
        <Field
          name="E-mail"
          component={this.renderInput}
          label="What is your email address?"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "newMember"
})(NewMember);
