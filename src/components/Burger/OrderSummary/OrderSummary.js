import { Component } from 'react';
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // componentWillUpdate(){
    //     console.log('update');
    // }
    render() {
        const ingredients = Object.keys(this.props.ingredients)
            .map((key) => {
                return <li key={key}><span style={{ textTransform: "capitalize" }}>{key}</span> : {this.props.ingredients[key]}</li>
            })
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>Delicious burger with following ingredients :</p>
                <ul>
                    {ingredients}
                </ul>
                <p><b>Total Price : {this.props.price.toFixed(2)}</b></p>
                <p>Continue to checkout?</p>
                <Button click={this.props.canceled} btnType="Danger">CANCEL</Button>
                <Button click={this.props.continued} btnType="Success">CONTINUE</Button>
            </ Aux>
        );
    }

}

export default OrderSummary;