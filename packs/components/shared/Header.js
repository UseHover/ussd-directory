import React from 'react'
import nav from '../../../_data/nav.yml'
import PropTypes from 'prop-types'

const Header = ({ hasBanner }) => {
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
        <a href="#offcanvas-usage" className="hide-mediumup">
          <svg className="co-blue" width="25" height="15">
            <use href="/uploads/icon-sprite.svg#hamburger"></use>
          </svg>
        </a>
      </header>

      <div id="offcanvas-usage">
        <div className="uk-offcanvas-bar">
          <button className="uk-offcanvas-close" type="button"></button>
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
