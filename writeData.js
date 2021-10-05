const fs = require("fs")
const jsonFile = require('./task.json')

// Create a Object
let new_data = {
    "id": 2,
    "student name ": "Rani",
    "email id": "ranisolanki078@gamil.com",
    "study": "Completed"
};

const writeFunction = function (new_data) {
    // Push data to JsonFile Array
    console.log(jsonFile)

    for (var index of jsonFile) {
        if (index === null) {
            console.log("rt")
        } else {
            var id = index["id"]
            if (new_data["id"] === index["id"]) {
                jsonFile[id] = new_data["id"];
            }

        }
    }
    console.log(jsonFile)
}


// jsonFile.push(new_data);

// convert Object in to String
// var add_newData = JSON.stringify(jsonFile)

// // write the JSON File
// fs.writeFile("task.json", add_newData, function (err) {
//     if (err) throw (err)
//     console.log("Saved")
// })
// }

writeFunction(new_data)

