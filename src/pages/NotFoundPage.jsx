import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <>
            <h1>Error 404</h1>
            <h2>Looks like u landed on a page that doesn't exist. (Or mabe Adam needs to fix something💀💀💀)</h2>
            <Link to="/">Click here to get back to the home page</Link>
        </>
    );
}