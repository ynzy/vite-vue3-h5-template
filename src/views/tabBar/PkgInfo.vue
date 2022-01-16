<script setup lang="ts">
// eslint-disable-next-line no-undef
const { pkg, lastBuildTime } = __APP_INFO__
const { dependencies, devDependencies, name, version } = pkg
</script>
<template>
	<van-cell-group title="基本信息">
		<van-cell title="项目名称" :value="name" />
		<van-cell title="项目版本" :value="version" />
		<van-cell title="最后编译时间" :value="lastBuildTime" />
	</van-cell-group>
	<van-cell-group title="生产环境依赖">
		<van-cell
			title-style="flex:2"
			icon="warning-o"
			v-for="([key, value], index) of Object.entries(dependencies)"
			:key="index"
			:title="key"
			:value="value"
		/>
	</van-cell-group>
	<van-cell-group title="开发环境依赖">
		<van-cell
			icon="warning-o"
			v-for="([key, value], index) of Object.entries(devDependencies)"
			:key="index"
			:title="key"
			:value="value"
		/>
	</van-cell-group>
</template>
<style lang="scss" scoped></style>
