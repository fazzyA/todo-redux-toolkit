import {put, takeEvery} from 'redux-saga/effects'
export function* hello(){
    console.log('im in saga')
}
export function* fetchApi(){
 const json = yield fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    yield put({type:'SUCCESS'})
}

export function* watcher(){
    yield takeEvery('GET_API', fetchApi)
}