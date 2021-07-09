import React from "react";
import "./style.css"

function Search(props) {
    return (
      <form>
          <div className="form-group">
              <input
                  type="text"
                  onChange={props.handleInputChange}
                  value={props.search}
                  name="search"
                  className="form-control"
                  placeholder="Search by first or last name"
                  id="search"
              />
          </div>

          <div class="container">
              <div class="center">
                  <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3" id="search">Search</button>
            </div>
        </div>
      </form>
  );
}

export default Search;