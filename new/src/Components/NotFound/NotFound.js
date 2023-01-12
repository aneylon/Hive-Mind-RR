import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>Not found</h1>
      <Link to="/">Back to home</Link>
    </div>
  );
}
