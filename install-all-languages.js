let langs = JSON.parse(require("./package.json")).dependencies.langauges;

for (let k in langs) {
    require("child_process").execSync(`${langs[k]}`);
}