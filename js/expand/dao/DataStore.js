import { AsyncStorage } from 'react-native'

export default class DataStore {
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