import './header.css';
import github from '../../img/github.png';
import linkedin from '../../img/linkedin.png';
import twitter from '../../img/twitter.png';

const Header = () => {

    return (
        <div className="header">
                <div className="links-left">
                    <a href='#home'>Home</a>
                    <a href='#about'>About</a>
                    <a href='#skills'>Skills</a>
                    <a href='#contact'>Contact</a>
                </div>
                <div className="links-right">
                    <a href='https://github.com/BryceSlade'>
                        <img src={github} alt="Github" className="social-g" />
                    </a>
                    <a href='https://www.linkedin.com/in/nelsonbryceslade/'>
                        <img src={linkedin} alt="LinkedIn" className="social" />
                    </a>
                    <a href='https://twitter.com/CodingWithBryce'>
                        <img src={twitter} alt="Twitter" className="social" />
                    </a>
                </div>
        </div>
    )
}

export default Header
