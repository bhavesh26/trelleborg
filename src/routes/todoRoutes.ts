import { Router } from "express";
import { Todo  , Status} from "../types/todo";

const router = Router()
const todo : Todo[] = []

//get all todos
router.get('/' , (req, res)=> {
    const status = req.query.status
    if (status) {
        const filteredTodos = todo.filter((item) => item.status === status);
        res.status(200).json({
            success: true,
            data: filteredTodos
        });
    } else {
        res.status(200).json({
            success: true,
            data: todo
        });
    }
})

router.post('/' , (req,res)=> {
    const { content, dueDate, postedBy } = req.body;

    
    if (!content || !dueDate || !postedBy) {
        res.status(400).json({
            success: false,
            message: "Missing required fields: content, dueDate, postedBy"
        });
        
    }
    const id  = String(Math.random()*1000)
    const body = req.body
    const newTodo = {
        id : id,
        content : body.content,
        dueDate : body.dueDate,
        status : Status.Pending,
        postedBy : body.postedBy
    }
    todo.push(newTodo)
    res.status(201).json({
        data : todo[todo.length-1]}
    )

})

router.delete('/:id' , (req ,res)=> {
    const id = req.params.id;
    const todoIndex = todo.findIndex((item) => item.id === id);

    if (todoIndex === -1) {
        res.status(404).json({
            success: false,
            message: `Todo with id ${id} not found`
        });
        
    }

    todo.splice(todoIndex, 1);
    
    res.status(200).json({
        success: true,
        message: `Todo ${id} deleted successfully`
    });
})




export default router


