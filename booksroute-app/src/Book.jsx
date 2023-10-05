import { useParams } from "react-router-dom";

export function Book({ booksArr }) {
    let { id } = useParams()
    let userId = Number(id)

    return (
        <div>
            <ul>
            {booksArr.filter((book) => book.id === userId).map((item) => {
                return (
                <div key={item.id}>
                    <p>Название: {item.title}</p>
                    <p>Автор: {item.author}</p>
                    <p>Жанр: {item.genre}</p>
                    <p>Жанр: {item.year}</p>
                    <p>Жанр: {item.description}</p>
                    <img style={{width:'200px', height: '270px'}} src={item.url} alt="Book poster"></img>
                </div>
                )
            })}
            </ul>
        </div>
    )
}


