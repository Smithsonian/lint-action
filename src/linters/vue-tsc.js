const TSC = require("./tsc");

class VueTSC extends TSC {
	static get tscCommand() {
		return "vue-tsc";
	}
}

module.exports = VueTSC;
