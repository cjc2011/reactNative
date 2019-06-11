import AsyncStorage from '@react-native-community/async-storage';
import Trending from 'GitHubTrending'
export const FLAG_STORAGE = {flag_popular: 'popular', flag_trending: 'trending'}

export default class DataStore {
  // 静态方法 不会被实例继承 只可以通过类调用
  static checkTimestampValid(timestamp) {
    const currentDate = new Date()
    const targetDate = new Date()
    targetDate.setTime(timestamp)
    if (
      currentDate.getMonth() !== targetDate.getMonth() || 
      currentDate.getDate() !== targetDate.getDate() ||
      currentDate.getHours() - targetDate.getHours() > 4
    ) {
      return false
    }
    return true
  }

  /**
   *
   *
   * @param {*} url
   * @memberof DataStore
   */
  fetchData(url, flag) {
    return new Promise( (resolve, reject) => {
      this.fetchLocalData(url)
        .then(data => {
          let bool = DataStore.checkTimestampValid(data.timestamp)
          if (data && bool) {
            resolve(data)
          } else {
            this.fetchNetData(url, flag)
              .then(response => {
                resolve(this._wrapData(response))
              })
              .catch(err => {
                reject(err)
              })
          }
        })
        .catch( err => {
          this.fetchNetData(url, flag)
            .then(res => {
              resolve(this._wrapData(res))
            })
            .catch(error => {
              reject(error)
            })
        })
    })
  }

  /**
   *
   * @param {*} url
   * @returns Promise
   * @memberof DataStore
   */
  fetchLocalData(url) {
    return new Promise( (resolve, reject) => {
      AsyncStorage.getItem(url, (error, result) => {
        if (!error) {
          try {
            resolve(JSON.parse(result))
          } catch (e) {
            reject(e)
            console.log(e)
          }
        }
      })
    })
  }
  
  /**
   *
   *
   * @param {*} url
   * @returns Promise
   * @memberof DataStore
   */
  fetchNetData(url,flag) {
    return new Promise( (resolve, reject) => {
      if (flag !== FLAG_STORAGE.flag_trending) {
        fetch(url)
          .then( response => {
            if (response.ok) {
              return response.json()
            }
            throw new Error('Network response was not ok')
          })
          .then( responseData => {
            this.saveData(url, responseData)
            resolve(responseData)
          })
          .catch( error => {
            reject(error)
          })
      } else {
        new Trending().fetchTrending(url)
          .then(response => {
            if (!response) {
              throw new Error('response is null')
            }
            this.saveData(url, response)
            resolve(response)
          })
          .catch( error => {
            reject(error)
          })
      }
    })
  }

  saveData(url, data, callback) {
    if (!data || !url) return 
    AsyncStorage.setItem(url, JSON.stringify(this._wrapData(data), callback))
  }

  _wrapData(data) {
    return {data: data, timestamp: new Date().getTime()}
  }
}