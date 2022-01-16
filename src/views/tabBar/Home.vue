<!-- Home -->
<template>
	<div class="home-container">
		<div class="warpper">
			<h1 class="demo-home__title">
				<!-- <img src="https://imgs.solui.cn/weapp/logo.png" /> -->
				<span>vite2 VUE3 H5开发模板</span>
			</h1>
			<h2 class="demo-home__desc">A vue h5 template with Vant UI</h2>
		</div>
		<van-cell icon="success" v-for="item in list" :key="item" :title="item" />
	</div>
</template>
<script lang="ts">
// import { defineComponent } from 'vue'
export default defineComponent({
	name: 'Home',
	props: {},
	setup() {
		const list = [
			'create-vue',
			'vite 2 + vue 3.2',
			'配置 ip 访问项目',
			'配置多环境变量',
			'配置 alias 别名',
			'Sass 全局样式',
			'Vue-router',
			'Pinia 状态管理',
			'使用 Mock 数据',
			'配置 proxy 跨域',
			'静态资源使用',
			'Axios 封装及接口管理',
			'vue-request 管理接口',
			'VantUI 组件按需加载',
			'viewport 适配方案',
			'适配苹果距离底部距离',
			'动态设置 title',
			'配置 Jssdk',
			'vconsole 移动端调试',
			'本地存储 storage 封装',
			'Eslint+Pettier 统一开发规范',
			'husky + lint-staged 提交校验'
		]
		return {
			list
		}
	}
})
</script>
<style lang="scss" scoped>
.home-container {
	.warpper {
		padding: 12px;
		background: #fff;
		.demo-home__title {
			margin: 0 0 6px;
			font-size: 28px;
			.demo-home__title img,
			.demo-home__title span {
				display: inline-block;
				vertical-align: middle;
			}
			img {
				width: 32px;
			}
			span {
				margin-left: 16px;
				font-weight: 500;
			}
		}
		.demo-home__desc {
			margin-top: 10px;
			// margin: 0 0 10px;
			color: rgba(69, 90, 100, 0.6);
			font-size: 14px;
		}
	}
}
</style>
