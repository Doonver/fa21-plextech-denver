const mongoose = require("mongoose");
//var db = require('../database');

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String
        },
        finished: {
            type: Boolean
        }
    }
);


const Task = mongoose.model("Task", taskSchema);

module.exports = Task


