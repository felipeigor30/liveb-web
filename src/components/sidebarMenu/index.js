import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { SidebarData } from './sidebarData'
import { IconContext } from 'react-icons'
export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        {/* <aside className="bg-menu col-md-2 col-xs-12 bg-dark">
        <div className="logo">
          <figure style={{ display: 'flex', flexFlow: 'column' }}>
            <a href="/dashboard">
              <img src="https://www.livebinvestimentos.com.br/wp-content/uploads/2020/08/liveb_investimentos@2x.png" alt="liveb investimentos" className="logo-liveb mt-3" />
            </a>
            <div class="text-center" style={{ fontSize: '0.8rem', marginTop: '-8px', alignSelf: 'flex-start', letterSpacing: '0.5px', color: 'rgb(255, 255, 255)' }}>LIVEB</div>
          </figure>
        </div>
        <div className="box-menu">
          <span className="titleMenu">
            <a className="anchor" href="/dashboard">Dashboard</a>
          </span>
          <span className="titleMenu">
            <a className="anchor" href="/profile">
              Perfil
            </a>
          </span>
          <span className="titleMenu">
            <a className="anchor" href="/plan">
              Escolher Plano
            </a>
          </span>
          <span className="titleMenu">
            <a className="anchor" href="/shares">
              Comprar Cotas
            </a>
          </span>
          <span className="titleMenu">
            <a className="anchor" href="/">
              Meu Contrato
            </a>
          </span>
          <span className="titleMenu">
            <a className="anchor" href="/">
              Suporte
            </a>
          </span>
          <hr />
        </div>
      </aside> */}
        <div className="navbar-header fixed-top" style={{ zIndex: '9998' }}>
          <Link to="#" className="menu-bars">
            <FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} style={{ zIndex: '9999' }}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}
