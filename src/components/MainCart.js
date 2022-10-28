import React from "react";
import { useState } from "react";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const MainCart = (props) => {

    //console.log(props);

    const serializedState = localStorage.getItem('state');
    const statedata = JSON.parse(serializedState);

    const counterState = localStorage.getItem('counter');
    const counterdata = JSON.parse(counterState);

    // console.log(counterdata);
    // console.log('counterdata');

    const [count, setCount] = useState(counterdata);

    useState(() => {

        if (statedata) {
            if (statedata.cartItems.length > 0) {
                props.data.cartItems = statedata.cartItems;
                props.data.totalAmount = statedata.totalAmount;
                props.data.totalItems = statedata.totalItems;
            }
        }

    })

    if (props.data.cartItems.length >= 0) {

        try {
            //  console.log(props.data);
            if (props.data.cartItems.length == 0) {
                // console.log('0');
                const serializedState = JSON.stringify(props.data);
                localStorage.setItem('state', serializedState);
            } else {
                const serializedState = JSON.stringify(props.data);
                localStorage.setItem('state', serializedState);
            }

        } catch (e) {
            // Ignore write errors;
        }

    }

    const showToast = (type, curItem) => {
        // console.log(type);
        if (statedata.cartItems.length >= 0) {
            if (type == 'add') {
                if (statedata.cartItems.length == 0 || statedata.cartItems.length > 0) {
                    toast.success('Item Added');
                }
            } else if (type == 'remove') {

                const product_count = localStorage.getItem('counter');
                const counter2 = JSON.parse(product_count);

                setCount(state2 => {
                    const newState = counter2
                    return newState
                });

                console.log(count);

                setCount(count => {
                    const newState = { ...count } //keep state immutable
                    !newState[curItem.product_id] && (newState[curItem.product_id] = 0)

                    if (newState[curItem.product_id] > 0) {
                        newState[curItem.product_id] = 0

                        const product_count = JSON.stringify(newState);
                        localStorage.setItem('counter', product_count);
                    }

                    // console.log(newState);

                    return newState
                });

                const theItem = statedata.cartItems.find(product => product.product_id === curItem.product_id);

                if (theItem) {
                    toast.error('Item Removed');
                }


            } else {
                const theItem = statedata.cartItems.find(product => product.product_id === curItem.product_id);
                if (theItem) {
                    toast.error('Item Removed');
                }

            }
        }

    };

    const handleClick = (index, type) => {

        if (type == 'add') {
            setCount(counterdata => {
                const newState = { ...counterdata } //keep state immutable
                !newState[index] && (newState[index] = 0)
                newState[index]++
                return newState
            });
        } else {
            setCount(counterdata => {
                const newState = { ...counterdata } //keep state immutable
                !newState[index] && (newState[index] = 0)

                if (newState[index] > 0) {
                    // console.log(newState[index]);
                    newState[index]--
                }

                return newState
            });
        }
    };

    const product_count = JSON.stringify(count);
    localStorage.setItem('counter', product_count);

    // console.log(count);
    return (
        <>
            <div className="shopping-cart section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            <table className="table shopping-summery">

                                <thead>
                                    <tr className="main-hading">
                                        <th>PRODUCT</th>
                                        <th>NAME</th>
                                        <th className="text-center">UNIT PRICE</th>
                                        <th className="text-center">QUANTITY</th>
                                        <th className="text-center">TOTAL</th>
                                        <th className="text-center"><i className="ti-trash remove-icon"></i></th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {
                                        props.data.cartItems.map((curItem) => {
                                            //  console.log('curItem');
                                            // console.log(curItem.name);
                                            return (
                                                <tr>
                                                    <td className="image" data-title="No"><img src="https://via.placeholder.com/70x70" alt="#" /></td>
                                                    <td className="product-des" data-title="Description">
                                                        <p className="product-name"><a >{curItem.name}</a></p>
                                                    </td>
                                                    <td className="price" data-title="Price"><span>${curItem.mrp} </span></td>
                                                    <td className="qty" data-title="Qty">

                                                        <div className="input-group">

                                                            <div className="button minus">
                                                                <button type="button" className="btn btn-primary btn-number" onClick={() => {
                                                                    showToast('minus', curItem);
                                                                    handleClick(curItem.product_id, 'minus');
                                                                    props.ramovefromocartHandler({ product_id: curItem.product_id })
                                                                }} data-type="minus" data-field="quant[1]">
                                                                    <i className="ti-minus"></i>
                                                                </button>
                                                            </div>

                                                            <input type="text" name="quant[1]" className="input-number" data-min="1" data-max="100" disabled={true}
                                                                value={count[curItem.product_id]} />
                                                            <div className="button plus">
                                                                <button type="button" className="btn btn-primary btn-number" data-type="plus" onClick={() => {
                                                                    showToast('add', curItem);
                                                                    handleClick(curItem.product_id, 'add');
                                                                    // handleVoteChange(curItem, 1);
                                                                    props.addTocartHandler({ product_id: curItem.product_id, mrp: curItem.mrp, name: curItem.name, quantity: 1 });
                                                                }}
                                                                    data-field="quant[1]">
                                                                    <i className="ti-plus"></i>
                                                                </button>
                                                            </div>
                                                        </div>

                                                    </td>
                                                    <td className="total-amount" data-title="Total"><span>${curItem.quantity * curItem.mrp}</span></td>
                                                    <td className="action" data-title="Remove"><a onClick={() => {
                                                        showToast('remove', curItem);
                                                        props.removeProductHandler({ product_id: curItem.product_id, quantity: curItem.quantity, mrp: curItem.mrp })
                                                    }} ><i className="ti-trash remove-icon"></i></a></td>
                                                </tr>
                                            )

                                        })
                                    }

                                </tbody>

                            </table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="total-amount">
                                <div className="row">
                                    <div className="col-lg-8 col-md-5 col-12">
                                        <div className="left">
                                            <div className="coupon">
                                                <form action="#">
                                                    <input name="Coupon" placeholder="Enter Your Coupon" />
                                                    <button className="btn">Apply</button>
                                                </form>
                                            </div>
                                            <div className="checkbox">
                                                <label className="checkbox-inline" for="2"><input name="news" id="2" type="checkbox" /> Shipping (+10$)</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-7 col-12">
                                        <div className="right">
                                            <ul>
                                                <li>Cart Subtotal<span>$ {props.data.totalAmount.toFixed(2)}</span></li>
                                                {/* <li>Shipping<span>Free</span></li>
                                                <li>You Save<span>$20.00</span></li> */}
                                                <li className="last">You Pay<span>$ {props.data.totalAmount.toFixed(2)}</span></li>
                                            </ul>
                                            <div className="button5">
                                                <Link className="btn" to='/checkout'>Checkout</Link>
                                                <Link className="btn" to='/'>Continue shopping</Link>
                                            
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default MainCart;