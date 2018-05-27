import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'
import BuyAndStore from '../../../components/BuyAndStore'

import * as storeActionsFromFile from '../../../actions/store'

import './style.less'

class Buy extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            isStore : false
        }
    }
    render() {
        return (
            <div>
                <BuyAndStore isStore={this.state.isStore} buyHandle={this.buyHandle.bind(this) } storeHandle={ this.storeHandle.bind(this) } />
            </div>
        )
    }

    componentDidMount() {
        // 验证是否被收房
        this.checkStoreState();

    }

    checkStoreState() {
        const id = this.props.id;
        const store = this.props.store;

        store.forEach(item =>{
            if (item.id === id) {
                // 已经收藏
                this.setState({
                    isStore : true
                })
                return false;
            }
        })



    }

    /**
     * 检查是否登陆
     */
    loginCheck() {
        const id = this.props.id
        const userinfo = this.props.userinfo
        if (!userinfo.username) {
            // 跳转登陆界面，要传入目标router，以便登陆完了自动跳回
            hashHistory.push(`/Login/${encodeURIComponent(`/detail/${id}`)}`);
            return false;
        }
        return true;
    }


    /**
     * 购买事件
     */
    buyHandle() {
        // 验证登陆，为登陆则return
        const loginFlag = this.loginCheck();
        if (!loginFlag) {
            return
        }

        // 此过程为模拟购买，因此可省去复杂的购买过程

        // 跳转到用户主页
        hashHistory.push('/User');

    }

    /**
     * 收藏事件
     */
    storeHandle() {
        const loginFlag = this.loginCheck();
        if (!loginFlag) {
            return ;
        }

        const id = this.props.id
        const storeActions = this.props.storeActions
        if (this.state.isStore) {
            storeActions.rm({id : id});
        } else {
            // 未收藏
            storeActions.add({id : id});
        }

        // 修改状态
        this.setState({
            isStore: !this.state.isStore
        })

    }

}



function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
        store: state.store
    }
}

function mapDispatchToProps(dispatch) {
    return {
        storeActions: bindActionCreators(storeActionsFromFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Buy)