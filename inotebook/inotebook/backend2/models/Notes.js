import mongoose from 'mongoose';
const { Schema } = mongoose;

const notesSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        // unique: true,
    },
    tag: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose.model('notes', notesSchema);