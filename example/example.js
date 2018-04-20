import MobileSelect from '../index'

var weekdayArr = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
var timeArr = ['08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'];
var numArr = ['1', '2', '3', '4', '5'];

var UplinkData =
  [
    { id: '1', value: '兰博基尼' },
    {
      id: '2',
      value: '劳斯莱斯',
      childs: [
        {
          id: '1',
          value: '曜影'
        },
        {
          id: '2',
          value: '幻影',
          childs: [
            {
              id: '1',
              value: '标准版'
            },
            {
              id: '2',
              value: '加长版'
            },
            {
              id: '3',
              value: '巅峰之旅'
            },
            {
              id: '4',
              value: '流光熠世'
            },
            {
              id: '5',
              value: '都会典藏版'
            }
          ]
        },
        {
          id: '3',
          value: '古思特',
          childs: [
            {
              id: '1',
              value: '加长版'
            },
            {
              id: '2',
              value: '永恒之爱'
            },
            {
              id: '3',
              value: '英骥'
            },
            {
              id: '4',
              value: '阿尔卑斯典藏版'
            }
          ]
        },
        {
          id: '4',
          value: '魅影',
          childs: [
            {
              id: '1',
              value: '标准版'
            },
            {
              id: '2',
              value: 'Black Badge'
            }
          ]
        }
      ]
    },
    {
      id: '3',
      value: '宾利',
      childs: [
        {
          id: '1',
          value: '慕尚',
          childs: [
            {
              id: '1',
              value: '标准版'
            },
            {
              id: '2',
              value: '极致版'
            }
          ]
        },
        {
          id: '2',
          value: '欧陆',
          childs: [
            {
              id: '1',
              value: '尊贵版'
            },
            {
              id: '2',
              value: '敞篷标准版'
            },
            {
              id: '3',
              value: '敞篷尊贵版'
            }
          ]
        }
      ]
    },
    {
      id: '4',
      value: '法拉利',
      childs: [
        {
          id: '1',
          value: 'LaFerrari'
        },
        {
          id: '2',
          value: '法拉利488'
        },
        {
          id: '3',
          value: 'GTC4Lusso'
        }
      ]
    },
    {
      id: '5',
      value: '玛莎拉蒂',
      childs: [
        {
          id: '1',
          value: '总裁'
        },
        {
          id: '2',
          value: '玛莎拉蒂GT'
        },
        {
          id: '3',
          value: 'Levante'
        }
      ]
    }
  ];


//----------------------------------------------------------

//只有trigger 和 wheels 是必要参数  其他都是选填参数
var mobileSelect1 = new MobileSelect({
  // trigger: '#trigger1',
  title: '单项选择',
  wheels: [
    { data: weekdayArr }
  ],
  transitionEnd: function (indexArr, data) {
    console.log('transitionEnd', indexArr, data);
  },
  callback: function (indexArr, data) {
    console.log('callback', indexArr, data);
  },
  position: [2] //初始化定位 打开时默认选中的哪个  如果不填默认为0
});

setTimeout(() => {
  mobileSelect1.show();
 }, 2000);


var mobileSelect2 = new MobileSelect({
  trigger: '#trigger2',
  title: '双项选择',
  wheels: [
    { data: weekdayArr },
    { data: timeArr }
  ],
  position: [1, 2]
});


var mobileSelect3 = new MobileSelect({
  trigger: '#trigger3',
  title: '多项选择',
  wheels: [
    { data: numArr },
    { data: numArr },
    { data: numArr },
    { data: numArr },
    { data: numArr }
  ],
  position: [0, 1, 0, 1, 0],
  transitionEnd: function (indexArr, data) {
  },
  callback: function (indexArr, data) {
  }
});


var mobileSelect4 = new MobileSelect({
  trigger: '#trigger4',
  title: '地区选择',
  wheels: [
    {
      data: [
        {
          id: '1',
          value: '附近',
          childs: [
            { id: '1', value: '1000米' },
            { id: '2', value: '2000米' },
            { id: '3', value: '3000米' },
            { id: '4', value: '5000米' },
            { id: '5', value: '10000米' }
          ]
        },
        { id: '2', value: '上城区' },
        { id: '3', value: '下城区' },
        { id: '4', value: '江干区' },
        { id: '5', value: '拱墅区' },
        { id: '6', value: '西湖区' }
      ]
    }
  ],
  transitionEnd: function (indexArr, data) {
    console.log(data);
  },
  callback: function (indexArr, data) {
    console.log(data);
  }
});


var mobileSelect5 = new MobileSelect({
  trigger: '#trigger5',
  title: '车型选择',
  wheels: [
    { data: UplinkData }
  ],
  transitionEnd: function (indexArr, data) {
    console.log(data);
  },
  callback: function (indexArr, data) {
    console.log(data);
  }
});