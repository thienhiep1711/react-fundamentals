import React from 'react';

const DatatableItem = ({item, editUser, deleteUser}) => {
        return (
            <tr>
                <th scope="row">{item.id}</th>
                <td>{item.name.firstName}</td>
                <td>{item.name.lastName}</td>
                <td>{item.emailAddress}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.address}</td>
                <td className="text-right">
                    <button className="btn btn-sm btn-success" onClick={() => {editUser(item.id)}}>Edit</button>
                    <button className="btn btn-sm btn-danger" onClick={() => {deleteUser(item.id, item.name.lastName)}}>Delete</button>
                </td>
            </tr>
        );
}

export default DatatableItem;
