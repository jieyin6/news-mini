<script>
import utils from '../src/lib/utils'
import user from '../src/lib/user'
export default {
  created () {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */

    /*let logs
    if (mpvuePlatform === 'my') {
      logs = mpvue.getStorageSync({key: 'logs'}).data || []
      logs.unshift(Date.now())
      mpvue.setStorageSync({
        key: 'logs',
        data: logs
      })
    } else {
      logs = mpvue.getStorageSync('logs') || []
      logs.unshift(Date.now())
      mpvue.setStorageSync('logs', logs)
    }*/
  },
  data () {
	return {
    	globalData: {}
    }
  },
  async onLaunch(options={}) {
    console.log(getApp())
    this.globalData.sessionid = utils.uuid()
    console.log(this.globalData.sessionid)
    if(!user.isLogin()) {
      await user.login()
    }

    const DEVICEID_KEY = 'deviceid'
    let deviceid = wx.getStorageSync(DEVICEID_KEY)
    console.log(222)
    if(!deviceid) {
      deviceid = utils.deviceId()
      wx.setStorageSync(DEVICEID_KEY, deviceid)
    }
		wx.setStorageSync('sessionid', this.globalData.sessionid)
		console.log(444)
    wx.setStorageSync('scene', options.scene)

    this.globalData[DEVICEID_KEY] = deviceid

    let res = await wx.getSystemInfo()
    res = res || {}


    // 判断目前的 iPhone X 等有安全区域的机型系列
    this.globalData.model = res.model && res.model.indexOf('iPhone X') != -1
    try {
      mta.App.init({
        "appID":"500591149",
        "eventID":"500591364",
        "statPullDownFresh":true,
        "statShareApp":true,
        "statReachBottom":true,
        "lauchOpts": options
      });
    } catch(e) {
      console.log(e)
    }


  }


}
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
