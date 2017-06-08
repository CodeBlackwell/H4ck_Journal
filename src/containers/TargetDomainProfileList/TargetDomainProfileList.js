import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import TargetDomainProfile from '../../components/TargetDomainProfile/TargetDomainProfile';
import './TargetDomainProfileList.scss'

export default class TargetDomainProfileList extends Component {

    constructor(props) {
        super(props)

    }

    _renderTargets(profiles) {
        return profiles.map((profile, index) => TargetDomainProfile(profile))
    }

    render() {
        const fakeProfile = {
            domainName: 'EvilCorp',
            ipAddresses: ['192.168.0.121'],
            imgURL: 'http://i.imgur.com/JuTHhEY.jpg',
            pipeline: {
                reconnaissance: false,
                scanning: false,
                gainingAccess: false,
                maintainingAccess: false,
                footprinting: false
            }
        };
        return (
            <div className="target-domain-profile-list">
                {this._renderTargets([
                    fakeProfile,
                    fakeProfile,
                    fakeProfile,
                    fakeProfile,
                    fakeProfile,
                    fakeProfile,
                    fakeProfile,
                    fakeProfile,
                    fakeProfile
                    ]
                )}
            </div>
        )
    }
}
//
// TargetDomainProfileList.PropTypes = {
//     profiles: PropTypes.array,
// };

//
// const mapStateToProps = function (state) {
//     //@formatter:off
//     const {
//         [TARGET_DOMAIN_LIST]: {
//             targetDomainProfiles,
//         }
//     } = state;
//     //@formatter:on
//     return {
//         targetDomainProfiles,
//     };
// };

// export default connect(mapStateToProps)(TargetDomainProfileList);