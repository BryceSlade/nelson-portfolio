import './intro.css'
import nelsonslade from '../../img/nelsonslade.png'

const Intro = () => {
    return (
        <div className='i'>
            <div className='i-left'>
                <div className='i-left-wrapper'>
                    <h1 clasName='i-intro'>Hello. The pleasure is mine.</h1>
                    <h1 className='i-name'>I'm Nelson Slade</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Frontend Engineer</div>
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Web Designer</div>
                            <div className="i-title-item">Aspirer</div>
                        </div>
                    </div>
                    <p className="i-desc"><i>"I have not failed. I've just found 10,000 ways that won't work!"</i></p>
                    <p className='quote'>By Thomas Edison, <span className='kidding'>probably coding</span></p>
                </div>
            </div>
            <div className='i-right'>
                <div className="i-bg"></div>
                <img src={nelsonslade} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro