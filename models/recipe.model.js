const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please enter recipe title"],
        },
        ingredients: {
            type: [String],
            required: true,
        },
        instructions: {
            type: String,
            required: true,
        },
        cookingTime: {
            type: Number,
            required: true,
            default: 0
        },
    },
    {
        timestamps: true,
    }
);

const Recipe = mongoose.model("Recipe", RecipeSchema);
module.exports = Recipe;