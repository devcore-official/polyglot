let langs = JSON.parse(require("./package.json")).dependencies.languages["compiles"];

for (let k in langs) {
    require("child_process").execSync(`${langs[k]}`);
}