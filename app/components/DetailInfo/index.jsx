import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class DetailInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data;
        console.log(data)
        return (
            <div>
                <img src={ data.img } style={{width : '100px'}}/>
                <h1>{data.title}</h1>
                <p>{data.star}</p>
                <p>{data.price}</p>
                <p>{data.subTitle}</p>
                <p dangerouslySetInnerHTML={{__html:data.desc}}>{}</p>


            </div>
        )
    }
}

export default DetailInfo