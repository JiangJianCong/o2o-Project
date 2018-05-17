import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        return (
            <h1>{data.title}</h1>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
export default Item