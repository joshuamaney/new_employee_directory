import React from "react";
import "./style.css"

function Search(props) {
  return (
    <form>
      <div className="form-group">
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search by first or last name"
          id="search"/>
        </div>
        <div class="container">
            <div class="center">
                <button>Search</button>
            </div>
        </div>
    </form>
  );
}

export default Search;