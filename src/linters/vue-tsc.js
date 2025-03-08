const TSC = require("./tsc");

class VueTSC extends TSC {
	static get tscCommand() {
		return "vue-tsc --build --force";
	}
}

module.exports = VueTSC;
