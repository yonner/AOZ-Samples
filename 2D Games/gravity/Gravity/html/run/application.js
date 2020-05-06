/*@****************************************************************************
*
*   █████╗  ██████╗ ███████╗    ███████╗████████╗██╗   ██╗██████╗ ██╗ ██████╗ 
*  ██╔══██╗██╔═══██╗╚══███╔╝    ██╔════╝╚══██╔══╝██║   ██║██╔══██╗██║██╔═══██╗
*  ███████║██║   ██║  ███╔╝     ███████╗   ██║   ██║   ██║██║  ██║██║██║   ██║
*  ██╔══██║██║   ██║ ███╔╝      ╚════██║   ██║   ██║   ██║██║  ██║██║██║   ██║
*  ██║  ██║╚██████╔╝███████╗    ███████║   ██║   ╚██████╔╝██████╔╝██║╚██████╔╝
*  ╚═╝  ╚═╝ ╚═════╝ ╚══════╝    ╚══════╝   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝ ╚═════╝ 
*
****************************************************************************@*/
//
// Name of your application.
// By You
// Version 0.0
// Created on the ...
// (c) Your Corporation Unlimited
//
// Compiled with AOZ Transpiler Version 0.9.4 Test - 03/02/2020 on the 05/02/2020-20:29:46
//

