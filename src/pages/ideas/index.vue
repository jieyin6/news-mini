<template>
    <div class="user-container">
        <div class="user-box" v-for="(user, index) in userList" :key="index">
            <image class="user-photo" :src="user.userPhoto" />
            <div class="user-info">
                <h2>{{user.userName}}</h2>
                <p class="user-words">{{user.userWords}}</p>
                <image class="user-img" mode="widthFix" v-if="user.userImg" :src="user.userImg" />
                <p class="user-bottom" :style="user.userImg ? 'margin-top:22rpx': 'margin-top:30rpx'">
                    <span class="browse-num">{{user.browseNum}}次查看</span>
                    <span class="liked-num like" @click="likeEvent(user, index)">{{user.likedNum}}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            userList: [{
                userName: '约翰塞纳',
                userWords: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                userPhoto: '../../../static/images/user.png',
                userImg: '../../../static/images/user.png',
                browseNum: 1000,
                likedNum: 35
            },
            {
                userName: '约翰塞纳',
                userWords: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                userPhoto: '../../../static/images/user.png',
                userImg: '',
                browseNum: 1000,
                likedNum: 35
            },
            {
                userName: '约翰塞纳',
                userWords: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                userPhoto: '../../../static/images/user.png',
                userImg: '',
                browseNum: 1000,
                likedNum: 35
            },
            {
                userName: '约翰塞纳',
                userWords: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                userPhoto: '../../../static/images/user.png',
                userImg: '../../../static/images/user.png',
                browseNum: 1000,
                likedNum: 35
            },
            {
                userName: '约翰塞纳',
                userWords: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                userPhoto: '../../../static/images/user.png',
                userImg: '',
                browseNum: 1000,
                likedNum: 35
            },
            {
                userName: '约翰塞纳',
                userWords: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                userPhoto: '../../../static/images/user.png',
                userImg: '../../../static/images/user.png',
                browseNum: 1000,
                likedNum: 35
            }]
        }
    },
    methods: {
        likeEvent () {

        }
    },
    onPullDownRefresh() {
        wx.stopPullDownRefresh();
        //this.pullNewData();
    },
}
</script>

<style scoped>
.user-container {
    background-color: #f7f7f7
}
.user-box {
    padding: 24rpx 48rpx 28rpx 20rpx;
    overflow: hidden;
    background-color: #fff;
    margin-bottom: 10rpx;
}
.user-photo {
    float: left;
    width: 100rpx;
    height: 100rpx;
}
.user-info {
    float: left;
    max-width: 567rpx;
    margin-left: 15rpx;
}
.user-info h2 {
    line-height: 1;
    font-size: 30rpx;
    color: #000;
    margin-bottom: 20rpx;
}
.user-words {
    font-size: 30rpx;
    line-height: 44rpx;
    color: #050505;
    margin-bottom: 20rpx;
},
.user-img {
    width: 100%;
    border-radius: 20rpx;
    vertical-align: bottom;
}
.user-bottom {
    display: flex;
    justify-content: space-between;
    font-size: 22rpx;
    color: #050505;
    line-height: 30rpx;
}
.liked-num {
    display: inline-block;
    box-sizing: border-box;
    width: 90rpx;
    padding-left:46rpx; 
    background-size: 32rpx 30rpx;
    background-repeat: no-repeat;
}
.like {
    background-image: url('../../../static/images/others/ts_xiin_black.png')
}
.liked {
    background-image: url('../../../static/images/others/ts_xin_red.png')
}
</style>
