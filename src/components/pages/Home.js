import {Link} from 'react-router-dom';
import { Fragment } from "react";
import HeroImg from "../../assets/restaurant.jpg";
import GreekSalad from "../../assets/greek salad.jpg";
import LemonDessert from "../../assets/lemon dessert.jpg";
import CheesePlatter from "../../assets/cheese platter.jpg";
import SalmonZucchini from "../../assets/salmon and zucchini.jpg";
import TurkishSalad from "../../assets/turkish salad.jpg";
import JonasKakaroto from "../../assets/jonas-kakaroto-mjRwhvqEC0U-unsplash.jpg";
import HoucineNcib from "../../assets/houcine-ncib-B4TjXnI0Y2c-unsplash.jpg";
import MatheusFerrero from "../../assets/matheus-ferrero-pg_WCHWSdT8-unsplash.jpg";
import SergioPaula from "../../assets/sergio-de-paula-c_GmwfHBDzk-unsplash.jpg";
import StefanStefancik from "../../assets/stefan-stefancik-QXevDflbl8A-unsplash.jpg";
import MarioAdrian from "../../assets/Mario and Adrian A.jpg";


export default function Home() {
    return (
        <Fragment>
            {/*Hero Section*/}
            <section className="hero">
                <div className="hero-text">
                    <h1>Welcome to Little Lemon</h1>
                    <p>A family-owned Mediterranean restaurant in Chicago, Illinois, serving traditional recipes with a modern
                        twist.
                    </p>
                    <Link aria-label="On Click" to="/reservations" class="btn">Book a Table</Link>
                </div>
                <div class="hero-image">
                    <img src={HeroImg} alt="Little Lemon Restaurant"></img>
                </div>
            </section>

            {/*Highlights Section*/}
            <section className="highlights" id="menu">
                <h2>Weekly Specials</h2>
                <div class="carousel">
                    <div class="dish">
                        <img src={GreekSalad} alt="greek salad"></img>
                        <div class="dish-details">
                            <h3>Greek Salad</h3>
                            <p>Dish description 1</p>
                            <p class="price">$10.99</p>
                            <a href="#" class="btn">Order Online</a>
                        </div>
                    </div>
                    <div class="dish">
                        <img src={LemonDessert} alt="lemon dessert"></img>
                        <div class="dish-details">
                            <h3>Lemon Dessert</h3>
                            <p>Dish description 2</p>
                            <p class="price">$12.99</p>
                            <a href="#" class="btn">Order Online</a>
                        </div>
                    </div>
                    <div class="dish">
                        <img src={CheesePlatter} alt="cheese platter"></img>
                        <div class="dish-details">
                            <h3>Cheese Platter</h3>
                            <p>Dish description 3</p>
                            <p class="price">$12.99</p>
                            <a href="#" class="btn">Order Online</a>
                        </div>
                    </div>
                    <div class="dish">
                        <img src={SalmonZucchini} alt="salmon and zucchini"></img>
                        <div class="dish-details">
                            <h3>Salmon and Zucchini</h3>
                            <p>Dish description 4</p>
                            <p class="price">$12.99</p>
                            <a href="#" class="btn">Order Online</a>
                        </div>
                    </div>
                    <div class="dish">
                        <img src={TurkishSalad} alt="turkish salad"></img>
                        <div class="dish-details">
                            <h3>Turkish Salad</h3>
                            <p>Dish description 5</p>
                            <p class="price">$12.99</p>
                            <a href="#" class="btn">Order Online</a>
                        </div>
                    </div>
                </div>
            </section>

            {/*-Testimonials Section*/}
            <div class="testimonials">
                <h2>Testimonials</h2>
                <div class="carousel">
                    <div class="testimonial">
                        <div class="user-profile">
                            <img src={JonasKakaroto} alt="Jonas Kakaroto"></img>
                            <h4>Jonas Kakaroto</h4>
                        </div>
                        <div class="review">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus metus a ipsum cursus pharetra.</p>
                            <div class="ratings">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial">
                        <div class="user-profile">
                            <img src={HoucineNcib} alt="Houcine Ncib"></img>
                            <h4>Houcine Ncib</h4>
                        </div>
                        <div class="review">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus metus a ipsum cursus pharetra.</p>
                            <div class="ratings">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial">
                        <div class="user-profile">
                            <img src={MatheusFerrero} alt="Matheus Ferrero"></img>
                            <h4>Matheus Ferrero</h4>
                        </div>
                        <div class="review">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus metus a ipsum cursus pharetra.</p>
                            <div class="ratings">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial">
                        <div class="user-profile">
                            <img src={SergioPaula} alt="Sergio de Paula"></img>
                            <h4>Sergio de Paula</h4>
                        </div>
                        <div class="review">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus metus a ipsum cursus pharetra.</p>
                            <div class="ratings">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial">
                        <div class="user-profile">
                            <img src={StefanStefancik} alt="Stefan Stefancik"></img>
                            <h4>Stefan Stefancik</h4>
                        </div>
                        <div class="review">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus metus a ipsum cursus pharetra.</p>
                            <div class="ratings">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/*-About Section*/}
            <section class="about" id="about">
                <div class="about-text">
                    <h2>About Little Lemon</h2>
                    <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
                    </p>
                </div>
                <div class="about-image">
                    <img src={MarioAdrian} alt="About Little Lemon"></img>
                </div>
            </section>

        </Fragment>
    );
}