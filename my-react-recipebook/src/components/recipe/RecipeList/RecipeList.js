import React from 'react';
import {Button} from 'react-bootstrap';
import RecipeListItem from './RecipeListItem/RecipeListItem';

const recipeList = (props) => {
    return (
        <div>
           <h3 class="text-white">ShopList</h3>
            <hr/>
            <Button variant="primary" className="my-3">SaveRecipe</Button>
            <div class="mt-4">
                <RecipeListItem/>
            </div>
        </div>
    );
};

export default recipeList;