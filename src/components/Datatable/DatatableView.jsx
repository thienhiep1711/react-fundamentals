import React from 'react';

const DatatableView = ({popupData, handleChange, handleSubmit}) => {
    const data = popupData[0];
        return (
            <div className="popup__wrap__content" style={{minWidth: '500px'}}>
                <form onSubmit={handleSubmit}>
                <div className="popup__title">
                    <div className="popup__title__content">
                        Edit: {data.name.firstName} {data.name.lastName}
                    </div>
                </div>
                <div className="popup__content">
                    <div className="form-group row">
                        <label htmlFor="colFormLabelSm" className="col-sm-3 col-form-label">First Name</label>
                        <div className="col-sm-9">
                        <input type="text" className="form-control" defaultValue={data.name.firstName} id="colFormLabelSm" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="colFormLabelSm" className="col-sm-3 col-form-label">Last Name</label>
                        <div className="col-sm-9">
                        <input type="text" className="form-control" defaultValue={data.name.lastName}  id="colFormLabelSm" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="colFormLabelSm" className="col-sm-3 col-form-label">Email</label>
                        <div className="col-sm-9">
                        <input type="text" className="form-control" id="colFormLabelSm" defaultValue={data.emailAddress}  />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="colFormLabelSm" className="col-sm-3 col-form-label"  >Phone</label>
                        <div className="col-sm-9">
                        <input type="text" className="form-control" id="colFormLabelSm" defaultValue={data.phoneNumber}  />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="colFormLabelSm" className="col-sm-3 col-form-label" >Address</label>
                        <div className="col-sm-9">
                        <input type="text" className="form-control" id="colFormLabelSm" defaultValue={data.address} />
                        </div>
                    </div>
                </div>
                <div className="popup__control">
                    <button type="button" className="btn btn-sm btn-primary">Cập nhật</button>
                    <button className="btn btn-sm btn-default">Hủy</button>
                </div>
            </form>
            </div>
        );
}

export default DatatableView;
