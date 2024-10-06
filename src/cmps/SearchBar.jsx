import React from 'react'

export function SearchBar() {
    return (

        <section className="search-bar-container">
            <span className='search-span'>Search</span>
            <section className="search-box">
                <input className='search-input' placeholder="Search" type="text" value=""></input>
            </section>


        </section>
    )
}
