import React from 'react'
import "../assets/css/tableList.css"
import img1 from "./image/java.png"
import img2 from "./image/python.png"
import img3 from "./image/c++.jpg"
import img4 from "./image/javaScript.jpg"
export const MapDemo6 = () => {

    const books = [
        { Id: '1', book: 'Java', price: 3500, image: img1 },
        { Id: '2', book: 'python', price: 3600, image: img2 },
        { Id: '3', book: 'c++', price: 3700, image: img3 },
        { Id: '4', book: 'JavaScript', price: 3800, image: img4 },
    ]

    return (
        <div >
            <h2 border={3}>Books </h2>
            <table className='table table' align='center' border={2}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>BOOK</th>
                        <th>PRICE</th>
                        <th>Image</th>

                    </tr>
                </thead>
                <tbody>{
                    books.map((book) => {
                        return <tr>
                            <td>{book.Id}</td>
                            <td>{book.book}</td>
                            <td>{book.price}</td>
                            <td >
                                <img src={book.image}
                                    alt={book.book}
                                    width={50}
                                />
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>


        </div>
    )
}
