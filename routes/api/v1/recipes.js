const recipes = require('../../../data/recipes.json')
const { response } = require('express')
const router = require('express').Router()


router.get('/', (request, response) => {
    const recipeList = recipes.map(({id, title, image, prepTime, difficulty}) => {
        return { id, title, image, prepTime, difficulty }
    })
    
    response.send(recipeList)
})

router.post('/recipe/add', (request, response) => {
    const { title, image, ingredients, instructions, prepTime, difficulty } = request.body
    const id = recipes.length + 1
    recipes.push({ id, title, image, ingredients, instructions, prepTime, difficulty })
    response.send(recipes.find(r => r.id === id))
})

router.get('/recipe/:id', (request, response) => {
    const { id } = request.params
    const found = recipes.find(r => r.id.toString() === id)
    response.send(found)
})


module.exports = router