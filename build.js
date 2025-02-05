const fs = require("fs");

const api = fs.readFileSync(__dirname + "/console-hooker-api.js").toString();
const template = fs.readFileSync(__dirname + "/console-hooker.html").toString();
const component = fs.readFileSync(__dirname + "/console-hooker.js").toString();
const compiledComponent = component.replace("$template", template);
const license = fs.readFileSync(__dirname + "/LICENSE.md").toString();
const compiledOutput = license + "\n" + api + compiledComponent;

fs.writeFileSync(__dirname + "/console-hooker.compiled.js", compiledOutput, "utf8");
