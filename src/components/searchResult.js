import React from 'react'
import { getProductsByQuery } from '../fetch'
import { useSearchParams } from 'react-router-dom';
import CategoryProduct from './categoryProduct';

const SearchResult = () => {

    const [products, setProducts] = React.useState({
        errorMessage: "",
        data: []
    });

    const [searchParams] = useSearchParams();
    const query = searchParams.get('s');

    React.useEffect(() => {
        const fetchData = async () => {
            const responseObject = await getProductsByQuery(query);
            setProducts(responseObject);
        }
        fetchData();
    }, [query]);

    const renderProducts = () => {
        return products.data.map(p => <CategoryProduct key={p.id} {...p}>{p.title}</CategoryProduct>)
    }

    return (
        <div>
            {products.errorMessage && <div>Error: {products.errorMessage}</div>}
            {products.data && renderProducts()}
        </div>
    )
}

export default SearchResult