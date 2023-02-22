export default {
	state() {
		return {
			userInput: [],
			totalHours: 0
		};
	},
	mutations: {
		addInput(state, object) {
			state.userInput.unshift(object)
		},

		addTotalHours(state) {
			const arrayOfHours = state.userInput.map(object => object.hour)
			state.totalHours = arrayOfHours.reduce((a, b) => a += b, 0)
		},

		removeHour(state, index) {
			state.userInput.splice(index, 1)
		}
	}
};
