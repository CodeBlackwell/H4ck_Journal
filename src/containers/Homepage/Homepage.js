import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchGreeting } from '../../actions/simple_actions'
import { KEY as SIMPLE_KEY } from '../../constants/simple_constants'


class Homepage extends Component {
    componentDidMount() {
        setTimeout(() =>(
            this.props.dispatch(fetchGreeting())
        ), 5000)
    }

    render () {
        const { greeting } = this.props;
        return (
            <div className="homepage">
                {greeting}
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
