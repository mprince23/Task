import React, { useReducer } from 'react';

const initialState = {
    currentStep: 1,
    shippingInfo: {
        name: '',
        address: '',
        city: '',
        postalCode: '',
    },
    paymentMethod: {
        cardNumber: '',
        expiration: '',
        cvv: '',
    },
    orderConfirmed: false,
};

const checkoutReducer = (state, action) => {
    if (action.type === 'NEXT_STEP') {
        return {
            ...state,
            currentStep: state.currentStep + 1,
        };
    } else if (action.type === 'PREV_STEP') {
        return {
            ...state,
            currentStep: state.currentStep - 1,
        };
    } else if (action.type === 'UPDATE_SHIPPING') {
        return {
            ...state,
            shippingInfo: { ...state.shippingInfo, ...action.payload },
        };
    } else if (action.type === 'UPDATE_PAYMENT') {
        return {
            ...state,
            paymentMethod: { ...state.paymentMethod, ...action.payload },
        };
    } else {
        return state;
    }
};

const CheckoutFlow = () => {
    const [state, dispatch] = useReducer(checkoutReducer, initialState);

    const handleNext = () => dispatch({ type: 'NEXT_STEP' });
    const handleBack = () => dispatch({ type: 'PREV_STEP' });

    const handleShippingChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: 'UPDATE_SHIPPING', payload: { [name]: value } });
    };

    const handlePaymentChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: 'UPDATE_PAYMENT', payload: { [name]: value } });
    };

    const handleOrderConfirmation = () => {
        dispatch({ type: 'CONFIRM_ORDER' });
        alert('Order Confirmed!');
    };

    return (
        <div className='container col-md-5'>
            <h2>Checkout Flow</h2>

            {state.currentStep === 1 && (
                <div className='d-grid'>
                    <h3>Shipping Information</h3>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={state.shippingInfo.name}
                        onChange={handleShippingChange}
                        className='mt-3'
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={state.shippingInfo.address}
                        onChange={handleShippingChange}
                        className='mt-3'
                    />
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={state.shippingInfo.city}
                        onChange={handleShippingChange}
                        className='mt-3'
                    />
                    <input
                        type="text"
                        name="postalCode"
                        placeholder="Postal Code"
                        value={state.shippingInfo.postalCode}
                        onChange={handleShippingChange}
                        className='mt-3'
                    />
                    <div className='mt-3'>
                        <button onClick={handleNext}>Next</button>
                    </div>
                </div>
            )}

            {state.currentStep === 2 && (
                <div>
                    <h3>Payment Method</h3>
                    <input
                        type="text"
                        name="cardNumber"
                        placeholder="Card Number"
                        value={state.paymentMethod.cardNumber}
                        onChange={handlePaymentChange}
                        className='mt-3'
                    />
                    <input
                        type="text"
                        name="expiration"
                        placeholder="Expiration Date"
                        value={state.paymentMethod.expiration}
                        onChange={handlePaymentChange}
                        className='mt-3'
                    />
                    <input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        value={state.paymentMethod.cvv}
                        onChange={handlePaymentChange}
                        className='mt-3'
                    />
                    <div className='mt-3'>
                        <button onClick={handleBack}>Back</button>
                        <button onClick={handleNext}>Next</button>
                    </div>
                </div>
            )}

            {state.currentStep === 3 && (
                <div>
                    <h3>Order Confirmation</h3>
                    <p><strong>Shipping Information:</strong></p>
                    <p>Name: {state.shippingInfo.name}</p>
                    <p>Address: {state.shippingInfo.address}</p>
                    <p>City: {state.shippingInfo.city}</p>
                    <p>Postal Code: {state.shippingInfo.postalCode}</p>

                    <p><strong>Payment Method:</strong></p>
                    <p>Card Number: {state.paymentMethod.cardNumber}</p>
                    <p>Expiration: {state.paymentMethod.expiration}</p>

                    <div className='mt-3'>
                        <button onClick={handleBack}>Back</button>
                        <button onClick={handleOrderConfirmation}>Confirm Order</button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default CheckoutFlow