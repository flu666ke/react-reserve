import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { Divider, Segment, Button } from "semantic-ui-react"
import calculateCartTotal from '../../utils/calculateCartTotal';

function CartSummary({ products, handleCheckout, success }) {
  const [cartAmount, setCartAmount] = React.useState(0)
  const [stripeAmount, setStripeAmount] = React.useState(0)
  const [isCartEmpty, setCartEmpty] = React.useState(false)

  React.useEffect(() => {
    const { cartTotal, stripeTotal } = calculateCartTotal(products)
    setCartAmount(cartTotal)
    setStripeAmount(stripeTotal)
    setCartEmpty(products.length === 0)
  }, [products])

  return <>
    <Divider />
    <Segment clearing size="large">
      <strong>Sub total:</strong>${cartAmount}
      <StripeCheckout
        name="React Reserve"
        amount={stripeAmount}
        image={products.length > 0 ? products[0].product.mediaUrl : ""}
        currency="USD"
        shippingAddress={true}
        billingAddress={true}
        stripeKey="pk_test_LXPa9Mn3LsOG86PBvdP9YZnw00dIUQIU8X"
        zipCode={true}
        token={handleCheckout}
        triggerEvent="onClick"
      >
        <Button
          icon="cart"
          color="teal"
          disabled={isCartEmpty || success}
          floated="right"
          content="Checkout"
        />
      </StripeCheckout>
    </Segment>
  </>
}

export default CartSummary;
