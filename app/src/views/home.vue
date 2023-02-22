<template>
<LogHours />
<HoursLogged />
</template>

<script>
	import LogHours from '../components/LogHours.vue';
	import HoursLogged from '../components/HoursLogged.vue'

	export default {
		data(){
			return {
				hours: [],
			}
		},
		components: {LogHours, HoursLogged}
	}
</script>