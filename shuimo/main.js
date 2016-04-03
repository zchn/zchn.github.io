function main() {
    var reference_points = chinese_colors;
    var img = document.getElementById('mainImg');
    var mainCanvas = document.getElementById('mainCanvas');
    mainCanvas.width = img.width;
    mainCanvas.height = img.height;
    var context = mainCanvas.getContext('2d');
    context.drawImage(img, 0, 0, img.width, img.height);
    context.width = img.width;
    context.height = img.height;
    imgd = context.getImageData(0, 0, img.width, img.height)
    var pix = imgd.data;
    // Loop over each pixel and invert the color.
    for (var i = 0, n = pix.length; i < n; i += 4) {
        // var distanceFun = distanceOfPoints;
        var distanceFun = projectionDistance;
        // var pointFun = function(x,y) {return y};
        var pointFun = getProjectionPoint;
        var pix_point = [pix[i], pix[i+1], pix[i+2]];
        var shortest_distance = distanceFun(pix_point,
                                            reference_points[0]);
        var shortest_point = pointFun(pix_point, reference_points[0]);
        for (var j = 0; j < reference_points.length; j++) {
            var distance = distanceFun(pix_point, reference_points[j]);
            if (distance < shortest_distance) {
                shortest_distance = distance;
                shortest_point = pointFun(pix_point,
                                          reference_points[j]);
            }
        }
        pix[i  ] = shortest_point[0]; // red
        pix[i+1] = shortest_point[1]; // green
        pix[i+2] = shortest_point[2]; // blue
        // i+3 is alpha (the fourth element)
    }
    // Draw the ImageData at the given (x,y) coordinates.
    context.putImageData(imgd, 0, 0);
}

function distanceOfPoints(p1, p2) {
    if (p1.length !== p2.length) {
        return -1;
    }
    var ret2 = 0;
    for (var i = 0; i < p1.length; i++) {
        ret2 += (p1[i]-p2[i])*(p1[i]-p2[i]);
    }
    return Math.sqrt(ret2);
}

function getProjectionPoint(p, pt) {
    if (p.length !== pt.length) {
        return p.map(function(){return -1;});
    }
    var origin = p.map(function(){return 0;});
    var ratio = distanceOfPoints(origin, p)/distanceOfPoints(origin, pt);
    var ret = pt.map(function(x){return Math.round(x*ratio);});
    return ret;
}

function projectionDistance(p, pt) {
    var projected_pt = getProjectionPoint(p, pt);
    return distanceOfPoints(p, projected_pt);
}

window.onload = main;

