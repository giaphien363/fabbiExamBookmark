import React from 'react'
import { Row } from 'reactstrap'

function Bookmark() {
    const bookmark = [
        {id: 1, title: 'google', url: 'google.com'},
        {id: 2, title: 'facebook', url: 'facebook.com'}]
    return (
        <Row>
            {bookmark.map((bookmark) => 
            <div key={bookmark.id}>
                <a href={bookmark.url}  target="_blank">{bookmark.title}</a>
            </div>)}
        </Row>
    )
}

export default Bookmark
