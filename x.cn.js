function 加法(数1, 数2) {
  return 数1 + 数2;
}

function 减法(数1, 数2) {
  return 数1 - 数2;
}

function 乘法(数1, 数2) {
  return 数1 * 数2;
}

function 除法(数1, 数2) {
  if (数2 === 0) {
    return "除数不能为零";
  }
  return 数1 / 数2;
}

var 计算器 = {
  加: 加法,
  减: 减法,
  乘: 乘法,
  除: 除法
};

var 日期工具 = {
  获取今天日期: function() {
    var 今天 = new Date();
    return 今天.toLocaleDateString();
  },
  获取当前时间: function() {
    var 现在 = new Date();
    return 现在.toLocaleTimeString();
  }
};

var 字符串工具 = {
  反转字符串: function(字符串) {
    return 字符串.split('').reverse().join('');
  },
  获取字符串长度: function(字符串) {
    return 字符串.length;
  },
  字符串包含: function(主字符串, 子字符串) {
    return 主字符串.includes(子字符串);
  }
};

var 数组工具 = {
  数组相加: function(数组) {
    return 数组.reduce(function(总和, 当前值) {
      return 总和 + 当前值;
    }, 0);
  },
  数组平均值: function(数组) {
    var 总和 = 数组工具.数组相加(数组);
    return 总和 / 数组.length;
  },
  数组去重: function(数组) {
    return Array.from(new Set(数组));
  }
};

var 随机工具 = {
  生成随机整数: function(最小值, 最大值) {
    return Math.floor(Math.random() * (最大值 - 最小值 + 1)) + 最小值;
  },
  生成随机字符串: function(长度) {
    var 可选字符 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var 随机字符串 = "";
    for (var i = 0; i < 长度; i++) {
      var 随机索引 = Math.floor(Math.random() * 可选字符.length);
      随机字符串 += 可选字符.charAt(随机索引);
    }
    return 随机字符串;
  }
};

// 自定义中文弹出框函数
function 弹出消息(消息) {
  alert(消息);
}