
import { useState, useEffect } from "react";
import axios from "axios";
import { render } from "@testing-library/react";



const Search = () => {

    const [searchInput, setSearchInput] = useState([]);


    const [products, setProducts] = useState([]);

    
   useEffect(() => {
        fetchProducts();
    }, []);


    // console.log (searchInput);
    //const item="Kerala";
    
    const fetchProducts = () => {

    
        if(searchInput!=='') {

            //   console.log (searchInput);
        axios
            .get(`https://newsapi.org/v2/everything?q=${searchInput}&from=2022-08-30&to=2022-08-31&sortBy=popularity&apiKey=129f9eae3a934c2bb5cd1a8ae9807064`).then((res) => {
                console.log(res);
                setProducts(res.data.articles);
            })
            .catch((err) => {
                console.log(err);
            });

        }

        
            else{
                axios
                .get('https://newsapi.org/v2/everything?q=India&from=2022-08-30&to=2022-08-31&sortBy=popularity&apiKey=129f9eae3a934c2bb5cd1a8ae9807064')
                .then((res) => {
                    console.log(res);
                    setProducts(res.data.articles);
                })
                .catch((err) => {
                    console.log(err);
                });
            }
    };




    return (

        <div>

            <input icon='search'
                placeholder='Type here...'
                onChange={(e) => setSearchInput(e.target.value)}
            />

            <button id='btn' onClick={(e) => fetchProducts()}>search</button>


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

    )
};


export default Search;