var chinese_colors = [
    // 粉红
    [255,179,167],
    // 妃色
    [237,87,54],
    // 品红
    [240,0,86],
    // 桃红
    [244,121,131],
    // 海棠红
    [219,90,107],
    // 石榴红
    [242,12,0],
    // 樱桃色
    [201,55,86],
    // 银红
    [240,86,84],
    // 大红
    [255,33,33],
    // 绛紫
    [140,67,86],
    // 绯红
    [200,60,35],
    // 胭脂
    [157,41,51],
    // 朱红
    [255,76,0],
    // 丹
    [255,78,32],
    // 彤
    [243,83,54],
    // 茜色
    [203,58,86],
    // 火红
    [255,45,81],
    // 赫赤
    [201,31,55],
    // 嫣红
    [239,122,130],
    // 洋红
    [255,0,151],
    // 炎
    [255,51,0],
    // 赤
    [195,39,43],
    // 绾
    [169,129,117],
    // 枣红
    [195,33,54],
    // 檀
    [179,109,97],
    // 殷红
    [190,0,47],
    // 酡红
    [220,48,35],
    // 酡颜
    [249,144,111],
    // 鹅黄
    [255,241,67],
    // 鸭黄
    [250,255,114],
    // 樱草色
    [234,255,86],
    // 杏黄
    [255,166,49],
    // 杏红
    [255,140,49],
    // 橘黄
    [255,137,54],
    // 橙黄
    [255,164,0],
    // 橘红
    [255,117,0],
    // 姜黄
    [255,199,115],
    // 缃色
    [240,194,57],
    // 橙色
    [250,140,53],
    // 茶色
    [179,92,68],
    // 驼色
    [168,132,98],
    // 昏黄
    [200,155,64],
    // 栗色
    [96,40,30],
    // 棕色
    [178,93,37],
    // 棕绿
    [130,113,0],
    // 棕黑
    [124,75,0],
    // 棕红
    [155,68,0],
    // 棕黄
    [174,112,0],
    // 赭色
    [149,85,57],
    // 琥珀
    [202,105,36],
    // 褐色
    [110,81,30],
    // 枯黄
    [211,177,125],
    // 黄栌
    [226,156,69],
    // 秋色
    [137,108,57],
    // 秋香色
    [217,182,17],
    // 嫩绿
    [189,221,34],
    // 柳黄
    [201,221,34],
    // 柳绿
    [175,221,34],
    // 竹青
    [120,146,98],
    // 葱黄
    [163,217,0],
    // 葱绿
    [158,217,0],
    // 葱青
    [14,184,58],
    // 青葱
    [10,163,68],
    // 油绿
    [0,188,18],
    // 绿沉
    [12,137,24],
    // 碧色
    [27,209,165],
    // 碧绿
    [42,221,156],
    // 青碧
    [72,192,163],
    // 翡翠色
    [61,225,173],
    // 草绿
    [64,222,90],
    // 青色
    [0,224,158],
    // 青翠
    [0,224,121],
    // 青白
    [192,235,215],
    // 鸭卵青
    [224,238,232],
    // 蟹壳青
    [187,205,197],
    // 鸦青
    [66,76,80],
    // 绿色
    [0,229,0],
    // 豆绿
    [158,208,72],
    // 豆青
    [150,206,84],
    // 石青
    [123,207,166],
    // 玉色
    [46,223,163],
    // 缥
    [127,236,173],
    // 艾绿
    [164,226,198],
    // 松柏绿
    [33,166,117],
    // 松花绿
    [5,119,72],
    // 松花色
    [5,119,72],
    // 蓝
    [68,206,246],
    // 靛青
    [23,124,176],
    // 靛蓝
    [6,82,121],
    // 碧蓝
    [62,237,231],
    // 蔚蓝
    [112,243,255],
    // 宝蓝
    [75,92,196],
    // 蓝灰色
    [161,175,201],
    // 藏青
    [46,78,126],
    // 藏蓝
    [59,46,126],
    // 黛
    [74,66,102],
    // 黛绿
    [66,102,102],
    // 黛蓝
    [66,80,102],
    // 黛紫
    [87,66,102],
    // 紫色
    [141,75,187],
    // 紫酱
    [129,84,99],
    // 酱紫
    [129,84,118],
    // 紫檀
    [76,34,27],
    // 绀青
    [0,51,113],
    // 紫棠
    [86,0,79],
    // 青莲
    [128,29,174],
    // 群青
    [76,141,174],
    // 雪青
    [176,164,227],
    // 丁香色
    [204,164,227],
    // 藕色
    [237,209,216],
    // 藕荷色
    [228,198,208],
    // 苍色
    [117,135,138],
    // 苍黄
    [81,154,115],
    // 苍青
    [162,155,124],
    // 苍黑
    [115,151,171],
    // 苍白
    [209,217,224],
    // 水色
    [136,173,166],
    // 水红
    [243,211,231],
    // 水绿
    [212,242,231],
    // 水蓝
    [210,240,244],
    // 淡青
    [211,224,243],
    // 湖蓝
    [48,223,243],
    // 湖绿
    [37,248,203],
    // 精白
    [255,255,255],
    // 像牙白
    [255,251,240],
    // 雪白
    [240,252,255],
    // 月白
    [214,236,240],
    // 缟
    [242,236,222],
    // 素
    [224,240,233],
    // 荼白
    [243,249,241],
    // 霜色
    [233,241,246],
    // 花白
    [194,204,208],
    // 鱼肚白
    [252,239,232],
    // 莹白
    [227,239,253],
    // 灰色
    [128,128,128],
    // 牙色
    [238,222,176],
    // 铅白
    [240,240,244],
    // 玄色
    [98,42,29],
    // 玄青
    [61,59,79],
    // 乌色
    [114,94,130],
    // 乌黑
    [57,47,65],
    // 漆黑
    [22,24,35],
    // 墨色
    [80,97,109],
    // 墨灰
    [117,138,153],
    // 黑色
    // [0,0,0],
    // 缁色
    [73,49,49],
    // 煤黑
    [49,37,32],
    // 黧
    [93,81,60],
    // 黎
    [117,102,77],
    // 黝
    [107,104,130],
    // 黝黑
    [102,87,87],
    // 黯
    [65,85,93],
    // 赤金
    [242,190,69],
    // 金色
    [234,205,118],
    // 银白
    [233,231,239],
    // 铜绿
    [84,150,136],
    // 乌金
    [167,142,68],
    // 老银
    [186,202,198]];
