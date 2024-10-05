var fs = require("fs");
fs.open('input.txt', 'r', function(err, fd) {
if (err) {
return console.error(err);
}
console.log("File opened successfully!");
});
fs.readFile('input.txt', function (err, data) {
if (err) {
return console.error(err);
}
console.log("Asynchronous read: " + data.toString());
});
