var fs = require("fs");
fs.open('input.txt', 'w+', function(err, fd) {
if (err) {
return console.error(err);
}
console.log("File opened successfully!");
});
console.log("Going to write into existing file");
fs.writeFile('input.txt', 'Simply Easy Learning222!', function(err) {
if (err) {
return console.error(err);
}
console.log("Data written successfully!");
console.log("Let's read newly written data");
fs.readFile('input.txt', function (err, data) {
if (err) {
return console.error(err);
}
console.log("Asynchronous read: " + data.toString());
});
});
console.log("Program Ended");
