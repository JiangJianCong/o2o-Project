import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link, hashHistory } from 'react-router'
import SearchInput from '../SearchInput'

import './style.less'

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
                        &nbsp;
                        <SearchInput value='' enterHandle={this.enterHandler.bind(this)}/>

                    </div>
                </div>
            </div>
        )
    }

    /**
     * 点击回车的确认键
     * @param value
     */
    enterHandler(value) {
        hashHistory.push('/search/all/' + encodeURIComponent(value))
    }



}

// export default NotFound
module.exports = HoneHeader