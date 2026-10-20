import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
    tasktype: {
        type: String,
        required: true
    },
    taskname: {
        type: String,
        required: true
    },
    reward: {
        type: Number,
        required: true
    },
    timeline: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["Completed", "Pending"],
        default: "Pending"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("Assignment", assignmentSchema);
