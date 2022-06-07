import Heading from '../../Heading'
import { Link } from 'react-router-dom'
const HomePage = () =>{
    return(
        <>
         <Heading heading="Home"/>
     <p>you are on the homepage. Go to <Link to='/topics'>topics page</Link></p>
        
        </>
    )
}
export {HomePage} 