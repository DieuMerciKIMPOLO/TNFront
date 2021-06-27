import React, { useState } from 'react';
import axios from 'axios';

export function SearchForm(){
    const [state, setState] = useState({});
    const  onSubmit =(e)=>{
        e.preventDefault()
        console.log(state)

        const url_spider ="http://localhost:8000/api/scan/spider/"
        const url_ajaxspider="http://localhost:8000/api/scan/ajaxspider/"

        if( state.type==="spider"){
            axios.post(url_spider, {url:state.url})
            .then(response => console.log(response));
        }else{
            axios.post(url_ajaxspider, {url:state.url})
            .then(response => console.log(response));
        }

        return (

            alert("Hello world!!!!")
        )
    }
    const handleOnchange = (event)=>{
        setState({...state, [event.target.name]:event.target.value})

    }
    return(
        
            <form className="d-flex" >
            <div className="container-fluid row">
               <input onChange={(e)=>handleOnchange(e)} value={state.url} className="form-control me-8 col-7"  name="url" type="search" placeholder="Search"  aria-label="Search"/>
               <select className="form-select me-2 col-3" aria-label="Default select example" name="type" onChange={(e)=>handleOnchange(e)}>
                    <option>Type de scan</option>
                    <option value="spider">Spider</option>
                    <option value="ajaxspider">Ajaxspider</option>
                </select>
               <button onClick={(e)=>onSubmit(e)} className="btn btn-outline-success me-2 col-2" type="submit">Scan</button>
               </div>
            </form>
    )
}