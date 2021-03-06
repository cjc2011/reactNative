import Types from '../../action/types'

const defaultState = {}

export default function(state = defaultState, action) {
  switch (action.type) {
    case Types.POPULAR_LOAD_MORE_SUCCESS: 
      // 上拉加载成功
      return {
        ...state,
        [action.storeName]: {
          ...state[action.storeName],
          projectModes: action.projectModes,
          isLoading: false,
          hideLoadingMore: false,
          pageIndex: action.pageIndex
        }
      }
    case Types.POPULAR_LOAD_MORE_FAIL: 
      // 上拉加载失败
      return {
        ...state,
        [action.storeName]: {
          ...state[action.storeName],
          hideLoadingMore: true,
          pageIndex: action.pageIndex
        }
      }  
    case Types.POPULAR_REFRESH_SUCCESS:
       // 下拉刷新成功
      return {
        ...state,
        [action.storeName]: {
          ...state[action.storeName],
          projectModes: action.projectModes,
          items: action.items,
          isLoading: false,
          hideLoadingMore: false,
          pageIndex: action.pageIndex
        }
      }
    case Types.POPULAR_REFRESH:
      // 下拉刷新
      return {
        ...state,
        [action.storeName]: {
          ...state[action.storeName],
          isLoading: false,
          hideLoadingMore: true
        }
      }
    case Types.POPULAR_REFRESH_FAIL:
       // 下拉刷新失败
      return {
        ...state,
        [action.storeName]: {
          ...state[action.storeName],
          isLoading: false
        }
      }
    default: 
      return state
  }
}