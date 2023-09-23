import { useState } from "react"
import styled from 'styled-components';

function NewsContent(props) {
    const { newsInfo } = props

    const [selectedIndex, setIndex] = useState(null)

    const getById = (index) => {
        if (index === selectedIndex) {
            setIndex(null)
        }
        else
        {
            setIndex(index)
        }
    }

    

    return (
        <div>
            {newsInfo.map((item, index) => (
                <div key={index}>
                    <button onClick={() => getById(index)}>{index + 1} new</button>
                    {selectedIndex === index && (
                    <div>
                        <a href={item.url}>Link</a>
                        <h2>Author: {item.author}</h2>
                        <p>Title: {item.title}</p>
                        <p>Description: {item.description}</p>
                        <p>Content: {item.content}</p>
                        <p>Published at: {item.publishedAt}</p>
                        <Image src={item.urlToImage}></Image>
                    </div>
                )}
                </div>
                
            ))}
            
        </div>
        


    )
}

export default NewsContent;

const Image = styled.img`
  width: 300px;
  height: 200px;
`;