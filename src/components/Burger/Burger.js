// import { Component } from 'react';

import classes from '../../App.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingKey => {
            return [...Array(props.ingredients[ingKey])].map((_, i) => {
                return <BurgerIngredient key={ingKey + i} type={ingKey} />;
            });
        })
        .reduce((arr, ele)=>{
            return arr.concat(ele);
        }, []);

    console.log(transformedIngredients);
    if(transformedIngredients.length ===0){
        transformedIngredients=<p>Please start adding ingredients</p>;
    }
    return (
        <div className={classes.Burger}>

            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            {/* <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" /> */}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;