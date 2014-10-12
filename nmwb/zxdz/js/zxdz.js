
$(document).ready(function() {
	// 初始化键盘
	initKeyboard();
	
	// 初始化 输入框的键盘监听事件
	initInputFieldAction();
	
	//初始化练习功能表事件
	initFunctionAction();
	
	initShowCodeForInputAction();
	
	// 默认开始练习 一级简码
	$('.functionPanel li#yiji').click();
	
});

// 练习表
var exerCharacts = [];
// 一级简码练习表
exerCharacts['yiji'] = '一在地即祝和上这个就把是用的了石吗男为都好跟钱对家';
// 二级简码练习表
exerCharacts['erji1'] = 
     '饮千往迁狡獐气犯猛很夕风特手胧飓今含贪爵脾物遥朋欠月爱腔念臆牛胁妥肥胫瓜针错矢钴钻知钠铀雉钩铁钦锌锐鸵镑镜鸟钗键银铍粝美精糊粘籼娄米粼数养粹迷料粒羧户朗辛前并头请诂让总单亩学认许衣议说谊访谅望记弟谲亵广宁忧度宠官店问慢怕它客性宰忙惦闷惊快怪安闲烦方斗福炻火商祸六祖熄交燃放旖炉烂熔炎焙礼祁烬煺心病辣衬痘章高部立袖产裕衫哀疾褛亮裤痰瘴初必享被酒法清河收沾消混滑刀没浮乙买演游泣书汉涨渣波陋陈圣阵际蚩力阻难办降欢鸡又隧边防陪已双艰陂弓建展尸居引孑如巢马婚骆姓孤也嫌婉灵嫉女始她妤姆本植横杯标朴杏查木柔机极枚予样榨杰樟杨巴李根打持拷拓排扑损提母拆投摇揿护抗按抖皮报劲据抒披每征行待狂猢及各得备饭利多';
