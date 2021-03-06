
import asyncComponent from '../utils/asyncComponent.js';
// export const nav=[

//     {id:1,name:'填单类卡片',exact:true,path:'/typein',component:asyncComponent(()=>import('../pages/TypeInPage'))},
//     {id:2,name:'财务指标卡片',exact:true,path:'/numbercardconfig',component:asyncComponent(()=>import('../pages/NumberCardConfig'))},
//     {id:3,name:'1号报表卡片',exact:true,path:'/numberone',component:asyncComponent(()=>import('../pages/NumberOnePage'))},
//     {id:4,name:'滑动列表卡片',exact:true,path:'/slidelist',component:asyncComponent(()=>import('../pages/SlideListPage'))},

//     {id:5,name:'反馈类卡片',exact:true,path:'/feekback',component:asyncComponent(()=>import('../pages/Feekback'))},
//     {id:6,name:'引导卡片',exact:true,path:'/recommend',component:asyncComponent(()=>import('../pages/NumberCardConfig'))},
//     {id:7,name:'1号报表卡片',exact:true,path:'/numberone',component:asyncComponent(()=>import('../pages/NumberOnePage'))},
//     {id:8,name:'滑动列表卡片',exact:true,path:'/slidelist',component:asyncComponent(()=>import('../pages/SlideListPage'))},
// ]



export const nav=[
     {
     	id:0,
     	module:'Component',
     	children:[
           {
           	  id:0,
           	  name:'流程卡片',
              children:[
    				    {id:0,name:'填单类卡片',exact:true,path:'/typein',component:asyncComponent(()=>import('../pages/TypeInPage'))},
    				    {id:1,name:'财务指标卡片',exact:true,path:'/numbercardconfig',component:asyncComponent(()=>import('../pages/NumberCardConfig'))},
    				    {id:2,name:'1号报表卡片',exact:true,path:'/numberone',component:asyncComponent(()=>import('../pages/NumberOnePage'))},
    				    {id:3,name:'滑动列表卡片',exact:true,path:'/slidelist',component:asyncComponent(()=>import('../pages/SlideListPage'))},
                {id:4,name:'adaptiveCards',exact:true,path:'/adaptivecards',component:asyncComponent(()=>import('../pages/AdaptiveCards'))},
              ]
           },{
             id:1,
             name:'辅助卡片',
             children:[
				    {id:4,name:'反馈类卡片',exact:true,path:'/feekback',component:asyncComponent(()=>import('../pages/Feekback'))},
				    {id:5,name:'应用多于三个引导卡片',exact:true,path:'/recommend',component:asyncComponent(()=>import('../pages/RecommendPage'))},
             ]

           },{
           	 id:2,
           	 name:'功能组件',
           	 children:[
				{id:8,name:'Input可编辑',exact:true,path:'/input',component:asyncComponent(()=>import('../pages/Inputpage'))},
           	 ]
           },
        //    {
        //    	 id:3,
        //    	 name:'图表卡片',
        //    	 children:[
				    // {id:9,name:'饼状图卡片',exact:true,path:'/feekback1',component:asyncComponent(()=>import('../pages/Feekback'))},
				    // {id:10,name:'柱状图卡片',exact:true,path:'/recommend1',component:asyncComponent(()=>import('../pages/NumberCardConfig'))},
				    // {id:11,name:'折线图卡片',exact:true,path:'/numberone1',component:asyncComponent(()=>import('../pages/NumberOnePage'))},
				    // {id:12,name:'折线柱状卡片',exact:true,path:'/slidelist1',component:asyncComponent(()=>import('../pages/SlideListPage'))},
        //    	 ]
        //    }
           {
           	  id:3,
           	  name:'Scroll',
           	  children:[
      				{id:8,name:'页面滚动',exact:true,path:'/scroll',component:asyncComponent(()=>import('../pages/ReactScrollPage'))},
           	  ]
           }
     	]

     },{
     	id:1,
     	module:'API',
     	children:[
           {
           	  id:0,
           	  name:'云之家API',
              children:[
				    {id:13,name:'播报接口',exact:true,path:'/yzj',component:asyncComponent(()=>import('../pages/YzjAPipage'))},
              ]
           },
     	]

     }
]