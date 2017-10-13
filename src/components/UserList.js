import React from 'react'
import UserListElement from './UserListElement'
import { connect } from 'react-redux'
import { Table, Pagination, ProgressBar } from 'react-bootstrap';
import UserDelete from './UserDelete';
import { push } from 'react-router-redux'

class UserList extends React.Component {

  constructor(props) {
    super(props);

    // when we dont have user list take from API

    if(0 === this.props.users.length) {
      this.props.dispatch({
        type: 'userFetchList'
      });
    }

    //bind tiis to event
    this.changePage = this.changePage.bind(this);
  }

  render() {

      const per_page = 10;
      const pages = Math.ceil(this.props.users.length / per_page)
      const current_page = this.props.page;
      const start_offset = ( current_page -1 ) * per_page;
      let start_count = 0;

      if(this.props.users.length) {
        return (
          <div>
            <Table bordered hover responsive striped>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Job</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                    this.props.users.map((user, index) => {
                    if(index => start_offset && start_count < per_page)   {
                      start_count++;
                      return (
                        <UserListElement key={user.id} user={user}/>
                      );
                    }
                  })
                }
              </tbody>
            </Table>

            {/* <Pagination className="users-pagination pull-right" bsSize="medium"
              maxButtons={10} filst last next prev boundryLinks
              items={pages} activepage={current_page} onSelect={this.changePage} /> */}
            <UserDelete/>
          </div>
        );
      } else {
        return(
        <ProgressBar active now={100}>

        </ProgressBar>);
      }

  }

  // change the page
  changePage(page) {
    this.props.dispatch(push('/?page=' + page));
  }
}

// export the connected class
function mapStateToProps(state) {
  return(
    {
      users: state.users.list || [],
      // page: Number(state.routing.locationBeforeTransitions.query.page) || 1
    }
  );
}

export default connect(mapStateToProps) (UserList);

// // make suer all props are required for react
// UserList.propTypes = {
//   users: React.PropTypes.object.isRequired
// }
