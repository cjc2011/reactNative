import Types from '../types.js'
import { handleData } from '../ActionUtile.js'
import DataStore, {FLAG_STORAGE}  from '../../expand/dao/DataStore.js'

export function onRefreshTrending(storeName, url, pageSize) {
  return dispatch => {
    dispatch({
      type: Types.TRENDING_REFRESH,
      storeName: storeName
    })
    let dataStore = new DataStore()
    dataStore.fetchData(url, FLAG_STORAGE.flag_trending)
      .then( data => {
        console.log(data, 'onRefreshTrending data data')
        handleData(Types.TRENDING_REFRESH_SUCCESS, dispatch, storeName, data, pageSize)
      })
      .catch(error => {
        dispatch({
          type: Types.TRENDING_REFRESH_FAIL,
          storeName,
          error
        })
      })
  }
}

export function onLoadMoreTrending(storeName, pageIndex, pageSize, dataArray = [], callBack) {
  return dispatch => {
    setTimeout( () => {
      if ((pageIndex-1)*pageSize >= dataArray.length) {
        if (typeof callBack === 'function') {
          callBack('no more')
        }
        dispatch({
          type: Types.TRENDING_LOAD_MORE_FAIL,
          error: 'no more',
          storeName: storeName,
          pageIndex: --pageIndex,
          projectModes: dataArray
        })
      } else {
        let max = pageSize * pageIndex > dataArray.length ? dataArray.length : pageSize * pageIndex;
        dispatch({
          type: Types.TRENDING_LOAD_MORE_SUCCESS,
          storeName,
          pageIndex,
          projectModes: dataArray.slice(0, max)
        })
      }
    }, 500)
  }
}