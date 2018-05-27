import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import Header from '../../components/Header'
import LoginComponent from '../../components/Login'

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            checking : true
        }

    }
    render() {
        return (
            <div>
                <Header title={`登陆`}/>
                {
                    this.state.checking
                    ? <div>{/*等待中*/}</div>
                    : <LoginComponent loginHandle={this.loginHandle.bind(this)}/>

                }
            </div>
        )
    }

    componentDidMount() {
        this.doCheck();
    }


    doCheck() {
        const userinfo = this.props.userinfo
        if (userinfo.username) {
            // 已经登陆，跳转到主界面
            this.goUserPage();
        } else {
            // 未登陆
            this.setState({
                checking : false
            })
        }
    }

    loginHandle(username) {
        // 保存用户名
        const actions = this.props.userInfoActions;
        let userinfo = this.props.userinfo;
        userinfo.username = username;
        actions.update(userinfo)

        const params = this.props.params;
        const router = params.router;
        if (router) {
            // 跳转到指定的页面
            hashHistory.push(router)
        } else {
            // 跳转用户主页
            this.goUserPage();
        }

    }

    goUserPage() {
        hashHistory.push('/User');
    }
}


// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)