import React from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../fetch";
import CategoryProduct from "./categoryProduct";

const Category = ({ id, title, onCategoryClick }) => {

    const [products, setProducts] = React.useState({
        errorMessege: '',
        data: [],
    })

    const { categoryId } = useParams();

    React.useEffect(() => {
        const fetchData = async () => {
            const responseObject = await getProducts(categoryId);
            setProducts(responseObject);
        }
        fetchData();
    }, [categoryId]);

    const renderProducts = () => {
        return products.data.map(p => <CategoryProduct key={p.id} {...p}>{p.title}</CategoryProduct>)
    }

    return (
        <div>
            {products.errorMessage && <div>Error: {products.errorMessage}</div>}
            {products.data && renderProducts()}
        </div>
    )
};

export default Category;