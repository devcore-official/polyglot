module.exports = class LanguageScripts {

	data = JSON.parse(require("../package.json")).dependencies.languages;

	commands = ["install","compile","execute","freeze","poweroff","kill","profile"];

	shell = require("child_process").execSync;

	cmd; sel;

	command(cmd,sel){
		this.cmd = cmd; 
		this.sel = sel;
		this.selection();
		for (let k in this.langs) shell(data[cmd](sel));
	}
	selection(){

		switch (selection = this.sel) {

			case "all" : cb = ()=>true; break;

			default: 
				if () {

				} else cb = ()=>true; break;
				break;

		}
		this.langs = Object.keys(languages).filter(cb);

	}
}