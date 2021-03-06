import React, { useEffect, useState } from 'react';
import './Header.css'
import HeaderOptions from './HeaderOptions';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';


function Header({search, setSearch}) {
    const [{basket, user}] = useStateValue();
    const [isOpen, setIsOpen] = useState(false)
    
    
    const login = () => {
        if(user){
            auth.signOut();
        }  
    }
  return (
  <div className='header'>
      <div className="header_container">
          <Link to ='/'>
            <img className='header_image'
                src='data:image/jpeg;base64,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' 
                alt=''
            />
          </Link>
          
          <div className="search_box">
              <input 
                value={search} 
                type='text' 
                onChange={e => setSearch(e.target.value)}
            />
              <SearchIcon className='search_icon'/>
          </div>
      </div>
      <div className="header_right">
            <Link to={!user && '/login'}>
                <div onClick={login} className="header_options">
                     <HeaderOptions  header='Hello' email={user?.email} title={!user ? 'Sign In' : 'Sign Out' }/>
                </div>
                
            </Link>
            <div   className="return">
                <Link to='/'>
                    <HeaderOptions header='Returns' title='& Orders' /> 
                </Link>
                
            </div>
            
            <Link to='/'>
                <HeaderOptions header='Your' title='Subscription' /> 
            </Link>
            <Link to='/checkout'>
            <div className="headerOption_basket">
                    <ShoppingBasketIcon className='basket'/>
                    <span>{basket?.length}</span>
            </div>
            </Link>
            
                             
        </div>
  </div>
  );
}

export default Header;
