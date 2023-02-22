export default {
	state() {
		return {
			hours: [],
			totalHours: 0
		};
	},
	mutations: {
		addHours(state, hour) {
			state.hours.unshift(hour)
		},


		addTotalHours(state) {
			if (state.hours.length === 0) state.totalHours = 0;
			else state.totalHours = state.hours.reduce((a, b) => a += b)
		},

		removeHour(state, index) {
			state.hours.splice(index, 1)
		}
	}
};
