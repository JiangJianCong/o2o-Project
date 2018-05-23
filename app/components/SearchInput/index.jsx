import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class SearchInput extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            value : ''
        }
    }
    render() {
        return (
                <input
                    type="text"
                    className="search-input"
                    placeholder='请输入关键字'
                    value={this.state.value}
                    onChange={this.changeHandle.bind(this)}
                    onKeyUp={this.keyUpHandler.bind(this)}
                />
        )
    }

    componentDidMount() {
        this.setState({
            value : this.props.value
        })
    }

    /**
     * 检测input变化，更新到pwd
     * @param e
     */
    changeHandle(e) {
        this.setState({
            value : e.target.value
        })
    }

    /**
     * 按键弹起的时候的处理
     * @param e
     */
    keyUpHandler(e) {
        if (e.keyCode !== 13) {
            return
        }

        this.props.enterHandle(this.state.value)

    }
}

export default SearchInput