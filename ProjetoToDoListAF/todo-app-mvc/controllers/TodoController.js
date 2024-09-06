import Todo from "@/models/Todo";
import connectMongo from "@/utils/dbConnect";

//Criar o CRUD

// READ
export const getTodos = async () => {
    await connectMongo();
    return await Todo.find({});
  };
  

//CREATE
export const createTodo = async (data) => {
    await connectMongo();
    return await Todo.create(data);
  };
  

//UPDATE
export const updateTodo = async (id, data) => {
    await connectMongo();
    return await Todo.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  };
  

//DELETE
export const deleteTodo = async (id) => {
    await connectMongo();
    return await Todo.deleteOne({ _id: id });
  };
  

