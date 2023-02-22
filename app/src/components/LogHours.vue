<template>
		<form class="loghours" @submit.prevent novalidate>
		<label class="" for="hours">Hours</label>
		<input 
		class="loghours__input"
		@focus="onFocus" 
		v-model="currentHour"
		id="hours" 	
		name="hours" 
		type="text" 
		maxlength="3"
		min="0"
		>
		<button class="loghours__button" @click="addHours">Submit</button>
		<p v-if="errorMessage.length">{{ errorMessage }}</p>
	</form>
</template>

<script>
export default {
		data(){
			return {
				currentHour: 0,
				errorMessage: false,
			}
		},

		methods: {
			addHours(){
				if(this.currentHour.length <= 0 || this.currentHour === 0){
					this.errorMessage = 'You need to input a number higher than 0'
					return
				};
				this.errorMessage = false;
				this.$store.commit('addHours', +this.currentHour)
				this.$store.commit('addTotalHours')
				this.currentHour = '';
			},

			onFocus(){
				if(this.currentHour === 0) this.currentHour = ''
			},
		},
		
	
	}
</script>

<style>
.loghours {
	background-color: var(--background);
	margin: 24px auto;
	text-align: center;
	padding: 16px;
	max-width: 700px;
	border-radius: var(--border-radius);
}

.loghours__input {
	display: block;
	margin: 8px auto 26px auto;
	padding: 8px 16px;
	max-width: 70px;
	text-align: center;
	background-color: white;
	border-radius: var(--border-radius);
}

.loghours__button {
	margin: 0 auto;
	padding: 16px 100px;
	width: 100%;
	background-color: white;
	border-radius: var(--border-radius);
}
</style>