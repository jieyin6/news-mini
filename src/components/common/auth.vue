<template>
<div v-if="showAuth" @click="hide" data-id="modal-mask" class="mask">
    <div class="modal">
        <h2>请登录后进行相关操作</h2>

        <div class="bottom">
            <div class="cancel-btn" data-id="modal-mask" @click="hide">取消</div>
            <button data-name="auth" class="auth-button" open-type="getUserInfo" lang="zh_CN" @getuserinfo="register">
            确定
            </button>
        </div>
        
    </div>
</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import user from '@/lib/user'

export default {
    computed: {
        ...mapState(['showAuth']),
    },

    methods: {
        ...mapMutations(['toggleAuth']),
        hide(e) {
            if(e.target.dataset.id == 'modal-mask') {
                this.toggleAuth()
            }
        },

        async register(e) {
            if(e.mp.detail.errMsg !== 'getUserInfo:ok') {
                return
            }

            const resp = await this.wx.login()

            await user.userInfoLogin(resp.code, e.mp.detail)

            this.toggleAuth()

            this.$emit('authed')
        }
    }
}
</script>

<style scoped>
.mask {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .5);
    z-index: 20;
}
.modal {
    position: absolute;
    width: 80%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding-top: 2em;
    font-size: 28rpx;
    color: #a3a3a3;
    text-align: center;
    border-radius: 10rpx;
}
.modal .bottom {
    margin-top: 2em;
    display: flex;
    height: 90rpx;
    border-top: 1rpx solid rgba(0, 0, 0, .5)
}
h2 {
    font-size: 36rpx;
    color: #000;
}
.cancel-btn {
    width: 50%;
    line-height: 90rpx;
    font-size: 36rpx;
    color: #000;
    border-right: 1rpx solid rgba(0, 0, 0, .5);
}
.auth-button {
    width: 50%;
    line-height: 90rpx;
    display: inline-block;
    padding: 0;
    background-color: transparent;
    margin: 0;
    color: blue
}
button::after {
    width: 0;
    height: 0;
    border: 0;
    background: none;
}
</style>