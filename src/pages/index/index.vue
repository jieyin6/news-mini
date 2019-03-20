<template>
	<div class="news-bg">
		<div class="news-container" v-for="(item, index) in newsList" :key="index">
			<h2>{{item.title}}</h2>
			<div class="news-box">
				<template v-if="item.image.length < 3">
					<div class="signle-news-content">{{item.content}}</div>
					<image class="single-img" :src="item.image[0]"/>
				</template>
				<template v-else>
					<div class="news-content">{{item.content}}</div>
					<div class="img-container">
						<div v-for="(img, imgIndex) in item.image" :key="imgIndex">
							<image v-if="imgIndex < 3" :src="img" />
						</div>
					</div>
				</template>
			</div>
			<div class="news-item">
				<p>{{item.commentNum || '' }}</p>
				<button class="icon-btn" open-type="share">
					<image src="../../../static/images/weixin.png" />
					好友
				</button>
				<p>
					<image src="../../../static/images/circle.png" />
					海报
				</p>
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
					image:['',''],
					commentNum: 3
				},
				{
					title: '我是题目我是题目我是题目我是题目我是题目我是题目我是题目我是题目我是题目我是题目我是题目我是题目我是题目我是题目我是题目我是题目',
					content: '我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容',
					image:['','','',''],
					commentNum: 4
				},
				{
					title: '我是题目',
					content: '我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容',
					image:['','','',''],
					commentNum: 0
				},
				{
					title: '我是题目',
					content: '我是内容',
					image:['','','',''],
					commentNum: 10
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
	},

	onShareAppMessage() {

		return {
			title: '自定义转发标题',
			path: '/pages/index',
			imageUrl: 'url',
	  	};
	}
	

}
</script>

<style src="../../style/btn.css"></style>
<style scoped>
.news-bg {
	background-color: #f7f7f7;
}
.news-container {
	padding: 21rpx 21rpx 30rpx 21rpx;
	margin-bottom: 10rpx;
	background-color: #fff;
}
.news-container h2 {
	margin-bottom: 10rpx;
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
.news-content, .signle-news-content {
	font-size: 24rpx;
	line-height: 38rpx;
	color: #b6b6b6;
}
.news-box {
	overflow: hidden;
}
.news-box image {
	height: 160rpx;
	width: 230rpx;
	background-color: #b6b6b6;
	border-radius: 10rpx;
	vertical-align: bottom;
}
.img-container {
	margin-top: 20rpx;
	display: flex;
	justify-content: space-around;
}
.news-item {
	margin-top: 28rpx;
	display: flex;
	justify-content: space-around;
}
.news-item p{
	font-size: 24rpx;
	vertical-align: middle;
}
.news-item button {
	font-size: 24rpx;
}
.news-item image {
	width: 35rpx;
	height: 35rpx;
	vertical-align: middle;
}
.signle-news-content {
	float: left;
	width: 414rpx;
}
.single-img {
	float: right;
}
</style>
