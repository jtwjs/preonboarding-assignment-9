import { all, fork } from 'redux-saga/effects';

import todoSaga from './todos';

export default function* rootSaga(): Generator {
	yield all([
    fork(todoSaga),
	])
}