import './App.css';
import React from 'react';
import Category from './components/Category';
import { getCategories, getProducts } from './fetch';
import CategoryProduct from './components/categoryProduct';

function App() {

  const [categories, setCategories] = React.useState({ errorMessage: "", data: [] });
  const [products, setProducts] = React.useState({ errorMessage: "", data: [] });

  React.useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getCategories();
      console.log(responseObject);
      setCategories(responseObject);
    }
    fetchData();
  }, [])

  const handleCategoryClick = id => {
    const fetchData = async () => {
      const responseObject = await getProducts(id);
      setProducts(responseObject);
    }
    fetchData();
  }

  const renderCategories = () => {
    return categories.data.map(c =>
      <Category key={c.id} id={c.id} title={c.title} onCategoryClick={() => handleCategoryClick(c.id)} />
    );
  }

  const renderProducts = () => {
    return products.data.map(p => <CategoryProduct {...p}>{p.title}</CategoryProduct>)
  }

  return (
    <React.Fragment>
      <header>My store</header>

      <section>

        <nav>
          {categories.errorMessage && <div>Error: {categories.errorMessage}</div>}
          {categories.data && renderCategories()}
        </nav>

        <main>
          <h1>Products</h1>
          {products.errorMessage && <div>Error: {products.errorMessage}</div>}
          {products && renderProducts()}
        </main>

      </section>

      <footer>
        Footer
      </footer>

    </React.Fragment>
  );
}

export default App;
