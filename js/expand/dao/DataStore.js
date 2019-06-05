import { AsyncStorage } from 'react-native'

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
  fetchData(url) {
    return new Promise( (resolve, reject) => {
      this.fetchLocalData(url)
        .then(data => {
          let bool = DataStore.checkTimestampValid(data.timestamp)
          if (data && bool) {
            resolve(data)
          } else {
            this.fetchNetData(url)
              .then(response => {
                resolve(this._wrapData(response))
              })
              .catch(err => {
                reject(err)
              })
          }
        })
        .catch( err => {
          this.fetchNetData(url)
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
  fetchNetData(url) {
    return new Promise( (resolve, reject) => {
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