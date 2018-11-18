import React, { Component } from 'react';
import PageTitle from '../components/Layout/PageTitle';
import DatatableContainer from '../components/Datatable/DatatableContainer';
import users from '../service/userApis';
import {toast, ToastContainer} from 'react-toastify';
import PopupContainer from '../components/Popup/PopupContainer';
import DatatableView from '../components/Datatable/DatatableView';
import 'react-toastify/dist/ReactToastify.css';

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: users,
            isOpenPopup: false,
            selected: [],
        }

        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.phoneNumber = React.createRef();
        this.address = React.createRef();
    }



    addUser() {
        console.log(`Add`);
    }

    editUser(id) {
        console.log(`Edit ${id}`);
        let matches = users.filter(user => user.id === id);
        this.setState({
            isOpenPopup: true,
            selected: matches,
        })
    }

    deleteUser(id, name) {
        console.log(id);
        this.setState(prevState => {
            const users = prevState.users.filter(user => user.id !== id);
            return {
                users
            };
        })
        toast.error(`Deleted: ${name}`);
    }

    handleChange(propertyName, event) {
    }

    handleSubmit(event, propertyName) {
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="mainWrap">
                <PageTitle titlePage="Datatable"/>
                <div className="mainWrap__content">
                    <div className="container">
                        <DatatableContainer
                            users={this.state.users}
                            editUser={this.editUser}
                            deleteUser={this.deleteUser}
                            addUser={this.addUser}
                        />
                    </div>
                </div>
                <ToastContainer />
                <PopupContainer showPopup={this.state.isOpenPopup} content={ <DatatableView popupData={this.state.selected} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />} />
                </div>
            </div>
        );
    }
}

export default Table;
