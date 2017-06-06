import React, { Component } from 'react'
import './TargetDomainProfile.scss'


export default class TargetDomainProfile extends Component {

    /*
    this.props = targetDomainProfile = {
        name: '',
        ipAddresses: [],
        imgURL: '',
        
    }
     */

    constructor (props){
        super(props);
        this.state = {
            steps: {
                reconnaissance: false,
                scanning: false,
                gainingAccess: false,
                maintainingAccess: false,
                footprinting: false
            }
        }
    }

    render() {
        return (
            <div className="target-domain-profile">
                <header className="target-domain-profile-name">
                    Domain Name
                </header>
                <img className="target-domain-profile-logo" src="http://i.imgur.com/JuTHhEY.jpg"/>
                <ol className="target-domain-profile-pipeline">
                    <li className="target-domain-profile-pipeline-step">Reconnaissance</li>
                    <li className="target-domain-profile-pipeline-step">Scanning</li>
                    <li className="target-domain-profile-pipeline-step">Gaining Access</li>
                    <li className="target-domain-profile-pipeline-step">Maintaining Access</li>
                    <li className="target-domain-profile-pipeline-step">Footprinting</li>
                </ol>
                <div>
                    <ul className="target-domain-profile-ip-list">
                        <li className="target-domain-profile-ip-address"></li>
                    </ul>
                </div>

            </div>
        )
    }
}
