import './about.css'
import nbsbackground from '../../img/nbsbackground.png'

const About = () => {
    return (
        <div className='a'>
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={nbsbackground} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className='a-title'>About Me</h1>
                <p className='a-sub'>
                    DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
                </p>
                <p className='a-desc'>
                    eoisbstrbstrbrwtbrtbrwtbrtbpiouhbtnrgilhjbervflikjqnbervlijqebnrvliqjervbnpiqeorjvbnqpierjvbnqpijrvbqpierjvnbqpeirojvnbqerv]
                </p>
                <div className="a-award">
                    <img src={nbsbackground} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className='a-award-title'>BloomTech Certificate</h4>
                        <p className='a-award-desc'>
                            something about bloomtech certificate here
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
