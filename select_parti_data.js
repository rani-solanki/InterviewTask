const fs = require("fs");

const readline = require("readline-Sync");
let selectId = readline.question("please select the id");

const SelectFunction = function (selectId) {
    let data;
    fs.readFile("task.json", function (err, data) {
        // Read users.json file
        if (err) throw err; // Check for errors

        const data_json = JSON.parse(data);

        var FindData;
        if (selectId in data_json) {
            function Findoption(index_num) {
                console.log (
                    data_json[index_num - 1]["student name"],
                    data_json[index_num - 1]["id"],
                    data_json[index_num - 1]["email id"]
                );
            }
            Findoption(selectId);
        } else {
            console.log(selectId, "this id is not available in this file");
        }
    });
};

SelectFunction(selectId);
