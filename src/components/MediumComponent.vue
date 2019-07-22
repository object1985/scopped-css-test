<template>
	<div>
		<h3 class="title">MediumComponent!</h3>
		<SmallComponent/>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import SmallComponent from './SmallComponent.vue'

export default Vue.extend({
	name:'MediumComponent!',
	components:{
		SmallComponent,
	}
})
</script>

<style scoped>
.title{
	border:solid 2px #390468;
	border-radius: 5px;
	padding: 3px;
}
</style>
