export default class NavigationUtil {
  
  /**
   *
   * 返回上一页
   * @static
   * @param {*} navigation
   * @memberof NavigationUtil
   */
  static goBack(navigation) {
    navigation.goBack()
  }
  
  /**
   *
   * 重制到home页
   * @static
   * @param {*} params
   * @memberof NavigationUtil
   */
  static resetToHomePage(params) {
    const { navigation } = params 
    navigation.navigate("Main")
  }

}