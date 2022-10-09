export const reducer = (state, action) => {

    if (action.type === 'remove_item') {
        // alert('hello');
        return {
            ...state,
            products: state.products.filter((curElem) => {
                return curElem.product_id !== action.payload;
            })
        }
    }

    if (action.type === 'INCREMENT') {

        let updatedCart = state.products.map((curElem) => {

            if (curElem.product_id === action.payload) {
                if (curElem.quantity < curElem.max_qty)
                    return {
                        ...curElem, quantity: curElem.quantity + 1
                    };
            }
            return curElem;
        });
        return { ...state, products: updatedCart };
    }

    if (action.type === 'DECREMENT') {
        // alert('hello');
        let updatedCart = state.products.map((curElem) => {
            if (curElem.product_id === action.payload) {
                if (curElem.quantity > 1)
                    return {
                        ...curElem, quantity: curElem.quantity - 1
                    };
            }
            return curElem;
        });
        //  console.log(updatedCart);
        return { ...state, products: updatedCart };
    }

    if (action.type === 'Total') {
        // alert('hello');
        let { totalItems } = state.products.reduce((accum, curVal) => {
            let { quantity } = curVal;
            // console.log(curVal.quantity);
            accum.totalItems += quantity;
            //  console.log(accum);
            return accum;
        }, {
            totalItems: 0,
        }

        );

        return { ...state, totalItems: totalItems };
        //  console.log(totalItems);
    }
    return state;
}