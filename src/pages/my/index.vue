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
            channel: 0
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
</style>
