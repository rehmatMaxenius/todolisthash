import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const todoSchema = mongoose.Schema({
    list_id: { type: Schema.Types.ObjectId, ref: 'List' },
    title: String,
    date: String,
    status:Boolean,
},{ timestamps: true });

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;