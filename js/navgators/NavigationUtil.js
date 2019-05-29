export default class NavigationUtil {
  
  /**
   * 转跳到指定页面
   * @param params 要传递的参数
   * @param page   要转跳的页面名称 
   * @static
   * @memberof NavigationUtil
   */
  static goPage(params, page) {
    const { navigation } = params
    if (!navigation) {
      console.log('navigation can not be null')
    }
    console.log(navigation.navigate, 'navigation')
    navigation.navigate(
      page,
      {...params}
    )
  }

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