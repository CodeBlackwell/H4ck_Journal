import React from 'react'


export default TargetDomainProfile = ({ name, knownIpAddresses }) => (
    <div className="target-domain-profile">
        <header className="target-domain-profile-name">
            Domain Name
        </header>
        <img className="target-domain-profile-Logo" src="http://imgur.com/gallery/S0p8C" />
        <ul className="target-domain-profile-ip-list">
            <li className="target-domain-profile-ip-address">
                
            </li>
        </ul>
        <ol className="target-domain-profile-pipeline">
            <li className="target-domain-profile-pipeline-step">Reconaissance</li>
            <li className="target-domain-profile-pipeline-step">Scanning</li>
            <li className="target-domain-profile-pipeline-step">Gaining Access</li>
            <li className="target-domain-profile-pipeline-step">Maintaining Access</li>
            <li className="target-domain-profile-pipeline-step">Cover Tracks</li>
        </ol>
    </div>
);