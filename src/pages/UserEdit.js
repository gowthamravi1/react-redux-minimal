import React from 'react'
import { connect } from 'react-redux'
import { PageHeader, Form, FormGroup, Col, Button,
   FormControl, HelpBlock } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form';
import { back } from 'react-router-redux';


class UserEdit extends React.Component {

  form_type;
  constructor(props) {
    super(props);
    //bind this to event
    this.form_type = (props.initialValue.id > 0 ) ? 'edit' : 'add';

    this.formSubmit= this.formSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <PageHeader>{ 'edit' === this.form_type ? 'User Edit' : 'User Add' }</PageHeader>
        <Form horizontal onSubmit={this.props.handleSubmit(this.formSubmit)}>

          <Field name="username" component={UserEdit.renderUsername} />
          <Field name="job" component={UserEdit.renderJob} />
          <FormGroup>
            <Col smOffset={2}>
              <Button type="submit" disabled={this.props.invalid || this.props.submitting}>save</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }

  static renderUsername(props) {
    console.log(props)
    return(
      <FormGroup validationState={!props.meta.touched ? null : (props.meta.error ? 'error' : "success")}>
        <Col sm={2}></Col>
        <Col sm={8}>
          <FormControl {...props.input} id="username" type="text"
            placeholder="Username" />
          <FormControl.Feedback />
          <HelpBlock>{props.meta.touched && props.meta.error ? props.meta.error : null}</HelpBlock>
        </Col>
      </FormGroup>
    )
  }

  static renderJob(props) {
    return(
      <FormGroup>
        <Col sm={2}></Col>
        <Col sm={8}>
          <FormControl {...props.input} id="job" type="text"
            placeholder="Job" />
        </Col>
      </FormGroup>
    )
  }

  // form submit
  formSubmit(values)
  {

    // add/edit the user in API
    const upper_form_type = this.form_type.charAt(0).toUpperCase() +
      this.form_type.slice(1);

    // send to saga for API add/edit
    this.props.dispatch({
      type: 'user' + upper_form_type,
      id: values.id,
      username: values.username,
      job: values.job
    })

    this.props.dispatch({
      type: 'user.' + this.form_type,
      id: values.id,
      username: values.username,
      job: values.job
    });

    //redirect to home or previos page
    this.props.dispatch(back());
  }


}

// decorate the form Component
UserEdit = reduxForm({
  form: 'user-edit',
  validate: function(values) {
    const errors = {};
    if (!values.username) {
      errors.username = "username required";
    }
    return errors;
  }
})(UserEdit)

// export the connected class
function mapStateToProps(state, own_props) {
  let form_data = {
    id: 0,
    username: "",
    job: ""
  }
  for(const user of state.users.list) {
    if (user.id === Number(own_props.match.params.id)) {
      form_data = user;
      break;
    }
  }
  return{
    initialValue: form_data,
  }
}

export default connect(mapStateToProps, null) (UserEdit);
