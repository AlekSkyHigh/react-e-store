import './App.css';
import React from 'react';
import { getCategories } from './fetch';

function App() {

  const [categories, setCategories] = React.useState({ errorMessage: "", data: [] });

  React.useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getCategories();
      setCategories(responseObject);
    }
    fetchData();
  }, [])

}

export default App;
