import './App.css';
import React from 'react';
import Category from './components/Category';
import { fetcher } from './fetch';

function App() {

  const [categories, setCategories] = React.useState([]);
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await fetcher("/categories");
      setCategories(data);
    }
    fetchData();

  }, [])


  const handleCategoryClick = id => {
    fetch("http://localhost:3001/products?catId=" + id)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProducts(data);
      })
  }

  const renderCategories = () => {
    return categories.map(c =>
      <Category key={c.id} id={c.id} title={c.title} onCategoryClick={() => handleCategoryClick(c.id)} />
    );
  }

  const renderProducts = () => {
    return products.map(p =>
      <div>{p.title}</div>
    )
  }

  return (
    <React.Fragment>
      <header>My store</header>

      <section>
        <nav>
          {categories && renderCategories()}
        </nav>
        <article>
          <h1>Products</h1>
          {products && renderProducts()}
        </article>
      </section>

      <footer>
        Footer
      </footer>

    </React.Fragment>
  );
}

export default App;
