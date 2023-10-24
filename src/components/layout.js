import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = ({ categories }) => {

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
                    <Outlet />
                </main>

            </section>

            <footer>
                Footer
            </footer>

        </React.Fragment>
    )
}

export default Layout