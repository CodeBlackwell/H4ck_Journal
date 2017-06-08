import React, {Component} from 'react'
import './TargetDomainProfile.scss'


export default ({
                    domainName,
                    ipAddresses,
                    imgURL,
                    pipeline
                }, key) => {


    return (
        <div className="target-domain-profile" key={ key }>
            <header className="target-domain-profile-name">
                { domainName }
            </header>
            <img className="target-domain-profile-logo" src={ imgURL }/>
            <ol className="target-domain-profile-pipeline">
                <li className="target-domain-profile-pipeline-step">Reconnaissance: { pipeline.reconnaissance + ''}</li>
                <li className="target-domain-profile-pipeline-step">Scanning: { pipeline.scanning + ''}</li>
                <li className="target-domain-profile-pipeline-step">Gaining Access: { pipeline.gainingAccess + '' }</li>
                <li className="target-domain-profile-pipeline-step">Maintaining Access: { pipeline.maintainingAccess + '' }</li>
                <li className="target-domain-profile-pipeline-step">Footprinting: { pipeline.footprinting + ''}</li>
            </ol>
            <div>
                <ul className="target-domain-profile-ip-list">
                    <li className="target-domain-profile-ip-address">
                        Number of Ip Addresses: { ipAddresses.length }
                    </li>
                </ul>
            </div>

        </div>
    )
}
