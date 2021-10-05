const fs = require("fs");

// Read task.json file

const getFunction = function () {
    var data;
    fs.readFile("task.json", function (err, data) {
        if (err) throw err; // throw error

        // convert Object in to String
        const jsonData = JSON.parse(data);

        // Console the all data
        for (var index of jsonData) {
            console.log(index);
        }
    });
};

getFunction();
