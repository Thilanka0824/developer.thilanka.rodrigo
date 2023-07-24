import React, {useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import ThemeContext from '../Hooks/themeContext'
import './Footer.css'

const Footer = () => {
    const {theme} = useContext(ThemeContext)
    const navigate = useNavigate()

  return (
    <div className={`page-footer ${theme} ${
        theme === "light" ? "blue lighten-4" : "blue darken-4"
      }`}>



          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="black-text">Footer Content</h5>
                <p className="grey-text text-darken-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="black-text">Links</h5>
                <ul>
                  <li><Link className="grey-text text-darken-3" href="#!">Link 1</Link></li>
                  <li><Link className="grey-text text-darken-3" href="#!">Link 2</Link></li>
                  <li><Link className="grey-text text-darken-3" href="#!">Link 3</Link></li>
                  <li><Link className="grey-text text-darken-3" href="#!">Link 4</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2014 Copyright Text
            <Link className="grey-text text-darken-4 right" href="#!">More Links</Link>
            </div>
          </div>
    
    </div>
  )
}

export default Footer