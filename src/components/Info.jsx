import image from '../image/profile.jpg'

const Info = () => {
    return (
        <>
            <img className='profile' src={image} alt="profile pictre" />
            <h1 className='username'>Daniel Mayowa</h1>
            <h3 className='stack'>Frontend React Developer</h3>
            <p className='email'>danielagbeleshe@gmail.com</p>
            <a className='email-btn btn' href="null"><i className="fa-regular fa-envelope icon"></i>Email</a>
            <a className='linkedin-btn btn' href="null"><i className="fa-brands fa-linkedin icon"></i>Linkden</a>
        </>
    )
}

export default Info