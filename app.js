const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(cors());
app.use(bodyParser.json())

const port = 3000;
let taskList = []

app.get('/getTaskList', function (req, res){
    res.json(taskList);
})

app.post('/setTask', function(req, res){
    const newTask = req.body;
    taskList.push(newTask);
    res.json({
        dataAdded: taskList});
})

app.delete('/deleteTask/:id',function (req,res){
    const id = req.params.id;
    const i = taskList.findIndex(task => task.id === parseInt(id))
    taskList.splice(i, 1);
    res.json({
        message: 'Task deleted successfully',
        updatedTaskList: taskList
    });

})

app.put('/updateTask/:id', function(req,res){
    const {id, status} = req.body
    const i = taskList.findIndex(task => task.id === parseInt(id));
    taskList[i].status = status;

    res.json({
        message: 'Task status updated successfully',
        updatedTaskList: taskList
    });
})

app.listen(port, (error)=>{
    if(error){
        throw error
    }else{
        console.log('server running in port ' + port)
    }
})