exerCharacts['erji2'] = '共震酝票再职林求而耳零医雨平酡灭醇到要成西顶厅丁十干南东有才二七丈丧灰亏友厂工藏大三苦丰英吉走奋土花获攻茑太劳过芳境去寸坡玩弄环珑蚕车勤者革天老麦王区云璃还较琼廿不事轻古研垄示泵碘可碑克矽故鸪辜碰矿磅礅碌码碴破践踏具蝇旧蛊师跑路踩蜘踉蹲蛇黑蹴虫跛典团因国固帐纲回纳组给四级缓统缩纺缟绿卜卢困经号叶尖山呵中嗯口喝喂哦只吸吹鸣咏常嘛咬哼叫啊呢吧小最财时赌见晃肯冒账日赂曰晕旷炅景内贝昵果畏置罢睛罟罪罩眇骨目田界睡睬且由既罚瞎思瞳累瞩眼看等籁笼合金售白算笑符反拿般鱼乎管焦笠么第集例什优会做先几够但佃人儿件疑凡信们伙位分八他杀';
// 易错笔顺练习表
exerCharacts['ycbs'] = '凸凹或域爽比批入片版州洲伪丹瓦迎印卵北乘垂里埋肃萧搜瘦插贯毋重年哥何班辨五巫噩疆凶幽世蝶甚断继衷衰燕率承水鼎兜舆逃兆脊曹遭寐寤巨臣熙丑羞那万敖傲然蔡祭登却将奖追假作谑门匾戒';
// 易拆错字练习表
exerCharacts['yccz'] = '暴义以长张直值后诟久身谢声眉出础亲新桌某谋生朱殊主注衡微徵我俄载羲柬勿匆忝舔尽愤丝命毫窜僵窗告酷造调周悟吾善渲潦墙叵匮番翻采彩未末贰戎违韦农雀省元无芜免非菲悲肆髟段缎兵乒乓发服卅歉兼亦迹变弯恋逐带舞赛寒塞明阴育青';
// 常用一练习表
exerCharacts['cy1'] = '动来于下阶民能进同面种子自社加线电量党实定深表着理化争现所起政战使体图结正开论之从当两些资队应形想制向关点其与间相压员业代全期导基毛外治解系群意道次文通条公孔领军流接席情运器飞原油题质指验活众教决此强少式转别切九你取连任志观程百更真保热委改处己修支识象光专型复增则完轮科积计节务整联步类列温装轴色坚速史拉设达尔场织历受传况品判参层止至确究术状须离海权证低越试规斯近布需县除齿胜细影济格趋彼届墨碍启逆卸航雾冠丙街莱辐肠付渗瑞顿挤秒悬森糖陶词迟亿矩效推空配述选德话差半敌施响华觉名红续均药存测士紧液派准斤角维板技底床势端感神便贺村构照容搞亚磨族适讲态黄易彪早削台该击素密害侯草树右属市严径螺检左页苏显称';
// 常用二练习表
exerCharacts['cy2'] = '坏移约材武培著帝仅怎京助升抓苗副杂普谈围食射源致酸充足短划剂宣落首尺粉府随考刻靠满夫失包住促枝局菌杆岩举曲春超负砂封换模贫减阳扬江析言球朝校稻宋听唯输站另卫字鼓刚写刘略范供阿块功套限项余倒卷创律远帮播占死毒圈伟季训控激找互裂粮练钢策留误盾晚散焊株院冷彻弹视艺烈室血倍缺厘察绝富城冲喷壤简否柱盘磁雄似巩益脱送奴侧润盖挥距触星松兴独纪依突架宽冬湿偏纹吃执阀寨责熟稳夺硬价努奇甲预评读背协棉侵虽矛厚罗泥辟箱掌氧恩停曾溶营终孟沙退讨械胞幼哪剥迫旋槽握担仍呀鲜卡粗介弱脚盐编蜂急扩伤露核缘振操央伍迅辉异序纸夜乡隶缸夹兰映沟儒汽磷晶埃补咱芽永倾碳威附牙斜灌欧献顺猪洋腐透司危括脉宜若尾束壮企菜穗楚愈拖份染秋遍锻玉';
// 常用三练习表
exerCharacts['cy3'] = '夏疗殖井费荣铜沿替滚召旱刺脑措敢令隙壳硫煤铸探临薄旬纵择愿伏残雷延烟句纯渐耕泽栽鲁赤繁潮掉锥希池败船谓托哲怀割摆贡呈仪沉炼麻息穿货销齐鼠抽画饲龙库守筑房歌喜洗蚀废腹录妇恶脂庄擦险赞钟柄辩竹谷卖乱虚桥奥伯赶途额壁网截野遗静挂课镇妄盛耐援扎虑归庆聚绕摩遇索顾胶羊湖钉仁音碎伸灯避泛亡答勇频皇柳哈揭甘诺概宪浓岛袭谁洪炮浇斑讯懂蛋闭孩释乳徒私伊坦匀霉杜乐勒隔绩招绍胡呼痛峰柴簧午跳尚秦稍梁折耗碱岗挖氏刃剧堆赫荷胸膜篇驻案刊秧役剪川雪链渔啦脸洛孢勃盟宗旗滤硅炭股坐蒸凝竟陷枪黎救暗洞筒您弧爆谬涂味津臂障褐陆健尊豆拔莫抵桑缝警挑污冰嘴啥塑寄赵喊垫康遵牧幅园订香肉屋敏恢忘孙龄岭骗休借渡刨虎笔稀昆浪萨茶滴浅拥穴覆伦娘吨浸珠雌妈紫戏塔锤岁貌洁剖牢锋霸闪埔诉刷狠忽灾闹乔唐漏闻沈氯荒茎抢像浆旁玻忠唱蒙纷捕锁尤乌智淡允叛畜俘摸锈扫毕宝芯爷鉴秘净蒋钙肩腾枯抛轨堂拌爸循诱励绳穷塘燥泡袋铝软渠颗惯贸粪综';

// 记录当前练习的文字序列
var currentSequence = [];
// 记录当前练习的文字
var currentText = '';
// 记录当前练习的文字的打法
var currentCode = '';

