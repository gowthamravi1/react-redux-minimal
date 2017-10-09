import React from "react";
import { connect } from 'react-redux'
import { Modal, Button} from 'react-bootstrap';

class UserDelete extends React.Component {

  constructor(props) {
    super(props);
    //bind tiis to event
    this.modalDeleteHide = this.modalDeleteHide.bind(this);
    this.userDelete = this.userDelete.bind(this);
  }

  render() {
    return (
        <Modal show={this.props.modal_delete.show} >
          <Modal.Header>
            <Modal.Title>Are you sure  want to delete <strong> {this.props.modal_delete.username}</strong> </Modal.Title>
          </Modal.Header>

          <Modal.Footer>
            <Button onClick={this.modalDeleteHide}>No</Button>
            <Button bsStyle="primary" onClick={this.userDelete}>Yes</Button>
          </Modal.Footer>
        </Modal>
    )
  }

  modalDeleteHide(event) {
    this.props.dispatch({
      type: 'user.modalDeleteHide'
    })
  }

  userDelete(event) {
    this.props.dispatch({
      type: 'users.delete',
      id: this.props.modal_delete.id,
    })

    this.props.dispatch({
      type: 'user.modalDeleteHide'
    })
  }
}

function mapStateToProps(state) {
  let modal_delete;
  if (state.users.modal && state.users.modal.list_delete) {
    modal_delete = state.users.modal.list_delete
  } else {
    modal_delete = {
      show: false,
      id: 0,
      username: '',
    }
  }

  return {
    modal_delete: modal_delete,
  }
}

export default connect(mapStateToProps) (UserDelete)
