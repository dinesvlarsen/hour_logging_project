<template>
	<!--  -->
	<div class="loggedhours">
		<p>Hours:</p>
		
		<div v-if="hours.length === 0" class="loggedhours__card">
			<p>No hours logged yet.</p>	
		</div>
		
		<div  v-for="hour, index in hours">
			<div class="loggedhours__card">
					<p>{{ hour }}</p>
					<button class="loggedhours__button" @click="deleteHour(index)"><img class="button__icon" src="/images/delete-icon.png">Delete</button>
			</div>
		</div>

		<div class="loggedhours__total">
			<p>Total Hours:</p>
			<div class="total__container">
				<p>{{ totalHours }}</p>
			</div>
			<p v-if="totalHours >= 100">{{ totalHoursNotification }}</p>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			totalHoursNotification: "You've surpassed 100 hours"
		}
	},
	methods: {
		deleteHour(index){
			this.$store.commit('removeHour', index)
			this.$store.commit('addTotalHours')
		}
	},
	computed: {
		hours(){
			return this.$store.state.hours
		},

		totalHours(){
			return this.$store.state.totalHours
		}
	}
}
</script>

<style>
.loggedhours {
	background-color: var(--background);
	margin: 24px auto;
	padding: 16px;
	max-width: 700px;
	border-radius: var(--border-radius);
}

.loggedhours__card {
	display: flex;
	margin-top: 8px;
	align-items: center;
	background-color: white;
	padding: 6px 8px;
	justify-content: space-between;
	border-radius: var(--border-radius)
}

.loggedhours__button {
	display: flex;
	gap: 8px;
	align-items: center;
	background-color: #C91D1D;
	color: white;
	padding: 8px 16px;
	border-radius: var(--border-radius);
}

.button__icon {
	width: 16px;
}

.loggedhours__total {
	margin-top: 24px;
}

.total__container {
	max-width: 80px;
	padding: 8px 16px;
	border-radius: var(--border-radius);
	margin-top: 8px;
}
</style>