import mongoose from 'mongoose';

const listSchema = mongoose.Schema({
    name: String,
},{ timestamps: true });

const List = mongoose.model('List', listSchema);

export default List;