import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getAdData } from "../../../fetch/home/home";

class Ad extends React.Component {
    constructor(props,context) {
        super(props,context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
        this.state = {
            data : []
        }
    }

    render() {
        return (
            <div>


            </div>
        )
    }

    componentDidMount() {
        const result = getAdData()
        result.then((res)=> {
            return res.json()
        }).then ((json)=>{
            const data = json
            this.setState({
                data:data
            })
        })
    }
}

export default Ad