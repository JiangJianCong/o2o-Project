import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import {getListData} from "../../../fetch/home/home";
import ListComponent from '../../../components/List/'
import LoadMore from '../../../components/LoadMore'

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state ={
            data:[],//存储列表信息
            hasMore : false, //后段返回的 是否还有下一页
            isLoadingMore : false,//记录当前状态是'加载中'还是"点击加载更多"
            page : 1 , //下一页的页码

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

                {
                    this.state.hasMore
                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)} />
                    : <div></div>
                }
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

    //加载更多
    loadMoreData() {
        //点击，记录状态
        this.setState({
            isLoadingMore:true

        })

        const cityName = this.props.cityName
        const page = this.state.page    //下一页的页码
        const result = getListData(cityName,page)
        this.resultHandle(result)

        //增加page 的计数
        this.setState({
            page : page + 1 ,
            isLoadingMore:false

        })

    }

    //数据处理
    resultHandle(result) {
        result.then(res=>{
            return res.json()
        }).then(json=>{

            const hasMore = json.hasMore
            const data = json.data
            this.setState ({

                hasMore : hasMore,
                data: this.state.data.concat(data)

            })

        })
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
export default List