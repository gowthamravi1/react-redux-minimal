import { call, put } from 'redux-saga/effects';

import ApiUsers from '../api/users';

export function* userFetchList(action) {

  // call the API got get the list
  const users = yield call(ApiUsers.getList);

  yield put({
    type: 'user.fetchListSuccess',
    users: users,
  })
}

export function* userAdd(action) {
     yield call(ApiUsers.add, action);
}

export function* userEdit(action) {
     yield call(ApiUsers.edit, action);
}

export function* userDelete(action) {
     yield call(ApiUsers.delete, action);
}
