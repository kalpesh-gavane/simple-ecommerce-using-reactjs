import MainCart from "../components/MainCart";
import { connect } from "react-redux";
import { addTocart, removeFromocart,removeProduct } from "../Services/Actions/actions";

const mapStateToProps = state => ({
    data: state.cardItems
})

const mapDispatchToProps = dispatch => ({
    addTocartHandler: data => dispatch(addTocart(data)),
    ramovefromocartHandler: data => dispatch(removeFromocart(data)),
    removeProductHandler: data => dispatch(removeProduct(data)),
})


export default connect(mapStateToProps, mapDispatchToProps)(MainCart)
//export default Home;
