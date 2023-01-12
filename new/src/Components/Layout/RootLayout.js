import { Link, Outlet } from "react-router-dom";
import { useSignOut } from "../../hooks/useSignOut";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function RootLayout() {
  const { signOut } = useSignOut();
  const { user } = useAuthContext();
  return (
    <div>
      <header>
        <nav>
          <h1>Template</h1>
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="contact">Contact</Link>
          <Link to="faq">FAQ</Link>
          <Link to="todo">Todos</Link>
          {!user && (
            <>
              <Link to="signin">SignIn</Link>
              <Link to="signup">SignUp</Link>
            </>
          )}
          {user && (
            <>
              <Link to="admin">Admin</Link>
              <button onClick={signOut}>SignOut</button>
            </>
          )}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
