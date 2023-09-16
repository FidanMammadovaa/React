import React, { Component } from "react";

//#region Third Task

// function Books(props)
// {
//     if (props.bookInfo!= null)
//     {
//         // https://covers.openlibrary.org/b/isbn/9781680721379-M.jpg
//         const {title, page_count, copyright, language, authors, categories, summary, canonical_isbn} = props.bookInfo

//         let bookImage = new URL(`https://covers.openlibrary.org/b/isbn/${canonical_isbn}-L.jpg`)
//         return (
//             <div>
//                 <p>Title: {title}</p>
//                 <p>Page Count: {page_count}</p>
//                 <p>Copyright: {copyright}</p>
//                 <p>Language: {language}</p>
//                 <p>Category: {categories.join('\n')}</p>
//                 <p>Summary: {summary}</p>
//                 <p>Author: {authors.join('\n')}</p>
//                 <img src={bookImage}></img>

//             </div>
//         );       
//     }
// }
//#endregion

//#region Fourth Task
class Books extends Component
{
    render()
    {
        if (this.props.bookInfo != null)
        {
            const {title, page_count, copyright, language, authors, categories, summary, canonical_isbn} = this.props.bookInfo

        let bookImage = new URL(`https://covers.openlibrary.org/b/isbn/${canonical_isbn}-L.jpg`)
        return (
            <div>
                <p>Title: {title}</p>
                <p>Page Count: {page_count}</p>
                <p>Copyright: {copyright}</p>
                <p>Language: {language}</p>
                <p>Category: {categories.join('\n')}</p>
                <p>Summary: {summary}</p>
                <p>Author: {authors.join('\n')}</p>
                <img src={bookImage}></img>

            </div>
        );     
        }
    }
}

//#endregion
export default Books;
