(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51ff3a61"],{"0cd2":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"transferBuyVip"},[a("singleNav",{staticStyle:{width:"1200px",margin:"20px auto"},attrs:{"nav-list":e.navList},model:{value:e.activeIndex,callback:function(t){e.activeIndex=t},expression:"activeIndex"}}),a("RainbowPanel",{directives:[{name:"show",rawName:"v-show",value:0==e.activeIndex,expression:"activeIndex==0"}],staticClass:"rainCard-box",scopedSlots:e._u([{key:"name",fn:function(){return[a("div",{staticClass:"seedSub-panel-header"},[a("span",[e._v("VIP令牌转让")]),a("span",{staticClass:"erc-info"},[e._v("ERC721")])])]},proxy:!0},{key:"content",fn:function(){return[a("div",{staticClass:"search-word"},[a("div",[a("el-select",{attrs:{size:"mini",placeholder:"请选择"},model:{value:e.selectContent,callback:function(t){e.selectContent=t},expression:"selectContent"}}),a("el-select",{attrs:{size:"mini",placeholder:"请选择"},model:{value:e.selectContent,callback:function(t){e.selectContent=t},expression:"selectContent"}}),a("el-select",{attrs:{size:"mini",placeholder:"请选择"},model:{value:e.selectContent,callback:function(t){e.selectContent=t},expression:"selectContent"}})],1),a("el-input",{attrs:{size:"mini",placeholder:"搜索","suffix-icon":"el-icon-search"},model:{value:e.searchContent,callback:function(t){e.searchContent=t},expression:"searchContent"}})],1),a("div",{staticClass:"table-data",staticStyle:{width:"100%"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.vipTokenArr.slice((e.currentPage-1)*e.pagesize,e.currentPage*e.pagesize),border:""}},[a("el-table-column",{attrs:{label:"令牌编号",align:"center",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("div",{staticClass:"idx"},[e._v(e._s(t.$index+1))]),a("img",{staticStyle:{width:"24px"},attrs:{src:n("f641"),alt:""}}),e._v("rbVIP-"+e._s(t.row.tokenId)+" ")])}}])}),a("el-table-column",{attrs:{prop:"creatorName",label:"初始生成者"}}),a("el-table-column",{attrs:{prop:"ownerName",label:"现在持有者"}}),a("el-table-column",{attrs:{label:"生成时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("formatDate")(new Date(1e3*t.row.crtTime)))+" ")]}}])}),a("el-table-column",{attrs:{label:"到期时间",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("formatDate")(new Date(1e3*t.row.crtTime+31536e6)))+" ")]}}])}),a("el-table-column",{attrs:{label:"剩余天数"},scopedSlots:e._u([{key:"default",fn:function(t){return a("div",{},[e._v(" "+e._s(parseInt(((new Date).getTime()+31536e6-1e3*t.row.crtTime)/864e5))+" ")])}}])}),a("el-table-column",{attrs:{label:"历史成交信息",width:"120px"},scopedSlots:e._u([{key:"default",fn:function(t){return 6!=t.row.type?[a("el-button",{staticClass:"button-view",attrs:{size:"mini"},on:{click:function(n){return e.check(t.row)}}},[e._v("查看")])]:void 0}}],null,!0)}),a("el-table-column",{attrs:{label:"选择"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.status?a("div",[a("el-checkbox",{model:{value:e.myTokenTransferArr[t.$index],callback:function(n){e.$set(e.myTokenTransferArr,t.$index,n)},expression:"myTokenTransferArr[scope.$index]"}})],1):a("div",[e._v(" 正在出售 ")])]}}])})],1),a("el-button",{staticClass:"button1",attrs:{size:"small"},on:{click:e.transferOpen}},[e._v("转让")]),a("div",{staticStyle:{"text-align":"center","margin-top":"30px"}},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[5,10,20,40],"page-size":e.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.vipTokenArr.length},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)]},proxy:!0}])}),a("RainbowPanel",{directives:[{name:"show",rawName:"v-show",value:1==e.activeIndex,expression:"activeIndex==1"}],staticClass:"rainCard-box",scopedSlots:e._u([{key:"name",fn:function(){return[a("div",{staticClass:"seedSub-panel-header"},[a("span",[e._v("VIP令牌转让市场")]),a("span",{staticClass:"erc-info"},[e._v("ERC721")])])]},proxy:!0},{key:"content",fn:function(){return[a("div",{staticClass:"search-word"},[a("div",[a("el-select",{attrs:{size:"mini",placeholder:"请选择"},model:{value:e.selectContent,callback:function(t){e.selectContent=t},expression:"selectContent"}}),a("el-select",{attrs:{size:"mini",placeholder:"请选择"},model:{value:e.selectContent,callback:function(t){e.selectContent=t},expression:"selectContent"}}),a("el-select",{attrs:{size:"mini",placeholder:"请选择"},model:{value:e.selectContent,callback:function(t){e.selectContent=t},expression:"selectContent"}})],1),a("el-input",{attrs:{size:"mini",placeholder:"搜索","suffix-icon":"el-icon-search"},model:{value:e.searchContent,callback:function(t){e.searchContent=t},expression:"searchContent"}})],1),a("div",{staticClass:"table-data",staticStyle:{width:"100%"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.sellTokenArr.slice((e.currentPage-1)*e.pagesize,e.currentPage*e.pagesize),border:""}},[a("el-table-column",{attrs:{label:"令牌编号",align:"center",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("div",{staticClass:"idx"},[e._v(e._s(t.$index+1))]),a("img",{staticStyle:{width:"24px"},attrs:{src:n("f641"),alt:""}}),e._v("rbVIP-"+e._s(t.row.tokenId)+" ")])}}])}),a("el-table-column",{attrs:{prop:"creatorName",label:"初始生成者"}}),a("el-table-column",{attrs:{prop:"ownerName",label:"现在持有者"}}),a("el-table-column",{attrs:{label:"生成时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("formatDate")(new Date(1e3*t.row.crtTime)))+" ")]}}])}),a("el-table-column",{attrs:{label:"到期时间",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("formatDate")(new Date(1e3*t.row.crtTime+31536e6)))+" ")]}}])}),a("el-table-column",{attrs:{label:"剩余天数"},scopedSlots:e._u([{key:"default",fn:function(t){return a("div",{},[e._v(" "+e._s(parseInt(t.row.crtTime+31536e6-1e3*(new Date).getTime()/864e5))+" ")])}}])}),a("el-table-column",{attrs:{label:"历史成交信息",width:"120px"},scopedSlots:e._u([{key:"default",fn:function(t){return 6!=t.row.type?[a("el-button",{staticClass:"button-view",attrs:{size:"mini"},on:{click:function(n){return e.check(t.row)}}},[e._v("查看")])]:void 0}}],null,!0)}),a("el-table-column",{attrs:{label:"购买"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"button1",attrs:{size:"mini"},on:{click:function(n){return e.buyVip(t.row)}}},[e._v("购买")])]}}])})],1),a("div",{staticStyle:{"text-align":"center","margin-top":"30px"}},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[5,10,20,40],"page-size":e.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.sellTokenArr.length},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)]},proxy:!0}])}),a("el-dialog",{attrs:{title:"令牌转让发布",visible:e.isShowTransfer,width:"400px"},on:{"update:visible":function(t){e.isShowTransfer=t}}},[a("div",{staticClass:"transfer"},[a("div",{staticClass:"r-intro-box"},[a("div",[a("span",[e._v("转让数量")]),a("span",[e._v(e._s(e.transferTokenInfo.number)+" 枚")])])]),e._l(e.transferTokenInfo.arr,(function(t,n){return a("div",{key:n},[a("div",{staticClass:"tip"},[a("span",[e._v("rbVIP - "+e._s(t.tokenId))]),a("span",[e._v(" "+e._s(parseInt(((new Date).getTime()+31536e6-1e3*t.crtTime)/864e5))+"天 ")])]),a("div",{staticClass:"price-box"},[a("span",[e._v("价格")]),a("div",{staticClass:"input-box"},[a("el-input",{staticClass:"input2",attrs:{size:"mini"},model:{value:t.price,callback:function(n){e.$set(t,"price",n)},expression:"token.price"}}),a("ChooseToken",{on:{changeToken:e.changeToken}})],1)])])})),a("div",{staticClass:"intro"},[e._v(" 转让成功后，将扣除您 "),a("span",{staticClass:"r-p-color"},[e._v("5%")]),e._v("的平台服务费 ")]),a("div",{staticClass:"operating"},[a("el-button",{staticClass:"button3",attrs:{size:"small"},on:{click:function(t){e.isShowTransfer=!1}}},[e._v("Cancel")]),a("el-button",{staticClass:"button1",attrs:{size:"small "},on:{click:e.transferVip}},[e._v("转让")])],1)],2)]),a("el-dialog",{staticClass:"transfer",attrs:{title:"购买令牌确认",visible:e.isShowBuy,width:"400px"},on:{"update:visible":function(t){e.isShowBuy=t}}},[a("div",{staticClass:"order"},[a("div",{staticClass:"r-intro-box"},[a("div",[a("span",[e._v("编号")]),a("span",[e._v(e._s(e.buyToken.tokenId))])]),a("div",[a("span",[e._v("初始生成者")]),a("span",[e._v(e._s(e.buyToken.creatorName))])]),a("div",[a("span",[e._v("现在持有者")]),a("span",[e._v(e._s(e.buyToken.ownerName))])]),a("div",[a("span",[e._v("生成时间")]),a("span",[e._v(" "+e._s(e._f("formatDate")(new Date(1e3*e.buyToken.crtTime))))])]),a("div",[a("span",[e._v("到期时间")]),a("span",[e._v(" "+e._s(e._f("formatDate")(new Date(1e3*e.buyToken.crtTime+31536e6))))])]),a("div",[a("span",[e._v("剩余天数")]),a("span",[e._v(" "+e._s(parseInt(((new Date).getTime()+31536e6-1e3*e.buyToken.crtTime)/864e5)))])])]),a("div",{staticClass:"operating"},[a("el-button",{staticClass:"button3",attrs:{size:"small"},on:{click:function(t){e.isShowBuy=!1}}},[e._v("Cancel")]),a("el-button",{staticClass:"button1",attrs:{size:"small "},on:{click:e.subBuy}},[e._v("确认购买")])],1)])]),e.isConnected?a("TransferLogs",{attrs:{"transfer-record":e.transferRecord,params:e.logParams},model:{value:e.isShowHistory,callback:function(t){e.isShowHistory=t},expression:"isShowHistory"}}):e._e()],1)},s=[],r=n("53ca"),i=n("1da1"),o=n("5530"),c=(n("96cf"),n("159b"),n("4de4"),n("3ca3"),n("ddb0"),n("2f62")),l=n("8796"),u=n("803b"),d={name:"transferBuyVip",components:{TransferLogs:u["a"]},data:function(){return{currentPage:1,pagesize:5,isShowHistory:!1,activeIndex:0,myTokenTransferArr:[],transferTokenInfo:{arr:[]},buyToken:{},transferRecord:[],navList:[{name:"卖",index:0},{name:"买",index:1}],isShowTransfer:!1,isShowBuy:!1,selectContent:"",searchContent:"",selectIndex:null,total:1e3,current_change:[],logParams:{contractName:"RBTVIP",eventName:"Transfer"}}},computed:Object(o["a"])(Object(o["a"])({},Object(c["b"])(["isConnected","account"])),{},{vipTokenArr:function(){return this.$store.state.rbtVip.vipTokenArr},sellTokenArr:function(){return this.$store.state.rbtVip.sellTokenArr}}),mounted:function(){this.isConnected?this.initData():this.$message("请先连接钱包")},watch:{account:function(){this.initData()}},methods:{handleSizeChange:function(e){this.pagesize=e},handleCurrentChange:function(e){this.currentPage=e},transferOpen:function(){var e=this;this.isShowTransfer=!0,this.transferTokenInfo={number:0,arr:[]},this.myTokenTransferArr.forEach((function(t,n){t&&(e.transferTokenInfo.number++,e.transferTokenInfo.arr.push(e.vipTokenArr[n]))}))},check:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.isShowHistory=!0,t.logParams.filter={tokenId:e.tokenId};case 2:case"end":return n.stop()}}),n)})))()},changeToken:function(e){console.log(e)},transferVip:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,a,s,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=[],a=regeneratorRuntime.mark((function t(a){var s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(s=e.transferTokenInfo.arr[a],s.price>0){t.next=4;break}return e.$message.error("请填写价格"),t.abrupt("return",{v:void 0});case 4:return r=l["a"].getContractAddress("USD"),n={tokenId:s.tokenId,price:s.price,token:r},t.next=8,e.$store.dispatch("erc721/allowance",{tokenId:s.tokenId,coinName:"RBTVIP",contractName:"RBTVIP"}).then(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a){t.next=5;break}return e.isLoading=!0,t.next=4,e.$store.dispatch("erc721/approve",{contractName:"RBTVIP",coinName:"RBTVIP",tokenId:s.tokenId}).then((function(){e.handleTransfer(n),e.isLoading=!1})).catch((function(){e.isLoading=!1,e.$message({type:"error",message:"授权失败"})}));case 4:return t.abrupt("return");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 8:e.handleTransfer(n);case 9:case"end":return t.stop()}}),t)})),s=0;case 3:if(!(s<e.transferTokenInfo.arr.length)){t.next=11;break}return t.delegateYield(a(s),"t0",5);case 5:if(o=t.t0,"object"!==Object(r["a"])(o)){t.next=8;break}return t.abrupt("return",o.v);case 8:s++,t.next=3;break;case 11:case"end":return t.stop()}}),t)})))()},handleTransfer:function(e){var t=this;this.$store.dispatch("rbtVip/saleVip",e).then((function(){t.isShowTransfer=!1,t.$message.success("已成功转让到市场"),t.initData()}))},initData:function(){this.$store.dispatch("rbtVip/vipArray"),this.$store.dispatch("rbtVip/sellArray")},buyVip:function(e){this.isShowBuy=!0,this.buyToken=e},subBuy:function(){var e=this;this.$store.dispatch("rbtVip/transferVip",{tokenId:this.buyToken.tokenId,token:l["a"].getContractAddress("USD")}).then((function(t){null!=t&&(e.$message.success("购买成功！"),e.isShowBuy=!1,e.initData())}))},goTo:function(e){this.$router.push(e)}}},f=d,p=(n("bd84"),n("2877")),v=Object(p["a"])(f,a,s,!1,null,"3667fb6e",null);t["default"]=v.exports},"53ca":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}},"803b":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{staticClass:"transfer-history",attrs:{title:"令牌历史信息",visible:e.isShowHistory,width:"400px","before-close":e.handleClose},on:{"update:visible":function(t){e.isShowHistory=t}}},[n("div",{staticClass:"history-box"},e._l(e.transferRecord,(function(t,a){return n("div",{key:a,staticClass:"history-item"},[n("div",{staticClass:"time"},[e._v(" "+e._s(e._f("formatDate")(t.created_at))+" ")]),n("div",{staticClass:"content"},[n("div",{staticClass:"from"},[n("div",[e._v("持有者：")]),e._v(" "+e._s(t.holder)+" ")]),n("div",{staticClass:"to"},[n("div",[e._v("价格：")]),e._v(" "+e._s(t.price)+" ")])])])})),0)])},s=[],r=n("5530"),i=n("2f62"),o={name:"TransferLogs",props:{isShowHistory:{default:function(){return!1}},transferRecord:{default:function(){return[]}}},model:{prop:"isShowHistory",event:"change"},data:function(){return{}},created:function(){},computed:Object(r["a"])({},Object(i["b"])(["isConnected","account"])),methods:{handleClose:function(){this.$emit("change",!1)}},watch:{}},c=o,l=(n("e5e7"),n("2877")),u=Object(l["a"])(c,a,s,!1,null,"5477f884",null);t["a"]=u.exports},"87d2":function(e,t,n){},bd84:function(e,t,n){"use strict";n("eabb")},e5e7:function(e,t,n){"use strict";n("87d2")},eabb:function(e,t,n){},f641:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAE7UlEQVRIS+2Wa2xURRzFz8xd9tnuutvSR7qlFChQaGyhUqBSQqTEQEqEhBhFiKIGg6IhATQSlRCBGCGoGOVlqvKBSBojaVFIC9jy6EOoFAUajVJftLTC0sd2H/femTFzd1cR6ZbyQb4wyWbu3jszvzln7//MEtylRu4SF/fA/5vzt2V1Qd6YWYzxuTrXCYH41xwa2yqlYhilIQK699sLP/80mIJBwdMLx44P6qRJ15mTQgBCQAgBQPZcdkYTEOCCwGw2nXcn8ym1tb+E4sEHBZeUFH0R6A8s4EwHBDdgEmzAZR/dTAwi7zoTHWvqv7m47Y7BpaXTH/b3qZUQuplzHZxzCPmJgiOKo5JvoCgmU5eVkEmnzv7QPhB8QMXz5xfafdfIKUWhBRAMnHFwzsAYi8ANqyOqY2b/rVoIYXfYPzpR/93yIYNnzypeHdbULTablUibpVrOImC5gZuh8ruhggCEUDCmB5NdntIvjzXU3wp+S8Xz5s3Luu7raEpNcaeaTRyqytAf0JBgI9A0HZrGYVIiajVdXkeWpsZqFEE1cl+h9HjORKV09+5m7Wb4LcHFxQ+UWy3WZaUz07B25VjseP8kDhzzofztmThz+nd8/2MPnlk4Gv4+FZ9WXULBSCsWlY5EY0snhjsVdIeAjfuvwB9Qmc1hX36ouqF8UHBZ2Zwcn+96i9vjseuahp1bJ2Nv+UkcPxPEB5sexJoNJ9AbMmPFo9lo7wqgqvYK0p0hvLd2Kpasb4ai/onPtz6Erfs78PW5Hui6finN68mvqKj13wj/j+KSkqnvmK22VXaLBYLrWLwoE0nOMHbuOYc31hZj5av1MFlsWPFYNjq6gqg81g6vR8O2V6bikZfqkEh7UfnhXGwo/w2NF3rR3x9ASmrm/Kqvqg/GBU+bVrDOanVsSkywG3U7wmvD5tfzsXvXKQhhQvWJHmiMY8XiUejoCqHq6GV4PSp2bSxBY3MHstIdON8WwLv7fgXnkGCWnJY5+9Chmrq44KKi8Um6iovpGRkpMqkEF9i1fRoUoeHFVTXoDlqhaiwCvhrGwSOXkeEOY9v6ErywoQU6E+jpU8G4MCpAZaIxc8S4GRUVFSwuWD4szM95LcHpetPlchlltOyJUZicl4gnn6uB2Zpg2Pf80tG4fCWIyiN/YESSju2b5+Cpl08bbzyP1ra/PxByJ2eUHT5cc3TQl8sAF45yKcJSPzwlZQIhBBPGOTFpogPl+9qM4Lg/h+LZx3Ph7wvjk/2tyJ/gxtNLJ2PHx+dxsM5n1LiqqlC5sq+hoXmJEeU3tQGTa0ZR3kJB6Gcut9tMIGsSCIY06IzD5VBgtVBQShEMcePaZKLQdYFr3aoB7vUHrrnc6VOqq6vbbjtAYgPzcrOrUtNSyoaZTODR34zJ1OIRAYpCQQkFoQTSmVjz+wOCga5rajr71pAjU07Izc3Ms5sd9Z4kd6JUYUSmjE75usbAVAGNgiWaCQFft7+1vf3qlM7Ozv47AstJeeOztzjvc662WiyEiwj0H8USKi2PKJab8wfCLBQOL2ppaT0wEDQa6fEeA16v1+NKGNZkNpvHADecxTKVJZRQGc8yl6GqutB0vfJCa9uC+KsaZ8ngLSsrOd1hTSgSgkXHR/7+KErkdCAgsmglXe3yheriWRyj3RZ48K0NfcQ98NA9u8MZd83qvwA7XGE9zq6rRQAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=chunk-51ff3a61.7ba79337.js.map