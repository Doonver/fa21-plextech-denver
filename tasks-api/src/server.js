const express = require("express");
const Task = require("./task");
var gid = 0;
const app = express();
const port = 8000;

let router = express.Router();

//return everything
router.get('/tasks', (req,res) => {
    var gd = req.params;
    var data = await Task.find();
    res.status(201).send(data.toJSON());
});

//return specific id
router.get('/tasks/:id', (req,res) => {
    var gd = req.params.id;
    if (isNumeric(gd)) {
        Task.findOne({_id: parseInt(gd)}, (err, task) => {
            if (err) {
                res.status(404).send(err);
            }
            res.status(201).send(Task.toJSON());
        });
    } else {
        res.status(400).send("Input was incorrect");
    }
});

//put = findOneAndUpdate

router.put('tasks/:id', (req, res) => {
    var id = req.params.id;
    if (isNumeric(id)) {
        Task.findOneAndUpdate({_id: parseInt(id)}, (err, task) => {
            if (err) {
                res.status(404).send(err);
            }
            res.status(201).send(Task.toJSON());
        });
    } else {
        res.status(400).send("Input was incorrect");
    }
    Task.findOneAndUpdate()
});

router.post('/tasks', (req, res) => {
    gid += 1;
    var pd = req.params;
    var inp = new Task({
        title: pd.title,
        finished: pd.finished
    });
    inp._id = gid;
    try {
        inp.save();
        res.status(201).send(inp);
    } catch (error) {
        res.status(404).send(error)
    }
})

app.use('/', router);

app.listen(port, () => console.log(`The server is listening on port ${port}`))