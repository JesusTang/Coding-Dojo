import { Link } from 'react-router-dom';

function ProductList(props) {

    return ( 
        <div>
            <h1>All Products:</h1>
            {props.products.map((product, index) => {
                return (
                <div key={index}>
                    <Link to={`/${product._id}`}>{product.title}</Link> | 
                    <Link to={`/${product._id}/edit`}> Edit</Link> |
                    <Link to={`/${product._id}/delete`}> Delete </Link> 
                </div>
                )
            })}
        </div>
    );
}

export default ProductList;