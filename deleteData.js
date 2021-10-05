const fs = require("fs");
const json_file = require("./task.json");
const readline = require("readline-sync");

const deleteFinction = function(deleteFinction,readline){
    fs.readFile("task.json", function (err, data) {
        // Read users.json file
    
        if (err) throw err; // throw err
        const jsonFile_data = JSON.parse(data);
        console.log(jsonFile_data)
    
        var select_id = readline.question("select the id"); // select the particular data delete
        if (select_id in jsonFile_data) {
            // Search by Id
            delete jsonFile_data[select_id - 1];
    
             // Push the updated data 
            json_file.push(jsonFile_data);
    
            var update_data = JSON.stringify(jsonFile_data,null,4); //Convert Js object in to String
    
            // U[pdate the data
            var g = fs.writeFile("task.json", update_data, function (err) {
                if (err) throw err;
                console.log("Saved");
            });
    
        } else {
            console.log(select_id, "Data Not Found");
        }
    });

}

deleteFinction(deleteFinction,readline)



