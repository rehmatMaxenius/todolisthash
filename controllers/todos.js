import mongoose from 'mongoose';
import Todo from '../models/Todo.js';


export const getTodos = async (req, res) => {
    const { id: _id } = req.params;
    try{
        const todos = await Todo.find({list_id: _id});
        res.status(200).json(todos);
    } catch(error){
        res.status(404).json({ message : error });
    }
}

export const createTodos = async  (req, res) => {
    const todo = req.body;
    const newTodo = new Todo(todo);
    try{
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch(error){
        res.status(409).json({ message : error.message });
    }
}


export const updateTodo = async  (req, res) => {
    const { id: _id } = req.params;
    const todo = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Todo Not Found!');
    try{
        const updatedTodo = await Todo.findByIdAndUpdate(_id, { ...todo, _id }, { new: true }); //new true so it will return the newly updated todo
        res.json(updatedTodo);
    } catch(error){
        res.json({ message : error });
    }
}


export const updateTodoStatus = async (req, res) => {
    const { id: _id } = req.params;
    const todo = Todo.findById(_id);
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Todo Not Found!');
    try{
        const updatedTodoStatus = await Todo.findByIdAndUpdate(_id, { status: !todo.status, _id }, { new: true }); //new true so it will return the newly updated todo
        res.json(updatedTodoStatus);
    } catch(error){
        console.log(error.message);
        res.json({ message : error });
    }
}

export const deleteTodo = async  (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Todo Not Found!');
    try{
        await Todo.findByIdAndRemove(id);
        res.json({ message: 'Todo was deleted successfully' });
    } catch(error){
        res.json({ message : error });
    }
}