function Application( canvasId )
{
	this.manifest=JSON.parse('{"version":"9","infos":{"applicationName":"Name of your application.","author":"By You","version":"Version 0.0","date":"Created on the ...","copyright":"(c) Your Corporation Unlimited","start":"main.aoz"},"compilation":{"speed":"fast","syntax":"amosPro","emulation":"1200","usePalette":true,"useShortColors":true,"showCopperBlack":false,"unlimitedScreens":true,"unlimitedWindows":true,"maskHardwareCoordinates":false,"endian":"big","noWarning":[]},"display":{"tvStandard":"pal","width":1024,"height":768,"background":"color","backgroundColor":"#000000","bodyBackgroundColor":"#000000","bodyBackgroundImage":"./runtime/resources/star_night.jpeg","scaleX":2,"scaleY":2,"screenScale":4,"fps":true,"fpsFont":"12px Verdana","fpsColor":"#FFFF00","fpsX":10,"fpsY":16,"fullPage":true,"fullScreen":true,"keepProportions":true,"fullScreenIcon":true,"fullScreenIconX":-34,"fullScreenIconY":2,"fullScreenIconImage":"./runtime/resources/full_screen.png","smallScreenIconImage":"./runtime/resources/small_screen.png"},"sprites":{"collisionBoxed":false,"collisionPrecision":1,"collisionAlphaThreshold":1},"sounds":{"mode":"amiga","volume":1,"preload":true,"numberOfSoundsToPreload":4,"soundPoolSize":4},"gamepad":{"mapping":{"up":38,"down":40,"left":37,"right":37,"fire":32}},"fileSystem":{"caseSensitive":false},"bootScreen":{"active":true,"waitSounds":true,"clickSounds":false},"rainbows":{"mode":"slow"},"fonts":{"listFonts":"amiga","amiga":["2001","broadway","lines","mFast","News","peridot","Pica","sapphire"],"google":["acme"]},"default":{"screen":{"x":120,"y":42,"width":320,"height":256,"numberOfColors":32,"pixelMode":"lowres","palette":["#000000","#AA4400","#FFFFFF","#123456","#FF0000","#00FF00","#0000FF","#666666","#555555","#333333","#773333","#337733","#777733","#333377","#773377","#337777","#000000","#EECC88","#CC6600","#EEAA00","#2277FF","#4499DD","#55AAEE","#AADDFF","#BBDDFF","#CCEEFF","#FFFFFF","#440088","#AA00EE","#EE00EE","#EE0088","#EEEEEE"],"window":{"x":0,"y":0,"fontWidth":8,"fontHeight":8,"border":0,"paper":1,"pen":2,"background":"opaque","font":{"name":"topaz","type":"amiga","height":8},"cursorImage":"./runtime/resources/cursor_amiga.png","cursorColors":[{"r":68,"g":68,"b":0,"a":128},{"r":136,"g":136,"b":0,"a":128},{"r":187,"g":187,"b":0,"a":128},{"r":221,"g":221,"b":0,"a":128},{"r":238,"g":238,"b":0,"a":128},{"r":255,"g":255,"b":34,"a":128},{"r":255,"g":255,"b":136,"a":128},{"r":255,"g":255,"b":204,"a":128},{"r":255,"g":255,"b":255,"a":128},{"r":170,"g":170,"b":255,"a":128},{"r":136,"g":136,"b":204,"a":128},{"r":102,"g":102,"b":170,"a":128},{"r":34,"g":34,"b":102,"a":128},{"r":0,"g":0,"b":68,"a":128},{"r":0,"g":0,"b":17,"a":128},{"r":0,"g":0,"b":0,"a":128}]}}}}');
	this.parent=this;
	this.root=this;
	this.contextName='application';
	this.procParam=0;
	this.procParam$='';
	this.aoz=new AOZ(canvasId,this.manifest);

	// Compiled program begins here
	// ----------------------------
	this.vars=
	{
		BSTARS__array:new AArray(this.aoz,0.0,0),
		ENTX__array:new AArray(this.aoz,0.0,0),
		ENTY__array:new AArray(this.aoz,0.0,0),
		ENTMX__array:new AArray(this.aoz,0.0,0),
		ENTMY__array:new AArray(this.aoz,0.0,0),
		ENTTYPE_array:new AArray(this.aoz,0,0),
		ENTROT_array:new AArray(this.aoz,0,0),
		ENTTIME_array:new AArray(this.aoz,0,0),
		splash_array:new AArray(this.aoz,0,0),
		LEVELENTX__array:new AArray(this.aoz,0.0,0),
		LEVELENTY__array:new AArray(this.aoz,0.0,0),
		LEVELENTMX__array:new AArray(this.aoz,0.0,0),
		LEVELENTMY__array:new AArray(this.aoz,0.0,0),
		LEVELENTTYPE_array:new AArray(this.aoz,0,0),
		LEVELENTTIME_array:new AArray(this.aoz,0,0)
	}
	this.blocks=[];
	this.blocks[0]=function()
	{
		// Screen Open 0,screen width,screen height,32,Lowres 'open the screen'
		this.aoz.sourcePos="17:0";
		this.aoz.screenOpen(0,this.aoz.currentScreen.dimension.width,this.aoz.currentScreen.dimension.height,32,0);
		// palette $0,$FFF,$777,$222 'a simple palette'
		this.aoz.sourcePos="18:0";
		this.aoz.currentScreen.setPalette([0x0,0xFFF,0x777,0x222]);
		// Double Buffer
		this.aoz.sourcePos="19:0";
		this.aoz.renderer.setDoubleBuffer();
		// Autoback 0
		this.aoz.sourcePos="20:0";
		this.aoz.renderer.autoback(0);
		// MAXENTS=300 'maximum number of entities'
		this.aoz.sourcePos="22:0";
		this.vars.MAXENTS=300;
		// BGSTARS=180 'number of background stars'
		this.aoz.sourcePos="23:0";
		this.vars.BGSTARS=180;
		// SCALE=0
		this.aoz.sourcePos="24:0";
		this.vars.SCALE=0;
		// Javascript
		   this.vars.SCALE=this.aoz.currentScreen.scale.x;
		   // End Javascript
		// Dim BSTARS#(BGSTARS,3) 'background stars'
		this.aoz.sourcePos="30:0";
		this.vars.BSTARS__array.dim([this.vars.BGSTARS,3],0);
		// For t=0 to BGSTARS-1
		this.aoz.sourcePos="32:0";
		this.vars.t=0;
		if(this.vars.t>this.vars.BGSTARS-1)
			return{type:1,label:2};
	};
	this.blocks[1]=function()
	{
		// BSTARS#(t,2)=Rnd(4)+2
		this.aoz.sourcePos="33:3";
		this.vars.BSTARS__array.setValue([this.vars.t,2],this.aoz.rnd(4)+2);
		// BSTARS#(t,0)=10000+Rnd(320*BSTARS#(t,2))
		this.aoz.sourcePos="34:3";
		this.vars.BSTARS__array.setValue([this.vars.t,0],10000+this.aoz.rnd(320*this.vars.BSTARS__array.getValue([this.vars.t,2])));
		// BSTARS#(t,1)=10000+Rnd(256*BSTARS#(t,2))
		this.aoz.sourcePos="35:3";
		this.vars.BSTARS__array.setValue([this.vars.t,1],10000+this.aoz.rnd(256*this.vars.BSTARS__array.getValue([this.vars.t,2])));
		// next t
		this.aoz.sourcePos="36:0";
		this.vars.t+=1;
		if(this.vars.t<=this.vars.BGSTARS-1)
			return{type:1,label:1}
	};
	this.blocks[2]=function()
	{
		// Dim ENTX#(MAXENTS)   'x position'
		this.aoz.sourcePos="40:0";
		this.vars.ENTX__array.dim([this.vars.MAXENTS],0);
		// Dim ENTY#(MAXENTS)   'y position'
		this.aoz.sourcePos="41:0";
		this.vars.ENTY__array.dim([this.vars.MAXENTS],0);
		// Dim ENTMX#(MAXENTS)  'x velocity'
		this.aoz.sourcePos="42:0";
		this.vars.ENTMX__array.dim([this.vars.MAXENTS],0);
		// Dim ENTMY#(MAXENTS)  'y velocity'
		this.aoz.sourcePos="43:0";
		this.vars.ENTMY__array.dim([this.vars.MAXENTS],0);
		// Dim ENTTYPE(MAXENTS) 'type of entity'
		this.aoz.sourcePos="44:0";
		this.vars.ENTTYPE_array.dim([this.vars.MAXENTS],0);
		// Dim ENTROT(MAXENTS)  'rotation'
		this.aoz.sourcePos="45:0";
		this.vars.ENTROT_array.dim([this.vars.MAXENTS],0);
		// Dim ENTTIME(MAXENTS) 'number of frames the entity stays before being removed'
		this.aoz.sourcePos="46:0";
		this.vars.ENTTIME_array.dim([this.vars.MAXENTS],0);
		// Dim splash(500,40)
		this.aoz.sourcePos="48:0";
		this.vars.splash_array.dim([500,40],0);
		// Gosub CREATETITLE
		this.aoz.sourcePos="50:0";
		return{type:2,label:172,return:3};
	};
	this.blocks[3]=function()
	{
		// Dim LEVELENTX#(MAXENTS)
		this.aoz.sourcePos="55:0";
		this.vars.LEVELENTX__array.dim([this.vars.MAXENTS],0);
		// Dim LEVELENTY#(MAXENTS)
		this.aoz.sourcePos="56:0";
		this.vars.LEVELENTY__array.dim([this.vars.MAXENTS],0);
		// Dim LEVELENTMX#(MAXENTS)
		this.aoz.sourcePos="57:0";
		this.vars.LEVELENTMX__array.dim([this.vars.MAXENTS],0);
		// Dim LEVELENTMY#(MAXENTS)
		this.aoz.sourcePos="58:0";
		this.vars.LEVELENTMY__array.dim([this.vars.MAXENTS],0);
		// Dim LEVELENTTYPE(MAXENTS)
		this.aoz.sourcePos="59:0";
		this.vars.LEVELENTTYPE_array.dim([this.vars.MAXENTS],0);
		// Dim LEVELENTTIME(MAXENTS)
		this.aoz.sourcePos="60:0";
		this.vars.LEVELENTTIME_array.dim([this.vars.MAXENTS],0);
		// NUMLEVELENT=0
		this.aoz.sourcePos="61:0";
		this.vars.NUMLEVELENT=0;
		// SHIPX#=160 'x position: ship is supposed to be centered in the screen'
		this.aoz.sourcePos="65:0";
		this.vars.SHIPX_=160;
		// SHIPY#=128 'y position'
		this.aoz.sourcePos="66:0";
		this.vars.SHIPY_=128;
		// ROT=90   'ship angle of rotation'
		this.aoz.sourcePos="67:0";
		this.vars.ROT=90;
		// ROTSPEED=6 'speed to turn with'
		this.aoz.sourcePos="68:0";
		this.vars.ROTSPEED=6;
		// SHIELD=100 'the ships shield power, will decrease if colliding or being hit in other ways'
		this.aoz.sourcePos="69:0";
		this.vars.SHIELD=100;
		// HEALTH=100 'the ships health'
		this.aoz.sourcePos="70:0";
		this.vars.HEALTH=100;
		// SHOWSHIELD=0
		this.aoz.sourcePos="71:0";
		this.vars.SHOWSHIELD=0;
		// AIR#=0.01
		this.aoz.sourcePos="74:0";
		this.vars.AIR_=0.01;
		// MAXSPEED=5 'maximum ship speed'
		this.aoz.sourcePos="76:0";
		this.vars.MAXSPEED=5;
		// ZO=6
		this.aoz.sourcePos="77:0";
		this.vars.ZO=6;
		// GRAV=40 'gravitational factor: decrease for more gravity force'
		this.aoz.sourcePos="78:0";
		this.vars.GRAV=40;
		// ENGINE=8 'Engine power: decrease for more power'
		this.aoz.sourcePos="79:0";
		this.vars.ENGINE=8;
		// ENGINER=ENGINE*2 'reverse engine power: decrease for more power'
		this.aoz.sourcePos="80:0";
		this.vars.ENGINER=Math.floor(this.vars.ENGINE*2);
		// NUMENT=0
		this.aoz.sourcePos="81:0";
		this.vars.NUMENT=0;
		// SHIPXY#=0
		this.aoz.sourcePos="82:0";
		this.vars.SHIPXY_=0;
		// OFFSETX#=10000
		this.aoz.sourcePos="83:0";
		this.vars.OFFSETX_=10000;
		// OFFSETY#=10000
		this.aoz.sourcePos="84:0";
		this.vars.OFFSETY_=10000;
		// GROUNDED=False
		this.aoz.sourcePos="85:0";
		this.vars.GROUNDED=Math.floor(false);
		// SDELAY=0
		this.aoz.sourcePos="86:0";
		this.vars.SDELAY=0;
		// CDIST#=0
		this.aoz.sourcePos="87:0";
		this.vars.CDIST_=0;
		// CHECKY#=0
		this.aoz.sourcePos="88:0";
		this.vars.CHECKY_=0;
		// BX#=0
		this.aoz.sourcePos="89:0";
		this.vars.BX_=0;
		// BY#=0
		this.aoz.sourcePos="90:0";
		this.vars.BY_=0;
		// SPAWNENTPOS=0
		this.aoz.sourcePos="91:0";
		this.vars.SPAWNENTPOS=0;
		// brot#=0
		this.aoz.sourcePos="92:0";
		this.vars.brot_=0;
		// Degree
		this.aoz.sourcePos="94:0";
		this.aoz.degreeRadian=Math.PI/180.0;
		// NUMLEVELENT=5
		this.aoz.sourcePos="100:0";
		this.vars.NUMLEVELENT=5;
		// LEVELENTX#(0)=9500
		this.aoz.sourcePos="101:0";
		this.vars.LEVELENTX__array.setValue([0],9500);
		// LEVELENTY#(0)=9500
		this.aoz.sourcePos="102:0";
		this.vars.LEVELENTY__array.setValue([0],9500);
		// LEVELENTTYPE(0)=1
		this.aoz.sourcePos="103:0";
		this.vars.LEVELENTTYPE_array.setValue([0],1);
		// LEVELENTTIME(0)=90
		this.aoz.sourcePos="104:0";
		this.vars.LEVELENTTIME_array.setValue([0],90);
		// LEVELENTX#(1)=10000
		this.aoz.sourcePos="105:0";
		this.vars.LEVELENTX__array.setValue([1],10000);
		// LEVELENTY#(1)=10400
		this.aoz.sourcePos="106:0";
		this.vars.LEVELENTY__array.setValue([1],10400);
		// LEVELENTTYPE(1)=1
		this.aoz.sourcePos="107:0";
		this.vars.LEVELENTTYPE_array.setValue([1],1);
		// LEVELENTTIME(1)=90
		this.aoz.sourcePos="108:0";
		this.vars.LEVELENTTIME_array.setValue([1],90);
		// LEVELENTX#(2)=10400
		this.aoz.sourcePos="109:0";
		this.vars.LEVELENTX__array.setValue([2],10400);
		// LEVELENTY#(2)=10400
		this.aoz.sourcePos="110:0";
		this.vars.LEVELENTY__array.setValue([2],10400);
		// LEVELENTTYPE(2)=1
		this.aoz.sourcePos="111:0";
		this.vars.LEVELENTTYPE_array.setValue([2],1);
		// LEVELENTTIME(2)=90
		this.aoz.sourcePos="112:0";
		this.vars.LEVELENTTIME_array.setValue([2],90);
		// LEVELENTX#(3)=9800
		this.aoz.sourcePos="113:0";
		this.vars.LEVELENTX__array.setValue([3],9800);
		// LEVELENTY#(3)=10400
		this.aoz.sourcePos="114:0";
		this.vars.LEVELENTY__array.setValue([3],10400);
		// LEVELENTTYPE(3)=1
		this.aoz.sourcePos="115:0";
		this.vars.LEVELENTTYPE_array.setValue([3],1);
		// LEVELENTTIME(3)=90
		this.aoz.sourcePos="116:0";
		this.vars.LEVELENTTIME_array.setValue([3],90);
		// LEVELENTX#(4)=10800
		this.aoz.sourcePos="117:0";
		this.vars.LEVELENTX__array.setValue([4],10800);
		// LEVELENTY#(4)=10400
		this.aoz.sourcePos="118:0";
		this.vars.LEVELENTY__array.setValue([4],10400);
		// LEVELENTTYPE(4)=1
		this.aoz.sourcePos="119:0";
		this.vars.LEVELENTTYPE_array.setValue([4],1);
		// LEVELENTTIME(4)=90
		this.aoz.sourcePos="120:0";
		this.vars.LEVELENTTIME_array.setValue([4],90);
		// LEVELENTX#(4)=10200
		this.aoz.sourcePos="121:0";
		this.vars.LEVELENTX__array.setValue([4],10200);
		// LEVELENTY#(4)=10100
		this.aoz.sourcePos="122:0";
		this.vars.LEVELENTY__array.setValue([4],10100);
		// LEVELENTTYPE(4)=2
		this.aoz.sourcePos="123:0";
		this.vars.LEVELENTTYPE_array.setValue([4],2);
		// LEVELENTTIME(4)=900
		this.aoz.sourcePos="124:0";
		this.vars.LEVELENTTIME_array.setValue([4],900);
		// MAXENTS=MAXENTS-1
		this.aoz.sourcePos="126:0";
		this.vars.MAXENTS=Math.floor(this.vars.MAXENTS-1);
		// QUIT=0
		this.aoz.sourcePos="127:0";
		this.vars.QUIT=0;
		// FC=0
		this.aoz.sourcePos="128:0";
		this.vars.FC=0;
		// FCDELAY=10
		this.aoz.sourcePos="129:0";
		this.vars.FCDELAY=10;
		// Global FC,FCDELAY
		this.aoz.sourcePos="131:0";
		// LEFTKEY=32
		this.aoz.sourcePos="133:0";
		this.vars.LEFTKEY=32;
		// RIGHTKEY=34
		this.aoz.sourcePos="134:0";
		this.vars.RIGHTKEY=34;
		// FORWARDKEY=17
		this.aoz.sourcePos="135:0";
		this.vars.FORWARDKEY=17;
		// BACKWARDSKEY=33
		this.aoz.sourcePos="136:0";
		this.vars.BACKWARDSKEY=33;
		// SHOOTKEY=64
		this.aoz.sourcePos="137:0";
		this.vars.SHOOTKEY=64;
		// set paint 0
		this.aoz.sourcePos="140:0";
		this.aoz.currentScreen.setPaint(0);
		// Cls 0
		this.aoz.sourcePos="141:0";
		this.aoz.currentScreen.cls(0);
		// Timer=0
		this.aoz.sourcePos="142:0";
		this.aoz.setTimer(0);
		// EDMODE=False
		this.aoz.sourcePos="143:0";
		this.vars.EDMODE=Math.floor(false);
		// For T=0 To 5
		this.aoz.sourcePos="147:0";
		this.vars.T=0;
		if(this.vars.T>5)
			return{type:1,label:6};
	};
	this.blocks[4]=function()
	{
		// ENT=30
		this.aoz.sourcePos="148:4";
		this.vars.ENT=30;
		// Gosub SPAWNENT
		this.aoz.sourcePos="149:4";
		return{type:2,label:156,return:5};
	};
	this.blocks[5]=function()
	{
		// Next T
		this.aoz.sourcePos="150:0";
		this.vars.T+=1;
		if(this.vars.T<=5)
			return{type:1,label:4}
	};
	this.blocks[6]=function()
	{
		// Hot Spot 1,95,70
		this.aoz.sourcePos="153:0";
		this.aoz.banks.setImageHotSpot("images",1,{x:95,y:70});
		// Hot Spot 2,65,70
		this.aoz.sourcePos="154:0";
		this.aoz.banks.setImageHotSpot("images",2,{x:65,y:70});
		// Hot Spot 3,7,62
		this.aoz.sourcePos="155:0";
		this.aoz.banks.setImageHotSpot("images",3,{x:7,y:62});
		// Hot Spot 5,65,70
		this.aoz.sourcePos="156:0";
		this.aoz.banks.setImageHotSpot("images",5,{x:65,y:70});
		// EDMODE=True
		this.aoz.sourcePos="159:0";
		this.vars.EDMODE=Math.floor(true);
		// FL=Timer
		this.aoz.sourcePos="161:0";
		this.vars.FL=Math.floor(this.aoz.getTimer());
		// Repeat 'Main loop'
		this.aoz.sourcePos="163:0";
	};
	this.blocks[7]=function()
	{
		// cls 0 'clear the screen'
		this.aoz.sourcePos="164:3";
		this.aoz.currentScreen.cls(0);
		// A$=Inkey$ 'get some input'
		this.aoz.sourcePos="165:3";
		this.vars.A$=this.aoz.inkey$();
		// If Key State(64) and EDMODE=True 'toggle edmode (not implemented yet)'
		this.aoz.sourcePos="166:3";
		if(!(this.aoz.keyState(64)&&this.vars.EDMODE==true))
			return{type:1,label:10};
		// If EDMODE=False : EDMODE=True : Else : EDMODE=False : End If
		this.aoz.sourcePos="167:6";
		if(!(this.vars.EDMODE==false))
			return{type:1,label:8};
		this.aoz.sourcePos="167:24";
		this.vars.EDMODE=Math.floor(true);
		return{type:1,label:9};
	};
	this.blocks[8]=function()
	{
		this.aoz.sourcePos="167:45";
		this.vars.EDMODE=Math.floor(false);
		this.aoz.sourcePos="167:60";
	};
	this.blocks[9]=function()
	{
		// End If
		this.aoz.sourcePos="168:3";
	};
	this.blocks[10]=function()
	{
		// If Mouse Key=1 and EDMODE=True 'not really doing anything yet this'
		this.aoz.sourcePos="170:3";
		if(!(this.aoz.mouseButtons==1&&this.vars.EDMODE==true))
			return{type:1,label:13};
		// X=X Screen(X Mouse)
		this.aoz.sourcePos="171:6";
		this.vars.X=Math.floor((this.aoz.getXMouse()-this.aoz.currentScreen.position.x)/this.aoz.currentScreen.renderScale.x );
		// Y=Y Screen(Y Mouse)
		this.aoz.sourcePos="172:6";
		this.vars.Y=Math.floor((this.aoz.getYMouse()-this.aoz.currentScreen.position.y)/this.aoz.currentScreen.renderScale.y);
		// OFFSETX#=OFFSETX#-(SHIPX#-X)
		this.aoz.sourcePos="174:6";
		this.vars.OFFSETX_=this.vars.OFFSETX_-(this.vars.SHIPX_-this.vars.X);
		// OFFSETY#=OFFSETY#-(SHIPY#-Y)
		this.aoz.sourcePos="175:6";
		this.vars.OFFSETY_=this.vars.OFFSETY_-(this.vars.SHIPY_-this.vars.Y);
		// While Mouse Key=1 : Wend
		this.aoz.sourcePos="176:6";
		if(!(this.aoz.mouseButtons==1))
			return{type:1,label:12};
	};
	this.blocks[11]=function()
	{
		this.aoz.sourcePos="176:26";
		if(this.aoz.mouseButtons==1)
			return{type:1,label:11};
	};
	this.blocks[12]=function()
	{
		// End If
		this.aoz.sourcePos="177:3";
	};
	this.blocks[13]=function()
	{
		// if EDMODE=False
		this.aoz.sourcePos="180:3";
		if(!(this.vars.EDMODE==false))
			return{type:1,label:41};
		// If Key State(LEFTKEY) 'A key pressed, rotating left'
		this.aoz.sourcePos="181:6";
		if(!(this.aoz.keyState(this.vars.LEFTKEY)))
			return{type:1,label:14};
		// Add ROT,-ROTSPEED,0 to 360 'rotation in degrees 0-360'
		this.aoz.sourcePos="182:9";
		this.aoz.add({name:"ROT",type:0},-this.vars.ROTSPEED,0,360)
		// End If
		this.aoz.sourcePos="183:6";
	};
	this.blocks[14]=function()
	{
		// If Key State(34) 'D key pressed, rotating right'
		this.aoz.sourcePos="184:6";
		if(!(this.aoz.keyState(34)))
			return{type:1,label:15};
		// Add ROT,ROTSPEED,0 to 360
		this.aoz.sourcePos="185:9";
		this.aoz.add({name:"ROT",type:0},this.vars.ROTSPEED,0,360)
		// End If
		this.aoz.sourcePos="186:6";
	};
	this.blocks[15]=function()
	{
		// If key State(FORWARDKEY) 'W key pressed, accelerating'
		this.aoz.sourcePos="187:6";
		if(!(this.aoz.keyState(this.vars.FORWARDKEY)))
			return{type:1,label:21};
		// GASON=GASON-1 'delay the sound so we dont play it each frame'
		this.aoz.sourcePos="188:9";
		this.vars.GASON=Math.floor(this.vars.GASON-1);
		// GROUNDED=False 'taking off - not on the ground any more'
		this.aoz.sourcePos="189:9";
		this.vars.GROUNDED=Math.floor(false);
		// If (Abs(BX#+Cos(ROT)/ENGINE)+Abs(BY#+Sin(ROT)/ENGINE))/2<MAXSPEED 'keep us below MAXSPEED'
		this.aoz.sourcePos="190:9";
		if(!((Math.abs(this.vars.BX_+Math.cos((this.vars.ROT)*this.aoz.degreeRadian)/this.vars.ENGINE)+Math.abs(this.vars.BY_+Math.sin((this.vars.ROT)*this.aoz.degreeRadian)/this.vars.ENGINE))/2<this.vars.MAXSPEED))
			return{type:1,label:16};
		// BX#=BX#+Cos(ROT)/ENGINE 'if below MAXSPEED, add engine power to ship velocity'
		this.aoz.sourcePos="191:12";
		this.vars.BX_=this.vars.BX_+Math.cos((this.vars.ROT)*this.aoz.degreeRadian)/this.vars.ENGINE;
		// BY#=BY#+Sin(ROT)/ENGINE
		this.aoz.sourcePos="192:12";
		this.vars.BY_=this.vars.BY_+Math.sin((this.vars.ROT)*this.aoz.degreeRadian)/this.vars.ENGINE;
		// End If
		this.aoz.sourcePos="193:9";
	};
	this.blocks[16]=function()
	{
		// For T=0 To 4 'spawn some stuff from the engine'
		this.aoz.sourcePos="194:9";
		this.vars.T=0;
		if(this.vars.T>4)
			return{type:1,label:19};
	};
	this.blocks[17]=function()
	{
		// ENT=11
		this.aoz.sourcePos="195:12";
		this.vars.ENT=11;
		// Gosub SPAWNENT
		this.aoz.sourcePos="196:12";
		return{type:2,label:156,return:18};
	};
	this.blocks[18]=function()
	{
		// Next T
		this.aoz.sourcePos="197:9";
		this.vars.T+=1;
		if(this.vars.T<=4)
			return{type:1,label:17}
	};
	this.blocks[19]=function()
	{
		// if GASON<=0 : sam play 4 : GASON=8 : End If 'play an engine sound'
		this.aoz.sourcePos="198:9";
		if(!(this.vars.GASON<=0))
			return{type:1,label:20};
		this.aoz.sourcePos="198:23";
		this.aoz.moduleSounds.callVoices( 'playSound', 0xFFFFFFFF, [ 4 ] );
		this.aoz.sourcePos="198:36";
		this.vars.GASON=8;
		this.aoz.sourcePos="198:46";
	};
	this.blocks[20]=function()
	{
		// End If
		this.aoz.sourcePos="199:6";
	};
	this.blocks[21]=function()
	{
		// If key State(BACKWARDSKEY) 'S key pressed, reversing'
		this.aoz.sourcePos="200:6";
		if(!(this.aoz.keyState(this.vars.BACKWARDSKEY)))
			return{type:1,label:27};
		// GASON=GASON-1 'delay the sound so we dont play it each frame'
		this.aoz.sourcePos="201:9";
		this.vars.GASON=Math.floor(this.vars.GASON-1);
		// GROUNDED=False 'taking off - not on the ground any more'
		this.aoz.sourcePos="202:9";
		this.vars.GROUNDED=Math.floor(false);
		// If (Abs(BX#-Cos(ROT)/ENGINER)+Abs(BY#-Sin(ROT)/ENGINER))/2<(MAXSPEED) 'keep us below MAXSPEED'
		this.aoz.sourcePos="203:9";
		if(!((Math.abs(this.vars.BX_-Math.cos((this.vars.ROT)*this.aoz.degreeRadian)/this.vars.ENGINER)+Math.abs(this.vars.BY_-Math.sin((this.vars.ROT)*this.aoz.degreeRadian)/this.vars.ENGINER))/2<(this.vars.MAXSPEED)))
			return{type:1,label:22};
		// BX#=BX#-Cos(ROT)/ENGINER 'if below MAXSPEED, add engine power to ship velocity'
		this.aoz.sourcePos="204:12";
		this.vars.BX_=this.vars.BX_-Math.cos((this.vars.ROT)*this.aoz.degreeRadian)/this.vars.ENGINER;
		// BY#=BY#-Sin(ROT)/ENGINER
		this.aoz.sourcePos="205:12";
		this.vars.BY_=this.vars.BY_-Math.sin((this.vars.ROT)*this.aoz.degreeRadian)/this.vars.ENGINER;
		// End If
		this.aoz.sourcePos="206:9";
	};
	this.blocks[22]=function()
	{
		// For T=0 To 2 'spawn some stuff from the engine'
		this.aoz.sourcePos="207:9";
		this.vars.T=0;
		if(this.vars.T>2)
			return{type:1,label:25};
	};
	this.blocks[23]=function()
	{
		// ENT=12
		this.aoz.sourcePos="208:12";
		this.vars.ENT=12;
		// Gosub SPAWNENT
		this.aoz.sourcePos="209:12";
		return{type:2,label:156,return:24};
	};
	this.blocks[24]=function()
	{
		// Next T
		this.aoz.sourcePos="210:9";
		this.vars.T+=1;
		if(this.vars.T<=2)
			return{type:1,label:23}
	};
	this.blocks[25]=function()
	{
		// if GASON<=0 : sam play 4 : GASON=8 : End If 'play an engine sound'
		this.aoz.sourcePos="211:9";
		if(!(this.vars.GASON<=0))
			return{type:1,label:26};
		this.aoz.sourcePos="211:23";
		this.aoz.moduleSounds.callVoices( 'playSound', 0xFFFFFFFF, [ 4 ] );
		this.aoz.sourcePos="211:36";
		this.vars.GASON=8;
		this.aoz.sourcePos="211:46";
	};
	this.blocks[26]=function()
	{
		// End If
		this.aoz.sourcePos="212:6";
	};
	this.blocks[27]=function()
	{
		// If Key State(SHOOTKEY) and SDELAY<0 'fire key pressed, shooting'
		this.aoz.sourcePos="213:6";
		if(!(this.aoz.keyState(this.vars.SHOOTKEY)&&this.vars.SDELAY<0))
			return{type:1,label:29};
		// ENT=20
		this.aoz.sourcePos="214:9";
		this.vars.ENT=20;
		// SDELAY=8 'delay so we dont fire to often'
		this.aoz.sourcePos="215:9";
		this.vars.SDELAY=8;
		// Sam play 1
		this.aoz.sourcePos="216:9";
		this.aoz.moduleSounds.callVoices( 'playSound', 0xFFFFFFFF, [ 1 ] );
		// Gosub SPAWNENT
		this.aoz.sourcePos="217:9";
		return{type:2,label:156,return:28};
	};
	this.blocks[28]=function()
	{
		// End If
		this.aoz.sourcePos="218:6";
	};
	this.blocks[29]=function()
	{
		// If GRAV>0 and GROUNDED=False and EDMODE=False
		this.aoz.sourcePos="219:6";
		if(!(this.vars.GRAV>0&&this.vars.GROUNDED==false&&this.vars.EDMODE==false))
			return{type:1,label:37};
		// If (Abs(BX#+Cos(270)/GRAV)+Abs(BY#+Sin(270)/GRAV))/2<MAXSPEED
		this.aoz.sourcePos="220:9";
		if(!((Math.abs(this.vars.BX_+Math.cos((270)*this.aoz.degreeRadian)/this.vars.GRAV)+Math.abs(this.vars.BY_+Math.sin((270)*this.aoz.degreeRadian)/this.vars.GRAV))/2<this.vars.MAXSPEED))
			return{type:1,label:30};
		// BX#=BX#+Cos(270)/GRAV
		this.aoz.sourcePos="221:12";
		this.vars.BX_=this.vars.BX_+Math.cos((270)*this.aoz.degreeRadian)/this.vars.GRAV;
		// BY#=BY#+Sin(270)/GRAV
		this.aoz.sourcePos="222:12";
		this.vars.BY_=this.vars.BY_+Math.sin((270)*this.aoz.degreeRadian)/this.vars.GRAV;
		// End If
		this.aoz.sourcePos="223:9";
	};
	this.blocks[30]=function()
	{
		// If BX#>0 And BX#-AIR#<MAXSPEED
		this.aoz.sourcePos="224:9";
		if(!(this.vars.BX_>0&&this.vars.BX_-this.vars.AIR_<this.vars.MAXSPEED))
			return{type:1,label:31};
		// BX#=BX#-AIR#
		this.aoz.sourcePos="225:12";
		this.vars.BX_=this.vars.BX_-this.vars.AIR_;
		// Else
		return{type:1,label:33};
	};
	this.blocks[31]=function()
	{
		// If BX#+AIR#<MAXSPEED
		this.aoz.sourcePos="227:12";
		if(!(this.vars.BX_+this.vars.AIR_<this.vars.MAXSPEED))
			return{type:1,label:32};
		// BX#=BX#+AIR#
		this.aoz.sourcePos="228:15";
		this.vars.BX_=this.vars.BX_+this.vars.AIR_;
		// End If
		this.aoz.sourcePos="229:12";
	};
	this.blocks[32]=function()
	{
		// End If
		this.aoz.sourcePos="230:9";
	};
	this.blocks[33]=function()
	{
		// If BY#>0 and BY#-AIR#<MAXSPEED
		this.aoz.sourcePos="231:9";
		if(!(this.vars.BY_>0&&this.vars.BY_-this.vars.AIR_<this.vars.MAXSPEED))
			return{type:1,label:34};
		// BY#=BY#-AIR#
		this.aoz.sourcePos="232:12";
		this.vars.BY_=this.vars.BY_-this.vars.AIR_;
		// Else
		return{type:1,label:36};
	};
	this.blocks[34]=function()
	{
		// If BY#+AIR#<MAXSPEED
		this.aoz.sourcePos="234:12";
		if(!(this.vars.BY_+this.vars.AIR_<this.vars.MAXSPEED))
			return{type:1,label:35};
		// BY#=BY#+AIR#
		this.aoz.sourcePos="235:15";
		this.vars.BY_=this.vars.BY_+this.vars.AIR_;
		// End If
		this.aoz.sourcePos="236:12";
	};
	this.blocks[35]=function()
	{
		// End If
		this.aoz.sourcePos="237:9";
	};
	this.blocks[36]=function()
	{
		// Else
		return{type:1,label:40};
	};
	this.blocks[37]=function()
	{
		// If GROUNDED=True
		this.aoz.sourcePos="239:9";
		if(!(this.vars.GROUNDED==true))
			return{type:1,label:39};
		// If Abs(BX#)<0.3 and Abs(BY#)<0.3
		this.aoz.sourcePos="240:12";
		if(!(Math.abs(this.vars.BX_)<0.3&&Math.abs(this.vars.BY_)<0.3))
			return{type:1,label:38};
		// BX#=0 : BY#=0 : ROT=90
		this.aoz.sourcePos="241:15";
		this.vars.BX_=0;
		this.aoz.sourcePos="241:23";
		this.vars.BY_=0;
		this.aoz.sourcePos="241:31";
		this.vars.ROT=90;
		// End If
		this.aoz.sourcePos="242:12";
	};
	this.blocks[38]=function()
	{
		// End IF
		this.aoz.sourcePos="243:9";
	};
	this.blocks[39]=function()
	{
		// End If
		this.aoz.sourcePos="244:6";
	};
	this.blocks[40]=function()
	{
		// End if
		this.aoz.sourcePos="245:3";
	};
	this.blocks[41]=function()
	{
		// If GROUNDED=False 'since the ship is in the center of the screen change the offsets'
		this.aoz.sourcePos="247:3";
		if(!(this.vars.GROUNDED==false))
			return{type:1,label:42};
		// OFFSETX#=OFFSETX#-BX#
		this.aoz.sourcePos="248:6";
		this.vars.OFFSETX_=this.vars.OFFSETX_-this.vars.BX_;
		// OFFSETY#=OFFSETY#-BY#
		this.aoz.sourcePos="249:6";
		this.vars.OFFSETY_=this.vars.OFFSETY_-this.vars.BY_;
		// End If
		this.aoz.sourcePos="250:3";
	};
	this.blocks[42]=function()
	{
		// Gosub _UPDATEBACKGROUND 'update the background stars'
		this.aoz.sourcePos="252:3";
		return{type:2,label:84,return:43};
	};
	this.blocks[43]=function()
	{
		// If EDMODE=True 'Display title and info about controls'
		this.aoz.sourcePos="254:3";
		if(!(this.vars.EDMODE==true))
			return{type:1,label:45};
		// Gosub UPDATETITLE
		this.aoz.sourcePos="255:6";
		return{type:2,label:59,return:44};
	};
	this.blocks[44]=function()
	{
		// End If
		this.aoz.sourcePos="256:3";
	};
	this.blocks[45]=function()
	{
		// Gosub _UPDATEENTS 'update the entities, shots fired and enemies and engine smoke'
		this.aoz.sourcePos="258:3";
		return{type:2,label:127,return:46};
	};
	this.blocks[46]=function()
	{
		// ROT2=360-ROT+90 'reverse the rotation and add 90 degrees'
		this.aoz.sourcePos="261:3";
		this.vars.ROT2=Math.floor(360-this.vars.ROT+90);
		// If ROT2>360 : ROT2=ROT2-360 : End If 'if more than 360, decrease by 360 to beginning of rotation'
		this.aoz.sourcePos="262:3";
		if(!(this.vars.ROT2>360))
			return{type:1,label:47};
		this.aoz.sourcePos="262:17";
		this.vars.ROT2=Math.floor(this.vars.ROT2-360);
		this.aoz.sourcePos="262:33";
	};
	this.blocks[47]=function()
	{
		// If ROT2<0 : ROT2=ROT2+360 : End If 'if less than 0, increas by 360 to end of rotation'
		this.aoz.sourcePos="263:3";
		if(!(this.vars.ROT2<0))
			return{type:1,label:48};
		this.aoz.sourcePos="263:15";
		this.vars.ROT2=Math.floor(this.vars.ROT2+360);
		this.aoz.sourcePos="263:31";
	};
	this.blocks[48]=function()
	{
		// Paste Bob SHIPX#,SHIPY#,2,0.1,0.1,ROT2 'draw the ship'
		this.aoz.sourcePos="265:3";
		this.aoz.currentScreen.pasteImage('images',2,this.vars.SHIPX_,this.vars.SHIPY_,0.1,0.1,this.vars.ROT2*this.aoz.degreeRadian,);
		// If SHOWSHIELD>0 'show the force shield as long as SHOWSHIELD value is above 0'
		this.aoz.sourcePos="267:3";
		if(!(this.vars.SHOWSHIELD>0))
			return{type:1,label:49};
		// Paste Bob SHIPX#,SHIPY#,5,0.15,0.15
		this.aoz.sourcePos="268:6";
		this.aoz.currentScreen.pasteImage('images',5,this.vars.SHIPX_,this.vars.SHIPY_,0.15,0.15,undefined*this.aoz.degreeRadian,);
		// Dec SHOWSHIELD 'decrease SHOWSHIELD by 1'
		this.aoz.sourcePos="269:6";
		this.vars.SHOWSHIELD--;
		// End If
		this.aoz.sourcePos="270:3";
	};
	this.blocks[49]=function()
	{
		// Gosub _UPDATELEVELENTS 'updating the level entities'
		this.aoz.sourcePos="272:3";
		return{type:2,label:91,return:50};
	};
	this.blocks[50]=function()
	{
		// If EDMODE=False
		this.aoz.sourcePos="274:3";
		if(!(this.vars.EDMODE==false))
			return{type:1,label:53};
		// Ink 1,0
		this.aoz.sourcePos="275:6";
		this.aoz.currentScreen.setInk(1,0,);
		// Set Font "acme",20
		this.aoz.sourcePos="276:6";
		return{type:8,instruction:"setFont",args:["acme",20]};
	};
	this.blocks[51]=function()
	{
		// Text 10,30,str$(SHIELD)+"%"
		this.aoz.sourcePos="277:6";
		this.aoz.currentScreen.text({x:10,y:30},this.aoz.str$(this.vars.SHIELD)+"%",undefined);
		// text 255,30,str$(HEALTH)+"%"
		this.aoz.sourcePos="278:6";
		this.aoz.currentScreen.text({x:255,y:30},this.aoz.str$(this.vars.HEALTH)+"%",undefined);
		// Set Font "acme",8
		this.aoz.sourcePos="279:6";
		return{type:8,instruction:"setFont",args:["acme",8]};
	};
	this.blocks[52]=function()
	{
		// Text 10,10,"Shield"
		this.aoz.sourcePos="280:6";
		this.aoz.currentScreen.text({x:10,y:10},"Shield",undefined);
		// text 255,10,"Health"
		this.aoz.sourcePos="281:6";
		this.aoz.currentScreen.text({x:255,y:10},"Health",undefined);
		// End If
		this.aoz.sourcePos="282:3";
	};
	this.blocks[53]=function()
	{
		// Screen Swap 'swap the screens for flickerfree display'
		this.aoz.sourcePos="284:3";
		this.aoz.renderer.screenSwap();
		// while FL+2>(Timer) : Wend 'limit the framerate: *not even sure this is the correct way of doing this*'
		this.aoz.sourcePos="285:3";
		if(!(this.vars.FL+2>(this.aoz.getTimer())))
			return{type:1,label:55};
	};
	this.blocks[54]=function()
	{
		this.aoz.sourcePos="285:24";
		if(this.vars.FL+2>(this.aoz.getTimer()))
			return{type:1,label:54};
	};
	this.blocks[55]=function()
	{
		// Wait vbl
		this.aoz.sourcePos="286:3";
		return{type:8,instruction:"waitVbl",args:[]};
	};
	this.blocks[56]=function()
	{
		// FL=Timer
		this.aoz.sourcePos="287:3";
		this.vars.FL=Math.floor(this.aoz.getTimer());
		// Dec SDELAY 'decrease the shoot delay'
		this.aoz.sourcePos="289:3";
		this.vars.SDELAY--;
		// Until QUIT
		this.aoz.sourcePos="290:0";
		if(!(this.vars.QUIT))
			return{type:1,label:7};
	};
	this.blocks[57]=function()
	{
		// End   'end program'
		this.aoz.sourcePos="292:0";
		return{type:0}
	};
	this.blocks[58]=function()
	{
		// UPDATETITLE:
	};
	this.blocks[59]=function()
	{
		// brot#=brot#+0.2 'create a moving background'
		this.aoz.sourcePos="295:0";
		this.vars.brot_=this.vars.brot_+0.2;
		// If brot#>360 : brot#=0 : End If
		this.aoz.sourcePos="296:0";
		if(!(this.vars.brot_>360))
			return{type:1,label:60};
		this.aoz.sourcePos="296:15";
		this.vars.brot_=0;
		this.aoz.sourcePos="296:25";
	};
	this.blocks[60]=function()
	{
		// ROT=brot#
		this.aoz.sourcePos="297:0";
		this.vars.ROT=Math.floor(this.vars.brot_);
		// For t=0 To BGSTARS
		this.aoz.sourcePos="298:0";
		this.vars.t=0;
		if(this.vars.t>this.vars.BGSTARS)
			return{type:1,label:62};
	};
	this.blocks[61]=function()
	{
		// BSTARS#(t,0)=BSTARS#(t,0)+cos(brot#)*3
		this.aoz.sourcePos="299:3";
		this.vars.BSTARS__array.setValue([this.vars.t,0],this.vars.BSTARS__array.getValue([this.vars.t,0])+Math.cos((this.vars.brot_)*this.aoz.degreeRadian)*3);
		// BSTARS#(t,1)=BSTARS#(t,1)+sin(brot#)*3
		this.aoz.sourcePos="300:3";
		this.vars.BSTARS__array.setValue([this.vars.t,1],this.vars.BSTARS__array.getValue([this.vars.t,1])+Math.sin((this.vars.brot_)*this.aoz.degreeRadian)*3);
		// Next t
		this.aoz.sourcePos="301:0";
		this.vars.t+=1;
		if(this.vars.t<=this.vars.BGSTARS)
			return{type:1,label:61}
	};
	this.blocks[62]=function()
	{
		// For T=0 To 4 'spawn some stuff from the engine'
		this.aoz.sourcePos="302:0";
		this.vars.T=0;
		if(this.vars.T>4)
			return{type:1,label:65};
	};
	this.blocks[63]=function()
	{
		// ENT=11
		this.aoz.sourcePos="303:3";
		this.vars.ENT=11;
		// Gosub SPAWNENT
		this.aoz.sourcePos="304:3";
		return{type:2,label:156,return:64};
	};
	this.blocks[64]=function()
	{
		// Next T
		this.aoz.sourcePos="305:0";
		this.vars.T+=1;
		if(this.vars.T<=4)
			return{type:1,label:63}
	};
	this.blocks[65]=function()
	{
		// Ink 1,0
		this.aoz.sourcePos="306:0";
		this.aoz.currentScreen.setInk(1,0,);
		// Set Font "acme",30
		this.aoz.sourcePos="307:0";
		return{type:8,instruction:"setFont",args:["acme",30]};
	};
	this.blocks[66]=function()
	{
		// Text 70,52,"Gravity Shooter"
		this.aoz.sourcePos="308:0";
		this.aoz.currentScreen.text({x:70,y:52},"Gravity Shooter",undefined);
		// For y=1 To 30
		this.aoz.sourcePos="309:0";
		this.vars.y=1;
		if(this.vars.y>30)
			return{type:1,label:73};
	};
	this.blocks[67]=function()
	{
		// For x=0 To 399
		this.aoz.sourcePos="310:3";
		this.vars.x=0;
		if(this.vars.x>399)
			return{type:1,label:72};
	};
	this.blocks[68]=function()
	{
		// d=splash(x,y) : d2=splash(x,y-1)
		this.aoz.sourcePos="311:6";
		this.vars.d=Math.floor(this.vars.splash_array.getValue([this.vars.x,this.vars.y]));
		this.aoz.sourcePos="311:22";
		this.vars.d2=Math.floor(this.vars.splash_array.getValue([this.vars.x,this.vars.y-1]));
		// If d>0 and d2=0
		this.aoz.sourcePos="312:6";
		if(!(this.vars.d>0&&this.vars.d2==0))
			return{type:1,label:71};
		// o=rnd(40)
		this.aoz.sourcePos="313:9";
		this.vars.o=Math.floor(this.aoz.rnd(40));
		// If o=1
		this.aoz.sourcePos="314:9";
		if(!(this.vars.o==1))
			return{type:1,label:70};
		// ENT=10
		this.aoz.sourcePos="315:12";
		this.vars.ENT=10;
		// Gosub SPAWNENT
		this.aoz.sourcePos="316:12";
		return{type:2,label:156,return:69};
	};
	this.blocks[69]=function()
	{
		// ROTO=90
		this.aoz.sourcePos="317:12";
		this.vars.ROTO=90;
		// ENTMX#(SPAWNENTPOS)=Cos(ROTO)*3+(rnd(10)/20)
		this.aoz.sourcePos="318:12";
		this.vars.ENTMX__array.setValue([this.vars.SPAWNENTPOS],Math.cos((this.vars.ROTO)*this.aoz.degreeRadian)*3+(this.aoz.rnd(10)/20));
		// ENTMY#(SPAWNENTPOS)=Sin(ROTO)*3+(rnd(10)/20)
		this.aoz.sourcePos="319:12";
		this.vars.ENTMY__array.setValue([this.vars.SPAWNENTPOS],Math.sin((this.vars.ROTO)*this.aoz.degreeRadian)*3+(this.aoz.rnd(10)/20));
		// ENTTIME(SPAWNENTPOS)=6+rnd(4)
		this.aoz.sourcePos="320:12";
		this.vars.ENTTIME_array.setValue([this.vars.SPAWNENTPOS],Math.floor(6+this.aoz.rnd(4)));
		// ENTX#(SPAWNENTPOS)=x+70+OFFSETX#
		this.aoz.sourcePos="321:12";
		this.vars.ENTX__array.setValue([this.vars.SPAWNENTPOS],this.vars.x+70+this.vars.OFFSETX_);
		// ENTY#(SPAWNENTPOS)=y+30+OFFSETY#
		this.aoz.sourcePos="322:12";
		this.vars.ENTY__array.setValue([this.vars.SPAWNENTPOS],this.vars.y+30+this.vars.OFFSETY_);
		// End If
		this.aoz.sourcePos="323:9";
	};
	this.blocks[70]=function()
	{
		// End If
		this.aoz.sourcePos="324:6";
	};
	this.blocks[71]=function()
	{
		// Next x
		this.aoz.sourcePos="325:3";
		this.vars.x+=1;
		if(this.vars.x<=399)
			return{type:1,label:68}
	};
	this.blocks[72]=function()
	{
		// Next y
		this.aoz.sourcePos="326:0";
		this.vars.y+=1;
		if(this.vars.y<=30)
			return{type:1,label:67}
	};
	this.blocks[73]=function()
	{
		// Set Font "acme",20
		this.aoz.sourcePos="328:0";
		return{type:8,instruction:"setFont",args:["acme",20]};
	};
	this.blocks[74]=function()
	{
		// Text 105,180,"W to accelerate"
		this.aoz.sourcePos="329:0";
		this.aoz.currentScreen.text({x:105,y:180},"W to accelerate",undefined);
		// Text 105,200,"A and D to turn"
		this.aoz.sourcePos="330:0";
		this.aoz.currentScreen.text({x:105,y:200},"A and D to turn",undefined);
		// text 105,220,"Space to shoot"
		this.aoz.sourcePos="331:0";
		this.aoz.currentScreen.text({x:105,y:220},"Space to shoot",undefined);
		// Set Font "acme",10
		this.aoz.sourcePos="332:0";
		return{type:8,instruction:"setFont",args:["acme",10]};
	};
	this.blocks[75]=function()
	{
		// FCDELAY=12
		this.aoz.sourcePos="333:0";
		this.vars.FCDELAY=12;
		// Proc SHOWWARNING[120,240,"press space to begin"]
		this.aoz.sourcePos="334:0";
		return {type:4,procedure:procSHOWWARNING,args:{x:120,y:240,t$:"press space to begin"}};
	};
	this.blocks[76]=function()
	{
		// Return
		this.aoz.sourcePos="335:0";
		return{type:3};
		// _CLEARENTS:
	};
	this.blocks[77]=function()
	{
		// ENTPOS=0
		this.aoz.sourcePos="338:0";
		this.vars.ENTPOS=0;
		// Repeat
		this.aoz.sourcePos="339:0";
	};
	this.blocks[78]=function()
	{
		// ENTPOS=ENTPOS+1
		this.aoz.sourcePos="340:3";
		this.vars.ENTPOS=Math.floor(this.vars.ENTPOS+1);
		// If ENTTYPE(ENTPOS)>0
		this.aoz.sourcePos="341:3";
		if(!(this.vars.ENTTYPE_array.getValue([this.vars.ENTPOS])>0))
			return{type:1,label:82};
		// If ENTTYPE(ENTPOS)=10
		this.aoz.sourcePos="342:6";
		if(!(this.vars.ENTTYPE_array.getValue([this.vars.ENTPOS])==10))
			return{type:1,label:79};
		// Ink 0
		this.aoz.sourcePos="343:9";
		this.aoz.currentScreen.setInk(0,);
		// circle ENTX#(ENTPOS),ENTY#(ENTPOS),5-ENTTIME(ENTPOS)/2
		this.aoz.sourcePos="344:10";
		this.aoz.currentScreen.ellipse({x:this.vars.ENTX__array.getValue([this.vars.ENTPOS]),y:this.vars.ENTY__array.getValue([this.vars.ENTPOS]),width:5-this.vars.ENTTIME_array.getValue([this.vars.ENTPOS])/2,height:5-this.vars.ENTTIME_array.getValue([this.vars.ENTPOS])/2});
		// End If
		this.aoz.sourcePos="345:6";
	};
	this.blocks[79]=function()
	{
		// If ENTTYPE(ENTPOS)=11
		this.aoz.sourcePos="346:6";
		if(!(this.vars.ENTTYPE_array.getValue([this.vars.ENTPOS])==11))
			return{type:1,label:80};
		// Ink 0
		this.aoz.sourcePos="347:9";
		this.aoz.currentScreen.setInk(0,);
		// plot ENTX#(ENTPOS),ENTY#(ENTPOS)
		this.aoz.sourcePos="348:10";
		this.aoz.currentScreen.plot({x:this.vars.ENTX__array.getValue([this.vars.ENTPOS]),y:this.vars.ENTY__array.getValue([this.vars.ENTPOS])},undefined);
		// End If
		this.aoz.sourcePos="349:6";
	};
	this.blocks[80]=function()
	{
		// If ENTTYPE(ENTPOS)=20
		this.aoz.sourcePos="350:6";
		if(!(this.vars.ENTTYPE_array.getValue([this.vars.ENTPOS])==20))
			return{type:1,label:81};
		// Ink 0
		this.aoz.sourcePos="351:9";
		this.aoz.currentScreen.setInk(0,);
		// plot ENTX#(ENTPOS),ENTY#(ENTPOS)
		this.aoz.sourcePos="352:10";
		this.aoz.currentScreen.plot({x:this.vars.ENTX__array.getValue([this.vars.ENTPOS]),y:this.vars.ENTY__array.getValue([this.vars.ENTPOS])},undefined);
		// End If
		this.aoz.sourcePos="353:6";
	};
	this.blocks[81]=function()
	{
		// End If
		this.aoz.sourcePos="354:3";
	};
	this.blocks[82]=function()
	{
		// Until ENTPOS>MAXENTS
		this.aoz.sourcePos="355:0";
		if(!(this.vars.ENTPOS>this.vars.MAXENTS))
			return{type:1,label:78};
	};
	this.blocks[83]=function()
	{
		// Return
		this.aoz.sourcePos="356:0";
		return{type:3};
		// _UPDATEBACKGROUND:
	};
	this.blocks[84]=function()
	{
		// For t=0 To BGSTARS
		this.aoz.sourcePos="359:0";
		this.vars.t=0;
		if(this.vars.t>this.vars.BGSTARS)
			return{type:1,label:90};
	};
	this.blocks[85]=function()
	{
		// If (BSTARS#(t,0)-OFFSETX#)<0 : BSTARS#(t,0)=BSTARS#(t,0)+320*BSTARS#(t,2) : End If
		this.aoz.sourcePos="360:3";
		if(!((this.vars.BSTARS__array.getValue([this.vars.t,0])-this.vars.OFFSETX_)<0))
			return{type:1,label:86};
		this.aoz.sourcePos="360:34";
		this.vars.BSTARS__array.setValue([this.vars.t,0],this.vars.BSTARS__array.getValue([this.vars.t,0])+320*this.vars.BSTARS__array.getValue([this.vars.t,2]));
		this.aoz.sourcePos="360:79";
	};
	this.blocks[86]=function()
	{
		// If (BSTARS#(t,0)-OFFSETX#)>320*BSTARS#(t,2) : BSTARS#(t,0)=BSTARS#(t,0)-320*BSTARS#(t,2) : End If
		this.aoz.sourcePos="361:3";
		if(!((this.vars.BSTARS__array.getValue([this.vars.t,0])-this.vars.OFFSETX_)>320*this.vars.BSTARS__array.getValue([this.vars.t,2])))
			return{type:1,label:87};
		this.aoz.sourcePos="361:49";
		this.vars.BSTARS__array.setValue([this.vars.t,0],this.vars.BSTARS__array.getValue([this.vars.t,0])-320*this.vars.BSTARS__array.getValue([this.vars.t,2]));
		this.aoz.sourcePos="361:94";
	};
	this.blocks[87]=function()
	{
		// If (BSTARS#(t,1)-OFFSETY#)<0 : BSTARS#(t,1)=BSTARS#(t,1)+256*BSTARS#(t,2) : End If
		this.aoz.sourcePos="362:3";
		if(!((this.vars.BSTARS__array.getValue([this.vars.t,1])-this.vars.OFFSETY_)<0))
			return{type:1,label:88};
		this.aoz.sourcePos="362:34";
		this.vars.BSTARS__array.setValue([this.vars.t,1],this.vars.BSTARS__array.getValue([this.vars.t,1])+256*this.vars.BSTARS__array.getValue([this.vars.t,2]));
		this.aoz.sourcePos="362:79";
	};
	this.blocks[88]=function()
	{
		// If (BSTARS#(t,1)-OFFSETY#)>256*BSTARS#(t,2) : BSTARS#(t,1)=BSTARS#(t,1)-256*BSTARS#(t,2) : End If
		this.aoz.sourcePos="363:3";
		if(!((this.vars.BSTARS__array.getValue([this.vars.t,1])-this.vars.OFFSETY_)>256*this.vars.BSTARS__array.getValue([this.vars.t,2])))
			return{type:1,label:89};
		this.aoz.sourcePos="363:49";
		this.vars.BSTARS__array.setValue([this.vars.t,1],this.vars.BSTARS__array.getValue([this.vars.t,1])-256*this.vars.BSTARS__array.getValue([this.vars.t,2]));
		this.aoz.sourcePos="363:94";
	};
	this.blocks[89]=function()
	{
		// Ink Int(BSTARS#(t,2)/2)
		this.aoz.sourcePos="364:9";
		this.aoz.currentScreen.setInk(Math.floor(this.vars.BSTARS__array.getValue([this.vars.t,2])/2),undefined,undefined);
		// plot (BSTARS#(t,0)-OFFSETX#)/BSTARS#(t,2),(BSTARS#(t,1)-OFFSETY#)/BSTARS#(t,2)
		this.aoz.sourcePos="365:9";
		this.aoz.currentScreen.plot({x:(this.vars.BSTARS__array.getValue([this.vars.t,0])-this.vars.OFFSETX_)/this.vars.BSTARS__array.getValue([this.vars.t,2]),y:(this.vars.BSTARS__array.getValue([this.vars.t,1])-this.vars.OFFSETY_)/this.vars.BSTARS__array.getValue([this.vars.t,2])},undefined);
		// Next t
		this.aoz.sourcePos="366:0";
		this.vars.t+=1;
		if(this.vars.t<=this.vars.BGSTARS)
			return{type:1,label:85}
	};
	this.blocks[90]=function()
	{
		// Return
		this.aoz.sourcePos="367:0";
		return{type:3};
		// _UPDATELEVELENTS:
	};
	this.blocks[91]=function()
	{
		// TEMPX=0 : TEMPY=0
		this.aoz.sourcePos="370:0";
		this.vars.TEMPX=0;
		this.aoz.sourcePos="370:10";
		this.vars.TEMPY=0;
		// LPOS=0 : GROUNDED=False
		this.aoz.sourcePos="371:0";
		this.vars.LPOS=0;
		this.aoz.sourcePos="371:9";
		this.vars.GROUNDED=Math.floor(false);
		// If NUMLEVELENT>0
		this.aoz.sourcePos="372:0";
		if(!(this.vars.NUMLEVELENT>0))
			return{type:1,label:126};
		// Repeat
		this.aoz.sourcePos="373:3";
	};
	this.blocks[92]=function()
	{
		// If LEVELENTTYPE(LPOS)>0
		this.aoz.sourcePos="374:4";
		if(!(this.vars.LEVELENTTYPE_array.getValue([this.vars.LPOS])>0))
			return{type:1,label:124};
		// If LEVELENTTYPE(LPOS)=2
		this.aoz.sourcePos="375:6";
		if(!(this.vars.LEVELENTTYPE_array.getValue([this.vars.LPOS])==2))
			return{type:1,label:101};
		// Ink 5,0
		this.aoz.sourcePos="376:10";
		this.aoz.currentScreen.setInk(5,0,);
		// for t=0 to 3
		this.aoz.sourcePos="377:10";
		this.vars.t=0;
		if(this.vars.t>3)
			return{type:1,label:94};
	};
	this.blocks[93]=function()
	{
		// TEMPX=LEVELENTX#(LPOS)-OFFSETX#
		this.aoz.sourcePos="378:10";
		this.vars.TEMPX=Math.floor(this.vars.LEVELENTX__array.getValue([this.vars.LPOS])-this.vars.OFFSETX_);
		// TEMPY=LEVELENTY#(LPOS)-OFFSETY#
		this.aoz.sourcePos="379:10";
		this.vars.TEMPY=Math.floor(this.vars.LEVELENTY__array.getValue([this.vars.LPOS])-this.vars.OFFSETY_);
		// TEMPR=((LEVELENTTIME(LPOS)*SCALE)+t*148)
		this.aoz.sourcePos="380:10";
		this.vars.TEMPR=Math.floor(((this.vars.LEVELENTTIME_array.getValue([this.vars.LPOS])*this.vars.SCALE)+this.vars.t*148));
		// Javascript
				this.aoz.currentScreen.startDrawing();
				this.aoz.currentScreen.context.strokeStyle = "#AA0000";
				 this.aoz.currentScreen.context.lineWidth = 150;
				 this.aoz.currentScreen.context.beginPath();
				this.aoz.currentScreen.context.arc( this.vars.TEMPX*this.aoz.currentScreen.scale.x, this.vars.TEMPY*this.aoz.currentScreen.scale.y, this.vars.TEMPR, 0, 2*3.1431 );
				 this.aoz.currentScreen.context.stroke();
				   this.aoz.currentScreen.context.closePath();
				 this.aoz.currentScreen.endDrawing();      
				this.aoz.currentScreen.context.lineWidth = ( this.aoz.currentScreen.scale.x + this.aoz.currentScreen.scale.y ) / 1.5;
				// End Javascript
		// next t
		this.aoz.sourcePos="398:9";
		this.vars.t+=1;
		if(this.vars.t<=3)
			return{type:1,label:93}
	};
	this.blocks[94]=function()
	{
		// _MYSPEED#=(abs(BX#)+abs(BY#))/2
		this.aoz.sourcePos="400:9";
		this.vars._MYSPEED_=(Math.abs(this.vars.BX_)+Math.abs(this.vars.BY_))/2;
		// CHECKX#=LEVELENTX#(LPOS)-OFFSETX#
		this.aoz.sourcePos="401:9";
		this.vars.CHECKX_=this.vars.LEVELENTX__array.getValue([this.vars.LPOS])-this.vars.OFFSETX_;
		// CHECKY#=LEVELENTY#(LPOS)-OFFSETY#
		this.aoz.sourcePos="402:9";
		this.vars.CHECKY_=this.vars.LEVELENTY__array.getValue([this.vars.LPOS])-this.vars.OFFSETY_;
		// CSIZE#=LEVELENTTIME(LPOS)-37
		this.aoz.sourcePos="403:9";
		this.vars.CSIZE_=this.vars.LEVELENTTIME_array.getValue([this.vars.LPOS])-37;
		// POSOX#=Abs(SHIPX#-CHECKX#)
		this.aoz.sourcePos="404:9";
		this.vars.POSOX_=Math.abs(this.vars.SHIPX_-this.vars.CHECKX_);
		// POSOY#=Abs(SHIPY#-CHECKY#)
		this.aoz.sourcePos="405:9";
		this.vars.POSOY_=Math.abs(this.vars.SHIPY_-this.vars.CHECKY_);
		// POSOX#=POSOX#*POSOX#
		this.aoz.sourcePos="406:9";
		this.vars.POSOX_=this.vars.POSOX_*this.vars.POSOX_;
		// POSOY#=POSOY#*POSOY#
		this.aoz.sourcePos="407:9";
		this.vars.POSOY_=this.vars.POSOY_*this.vars.POSOY_;
		// _TDIST#=POSOX#+POSOY#
		this.aoz.sourcePos="408:9";
		this.vars._TDIST_=this.vars.POSOX_+this.vars.POSOY_;
		// _TDIST#=sqr(_TDIST#)
		this.aoz.sourcePos="409:9";
		this.vars._TDIST_=Math.sqrt(this.vars._TDIST_);
		// If _TDIST#>CSIZE#-10
		this.aoz.sourcePos="410:9";
		if(!(this.vars._TDIST_>this.vars.CSIZE_-10))
			return{type:1,label:100};
		// _DISTX#=(LEVELENTX#(LPOS)-OFFSETX#)-(SHIPX#)
		this.aoz.sourcePos="411:12";
		this.vars._DISTX_=(this.vars.LEVELENTX__array.getValue([this.vars.LPOS])-this.vars.OFFSETX_)-(this.vars.SHIPX_);
		// _DISTY#=(LEVELENTY#(LPOS)-OFFSETY#)-(SHIPY#)
		this.aoz.sourcePos="412:12";
		this.vars._DISTY_=(this.vars.LEVELENTY__array.getValue([this.vars.LPOS])-this.vars.OFFSETY_)-(this.vars.SHIPY_);
		// _SPEEDX#=_DISTX#/_TDIST#
		this.aoz.sourcePos="413:12";
		this.vars._SPEEDX_=this.vars._DISTX_/this.vars._TDIST_;
		// _SPEEDY#=_DISTY#/_TDIST#
		this.aoz.sourcePos="414:12";
		this.vars._SPEEDY_=this.vars._DISTY_/this.vars._TDIST_;
		// if _SPEEDX#>0 : _SPEEDX#=0-_SPEEDX# : Else : _SPEEDX#=abs(_SPEEDX#) : End if
		this.aoz.sourcePos="415:12";
		if(!(this.vars._SPEEDX_>0))
			return{type:1,label:95};
		this.aoz.sourcePos="415:28";
		this.vars._SPEEDX_=0-this.vars._SPEEDX_;
		return{type:1,label:96};
	};
	this.blocks[95]=function()
	{
		this.aoz.sourcePos="415:57";
		this.vars._SPEEDX_=Math.abs(this.vars._SPEEDX_);
		this.aoz.sourcePos="415:82";
	};
	this.blocks[96]=function()
	{
		// if _SPEEDY#>0 : _SPEEDY#=0-_SPEEDY# : Else : _SPEEDY#=abs(_SPEEDY#) : End if
		this.aoz.sourcePos="416:12";
		if(!(this.vars._SPEEDY_>0))
			return{type:1,label:97};
		this.aoz.sourcePos="416:28";
		this.vars._SPEEDY_=0-this.vars._SPEEDY_;
		return{type:1,label:98};
	};
	this.blocks[97]=function()
	{
		this.aoz.sourcePos="416:57";
		this.vars._SPEEDY_=Math.abs(this.vars._SPEEDY_);
		this.aoz.sourcePos="416:82";
	};
	this.blocks[98]=function()
	{
		// totspeed#=_MYSPEED#
		this.aoz.sourcePos="417:12";
		this.vars.totspeed_=this.vars._MYSPEED_;
		// if totspeed#<0.4 : totspeed#=0.4 : end if
		this.aoz.sourcePos="418:12";
		if(!(this.vars.totspeed_<0.4))
			return{type:1,label:99};
		this.aoz.sourcePos="418:31";
		this.vars.totspeed_=0.4;
		this.aoz.sourcePos="418:47";
	};
	this.blocks[99]=function()
	{
		// BX#=_SPEEDX#*totspeed#
		this.aoz.sourcePos="419:12";
		this.vars.BX_=this.vars._SPEEDX_*this.vars.totspeed_;
		// BY#=_SPEEDY#*totspeed#
		this.aoz.sourcePos="420:12";
		this.vars.BY_=this.vars._SPEEDY_*this.vars.totspeed_;
		// End IF
		this.aoz.sourcePos="422:9";
	};
	this.blocks[100]=function()
	{
		// End If
		this.aoz.sourcePos="423:6";
	};
	this.blocks[101]=function()
	{
		// If(LEVELENTX#(LPOS)-OFFSETX#)>-200 and(LEVELENTX#(LPOS)-OFFSETX#)+320<850
		this.aoz.sourcePos="424:6";
		if(!((this.vars.LEVELENTX__array.getValue([this.vars.LPOS])-this.vars.OFFSETX_)>-200&&(this.vars.LEVELENTX__array.getValue([this.vars.LPOS])-this.vars.OFFSETX_)+320<850))
			return{type:1,label:123};
		// If(LEVELENTY#(LPOS)-OFFSETY#)>-200 and(LEVELENTY#(LPOS)-OFFSETY#)+256<800
		this.aoz.sourcePos="425:9";
		if(!((this.vars.LEVELENTY__array.getValue([this.vars.LPOS])-this.vars.OFFSETY_)>-200&&(this.vars.LEVELENTY__array.getValue([this.vars.LPOS])-this.vars.OFFSETY_)+256<800))
			return{type:1,label:122};
		// If LEVELENTTYPE(LPOS)=1
		this.aoz.sourcePos="426:12";
		if(!(this.vars.LEVELENTTYPE_array.getValue([this.vars.LPOS])==1))
			return{type:1,label:121};
		// Ink 5,0
		this.aoz.sourcePos="427:15";
		this.aoz.currentScreen.setInk(5,0,);
		// TEMPX=LEVELENTX#(LPOS)-OFFSETX#
		this.aoz.sourcePos="428:15";
		this.vars.TEMPX=Math.floor(this.vars.LEVELENTX__array.getValue([this.vars.LPOS])-this.vars.OFFSETX_);
		// TEMPY=LEVELENTY#(LPOS)-OFFSETY#
		this.aoz.sourcePos="429:15";
		this.vars.TEMPY=Math.floor(this.vars.LEVELENTY__array.getValue([this.vars.LPOS])-this.vars.OFFSETY_);
		// TEMPR=(LEVELENTTIME(LPOS))*SCALE
		this.aoz.sourcePos="430:15";
		this.vars.TEMPR=Math.floor((this.vars.LEVELENTTIME_array.getValue([this.vars.LPOS]))*this.vars.SCALE);
		// Javascript
		 var grd = this.aoz.currentScreen.context.createRadialGradient(this.vars.TEMPX*this.aoz.currentScreen.scale.x, this.vars.TEMPY*this.aoz.currentScreen.scale.y,2,this.vars.TEMPX*this.aoz.currentScreen.scale.x, this.vars.TEMPY*this.aoz.currentScreen.scale.y, this.vars.TEMPR);                     
		 grd.addColorStop(0, this.aoz.currentScreen.getColorString( this.aoz.currentScreen.getInk() ));
		 grd.addColorStop(1, "black");
		 this.aoz.currentScreen.startDrawing();
		 this.aoz.currentScreen.context.strokeStyle = "#000000";
		  this.aoz.currentScreen.context.lineWidth = ( this.aoz.currentScreen.scale.x + this.aoz.currentScreen.scale.y ) / 1.5;
		 this.aoz.currentScreen.context.fillStyle = grd;
		  this.aoz.currentScreen.context.beginPath();
		 this.aoz.currentScreen.context.arc( this.vars.TEMPX*this.aoz.currentScreen.scale.x, this.vars.TEMPY*this.aoz.currentScreen.scale.y, this.vars.TEMPR, 0, 2*3.14 );
		 this.aoz.currentScreen.context.fill();
		  this.aoz.currentScreen.context.stroke();
			this.aoz.currentScreen.context.closePath();
		  this.aoz.currentScreen.endDrawing();      
		  // End Javascript
		// CHECKX#=LEVELENTX#(LPOS)-OFFSETX#
		this.aoz.sourcePos="460:15";
		this.vars.CHECKX_=this.vars.LEVELENTX__array.getValue([this.vars.LPOS])-this.vars.OFFSETX_;
		// CHECKY#=LEVELENTY#(LPOS)-OFFSETY#
		this.aoz.sourcePos="461:15";
		this.vars.CHECKY_=this.vars.LEVELENTY__array.getValue([this.vars.LPOS])-this.vars.OFFSETY_;
		// CSIZE#=LEVELENTTIME(LPOS)
		this.aoz.sourcePos="462:15";
		this.vars.CSIZE_=this.vars.LEVELENTTIME_array.getValue([this.vars.LPOS]);
		// If SHIPX#>CHECKX#-CSIZE#-10 and SHIPX#<CHECKX#+CSIZE#+10 and SHIPY#>CHECKY#-CSIZE#-10 and SHIPY#<CHECKY#+CSIZE#+10
		this.aoz.sourcePos="463:15";
		if(!(this.vars.SHIPX_>this.vars.CHECKX_-this.vars.CSIZE_-10&&this.vars.SHIPX_<this.vars.CHECKX_+this.vars.CSIZE_+10&&this.vars.SHIPY_>this.vars.CHECKY_-this.vars.CSIZE_-10&&this.vars.SHIPY_<this.vars.CHECKY_+this.vars.CSIZE_+10))
			return{type:1,label:112};
		// CDIST#=CSIZE#
		this.aoz.sourcePos="464:18";
		this.vars.CDIST_=this.vars.CSIZE_;
		// POSOX#=Abs(Abs(SHIPX#)-Abs(CHECKX#))
		this.aoz.sourcePos="465:18";
		this.vars.POSOX_=Math.abs(Math.abs(this.vars.SHIPX_)-Math.abs(this.vars.CHECKX_));
		// POSOY#=Abs(Abs(SHIPY#)-Abs(CHECKY#))
		this.aoz.sourcePos="466:18";
		this.vars.POSOY_=Math.abs(Math.abs(this.vars.SHIPY_)-Math.abs(this.vars.CHECKY_));
		// If(((POSOX#*POSOX#)+(POSOY#*POSOY#))/100)<CDIST#
		this.aoz.sourcePos="469:18";
		if(!((((this.vars.POSOX_*this.vars.POSOX_)+(this.vars.POSOY_*this.vars.POSOY_))/100)<this.vars.CDIST_))
			return{type:1,label:111};
		// If CHECKY#<SHIPY#
		this.aoz.sourcePos="472:21";
		if(!(this.vars.CHECKY_<this.vars.SHIPY_))
			return{type:1,label:106};
		// If BX#>0 : BX#=0-BX#
		this.aoz.sourcePos="473:24";
		if(!(this.vars.BX_>0))
			return{type:1,label:102};
		this.aoz.sourcePos="473:35";
		this.vars.BX_=0-this.vars.BX_;
		// Else
		return{type:1,label:103};
	};
	this.blocks[102]=function()
	{
		// BX#=Abs(BX#)
		this.aoz.sourcePos="475:27";
		this.vars.BX_=Math.abs(this.vars.BX_);
		// End If
		this.aoz.sourcePos="476:24";
	};
	this.blocks[103]=function()
	{
		// If BY#>0 : BY#=0-BY#
		this.aoz.sourcePos="477:24";
		if(!(this.vars.BY_>0))
			return{type:1,label:104};
		this.aoz.sourcePos="477:35";
		this.vars.BY_=0-this.vars.BY_;
		// Else
		return{type:1,label:105};
	};
	this.blocks[104]=function()
	{
		// BY#=Abs(BY#)
		this.aoz.sourcePos="479:27";
		this.vars.BY_=Math.abs(this.vars.BY_);
		// End If
		this.aoz.sourcePos="480:24";
	};
	this.blocks[105]=function()
	{
		// BY#=-0.1
		this.aoz.sourcePos="481:24";
		this.vars.BY_=-0.1;
		// BX#=0
		this.aoz.sourcePos="482:24";
		this.vars.BX_=0;
		// GROUNDED=False
		this.aoz.sourcePos="483:24";
		this.vars.GROUNDED=Math.floor(false);
		// Else
		return{type:1,label:110};
	};
	this.blocks[106]=function()
	{
		// If SHIPX#<CHECKX#
		this.aoz.sourcePos="485:24";
		if(!(this.vars.SHIPX_<this.vars.CHECKX_))
			return{type:1,label:107};
		// BX#=0.2+((CHECKY#-SHIPXY#)/CDIST#)/10
		this.aoz.sourcePos="486:27";
		this.vars.BX_=0.2+((this.vars.CHECKY_-this.vars.SHIPXY_)/this.vars.CDIST_)/10;
		// Else
		return{type:1,label:108};
	};
	this.blocks[107]=function()
	{
		// BX#=-(0.2+((CHECKY#-SHIPXY#)/CDIST#)/10)
		this.aoz.sourcePos="488:27";
		this.vars.BX_=-(0.2+((this.vars.CHECKY_-this.vars.SHIPXY_)/this.vars.CDIST_)/10);
		// End If
		this.aoz.sourcePos="489:24";
	};
	this.blocks[108]=function()
	{
		// BY#=0.1
		this.aoz.sourcePos="490:24";
		this.vars.BY_=0.1;
		// If ROT>70 and ROT<120
		this.aoz.sourcePos="493:24";
		if(!(this.vars.ROT>70&&this.vars.ROT<120))
			return{type:1,label:109};
		// GROUNDED=True
		this.aoz.sourcePos="494:27";
		this.vars.GROUNDED=Math.floor(true);
		// ROT=90
		this.aoz.sourcePos="495:27";
		this.vars.ROT=90;
		// End If
		this.aoz.sourcePos="496:24";
	};
	this.blocks[109]=function()
	{
		// End If
		this.aoz.sourcePos="497:21";
	};
	this.blocks[110]=function()
	{
		// End If
		this.aoz.sourcePos="498:18";
	};
	this.blocks[111]=function()
	{
		// End If
		this.aoz.sourcePos="499:15";
	};
	this.blocks[112]=function()
	{
		// ENTPOS=0
		this.aoz.sourcePos="500:15";
		this.vars.ENTPOS=0;
		// Repeat
		this.aoz.sourcePos="501:15";
	};
	this.blocks[113]=function()
	{
		// ENTPOS=ENTPOS+1
		this.aoz.sourcePos="502:18";
		this.vars.ENTPOS=Math.floor(this.vars.ENTPOS+1);
		// If ENTTYPE(ENTPOS)=21
		this.aoz.sourcePos="503:18";
		if(!(this.vars.ENTTYPE_array.getValue([this.vars.ENTPOS])==21))
			return{type:1,label:119};
		// CEX#=ENTX#(ENTPOS)-OFFSETX#
		this.aoz.sourcePos="504:21";
		this.vars.CEX_=this.vars.ENTX__array.getValue([this.vars.ENTPOS])-this.vars.OFFSETX_;
		// CEY#=ENTY#(ENTPOS)-OFFSETY#
		this.aoz.sourcePos="505:21";
		this.vars.CEY_=this.vars.ENTY__array.getValue([this.vars.ENTPOS])-this.vars.OFFSETY_;
		// POSOX#=Abs(Abs(CEX#)-Abs(CHECKX#))
		this.aoz.sourcePos="506:21";
		this.vars.POSOX_=Math.abs(Math.abs(this.vars.CEX_)-Math.abs(this.vars.CHECKX_));
		// POSOY#=Abs(Abs(CEY#)-Abs(CHECKY#))
		this.aoz.sourcePos="507:21";
		this.vars.POSOY_=Math.abs(Math.abs(this.vars.CEY_)-Math.abs(this.vars.CHECKY_));
		// If(((POSOX#*POSOX#)+(POSOY#*POSOY#))/100)<CDIST#
		this.aoz.sourcePos="508:21";
		if(!((((this.vars.POSOX_*this.vars.POSOX_)+(this.vars.POSOY_*this.vars.POSOY_))/100)<this.vars.CDIST_))
			return{type:1,label:118};
		// If ENTMX#(ENTPOS)>0 : ENTMX#(ENTPOS)=0-ENTMX#(ENTPOS)
		this.aoz.sourcePos="509:24";
		if(!(this.vars.ENTMX__array.getValue([this.vars.ENTPOS])>0))
			return{type:1,label:114};
		this.aoz.sourcePos="509:46";
		this.vars.ENTMX__array.setValue([this.vars.ENTPOS],0-this.vars.ENTMX__array.getValue([this.vars.ENTPOS]));
		// Else : ENTMX#(ENTPOS)=Abs(ENTMX#(ENTPOS))
		return{type:1,label:115};
	};
	this.blocks[114]=function()
	{
		this.aoz.sourcePos="510:31";
		this.vars.ENTMX__array.setValue([this.vars.ENTPOS],Math.abs(this.vars.ENTMX__array.getValue([this.vars.ENTPOS])));
		// End If
		this.aoz.sourcePos="511:24";
	};
	this.blocks[115]=function()
	{
		// If ENTMY#(ENTPOS)>0 : ENTMY#(ENTPOS)=0-ENTMY#(ENTPOS)
		this.aoz.sourcePos="512:24";
		if(!(this.vars.ENTMY__array.getValue([this.vars.ENTPOS])>0))
			return{type:1,label:116};
		this.aoz.sourcePos="512:46";
		this.vars.ENTMY__array.setValue([this.vars.ENTPOS],0-this.vars.ENTMY__array.getValue([this.vars.ENTPOS]));
		// Else : ENTMY#(ENTPOS)=Abs(ENTMY#(ENTPOS))
		return{type:1,label:117};
	};
	this.blocks[116]=function()
	{
		this.aoz.sourcePos="513:31";
		this.vars.ENTMY__array.setValue([this.vars.ENTPOS],Math.abs(this.vars.ENTMY__array.getValue([this.vars.ENTPOS])));
		// End If
		this.aoz.sourcePos="514:24";
	};
	this.blocks[117]=function()
	{
		// ENTX#(ENTPOS)=ENTX#(ENTPOS)-(ENTMX#(ENTPOS)*2)
		this.aoz.sourcePos="515:24";
		this.vars.ENTX__array.setValue([this.vars.ENTPOS],this.vars.ENTX__array.getValue([this.vars.ENTPOS])-(this.vars.ENTMX__array.getValue([this.vars.ENTPOS])*2));
		// ENTY#(ENTPOS)=ENTY#(ENTPOS)-(ENTMY#(ENTPOS)*2)
		this.aoz.sourcePos="516:24";
		this.vars.ENTY__array.setValue([this.vars.ENTPOS],this.vars.ENTY__array.getValue([this.vars.ENTPOS])-(this.vars.ENTMY__array.getValue([this.vars.ENTPOS])*2));
		// End If
		this.aoz.sourcePos="517:21";
	};
	this.blocks[118]=function()
	{
		// End If
		this.aoz.sourcePos="518:18";
	};
	this.blocks[119]=function()
	{
		// Until ENTPOS>MAXENTS
		this.aoz.sourcePos="519:15";
		if(!(this.vars.ENTPOS>this.vars.MAXENTS))
			return{type:1,label:113};
	};
	this.blocks[120]=function()
	{
		// End If
		this.aoz.sourcePos="521:12";
	};
	this.blocks[121]=function()
	{
		// End If
		this.aoz.sourcePos="522:9";
	};
	this.blocks[122]=function()
	{
		// End If
		this.aoz.sourcePos="523:6";
	};
	this.blocks[123]=function()
	{
		// Inc LPOS
		this.aoz.sourcePos="524:6";
		this.vars.LPOS++;
		// End If
		this.aoz.sourcePos="525:3";
	};
	this.blocks[124]=function()
	{
		// Until LPOS=NUMLEVELENT
		this.aoz.sourcePos="526:3";
		if(!(this.vars.LPOS==this.vars.NUMLEVELENT))
			return{type:1,label:92};
	};
	this.blocks[125]=function()
	{
		// End If
		this.aoz.sourcePos="527:0";
	};
	this.blocks[126]=function()
	{
		// Return
		this.aoz.sourcePos="531:0";
		return{type:3};
		// _UPDATEENTS:
	};
	this.blocks[127]=function()
	{
		// ENTPOS=0
		this.aoz.sourcePos="534:0";
		this.vars.ENTPOS=0;
		// Repeat
		this.aoz.sourcePos="535:0";
	};
	this.blocks[128]=function()
	{
		// ENTPOS=ENTPOS+1
		this.aoz.sourcePos="536:3";
		this.vars.ENTPOS=Math.floor(this.vars.ENTPOS+1);
		// If ENTTYPE(ENTPOS)>0
		this.aoz.sourcePos="537:3";
		if(!(this.vars.ENTTYPE_array.getValue([this.vars.ENTPOS])>0))
			return{type:1,label:150};
		// if ENTTIME(ENTPOS)>-2
		this.aoz.sourcePos="538:6";
		if(!(this.vars.ENTTIME_array.getValue([this.vars.ENTPOS])>-2))
			return{type:1,label:132};
		// ENTTIME(ENTPOS)=ENTTIME(ENTPOS)-1
		this.aoz.sourcePos="539:9";
		this.vars.ENTTIME_array.setValue([this.vars.ENTPOS],Math.floor(this.vars.ENTTIME_array.getValue([this.vars.ENTPOS])-1));
		// If ENTTYPE(ENTPOS)=30
		this.aoz.sourcePos="540:9";
		if(!(this.vars.ENTTYPE_array.getValue([this.vars.ENTPOS])==30))
			return{type:1,label:131};
		// sam play 2
		this.aoz.sourcePos="541:12";
		this.aoz.moduleSounds.callVoices( 'playSound', 0xFFFFFFFF, [ 2 ] );
		// TEMPX=ENTX#(ENTPOS)
		this.aoz.sourcePos="542:12";
		this.vars.TEMPX=Math.floor(this.vars.ENTX__array.getValue([this.vars.ENTPOS]));
		// TEMPY=ENTY#(ENTPOS)
		this.aoz.sourcePos="543:12";
		this.vars.TEMPY=Math.floor(this.vars.ENTY__array.getValue([this.vars.ENTPOS]));
		// Gosub EXPLOSION
		this.aoz.sourcePos="544:12";
		return{type:2,label:152,return:129};
	};
	this.blocks[129]=function()
	{
		// ENT=30
		this.aoz.sourcePos="545:12";
		this.vars.ENT=30;
		// Gosub SPAWNENT
		this.aoz.sourcePos="546:12";
		return{type:2,label:156,return:130};
	};
	this.blocks[130]=function()
	{
		// ENTTIME(ENTPOS)=0
		this.aoz.sourcePos="547:12";
		this.vars.ENTTIME_array.setValue([this.vars.ENTPOS],0);
		// ENTTYPE(ENTPOS)=0
		this.aoz.sourcePos="548:12";
		this.vars.ENTTYPE_array.setValue([this.vars.ENTPOS],0);
		// End If
		this.aoz.sourcePos="549:9";
	};
	this.blocks[131]=function()
	{
		// End If
		this.aoz.sourcePos="550:6";
	};
	this.blocks[132]=function()
	{
		// If ENTTIME(ENTPOS)<0 and ENTTIME(ENTPOS)>-2
		this.aoz.sourcePos="551:6";
		if(!(this.vars.ENTTIME_array.getValue([this.vars.ENTPOS])<0&&this.vars.ENTTIME_array.getValue([this.vars.ENTPOS])>-2))
			return{type:1,label:133};
		// ENTTYPE(ENTPOS)=0
		this.aoz.sourcePos="552:9";
		this.vars.ENTTYPE_array.setValue([this.vars.ENTPOS],0);
		// End If
		this.aoz.sourcePos="553:6";
	};
	this.blocks[133]=function()
	{
		// If ENTTYPE(ENTPOS)=10
		this.aoz.sourcePos="555:6";
		if(!(this.vars.ENTTYPE_array.getValue([this.vars.ENTPOS])==10))
			return{type:1,label:136};
		// ENTMY#(ENTPOS)=ENTMY#(ENTPOS)+AIR#
		this.aoz.sourcePos="556:9";
		this.vars.ENTMY__array.setValue([this.vars.ENTPOS],this.vars.ENTMY__array.getValue([this.vars.ENTPOS])+this.vars.AIR_);
		// ENTMY#(ENTPOS)=ENTMY#(ENTPOS)+Sin(270)/GRAV
		this.aoz.sourcePos="557:9";
		this.vars.ENTMY__array.setValue([this.vars.ENTPOS],this.vars.ENTMY__array.getValue([this.vars.ENTPOS])+Math.sin((270)*this.aoz.degreeRadian)/this.vars.GRAV);
		// ENTMX#(ENTPOS)=ENTMX#(ENTPOS)+Cos(270)/GRAV
		this.aoz.sourcePos="558:9";
		this.vars.ENTMX__array.setValue([this.vars.ENTPOS],this.vars.ENTMX__array.getValue([this.vars.ENTPOS])+Math.cos((270)*this.aoz.degreeRadian)/this.vars.GRAV);
		// TEMPX=ENTX#(ENTPOS)-OFFSETX#
		this.aoz.sourcePos="559:9";
		this.vars.TEMPX=Math.floor(this.vars.ENTX__array.getValue([this.vars.ENTPOS])-this.vars.OFFSETX_);
		// TEMPY=ENTY#(ENTPOS)-OFFSETY#
		this.aoz.sourcePos="560:9";
		this.vars.TEMPY=Math.floor(this.vars.ENTY__array.getValue([this.vars.ENTPOS])-this.vars.OFFSETY_);
		// If ENTTIME(ENTPOS)>0
		this.aoz.sourcePos="561:9";
		if(!(this.vars.ENTTIME_array.getValue([this.vars.ENTPOS])>0))
			return{type:1,label:134};
		// TEMPR=5-ENTTIME(ENTPOS)/2
		this.aoz.sourcePos="562:12";
		this.vars.TEMPR=Math.floor(5-this.vars.ENTTIME_array.getValue([this.vars.ENTPOS])/2);
		// Else
		return{type:1,label:135};
	};
	this.blocks[134]=function()
	{
		// TEMPR=1
		this.aoz.sourcePos="564:12";
		this.vars.TEMPR=1;
		// End If
		this.aoz.sourcePos="565:9";
	};
	this.blocks[135]=function()
	{
		// Javascript
			 this.aoz.currentScreen.startDrawing();
			 this.aoz.currentScreen.context.strokeStyle = "#AAAAAA";
			  this.aoz.currentScreen.context.lineWidth = ( this.aoz.currentScreen.scale.x + this.aoz.currentScreen.scale.y ) / 1.5;
			 this.aoz.currentScreen.context.fillStyle = "#AAAAAA";
			  this.aoz.currentScreen.context.beginPath();
			 this.aoz.currentScreen.context.arc( this.vars.TEMPX*this.aoz.currentScreen.scale.x, this.vars.TEMPY*this.aoz.currentScreen.scale.y, this.vars.TEMPR, 0, 2*3.14 );
			 this.aoz.currentScreen.context.fill();
			  this.aoz.currentScreen.context.stroke();
				this.aoz.currentScreen.context.closePath();                     
			  this.aoz.currentScreen.endDrawing();      
			  // End Javascript
		// End If
		this.aoz.sourcePos="580:6";
	};
	this.blocks[136]=function()
	{
		// If ENTTYPE(ENTPOS)=11
		this.aoz.sourcePos="581:6";
		if(!(this.vars.ENTTYPE_array.getValue([this.vars.ENTPOS])==11))
			return{type:1,label:137};
		// ENTMY#(ENTPOS)=ENTMY#(ENTPOS)+AIR#
		this.aoz.sourcePos="582:9";
		this.vars.ENTMY__array.setValue([this.vars.ENTPOS],this.vars.ENTMY__array.getValue([this.vars.ENTPOS])+this.vars.AIR_);
		// ENTMY#(ENTPOS)=ENTMY#(ENTPOS)+Sin(270)/GRAV
		this.aoz.sourcePos="583:9";
		this.vars.ENTMY__array.setValue([this.vars.ENTPOS],this.vars.ENTMY__array.getValue([this.vars.ENTPOS])+Math.sin((270)*this.aoz.degreeRadian)/this.vars.GRAV);
		// ENTMX#(ENTPOS)=ENTMX#(ENTPOS)+Cos(270)/GRAV
		this.aoz.sourcePos="584:9";
		this.vars.ENTMX__array.setValue([this.vars.ENTPOS],this.vars.ENTMX__array.getValue([this.vars.ENTPOS])+Math.cos((270)*this.aoz.degreeRadian)/this.vars.GRAV);
		// Ink 12
		this.aoz.sourcePos="585:9";
		this.aoz.currentScreen.setInk(12,);
		// plot ENTX#(ENTPOS)-OFFSETX#,ENTY#(ENTPOS)-OFFSETY#
		this.aoz.sourcePos="586:9";
		this.aoz.currentScreen.plot({x:this.vars.ENTX__array.getValue([this.vars.ENTPOS])-this.vars.OFFSETX_,y:this.vars.ENTY__array.getValue([this.vars.ENTPOS])-this.vars.OFFSETY_},undefined);
		// End If
		this.aoz.sourcePos="587:6";
	};
	this.blocks[137]=function()
	{
		// If ENTTYPE(ENTPOS)=12
		this.aoz.sourcePos="588:6";
		if(!(this.vars.ENTTYPE_array.getValue([this.vars.ENTPOS])==12))
			return{type:1,label:138};
		// ENTMY#(ENTPOS)=ENTMY#(ENTPOS)+AIR#
		this.aoz.sourcePos="589:9";
		this.vars.ENTMY__array.setValue([this.vars.ENTPOS],this.vars.ENTMY__array.getValue([this.vars.ENTPOS])+this.vars.AIR_);
		// ENTMY#(ENTPOS)=ENTMY#(ENTPOS)+Sin(270)/GRAV
		this.aoz.sourcePos="590:9";
		this.vars.ENTMY__array.setValue([this.vars.ENTPOS],this.vars.ENTMY__array.getValue([this.vars.ENTPOS])+Math.sin((270)*this.aoz.degreeRadian)/this.vars.GRAV);
		// ENTMX#(ENTPOS)=ENTMX#(ENTPOS)+Cos(270)/GRAV
		this.aoz.sourcePos="591:9";
		this.vars.ENTMX__array.setValue([this.vars.ENTPOS],this.vars.ENTMX__array.getValue([this.vars.ENTPOS])+Math.cos((270)*this.aoz.degreeRadian)/this.vars.GRAV);
		// Ink 12
		this.aoz.sourcePos="592:9";
		this.aoz.currentScreen.setInk(12,);
		// plot ENTX#(ENTPOS)-OFFSETX#,ENTY#(ENTPOS)-OFFSETY#
		this.aoz.sourcePos="593:9";
		this.aoz.currentScreen.plot({x:this.vars.ENTX__array.getValue([this.vars.ENTPOS])-this.vars.OFFSETX_,y:this.vars.ENTY__array.getValue([this.vars.ENTPOS])-this.vars.OFFSETY_},undefined);
		// End If
		this.aoz.sourcePos="595:6";
	};
	this.blocks[138]=function()
	{
		// If ENTTYPE(ENTPOS)=20
		this.aoz.sourcePos="596:6";
		if(!(this.vars.ENTTYPE_array.getValue([this.vars.ENTPOS])==20))
			return{type:1,label:145};
		// CX=3*SCALE
		this.aoz.sourcePos="597:9";
		this.vars.CX=Math.floor(3*this.vars.SCALE);
		// CY=2*SCALE
		this.aoz.sourcePos="598:9";
		this.vars.CY=Math.floor(2*this.vars.SCALE);
		// For TENT=1 to MAXENTS+1
		this.aoz.sourcePos="599:12";
		this.vars.TENT=1;
		if(this.vars.TENT>this.vars.MAXENTS+1)
			return{type:1,label:144};
	};
	this.blocks[139]=function()
	{
		// If ENTTYPE(TENT)=30
		this.aoz.sourcePos="600:15";
		if(!(this.vars.ENTTYPE_array.getValue([this.vars.TENT])==30))
			return{type:1,label:143};
		// If (ENTX#(ENTPOS)-OFFSETX#)>(ENTX#(TENT)-OFFSETX#)-CX And (ENTX#(ENTPOS)-OFFSETX#)<(ENTX#(TENT)-OFFSETX#)+CX
		this.aoz.sourcePos="601:15";
		if(!((this.vars.ENTX__array.getValue([this.vars.ENTPOS])-this.vars.OFFSETX_)>(this.vars.ENTX__array.getValue([this.vars.TENT])-this.vars.OFFSETX_)-this.vars.CX&&(this.vars.ENTX__array.getValue([this.vars.ENTPOS])-this.vars.OFFSETX_)<(this.vars.ENTX__array.getValue([this.vars.TENT])-this.vars.OFFSETX_)+this.vars.CX))
			return{type:1,label:142};
		// If (ENTY#(ENTPOS)-OFFSETY#)>(ENTY#(TENT)-OFFSETY#)-CY And (ENTY#(ENTPOS)-OFFSETY#)<(ENTY#(TENT)-OFFSETY#)+CY
		this.aoz.sourcePos="602:18";
		if(!((this.vars.ENTY__array.getValue([this.vars.ENTPOS])-this.vars.OFFSETY_)>(this.vars.ENTY__array.getValue([this.vars.TENT])-this.vars.OFFSETY_)-this.vars.CY&&(this.vars.ENTY__array.getValue([this.vars.ENTPOS])-this.vars.OFFSETY_)<(this.vars.ENTY__array.getValue([this.vars.TENT])-this.vars.OFFSETY_)+this.vars.CY))
			return{type:1,label:141};
		// If ENTTYPE(TENT)=30
		this.aoz.sourcePos="603:21";
		if(!(this.vars.ENTTYPE_array.getValue([this.vars.TENT])==30))
			return{type:1,label:140};
		// ENTTIME(TENT)=ENTTIME(TENT)+10
		this.aoz.sourcePos="604:24";
		this.vars.ENTTIME_array.setValue([this.vars.TENT],Math.floor(this.vars.ENTTIME_array.getValue([this.vars.TENT])+10));
		// ENTTYPE(ENTPOS)=10
		this.aoz.sourcePos="605:27";
		this.vars.ENTTYPE_array.setValue([this.vars.ENTPOS],10);
		// ENTTIME(ENTPOS)=8
		this.aoz.sourcePos="606:27";
		this.vars.ENTTIME_array.setValue([this.vars.ENTPOS],8);
		// ENTMX#(ENTPOS)=0
		this.aoz.sourcePos="607:27";
		this.vars.ENTMX__array.setValue([this.vars.ENTPOS],0);
		// ENTMY#(ENTPOS)=0
		this.aoz.sourcePos="608:27";
		this.vars.ENTMY__array.setValue([this.vars.ENTPOS],0);
		// sam play 3
		this.aoz.sourcePos="609:27";
		this.aoz.moduleSounds.callVoices( 'playSound', 0xFFFFFFFF, [ 3 ] );
		// Exit
		this.aoz.sourcePos="610:24";
		return{type:1,label:144};
		// End If
		this.aoz.sourcePos="611:21";
	};
	this.blocks[140]=function()
	{
		// End If
		this.aoz.sourcePos="612:18";
	};
	this.blocks[141]=function()
	{
		// End If
		this.aoz.sourcePos="613:15";
	};
	this.blocks[142]=function()
	{
		// End If
		this.aoz.sourcePos="614:15";
	};
	this.blocks[143]=function()
	{
		// Next TENT
		this.aoz.sourcePos="615:12";
		this.vars.TENT+=1;
		if(this.vars.TENT<=this.vars.MAXENTS+1)
			return{type:1,label:139}
	};
	this.blocks[144]=function()
	{
		// Paste bob ENTX#(ENTPOS)-OFFSETX#,ENTY#(ENTPOS)-OFFSETY#,3,0.1,0.1,ENTROT(ENTPOS)
		this.aoz.sourcePos="616:9";
		this.aoz.currentScreen.pasteImage('images',3,this.vars.ENTX__array.getValue([this.vars.ENTPOS])-this.vars.OFFSETX_,this.vars.ENTY__array.getValue([this.vars.ENTPOS])-this.vars.OFFSETY_,0.1,0.1,this.vars.ENTROT_array.getValue([this.vars.ENTPOS])*this.aoz.degreeRadian,);
		// End If
		this.aoz.sourcePos="617:6";
	};
	this.blocks[145]=function()
	{
		// If ENTTYPE(ENTPOS)=30 and EDMODE=False
		this.aoz.sourcePos="618:6";
		if(!(this.vars.ENTTYPE_array.getValue([this.vars.ENTPOS])==30&&this.vars.EDMODE==false))
			return{type:1,label:149};
		// _DISTX#=ENTX#(ENTPOS)-(OFFSETX#+SHIPX#)
		this.aoz.sourcePos="619:9";
		this.vars._DISTX_=this.vars.ENTX__array.getValue([this.vars.ENTPOS])-(this.vars.OFFSETX_+this.vars.SHIPX_);
		// _DISTY#=ENTY#(ENTPOS)-(OFFSETY#+SHIPY#)
		this.aoz.sourcePos="620:9";
		this.vars._DISTY_=this.vars.ENTY__array.getValue([this.vars.ENTPOS])-(this.vars.OFFSETY_+this.vars.SHIPY_);
		// _TDIST#=(abs(_DISTX#*_DISTX#)+abs(_DISTY#*_DISTY#))
		this.aoz.sourcePos="621:9";
		this.vars._TDIST_=(Math.abs(this.vars._DISTX_*this.vars._DISTX_)+Math.abs(this.vars._DISTY_*this.vars._DISTY_));
		// _TDIST#=sqr(_TDIST#)
		this.aoz.sourcePos="622:9";
		this.vars._TDIST_=Math.sqrt(this.vars._TDIST_);
		// _SPEEDX#=(_DISTX#/_TDIST#)/2
		this.aoz.sourcePos="623:9";
		this.vars._SPEEDX_=(this.vars._DISTX_/this.vars._TDIST_)/2;
		// _SPEEDY#=(_DISTY#/_TDIST#)/2
		this.aoz.sourcePos="624:9";
		this.vars._SPEEDY_=(this.vars._DISTY_/this.vars._TDIST_)/2;
		// If _TDIST#>80
		this.aoz.sourcePos="625:9";
		if(!(this.vars._TDIST_>80))
			return{type:1,label:146};
		// ENTMX#(ENTPOS)=_SPEEDX#
		this.aoz.sourcePos="626:12";
		this.vars.ENTMX__array.setValue([this.vars.ENTPOS],this.vars._SPEEDX_);
		// ENTMY#(ENTPOS)=_SPEEDY#
		this.aoz.sourcePos="627:12";
		this.vars.ENTMY__array.setValue([this.vars.ENTPOS],this.vars._SPEEDY_);
		// End If
		this.aoz.sourcePos="628:9";
	};
	this.blocks[146]=function()
	{
		// CX=10 : CY=8
		this.aoz.sourcePos="634:9";
		this.vars.CX=10;
		this.aoz.sourcePos="634:17";
		this.vars.CY=8;
		// If SHIPX#>ENTX#(ENTPOS)-OFFSETX#-CX and SHIPX#<ENTX#(ENTPOS)-OFFSETX#+CX
		this.aoz.sourcePos="635:9";
		if(!(this.vars.SHIPX_>this.vars.ENTX__array.getValue([this.vars.ENTPOS])-this.vars.OFFSETX_-this.vars.CX&&this.vars.SHIPX_<this.vars.ENTX__array.getValue([this.vars.ENTPOS])-this.vars.OFFSETX_+this.vars.CX))
			return{type:1,label:148};
		// If SHIPY#>ENTY#(ENTPOS)-OFFSETY#-CY and SHIPY#<ENTY#(ENTPOS)-OFFSETY#+CY
		this.aoz.sourcePos="636:12";
		if(!(this.vars.SHIPY_>this.vars.ENTY__array.getValue([this.vars.ENTPOS])-this.vars.OFFSETY_-this.vars.CY&&this.vars.SHIPY_<this.vars.ENTY__array.getValue([this.vars.ENTPOS])-this.vars.OFFSETY_+this.vars.CY))
			return{type:1,label:147};
		// ENTMX#(ENTPOS)=ENTMX#(ENTPOS)+(BX#)
		this.aoz.sourcePos="637:15";
		this.vars.ENTMX__array.setValue([this.vars.ENTPOS],this.vars.ENTMX__array.getValue([this.vars.ENTPOS])+(this.vars.BX_));
		// ENTMY#(ENTPOS)=ENTMY#(ENTPOS)+(BY#)
		this.aoz.sourcePos="638:15";
		this.vars.ENTMY__array.setValue([this.vars.ENTPOS],this.vars.ENTMY__array.getValue([this.vars.ENTPOS])+(this.vars.BY_));
		// SHOWSHIELD=20
		this.aoz.sourcePos="639:15";
		this.vars.SHOWSHIELD=20;
		// End If
		this.aoz.sourcePos="640:12";
	};
	this.blocks[147]=function()
	{
		// End If
		this.aoz.sourcePos="641:9";
	};
	this.blocks[148]=function()
	{
		// paste bob ENTX#(ENTPOS)-OFFSETX#,ENTY#(ENTPOS)-OFFSETY#,1,0.1,0.1
		this.aoz.sourcePos="642:9";
		this.aoz.currentScreen.pasteImage('images',1,this.vars.ENTX__array.getValue([this.vars.ENTPOS])-this.vars.OFFSETX_,this.vars.ENTY__array.getValue([this.vars.ENTPOS])-this.vars.OFFSETY_,0.1,0.1,undefined*this.aoz.degreeRadian,);
		// End If
		this.aoz.sourcePos="643:6";
	};
	this.blocks[149]=function()
	{
		// ENTX#(ENTPOS)=ENTX#(ENTPOS)-ENTMX#(ENTPOS)
		this.aoz.sourcePos="644:6";
		this.vars.ENTX__array.setValue([this.vars.ENTPOS],this.vars.ENTX__array.getValue([this.vars.ENTPOS])-this.vars.ENTMX__array.getValue([this.vars.ENTPOS]));
		// ENTY#(ENTPOS)=ENTY#(ENTPOS)-ENTMY#(ENTPOS)
		this.aoz.sourcePos="645:6";
		this.vars.ENTY__array.setValue([this.vars.ENTPOS],this.vars.ENTY__array.getValue([this.vars.ENTPOS])-this.vars.ENTMY__array.getValue([this.vars.ENTPOS]));
		// End If
		this.aoz.sourcePos="646:3";
	};
	this.blocks[150]=function()
	{
		// Until ENTPOS>MAXENTS
		this.aoz.sourcePos="647:0";
		if(!(this.vars.ENTPOS>this.vars.MAXENTS))
			return{type:1,label:128};
	};
	this.blocks[151]=function()
	{
		// Return
		this.aoz.sourcePos="649:0";
		return{type:3};
		// EXPLOSION: 'we explode at TEMPX,TEMPY'
	};
	this.blocks[152]=function()
	{
		// For T=0 to 40
		this.aoz.sourcePos="652:0";
		this.vars.T=0;
		if(this.vars.T>40)
			return{type:1,label:155};
	};
	this.blocks[153]=function()
	{
		// ENT=12
		this.aoz.sourcePos="653:3";
		this.vars.ENT=12;
		// Gosub SPAWNENT
		this.aoz.sourcePos="654:3";
		return{type:2,label:156,return:154};
	};
	this.blocks[154]=function()
	{
		// ROTO=RND(360)
		this.aoz.sourcePos="655:3";
		this.vars.ROTO=Math.floor(this.aoz.rnd(360));
		// ENTMX#(SPAWNENTPOS)=Cos(ROTO)*1+(rnd(10)/20)
		this.aoz.sourcePos="656:3";
		this.vars.ENTMX__array.setValue([this.vars.SPAWNENTPOS],Math.cos((this.vars.ROTO)*this.aoz.degreeRadian)*1+(this.aoz.rnd(10)/20));
		// ENTMY#(SPAWNENTPOS)=Sin(ROTO)*1+(rnd(10)/20)
		this.aoz.sourcePos="657:3";
		this.vars.ENTMY__array.setValue([this.vars.SPAWNENTPOS],Math.sin((this.vars.ROTO)*this.aoz.degreeRadian)*1+(this.aoz.rnd(10)/20));
		// ENTTIME(SPAWNENTPOS)=30+rnd(8)
		this.aoz.sourcePos="658:3";
		this.vars.ENTTIME_array.setValue([this.vars.SPAWNENTPOS],Math.floor(30+this.aoz.rnd(8)));
		// ENTX#(SPAWNENTPOS)=TEMPX
		this.aoz.sourcePos="659:3";
		this.vars.ENTX__array.setValue([this.vars.SPAWNENTPOS],this.vars.TEMPX);
		// ENTY#(SPAWNENTPOS)=TEMPY
		this.aoz.sourcePos="660:3";
		this.vars.ENTY__array.setValue([this.vars.SPAWNENTPOS],this.vars.TEMPY);
		// Next T
		this.aoz.sourcePos="661:0";
		this.vars.T+=1;
		if(this.vars.T<=40)
			return{type:1,label:153}
	};
	this.blocks[155]=function()
	{
		// Return
		this.aoz.sourcePos="662:0";
		return{type:3};
		// SPAWNENT: 'spawn the desired entity'
	};
	this.blocks[156]=function()
	{
		// SPAWNENTPOS=0
		this.aoz.sourcePos="668:0";
		this.vars.SPAWNENTPOS=0;
		// Repeat
		this.aoz.sourcePos="669:0";
	};
	this.blocks[157]=function()
	{
		// SPAWNENTPOS=SPAWNENTPOS+1
		this.aoz.sourcePos="670:3";
		this.vars.SPAWNENTPOS=Math.floor(this.vars.SPAWNENTPOS+1);
		// Until ENTTYPE(SPAWNENTPOS)=0
		this.aoz.sourcePos="671:0";
		if(!(this.vars.ENTTYPE_array.getValue([this.vars.SPAWNENTPOS])==0))
			return{type:1,label:157};
	};
	this.blocks[158]=function()
	{
		// If ENT=10
		this.aoz.sourcePos="673:0";
		if(!(this.vars.ENT==10))
			return{type:1,label:160};
		// ROTO=ROT+180
		this.aoz.sourcePos="674:3";
		this.vars.ROTO=Math.floor(this.vars.ROT+180);
		// If ROTO>360 : ROTO=ROTO-360 : End If
		this.aoz.sourcePos="675:3";
		if(!(this.vars.ROTO>360))
			return{type:1,label:159};
		this.aoz.sourcePos="675:17";
		this.vars.ROTO=Math.floor(this.vars.ROTO-360);
		this.aoz.sourcePos="675:33";
	};
	this.blocks[159]=function()
	{
		// ENTMX#(SPAWNENTPOS)=Cos(ROTO)*2
		this.aoz.sourcePos="676:3";
		this.vars.ENTMX__array.setValue([this.vars.SPAWNENTPOS],Math.cos((this.vars.ROTO)*this.aoz.degreeRadian)*2);
		// ENTMY#(SPAWNENTPOS)=Sin(ROTO)*2
		this.aoz.sourcePos="677:3";
		this.vars.ENTMY__array.setValue([this.vars.SPAWNENTPOS],Math.sin((this.vars.ROTO)*this.aoz.degreeRadian)*2);
		// ENTTIME(SPAWNENTPOS)=6
		this.aoz.sourcePos="678:3";
		this.vars.ENTTIME_array.setValue([this.vars.SPAWNENTPOS],6);
		// ENTX#(SPAWNENTPOS)=OFFSETX#+SHIPX#-ENTMX#(SPAWNENTPOS)*6
		this.aoz.sourcePos="679:3";
		this.vars.ENTX__array.setValue([this.vars.SPAWNENTPOS],this.vars.OFFSETX_+this.vars.SHIPX_-this.vars.ENTMX__array.getValue([this.vars.SPAWNENTPOS])*6);
		// ENTY#(SPAWNENTPOS)=OFFSETY#+SHIPY#-ENTMY#(SPAWNENTPOS)*6
		this.aoz.sourcePos="680:3";
		this.vars.ENTY__array.setValue([this.vars.SPAWNENTPOS],this.vars.OFFSETY_+this.vars.SHIPY_-this.vars.ENTMY__array.getValue([this.vars.SPAWNENTPOS])*6);
		// End If
		this.aoz.sourcePos="681:0";
	};
	this.blocks[160]=function()
	{
		// If ENT=11
		this.aoz.sourcePos="682:0";
		if(!(this.vars.ENT==11))
			return{type:1,label:162};
		// ROTO=ROT+170+Rnd(20)
		this.aoz.sourcePos="683:3";
		this.vars.ROTO=Math.floor(this.vars.ROT+170+this.aoz.rnd(20));
		// If ROTO>360 : ROTO=ROTO-360 : End If
		this.aoz.sourcePos="684:3";
		if(!(this.vars.ROTO>360))
			return{type:1,label:161};
		this.aoz.sourcePos="684:17";
		this.vars.ROTO=Math.floor(this.vars.ROTO-360);
		this.aoz.sourcePos="684:33";
	};
	this.blocks[161]=function()
	{
		// ENTMX#(SPAWNENTPOS)=BX#+Cos(ROTO)*(1+rnd(1))
		this.aoz.sourcePos="685:3";
		this.vars.ENTMX__array.setValue([this.vars.SPAWNENTPOS],this.vars.BX_+Math.cos((this.vars.ROTO)*this.aoz.degreeRadian)*(1+this.aoz.rnd(1)));
		// ENTMY#(SPAWNENTPOS)=BY#+Sin(ROTO)*(1+rnd(1))
		this.aoz.sourcePos="686:3";
		this.vars.ENTMY__array.setValue([this.vars.SPAWNENTPOS],this.vars.BY_+Math.sin((this.vars.ROTO)*this.aoz.degreeRadian)*(1+this.aoz.rnd(1)));
		// ENTTIME(SPAWNENTPOS)=8+rnd(8)
		this.aoz.sourcePos="687:3";
		this.vars.ENTTIME_array.setValue([this.vars.SPAWNENTPOS],Math.floor(8+this.aoz.rnd(8)));
		// ENTX#(SPAWNENTPOS)=OFFSETX#+SHIPX#-ENTMX#(SPAWNENTPOS)
		this.aoz.sourcePos="688:3";
		this.vars.ENTX__array.setValue([this.vars.SPAWNENTPOS],this.vars.OFFSETX_+this.vars.SHIPX_-this.vars.ENTMX__array.getValue([this.vars.SPAWNENTPOS]));
		// ENTY#(SPAWNENTPOS)=OFFSETY#+SHIPY#-ENTMY#(SPAWNENTPOS)
		this.aoz.sourcePos="689:3";
		this.vars.ENTY__array.setValue([this.vars.SPAWNENTPOS],this.vars.OFFSETY_+this.vars.SHIPY_-this.vars.ENTMY__array.getValue([this.vars.SPAWNENTPOS]));
		// End If
		this.aoz.sourcePos="690:0";
	};
	this.blocks[162]=function()
	{
		// If ENT=12
		this.aoz.sourcePos="691:0";
		if(!(this.vars.ENT==12))
			return{type:1,label:164};
		// ROTO=ROT-10+Rnd(20)
		this.aoz.sourcePos="692:3";
		this.vars.ROTO=Math.floor(this.vars.ROT-10+this.aoz.rnd(20));
		// If ROTO>360 : ROTO=ROTO-360 : End If
		this.aoz.sourcePos="693:3";
		if(!(this.vars.ROTO>360))
			return{type:1,label:163};
		this.aoz.sourcePos="693:17";
		this.vars.ROTO=Math.floor(this.vars.ROTO-360);
		this.aoz.sourcePos="693:33";
	};
	this.blocks[163]=function()
	{
		// ENTMX#(SPAWNENTPOS)=BX#+Cos(ROTO)*(1+rnd(1))
		this.aoz.sourcePos="694:3";
		this.vars.ENTMX__array.setValue([this.vars.SPAWNENTPOS],this.vars.BX_+Math.cos((this.vars.ROTO)*this.aoz.degreeRadian)*(1+this.aoz.rnd(1)));
		// ENTMY#(SPAWNENTPOS)=BY#+Sin(ROTO)*(1+rnd(1))
		this.aoz.sourcePos="695:3";
		this.vars.ENTMY__array.setValue([this.vars.SPAWNENTPOS],this.vars.BY_+Math.sin((this.vars.ROTO)*this.aoz.degreeRadian)*(1+this.aoz.rnd(1)));
		// ENTTIME(SPAWNENTPOS)=4+rnd(8)
		this.aoz.sourcePos="696:3";
		this.vars.ENTTIME_array.setValue([this.vars.SPAWNENTPOS],Math.floor(4+this.aoz.rnd(8)));
		// ENTX#(SPAWNENTPOS)=OFFSETX#+SHIPX#-ENTMX#(SPAWNENTPOS)
		this.aoz.sourcePos="697:3";
		this.vars.ENTX__array.setValue([this.vars.SPAWNENTPOS],this.vars.OFFSETX_+this.vars.SHIPX_-this.vars.ENTMX__array.getValue([this.vars.SPAWNENTPOS]));
		// ENTY#(SPAWNENTPOS)=OFFSETY#+SHIPY#-ENTMY#(SPAWNENTPOS)
		this.aoz.sourcePos="698:3";
		this.vars.ENTY__array.setValue([this.vars.SPAWNENTPOS],this.vars.OFFSETY_+this.vars.SHIPY_-this.vars.ENTMY__array.getValue([this.vars.SPAWNENTPOS]));
		// End If
		this.aoz.sourcePos="699:0";
	};
	this.blocks[164]=function()
	{
		// If ENT=20
		this.aoz.sourcePos="700:0";
		if(!(this.vars.ENT==20))
			return{type:1,label:167};
		// ROTO=360-ROT+90
		this.aoz.sourcePos="701:3";
		this.vars.ROTO=Math.floor(360-this.vars.ROT+90);
		// If ROTO>360 : ROTO=ROTO-360 : End If
		this.aoz.sourcePos="702:3";
		if(!(this.vars.ROTO>360))
			return{type:1,label:165};
		this.aoz.sourcePos="702:17";
		this.vars.ROTO=Math.floor(this.vars.ROTO-360);
		this.aoz.sourcePos="702:33";
	};
	this.blocks[165]=function()
	{
		// If ROTO<360 : ROTO=ROTO+360 : End If
		this.aoz.sourcePos="703:3";
		if(!(this.vars.ROTO<360))
			return{type:1,label:166};
		this.aoz.sourcePos="703:17";
		this.vars.ROTO=Math.floor(this.vars.ROTO+360);
		this.aoz.sourcePos="703:33";
	};
	this.blocks[166]=function()
	{
		// ENTMX#(SPAWNENTPOS)=BX#+Cos(ROT)*6
		this.aoz.sourcePos="704:3";
		this.vars.ENTMX__array.setValue([this.vars.SPAWNENTPOS],this.vars.BX_+Math.cos((this.vars.ROT)*this.aoz.degreeRadian)*6);
		// ENTMY#(SPAWNENTPOS)=BY#+Sin(ROT)*6
		this.aoz.sourcePos="705:3";
		this.vars.ENTMY__array.setValue([this.vars.SPAWNENTPOS],this.vars.BY_+Math.sin((this.vars.ROT)*this.aoz.degreeRadian)*6);
		// ENTTIME(SPAWNENTPOS)=32
		this.aoz.sourcePos="706:3";
		this.vars.ENTTIME_array.setValue([this.vars.SPAWNENTPOS],32);
		// ENTROT(SPAWNENTPOS)=ROTO
		this.aoz.sourcePos="707:3";
		this.vars.ENTROT_array.setValue([this.vars.SPAWNENTPOS],Math.floor(this.vars.ROTO));
		// ENTX#(SPAWNENTPOS)=OFFSETX#+SHIPX#-ENTMX#(SPAWNENTPOS)
		this.aoz.sourcePos="708:3";
		this.vars.ENTX__array.setValue([this.vars.SPAWNENTPOS],this.vars.OFFSETX_+this.vars.SHIPX_-this.vars.ENTMX__array.getValue([this.vars.SPAWNENTPOS]));
		// ENTY#(SPAWNENTPOS)=OFFSETY#+SHIPY#-ENTMY#(SPAWNENTPOS)
		this.aoz.sourcePos="709:3";
		this.vars.ENTY__array.setValue([this.vars.SPAWNENTPOS],this.vars.OFFSETY_+this.vars.SHIPY_-this.vars.ENTMY__array.getValue([this.vars.SPAWNENTPOS]));
		// End If
		this.aoz.sourcePos="710:0";
	};
	this.blocks[167]=function()
	{
		// If ENT=30
		this.aoz.sourcePos="711:0";
		if(!(this.vars.ENT==30))
			return{type:1,label:169};
		// ROTO=ROT
		this.aoz.sourcePos="712:3";
		this.vars.ROTO=Math.floor(this.vars.ROT);
		// If ROTO>360 : ROTO=ROTO-360 : End If
		this.aoz.sourcePos="713:4";
		if(!(this.vars.ROTO>360))
			return{type:1,label:168};
		this.aoz.sourcePos="713:18";
		this.vars.ROTO=Math.floor(this.vars.ROTO-360);
		this.aoz.sourcePos="713:34";
	};
	this.blocks[168]=function()
	{
		// ENTMX#(SPAWNENTPOS)=0
		this.aoz.sourcePos="714:3";
		this.vars.ENTMX__array.setValue([this.vars.SPAWNENTPOS],0);
		// ENTMY#(SPAWNENTPOS)=0
		this.aoz.sourcePos="715:3";
		this.vars.ENTMY__array.setValue([this.vars.SPAWNENTPOS],0);
		// ENTTIME(SPAWNENTPOS)=-20
		this.aoz.sourcePos="716:3";
		this.vars.ENTTIME_array.setValue([this.vars.SPAWNENTPOS],-20);
		// ENTX#(SPAWNENTPOS)=OFFSETX#+SHIPX#+Rnd(600)-300
		this.aoz.sourcePos="717:3";
		this.vars.ENTX__array.setValue([this.vars.SPAWNENTPOS],this.vars.OFFSETX_+this.vars.SHIPX_+this.aoz.rnd(600)-300);
		// ENTY#(SPAWNENTPOS)=OFFSETY#+SHIPY#+Rnd(600)-640
		this.aoz.sourcePos="718:3";
		this.vars.ENTY__array.setValue([this.vars.SPAWNENTPOS],this.vars.OFFSETY_+this.vars.SHIPY_+this.aoz.rnd(600)-640);
		// End If
		this.aoz.sourcePos="719:0";
	};
	this.blocks[169]=function()
	{
		// If ENT=1
		this.aoz.sourcePos="720:0";
		if(!(this.vars.ENT==1))
			return{type:1,label:170};
		// ENTMX#(SPAWNENTPOS)=0
		this.aoz.sourcePos="721:3";
		this.vars.ENTMX__array.setValue([this.vars.SPAWNENTPOS],0);
		// ENTMY#(SPAWNENTPOS)=0
		this.aoz.sourcePos="722:3";
		this.vars.ENTMY__array.setValue([this.vars.SPAWNENTPOS],0);
		// ENTTIME(SPAWNENTPOS)=4
		this.aoz.sourcePos="723:3";
		this.vars.ENTTIME_array.setValue([this.vars.SPAWNENTPOS],4);
		// ENTX#(SPAWNENTPOS)=OFFSETX#+SHIPX#
		this.aoz.sourcePos="724:3";
		this.vars.ENTX__array.setValue([this.vars.SPAWNENTPOS],this.vars.OFFSETX_+this.vars.SHIPX_);
		// ENTY#(SPAWNENTPOS)=OFFSETY#+SHIPY#
		this.aoz.sourcePos="725:3";
		this.vars.ENTY__array.setValue([this.vars.SPAWNENTPOS],this.vars.OFFSETY_+this.vars.SHIPY_);
		// End If
		this.aoz.sourcePos="726:0";
	};
	this.blocks[170]=function()
	{
		// ENTTYPE(SPAWNENTPOS)=ENT
		this.aoz.sourcePos="727:0";
		this.vars.ENTTYPE_array.setValue([this.vars.SPAWNENTPOS],Math.floor(this.vars.ENT));
		// Return
		this.aoz.sourcePos="728:0";
		return{type:3};
		// _FINDENTS:
	};
	this.blocks[171]=function()
	{
		// Return
		this.aoz.sourcePos="731:0";
		return{type:3};
		// CREATETITLE:
	};
	this.blocks[172]=function()
	{
		// Screen Open 1,400,100,32,lowres
		this.aoz.sourcePos="734:0";
		this.aoz.screenOpen(1,400,100,32,0);
		// Palette $000,$FFF,$555
		this.aoz.sourcePos="735:0";
		this.aoz.currentScreen.setPalette([0x000,0xFFF,0x555]);
		// Curs Off : Flash Off
		this.aoz.sourcePos="736:0";
		this.aoz.currentScreen.currentTextWindow.setCursor(false);
		this.aoz.sourcePos="736:11";
		// Cls 0
		this.aoz.sourcePos="737:0";
		this.aoz.currentScreen.cls(0);
		// Ink 1,0
		this.aoz.sourcePos="738:0";
		this.aoz.currentScreen.setInk(1,0,);
		// Set Font "acme",30
		this.aoz.sourcePos="739:0";
		return{type:8,instruction:"setFont",args:["acme",30]};
	};
	this.blocks[173]=function()
	{
		// Text 0,22,"Gravity Shooter"
		this.aoz.sourcePos="740:0";
		this.aoz.currentScreen.text({x:0,y:22},"Gravity Shooter",undefined);
		// Wait vbl
		this.aoz.sourcePos="741:0";
		return{type:8,instruction:"waitVbl",args:[]};
	};
	this.blocks[174]=function()
	{
		// For y=1 To 30
		this.aoz.sourcePos="743:0";
		this.vars.y=1;
		if(this.vars.y>30)
			return{type:1,label:179};
	};
	this.blocks[175]=function()
	{
		// For x=1 To 399
		this.aoz.sourcePos="744:3";
		this.vars.x=1;
		if(this.vars.x>399)
			return{type:1,label:178};
	};
	this.blocks[176]=function()
	{
		// d=point(x,y):d2=point(x,y-1) : d3=point(x-1,y)
		this.aoz.sourcePos="745:6";
		this.vars.d=Math.floor(this.aoz.currentScreen.point({x:this.vars.x,y:this.vars.y}));
		this.aoz.sourcePos="745:19";
		this.vars.d2=Math.floor(this.aoz.currentScreen.point({x:this.vars.x,y:this.vars.y-1}));
		this.aoz.sourcePos="745:37";
		this.vars.d3=Math.floor(this.aoz.currentScreen.point({x:this.vars.x-1,y:this.vars.y}));
		// If (d>0 and d2=0) or (d>0 and d3=0)
		this.aoz.sourcePos="746:6";
		if(!((this.vars.d>0&&this.vars.d2==0)||(this.vars.d>0&&this.vars.d3==0)))
			return{type:1,label:177};
		// splash(x,y)=point(x,y)
		this.aoz.sourcePos="747:9";
		this.vars.splash_array.setValue([this.vars.x,this.vars.y],Math.floor(this.aoz.currentScreen.point({x:this.vars.x,y:this.vars.y})));
		// End If
		this.aoz.sourcePos="748:6";
	};
	this.blocks[177]=function()
	{
		// Next x
		this.aoz.sourcePos="749:3";
		this.vars.x+=1;
		if(this.vars.x<=399)
			return{type:1,label:176}
	};
	this.blocks[178]=function()
	{
		// Next y
		this.aoz.sourcePos="750:0";
		this.vars.y+=1;
		if(this.vars.y<=30)
			return{type:1,label:175}
	};
	this.blocks[179]=function()
	{
		// Screen Close 1
		this.aoz.sourcePos="751:0";
		this.aoz.screenClose(1);
		// Return
		this.aoz.sourcePos="752:0";
		return{type:3};
		// End
		this.aoz.sourcePos="774:0";
		return{type:0}
	};
	this.blocks[180]=function()
	{
		return{type:0}
	};

	// Labels...
	this.labels=
	{
		UPDATETITLE:
		{
			dataPosition:0,
			labelBlock:59
		},
		_CLEARENTS:
		{
			dataPosition:0,
			labelBlock:77
		},
		_UPDATEBACKGROUND:
		{
			dataPosition:0,
			labelBlock:84
		},
		_UPDATELEVELENTS:
		{
			dataPosition:0,
			labelBlock:91
		},
		_UPDATEENTS:
		{
			dataPosition:0,
			labelBlock:127
		},
		EXPLOSION:
		{
			dataPosition:0,
			labelBlock:152
		},
		SPAWNENT:
		{
			dataPosition:0,
			labelBlock:156
		},
		_FINDENTS:
		{
			dataPosition:0,
			labelBlock:171
		},
		CREATETITLE:
		{
			dataPosition:0,
			labelBlock:172
		}
	};
	this.aoz.run(this,0,null,this);
	this.aoz.v1_0_textwindows=new v1_0_textwindows(this.aoz,this);
	this.aoz.v1_0_sounds=new v1_0_sounds(this.aoz,this);
	this.aoz.v1_0_screens=new v1_0_screens(this.aoz,this);
	this.aoz.v1_0_maths=new v1_0_maths(this.aoz,this);
	this.aoz.v1_0_bobs=new v1_0_bobs(this.aoz,this);
	this.aoz.v1_0_banks=new v1_0_banks(this.aoz,this);
};
function procSHOWWARNING(aoz,root,parent)
{
	this.aoz=aoz;
	this.root=root;
	this.parent=parent;
	this.procParam=0;
	this.procParam$="";
	var self=this;
	this.reset=function()
	{
		self.vars=
		{
			x:0,
			y:0,
			t$:""
		};
	};
	this.blocks=[];
	this.blocks[0]=function()
	{
		// FC=FC+1 : FCFACT=FCDELAY/4
		this.aoz.sourcePos="755:3";
		this.root.vars.FC=Math.floor(this.root.vars.FC+1);
		this.aoz.sourcePos="755:13";
		this.vars.FCFACT=Math.floor(this.root.vars.FCDELAY/4);
		// If FC>FCFACT and FC<FCFACT+FCFACT+1
		this.aoz.sourcePos="756:3";
		if(!(this.root.vars.FC>this.vars.FCFACT&&this.root.vars.FC<this.vars.FCFACT+this.vars.FCFACT+1))
			return{type:1,label:1};
		// Ink 2,0
		this.aoz.sourcePos="757:6";
		this.aoz.currentScreen.setInk(2,0,);
		// Else
		return{type:1,label:6};
	};
	this.blocks[1]=function()
	{
		// If FC>FCFACT*2 and FC<FCFACT*3+1
		this.aoz.sourcePos="759:6";
		if(!(this.root.vars.FC>this.vars.FCFACT*2&&this.root.vars.FC<this.vars.FCFACT*3+1))
			return{type:1,label:2};
		// Ink 3,0
		this.aoz.sourcePos="760:9";
		this.aoz.currentScreen.setInk(3,0,);
		// Else
		return{type:1,label:5};
	};
	this.blocks[2]=function()
	{
		// If FC>FCFACT*3 and FC<FCFACT*4+1
		this.aoz.sourcePos="762:9";
		if(!(this.root.vars.FC>this.vars.FCFACT*3&&this.root.vars.FC<this.vars.FCFACT*4+1))
			return{type:1,label:3};
		// Ink 2,0
		this.aoz.sourcePos="763:12";
		this.aoz.currentScreen.setInk(2,0,);
		// Else
		return{type:1,label:4};
	};
	this.blocks[3]=function()
	{
		// Ink 1,0
		this.aoz.sourcePos="765:12";
		this.aoz.currentScreen.setInk(1,0,);
		// End If
		this.aoz.sourcePos="766:9";
	};
	this.blocks[4]=function()
	{
		// End If
		this.aoz.sourcePos="767:6";
	};
	this.blocks[5]=function()
	{
		// End If
		this.aoz.sourcePos="768:3";
	};
	this.blocks[6]=function()
	{
		// If FC>FCDELAY
		this.aoz.sourcePos="769:3";
		if(!(this.root.vars.FC>this.root.vars.FCDELAY))
			return{type:1,label:7};
		// FC=0
		this.aoz.sourcePos="770:6";
		this.root.vars.FC=0;
		// End If
		this.aoz.sourcePos="771:3";
	};
	this.blocks[7]=function()
	{
		// Text x,y,t$
		this.aoz.sourcePos="772:3";
		this.aoz.currentScreen.text({x:this.vars.x,y:this.vars.y},this.vars.t$,undefined);
		// End Proc
		return{type:0};
	};
	this.blocks[8]=function()
	{
		return{type:0}
	};
};
