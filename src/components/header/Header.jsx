import './header.css'

const Header = () => {
    return (
        <div className="header">
            <nav className='nav'>
                <div className="links-left">
                    <a href='#home'>Home</a>
                    <a href='#about'>About</a>
                    <a href='#skills'>Skills</a>
                    <a href='#contact'>Contact</a>
                </div>
                <div className="links-right">
                    <p>github logo</p>
                    <p>linkedin logo</p>
                    <p>facebook logo?</p>
                </div>
            </nav>
        </div>
    )
}

export default Header
