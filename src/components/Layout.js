import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
      <hr></hr>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
