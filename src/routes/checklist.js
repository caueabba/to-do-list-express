const express = require("express");

const router = express.Router()

const Checklist = require("../models/checklist")

//pegar coisas do banco de dados.
router.get('/', async (req, res) => {
    try {
        let checklists = await Checklist.find({})
        res.status(200).json(checklists);
    } catch (error) {
        res.status(422).json(error);
    }
})

//post é para criar coisas no servidor.
router.post('/', async (req, res) =>{
    let {name} = req.body

    try {
        let checklist = await Checklist.create({name})
        res.status(200).json(checklist)
        } catch (error){
            res.status(422).json(error)
        }
})

//get é para pegar informações . nesse caso informações específicas do banco de dados.
router.get('/:id', async (req, res) =>{
    try {
      let checklist = await Checklist.findById(req.params.id);
      res.status(200).json(checklist);
    } catch (error) {
      res.status(422).json(error);
    }
})

//put é para atualizar informações no serivdor
router.put('/:id', async (req, res) => {
    let { name } = req.body
    try {
       let checklist = await Checklist.findByIdAndUpdate(req.params.id, {name}, {new: true});
      res.status(200).json(checklist);
    } catch (error) {
      res.status(422).json(error);
    }
})

//delete é para remover coisas no servidor
router.delete("/:id", async (req, res) => {
  try {
    let checklist = await Checklist.findByIdAndRemove(req.params.id);
    res.status(200).json(checklist);
  } catch (error) {
    res.status(422).json(error);
  }
});

module.exports = router