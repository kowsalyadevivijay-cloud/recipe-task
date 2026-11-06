const Recipe = require('../models/recipe.model');


const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find({});
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getRecipeById = async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await Recipe.findById(id);
        
        if (!recipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }
        
        res.status(200).json(recipe);
    } catch (error) {
        if (error.name === 'CastError') {
            return res.status(400).json({ message: "Invalid Recipe ID format" });
        }
        res.status(500).json({ message: error.message });
    }
};


const createRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.create(req.body);
        res.status(201).json(recipe);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const updateRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await Recipe.findByIdAndUpdate(id, req.body, { 
            new: true, 
            runValidators: true 
        });

        if (!recipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }

        res.status(200).json(recipe);
    } catch (error) {
        if (error.name === 'CastError') {
            return res.status(400).json({ message: "Invalid Recipe ID format" });
        }
        res.status(400).json({ message: error.message });
    }
};

const deleteRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await Recipe.findByIdAndDelete(id);

        if (!recipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }

        res.status(200).json({ message: "Recipe deleted successfully" });
    } catch (error) {
        if (error.name === 'CastError') {
            return res.status(400).json({ message: "Invalid Recipe ID format" });
        }
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    getAllRecipes,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe,
};