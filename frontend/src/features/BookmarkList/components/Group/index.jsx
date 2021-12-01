import React from 'react'
import { Card, ListGroup, CardTitle} from 'reactstrap'
import Bookmark from '../Bookmark'
import {styledGroup} from  './styledGroup'

function Group() {
  const groups = [
    {id: 1, groupName: 'Bookmarks'},
    {id: 2, groupName: 'Search'},
    {id: 3, groupName: 'Study'},
  ] 
  const grouplist = groups.map((group) =>
  (
    <Card border="warning" style={{ width: '18rem' }} className='card'>        
      <CardTitle className='card__title' key={group.id}>{group.groupName}</CardTitle>
        <ListGroup>
          <Bookmark />
        </ListGroup>
    </Card>
  )
  )
  return (  
    <div>
      {grouplist}  
    </div>
  )
}

export default Group
