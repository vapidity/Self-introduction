window.onload = function(){
	var oHeader = $('#header'),  //头部区域元素
		oHeaderContent = $('#headerContent'),
		oNav = $('.nav',oHeaderContent)[0],
		oNavKey = $('.navKey',oHeaderContent)[0],
		aLiNav = $('li',oHeaderContent),
		aDivNav = $('div',oNav),
		oTextNav = $('.navTxet',oHeaderContent)[0],
		oShadeNav = $('.navShade',oHeaderContent)[0],
		oImgNav = $('.navImg',oHeaderContent)[0],
		oAnimationNav = $('.navAnimation',oHeaderContent)[0];
	

	var	oContent = $('#content'),
		oList = $('#list'),
		aLiList = $('.liList',oList);

	
	var	oCover = $('#cover'),
		oCoverContent1 = $('.coverContent1',oCover)[0],
		oCoverContent2 = $('.coverContent2',oCover)[0],
		oCross_x = $('.cross_x',oCover)[0],
		oCross_y = $('.cross_y',oCover)[0];

	var oProfile = $('#profile'),
		oAboutme = $('.aboutme',oProfile)[0];

	var oSkills = $('#skills'),
		oSkillsContent = $('.skillsContent',oSkills)[0],
		oSkillsList = $('.skllisList',oSkills)[0],
		aSkillsListLi = $('li',oSkillsList),
		oSkllisTell = $('.skllisTell',oSkillsContent)[0];

	var oWorks = $('#works'),
		oWorksWrite1 = $('.worksWrite1',oWorks)[0],
		oWorksWriteH3 = $('h3',oWorksWrite1)[0],
		aWorksDiv = $('div',oWorksWrite1),
		aWorksSpan = $('span',oWorksWrite1),

		oWorksWrite2 = $('.worksWrite2',oWorks)[0],
		oWorksWriteH32 = $('h3',oWorksWrite2)[0],
		aWorksDiv2 = $('div',oWorksWrite2),
		aWorksSpan2 = $('span',oWorksWrite2);

	var oContact = $('#contact'),
		oContactLi = $('li',oContact),
		oContactP = $('p',oContact),
		oContactContent = $('.contactContent',oContact)[0],
		oContactDiv = $('div',oContactContent),
		oContactUl = $('ul',oContactContent)[0];

	var oTime = $('#time'),
		oUl = $('ul',oTime)[0],
		aLitime = $('li',oTime),
		aSpan = $('span',oTime),
		osecond2 = $('#second2'),
		oMinute = $('#minute'),
		oHour = $('#hour'),
		oCeiling = $('#ceiling'),
		oCeilingLine = $('#ceiling_line'),
		oBot = $('#bot'),
		oTimeText = $('#timeText');

	var arrTimeText = ['别在最能吃苦的年纪选择安逸.',
			'才华、毅力两样，是任何人在任何境况下得到自由的最佳通途.---《肖申克的救赎》超喜欢的电影',
			'将来的你一定会感激现在拼命努力的自己.',
			'只有劳动才可能使人在生活中强大.---《平凡的世界》超喜欢的文学作品，当年生活很糟糕，看的特别有感触',
			'不错，唔乃叶良辰，若你们速速与我联系，那良辰在此多谢了，他日，必有重谢.'],
		arrTimeColor = ['#098','#7671E5','#5579AF','#3EAF71','#098'];
		
	var	oMusic = $('#music'),
		aImg = $('img',oMusic),
		oAudio = $('#audio1');

	var oLoading = $('#loading'),
		oLoadingSpan = $('span',oLoading)[0],
		oLoadingP = $('p',oLoading)[0],
		aLoadingDiv = $('div',oLoading);

	var iNew = 0,
		prevIndex = 0,
		iR = -103;       //圆弧度

	
	
	var arrColor = ['#008899','#817BE5','#5C89D6','#5BB184','#F989AB'];
	arrText = ['Cover','Profile','Skills','Works','Cntact'];
	oTextNav.innerHTML = arrText[0];
	
	
	LoadingShow();       //页面加载
	timeShow();          //时钟
	showMusic();         //音乐
	
	mainMove();          //屏幕、导航、场景动画切换
	
	contentAuto();       //屏幕自适应
	
	skillsContent();     //第三屏效果
	DocuMove();          
	
	//浏览器识别	
	
	//Loading
	function LoadingShow(){  //预加载图片
		var arrPic = ['bg.jpg','email.png','m1.png','m2.png','m3.png',
			'me.png','nav0.png','nav1.png','nav2.png','nav3.png',
			'nav4.png','phone.png','qq.png','works1.png','works2.png'];
		var iNow = 0;
		
		for(var i = 0; i < arrPic.length; i++ ){
			
			var objImg = new Image();

			objImg.src = './img/' + arrPic[i];
			
			objImg.onload = function(){
				iNow++;

				oLoadingSpan.style.width = iNow / arrPic.length * 100 + '%';
			};

			objImg.onerror = function(){
				alert('加载失败');
			}
		}
		
		addEnd( oLoadingSpan,'transition',function(){
			if( oLoadingSpan.style.width == '100%' ){
				setStyle( oLoadingP,'display','none' );
				setStyle( oLoadingSpan,'display','none' );

				setStyle( aLoadingDiv[0],'height','0px' );
				setStyle( aLoadingDiv[1],'height','0px' );
			}
		} );

		addEnd( aLoadingDiv[0],'transition',function(){
			oNavKey.style.transition = '0.6s';
			oNavKey.style.top = '110px';
			addEnd( oNavKey,'transition',function(){
				navInAnMove();
			});
			function navInAnMove(){
				for (var i = 0; i < aLiNav.length; i++) {
					//圆弧计算
					var oLiNavtl = toLT( iR,90/4*i );

					aLiNav[i].style.transition = '0.5s ' + i*100 + 'ms';
					aLiNav[i].style.top = oLiNavtl.t + 'px';
					aLiNav[i].style.left = oLiNavtl.l + 'px';
				};
			}

			cjAnimate[0].inAn();
			oLoading.parentNode.removeChild(oLoading);
			aImg[1].onclick();
		} )
	}

	//Time
	function timeShow(){
		
		for( var i=0; i<aLitime.length; i++ ){
			aLitime[i].style.WebkitTransform = 'rotate('+ (i+1)*30 +'deg)';
			aSpan[i].style.WebkitTransform = 'rotate('+ (i+1)*-30 +'deg)';
		}

		setInterval(toTime,1000);

		function toTime(){
			var oDate = new Date();
			var iSe = oDate.getSeconds();
			var iMin = oDate.getMinutes()+iSe/60;
			var iHour = oDate.getHours()+iMin/60;
			osecond2.style.WebkitTransform = 'rotate('+ iSe*6 +'deg)';
			oMinute.style.WebkitTransform = 'rotate('+ iMin*6 +'deg)';
			oHour.style.WebkitTransform = 'rotate('+ iHour*30 +'deg)';
		}
	}
	function timeColor(index){
		oTime.style.borderColor = arrTimeColor[index];
		oHour.style.background = arrTimeColor[index];
		oMinute.style.background = arrTimeColor[index];
		oBot.style.background = arrTimeColor[index];
		oCeiling.style.background = arrTimeColor[index];
		oCeilingLine.style.background = arrTimeColor[index];
	}

	//音乐
	function showMusic(){
		var onoff = true;
		aImg[1].onclick = function(){
			if(onoff){
				setStyle( this,'animation','2s linear imgScale infinite' );
				setStyle( aImg[0],'animation','2s linear imgRotate infinite' );
				setStyle( aImg[2],'transform','rotate(-20deg)' );
				oAudio.play();
			}
			else{
				setStyle( this,'animationPlayState','paused' );
				setStyle( aImg[0],'animationPlayState','paused' );
				setStyle( aImg[2],'transform','rotate(10deg)' );
				oAudio.pause();
			}
			onoff = !onoff;
		};

		var disX = 0;
		var disY = 0;

		oMusic.onmousedown = function (ev){
			var e = ev || event;
			
			//求得鼠标到元素左边的距离
			disX = e.clientX - this.offsetLeft; 
			disY = e.clientY - this.offsetTop;

			document.onmousemove = function (ev){
				var e = ev || event;

				var l = e.clientX - disX;
				var t = e.clientY - disY;

				//限定移动范围
				if( l < 0 ){
					l = 0;
				}
				if( l > view().W - oMusic.offsetWidth  ){
					l  = view().W - oMusic.offsetWidth
				}
				if( t < 0 ){
					t = 0;
				}
				if( t > view().H - oMusic.offsetHeight  ){
					t  = view().H - oMusic.offsetHeight
				}

				oMusic.style.left = l + "px";	
				oMusic.style.top = t + "px";	
			};
			document.onmouseup = function (){
				document.onmousemove = null;	
				document.onmouseup = null;
				oMusic.onmouseover = Prompt;

				//鼠标抬起时释放事件捕获	
				if( oMusic.releaseCapture ){
					oMusic.releaseCapture();
				}
				DocuMove();	
			};
			oMusic.onmouseover = null;
			//阻止浏览器默认行为  标准浏览器下
			if( e.preventDefault ){
				e.preventDefault();
			};
			//事件捕获
			if( oMusic.setCapture ){
				oMusic.setCapture();
			}
		};

		oMusic.onmouseover = Prompt;
		
		function Prompt(ev){

			var Pro = document.createElement('div');
			oContent.appendChild(Pro);

			Pro.className = 'Prompt';
			Pro.innerHTML = '试着拖动我哦！';

			
			var e = ev || event;
			var eX = e.clientX;
			var eY = e.clientY;

			Pro.style.left = eX - Pro.offsetWidth + 'px';
			Pro.style.top = eY + 'px';
			Pro.style.opacity = 0.3;
			
			var off = true;
			oMusic.onmouseout = function(){ 
				if( off ){
					oContent.removeChild( Pro ) ;
				}
				off = false; 
			};
		
			setTimeout(function(){
				if( off ){
					oContent.removeChild( Pro );
					off = false;
				}
			},1000);
		}	
	}


	//屏幕、导航、场景动画  切换
	function mainMove(){

		//导航点击运动
		for (var i = 0; i < aLiNav.length; i++) {
			aLiNav[i].index = i;
			aLiNav[i].style.borderColor = arrColor[i];
			aDivNav[i].style.background = arrColor[i];
			
			aLiNav[i].onclick = function(){
				prevIndex = iNew;  //记录上一个点击
				
				toMove(this.index);
				iNew = this.index;

				for (var i = 0; i < aLiNav.length; i++) {
					aLiNav[i].className = '';
				};
				this.className = 'active';

				if( this.index != prevIndex ){  //过滤
					oAnimaNav();
				}

				timeColor(this.index);
			}
		}

		//滚轮运动
		mouseWheel( oContent,function(){
			prevIndex = iNew;
			iNew != 0 ? iNew--:'';
			toMove(iNew);
			
			if( iNew != prevIndex ){  //控制导航动画
				oAnimaNav();
			} 
		},function(){
			prevIndex = iNew;
			iNew != aLiList.length - 1 ? iNew++:'';
			toMove(iNew);

			if( iNew != prevIndex ){
				oAnimaNav();
			} 
		});

		//时间的移入
		oTime.onmouseover = function(){
			oTimeText.innerHTML = arrTimeText[iNew];
			oTimeText.style.opacity = 1;
			oTimeText.style.color = arrTimeColor[iNew];
		}
		oTime.onmouseout = function(){
			oTimeText.style.opacity = 0;
		}
	}
	function oAnimaNav(){
		oAnimationNav.style.top = '-100px';
		oAnimationNav.style.left = '-100px';
		oAnimationNav.style.opacity = 0;
		setStyle( oAnimationNav,'transform','scale(0.2)' );
		setStyle( oAnimationNav,'transition','1s' );

		addEnd( oAnimationNav,'transition',function(){
			oAnimationNav.style.top = 0;
			oAnimationNav.style.left = 0;
			oAnimationNav.style.opacity = 1;
			setStyle( oAnimationNav,'transform','scale(1)' );
		} )

		setTimeout(function(){
			oTextNav.innerHTML = arrText[iNew];
			oImgNav.src = './img/nav'+ iNew + '.png';
		},1000);
	}
	function toMove(index){
		//滚动到第几屏
		oList.style.top = -index * view().H + 'px';
		
		//导航的变化
		for (var j = 0; j < aLiNav.length; j++) {
			aLiNav[j].className = '';
		};
		aLiNav[index].className = 'active';
		
		//进场动画，出场动画
		if( cjAnimate[index].inAn ){
			cjAnimate[index].inAn();
		}
		if( cjAnimate[prevIndex].outAn && prevIndex != index ){  //过滤
			cjAnimate[prevIndex].outAn();
		}

		//时间颜色
		timeColor(index);
	}


	//适应屏幕
	function contentAuto(){
		oContent.style.height = view().H + 'px';
		for (var i = 0; i < aLiList.length; i++) {
			aLiList[i].style.height = view().H + 'px';
		};
		oList.style.top = -iNew * view().H + 'px';

		oCoverContent1.style.width = view().W + 800 + 'px';  //COVER 流动背景
	}

	//Skills  第三屏效果
	function skillsContent(){
		//移入移出
		var	data = [
				['裁图、修图','有设计培训经历','有一定的网页设计能力','设计风格多偏向于简洁时尚、层次感、小清新之类'],
				['熟练掌握HTML+CSS网页布局与样式','能写出基于W3C标准的前端网页代码','具备良好的兼容处理'],
				['良好的js基础  原生js编码能力','ajax 前后交互','JSON 数据处理',
					'jquery  了解sea.js模块开发','良好的逻辑能力、语言表达能力、执行力强'],
				['了解HTML5+CSS3','本站采用大量CSS3特性']
			];

		for (var i = 0; i < data[2].length; i++) {
			oSkllisTell.innerHTML += '<p>'+ data[2][i] +'</p>';
		};

		for (var i = 0; i < aSkillsListLi.length; i++) {
			aSkillsListLi[i].index = i;
			aSkillsListLi[i].onmouseover = function(){

				oSkllisTell.innerHTML = '';

				for (var j = 0; j < data[this.index].length; j++) {
					oSkllisTell.innerHTML += '<p>'+ data[this.index][j] +'</p>';
				};
			}
		};
	}
	function DocuMove(){
		//技能菜单
		document.onmousemove = function(ev){
			var ev = ev || window.event;

			for (var i = 0; i < aSkillsListLi.length; i++) {
				aSkillsListLi[i].style.display = 'block';
				aSkillsListLi[i].style.background = arrColor[i];

				var x = aSkillsListLi[i].offsetLeft + aSkillsListLi[i].offsetWidth/2 + oSkillsContent.offsetLeft;
				var y = aSkillsListLi[i].offsetTop + aSkillsListLi[i].offsetHeight/2 + oSkillsContent.offsetTop;

				var b = ev.clientX - x;
				var a = ev.clientY - y;

				var c = Math.sqrt(Math.pow(b,2) + Math.pow(a,2));  //斜边
				
				var scale = 1 - c/500;  //比例

				if(scale<0.5){  //限制最小范围
					scale = 0.5;
				}

				aSkillsListLi[i].style.width = scale * 168 + 'px';
				aSkillsListLi[i].style.height = scale * 168 + 'px';

				aSkillsListLi[i].style.left = (i * 140 + 300) - (scale * 168)/2 + 'px';
				aSkillsListLi[i].style.top = 500 - (scale * 168) + 'px';
			};
		}
	}
	
	//Contact 第五屏效果
	for (var i = 0; i < oContactLi.length; i++) {
		oContactLi[i].index = i;
		oContactLi[i].onmouseover = function(){
			oContactDiv[this.index].style.opacity = 1;
		}
		oContactLi[i].onmouseout = function(){
			oContactDiv[this.index].style.opacity = 0;
		}
	};
	
	window.onresize = contentAuto;

	//动画切换
	var cjAnimate = [
		{
			inAn : function(){
				setStyle( oCross_x,'transition','1s 1s cubic-bezier(.17,.67,.45,1.92)' );
				setStyle( oCross_y,'transition','1s 1s cubic-bezier(.17,.67,.45,1.92)' );
				setStyle( oCross_x,'height','300px' );
				setStyle( oCross_x,'top','-75px' );
				setStyle( oCross_y,'width','425px' );
				setStyle( oCross_y,'left','-80px' );
			},
			outAn : function(){
				setStyle( oCross_x,'transition','0.5s cubic-bezier(.17,.67,.45,1.92)' );
				setStyle( oCross_y,'transition','0.5s cubic-bezier(.17,.67,.45,1.92)' );
				setStyle( oCross_x,'height','100px' );
				setStyle( oCross_x,'top','20px' );
				setStyle( oCross_y,'width','100px' );
				setStyle( oCross_y,'left','20px' );
			}
		},
		{
			inAn : function(){
				setStyle( oAboutme,'transition','1s 1s');
				setStyle( oAboutme,'transform','scale(1)');
				oAboutme.style.opacity = 1;
			},
			outAn : function(){
				setStyle( oAboutme,'transition','0.3s');
				setStyle( oAboutme,'transform','scale(0.5)');
				oAboutme.style.opacity = 0;
			}
		},
		{
			inAn : function(){
				setStyle( oSkllisTell,'transition','1s 1s' );
				setStyle( oSkllisTell,'top','100px' );
				setStyle( oSkllisTell,'left','340px' );
				setStyle( oSkllisTell,'opacity',1 );
			},
			outAn : function(){
				setStyle( oSkllisTell,'transition','0.3s' );
				setStyle( oSkllisTell,'top','0px' );
				setStyle( oSkllisTell,'left','340px' );
				setStyle( oSkllisTell,'opacity',0 );
			}
		},
		{
			inAn : function(){
				//进场
				setStyle( oWorksWrite1,'top','280px' );
				setStyle( oWorksWrite1,'opacity',1 );
				setStyle( oWorksWrite1,'transition','1s 1s' );

				setStyle( oWorksWrite2,'top','280px' );
				setStyle( oWorksWrite2,'opacity',1 );
				setStyle( oWorksWrite2,'transition','1s 1s' );

				addEnd( oWorksWrite1,'transition',function(){

					for (var i = 0; i < aWorksDiv.length; i++) {
						//企业
						aWorksDiv[i].style.webkitTransition = '1s ' + i * 300 + 'ms';

						aWorksDiv[i].style.opacity = 1;
						setStyle( aWorksDiv[i],'transform','rotate(0deg)' );
						//电商
						aWorksDiv2[i].style.webkitTransition = '1s ' + i * 300 + 'ms';

						aWorksDiv2[i].style.opacity = 1;
						setStyle( aWorksDiv2[i],'transform','rotate(0deg)' );
					};

				});

				//企业
				addEnd( aWorksDiv[3],'transition',function(){
					for (var i = 0; i < aWorksSpan.length; i++) {
						aWorksSpan[i].style.webkitTransition = '300ms ' + i * 80 + 'ms';

						aWorksSpan[i].style.opacity = 1;
					};

					addEnd( aWorksSpan[0],'transition',function(){ setStyle( aWorksSpan[0],'opacity',0 )} )
					addEnd( aWorksSpan[1],'transition',function(){ setStyle( aWorksSpan[1],'opacity',0 )} )
					addEnd( aWorksSpan[2],'transition',function(){ setStyle( aWorksSpan[2],'opacity',0 )} )
					addEnd( aWorksSpan[3],'transition',function(){ setStyle( aWorksSpan[3],'opacity',0 )} )

					setStyle( oWorksWrite1,'boxShadow','5px 5px 10px rgba(125,125,125,1)' );
				});

				//电商
				addEnd( aWorksDiv2[3],'transition',function(){
					for (var i = 0; i < aWorksSpan2.length; i++) {
						aWorksSpan2[i].style.webkitTransition = '300ms ' + i * 80 + 'ms';

						aWorksSpan2[i].style.opacity = 1;
					};

					addEnd( aWorksSpan2[0],'transition',function(){ setStyle( aWorksSpan2[0],'opacity',0 )} )
					addEnd( aWorksSpan2[1],'transition',function(){ setStyle( aWorksSpan2[1],'opacity',0 )} )
					addEnd( aWorksSpan2[2],'transition',function(){ setStyle( aWorksSpan2[2],'opacity',0 )} )
					addEnd( aWorksSpan2[3],'transition',function(){ setStyle( aWorksSpan2[3],'opacity',0 )} )

					setStyle( oWorksWrite2,'boxShadow','5px 5px 10px rgba(125,125,125,1)' );
				});
			},
			outAn : function(){

				setStyle( oWorksWrite1,'transition','0.5s' );
				setStyle( oWorksWrite1,'top','150px' );
				setStyle( oWorksWrite1,'opacity',0 );

				setStyle( oWorksWrite2,'transition','0.5s' );
				setStyle( oWorksWrite2,'top','150px' );
				setStyle( oWorksWrite2,'opacity',0 );
			}	
		},
		{
			inAn : function(){
				//进场
				for (var i = 0; i < oContactP.length; i++) {
					setStyle( oContactP[i],'transition','1s ' + 400 * i + 'ms' );
					setStyle( oContactP[i],'opacity',1 );
					oContactP[i].style.top = 120 + i * 40 + 'px';
					oContactP[i].style.left = 250 + 'px';
				};
				setTimeout(function(){
					for (var i = 0; i < oContactLi.length; i++) {
						setStyle( oContactLi[i],'transition','1s' );
						setStyle( oContactLi[i],'opacity',1 );
						oContactLi[i].style.top = '350px';
						oContactLi[i].style.left = 300 + i * 150 + 'px';
					};
				},2000)
			},
			outAn : function(){
				//出场
				for (var i = 0; i < oContactP.length; i++) {
					setStyle( oContactP[i],'transition','0' );
					setStyle( oContactP[i],'opacity',0 );
					oContactP[i].style.top = 20 + i * 40 + 'px';
					oContactP[i].style.left = '250px';
				};
				
				for (var i = 0; i < oContactLi.length; i++) {
					setStyle( oContactLi[i],'opacity',0 );
					setStyle( oContactLi[i],'transition','0.3s' );
				};

				oContactLi[0].style.left = '200px';
				oContactLi[0].style.top = '350px';
				
				oContactLi[1].style.top = '250px';
				oContactLi[1].style.left = '450px';
				
				oContactLi[2].style.left = '700px';
				oContactLi[2].style.top = '350px';
			}
		}
	];

	for(var i=1;i<cjAnimate.length;i++){
		cjAnimate[i].outAn();
	}
}