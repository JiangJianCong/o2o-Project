import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import { Link, hashHistory } from 'react-router'


class HoneHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            pwd : ''
        }
    }

    render() {
        return (
            <div id='home-header' className='clear-fix'>
                <div className='home-header-left float-left'>
                    <Link to ="/city">
                        <span>{this.props.cityName}</span>&nbsp;
                        <i className="icon-angle-down"></i>
                    </Link>
                </div>

                <div className='home-header-right float-right'>
                    <i className='icon-user'>
                    </i>
                </div>
                <div className='home-header-middle'>
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <input
                            className='search-value'
                            type="text"
                            placeholder='请输入关键字'
                            onChange={this.changeHandle.bind(this)}
                            onKeyUp={this.keyUpHandle.bind(this)}
                            value={ this.state.pwd }

                        />
                    </div>
                </div>
            </div>
        )
    }

    /**
     * 实时更新state并且获取input的值
     * @param e
     */
    changeHandle(e) {
        var val = e.target.value
        this.setState({
            pwd : val
        })
    }

    /**
     * 键盘上抬的时候判断是否回车搜索
     * @param e
     */
    keyUpHandle(e) {
        if (e.keyCode !== 13) {
            return
        }
        hashHistory.push('/search/all/' + encodeURIComponent(this.state.pwd))

    }
}

// export default NotFound
module.exports = HoneHeader