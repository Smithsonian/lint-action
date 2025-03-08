const TSC = require("./tsc");

class VueTSC extends TSC {
	static get tscCommand() {
		return "vue-tsc --build --force";
	}

	static get tscVersionCheck() {
		return "vue-tsc -v";
	}
}

module.exports = VueTSC;
