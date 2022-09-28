<template>
  <!--  城市节点令牌申请-->
  <div class="cityNodeToken">
    <RainbowPanel class="city-node">
      <template v-slot:name>
        全球城市节点
      </template>
      <template v-slot:content>
        <div class="cityNodeToken-content">
          <h2>Global City Node
            <i v-show="!fullScreen" class="el-icon-full-screen full-btn" @click="handleFull(0)"></i>
          </h2>
          <div class="node-number">
            累计{{ activeCityNodeArr.length + preparationCityNodeArr.length}}个城市节点
          </div>
          <div class="map-box"
               :style="fullScreen?'width:100vw;height:100vh;position:fixed;left:0;top:0;z-index:10000;':'width: 100%;height:100%;'">
            <i v-show="fullScreen" class="el-icon-close close-btn" @click="handleFull(1)"></i>
            <div id="map" style="width: 100%;height:100%;"></div>
          </div>
        </div>
      </template>
    </RainbowPanel>
    <RainbowPanel class="node-list">
      <template v-slot:name>
        节点列表
      </template>
      <template v-slot:content>
        <singleNav :nav-list="navList" v-model="activeIndex"></singleNav>
        <!--        已成立节点数据-->
        <div class="isEstablished">
          <div class="search-word">
            <div>
              <el-select v-model="selectContent" size="mini"
                         placeholder="请选择">
              </el-select>
              <el-select v-model="selectContent" size="mini"
                         placeholder="请选择">
              </el-select>
              <el-select v-model="selectContent" size="mini"
                         placeholder="请选择">
              </el-select>
            </div>
            <el-input
                size="mini"
                placeholder="搜索"
                suffix-icon="el-icon-search"
                v-model="searchContent">
            </el-input>
          </div>


          <el-table
              :data="activeCityNodeArr"
              v-loading="isLoadingT"
              v-show="activeIndex==0"
              :default-sort = "{prop: 'peopleLth', order: 'descending'}"
              border
           >
            <el-table-column
                prop="id"
                label="节点ID"
            >
              <div slot-scope="scope">
                <div class="index">
                  <div v-if="scope.$index<3" class="idx"><img :src="thImgs[scope.$index]" style="width: 21px;height: 18px;margin-top: 8px" alt=""></div>
                  <div class="idx" v-else></div>
                </div>
                {{scope.row.data_id}}
              </div>
            </el-table-column>
            <el-table-column
                prop="name"
                label="节点名称"
            >
            </el-table-column>
            <el-table-column
                label="节点管理员"
            >
              <div slot-scope="scope">
                {{scope.row.manager}}
              </div>
            </el-table-column>
            <el-table-column
                prop="cityId"
                label="节点所在区域">
            </el-table-column>
            <el-table-column
                prop="cityId"
                label="节点所在国家"
            >
            </el-table-column>
            <el-table-column
                prop="peopleLth"
                label="节点人数"
            >
            </el-table-column>
            <el-table-column
                prop="remainDays"
                label="公共管理基金">
            </el-table-column>
            <el-table-column
                prop="history"
                label="拥有RBT数量">
            </el-table-column>
            <el-table-column label="加入">
              <template slot-scope="scope">
                <el-button class="button1" size="mini" @click="joinNode(scope.row)">加入</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-table
              :data="preparationCityNodeArr"
              v-show="activeIndex==1"
              v-loading="isLoadingT"
              :default-sort = "{prop: 'peopleLth', order: 'descending'}"
              border
          >
            <el-table-column
                prop="id"
                label="节点ID"
            >
              <div slot-scope="scope">
                <div class="index">
                  <div v-if="scope.$index<3" class="idx"><img :src="thImgs[scope.$index]" style="width: 21px;height: 18px;margin-top: 8px" alt=""></div>
                  <div class="idx" v-else></div>
                </div>
                {{scope.row.data_id}}
              </div>
            </el-table-column>
            <el-table-column
                prop="name"
                label="节点名称"
            >
            </el-table-column>
            <el-table-column
                label="节点管理员"
            >
              <div slot-scope="scope">
                {{scope.row.manager}}
              </div>
            </el-table-column>
            <el-table-column
                prop="cityId"
                label="节点所在区域">
            </el-table-column>
            <el-table-column
                prop="cityId"
                label="节点所在国家"
            >
            </el-table-column>
            <el-table-column
                prop="peopleLth"
                label="节点人数"
            >
            </el-table-column>
            <el-table-column
                prop="remainDays"
                label="公共管理基金">
            </el-table-column>
            <el-table-column
                prop="history"
                label="拥有RBT数量">
            </el-table-column>
            <el-table-column label="加入">
              <template slot-scope="scope">
                <el-button class="button1" size="mini" @click="joinNode(scope.row)">加入</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div style="text-align: center;margin-top: 30px;">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[5, 10, 20, 40]"
                :page-size="pagesize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="preparationCityNodeArr.length">
            </el-pagination>
          </div>
        </div>
      </template>
    </RainbowPanel>
    <!--  加入城市节点弹窗-->
    <el-dialog
        title="城市节点信息"
        :visible.sync="isShowCityDialog"
        width="400px"
    >
      <div class="cityNode-info">
        <div>
          <span>节点ID</span>
          <span>{{cityNodeArr[1]?cityNodeArr[1].id:'1'}}</span>
        </div>
        <div>
          <span>节点名称</span>
          <span>{{cityNodeArr[1]?cityNodeArr[1].name:''}}</span>
        </div>
        <div>
          <span>节点人数</span>
          <span>{{cityNodeArr[1]?cityNodeArr[1].peopleLth:0}}</span>
        </div>
        <el-button class="button1" size="small" @click="$router.push({name:'nodeDetail', params:cityNodeArr[1]})">查看节点</el-button>
        <el-button class="button1" size="small" @click="joinNode(cityNodeArr[1])">加入</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
