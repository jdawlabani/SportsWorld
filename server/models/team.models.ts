import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema(
    {
        logo: {
            type: String
        },
        name: {
            type: String
        },
        // record will be an array, first number is wins, second is losses
        record: {
            type : Array
        }
    }
)