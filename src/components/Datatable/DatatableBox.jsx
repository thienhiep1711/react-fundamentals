import React from 'react';
import DatatableItem from './DatatableItem';
const  DatatableBox = ({users , editUser, deleteUser}) =>  {
    return (
        <div className="datatable__content">
            <table className="table table-striped table-dark">
            <thead className="thead-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
                <th scope="col">Option</th>
                </tr>
            </thead>
            <tbody>
                 {
                     users && users.map((user, index) => (
                        <DatatableItem
                            item={user} key={`user_${index}`}
                            editUser={editUser}
                            deleteUser={deleteUser}
                        />
                     ))
                 }
            </tbody>
            </table>
        </div>
    );
}

export default DatatableBox;
