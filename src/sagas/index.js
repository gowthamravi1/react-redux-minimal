import { takeLatest } from 'redux-saga';
import { fork } from 'redux-saga/effects'


import { userFetchList, userAdd, userEdit, userDelete } from './users';

export function* sagas() {
  yield [
    fork( takeLatest, 'userFetchList', userFetchList),
    fork( takeLatest, 'userAdd', userAdd),
    fork( takeLatest, 'userEdit', userEdit),
    fork( takeLatest, 'userDelete', userDelete)
  ];
}
