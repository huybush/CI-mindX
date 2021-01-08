import '../assets/css/searchbar.css'
// import{component} fromt 'react'
export function SearchBar(props) {


    return (
        <input className="searchbar-area" onChange={props.onChange} type="text" placeholder="Enter your emoji..." />
    )

}