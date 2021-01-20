 const fs = require("fs");

//creating file in filesystem
// fs.writeFileSync("abc.txt", "14 days to go in ipl");

// fs.writeFileSync("abc.txt", "14 days to go in ipl more excited");

// fs.appendFileSync("abc.txt","\n  14 days to go in ipl more excited cant wait now")

//additional datatype buffer, it is mainly used to store binary data
// const buf_data = fs.readFileSync("abc.txt");
// console.log(buf_data);
// getting conversion of original data
// org_data = buf_data.toString();
// console.log(org_data);

fs.renameSync("abc.txt","readwrite.txt");