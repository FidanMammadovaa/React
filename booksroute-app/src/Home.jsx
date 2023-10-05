import { Link, Routes, Route } from "react-router-dom"

import { Book } from "./Book"
export function Home({ booksArr }) {
    return (
        <div>
            <h1>Список книг</h1>
            <ul>
                {booksArr.map((book) => {
                    return <li key={book.id}>
                        <Link to={`book/${book.id}`}>{book.title}</Link>
                    </li>
                })}
            </ul>
            <Routes>
                <Route path="book/:id/*" element={<Book booksArr={booksArr} />}></Route>
            </Routes>
        </div>
    )
}