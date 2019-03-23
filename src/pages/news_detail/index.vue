<template>
    <div class="detail-container">
        <auth />
        <h2 class="detail-title">{{newsDetail.title}}</h2>
        <p class="detail-time">{{newsDetail.time}}</p>
        <div>这里是一篇文章</div>
        <next-news :info="newsDetail.nextNews"/>
        <bottom @commentEvent="commentEvent" />
        <div class="detail-comment" id="comment">
            <h2>全部评论</h2>
            <div class="comment-container" v-for="(item, index1) in newsDetail.comments" :key="index1">
                <image :src="item.userImg" />
                <div class="comment-right">
                    <h3>{{item.userName}}</h3>
                    <p class="right-comment">{{item.userComment}}</p>
                    <p class="right-time">{{item.publishTime}}<span style="display:inline-block;margin-left:34rpx;color:#0998ed">回复</span></p>
                    <ul class="right-others">
                        <li v-for="(other,index2) in item.otherCommentList" :key="index2">
                            {{other.otherName}} : {{other.otherComment}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import user from '../../lib/user'
import auth from '../../components/common/auth'
import store from '../../store'
import bottom from '../../components/news_detail/bottom'
import nextNews from '../../components/news_detail/next_news'
import { setTimeout } from 'timers';
export default {
    components: {
        bottom, nextNews, auth
    },
    data () {
        return {
            newsDetail: {
                title: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                time: '2014-12-15 07:35',
                newsDetail: '这里不确定格式，待商量',
                nextNews: {
                    title: '',
                    content: '',
                    img: ''
                },
                comments:[
                    {
                        userImg: '../../../static/images/user.png',
                        userName: '昵称abc',
                        userComment: '春节期间，全场爆年货价格直降，2月4日－2月10日春节期间，天猫超市照常发货，详情请戳底部链接。',
                        publishTime: '5小时前',
                        otherCommentList: [
                            {
                                otherName: '沙漠',
                                otherComment: '啊啊啊啊啊啊啊啊啊啊啊'
                            },
                            {
                                otherName: '荒野',
                                otherComment: '啊啊啊啊啊啊啊啊啊啊啊'
                            }
                        ]
                    },
                    {
                        userImg: '../../../static/images/user.png',
                        userName: '昵称abc',
                        userComment: '春节期间，全场爆年货价格直降，2月4日－2月10日春节期间，天猫超市照常发货，详情请戳底部链接。',
                        publishTime: '5小时前',
                        otherCommentList: [
                            {
                                otherName: '沙漠',
                                otherComment: '啊啊啊啊啊啊啊啊啊啊啊'
                            },
                            {
                                otherName: '荒野',
                                otherComment: '啊啊啊啊啊啊啊啊啊啊啊'
                            }
                        ]
                    }
                ]
            },
            toComment: false
        }
    },
    methods: {
        ...mapMutations(['toggleAuth']),
        commentEvent () {
            if(!user.isLogin()) return this.toggleAuth()
        }
        
    },
    mounted () {
        if(this.toComment) {
            //setTimeout(() => {
                const query = wx.createSelectorQuery()
                query.selectViewport().scrollOffset()
                query.select('#comment').boundingClientRect()
                query.exec(res => wx.pageScrollTo({
                    scrollTop: res[1].top,
                    duration: 300
                }))
            //}, 1500)
        }
    },
    onLoad (options) {
        this.toComment = options.toComment
    }
}
</script>

<style scoped>
.detail-container {
    padding-bottom: 136rpx;
}
.detail-title {
    margin-top: 10rpx;
    padding: 0 30rpx;
    font-size: 40rpx;
    line-height: 60rpx;
}
.detail-time {
    margin-top: 20rpx;
    padding-left: 30rpx;
    font-size: 24rpx;
    color: #d7d7d7;
}
.detail-comment {
    padding: 70rpx 0 0 30rpx;
    overflow: hidden;
}
.detail-comment h2 {
    line-height: 1;
    font-size: 26rpx;
}
.comment-container {
    margin-top: 3rpx;
    padding:24rpx 0 27rpx 0;
    display: flex;
    justify-content: space-around;
    border-bottom: 2rpx solid #f2f2f2;
}
.comment-container image {
    width: 60rpx;
    height: 60rpx;
    border-radius: 50%;
}
.comment-container .comment-right {
    box-sizing: border-box;
    max-width: 616rpx;
    margin-left: 24rpx;
    padding-top: 24rpx;
    padding-right: 30rpx;
}
.comment-right h3 {
    line-height: 1;
    font-size: 24rpx;
}
.comment-right .right-comment {
    margin-top: 24rpx;
    font-size: 30rpx;
    line-height: 48rpx;
}
.comment-right .right-time {
    margin-top: 20rpx;
    line-height: 1;
    font-size: 22rpx;
    color: #b4b2b2;
}
.comment-right .right-others {
    box-sizing: border-box;
    margin-top: 30rpx;
    max-width: 616rpx;
    padding: 20rpx 24rpx;
    background-color: #f7f7f7;
}
.right-others li {
    font-size: 30rpx;
    line-height: 48rpx;
}
</style>
