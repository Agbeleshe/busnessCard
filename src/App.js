import './style.css'
import Info from './components/Info'
import About from './components/About'
import Intrest from './components/Intrest'
import Footer from './components/Footer'


const App = () => {
    return (
        <div className='container'>
            <div className='sub-container'>
                <Info/>
                <div className='content'>
                    <About/>
                    <Intrest/>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default App