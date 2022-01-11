import './intro.css'
import nelsonslade from '../../img/nelsonslade.png'

const Intro = () => {
    return (
        <div className='intro'>
            <div className='intro-left'>
                <div className='intro-left-wrapper'>
                    <h1 clasName='intro-intro'>Hello, My name is</h1>
                    <h1 className='intro-name'>Nelson Slade</h1>
                    <div className="intro-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Web Developer 2</div>
                            <div className="i-title-item">Web Developer 3</div>
                            <div className="i-title-item">Web Developer 4</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        Designing websites lorem iopsum random random, hello world, please fill this out later bnqiurbhiurbnuinurnufnfunrunrunu
                    </p>
                </div>
            </div>
            <div className='intro-right'>
                <div className="i-bg"></div>
                <img src={nelsonslade} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro
