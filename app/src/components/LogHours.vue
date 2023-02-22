<template>
	<form class="loghours" @submit.prevent novalidate>
		<label for="hours">Hours:</label>
		<input
			class="loghours__inputHours"
			@focus="hourFocus"
			v-model="currentHour"
			id="hours"
			name="hours"
			type="text"
			@keydown="keyCheck"
			maxlength="3"
			min="0"
			required
		/>

		<label for="comment">Comment:</label>
		<textarea
			class="loghours__inputComment"
			@focus="commentFocus"
			id="comment"
			v-model="currentComment"
			maxlength="100"
			rows="3"
		>
		</textarea>

		<button class="loghours__button" @click="addInput">Submit</button>
		
		<p v-if="errorMessage.length">{{ errorMessage }}</p>
	</form>
</template>

<script>
export default {
	data() {
		return {
			currentHour: 0,
			currentComment: 'Add a comment.',
			errorMessage: false,
		};
	},

	methods: {
		addInput() {
			if (this.currentHour.length <= 0 || this.currentHour === 0) {
				this.errorMessage = 'You need to input a number higher than 0';
				return;
			}
			this.errorMessage = false;
			this.$store.commit('addInput', {
				hour: +this.currentHour,
				comment:
					this.currentComment === 'Add a comment.' ? '' : this.currentComment,
			});
			this.$store.commit('addTotalHours');
			this.currentHour = '';
			this.currentComment = 'Add a comment.';
		},

		keyCheck(event) {
			const regex = /[0-9]/g;
			const keysToAllow =
				event.key === 'Backspace' ||
				event.key === 'Tab' ||
				event.key === 'Enter';
			if (keysToAllow) return;
			if (!event.key.match(regex)) event.preventDefault();
		},

		hourFocus() {
			if (this.currentHour === 0) this.currentHour = '';
		},

		commentFocus() {
			if (this.currentComment === 'Add a comment.') this.currentComment = '';
		},
	},
};
</script>

<style>
.loghours {
	background-color: var(--background);
	text-align: center;
	margin: 24px auto;
	padding: 16px;
	max-width: 700px;
	border-radius: var(--border-radius);
}

.loghours__inputHours {
	display: block;
	margin: 8px auto 26px auto;
	padding: 8px 16px;
	max-width: 70px;
	text-align: center;
	background-color: white;
	border-radius: var(--border-radius);
}

.loghours__inputComment {
	display: block;
	margin: 8px auto 26px auto;
	padding: 8px 16px;
	background-color: white;
	border-radius: var(--border-radius);
	font-size: 20px;
	height: 140px;
	width: 100%;
}

.loghours__button {
	margin: 0 auto;
	padding: 16px 100px;
	width: 100%;
	background-color: white;
	border-radius: var(--border-radius);
}
</style>
