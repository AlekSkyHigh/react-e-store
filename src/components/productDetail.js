import React from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../fetch";

const ProductDetail = () => {
    const [product, setProduct] = React.useState({ errorMessage: "", data: [] });
    const { productId } = useParams();

    React.useEffect(() => {
        const fetchData = async () => {
            const responseObject = await getProductById(productId);
            setProduct(responseObject);
        }
        fetchData();
    }, [productId]);

    return (
        <div>productDetail Title: {product.data.title}</div>
    )
}

export default ProductDetail;