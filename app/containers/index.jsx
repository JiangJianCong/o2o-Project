import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LocalStore from '../util/localStore'
import {CITYNAME} from "../config/localStoreKey";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionFromOtherFile from '../actions/userinfo'

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone : false
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.initDone ? this.props.children : <div>加载中。。。</div>
                }
            </div>
        )
    }

    componentDidMount(){

        //从localstorerage里面获取城市
        let cityName = LocalStore.getItem(CITYNAME)
        if (cityName == null) {
            cityName = '北京'
        }


        //将城市状态放到 redux 当中
        this.props.userInfoAction.update({
            cityName : cityName
        })

        this.setState({
            initDone:true
        })
    }
}


function mapStateToProps(State) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {

        userInfoAction : bindActionCreators(userInfoActionFromOtherFile,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
