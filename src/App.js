import React, { useRef } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Menu from './components/Menu/Menu';
import useHover from './hooks/useHover';

const App = () => {
  const ref = useRef();
  const hovering = useHover(ref)
  return (
    <div className="app">
      <div ref={ref} className='menu__hover'>
        <Menu hovering={hovering}/>
      </div>
      <div  style={{width: hovering === true ? '80%' : '93%'}} className='section'>
        <Header hovering={hovering}/>
        <Main />
      </div>
    </div>
  )
}

export default App;
