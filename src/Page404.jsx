import { Link } from "react-router-dom/cjs/react-router-dom"

export const Page404 = () => {
    return (
        <div>
            <h1>ページが見つかりません</h1>
            <Link to="/" >TOP戻る</Link>
        </div>
    )
}