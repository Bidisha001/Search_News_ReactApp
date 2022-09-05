import React, { useState, useEffect } from "react";
import axios from 'axios';

const FeaturedProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {

        axios
            .get('https://newsapi.org/v2/everything?q=India&from=2022-08-30&to=2022-08-31&sortBy=popularity&apiKey=129f9eae3a934c2bb5cd1a8ae9807064')
            .then((res) => {
                console.log(res);
                setProducts(res.data.articles);
            })
            .catch((err) => {
                console.log(err);
            });

    };



    return (
        <div>
            <h1>Iss bar ho jana...</h1>
            <div className="item-container">
                {products.map((product) => (
                    <div className="card">
                        <img src={product.urlToImage} alt='' />
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};


export default FeaturedProducts;