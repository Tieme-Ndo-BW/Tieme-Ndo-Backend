const express = require('express');

const models = require('./helpers/clientDb');

const router = express.Router();

router.get('/', (req, res) => {
    models.get()
    .then(model => {
        res.status(200).json(model);
    })
    .catch(err => {
        res.status(500).json({ message: "Error retrieving data..."});
    })
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    models.getById(id)
    .then(model => {
        if(model) 
        {
            res.status(200).json(model);
        }
        else
        {
            res.status(404).json({ message: "Could not find client with this ID..."});
        }
    })
    .catch(err => {
        res.status(500).json({ message: "Error Retrieving data..."});
    });
});

router.post('/', (req,res) => {
    const modelData = req.body;

    models.insert(modelData)
    .then(newModel => {
        res.status(201).json(newModel);
    })
    .catch(err => {
        res.status(500).json({ message: "Error Creating new client..."});
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    models.remove(id)
    .then(deleted => {
        if(deleted) 
        {
            res.status(200).json({ removed: deleted});
        }
        else
        {
            res.status(404).json({ message: "Could not find client with given ID..."});
        }
    })
    .catch(err => {
        res.status(500).json({ message: "Error attempting to Delete client..."});
    });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    models.getById(id)
    .then(model => {
        if(model)
        {
            models.update(changes, id)
            .then(updatedModel => {
                res.status(200).json(updatedModel)
            })
        }
        else
        {
            res.status(404).json({ message: `Could not find client with given id with id ${id}`});
        }
    })
    .catch(err => {
        res.status.json({ message: "Failed to Update Client info..."});
    })
});



module.exports = router;