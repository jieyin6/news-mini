<template>
	<div class="news-bg">
		<div class="news-container"
			v-for="(item, index) in newsList"
			:key="index"
			@click="toNewsDetail(item.id)">
			<h2 :style="item.read ? 'color: #ccc' : ''">{{item.title}}</h2>
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
				<p @click.stop="toDatailComment(item.id)">
					<image src="../../../static/images/index/sy_pl_black.png" />
					{{item.commentNum || '' }}
				</p>
				<button class="icon-btn" open-type="share" @click.stop>
					<image src="../../../static/images/index/sy_hy.png" />
					好友
				</button>
				<p class="icon-btn" @click.stop  @click.stop="start">
					<image src="../../../static/images/index/sy_pyq.png" />
					海报
				</p>
			
			</div>
		</div>
		
		<poster id="poster" :config="posterConfig" @success="onPosterSuccess" @fail="onPosterFail"></poster>
		
		<div class="loading-do" v-if="doing">
      		<p class="tip">正在生成评估结果~</p>
    	</div>
    </div>
</template>

<script>
import qs from 'qs'
import PosterEvent from '../../../static/poster-canvas/poster/poster'
export default {
	data () {
		return {
			doing: false,   //生成海报loding
			newsList: [
				{
					id: 1,
					title: '我是题目',
					content: '我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是我是内容我是内容我是我是内容我是内容我是',
					image:['',''],
					commentNum: 3
				},
				{
					id: 2,
					title: '我是题目我是题目我是题目我是题目我是题目我是题目我是题目我是题目我是题目我是题目我是题目我是题目我是题目我是题目我是题目我是题目',
					content: '我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容',
					image:['','','',''],
					commentNum: 4
				},
				{
					id: 3,
					title: '我是题目',
					content: '我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容',
					image:['','','',''],
					commentNum: 0
				},
				{
					id: 4,
					title: '我是题目',
					content: '我是内容',
					image:['','','',''],
					commentNum: 10
				}
			],
			posterConfig: {},
			img: '', 
			newsRead: [],   //读过的文章
		}
	},
	methods: {
		onPosterSuccess (e) {
			this.doing = false
			console.log(111)
			let detail  = e.mp.detail;
			console.log(detail)
			wx.previewImage({
				current: detail,
				urls: [detail]
			})
		},
		onPosterFail () {},
		async getNewsList () {
			let read = qs.parse(wx.getStorageSync("news"))
			this.newsList.forEach(item => {
				read.forEach(id => {
					if(item.id == id) {
						item.read = true
					} 
				})
				
			})


		},
		toNewsDetail (id) {
			this.newsRead.push(id)
			wx.setStorageSync("news", qs.stringify(this.newsRead));
			wx.navigateTo({
				url: `/pages/news_detail/main?id=${id}`
			})
		},
		toDatailComment (id) {
			wx.navigateTo({
				url: `/pages/news_detail/main?id=${id}&toComment=true`
			})
		},
		createPoster (e) {
			console.log(e)
        	this.doing = true;
        	this.start(e.detail.userInfo);
		},
		start(userInfo) {
			this.doing = true
			console.log('111')
			//let nickName = userInfo.nickName;
			//let avatarUrl = userInfo.avatarUrl;
			/*
			let params = Object.assign({
				id: 'zjl',
				rightNum: 2,
				pj: "被联盟认定为超凡大师",
				allNum: "20"
			}, this.options);*/
			//log(params);

			this.posterConfig = {
				width: 750,
				height: 1334,
				backgroundColor: '#fff',
				debug: false,
				blocks: [
					{
						width: 500,
						height: 808,
						x: 30,
						y: 183,
						borderWidth: 2,
						borderColor: '#f0c2a0',
						borderRadius: 20,
					},
					{
						width: 634,
						height: 74,
						x: 59,
						y: 770,
						backgroundColor: '#fff',
						opacity: 0.5,
						zIndex: 100,
					},
				],
				texts: [
					{
						x: 113,
						y: 61,
						baseLine: 'middle',
						text: `aa`,
						fontSize: 32,
						color: '#8d8d8d',
					},
					{
						x: 30,
						y: 113,
						baseLine: 'top',
						text: `我刚刚参加了`,
						fontSize: 30,
						color: '#080808',
					},
					{
						x: 92,
						y: 810,
						fontSize: 38,
						baseLine: 'middle',
						text: '',
						width: 570,
						lineNum: 1,
						color: '#666',
						zIndex: 200,
					},
					{
						x: 59,
						y: 895,
						baseLine: 'middle',
						text: [
						{
							text: '答对',
							fontSize: 28,
							color: '#ec4b4b',
						},
						{
							text: ` 道题目`,
							fontSize: 28,
							color: '#ec4b4b',
							marginLeft: 10,
						}
						]
					},
					{
						x: 522,
						y: 895,
						baseLine: 'middle',
						text: `共题`,
						fontSize: 28,
						color: '#929292',
					},
					{
						x: 59,
						y: 945,
						baseLine: 'middle',
						text: [
						{
							text: ``,
							fontSize: 28,
							color: '#ec4b4b',
						},
						]
					},
					{
						x: 360,
						y: 1065,
						baseLine: 'top',
						text: '长按参与考试',
						fontSize: 38,
						color: '#080808',
					},
					{
						x: 360,
						y: 1123,
						baseLine: 'top',
						text: `和 bb 一较高下`,
						fontSize: 28,
						color: '#929292',
					},
				],
				images: [
				// 第一张图
					{
						width: 62,
						height: 62,
						x: 30,
						y: 30,
						borderRadius: 62,
						url: 'https://img-ali.xiaohongchun.com.cn/admin/1553309620103387a2e45.gif'
					}
				]
			}

			setTimeout(() => {
				PosterEvent.create();
			}, 1000);
		}
	},
	onLoad() {
		console.log(getApp())
		this.getNewsList()
	},
	onPullDownRefresh() {
        wx.stopPullDownRefresh();
        //this.pullNewData();
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
	text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
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
.loading-do {
	position: fixed;
	top: 50%;
	left: 50%;
	z-index: 10;
}
</style>
