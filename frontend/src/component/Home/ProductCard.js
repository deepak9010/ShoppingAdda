import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import "./productCard.css";
// import ReactStars from "react-rating-stars-component"

const ProductCard = ({ product }) => {
//   const options = {
//     value: product.ratings,
//     readOnly: true,
//     precision: 0.5,
//   };

  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        {/* <Rating {...options} />{" "} */}
        <Rating 
          value={product.ratings || 0} 
          readOnly 
          precision={0.5} 
          size="small" 
          sx={{
            '& .MuiRating-icon': {
              color: '#ffc107',
            },
            '& .MuiRating-iconFilled': {
              color: '#ffc107', 
            },
            '& .MuiRating-iconHover': {
              color: '#ffc107', 
            },
            '& .MuiRating-iconEmpty': {
              color: '#e0e0e0', 
              stroke: '#e0e0e0', 
              strokeWidth: 1.5, 
            }
          }}
        />{" "}
        <span className="productCardSpan">
          {" "}
          ({product.numOfReviews} Reviews)
        </span>
      </div>

      <span>{`₹${product.price}`}</span>
    </Link>
  );
};

export default ProductCard;


