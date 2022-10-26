import React, { useState, useEffect } from "react";
// import { products } from "./Products";
import axios from "axios";

function ProductsGrid(props) {

	const url = 'https://fakestoreapi.com/products';

	const [allproducts, setProduct] = useState([]);

	useEffect(() => {
		axios.get(url).then(response => {
			//  console.log(response.data.cars);
			setProduct(response.data);
		}).catch((err) => {
			console.log(err);
		});

	}, []);
	//console.log(allproducts);

	const filterProducts = (type, value) => {
		//	console.log(value);

		if (type === 'category') {
			const result = allproducts.filter((product) => {
				return product.title === value;
			});
			setProduct(result);

		} else {
			const result = allproducts.filter((product) => {

				switch (value) {
					case '20-50':
						return product.price <= 20 && product.price > 10;
						break;
					case '20-50':
						return product.price <= 50 && product.price > 21;
						break;
					case '50-100':
						return product.price <= 101 && product.price > 51;
						break;
					default:
						return product.price > 102;
				}

			});
			setProduct(result);
		}
	}

	return (
		<div>
			<section className="product-area shop-sidebar shop section">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-4 col-12">
							<div className="shop-sidebar">

								<div className="single-widget category">
									<h3 className="title">Categories</h3>
									<ul className="categor-list">
										<li><a onClick={() => {
											filterProducts('category', 'boy');
										}}>Boys</a></li>
										<li><a onClick={() => {
											filterProducts('category', 't-shirt');
										}}>T-shirts</a></li>
										<li><a onClick={() => {
											filterProducts('category', 'men');
										}}>Men's</a></li>

										<li><a onClick={() => {
											filterProducts('category', 'women');
										}}>accessories</a></li>
										<li><a onClick={() => {
											filterProducts('category', 'girl');
										}}>Girls</a></li>
										<li><a onClick={() => {
											setProduct(allproducts);
										}}>All</a></li>
									</ul>
								</div>

								<div className="single-widget range">
									<h3 className="title">Shop by Price</h3>
									<div className="price-filter">
										<div className="price-filter-inner">
											<div id="slider-range"></div>
											<div className="price_slider_amount">
												<div className="label-input">
													<span>Range:</span><input type="text" id="amount" name="price" placeholder="Add Your Price" />
												</div>
											</div>
										</div>
									</div>
									<ul className="check-box-list">
										<li>
											<label className="checkbox-inline"><input name="news" onClick={() => {
												filterProducts('price', '20-50');
											}} id="1" type="checkbox" />$20 - $50<span className="count">(3)</span></label>
										</li>
										<li>
											<label className="checkbox-inline"><input name="news" onClick={() => {
												filterProducts('price', '50-100');
											}} id="2" type="checkbox" />$50 - $100<span className="count">(5)</span></label>
										</li>
										<li>
											<label className="checkbox-inline"><input name="news" onClick={() => {
												filterProducts('price', '900');
											}} id="3" type="checkbox" />$100 - $250<span className="count">(8)</span></label>
										</li>
									</ul>
								</div>

								<div className="single-widget recent-post">
									<h3 className="title">Recent post</h3>

									<div className="single-post first">
										<div className="image">
											<img src="https://via.placeholder.com/75x75" alt="#" />
										</div>
										<div className="content">
											<h5><a >Girls Dress</a></h5>
											<p className="price">$99.50</p>
											<ul className="reviews">
												<li className="yellow"><i className="ti-star"></i></li>
												<li className="yellow"><i className="ti-star"></i></li>
												<li className="yellow"><i className="ti-star"></i></li>
												<li><i className="ti-star"></i></li>
												<li><i className="ti-star"></i></li>
											</ul>
										</div>
									</div>

									<div className="single-post first">
										<div className="image">
											<img src="https://via.placeholder.com/75x75" alt="#" />
										</div>
										<div className="content">
											<h5><a >Women Clothings</a></h5>
											<p className="price">$99.50</p>
											<ul className="reviews">
												<li className="yellow"><i className="ti-star"></i></li>
												<li className="yellow"><i className="ti-star"></i></li>
												<li className="yellow"><i className="ti-star"></i></li>
												<li className="yellow"><i className="ti-star"></i></li>
												<li><i className="ti-star"></i></li>
											</ul>
										</div>
									</div>

									<div className="single-post first">
										<div className="image">
											<img src="https://via.placeholder.com/75x75" alt="#" />
										</div>
										<div className="content">
											<h5><a >Man Tshirt</a></h5>
											<p className="price">$99.50</p>
											<ul className="reviews">
												<li className="yellow"><i className="ti-star"></i></li>
												<li className="yellow"><i className="ti-star"></i></li>
												<li className="yellow"><i className="ti-star"></i></li>
												<li className="yellow"><i className="ti-star"></i></li>
												<li className="yellow"><i className="ti-star"></i></li>
											</ul>
										</div>
									</div>

								</div>

								<div className="single-widget category">
									<h3 className="title">Manufacturers</h3>
									<ul className="categor-list">
										<li><a   >Forever</a></li>
										<li><a >giordano</a></li>
										<li><a >abercrombie</a></li>
										<li><a >ecko united</a></li>
										<li><a >zara</a></li>
									</ul>
								</div>

							</div>
						</div>

						<div className="col-lg-9 col-md-8 col-12">
							<div className="row">
								<div className="col-12">

									<div className="shop-top">
										<div className="shop-shorter">
											<div className="single-shorter">
												<label>Show :</label>
												<select>
													<option>09</option>
													<option>15</option>
													<option>25</option>
													<option>30</option>
												</select>
											</div>
											<div className="single-shorter">
												<label>Sort By :</label>
												<select>
													<option>Name</option>
													<option>Price</option>
													<option>Size</option>
												</select>
											</div>
										</div>
										<ul className="view-mode">
											<li className="active"><a href="shop-grid.html"><i className="fa fa-th-large"></i></a></li>
											<li><a href="shop-list.html"><i className="fa fa-th-list"></i></a></li>
										</ul>
									</div>

								</div>
							</div>

							<div className="row">

								{
									allproducts.map((product) => {
										// console.log(product);
										return <>
											<div className="col-lg-4 col-md-6 col-12" key={product.id}>
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" ><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" ><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" ><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>

															<div className="product-action-2">
																<a title="Add to cart" >Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">{product.title}</a></h3>
														<div className="product-price">
															<span>$ {product.price}</span>
														</div>
													</div>
												</div>
											</div>
										</>
									})
								}

							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)

}

export default ProductsGrid;