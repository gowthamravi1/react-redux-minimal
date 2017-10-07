export default function users(state = {}, action) {

    let new_state;
    switch (action.type) {
      case 'user.modalDeleteShow':
        new_state = JSON.parse(JSON.stringify(state))
        new_state.modal = new_state.modal ? new_state.modal : {};
        new_state.modal.list_delete = {
          show: true,
          id: action.id,
          username: action.username,
        }
        return new_state;
      case 'user.modalDeleteHide':
        new_state = JSON.parse(JSON.stringify(state))
        new_state.modal.list_delete = {
          show: false,
          id: 0,
          username: '',
        }
        return new_state;
      default:
        return state;
    }
}
