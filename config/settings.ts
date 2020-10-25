/**
 * アプリ全般の設定。
 */
export default class Settings {
  /**
   * アプリタイトル。
   */
  public static appTitle = 'Steam Api APP'

  /**
   * BFF経由でSteamAPIへGETパラメータを送付する際、第二引数以降に「&」の代わりに付与する文字。
   * ※「&」だとBFF側のRequestParameterとして解釈されてしまうので、これを防ぐため。
   */
  public static getRequestParameterReplaceStr = '*'
}