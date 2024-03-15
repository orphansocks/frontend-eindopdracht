import React from "react";

import './AccountItem.css';


function AccountItem({id, company, firstname, lastname, address, url, phone, bank}) {

return (
    <div className="account-details">
        <h3>Information</h3>
        <h5>Your company name: <span className="account-info">{company}</span></h5>
        <h5>Contact: <span className="account-info">{firstname} {lastname}</span></h5>
        <h5>Address: <span className="account-info">{address}</span></h5>
        <h5>Website: <span className="account-info">{url}</span></h5>
        <h5>Phone: <span className="account-info">{phone}</span></h5>
        <h5>Bank account: <span className="account-info">{bank}</span></h5>
    </div>
)

}

export default AccountItem;