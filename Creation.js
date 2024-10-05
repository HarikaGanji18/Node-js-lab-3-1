var fs = require("fs");
fs.open('input.txt' , 'w', function(err,fd){
if(err){
return console.error(err);
}
console.log("File Opened Successfully!");
});
console.log("Going to write into file");
fs.writeFile('input.txt' , 'Simply Easy Learning!', function(err){
if(err){
return console.err(err);
}
console.log("Data Written Succesfully!");
});
console.log("Program Ended");
