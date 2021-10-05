const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let prodSchema = new Schema({
    Time_from: {
        type: String
    },
    Time_to: {
        type: String
    },
    Production_Plan_Quantity: {
        type: String
    },
    Cummilative_Plan_Quantity: {
        type: String
    },
    Final_Output: {
        type: String
    },
    Cummilative_Output: {
        type: String
    },
    Tube_Rejection: {
        type: String
    },
    Tip_Rejection: {
        type: String
    },
    Ink_Rejection: {
        type: String
    }
}, {
        collection: 'newprods'
    })

module.exports = mongoose.model('newprods', prodSchema)