import React, {Component} from "react";
import "./style.css";
import TableInfo from "../TableInfo/TableInfo";
import Search from "../Search/search";
import API from "../../utilities/API";

class Table extends Component {

    state = {
        users: [],
        selectedUsers: [],
        search: "",
        order: true
        
    };

    componentDidMount() {
        API.getUsers()
            .then(res => this.setState({ users: res.data.results, selectedUsers: res.data.results }))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    }
    
    handleSubmit = event => {
        event.preventDefault();
        const searchResult = this.state.search;
        let searchedUsers = [];

        this.state.users.map(user => {
            if (user.name.first.toUpperCase().includes(searchResult.toUpperCase()) || user.name.last.toUpperCase().includes(searchResult.toUpperCase())) {
                searchedUsers.push(user);
            }
            this.setState({selectedUsers: searchedUsers});
            return searchedUsers;
        });

        
        
    }

    render() {
        return (
            <>
            <Search 
                handleInputChange={this.handleInputChange} 
                handleSubmit={this.handleSubmit} 
                search={this.state.search} />
                <table className="table">
                    <thead>
                        <tr className="text-center">
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>E-mail</th>
                            <th>DOB</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.selectedUsers.map(user => {
                            return <TableInfo image={user.picture.thumbnail} name={user.name} phone={user.phone} email={user.email} dob={user.dob.date} login={user.login}/>
                        })}
                    </tbody>
                </table>
            </>
        );
    }
}


export default Table;