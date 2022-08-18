<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';
import { onMounted } from 'vue';

onMounted(() => {
	console.log('App onMounted');
});

onLaunch(() => {
	console.log('App Launch');
});

onShow(() => {
	console.log('App Show');
});

onHide(() => {
	console.log('App Hide');
});
</script>
<style lang="scss">
#app {
	width: 100%;
	height: 100%;
}
</style>
