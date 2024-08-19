// Note: Orders component...!

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

const Orders = () => {

    const [orderData, setOrderData] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("OrdersList") != null) {
            let fetchOrders = localStorage.getItem("OrdersList");
            let jsonData = JSON.parse(fetchOrders);
            console.log(jsonData);
            setOrderData(jsonData);
        }

        else localStorage.setItem("OrdersList", JSON.stringify([]));
    }, []);

    return (
        <div>
            <h1> Orders Screen! </h1>

            {
                (orderData && orderData.length > 0)
                    ?
                    (
                        orderData.map((item, index) => {
                            return (
                                <MDBCard key={index}>
                                    <MDBCardBody>
                                        <MDBCardTitle>
                                            {`Order By: ${item.userId}`}
                                        </MDBCardTitle>

                                        <MDBCardText>
                                            {`Order total; ${item.totalPrice}`}
                                        </MDBCardText>

                                        <MDBCardText>
                                            {`Order details: ${item.otherDetails}`}
                                        </MDBCardText>

                                        <MDBCardText>
                                            {`Order Items: ${item.bucket.length}`}
                                        </MDBCardText>
                                    </MDBCardBody>
                                    <hr />
                                </MDBCard>
                            );
                        })
                    )
                    :
                    (<h1> No Orders! </h1>)
            }
        </div>
    );
};

export default Orders;