import { useState } from 'react'
import './style.css'
export default function Ingredients() {
    const[totalBill, setTotalBill] = useState(3.00);
    const[ingredients, setIngredients] = useState({
        Lettuce: {price: 0.50, quantity: 0},
        Bacon: {price: 0.60, quantity: 0},
        Cheese: {price: 0.40, quantity: 0},
        Meat: {price: 1.30, quantity: 0}
    });

    const addIngredient = (ingred) => {
        ingredients[ingred]['quantity'] += 1
        setIngredients(ingredients);
        setTotalBill(totalBill+ ingredients[ingred]['price']);
        console.log(ingredients[ingred]);
    }
    const removeIngredient = (ingred) => {
        ingredients[ingred]['quantity'] =! 0 && (ingredients[ingred]['quantity'] -= 1);
        setIngredients(ingredients);
        console.log(ingredients[ingred]['quantity']);
        setTotalBill(totalBill - ingredients[ingred]['price']);
    }

    return (
        <div className="burger-ingredients">
            <div className='order-ingred'>
                <div>
                    <img src='burger-up.png' alt='burger bunn' className='burger-up' />
                </div>
                {Object.keys(ingredients).map(ingred =>
                    ingredients[ingred]['quantity'] > 0 ? (
                    Array.from({ length: ingredients[ingred]['quantity'] }).map((_, index) => (
                        <div key={index} className={ingred}></div>
                    ))
                    ) : null
                )}
                {Object.values(ingredients).every(item => item['quantity'] === 0) && (
                    <p>No Ingredients added</p>
                )}
                <div>
                    <img src='burger-down.png' alt='burger bunn' className='burger-up burger-down' />
                </div>
            </div>
            <div className='burger-ingred'>
                <p>Current price: <strong>${totalBill.toFixed(2)}</strong> </p>
                { Object.keys(ingredients).map(ingred => 
                    <div className='lettuce ingred-list'>
                        <div className='lettuce-txt'>{ingred}</div>
                        <button className={`ingred-btn less-btn ${ingredients[ingred]['quantity'] > 0 && 'less-btn-enabled'}`} disabled={ingredients[ingred]['quantity'] === 0} onClick={() => removeIngredient(ingred)}>Less</button>
                        <button className='ingred-btn more-btn' onClick={() => addIngredient(ingred)}>More</button>
                    </div>
                )}
                <button className={`order-btn ${totalBill <= 3 && 'order-btn-disable'}`} disabled={totalBill <= 3}>SIGN UP TO ORDER</button>
            </div>
        </div>
    )

}