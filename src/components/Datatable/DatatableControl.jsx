import React from 'react';

const DatatableControl = ({addUser}) => {
        return (
            <div className="datatable__control">
                <button className="btn btn-primary" onClick={addUser}>Add</button>
            </div>
        );
}

export default DatatableControl;
