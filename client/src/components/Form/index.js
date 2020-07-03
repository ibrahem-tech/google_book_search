import React from "react";

function Form(props){
    return(
        <di className="container">
            <form>
                <div className= "form-group">
                    <label htmlFor="search"><h3>Search for and save Books of intrest</h3></label>
                    <input
                       onChange={props.handleInputChange}
                       value={props.search}
                       name="search"
                       type="text"
                       className="form-control"
                       placeholder="Search a Book"
                       id="search">
                       </input>
                       <button onClick={props.handleFormSubmit} className="btn btn-dark mt-3 mb-5">
        Search
        </button>

                </div>
            </form>
        </di>
    );
}

export default Form;
