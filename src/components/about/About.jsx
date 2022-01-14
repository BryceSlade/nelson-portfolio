import './about.css';
import bloomtech from '../../img/bloomtech.png';
import coding from '../../img/coding.png';

const About = () => {
    return (
        <section id='about'>
            <div className='a'>
                <div className="a-left">
                    <div className="a-card bg"></div>
                    <div className="a-card">
                        <img src={coding} alt="Coding" className="a-img"/>
                    </div>
                </div>

                <div className="a-right">
                    <h1 className='a-title'>About Me</h1>
                    <p className='a-sub'>
                        I'm a coding enthusiast with a love of content creation and design.
                        I value family, integrity, reliability, and professionalism above all else.
                        These values have guided me on my journey and help guide my approach to problem solving.
                    </p>
                    <p className='a-desc'>
                        Successfully conquered my time at BloomTech (formerly, Lambda School) through their
                        Full Stack program where I obtained a wealth of knowledge to hone my development skills.
                    </p>
                    <div className="a-award">
                        <a href='https://www.bloomtech.com/'>
                            <img src={bloomtech} alt="BloomTech" className="a-award-img"/>
                        </a>
                        <div className="a-award-texts">
                            <a href='https://www.bloomtech.com/'>
                                <h4 className='a-award-title'>Bloom Institute of Technology</h4>
                            </a>
                                <p className='a-award-desc'>
                                    for Full Stack Web Development
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
