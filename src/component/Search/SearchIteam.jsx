import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import img1 from '../../Mapdata/bg-images/Rectangle_26.png';
import img2 from '../../Mapdata/bg-images/Rectangle_27.png';
import img3 from '../../Mapdata/bg-images/Rectangle_28.png';
import star from '../../Mapdata/Icon/star_1_.png'


const SearchIteam = () => {
    const [loggedIn, setLoggedIn] = useContext(UserContext);

    return (
<div className="bg-search">
             <div className="container">
               <nav className='d-flex navbar p-4'>

                </nav>
                <hr/>
                <div>
                    <p className="mb-0"><small>252 stays Apr 13-17 3 guests</small></p>
                    <h5 className="font-weight-bold">Stay in Cox's Bazar</h5>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6 pd-5">
                                <img className="img-short" src={img1} alt=""/>
                            </div>
                            <div className="col-6 mt-4">
                                <h6>Light bright airy stylish apt & safe peaceful stay</h6>
                                <p>4 guests 2 bedrooms 2 beds 2 baths Wif Air conditionion Kithcen Cancelllation fexibitlity available</p>
                                <p><img className="imgStar" src={star} alt=""/>4.9(20) <span>$34/night <small>$67 total</small></span></p>
                            </div>
                            <div className="col-6 my-4 pd-5">
                                <img className="img-short" src={img2} alt=""/>
                            </div>
                            <div className="col-6 my-4">
                                <h6>Light bright airy stylish apt & safe peaceful stay</h6>
                                <p>4 guests 2 bedrooms 2 beds 2 baths Wif Air conditionion Kithcen Cancelllation fexibitlity available</p>
                                <p><img className="imgStar" src={star} alt=""/>4.8(50) <span>$45/night <small>$67 total</small></span></p>
                            </div>
                            <div className="col-6 pd-5">
                                <img className="img-short" src={img3} alt=""/>
                            </div>
                            <div className="col-6">
                                <h6>Light bright airy stylish apt & safe peaceful stay</h6>
                                <p>4 guests 2 bedrooms 2 beds 2 baths Wif Air conditionion Kithcen Cancelllation fexibitlity available</p>
                                <p><img className="imgStar" src={star} alt=""/>4.7(70) <span>$60/night <small>$67 total</small></span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="map">
                        <iframe
                    width="100%"
                    height="670"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src={'https://maps.google.com/maps?q=bandarbone&t=&z=13&ie=UTF8&iwloc=&output=embed'}
                ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchIteam;