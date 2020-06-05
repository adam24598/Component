import React from 'react'
import { Container, Row} from 'react-bootstrap'
import FullName from './profile/FullName'
import Adress from './profile/Adress'
import ProfilePhoto from './profile/ProfilePhoto'
const Main = () => {
    return (
       <Container>
           <Row className= "mt-3">
               
               <ProfilePhoto/>
               <FullName/>
               <Adress/>
               
           </Row>
       </Container>
    )
}

export default Main
