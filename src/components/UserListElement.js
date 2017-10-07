import React from 'react'
import { Button, Glyphicon } from 'react-bootstrap'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

class UserListElement extends React.Component {

    constructor(props) {
      super(props);
      //bind tiis to event
      this.modalDeleteShow = this.modalDeleteShow.bind(this);

    }

    render() {
      const user = this.props.user;
      return(
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.job}</td>
            <td>
               <a href={'/user-edit/' + user.id}>
                  <Button bsSize="xsmall">
                    Edit <Glyphicon glyph="edit"/>
                  </Button>
               </a>

            </td>
            <td>
              <Button bsSize="xsmall" data-id={user.id} data-username={user.username}
                onClick={this.modalDeleteShow} >
                Delete <Glyphicon glyph="remove-circle"/>
              </Button>
            </td>
          </tr>

      );
    }

    modalDeleteShow(event) {

      const username = event.target.dataset.username
      const user_id = event.target.dataset.id

      this.props.dispatch({
        type: 'user.modalDeleteShow',
        id: user_id,
        username: username
      });
    }
}

export default connect() (UserListElement);


// make suer all props are required
UserListElement.propTypes = {
  user: PropTypes.object.isRequired,
};
