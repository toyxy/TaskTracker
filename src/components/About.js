import { Link } from 'react-router-dom'
import Card from "./Card";
const About = () => {
    return (
        <div className='tc'>
            <Card />
            <h4>Version 1.0.0</h4>
            <Link to='/'>Go Back</Link>
        </div>
    )
}

export default About
