import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class HomeAd extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        return (
            <div>
                <h1>超级特惠</h1>
                <div>
                    {data.map((item,index) => {
                        return <div key={index}>
                            {index}
                        </div>
                    })}
                </div>
            </div>

        )

    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
export default HomeAd