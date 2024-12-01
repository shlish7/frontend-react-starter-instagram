import { useEffect, useState } from 'react'
import MagnifyingGlassIcon from '../assets/svg/magnifying-glass.svg?react';
import RemoveSearchIcon from '../assets/svg/remove-search-icon.svg?react';
import { useSelector } from 'react-redux';
import { loadUsers } from '../store/user.actions';
import ImageAvatars from './ImageAvatars';
import { userService } from '../services/user.service.remote';


export function SearchBar() {

    const [displayIcon, setDisplayIcon] = useState(true)
    const [searchTxt, setSearchTxt] = useState('')
    const users = useSelector(storeState => storeState.userModule.users)
    const [ filterBy, setFilterBy ] = useState(userService.getDefaultFilter())
    const [ filterToEdit, setFilterToEdit ] = useState(structuredClone(filterBy))

    useEffect(() => {
        setFilterBy(filterToEdit)
    }, [filterToEdit])

    useEffect(() => {
        loadUsers(filterBy)
        console.log('filtered users', users);
    }, [filterBy]);

    function handleSearchBarClick(ev) {
        ev.stopPropagation()
    }


    // function onHandleChange({ target }) {
    //     const { value } = target
    //     setSearchTxt(value)
    // }

    function onHandleChange({target}) {
        const type = target.type
        const field = target.name
        console.log('target',target);
        console.log('type', type);
        console.log('field', field);

        let value

        switch (type) {
            case 'text':
  
        }
    setSearchTxt(value)

        setFilterToEdit({ ...filterToEdit, [field]: value })
    }

    function onClearSearch() {
        setFilterToEdit({ ...filterToEdit, txt: '' })
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
            <section className="seacrh-bar-list">
                <ul className='follows-ul-modal'>
                    {users.map((item, idx) => {
                        return <li key={idx} className='follows-list'>
                            <section className="avatar-and-user-name">
                                <ImageAvatars img={item.imgUrl} />
                                <section className="followers">
                                    <p className='follow-list-user-name'>{item.username}</p>
                                    <p className='follow-list-full-name'>{item.fullname}</p>
                                </section>
                            </section>
                        </li>
                    })}
                </ul>
            </section>
        </section>
    )
}
