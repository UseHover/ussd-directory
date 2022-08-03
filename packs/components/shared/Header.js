import React, { useRef } from 'react'
import nav from '../../../_data/nav.yml'
import PropTypes from 'prop-types'

const Header = ({ hasBanner }) => {
  const mobileMenuRef = useRef(null)

  const toggleMobileMenu = () => mobileMenuRef.current.classList.toggle('uk-open')
  const closeMobileMenu = () => mobileMenuRef.current.classList.remove('uk-open')

  return (
    <>
      <header className="header space-between-groups mx-auto">
        <a href="/" className="logo">
          <svg width="91" height="44">
            <use href={`/uploads/icon-sprite.svg#${hasBanner ? 'logo-white' : 'logo-coloured'}`}></use>
          </svg>
        </a>
        <ul className="nav space-between-groups show-mediumup">
          {nav['main-nav'].map((navItem, index) => (
            <li key={index}>
              <a className={`ff-regular ${hasBanner ? 'co-white' : 'co-black'}`} href={navItem.link}>
                {navItem.name}
              </a>
            </li>
          ))}
          <li>
            <a className="btn" href="https://stax.onelink.me/nR0j/ussddirectory" target="_blank" rel="noreferrer">
              Get Stax
            </a>
          </li>
        </ul>
        <a onClick={toggleMobileMenu} className="hide-mediumup">
          <svg className="co-blue" width="25" height="15">
            <use href="/uploads/icon-sprite.svg#hamburger"></use>
          </svg>
        </a>
      </header>

      <div id="offcanvas-usage" ref={mobileMenuRef} className="uk-offcanvas" style={{ display: 'block' }} tabIndex="-1">
        <div className="uk-offcanvas-bar uk-offcanvas-bar-animation uk-offcanvas-slide">
          <button className="uk-offcanvas-close uk-icon uk-close" type="button" onClick={closeMobileMenu}>
            <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
              <line fill="none" stroke="#000" strokeWidth="1.1" x1="1" y1="1" x2="13" y2="13"></line>
              <line fill="none" stroke="#000" strokeWidth="1.1" x1="13" y1="1" x2="1" y2="13"></line>
            </svg>
          </button>
          <ul className="nav hide-mediumup">
            {nav['main-nav'].map((navItem, index) => (
              <li key={index}>
                <a href={navItem.link}>{navItem.name}</a>
              </li>
            ))}
            <li>
              <a className="btn" href="https://stax.onelink.me/nR0j/ussddirectory" target="_blank" rel="noreferrer">
                Get Stax
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

Header.propTypes = {
  hasBanner: PropTypes.bool,
}

Header.defaultProps = {
  hasBanner: true,
}

export default Header
