import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../components/HomeHeader/index'
import {connect} from 'react-redux'
import Category from '../../components/Category/index'
import Ad from './subpage/Ad'
import List from './subpage/List'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }
    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.userInfo.cityName}/>
                <Category/>
                <div style={{height:'15px'}}></div>
                <Ad/>
                <div style={{height:'15px'}}></div>
                <List cityName={this.props.userInfo.cityName}/>
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

