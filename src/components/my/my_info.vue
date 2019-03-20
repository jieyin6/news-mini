<template>
    <div class="info-container">
        <image class="info-photo" :src="info.photo" />
        <div class="info-content">
            <h2>{{info.name}}</h2>
            <p>{{info.sex ? '女' : '男'}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        info: {
            type: Object,
            default: {
                name: '摔角粉丝',
                sex: 0,
                photo: ''
            }
        }
    }
}
</script>

<style scoped>
.info-container {
    padding: 24rpx 0 46rpx 22rpx;
    background-color: #fff;
    overflow: hidden;
    border-bottom: 2rpx solid #f7f7f7;
}
.info-photo {
    float: left;
    width: 110rpx;
    height: 110rpx;
    border-radius: 50%;
}
.info-content {
    float: left;
    margin-left: 30rpx;
}
.info-content h2 {
    margin-top: 22rpx;
    line-height: 1;
    font-size: 28rpx;
}
.info-content p {
    margin-top: 24rpx;
    line-height: 1;
    font-size: 22rpx;
    color: #989797;
}
</style>
