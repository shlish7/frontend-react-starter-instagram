import { useEffect, useState } from 'react'
import MagnifyingGlassIcon from '../assets/svg/magnifying-glass.svg?react';
import RemoveSearchIcon from '../assets/svg/remove-search-icon.svg?react';
import { useSelector } from 'react-redux';
import { loadUsers } from '../store/user.actions';


export function SearchBar() {
    
    const [displayIcon, setDisplayIcon] = useState(true)
    const [searchTxt, setSearchTxt] = useState('')
    const users = useSelector(storeState => storeState.userModule.users)


    useEffect(() => {
        loadUsers()
      }, []);

    function handleSearchBarClick(ev) {
        ev.stopPropagation()
    }


    function onHandleChange({ target }) {
        const { value } = target
        setSearchTxt(value)
    }


    function onFocus() {
        setDisplayIcon(prev => !prev)
    }
    function onBlur() {
        setDisplayIcon(prev => !prev)
    }

    function onClearSearch(ev) {
        setSearchTxt('')
    }

    return (
        <section className="search-bar-container" onClick={handleSearchBarClick}>
            <span className='search-span'>Search</span>
            {/* <section className="search-box"> */}
            {/* <input className='search-input' placeholder="Search" type="text" value={inputValue} onChange={onSearch}></input> */}
            <section className="search-follows-section">
                {displayIcon && searchTxt === '' && <MagnifyingGlassIcon className='magnifying-glass-icon' />}
                <input type="text" className="input-search-follows"
                    placeholder={displayIcon ? '    Search' : 'Search'}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={onHandleChange}
                    value={searchTxt}
                />
                {searchTxt !== '' && <RemoveSearchIcon className='remove-search' onClick={onClearSearch} />}
                {/* </section> */}
            </section>
        </section>
    )
}
