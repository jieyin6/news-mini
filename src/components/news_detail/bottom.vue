<template>
    <div class="news-bottom">
        <div class="bottom-left" @click="commentEvent">
            <image src="../../../static/images/comment.png" />
            评论
        </div>
        <div class="bottom-right">
            <div>
                <image src="../../../static/images/color_circle.png" />
            </div>
            <div>
                <image src="../../../static/images/color_weixin.png" />
            </div>
            <div>
                <image src="../../../static/images/info.png" />
                12
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        commentEvent () {
            this.$emit('commentEvent')
        }
    }

}
</script>

<style scoped>
.news-bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 36rpx 36rpx 0 40rpx; 
    border-top: 1rpx solid #f7f7f7;
    height: 100rpx;
    z-index: 99;
    background-color: #fff;
}
image {
    width: 35rpx;
    height: 35rpx;
}
.bottom-left {
    float: left;
}
.bottom-right {
    float: right;
}
.bottom-right div {
    float: right;
    margin-left: 48rpx;
}

</style>
