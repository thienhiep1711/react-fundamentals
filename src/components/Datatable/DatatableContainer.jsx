import React from 'react';
import DatatableBox from './DatatableBox';
import DatatableControl from './DatatableControl';

const DatatableContainer = ({users, editUser, deleteUser, addUser}) => {
        return (
            <div>
                <DatatableControl addUser={addUser}/>
                <DatatableBox
                    users={users}
                    editUser={editUser}
                    deleteUser={deleteUser}
                />
            </div>
        );
    }
export default DatatableContainer;
