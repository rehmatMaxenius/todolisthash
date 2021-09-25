import mongoose from 'mongoose';
import List from '../models/List.js';

export const getLists = async (req, res) => {
    try{
        const lists = await List.find();
        res.status(200).json(lists);
    } catch(error){
        res.status(404).json({ message : error });
    }
}

export const createList = async  (req, res) => {
    const list = req.body;
    const newList = new List(list);
    try{
        await newList.save();
        res.status(201).json(newList);
    } catch(error){
        res.status(409).json({ message : error.message });
    }
}

export const updateList = async  (req, res) => {
    const { id: _id } = req.params;
    const list = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('List Not Found!');
    try{
        const updatedList = await List.findByIdAndUpdate(_id, { ...list, _id }, { new: true }); //new true so it will return the newly updated list
        res.json(updatedList);
    } catch(error){
        res.json({ message : error });
    }
}

export const deleteList = async  (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('List Not Found!');
    try{
        await List.findByIdAndRemove(id);
        res.json({ message: 'List was deleted successfully' });
    } catch(error){
        res.json({ message : error });
    }
}
