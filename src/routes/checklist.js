const express = require("express");

const router = express.Router()

router.get('/', (req, res) => {
    console.log('Olá')
    res.send()
})

//post é para criar coisas no servidor.
router.post('/', (req, res) =>{
    console.log(req.body)
    res.status(200).json(req.body)
})

//get é para pegar informações
router.get('/:id', (req, res) =>{
    console.log(req.body)
    res.send(`ID: ${req.params.id}`);
})

//put é para atualizar informações no serivdor
router.put('/:id', (req, res) => {
    console.log(req.params.id);
    res.send(`PUT ID: ${req.params.id}`);
})

//delete é para remover coisas no servidor
router.delete("/:id", (req, res) => {
  console.log(req.params.id);
  res.send(`DELETE ID: ${req.params.id}`);
});

module.exports = router