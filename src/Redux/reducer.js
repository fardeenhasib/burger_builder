import * as actionTypes from "./actionTypes";

const INITIAL_STATE = {
    ingredients: [
    {type:'salad', amount:0 },
    {type:'cheese', amount:0 },
    {type:'meat', amount:0 }
],
totalprice: 80,
purchasable: false
}

const INGREDIENT_PRICE = {
    cheese: 20,
    salad: 10,
    meat: 80
}

export const reducer = (state = INITIAL_STATE, action) => {
    const newingredients = [...state.ingredients];
    switch (action.type) {    
        case actionTypes.ADD_INGREDIENT:
            for (let item of newingredients){
                if (item.type === action.payload){
                    item.amount++;
                }
            }
            return {
                ...state,
                ingredients: newingredients,
                totalprice: state.totalprice + INGREDIENT_PRICE[action.payload]
            }
        case actionTypes.REMOVE_INGREDIENT:
            for (let item of newingredients){
                if (item.type === action.payload){
                    item.amount--;
                }
            }
            return {
                ...state,
                ingredients: newingredients,
                totalprice: state.totalprice - INGREDIENT_PRICE[action.payload]
            }
            case actionTypes.UPDATE_PURCHASABLE:
                const sum = state.ingredients.reduce((sum,element)=>{
                    return sum + element.amount;
                }, 0);
                return {
                    ...state,
                    purchasable: sum > 0
                }
        default:
            return state;
    }
}


// export const reducer = (state = INITIAL_STATE, action) => {
//     const ingredients = [...state.ingredients];
//     switch (action.type) {
//         case actionTypes.ADD_INGREDIENT:
//             for (let item of ingredients) {
//                 if (item.type === action.payload) item.amount++;
//             }
//             return {
//                 ...state,
//                 ingredients: ingredients,
//                 totalPrice: state.totalPrice + INGREDIENT_PRICES[action.payload],
//             }
//         case actionTypes.REMOVE_INGREDIENT:
//             for (let item of ingredients) {
//                 if (item.type === action.payload) {
//                     if (item.amount <= 0) return state;
//                     item.amount--;
//                 }
//             }
//             return {
//                 ...state,
//                 ingredients: ingredients,
//                 totalPrice: state.totalPrice - INGREDIENT_PRICES[action.payload],
//             }
//         case actionTypes.UPDATE_PURCHASABLE:
//             const sum = state.ingredients.reduce((sum, element) => {
//                 return sum + element.amount;
//             }, 0)
//             return {
//                 ...state,
//                 purchasable: sum > 0,
//             }
//         default:
//             return state;
//     }

// }