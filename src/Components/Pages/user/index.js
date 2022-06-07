import { useParams } from 'react-router-dom'
import Heading from '../../Heading'
const UserPage = () =>{
    const params = useParams()
    return(
        <>
         <Heading heading="User"/>
     <p>Your Username is:{params.username}</p>
        
        </>
    )
}
export {UserPage} 