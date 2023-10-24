import './App.css';
import React from 'react';
import Category from './components/Category';
import { getCategories, getProducts } from './fetch';
import CategoryProduct from './components/categoryProduct';
import { Link } from 'react-router-dom';

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
      <li key={c.id}><Link to={`/categories/${c.id}`}>{c.title}</Link> </li>
    );
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
          
        </main>

      </section>

      <footer>
        Footer
      </footer>

    </React.Fragment>
  );
}

export default App;
