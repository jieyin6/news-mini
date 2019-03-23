<template>
    <div class="my-container">
        <auth />
        <my-info :info="userInfo" />
        <div class="channel">
            <span :class="!channel ? 'active' : ''" @click="changeChannel">通知</span>
            <span :class="channel ? 'active' : ''" @click="changeChannel">评论</span>
        </div>
        <div class="my-content" v-if="!channel">
            暂无数据
        </div>
        <ul v-else>
            <li class="comment-container" v-for="(item, index) in commentInfo" :key="index">
                <div class="other-info">
                    <image :src="item.otherPhoto" />
                    <div>
                        <h2>{{item.otherName}}</h2>
                        <p>{{item.time}}</p>
                    </div>
                </div>
                <p class="other-comment">{{item.otherComment}}</p>
                <div class="comment-content">
                    <p class="my-comment">{{userInfo.name}} : {{item.myComment}}</p>
                    <div class="news-info">
                        <image :src="item.newsImg" />
                        <p>{{item.newsTitle}}</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import user from '../../lib/user'
import auth from '../../components/common/auth'
import myInfo from '../../components/my/my_info'
import store from '../../store'
export default {
    data () {
        return {
            userInfo: {
                photo:'../../../static/images/user.png',
                name: '粉丝',
                sex: 1,  //0 男 1 女
            },
            channel: 1,
            commentInfo: [{
                otherName: '111',
                time: '2天前',
                otherPhoto: '../../../static/images/user.png',
                otherComment: '说的对呀',
                myComment: '啊啊啊啊啊啊啊啊啊啊啊',
                newsTitle: '好长的新闻标题啊好长的新闻标题啊好长的新闻标题啊好长的新闻标题啊',
                newsImg: '../../../static/images/weixin.png'
            },
            {
                otherName: '111',
                time: '2天前',
                otherPhoto: '../../../static/images/user.png',
                otherComment: '说的对呀说的对呀说的对呀说的对呀说的对呀说的对呀说的对呀说的对呀说的对呀',
                myComment: '啊啊啊啊啊啊啊啊啊啊啊',
                newsTitle: '好长的新闻标题啊好长的新闻标题啊好长的新闻标题啊好长的新闻标题啊',
                newsImg: '../../../static/images/weixin.png'
            }]
        }
    },
    components: {
        auth, myInfo
    },
    methods: {
        ...mapMutations(['toggleAuth']),
        changeChannel() {
            this.channel = this.channel ? 0 : 1
        }
    },
    onLoad() {
        //if(!user.isLogin()) return this.toggleAuth()
    }
}
</script>

<style scoped>
.my-container {
    background-color: #f7f7f7;
}
.channel {
    width: 100%;
    height: 94rpx;
    line-height: 94rpx;
    display: flex;
    justify-content: center;
    font-size: 28rpx;
    margin-bottom: 10rpx;
    background-color: #fff;
}
.channel span:last-of-type {
    display: inline-block;
    margin-left: 110rpx;
}
.active {
    border-bottom: 7rpx solid #3398ff;
}
.my-content {
    width: 100%;
    height: 200rpx;
    background-color: #fff;
}
.comment-container {
    padding: 36rpx 24rpx 29rpx 24rpx;
    background-color: #fff;
    border-bottom: 1rpx solid #f7f7f7;
}
.other-info {
    overflow: hidden;
}
.other-info image {
    width: 70rpx;
    height: 70rpx;
    border-radius: 50%;
    float: left;
}
.other-info div {
    float: left;
    margin-left: 15rpx;
}
.other-info div h2 {
    margin-top: 10rpx;
    margin-bottom: 18rpx;
    line-height: 1;
    font-size: 24rpx;
}
.other-info div p {
    line-height: 1;
    font-size: 22rpx;
    color: #868686;
}
.other-comment {
    margin-top: 20rpx;
    margin-bottom: 10rpx;
    font-size: 26rpx;
    line-height: 48rpx;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}
.comment-content {
    padding: 26rpx 38rpx 22rpx 18rpx;
    background-color: #f5f5f5;
}
.my-comment {
    margin-bottom: 26rpx;
    font-size: 26rpx;
    line-height: 48rpx;
    color: #b7b6b6;
}
.news-info {
    border-top: 2rpx solid #b7b6b6;
    padding-top: 12rpx;
    overflow: hidden;
}
.news-info image {
    float: left;
    width: 175rpx;
    height: 98rpx;
    margin-right: 20rpx;
}
.news-info p {
    font-size: 26rpx;
    line-height: 48rpx;
    color: #b7b6b6;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}
</style>
