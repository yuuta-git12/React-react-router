import { Link } from "react-router-dom/cjs/react-router-dom"

export const Page1 = () => {
    return (
        <div>
            <h1>ページ1です</h1>
            <Link to="/page1/detailA">DetailA</Link>
            <br />
            <Link to="/page1/detailB">DetailB</Link>
        </div>
    )
}