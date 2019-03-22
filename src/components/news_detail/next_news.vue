<template>
    <div class="next-container">
        <h2>下一篇</h2>
        <h3>标题</h3>
        <div class="next-content">
            <p>我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容</p>
            <image />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        info: {
            type: Object,
            default: {}
        }
    }

}
</script>

<style scoped>
.next-container {
    padding: 0 35rpx 0 30rpx;
}
.next-container h2 {
    border-left: 12rpx solid #2861bb;
    font-size: 28rpx;
    line-height: 1;
    color: #2b2b2b;
}
.next-container h3 {
    margin-top: 27rpx;
    font-size: 32rpx;
    line-height: 1;
}
.next-content {
    margin-top: 34rpx;
    overflow: hidden;
}

.next-content p{
    float: left;
    width: 414rpx;
    font-size: 24rpx;
    line-height: 36rpx;
    color: #b1b1b1;
    /* 
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    */
}
.next-content image {
    float: right;
    width: 230rpx;
    height: 160rpx;
    border-radius: 20rpx;
    background-color: #ccc;
}
</style>
