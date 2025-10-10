"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const source = fs.readFileSync(path.join(__dirname, "..", "linkedin-feed-blocker.user.js"), "utf8");

assert.match(source, /@match\s+https:\/\/www\.linkedin\.com\/\*/);
assert.match(source, /@run-at\s+document-start/);
assert.match(source, /pathname === "\/feed" \|\| pathname\.startsWith\("\/feed\/"\)/);
assert.match(source, /const TARGET_PROFILE = "[^"\n]+"/);
assert.match(source, /https:\/\/www\.linkedin\.com\/in\/\$\{TARGET_PROFILE\}\//);
assert.match(source, /window\.location\.replace\(REDIRECT_URL\)/);

new vm.Script(source);
console.log("userscript smoke checks: ok");
