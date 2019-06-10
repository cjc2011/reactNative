import Types from '../types.js'
import DataStore from '../../expand/dao/DataStore.js'

// 获取最热数据
export function onRefreshPopular(storeName, url, pageSize) {
  return dispatch => {
    dispatch({
      type: Types.POPULAR_REFRESH,
      storeName: storeName
    })
    let dataStore = new DataStore()
    dataStore.fetchData(url)
      .then( data => {
        handleData(dispatch, storeName, data, pageSize)
      })
      .catch(error => {
        dispatch({
          type: Types.POPULAR_REFRESH_FAIL,
          storeName,
          error
        })
      })
  }
}

export function onLoadMorePopular(storeName, pageIndex, pageSize, dataArray = [], callBack) {
  return dispatch => {
    setTimeout( () => {
      if ((pageIndex-1)*pageSize >= dataArray.length) {
        if (typeof callBack === 'function') {
          callBack('no more')
        }
        dispatch({
          type: Types.POPULAR_LOAD_MORE_FAIL,
          error: 'no more',
          storeName: storeName,
          pageIndex: --pageIndex,
          projectModes: dataArray
        })
      } else {
        let max = pageSize * pageIndex > dataArray.length ? dataArray.length : pageSize * pageIndex;
        dispatch({
          type: Types.POPULAR_LOAD_MORE_SUCCESS,
          storeName,
          pageIndex,
          projectModes: dataArray.slice(0, max)
        })
      }
    }, 500)
  }
}

// 第一次要加载的数据
function handleData(dispatch, storeName, data, pageSize) {
  let fixItems = []
  if (data && data.data && data.data.items) {
    fixItems = data.data.items 
  }
  dispatch({
    type: Types.POPULAR_REFRESH_SUCCESS,
    projectModes: pageSize > fixItems.length ? fixItems : fixItems.slice(0, 10),
    storeName,
    pageIndex: 1
  })
}

