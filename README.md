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
