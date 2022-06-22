import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'
import Footer from './components/Footer'
import ironhack from './images/ironhack-logo-xs.png'
import menu from './images/menu-top-xs.png'

function App() {
  return (
    <div className="header">
      <div className="header-icon">
        <img className="header-image" src={ironhack} alt="ironhack" />
        <img className="header-image" src={menu} alt="menu" />
      </div>
      <div className="message-button">
        <h1 className="say-hello-message">Say hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library,become a
          super Ninja developer
        </p>
        <div className="awasome">Awesome!</div>
      </div>
      <div className="icons">
        <Footer
          img={icon1}
          title="Declarative"
          text="React makes it painlesss to cretae interactive UIs."
        />
        <Footer
          img={icon2}
          title="Components"
          text="Build encapsulated components that manage their state."
        />
        <Footer
          img={icon3}
          title="Single-Way"
          text="A set of immutable values are passed to the component's."
        />
        <Footer
          img={icon4}
          title="JSX"
          text="Statically -typed designed to run on modern browsers."
        />
      </div>
    </div>
  )
}

export default App
