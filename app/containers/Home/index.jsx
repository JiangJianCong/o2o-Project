import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../components/homeHeader/index'
import {connect} from 'react-redux'

import Swipe from '../../components/swipe/swipe'


class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }
    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.userInfo.cityName}/>
                <Swipe/>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userInfo : state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

