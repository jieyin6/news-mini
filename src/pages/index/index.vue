<template>
	<div>
		<div class="news-container" v-for="(item, index) in newsList" :key="index">
			<h2>{{item.title}}</h2>
			<div>
				<template v-if="item.image.length < 3">
					<div class="news-content">{{item.content}}</div>
					<image :src="item.image[0]"/>
				</template>
				<template v-else>
					<div class="news-content">{{item.content}}</div>
					<div class="img-container">
						<div v-for="(img, imgIndex) in item.image" :key="imgIndex">
							<image v-if="imgIndex < 3" :src="item.image" />
						</div>
					</div>
				</template>
			</div>
			<div class="news-item">
				<p>91</p>
				<p>好友</p>
				<p>
					<image src="../../../static/images/circle.png" />
					海报</p>
			</div>
		</div>
    </div>
</template>

<script>

export default {
	data () {
		return {
			newsList: [
				{
					title: '我是题目',
					content: '我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容',
					image:[
						'https://img-ali.xiaohongchun.com.cn/admin/15529651649025130996.png',
						'https://img-ali.xiaohongchun.com.cn/admin/15529651649025130996.png',
						'https://img-ali.xiaohongchun.com.cn/admin/15529651649025130996.png',
						'https://img-ali.xiaohongchun.com.cn/admin/15529651649025130996.png'
					]
				},
				{
					title: '我是题目我是题目我是题目我是题目我是题目我是题目我是题目我是题目',
					content: '我是内容',
					image:[
						'https://img-ali.xiaohongchun.com.cn/admin/15529651649025130996.png',
						'https://img-ali.xiaohongchun.com.cn/admin/15529651649025130996.png',
						'https://img-ali.xiaohongchun.com.cn/admin/15529651649025130996.png',
						'https://img-ali.xiaohongchun.com.cn/admin/15529651649025130996.png'
					]
				},
				{
					title: '我是题目',
					content: '我是内容',
					image:[
						'https://img-ali.xiaohongchun.com.cn/admin/15529651649025130996.png',
						'https://img-ali.xiaohongchun.com.cn/admin/15529651649025130996.png',
						'https://img-ali.xiaohongchun.com.cn/admin/15529651649025130996.png',
						'https://img-ali.xiaohongchun.com.cn/admin/15529651649025130996.png'
					]
				},
				{
					title: '我是题目',
					content: '我是内容',
					image:[
						'https://img-ali.xiaohongchun.com.cn/admin/15529651649025130996.png',
						'https://img-ali.xiaohongchun.com.cn/admin/15529651649025130996.png',
						'https://img-ali.xiaohongchun.com.cn/admin/15529651649025130996.png',
						'https://img-ali.xiaohongchun.com.cn/admin/15529651649025130996.png'
					]
				}
			]
		}
	},
	methods: {
		async getNewsList () {

		}
	},
	onLoad() {
		this.getNewsList()
	}

}
</script>

<style scoped>
.news-container {
	padding: 21rpx 21rpx 0 21rpx;
}
.news-container h2 {
	margin-bottom: 10rpx;
	max-width: 480rpx;
    max-height: 78rpx;
    line-height: 52rpx;
    font-size: 32rpx;
    font-weight: 600;
    color: #000;
	text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
	
}
.news-content {
	font-size: 24rpx;
	line-height: 38rpx;
	color: #b6b6b6;
}
image {
	height: 160rpx;
	width: 230rpx;
}
.img-container {
	margin-top: 20rpx;
	display: flex;
	justify-content: space-around;
}
.news-item {
	display: flex;
	justify-content: space-around;
	font-size: 24rpx;
}
.news-item p {
	vertical-align: middle;
}
.news-item image {
	width: 35rpx;
	height: 35rpx;
	vertical-align: middle;
}
</style>
