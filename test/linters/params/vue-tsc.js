const { EOL } = require("os");

const VueTSC = require("../../../src/linters/vue-tsc");

const testName = "vue-tsc";
const linter = VueTSC;
const args = "";
const commandPrefix = "";
const extensions = ["js", "ts", "vue"];

// Linting without auto-fixing
function getLintParams(dir) {
	const stdoutFile1 = `file1.ts(1,5): error TS7034: Variable 'str' implicitly has type 'any' in some locations where its type cannot be determined.${EOL}file1.ts(4,25): error TS7005: Variable 'str' implicitly has an 'any' type.`;
	const stdoutFile2 = `file2.ts(3,1): error TS2322: Type 'string' is not assignable to type 'number'.`;
	const stdoutFile3 = `File3.vue(6,1): error TS2322: Type 'string' is not assignable to type 'number'.`;
	return {
		// Expected output of the linting function
		cmdOutput: {
			status: 2,
			stdoutParts: [stdoutFile1, stdoutFile2, stdoutFile3],
			stdout: `${stdoutFile1}\n${stdoutFile2}\n${stdoutFile3}`,
		},
		// Expected output of the parsing function
		lintResult: {
			isSuccess: false,
			warning: [], // TSC only emits errors
			error: [
				{
					path: "file1.ts",
					firstLine: 1,
					lastLine: 1,
					message:
						"TS7034: Variable 'str' implicitly has type 'any' in some locations where its type cannot be determined",
				},
				{
					path: "file1.ts",
					firstLine: 4,
					lastLine: 4,
					message: "TS7005: Variable 'str' implicitly has an 'any' type",
				},
				{
					path: "file2.ts",
					firstLine: 3,
					lastLine: 3,
					message: "TS2322: Type 'string' is not assignable to type 'number'",
				},
				{
					path: "File3.vue",
					firstLine: 6,
					lastLine: 6,
					message: "TS2322: Type 'string' is not assignable to type 'number'",
				},
			],
		},
	};
}

// TSC does not support auto-fixing
const getFixParams = getLintParams;

module.exports = [testName, linter, commandPrefix, extensions, args, getLintParams, getFixParams];
