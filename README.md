# react-simple-o2o-demo

> 代码尚在开发中
>
> 此项目为类似大众点评的webapp的前端
>
> 项目使用React+redux框架进行

***

#### 新增了轮播图的代码和样式
> 由于新增的图片过多，所以每个分类都选取了相同的图片，节约时间

***

#### 获取广告数据
> A-新增了mock模拟数据，具体看代码
> A-新增了广告的subpage的组建，用于获取数据
> A-fetch/home里面新增了home.js用fetch获取请求，获取数据。
> A-在subpage里面新增Ad.jsx，最后在componentDidMount加载完之后把数据传给这个状态
> M-修改了广告模块的html和css

***

#### 传送广告数据到木偶组建
> M-新增mock数据，新增的是首页推荐,
> M-修改了获取主页的fetch数据方法,
> A-新增样式文件来控制Home下面的其他木偶组建样式,
> A-新增List.jsx获取数据的木偶组建

***

#### 木偶组建到组件的数据传输
> M-修改了List木偶组建，根据判断把数据传给ListComponent
> 
> A-新增了List文件夹下获取数据的Index组件，包括一个数组
>
> A-新增其样式文件
>
>  A-新增每个item里面的个内容，也就是显示出来的细节
>
>  A-新增其样式文件

***

#### 修改List和Item的样式
> M-修改List和Item的html代码和css代码，不是学习的重点

***

> M-木偶组件里面的List更新，新增了page页码，新增isLoadingMore这个状态来判断是否加载更多
>

***
> M-新增功能，新增一个下滚刷新的函数，使用节流（性能问题），还有就是获取了最下面加载更多的的dom节点。判断是否暴露在可视范围之内
>

***
> A-新增了一个Header组件，用于返回上一页
>
> A-新增显示redux里面城市的功能，在木偶组件已经获取数据，传向新建的CurrentCity即可
***

> A-新增了CityList的组件
>
> M-新增使用修改redux，把更换后的城市名放在localStorage里面，最后引入了react-router的hashHistory，使用hashHistory.push('/')来会到首页
>
***
> M-在轮播图内新增了Link标签，使其可以到达自己的的目的路由，同时，路由还包括了可选选项
>
> M-在头部的组件中，在state新增pwd，这是用来获取input的内容的，也就是监控input标签的变化，然后保存在state里，使用的时候可以直接从state里面读取，这样就避免每次读数据都操作一次dom，并且在input标签里面加入 value = {this.state.pwd} 来显示input的内容。
>
> A-新增了SearchInput组件，分离HomeHeader里面的input因为searchHeader也会使用到input，所以就分离出来，同样使用约束性来控制input，在HomeHeader里面传入一个value和一个enterHandle的方法来进行操作
>
> M-import了新建的SearchInput组件，把css文件放在import的最下面，规范编程。删除未分离时对input约束的代码。原来的input用SearchInput来代替
> 
> A-新建了一个SearchHeader的组件，是在搜索页里面的input标签，跟HomeHeader比较相似，不同的是需要一个默认的keyword，在containers/Search里面使用路由里面的params来读取url的信息，传到相应的组件去