
const Books = (props) => {
    return (
        <div>
            {
                props.books.map((book) => (
                    <div key={book._id}>
                        <h1>{book.name}</h1>
                        <p><b>Author:</b> {book.author}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Books;