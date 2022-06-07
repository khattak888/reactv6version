import { Link } from 'react-router-dom'
import Heading from '../../Heading'
const topics = [
    'react',
    'python',
    'node',
    'nextjs',
]
const TopicsPage = () =>{
    return(
        <>
         <Heading heading="Topics list"/>
     <p>Topics list</p>
     <ul>
         topics.map(topic=> 
            <li key={topic}>
             <Link to={topic}>{topic}</Link>
             </li>)
     </ul>
        
        </>
    )
}
export {TopicsPage}