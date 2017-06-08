import React, { Component } from 'react'
import { connect } from 'react-redux'

// import { fetchGreeting } from '../../actions/simple_actions'
import { KEY as SIMPLE_KEY } from '../../constants/simple_constants'

import TargetDomainProfileList from '../../containers/TargetDomainProfileList/TargetDomainProfileList'
import './Homepage.scss'


class Homepage extends Component {
    // componentDidMount() {
    //     setTimeout(() =>(
    //         this.props.dispatch(fetchGreeting())
    //     ), 5000)
    // }

    render () {
        const { greeting } = this.props;
        return (
            <div className="homepage">
                { /* greeting */}
                <h1 className="homepage-header">H4ck_M8</h1>
                <h3 className="homepage-header">Who shall we hack today m8?</h3>
                <div className="target-display">
                    <TargetDomainProfileList />
                </div>
            </div>
        );
    }
}

const mapStateToProps = function (state) {
    //@formatter:off
    const {
        [SIMPLE_KEY]: {
            greeting,
        }
    } = state;
    //@formatter:on
    return {
        greeting,
    };
};

export default connect(mapStateToProps)(Homepage);
