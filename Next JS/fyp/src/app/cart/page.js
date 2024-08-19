"use client";
import React, { useEffect, useState } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';
import { useRouter } from 'next/navigation';

const YourCart = () => {

    const router = useRouter();

    // States...!
    const [currentOrderData, setCurrentOrderData] = useState([]);
    const [orderTotal, setOrderTotal] = useState(0);
    const [user, setUser] = useState(null);
    const [otherDetails, setOtherDetails] = useState("");

    const clearStates = () => {
        setCurrentOrderData([]);
        setOrderTotal(0);
        setOtherDetails("");

        localStorage.setItem('YourOrder', JSON.stringify([]));
    };

    useEffect(() => {

        if (localStorage.getItem("YourOrder") != null) {
            let fetchOrder = localStorage.getItem("YourOrder");
            let jsonData = JSON.parse(fetchOrder);
            setCurrentOrderData(jsonData);
            // console.log('Cart order: ', jsonData);
        }

        else {
            localStorage.setItem("YourOrder", JSON.stringify([]));
        };

        // Note: Fetching user...!
        let fetchUser = localStorage.getItem("AuthenticatedUser");
        let jsonData = JSON.parse(fetchUser);
        // console.log('User: ', jsonData);
        setUser(jsonData);
    }, []);

    const deleteItemToShoppingCart = (productIndex) => {
        // console.log('Product key: ' , productIndex);

        let fetchCurrentOrderData = [...currentOrderData];
        fetchCurrentOrderData.splice(productIndex, 1);
        setCurrentOrderData(fetchCurrentOrderData);

        // Updating db / local storage
        localStorage.setItem("YourOrder", JSON.stringify(fetchCurrentOrderData));
    };

    const increaseQuantity = (item, key) => {
        // console.log('Item: ', item, key);

        let objClone = { ...item };
        objClone.quantity = objClone.quantity + 1;
        // console.log('Updated obj: ', objClone);

        let fetchOrderData = [...currentOrderData];
        fetchOrderData.splice(key, 1, objClone);
        setCurrentOrderData(fetchOrderData);
    };

    const decreaseQuantity = (item, key) => {
        // console.log('Item: ', item, key);

        let objClone = { ...item };
        objClone.quantity = objClone.quantity - 1;
        // console.log('Updated obj: ', objClone);

        let fetchOrderData = [...currentOrderData];
        fetchOrderData.splice(key, 1, objClone);
        setCurrentOrderData(fetchOrderData);
    };

    useEffect(() => {
        let fetchOrderData = [...currentOrderData];
        // console.log('Current order data: ', fetchOrderData);
        let total = 0;

        for (let i = 0; i < fetchOrderData.length; i++) {
            // console.log(fetchOrderData[i]);

            total = total + Number(fetchOrderData[i].productPrice * fetchOrderData[i].quantity);
        };

        // console.log('Total: ', total);
        setOrderTotal(total);
    }, [currentOrderData]);

    const placeAnOrder = () => {


        let fetchAllOrders = localStorage.getItem("OrdersList");
        let jsonOrder = JSON.parse(fetchAllOrders);

        let orderObj = {
            bucket: currentOrderData,
            totalPrice: orderTotal,
            otherDetails: otherDetails,
            userId: user.email
        };
        console.log('Order: ', orderObj);

        jsonOrder.push(orderObj);
        localStorage.setItem("OrdersList", JSON.stringify(jsonOrder));
        alert('Order plased successfully');

        setTimeout(() => {
            router.push('/orders');
            clearStates();
        }, 1000);
    };

    return (
        <div>
            <h1> Your Order </h1>

            {
                (currentOrderData && currentOrderData.length > 0)
                    ?
                    (
                        currentOrderData.map((item, index) => {
                            return (
                                <MDBCard key={index}>
                                    <MDBCardImage
                                        src={item.productImage}
                                        position='top'
                                        alt={item.productName}
                                        style={{
                                            height: 60,
                                            width: 60,
                                            objectFit: "contain"
                                        }}
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle>
                                            {item.productName}
                                        </MDBCardTitle>

                                        <MDBCardText>
                                            {item.productDescription}
                                        </MDBCardText>

                                        <MDBCardText>
                                            {`Price: ${item.quantity * Number(item.productPrice)}`}
                                        </MDBCardText>

                                        <div>
                                            <MDBBtn onClick={() => increaseQuantity(item, index)}> + </MDBBtn>
                                            <MDBBtn
                                                onClick={() => decreaseQuantity(item, index)}
                                                disabled={item.quantity < 2}
                                            > - </MDBBtn>
                                            <MDBCardText>
                                                Quantity:
                                                {item.quantity}
                                            </MDBCardText>
                                        </div>

                                        <MDBBtn onClick={() => deleteItemToShoppingCart(index)}>
                                            Delete Item
                                        </MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            );
                        })
                    )
                    :
                    (<h1> No item in cart 😢 </h1>)
            }

            <hr />
            <h2> Total rs: {orderTotal} </h2>

            <textarea
                placeholder='Enter other important details'
                rows={4}
                cols={50}
                value={otherDetails}
                onChange={(e) => setOtherDetails(e.target.value)}
            ></textarea>

            <br />

            <button
                disabled={otherDetails.trim().length < 1}
                onClick={placeAnOrder}
            >
                Place an order
            </button>
        </div>
    );
};

export default YourCart;