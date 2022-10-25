import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from './logo.svg';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'react-router-dom';

const Products = (props) => {

    const [searchParams] = useSearchParams();
    // console.log(searchParams.get('q'));
    const url = 'https://fakestoreapi.com/products';

    const getData = () => {
        return JSON.parse(localStorage.getItem('counter') == null ? 0 : localStorage.getItem('counter'));
    }

    const setData = (data) => {
        const serializedState = JSON.stringify(data);
        localStorage.setItem('counter', serializedState);
    }

    let [counterhome, setCount] = useState(setData(getData()));
    let productcontent = null;
    let [products, setProduct] = useState();


    useEffect(() => {
        axios.get(url).then(response => {
            //  console.log(response.data.cars);
            setProduct(response.data);
        }).catch((err) => {
            console.log(err);
        });

    }, []);

    useState(() => {

        const serializedState = localStorage.getItem('state');
        const statedata = JSON.parse(serializedState);

        if (statedata) {
            //  console.log(statedata.data.cartItems);
            if (statedata.cartItems.length > 0) {
                props.data.cartItems = statedata.cartItems;
                props.data.totalAmount = statedata.totalAmount;
                props.data.totalItems = statedata.totalItems;
            }
        }

    })

    const showToast = (type, curItem) => {
        //console.log(type);
        if (props.data.cartItems.length >= 0) {
            if (type === 'add') {
                if (props.data.cartItems.length === 0 || props.data.cartItems.length > 0) {
                    toast.success('Item Added');
                }
            } else {
                const theItem = props.data.cartItems.find(product => product.product_id === curItem.id);
                if (theItem) {
                    toast.error('Item Removed');
                }
            }
        }

    };

    const handleClick = (index, type) => {

        if (type === 'add') {
            const counter2 = getData();
            setCount(state2 => {
                const newState = counter2
                return newState
            });
            setCount(state2 => {
                const newState = { ...state2 } //keep state immutable
                !newState[index] && (newState[index] = 0)
                newState[index]++;
                setData(newState);
                return newState
            });
        } else if (type === 'minus') {
            const counter2 = getData();
            setCount(state2 => {
                const newState = counter2
                return newState
            });

            setCount(state2 => {
                const newState = { ...state2 } //keep state immutable
                !newState[index] && (newState[index] = 0)

                if (newState[index] > 0) {
                    newState[index]--
                }

                setData(newState);
                return newState
            });
        }

    };
    // console.log();

    if (searchParams.get('q')) {

        if (products !== undefined && searchParams.get('q') !== 'null') {
            //  console.log();
            const result = products.filter((item3) => {
                return item3.title === searchParams.get('q');
            });
            products = result;
        } else {
            products = products;
        }

    } else if (document.getElementById("mui-2")) {
        console.log(document.getElementById("mui-2").value);
        //console.log(products);

        if (products !== undefined && document.getElementById("mui-2").value) {
            const result = products.filter((item3) => {
                return item3.title === document.getElementById("mui-2").value;
            });
            products = result;
        }
    } else {
        products = products;
    }

    if (products !== undefined) {
        productcontent = products.map((curItem) => {
            // console.log(curItem.id);
            return <div className="col-xl-3 col-lg-4 col-md-4 col-12" key={curItem.id}>
                <div className="single-product">
                    <div className="product-img">
                        <a>
                            <img className="default-img" src={logo} alt="#" />
                        </a>
                        <div className="button-head">

                            <div className="product-action">

                                <div className="qty mt-5">
                                    <button className="minus" onClick={() => {
                                        showToast('minus', curItem);
                                        handleClick(curItem.id, 'minus');
                                        props.ramovefromocartHandler({ product_id: curItem.id })
                                    }}>-</button>
                                    <input type="text"
                                        disabled={true}
                                        value={getData()[curItem.id]}
                                        className="countdown" />
                                    <button className="plus btn-btn-primary" onClick={() => {
                                        showToast('add', curItem);
                                        handleClick(curItem.id, 'add');
                                        props.addTocartHandler({ product_id: curItem.id, mrp: curItem.price, name: curItem.title, quantity: 1 });
                                    }}>+</button>
                                </div>

                            </div>

                            <div className="product-action-2">
                            </div>
                        </div>
                    </div >
                    <div className="product-content">
                        <h3>
                            <a href="#"> {curItem.title}</a>
                            <a href="#"></a>
                        </h3>
                        <div className="product-price">
                            <span>${curItem.price}</span>
                        </div>
                    </div>
                </div >
            </div >
        });
    }

    //  console.log(productcontent);

    return (
        <>
            {productcontent}
        </>
    )

}

export default Products;