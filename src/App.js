import './App.css';
import React from 'react';
import Category from './components/Category';

function App() {

  const [results, setResults] = React.useState([])

  React.useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setResults(data);
      })
  }, [])

  const renderCategories = () => {
    return results.map(c =>
      <Category key={c.id} id={c.id} title={c.title} />
    );
  }

  return (
    <React.Fragment>
      <header>My store</header>

      <section>
        <nav>
          {results && renderCategories()}
        </nav>
        <article>Main Area</article>
      </section>

      <footer>
        Footer
      </footer>

    </React.Fragment>
  );
}

export default App;
