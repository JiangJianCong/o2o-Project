import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import {getListData} from "../../../fetch/home/home";
import ListComponent from '../../../components/List/'

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state ={
            data:[],
            hasMore : false
        }
    }
    render() {
        return (
            <div>
                <h2 className="home-list-title">猜你喜欢</h2>
                {
                    this.state.data.length
                    ? <ListComponent data={this.state.data}/>
                    : <div>Loading...</div>
                }
                {/*列表*/}
                {/*loadmore*/}
            </div>
        )
    }

    componentDidMount(){
        //获取首页数据
        this.loadFirstPageData()
    }

    //获取首评数据
    loadFirstPageData(){
        const cityName = this.props.cityName
        const result = getListData(cityName,0)
        this.resultHandle(result)
    }

    //数据处理
    resultHandle(result) {
        result.then(res=>{
            return res.json()
        }).then(json=>{

            const hasMore = json.hasMore
            const data = json.data
            this.setState ({
                data : data,
                hasMore : hasMore
            })

        })
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
export default List