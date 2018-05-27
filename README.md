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

***
> A - 新建了search里面的一个接口，用来获取搜索结果的一个方法暴露出来，给木偶组件调用
>
> M - mock模拟数据更改
> 
> A - 新增了搜索界面列表的木偶组件，跟首页猜我喜欢的功能类似
  M-在Search里面添加新增的list
>  
> A - fetch新增2个接口，用来获取json数据
>
> A - 在components里面新增了DetailInfo用来显示数据的，样式还没写
>
>  A - 在containers里面的木偶组件Detail新增subpage Info.jsx用于获取数据再传到component里面
>
>  M - 在里面新增了<Info/>标签
> 
> A - 新增评论的小星星显示
>
> M - 修改详细信息的显示，并且加上样式

***

> A - 新建了用户点评的Item，即用户点评列表中的一项，同时还加了样式
> 
> A - 新增用户评论列表组件，在商户详细下面使用
>
> A - 新增点评信息的木偶组件，用于获取评论的信息，再传到commentList组件去使用
>
> M - 在商户详细上面加入了用户点评的木偶组件

***

#### 2018-05-27

> M - 新增了Login的路由，连接到containers里面的Login组件
>
> A - 新增了containers里面的Login组件，用来操作redux和进行登陆判断，调用component里面的Login组件
>
> A - 新增了登陆界面的代码和样式
>
> M - 新增了Link路由
>
> A - 新增了Redux的一个过程，用来存储收藏
>
> A - 修改了Header里面的内容，新增一个backRouter的参数，登陆之后可以返回主页
>
> M - 在用户首页里面新增redux和react绑定，在<div>里面加入UserInfo组件和Header组件

***

#### 2018-05-27
> A - 新增获取订单列表信息的fetch方法
>
> A - 在containers里面的User傻瓜组件里面新增了一个子页面OrderList，用来获取fetch里面的信息
> 
> M - 在User主界面里面新增一个订单信息的界面
> 
> A - 新增了订单列表的组件和其中每个订单的子组件，接受数据并且写好好样式
>
> M - 最后使用了post方法，项目完成