// 字根表
var kbData = [
              { section : "3", no : '35', key: 'Q', code: ['鸟', '瓜', '矢', '钅'] },
              { section : "3", no : '34', key: 'W', code: ['牛', '手', '今', '月', '欠', '风', '攵', '爫' ] },
              { section : "3", no : '33', key: 'E', code: ['千', '及', '夕', '彳', '彡', '犭', '夂', '饣'] },
              { section : "3", no : '32', key: 'R', code: ['八', '九', '人', '亻', '儿', '几', '匕', '', '乂', '勹', ''] },
              { section : "3", no : '31', key: 'T', code: ['丿', '金', '鱼', '合', '臼', '隹', ''] },
              { section : "4", no : '41', key: 'Y', code: ['米', '辛', '娄', ''] },
              { section : "4", no : '42', key: 'U', code: ['亠', '丷', '讠', '冖'] },
              { section : "4", no : '43', key: 'I', code: ['广', '门', '之', '辶', '忄', '宀'] },
              { section : "4", no : '44', key: 'O', code: ['六', '方', '心', '斗', '火', '灬', '礻'] },
              { section : "4", no : '45', key: 'P', code: ['立', '必', '疒', '衤'] },
//              { section : "", no : '', key: '[', code: [] },
              { section : "1", no : '15', key: 'A', code: ['古', '龙', '石', '可', '示'] },
              { section : "1", no : '14', key: 'S', code: ['王', '', '云', '不', '区', '天', '车', '廿', '耂'] },
              { section : "1", no : '13', key: 'D', code: ['三', '寸', '大', '土', '士', '工', '艹', '廾', '尢'] },
              { section : "1", no : '12', key: 'F', code: ['二', '十', '七', '厂', '丁', ''] },
              { section : "1", no : '11', key: 'G', code: ['一', '林', '成', '西', '酉', '雨', '共', '耳'] },
              { section : "2", no : '21', key: 'H', code: ['丨', '虫', '早', '具', ''] },
              { section : "2", no : '22', key: 'J', code: ['卜', '刂', '冂', '纟'] },
              { section : "2", no : '23', key: 'K', code: ['口', '山', '小', ''] },
              { section : "2", no : '24', key: 'L', code: ['日', '曰', '冃', '见', '内', '贝', '止'] },
//              { section : "", no : '', key: ']', code: [] },
              //{ section : "", no : '', key: ';', code: [] },
              //{ section : "", no : '', key: '\'', code: [] },
              { section : "", no : '', key: 'Z', code: [] },
              { section : "5", no : '55', key: 'X', code: ['皮', '母', '扌'] },
              { section : "5", no : '54', key: 'C', code: ['巴', '予', '木'] },
              { section : "5", no : '53', key: 'V', code: ['也', '女', '子', '孑', '弓', '马', '尸', '彐', '巛'] },
              { section : "5", no : '52', key: 'B', code: ['力', '又', '凵', '阝', '厶', '', ''] },
              { section : "5", no : '51', key: 'N', code: ['乙', '羽', '氵'] },
              { section : "2", no : '25', key: 'M', code: ['目', '且', '由', '田', '皿', '罒', '氺'] },
              //{ section : "", no : '', key: ',', code: [] },
              //{ section : "", no : '', key: '.', code: [] },
              //{ section : "", no : '', key: '/', code: [] },
              //{ section : "", no : '', key: '', code: [] },
];

// 初始化键盘DOM对象
function initKeyboard() {
	
	var kbHtml = [];
	for (var i = 0; i < kbData.length; i++) {
		var sectionClass = kbData[i].section.length > 0 ? ( 'section' + kbData[i].section) : '';
		kbHtml.push('<li data-key="' + kbData[i].key + '" ' + sectionClass + '>');
		kbHtml.push('	<span class="key ' + sectionClass + '">' + kbData[i].no + kbData[i].key + '</span>');
		if (kbData[i].code.length > 0) {
			for (var c = 0; c < kbData[i].code.length; c++) {
				kbHtml.push('	<span class="etymon" ' + (c == 0 ? 'style="margin-left: 1.1em;"' : '') + '>' + kbData[i].code[c] + '</span>');
				if (c  == 0) {
					kbHtml.push('	<br>');
				}
			}
		}
		kbHtml.push('	<i class="sort"></i>');
		kbHtml.push('</li>');
	}
	
	$('ul.keyboard').html(kbHtml.join('\n'));
	
	
	$('ul.keyboard li[data-key="Q"]').css('clear', 'both');
	$('ul.keyboard li[data-key="A"]').css('clear', 'both').css('margin-left', '2.5em');
	$('ul.keyboard li[data-key="Z"]').css('clear', 'both').css('margin-left', '5em');
}

//初始化 输入框的键盘监听事件
function initShowCodeForInputAction() {
	$('.inputPanel .view-result').unbind('click').bind('click', function() {
		$('.inputPanel .result').html('' + currentCode.toUpperCase() );
		showRightCode();
	});
	
}

function showRightCode() {
	var keys = currentCode.split('');
	for (var i = 0; i < keys.length; i++) {
		$('ul.keyboard li[data-key="' + keys[i].toUpperCase() + '"]').removeClass('selected').addClass('right');
		//$('ul.keyboard li[data-key="' + keys[i].toUpperCase() + '"] .sort').html(i + 1).show();
	}
}

