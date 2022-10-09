import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import HomeProductContainer from "../containers/HomeProductContainer";


const Home = (props) => {

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

  return (
    <div>

      <section className="hero-slider">

        <div className="single-slider">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-lg-9 offset-lg-3 col-12">
                <div className="text-inner">
                  <div className="row">
                    <div className="col-lg-7 col-12">
                      <div className="hero-text">
                        <h1><span>UP TO 50% OFF </span>Shirt For Man</h1>
                        <p>
                          Maboriosam in a nesciung eget magnae <br />
                          dapibus disting tloctio in the find it pereri <br />
                          odiy maboriosm.
                        </p>
                        <div className="button">
                          <a href="#" className="btn">Shop Now!</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="small-banner section">
        <div className="container-fluid">
          <div className="row">

            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-banner">
                <img src="https://via.placeholder.com/600x370" alt="#" />
                <div className="content">
                  <p>Man's Collectons</p>
                  <h3>
                    Summer travel <br />
                    collection
                  </h3>
                  <a href="#">Discover Now</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-banner">
                <img src="https://via.placeholder.com/600x370" alt="#" />
                <div className="content">
                  <p>Bag Collectons</p>
                  <h3>
                    Awesome Bag <br />
                    2020
                  </h3>
                  <a href="#">Shop Now</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12">
              <div className="single-banner tab-height">
                <img src="https://via.placeholder.com/600x370" alt="#" />
                <div className="content">
                  <p>Flash Sale</p>
                  <h3>
                    Mid Season <br />
                    Up to <span>40%</span> Off
                  </h3>
                  <a href="#">Discover Now</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="product-area section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Trending Item</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="product-info">
                <div className="nav-main">

                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" data-toggle="tab" href="#man" role="tab">Man</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#women" role="tab">Woman</a>
                    </li>
                  </ul>

                </div>
                <div className="tab-content" id="myTabContent">

                  <div className="tab-pane fade show active" id="man" role="tabpanel">
                    <div className="tab-single">
                      <div className="row" id="mens">
                        <div className='col-md-12'>
                          <div className='row'>
                            <HomeProductContainer />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="women" role="tabpanel">
                    <div className="tab-single">
                      <div className="row" id="womens">

                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="shop-home-list section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="row">
                <div className="col-12">
                  <div className="shop-section-title">
                    <h1>On sale</h1>
                  </div>
                </div>
              </div>

              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h4 className="title">
                        <a href="#">Licity jelly leg flat Sandals</a>
                      </h4>
                      <p className="price with-discount">$59</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title">
                        <a href="#">Licity jelly leg flat Sandals</a>
                      </h5>
                      <p className="price with-discount">$44</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title">
                        <a href="#">Licity jelly leg flat Sandals</a>
                      </h5>
                      <p className="price with-discount">$89</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="row">
                <div className="col-12">
                  <div className="shop-section-title">
                    <h1>Best Seller</h1>
                  </div>
                </div>
              </div>

              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title">
                        <a href="#">Licity jelly leg flat Sandals</a>
                      </h5>
                      <p className="price with-discount">$65</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title">
                        <a href="#">Licity jelly leg flat Sandals</a>
                      </h5>
                      <p className="price with-discount">$33</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title">
                        <a href="#">Licity jelly leg flat Sandals</a>
                      </h5>
                      <p className="price with-discount">$77</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="row">
                <div className="col-12">
                  <div className="shop-section-title">
                    <h1>Top viewed</h1>
                  </div>
                </div>
              </div>

              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title">
                        <a href="#">Licity jelly leg flat Sandals</a>
                      </h5>
                      <p className="price with-discount">$22</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title">
                        <a href="#">Licity jelly leg flat Sandals</a>
                      </h5>
                      <p className="price with-discount">$35</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title">
                        <a href="#">Licity jelly leg flat Sandals</a>
                      </h5>
                      <p className="price with-discount">$99</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="cown-down">
        <div className="section-inner">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-12 padding-right">
                <div className="image">
                  <img src="https://via.placeholder.com/750x590" alt="#" />
                </div>
              </div>
              <div className="col-lg-6 col-12 padding-left">
                <div className="content">
                  <div className="heading-block">
                    <p className="small-title">Deal of day</p>
                    <h3 className="title">Beatutyful dress for women</h3>
                    <p className="text">
                      Suspendisse massa leo, vestibulum cursus nulla sit amet,
                      frungilla placerat lorem. Cars fermentum, sapien.
                    </p>
                    <h1 className="price">$1200 <s>$1890</s></h1>
                    <div className="coming-time">
                      <div className="clearfix" data-countdown="2021/02/30"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shop-blog section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>From Our Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">

              <div className="shop-single-blog">
                <img src="https://via.placeholder.com/370x300" alt="#" />
                <div className="content">
                  <p className="date">22 July , 2020. Monday</p>
                  <a href="#" className="title">Sed adipiscing ornare.</a>
                  <a href="#" className="more-btn">Continue Reading</a>
                </div>
              </div>

            </div>
            <div className="col-lg-4 col-md-6 col-12">

              <div className="shop-single-blog">
                <img src="https://via.placeholder.com/370x300" alt="#" />
                <div className="content">
                  <p className="date">22 July, 2020. Monday</p>
                  <a href="#" className="title">Man’s Fashion Winter Sale</a>
                  <a href="#" className="more-btn">Continue Reading</a>
                </div>
              </div>

            </div>
            <div className="col-lg-4 col-md-6 col-12">

              <div className="shop-single-blog">
                <img src="https://via.placeholder.com/370x300" alt="#" />
                <div className="content">
                  <p className="date">22 July, 2020. Monday</p>
                  <a href="#" className="title">Women Fashion Festive</a>
                  <a href="#" className="more-btn">Continue Reading</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  )

}

export default Home;