/* eslint-disable */
import {mapGetters} from "vuex";
import worldMap from "@/views/static/echarts/worldMap.json"
import th1 from "@/assets/img/1.png"
import th2 from "@/assets/img/2.png"
import th3 from "@/assets/img/3.png"
import {nodeList} from "@/api/citynode";

export default {
  name: "cityNodeToken",
  data() {
    return {
      thImgs:[th1,th2,th3],
      activeIndex: 0, //nav
      isLoadingT:false,
      navList: [{
        name: '已成立',
        index: 0
      }, {
        name: '筹备中',
        index: 1
      }],
      fullScreen: false,
      searchArr: [],
      chooseItemDialog: false,

      selectContent: '', // 筛选选择
      searchContent: '', //搜索筛选

      total: 1000, // pagination
      pagesize: 10,
      currentPage: 1,
      current_change: [],
      pagination: [
      ],
      activeCityNodeArr : [],//已成立节点
      cityNodeArr:[],//所有节点
      preparationCityNodeArr:[],//筹备中节点
      isShowCityDialog:false,// 城市节点弹出
    }
  },
  computed: {
    ...mapGetters([
      'isConnected',
      'account'
    ]),
  },
  methods: {
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    joinNode(node){//加入节点
      console.log(node)
      this.$store.dispatch("CityNode/joinNode",node.data_id).then(()=>{
        this.$message.success("加入成功")
      }).catch((err)=>{
        this.$message.error("加入失败"+err)
      })
    },
    getData(){
      if(!this.isConnected){
        return
      }

    },
    handleFull(param) {
      if (param) {
        this.fullScreen = false
        this.chart.resize();
      } else {
        this.fullScreen = true
        console.log(window)
        this.chart.resize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }
    },

  },
  created() {
    this.getData()
    nodeList().then(res => {
      console.log(res)
      this.activeCityNodeArr = res.data
    })
  },
  mounted() {
    let _this = this
    let echarts = this.$echarts
    echarts.registerMap('world', worldMap);
    let chart = echarts.init(document.getElementById("map"));
    this.chart = chart
    let geoCoordMap = { //城市坐标
      "Peking": [116, 40],
      "Paris": [2, 49],
      "Moscow": [38, 56],
      "London": [0, 52],
      "Washington DC": [-77, 39],
      "Belgrade": [20, 45],
      "Buenos Aires": [-58, -35],
      "Minsk": [28, 54],
      "Brasília": [-48, -16],
      "Santiago": [-71, -33],
      "Havana": [-82, 23],
      "Prague": [14, 50],
      "Copenhagen": [13, 56],
      "Santo Domingo": [-70, 18],
      "Cairo": [31, 30],
      "San Salvador": [-89, 14],
      "Port-au-Prince": [-72, 19],
      "Tehran": [51, 36],
      "Beirut": [35, 34],
      "Luxembourg": [6, 50],
      "Wellington": [175, -41],
      "Managua": [-86, 12],
      "Asunción": [-58, -25],
      "Manila": [121, 15],
      "Warsaw": [21, 52],
      "Riyadh": [47, 25],
      "Damascus": [36, 33],
      "Ankara": [33, 40],
      "Kiev": [31, 50],
      "Athens": [24, 38],
      "Delhi": [77, 29],
      "Lima": [-77, -12],
      "Canberra": [149, -35],
      "San Jos": [-84, 10],
      "Monrovia": [-11, 6],
      "Bogot": [-74, 5],
      "Mexico City": [-99, 19],
      "Pretoria": [28, -26],
      "Ottawa": [-76, 45],
      "Addis Ababa": [39, 9],
      "Panam": [-80, 9],
      "La Paz": [-68, -16],
      "Caracas": [-67, 10],
      "Guatemala": [-91, 15],
      "Oslo": [11, 60],
      "Amsterdam": [5, 52],
      "Tegucigalpa": [-87, 14],
      "Montevideo": [-56, -35],
      "Quito": [-79, 0],
      "Baghdad": [44, 33],
      "Brussels": [4, 51],
      "Kabul": [69, 35],
      "Reykjavik": [-22, 64],
      "Stockholm": [18, 59],
      "Bangkok": [101, 14],
      "Islamabad": [73, 34],
      "Sana'a": [44, 15],
      "Rangoon": [96, 17],
      "Jerusalem": [35, 32],
      "Jakarta": [107, -6],
      "Tirana": [20, 41],
      "Vienna": [16, 48],
      "Sofia": [23, 43],
      "Phnum Penh": [105, 12],
      "Helsinki": [25, 60],
      "Budapest": [19, 47],
      "Dublin": [-6, 53],
      "Rome": [12, 42],
      "Rabbah": [36, 32],
      "Vientiane": [103, 18],
      "Tripoli": [13, 33],
      "Kathmandu": [85, 28],
      "Lisbon": [-9, 39],
      "Bucharest": [26, 44],
      "Madrid": [-4, 40],
      "Colombo": [80, 7],
      "Rabat": [-7, 34],
      "Khartoum": [33, 16],
      "Tunis": [10, 37],
      "Tokyo": [140, 36],
      "Accra": [0, 6],
      "Kuala Lumpur": [102, 3],
      "Conakry": [-14, 10],
      "Porto-Novo": [3, 6],
      "Ouagadougou": [-2, 12],
      "Yaound": [12, 4],
      "Bangui": [19, 4],
      "N'Djamena": [15, 12],
      "Brazzaville": [15, -4],
      "Yamoussoukro": [-5, 7],
      "Nicosia": [33, 35],
      "Kinshasa": [15, -4],
      "Libreville": [9, 0],
      "Antananarivo": [48, -19],
      "Niamey": [2, 14],
      "Mogadishu": [45, 2],
      "Lom": [1, 6],
      "Bamako": [-8, 13],
      "Dakar": [-17, 15],
      "Lagos": [3, 6],
      "Freetown": [-13, 8],
      "Nouakchott": [-16, 18],
      "Ulan Batar": [107, 48],
      "Dar es Salaam": [39, -7],
      "Bujumbura": [29, -3],
      "Kingston": [-77, 18],
      "Kigali": [30, -2],
      "Port-of-Spain": [-61, 11],
      "Algiers": [3, 37],
      "Kampala": [33, 0],
      "Kuwait": [48, 29],
      "Nairobi": [37, -1],
      "Zanzibar City": [39, 0],
      "Dodoma": [36, -6],
      "Lilongwe": [34, -14],
      "Valletta": [15, 36],
      "Lusaka": [28, -15],
      "Banjul": [-17, 13],
      "Mal": [74, 4],
      "Singapore": [104, 1],
      "Georgetown": [-58, 7],
      "Gaborone": [26, -25],
      "Maseru": [27, -29],
      "Bridgetown": [-60, 13],
      "Aden": [45, 13],
      "Port Louis": [57, -20],
      "Mbabne": [31, -26],
      "Malabo": [9, 4],
      "Suva": [178, -18],
      "Manama": [51, 26],
      "Thimbu": [90, 27],
      "Doha": [52, 25],
      "Muscat": [59, 24],
      "Abu Dhabi": [54, 24],
      "Nassau": [-77, 25],
      "Bonn": [7, 51],
      "Berlin": [13, 52],
      "Dhaka": [90, 24],
      "Saint George's": [-62, 12],
      "Bissau": [-16, 12],
      "Praia": [-24, 15],
      "Maputo": [33, -26],
      "São Tomé": [7, 0],
      "Port Moresby": [147, -9],
      "Moroni": [43, -12],
      "Paramaribo": [-55, 6],
      "Victoria": [55, -5],
      "Luanda": [13, -9],
      "Apia": [-172, -14],
      "Djibouti": [43, 12],
      "Hanoi": [106, 21],
      "Honiara": [160, -9],
      "Roseau": [-61, 15],
      "Castries": [-61, 14],
      "Harare": [31, -18],
      "Kingstown": [-61, 13],
      "Vila": [168, -18],
      "Belmopan": [-89, 17],
      "Saint Johns": [-62, 17],
      "Basseterre": [-63, 17],
      "Bandar Seri Begawan": [115, 5],
      "Windhoek": [17, -23],
      "Vaduz": [10, 47],
      "Pyongyang": [126, 39],
      "Tallin": [25, 59],
      "Riga": [24, 57],
      "Vilnius": [25, 55],
      "Majuro": [171, 7],
      "Palikir": [158, 7],
      "Seoul": [127, 38],
      "Yerevan": [45, 40],
      "Baku": [50, 40],
      "Tselinograd": [71, 51],
      "Frunze": [75, 43],
      "Chisinau": [29, 47],
      "San Marino": [12, 44],
      "Dushanfe": [69, 39],
      "Ashkhabad": [58, 38],
      "Tashkent": [69, 41],
      "Sarajevo": [18, 44],
      "Zagreb": [16, 46],
      "Ljubljana": [15, 46],
      "T'bilisi": [45, 42],
      "Bratislava": [17, 48],
      "Skopje": [21, 42],
      "Asmara": [39, 15],
      "Monaco": [7, 44],
      "Andorra la Vella": [2, 43],
      "Koror": [134, 7],
      "South Tarawa": [173, 1],
      "Yaren": [167, 1],
      "Nuku'alofa": [-175, -21],
      "Funafuti": [179, 8],
      "Berne": [7, 47],
      "Dili": [126, -9],
      "Podgorica": [19, 42],
      "Juba": [32, 5]
    };
    let activeCityData = [

      [{
        "name": 'Peking',
        "value": 1
      }]
    ];
    let inactivatedCityData = [


    ];
    let color = ['#3ed4ff', '#eee', '#a6c84c'];
    let series = [];
    [
      ['activeCity', activeCityData],
      ['inactivatedCity', inactivatedCityData],
    ].forEach(function (item, i) {
      series.push({
        name: item[0],
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 1,
        rippleEffect: {
          scale: 2, //缩放
          period: 10, //涟漪频率
          brushType: 'stroke'
        }, // 点特效
        label: {
          normal: {
            show: true,
            position: 'right',
            formatter: '{b}'
          }
        },//数据信息
        tooltip: {
          trigger: 'item',
          formatter: (params) => {
            return params.name + "<br/>" + "人数" + params.value[2]
          }
        },
        symbolSize: function (val) {
          return val[2];
        },    // 圆圈大小
        itemStyle: {
          //为不同系列节点设置颜色
          normal: {
            color: color[i]
          }
        },
        data: item[1].map(function (dataItem) {
          return {
            name: dataItem[0].name,
            value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
          };
        })
      });
    });

    let option = {
      backgroundColor: '#000000', //地图背景色
      grid: {
        width: 'auto'
      },
      title: {
        text: '',
        subtext: '',
        left: 'left',
        textStyle: {
          color: '#fff'
        }
      },
      geo: {

        map: 'world',
        label: {
          emphasis: {
            show: false
          }
        },
        roam: true,
        itemStyle: {
          normal: {
            areaColor: '#0f333e',
            borderColor: '#119aac'
          },
          emphasis: {
            areaColor: '#052038'
          }
        }
      },
      series: series,
      tooltip: {}
    }

    chart.setOption(option);
    chart.on('click', function () {
      _this.isShowCityDialog = true
    });//点击事件
    this.chart.resize({
      width: "1200",
      height: "520"
    });
  },
  watch: {
    account() {
      this.getData()
    },
  }
}
</script>

