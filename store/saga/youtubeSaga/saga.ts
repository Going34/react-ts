import { takeEvery } from '@redux-saga/core/effects';
import { all, put } from '@redux-saga/core/effects';
function* getData() {
  const response = yield fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=program&key=AIzaSyBLB53Yo1AV-Vogd8aYDPksKp9Ii7uZ_Tk&maxResults=50`
  );
  const data = yield response.json();
  yield console.log('l  o   g', data);
  yield put({ type: 'SET_VIDEO_DATA', payload: data.items });
  return data.jokes;
}

export function* youtube() {
  yield all([takeEvery('CALL_FUNCTION', getData)]);
}
