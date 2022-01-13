import './header.css'

const Header = () => {
    return (
        <div className="header">
            <nav>
                <div className="links">
                    <div className="links-left">
                        <a href='#home'>Home</a>
                        <a href='#about'>About</a>
                        <a href='#skills'>Skills</a>
                    </div>
                    <div className="links-right">
                        <a href='#contact'>Contact Me</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