<style lang="scss" scoped>

.cityNodeToken {
  overflow: auto;
  .button1{
    box-shadow: 0px 2px 5px 0px rgba(128,4,149,0.30);
  }
  .cityNode-info{
    >div{
      display: flex;
      padding: 6px 10px;
      justify-content: space-between;
    }
    .el-button{
      margin-top: 14px;
      width: 160px;
    }
  }
  .node-list {
    margin-top: 40px;
    .search-word {
      margin-top: 12px;
      padding-bottom: 10px;
      width: 100%;
      display: flex;
      justify-content: space-between;

      .el-select {
        margin-left: 10px;
        width: 100px;

        ::v-deep .el-input__inner {
          border-radius: 26px;
          background: #ece8f6;

          &::placeholder {
            color: #4a1fac;
          }
        }
      }

      .el-input {
        width: 280px;

      }
    }
  }

  .city-node {
    padding-bottom: 20px;
  }

  .cityNodeToken-content {
    color: white;
    margin-top: 20px;
    background: black;
    border-radius: 21px;
    border: 1px solid #212020;
    position: relative;
    height: 536px;
    overflow: hidden;

    .map-box {
      width: 100%;
      height: 100%;

      .close-btn {
        position: absolute;
        right: 30px;
        top: 60px;
        z-index: 100000;
        font-size: 20px;
        cursor: pointer;
      }
    }

    .full-btn {
      cursor: pointer;
    }

    .back {
      width: 1200px;
      height: 820px;
      position: absolute;
      left: 0;
      top: 70px;
    }

    h2 {
      margin: 10px;
    }

    .node-number {
      width: 180px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      background: rgba(255, 255, 255, 0.10);
      border: 1px solid rgba(151, 151, 151, 0.30);
      border-radius: 16px;
      margin: 10px auto;
    }
  }
}
</style>
