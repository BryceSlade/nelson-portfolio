import './skills.css'

const ProductList = () => (
    <section id='skills'>
        <div className="skills">
            <div className="skills-texts">
                <h1 className='skills-title'>Skills</h1>
                <p className='skills-desc'>Focused knowledge in Frontend development and design.</p>
            </div>
            <div className="skills-container">

                    <div className="s-list">
                        <ul className='s'>
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>React</li>
                            <li>Redux</li>
                            <li>ContextAPI</li>
                            <li>Jest</li>
                        </ul>
                    </div>

                    <div className="s-list">
                        <ul className='s'>
                            <li>Debugging</li>
                            <li>Node</li>
                            <li>SQL</li>
                            <li>Express</li>
                            <li>VS Code</li>
                            <li>GitHub</li>
                            <li>Deployment</li>
                        </ul>
                    </div>
                
            </div>
        </div>
        </section>
)

export default ProductList

