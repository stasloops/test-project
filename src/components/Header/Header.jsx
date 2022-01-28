import React, { useState } from 'react';
import './Header.scss'
import Logo from '../../logo.svg'

const Header = ({hovering}) => {
  const [toggle, setToggle] = useState(false);
  const toggleFilter = () => {
    setToggle(!toggle)
  }
  const INPUT = [
    {id: 1, placeholder: 'Дата от'},
    {id: 2, placeholder: 'Дата до'},
    {id: 3, placeholder: 'Дата от'},
    {id: 4, placeholder: 'Дата до'},
    {id: 5, placeholder: 'Имя класса'},
    {id: 6, placeholder: 'Телефон'},
    {id: 7, placeholder: 'Имя Клиента'},
    {id: 8, placeholder: 'Телефон'},
  ]

  return(
   <header className='header'>
     <div style={{width: hovering === true ? '80%' : '93%'}} className='header__inner'>
        <div className='header__content'>
          <input className='header__input' placeholder='Поиск...'/>
          <div className='header__person'>
            <div className="header__person-name">Петров В.A.</div>
            <div className="header__person-logo"><span>В.А</span></div>
          </div>
        </div>
        <div className='header__filter'>
          <div className='header__filter-content'>
            <div className='header__filter-title'>
              FILTER BLOCK
            </div>
            <div onClick={toggleFilter} className='header__filter-open'><img className='header__filter-img' src={Logo}/></div>
          </div>
          <div style={{display: toggle === false ? 'none' : ''}} className='header__filter-inputs'>
            {
              INPUT.map((item) => (
                <div key={item.id} className='header__filter-item'>
                  <input className='header__filter-input' placeholder={item.placeholder}/>
                </div>
              ))
            }
          </div>
        </div>
     </div>
   </header>
  )
}

export default Header;
