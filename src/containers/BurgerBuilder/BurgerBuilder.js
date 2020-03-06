import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INTREDIENT_PRICE = {
    salad: 0.5,
    bacon: 0.3,
    cheese: 0.7,
    meat: 1.3
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice : 4,
        purchasable: false
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            }).reduce((sum, newValue) => {
                return sum + newValue;
            }, 0)
        this.setState({ purchasable: sum > 0 })
    } 

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        }
        updateIngredients[type] = newCount;
        const oldPrice = INTREDIENT_PRICE[type];
        const newPrice= this.state.totalPrice + oldPrice;
        this.setState({ ingredients: updateIngredients, totalPrice: newPrice });
        this.updatePurchaseState(updateIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount === 0) return;
        const newCount = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredients
        }
        updateIngredients[type] = newCount;
        const oldPrice = INTREDIENT_PRICE[type];
        const newPrice= this.state.totalPrice - oldPrice;
        this.setState({ ingredients: updateIngredients, totalPrice: newPrice });
        this.updatePurchaseState(updateIngredients);
    }

    render() {

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    ingredientCount={this.state.ingredients}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;