//初始化 输入框的键盘监听事件
function initInputFieldAction() {
	
	$('.inputField').bind('keydown', function() {
		var event = event || window.event;
		var key = String.fromCharCode(event.keyCode).toUpperCase();
		
//		if ( !( (key >= 'A' && key <='Z') || key == '[' || key == ']' ) ) {
//			return;
//		} 
		
		$('.inputPanel .result').html('');
		$('ul.keyboard li.right').removeClass('right');
		$('ul.keyboard li .sort').hide();
//		$('ul.keyboard li.selected').removeClass('selected');
//		// 当连续按同一个字母时，控制按键闪烁
//		setTimeout(function() {
//			$('ul.keyboard li[data-key="' + key + '"]').addClass('selected');
//		}, 50);
		
	});
	
	$('.inputField').bind('textchange', function() {
		
		
		// 判断输入是否正确
		var input = $('.inputPanel .inputField').val();
		
		if (input.length == 0) {
			return;
		}
		
		if (input.length >= currentText.length) {
			// 当用户输入长度，与打法长度一致时，才判断
			// 清空输入
			$('.inputPanel .inputField').val('');
			
			if (input != currentText) {
				// 输入错误
				$('.tooltipPanel .icon').attr('src', 'image/wrong.png');
				$('.tooltipPanel .info').html('错了哦，正确的打法是：' + currentCode.toUpperCase());
				
				showRightCode();
			} else {
				// 输入正确
				$('.tooltipPanel .icon').attr('src', 'image/info.png');
				$('.tooltipPanel .info').html('对了，您真棒，请继续……' );
				
				//下一个字
				doExerise();
			}
		}
	});
}


//初始化练习功能表事件
function initFunctionAction() {
	$('.functionPanel ul li').unbind('click').bind('click', function() {
		var id = $(this).attr('id');
		
		// 显示/隐藏字根
		if (id == 'yczg') {
			$('.keyboardPanel .keyboard .etymon').toggle();
			// 
			$(this).find('div.panel').html($(this).find('div.panel').html() == '隐藏字根' ? '显示字根' : '隐藏字根');
			return;
		}
		
		// 查询编码
		if (id == 'cxbm') {
//			$('.userPanel .queryPanel').toggle();
//			$(this).find('div.panel').html($(this).find('div.panel').html() == '查询编码' ? '隐藏查询框' : '查询编码');
			
			return;
		}
		
		
		$('.functionPanel ul li.selected').removeClass('selected');
		$(this).addClass('selected');
		
		
		// 初始化练习文字序列
		currentSequence = [];
		
		// 读取cookie里的相关值，继续上次
		currentIndex = 0;
		if ($.cookie('index-' + id)) {
			currentIndex = parseInt($.cookie('index-' + id));
			console.log(currentIndex + " | from cookie");
		}
		
		currentCode = '';
		
		$('.tooltipPanel .icon').attr('src', 'image/info.png');
		$('.tooltipPanel .info').html('当前练习模式为：' + $('.functionPanel ul li.selected').find('.panel').html() );
		
		var selectSequence = exerCharacts[id];
		
		if ( selectSequence instanceof Array && selectSequence.length > 1) {
			selectSequence = selectSequence[ Math.ceil( Math.random() * selectSequence.length * 2 ) % selectSequence.length ];
		}
		
		//console.log(selectSequence);
		// 缓存所点项目对应的文字序列, 拆分成数组
		currentSequence = selectSequence.split('');
		//console.log(currentSequence);
		
		// 开始练习
		doExerise();
		
	});
	
}

var currentIndex = 0;
// 开始练习
function doExerise() {
	
	if (currentIndex >= currentSequence.length) {
		$('.contentPanel').html('');
		$('.tooltipPanel .icon').attr('src', 'image/info.png');
		$('.tooltipPanel .info').html('您真棒，您已经完成了：' + $(this).find('.panel').html() );
		
		currentText ='';
		currentCode = '';
		return;
	}
	
	currentText = currentSequence[currentIndex];
	// 显示文字
	$('.contentPanel').html(currentText);
	
	currentCode = dy[currentText];
	
	console.log(currentCode);
	
	// 写入cookie
	$.cookie('index-' + $('.functionPanel ul li.selected').attr('id'), currentIndex);
	// 直接将currentIndex 赋值成下一个字
	currentIndex++;
	
	
	// 初始化信息栏
	//$('.tooltipPanel .info').html('您正在练习 “' + $(this).find('.panel').html() + '”');
	
}