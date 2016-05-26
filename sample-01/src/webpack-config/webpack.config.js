var path = require("path");
var entryPath = path.join(__dirname,'..');

module.exports = {
    entry: entryPath + "/entry.js",
    output: {
        path: entryPath,
        filename: entryPath + "/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
