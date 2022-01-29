import React from 'react';
import './Menu.scss'

const Menu = ({hovering}) => {
  return (
<menu className='menu'>
    <div style={{width: hovering === true ? '20%' : '10%'}} className='menu__inner'>
        <div className='menu__content'>  
          <div className='menu__content-block'>
                <div className='menu__logo'>
                    <a className='menu__logo-item'>LOGO</a>
                    <div className='menu__logo-name'>
                        <div className='menu__transition'>NAME COMPANY</div>
                    </div>
                </div>
            <ul className='menu__items'>
                <li className='menu__item'>
                    <div className='menu__item-logo'></div>
                    <div  className='menu__item-name'><div className='menu__transition'>Главная</div></div>
                </li>
                <li className='menu__item'>
                    <div className='menu__item-logo'></div>
                    <div className='menu__item-name'><div className='menu__transition'>Клиенты</div></div>
                </li>
                <li className='menu__item'>
                    <div className='menu__item-logo'></div>
                    <div className='menu__item-name'><div className='menu__transition'>Сотрудники</div></div>
                </li>
                <li className='menu__item'>
                    <div className='menu__item-logo'></div>
                    <div className='menu__item-name'><div className='menu__transition'>Аналитика</div></div>
                </li>
            </ul>
          </div> 
        </div>  
    </div>
</menu>
  )
}

export default Menu;
