<template>
	<div>
		<h2 class="title">LargeComponent!</h2>
		<MediumComponent/>
		<MediumComponent/>
		<MediumComponent/>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import MediumComponent from './MediumComponent.vue'

export default Vue.extend({
	name:'LargeComponent!',
	components:{
		MediumComponent,
	}
})
</script>

<style scoped>
.title{
	border:double 4px #b72679;
	border-radius: 5px;
	padding: 3px;
}
</style>
