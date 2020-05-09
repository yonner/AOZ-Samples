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
// Compiled with AOZ Transpiler Version 0.9.9 Test 5 - 08/05/2020 on the 09/05/2020-12:50:03
//

function Application( canvasId )
{
	this.manifest=JSON.parse(atob('eyJ2ZXJzaW9uIjoiOSIsImluZm9zIjp7ImFwcGxpY2F0aW9uTmFtZSI6Ik5hbWUgb2YgeW91ciBhcHBsaWNhdGlvbi4iLCJhdXRob3IiOiJCeSBZb3UiLCJ2ZXJzaW9uIjoiVmVyc2lvbiAwLjAiLCJkYXRlIjoiQ3JlYXRlZCBvbiB0aGUgLi4uIiwiY29weXJpZ2h0IjoiKGMpIFlvdXIgQ29ycG9yYXRpb24gVW5saW1pdGVkIiwic3RhcnQiOiJtYWluLmFveiJ9LCJjb21waWxhdGlvbiI6eyJzcGVlZCI6ImZhc3QiLCJzeW50YXgiOiJhb3oiLCJlbXVsYXRpb24iOiJQQyIsInVzZVBhbGV0dGUiOnRydWUsInVzZVNob3J0Q29sb3JzIjpmYWxzZSwic2hvd0NvcHBlckJsYWNrIjpmYWxzZSwidW5saW1pdGVkU2NyZWVucyI6dHJ1ZSwidW5saW1pdGVkV2luZG93cyI6dHJ1ZSwibWFza0hhcmR3YXJlQ29vcmRpbmF0ZXMiOmZhbHNlLCJlbmRpYW4iOiJsaXR0bGUiLCJub1dhcm5pbmciOltdLCJkaXNwbGF5RW5kQWxlcnQiOmZhbHNlLCJkaXNwbGF5RXJyb3JBbGVydCI6dHJ1ZX0sImRpc3BsYXkiOnsidHZTdGFuZGFyZCI6InBhbCIsIndpZHRoIjoxMjgwLCJoZWlnaHQiOjcyMCwiYmFja2dyb3VuZCI6ImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIjoiIzAwMDAwMCIsImJvZHlCYWNrZ3JvdW5kQ29sb3IiOiIjMDAwMDAwIiwiYm9keUJhY2tncm91bmRJbWFnZSI6Ii4vcnVudGltZS9yZXNvdXJjZXMvc3Rhcl9uaWdodC5qcGVnIiwic2NhbGVYIjoxLCJzY2FsZVkiOjEsInNjcmVlblNjYWxlIjoxLCJmcHMiOmZhbHNlLCJmcHNGb250IjoiMTJweCBWZXJkYW5hIiwiZnBzQ29sb3IiOiIjRkZGRjAwIiwiZnBzWCI6MTAsImZwc1kiOjE2LCJmdWxsUGFnZSI6dHJ1ZSwiZnVsbFNjcmVlbiI6dHJ1ZSwia2VlcFByb3BvcnRpb25zIjp0cnVlLCJmdWxsU2NyZWVuSWNvbiI6dHJ1ZSwiZnVsbFNjcmVlbkljb25YIjotMzQsImZ1bGxTY3JlZW5JY29uWSI6MiwiZnVsbFNjcmVlbkljb25JbWFnZSI6Ii4vcnVudGltZS9yZXNvdXJjZXMvZnVsbF9zY3JlZW4ucG5nIiwic21hbGxTY3JlZW5JY29uSW1hZ2UiOiIuL3J1bnRpbWUvcmVzb3VyY2VzL3NtYWxsX3NjcmVlbi5wbmcifSwic3ByaXRlcyI6eyJjb2xsaXNpb25Cb3hlZCI6ZmFsc2UsImNvbGxpc2lvblByZWNpc2lvbiI6MSwiY29sbGlzaW9uQWxwaGFUaHJlc2hvbGQiOjF9LCJzb3VuZHMiOnsibW9kZSI6ImFtaWdhIiwidm9sdW1lIjoxLCJwcmVsb2FkIjp0cnVlLCJudW1iZXJPZlNvdW5kc1RvUHJlbG9hZCI6NCwic291bmRQb29sU2l6ZSI6NH0sImdhbWVwYWQiOnsibWFwcGluZyI6eyJ1cCI6MzgsImRvd24iOjQwLCJsZWZ0IjozNywicmlnaHQiOjM5LCJmaXJlIjozMn19LCJib290U2NyZWVuIjp7ImFjdGl2ZSI6ZmFsc2UsIndhaXRTb3VuZHMiOjAsImNsaWNrU291bmRzIjpmYWxzZX0sInJhaW5ib3dzIjp7Im1vZGUiOiJzbG93In0sImZvbnRzIjp7Imxpc3RGb250cyI6IlBDIiwiYW1pZ2EiOltdLCJnb29nbGUiOlsiZXhwbGV0dXMgc2FucyJdfSwiZGVmYXVsdCI6eyJzY3JlZW4iOnsieCI6MCwieSI6MCwid2lkdGgiOjEyODAsImhlaWdodCI6NzIwLCJudW1iZXJPZkNvbG9ycyI6MzIsInBpeGVsTW9kZSI6Imxvd3JlcyIsInBhbGV0dGUiOlsiIzAwMDAwMCIsIiNGRkZGRkYiLCIjMDAwMDAwIiwiIzIyMjIyMiIsIiNGRjAwMDAiLCIjMDBGRjAwIiwiIzAwMDBGRiIsIiM2NjY2NjYiLCIjNTU1NTU1IiwiIzMzMzMzMyIsIiM3NzMzMzMiLCIjMzM3NzMzIiwiIzc3NzczMyIsIiMzMzMzNzciLCIjNzczMzc3IiwiIzMzNzc3NyIsIiMwMDAwMDAiLCIjRUVDQzg4IiwiI0NDNjYwMCIsIiNFRUFBMDAiLCIjMjI3N0ZGIiwiIzQ0OTlERCIsIiM1NUFBRUUiLCIjQUFEREZGIiwiI0JCRERGRiIsIiNDQ0VFRkYiLCIjRkZGRkZGIiwiIzQ0MDA4OCIsIiNBQTAwRUUiLCIjRUUwMEVFIiwiI0VFMDA4OCIsIiNFRUVFRUUiXSwid2luZG93Ijp7IngiOjAsInkiOjAsImZvbnRXaWR0aCI6MTYsImZvbnRIZWlnaHQiOjMwLCJib3JkZXIiOjAsInBhcGVyIjowLCJwZW4iOjEsImJhY2tncm91bmQiOiJvcGFxdWUiLCJmb250Ijp7Im5hbWUiOiJJQk0gUGxleCBNb25vIiwidHlwZSI6Imdvb2dsZSIsImhlaWdodCI6MjYuNjV9LCJjdXJzb3JJbWFnZSI6Ii4vcnVudGltZS9yZXNvdXJjZXMvY3Vyc29yX3BjLnBuZyIsImN1cnNvckNvbG9ycyI6W3siciI6NjgsImciOjY4LCJiIjowLCJhIjoxMjh9LHsiciI6MTM2LCJnIjoxMzYsImIiOjAsImEiOjEyOH0seyJyIjoxODcsImciOjE4NywiYiI6MCwiYSI6MTI4fSx7InIiOjIyMSwiZyI6MjIxLCJiIjowLCJhIjoxMjh9LHsiciI6MjM4LCJnIjoyMzgsImIiOjAsImEiOjEyOH0seyJyIjoyNTUsImciOjI1NSwiYiI6MzQsImEiOjEyOH0seyJyIjoyNTUsImciOjI1NSwiYiI6MTM2LCJhIjoxMjh9LHsiciI6MjU1LCJnIjoyNTUsImIiOjIwNCwiYSI6MTI4fSx7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImEiOjEyOH0seyJyIjoxNzAsImciOjE3MCwiYiI6MjU1LCJhIjoxMjh9LHsiciI6MTM2LCJnIjoxMzYsImIiOjIwNCwiYSI6MTI4fSx7InIiOjEwMiwiZyI6MTAyLCJiIjoxNzAsImEiOjEyOH0seyJyIjozNCwiZyI6MzQsImIiOjEwMiwiYSI6MTI4fSx7InIiOjAsImciOjAsImIiOjY4LCJhIjoxMjh9LHsiciI6MCwiZyI6MCwiYiI6MTcsImEiOjEyOH0seyJyIjowLCJnIjowLCJiIjowLCJhIjoxMjh9XX19fX0='));
	this.parent=this;
	this.root=this;
	this.contextName='application';
	this.procParam=0;
	this.procParam$='';
	this.aoz=new AOZ(canvasId,this.manifest);
	this.aoz.sources=JSON.parse(atob('W3sicGF0aCI6IkM6L1VzZXJzL0phc29uL0RvY3VtZW50cy9BT1ogU3R1ZGlvIEFwcGxpY2F0aW9ucy9hcHBsaWNhdGlvbnMvU25ha2VWMi9tYWluLmFveiJ9XQ=='));

	// Compiled program begins here
	// ----------------------------
	this.vars=
	{
		body_x_array:new AArray(this.aoz,0,0),
		body_y_array:new AArray(this.aoz,0,0),
		tempbody_x_array:new AArray(this.aoz,0,0),
		tempbody_y_array:new AArray(this.aoz,0,0),
		grid_array:new AArray(this.aoz,0,0)
	}
	this.blocks=[];
	this.blocks[0]=function()
	{
		// sw=Screen Width
		this.aoz.sourcePos="0:4:0";
		this.vars.sw=Math.floor(this.aoz.currentScreen.dimension.width);
		// sh=Screen Height
		this.aoz.sourcePos="0:5:0";
		this.vars.sh=Math.floor(this.aoz.currentScreen.dimension.height);
		// Screen Open 0,sw,sh,32,Lowres
		this.aoz.sourcePos="0:6:0";
		this.aoz.screenOpen(0,this.vars.sw,this.vars.sh,32,0);
		// Curs Off
		this.aoz.sourcePos="0:7:0";
		this.aoz.currentScreen.currentTextWindow.setCursor(false);
		// Double buffer
		this.aoz.sourcePos="0:8:0";
		this.aoz.renderer.setDoubleBuffer();
		// Autoback 1
		this.aoz.sourcePos="0:9:0";
		this.aoz.renderer.autoback(1);
		// font_height = 16
		this.aoz.sourcePos="0:11:0";
		this.vars.font_height=16;
		// font_name$ = "expletus sans"
		this.aoz.sourcePos="0:12:0";
		this.vars.font_name$="expletus sans";
		// Set Font font_name$, font_height
		this.aoz.sourcePos="0:13:0";
		return{type:8,instruction:"setFont",args:[this.vars.font_name$,this.vars.font_height]};
	};
	this.blocks[1]=function()
	{
		// Dim body_x(576)
		this.aoz.sourcePos="0:16:0";
		this.vars.body_x_array.dim([576],0);
		// Dim body_y(576)
		this.aoz.sourcePos="0:17:0";
		this.vars.body_y_array.dim([576],0);
		// Dim tempbody_x(576)
		this.aoz.sourcePos="0:19:0";
		this.vars.tempbody_x_array.dim([576],0);
		// Dim tempbody_y(576)
		this.aoz.sourcePos="0:20:0";
		this.vars.tempbody_y_array.dim([576],0);
		// tail_index=2
		this.aoz.sourcePos="0:22:0";
		this.vars.tail_index=2;
		// body_x(0)=5
		this.aoz.sourcePos="0:24:0";
		this.vars.body_x_array.setValue([0],5);
		// body_y(0)=5
		this.aoz.sourcePos="0:25:0";
		this.vars.body_y_array.setValue([0],5);
		// body_x(1)=4
		this.aoz.sourcePos="0:27:0";
		this.vars.body_x_array.setValue([1],4);
		// body_y(1)=5
		this.aoz.sourcePos="0:28:0";
		this.vars.body_y_array.setValue([1],5);
		// body_x(2)=3
		this.aoz.sourcePos="0:30:0";
		this.vars.body_x_array.setValue([2],3);
		// body_y(2)=5
		this.aoz.sourcePos="0:31:0";
		this.vars.body_y_array.setValue([2],5);
		// PX=1
		this.aoz.sourcePos="0:33:0";
		this.vars.PX=1;
		// PY=6
		this.aoz.sourcePos="0:34:0";
		this.vars.PY=6;
		// PSPEED=32    // Speed of movement (jump in pixels)
		this.aoz.sourcePos="0:35:0";
		this.vars.PSPEED=32;
		// PMX=PSPEED  // Motion start direction
		this.aoz.sourcePos="0:36:0";
		this.vars.PMX=Math.floor(this.vars.PSPEED);
		// PMY=0       //
		this.aoz.sourcePos="0:37:0";
		this.vars.PMY=0;
		// PSCALE=2  // Scale size
		this.aoz.sourcePos="0:38:0";
		this.vars.PSCALE=2;
		// DF=1        // Frame variable start number - Left to right is 1 to 5, Down is 6 to 10 etc.
		this.aoz.sourcePos="0:39:0";
		this.vars.DF=1;
		// FR=0        // Frame offset.
		this.aoz.sourcePos="0:40:0";
		this.vars.FR=0;
		// FRA=1       // Frame offset counter.
		this.aoz.sourcePos="0:41:0";
		this.vars.FRA=1;
		// North = -1
		this.aoz.sourcePos="0:45:0";
		this.vars.North=-1;
		// East = 2
		this.aoz.sourcePos="0:46:0";
		this.vars.East=2;
		// South = 1
		this.aoz.sourcePos="0:47:0";
		this.vars.South=1;
		// West = -2
		this.aoz.sourcePos="0:48:0";
		this.vars.West=-2;
		// MUSH = 5
		this.aoz.sourcePos="0:50:0";
		this.vars.MUSH=5;
		// WALL = 6
		this.aoz.sourcePos="0:52:0";
		this.vars.WALL=6;
		// Direction = East
		this.aoz.sourcePos="0:54:0";
		this.vars.Direction=Math.floor(this.vars.East);
		// Dim grid(32,18)
		this.aoz.sourcePos="0:59:0";
		this.vars.grid_array.dim([32,18],0);
		// mushx = RND(32)
		this.aoz.sourcePos="0:62:0";
		this.vars.mushx=Math.floor(this.aoz.rnd(32));
		// mushy = RND(18)
		this.aoz.sourcePos="0:63:0";
		this.vars.mushy=Math.floor(this.aoz.rnd(18));
		// grid(mushx, mushy) = MUSH
		this.aoz.sourcePos="0:64:0";
		this.vars.grid_array.setValue([this.vars.mushx,this.vars.mushy],Math.floor(this.vars.MUSH));
		// hit = false
		this.aoz.sourcePos="0:66:0";
		this.vars.hit=Math.floor(this.aoz.manifest.compilation.emulation.toLowerCase()!='pc'?0:0);
		// lives = 3
		this.aoz.sourcePos="0:68:0";
		this.vars.lives=3;
		// Ink 1
		this.aoz.sourcePos="0:70:0";
		this.aoz.currentScreen.setInk(1,);
		// Global sw,sh, grid(), PSCALE, body_x(), body_y(), tempbody_x(), tempbody_y()
		this.aoz.sourcePos="0:72:0";
		// Global Direction, North, East, South, West, MUSH, WALL, font_name$, tail_index, mushx, mushy, hit
		this.aoz.sourcePos="0:74:0";
		// For x = 0 to 12 Step 1
		this.aoz.sourcePos="0:76:0";
		this.vars.x=0;
	};
	this.blocks[2]=function()
	{
		// generateWall[x, 0]
		this.aoz.sourcePos="0:77:4";
		return {type:4,procedure:procgenerateWall,args:{xpos:this.vars.x,ypos:0}};
	};
	this.blocks[3]=function()
	{
		// Next
		this.aoz.sourcePos="0:78:0";
		this.vars.x+=1;
		if(this.vars.x<=12)
			return{type:1,label:2};
	};
	this.blocks[4]=function()
	{
		// For x = 20 to 32 Step 1
		this.aoz.sourcePos="0:79:0";
		this.vars.x=20;
	};
	this.blocks[5]=function()
	{
		// generateWall[x, 0]
		this.aoz.sourcePos="0:80:4";
		return {type:4,procedure:procgenerateWall,args:{xpos:this.vars.x,ypos:0}};
	};
	this.blocks[6]=function()
	{
		// Next
		this.aoz.sourcePos="0:81:0";
		this.vars.x+=1;
		if(this.vars.x<=32)
			return{type:1,label:5};
	};
	this.blocks[7]=function()
	{
		// For x = 0 to 12 Step 1
		this.aoz.sourcePos="0:83:0";
		this.vars.x=0;
	};
	this.blocks[8]=function()
	{
		// generateWall[x, 18]
		this.aoz.sourcePos="0:84:4";
		return {type:4,procedure:procgenerateWall,args:{xpos:this.vars.x,ypos:18}};
	};
	this.blocks[9]=function()
	{
		// Next
		this.aoz.sourcePos="0:85:0";
		this.vars.x+=1;
		if(this.vars.x<=12)
			return{type:1,label:8};
	};
	this.blocks[10]=function()
	{
		// For x = 20 to 32 Step 1
		this.aoz.sourcePos="0:86:0";
		this.vars.x=20;
	};
	this.blocks[11]=function()
	{
		// generateWall[x, 18]
		this.aoz.sourcePos="0:87:4";
		return {type:4,procedure:procgenerateWall,args:{xpos:this.vars.x,ypos:18}};
	};
	this.blocks[12]=function()
	{
		// Next
		this.aoz.sourcePos="0:88:0";
		this.vars.x+=1;
		if(this.vars.x<=32)
			return{type:1,label:11};
	};
	this.blocks[13]=function()
	{
		// For y = 0 to 18 Step 1
		this.aoz.sourcePos="0:90:0";
		this.vars.y=0;
	};
	this.blocks[14]=function()
	{
		// generateWall[0, y]
		this.aoz.sourcePos="0:91:4";
		return {type:4,procedure:procgenerateWall,args:{xpos:0,ypos:this.vars.y}};
	};
	this.blocks[15]=function()
	{
		// Next
		this.aoz.sourcePos="0:92:0";
		this.vars.y+=1;
		if(this.vars.y<=18)
			return{type:1,label:14};
	};
	this.blocks[16]=function()
	{
		// For y = 0 to 18 Step 1
		this.aoz.sourcePos="0:93:0";
		this.vars.y=0;
	};
	this.blocks[17]=function()
	{
		// generateWall[32, y]
		this.aoz.sourcePos="0:94:4";
		return {type:4,procedure:procgenerateWall,args:{xpos:32,ypos:this.vars.y}};
	};
	this.blocks[18]=function()
	{
		// Next
		this.aoz.sourcePos="0:95:0";
		this.vars.y+=1;
		if(this.vars.y<=18)
			return{type:1,label:17};
	};
	this.blocks[19]=function()
	{
		// Do
		this.aoz.sourcePos="0:97:0";
	};
	this.blocks[20]=function()
	{
		// Wait 0.16
		this.aoz.sourcePos="0:98:4";
		return{type:8,instruction:"wait",args:[0.16]};
	};
	this.blocks[21]=function()
	{
		// moveSnake
		this.aoz.sourcePos="0:100:4";
		return {type:4,procedure:procmoveSnake,args:{}};
	};
	this.blocks[22]=function()
	{
		// drawSnake
		this.aoz.sourcePos="0:102:4";
		return {type:4,procedure:procdrawSnake,args:{}};
	};
	this.blocks[23]=function()
	{
		// eatFood
		this.aoz.sourcePos="0:104:4";
		return {type:4,procedure:proceatFood,args:{}};
	};
	this.blocks[24]=function()
	{
		// checkKeys
		this.aoz.sourcePos="0:106:4";
		return {type:4,procedure:proccheckKeys,args:{}};
	};
	this.blocks[25]=function()
	{
		// checkEndGame
		this.aoz.sourcePos="0:108:4";
		return {type:4,procedure:proccheckEndGame,args:{}};
	};
	this.blocks[26]=function()
	{
		// If hit = true
		this.aoz.sourcePos="0:110:4";
		if(!((this.vars.hit)==(this.aoz.manifest.compilation.emulation.toLowerCase()!='pc'?-1:1)))
			return{type:1,label:27};
		// Exit
		this.aoz.sourcePos="0:111:8";
		return{type:1,label:29};
		// End IF
		this.aoz.sourcePos="0:112:4";
	};
	this.blocks[27]=function()
	{
		// Bob 569,mushx * 32 ,mushy * 32,21
		this.aoz.sourcePos="0:114:4";
		this.aoz.currentScreen.bob(569,{x:this.vars.mushx*32,y:this.vars.mushy*32},21);
		// Bob Scale 569,PSCALE,PSCALE
		this.aoz.sourcePos="0:115:4";
		this.aoz.currentScreen.bobScale(569,{x:this.vars.PSCALE,y:this.vars.PSCALE});
		// Bob Draw
		this.aoz.sourcePos="0:117:4";
		// Wait Vbl
		this.aoz.sourcePos="0:119:4";
		return{type:8,instruction:"waitVbl",args:[]};
	};
	this.blocks[28]=function()
	{
		// Screen Swap
		this.aoz.sourcePos="0:120:4";
		this.aoz.renderer.screenSwap();
		// loop
		this.aoz.sourcePos="0:122:0";
		return{type:1,label:20};
	};
	this.blocks[29]=function()
	{
		// End
		this.aoz.sourcePos="0:333:0";
		return{type:0}
	};
	this.blocks[30]=function()
	{
		return{type:0}
	};
	this.aoz.run(this,0,null,this);
	this.aoz.v1_0_variables=new v1_0_variables(this.aoz,this);
	this.aoz.v1_0_textwindows=new v1_0_textwindows(this.aoz,this);
	this.aoz.v1_0_screens=new v1_0_screens(this.aoz,this);
	this.aoz.v1_0_maths=new v1_0_maths(this.aoz,this);
	this.aoz.v1_0_keyboard_and_mouse=new v1_0_keyboard_and_mouse(this.aoz,this);
	this.aoz.v1_0_graphics=new v1_0_graphics(this.aoz,this);
	this.aoz.v1_0_filesystem=new v1_0_filesystem(this.aoz,this);
	this.aoz.v1_0_bobs=new v1_0_bobs(this.aoz,this);
};
function proccheckEndGame(aoz,root,parent)
{
	this.aoz=aoz;
	this.root=root;
	this.parent=parent;
	this.procParam=0;
	this.procParam$="";
	var self=this;
	this.vars={};
	this.blocks=[];
	this.blocks[0]=function()
	{
		// For i = 1 To tail_index Step 1
		this.aoz.sourcePos="0:126:4";
		this.vars.i=1;
	};
	this.blocks[1]=function()
	{
		// If body_x(i) = body_x(0) And body_y(i) = body_y(0)
		this.aoz.sourcePos="0:127:8";
		if(!(((this.root.vars.body_x_array.getValue([this.vars.i]))==(this.root.vars.body_x_array.getValue([0])))&&((this.root.vars.body_y_array.getValue([this.vars.i]))==(this.root.vars.body_y_array.getValue([0])))))
			return{type:1,label:2};
		// hit = true
		this.aoz.sourcePos="0:128:12";
		this.root.vars.hit=Math.floor(this.aoz.manifest.compilation.emulation.toLowerCase()!='pc'?-1:1);
		// End If
		this.aoz.sourcePos="0:129:8";
	};
	this.blocks[2]=function()
	{
		// Next
		this.aoz.sourcePos="0:130:4";
		this.vars.i+=1;
		if(this.vars.i<=this.root.vars.tail_index)
			return{type:1,label:1};
	};
	this.blocks[3]=function()
	{
		// x = body_x(0)
		this.aoz.sourcePos="0:132:4";
		this.vars.x=Math.floor(this.root.vars.body_x_array.getValue([0]));
		// y = body_y(0)
		this.aoz.sourcePos="0:133:4";
		this.vars.y=Math.floor(this.root.vars.body_y_array.getValue([0]));
		// If Direction = South
		this.aoz.sourcePos="0:135:4";
		if(!((this.root.vars.Direction)==(this.root.vars.South)))
			return{type:1,label:4};
		// Inc y
		this.aoz.sourcePos="0:136:8";
		this.vars.y++;
		// End IF
		this.aoz.sourcePos="0:137:4";
	};
	this.blocks[4]=function()
	{
		// If Direction = North
		this.aoz.sourcePos="0:138:4";
		if(!((this.root.vars.Direction)==(this.root.vars.North)))
			return{type:1,label:5};
		// Dec y
		this.aoz.sourcePos="0:139:8";
		this.vars.y--;
		// End IF
		this.aoz.sourcePos="0:140:4";
	};
	this.blocks[5]=function()
	{
		// If Direction = West
		this.aoz.sourcePos="0:141:4";
		if(!((this.root.vars.Direction)==(this.root.vars.West)))
			return{type:1,label:6};
		// Dec x
		this.aoz.sourcePos="0:142:8";
		this.vars.x--;
		// End IF
		this.aoz.sourcePos="0:143:4";
	};
	this.blocks[6]=function()
	{
		// If Direction = East
		this.aoz.sourcePos="0:144:4";
		if(!((this.root.vars.Direction)==(this.root.vars.East)))
			return{type:1,label:7};
		// Inc x
		this.aoz.sourcePos="0:145:8";
		this.vars.x++;
		// End IF
		this.aoz.sourcePos="0:146:4";
	};
	this.blocks[7]=function()
	{
		// If x > 32
		this.aoz.sourcePos="0:148:4";
		if(!((this.vars.x)>(32)))
			return{type:1,label:8};
		// x = 0
		this.aoz.sourcePos="0:149:8";
		this.vars.x=0;
		// End If
		this.aoz.sourcePos="0:150:4";
	};
	this.blocks[8]=function()
	{
		// If x < 0
		this.aoz.sourcePos="0:151:4";
		if(!((this.vars.x)<(0)))
			return{type:1,label:9};
		// x = 32
		this.aoz.sourcePos="0:152:8";
		this.vars.x=32;
		// End If
		this.aoz.sourcePos="0:153:4";
	};
	this.blocks[9]=function()
	{
		// If y > 18
		this.aoz.sourcePos="0:155:4";
		if(!((this.vars.y)>(18)))
			return{type:1,label:10};
		// y = 0
		this.aoz.sourcePos="0:156:8";
		this.vars.y=0;
		// End If
		this.aoz.sourcePos="0:157:4";
	};
	this.blocks[10]=function()
	{
		// If y < 0
		this.aoz.sourcePos="0:158:4";
		if(!((this.vars.y)<(0)))
			return{type:1,label:11};
		// y = 18
		this.aoz.sourcePos="0:159:8";
		this.vars.y=18;
		// End If
		this.aoz.sourcePos="0:160:4";
	};
	this.blocks[11]=function()
	{
		// If grid(x, y) = WALL
		this.aoz.sourcePos="0:162:4";
		if(!((this.root.vars.grid_array.getValue([this.vars.x,this.vars.y]))==(this.root.vars.WALL)))
			return{type:1,label:12};
		// hit = true
		this.aoz.sourcePos="0:163:8";
		this.root.vars.hit=Math.floor(this.aoz.manifest.compilation.emulation.toLowerCase()!='pc'?-1:1);
		// End If
		this.aoz.sourcePos="0:164:4";
	};
	this.blocks[12]=function()
	{
		// End Proc
		return{type:0};
	};
	this.blocks[13]=function()
	{
		return{type:0}
	};
};
function procdrawSnake(aoz,root,parent)
{
	this.aoz=aoz;
	this.root=root;
	this.parent=parent;
	this.procParam=0;
	this.procParam$="";
	var self=this;
	this.vars={};
	this.blocks=[];
	this.blocks[0]=function()
	{
		// For i = 0 To tail_index Step 1
		this.aoz.sourcePos="0:170:4";
		this.vars.i=0;
	};
	this.blocks[1]=function()
	{
		// Bob i+1, body_x(i) * 32, body_y(i) * 32, 1
		this.aoz.sourcePos="0:171:8";
		this.aoz.currentScreen.bob(this.vars.i+1,{x:this.root.vars.body_x_array.getValue([this.vars.i])*32,y:this.root.vars.body_y_array.getValue([this.vars.i])*32},1);
		// Bob Scale i+1,PSCALE,PSCALE
		this.aoz.sourcePos="0:172:8";
		this.aoz.currentScreen.bobScale(this.vars.i+1,{x:this.root.vars.PSCALE,y:this.root.vars.PSCALE});
		// Next
		this.aoz.sourcePos="0:173:4";
		this.vars.i+=1;
		if(this.vars.i<=this.root.vars.tail_index)
			return{type:1,label:1};
	};
	this.blocks[2]=function()
	{
		// End Proc
		return{type:0};
	};
	this.blocks[3]=function()
	{
		return{type:0}
	};
};
function proceatFood(aoz,root,parent)
{
	this.aoz=aoz;
	this.root=root;
	this.parent=parent;
	this.procParam=0;
	this.procParam$="";
	var self=this;
	this.vars={};
	this.blocks=[];
	this.blocks[0]=function()
	{
		// If grid(body_x(0), body_y(0) ) = MUSH
		this.aoz.sourcePos="0:179:4";
		if(!((this.root.vars.grid_array.getValue([this.root.vars.body_x_array.getValue([0]),this.root.vars.body_y_array.getValue([0])]))==(this.root.vars.MUSH)))
			return{type:1,label:4};
		// grid(body_x(0), body_y(0) ) = 0
		this.aoz.sourcePos="0:181:8";
		this.root.vars.grid_array.setValue([this.root.vars.body_x_array.getValue([0]),this.root.vars.body_y_array.getValue([0])],0);
		// addPart
		this.aoz.sourcePos="0:183:8";
		return {type:4,procedure:procaddPart,args:{}};
	};
	this.blocks[1]=function()
	{
		// generateFood
		this.aoz.sourcePos="0:185:8";
		return {type:4,procedure:procgenerateFood,args:{}};
	};
	this.blocks[2]=function()
	{
		// generateWall[-1, -1]
		this.aoz.sourcePos="0:187:8";
		return {type:4,procedure:procgenerateWall,args:{xpos:-1,ypos:-1}};
	};
	this.blocks[3]=function()
	{
		// End If
		this.aoz.sourcePos="0:189:4";
	};
	this.blocks[4]=function()
	{
		// End Proc
		return{type:0};
	};
	this.blocks[5]=function()
	{
		return{type:0}
	};
};
function procaddPart(aoz,root,parent)
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
			dir:0
		};
	};
	this.blocks=[];
	this.blocks[0]=function()
	{
		// partdir = grid(body_x(tail_index), body_y(tail_index))
		this.aoz.sourcePos="0:194:4";
		this.vars.partdir=Math.floor(this.root.vars.grid_array.getValue([this.root.vars.body_x_array.getValue([this.root.vars.tail_index]),this.root.vars.body_y_array.getValue([this.root.vars.tail_index])]));
		// x = body_x(tail_index)
		this.aoz.sourcePos="0:196:4";
		this.vars.x=Math.floor(this.root.vars.body_x_array.getValue([this.root.vars.tail_index]));
		// y = body_y(tail_index)
		this.aoz.sourcePos="0:197:4";
		this.vars.y=Math.floor(this.root.vars.body_y_array.getValue([this.root.vars.tail_index]));
		// If partdir = South
		this.aoz.sourcePos="0:199:4";
		if(!((this.vars.partdir)==(this.root.vars.South)))
			return{type:1,label:1};
		// Inc y
		this.aoz.sourcePos="0:200:8";
		this.vars.y++;
		// End IF
		this.aoz.sourcePos="0:201:4";
	};
	this.blocks[1]=function()
	{
		// If partdir = North
		this.aoz.sourcePos="0:202:4";
		if(!((this.vars.partdir)==(this.root.vars.North)))
			return{type:1,label:2};
		// Dec y
		this.aoz.sourcePos="0:203:8";
		this.vars.y--;
		// End IF
		this.aoz.sourcePos="0:204:4";
	};
	this.blocks[2]=function()
	{
		// If partdir = West
		this.aoz.sourcePos="0:205:4";
		if(!((this.vars.partdir)==(this.root.vars.West)))
			return{type:1,label:3};
		// Inc x
		this.aoz.sourcePos="0:206:8";
		this.vars.x++;
		// End IF
		this.aoz.sourcePos="0:207:4";
	};
	this.blocks[3]=function()
	{
		// If partdir = East
		this.aoz.sourcePos="0:208:4";
		if(!((this.vars.partdir)==(this.root.vars.East)))
			return{type:1,label:4};
		// Dec x
		this.aoz.sourcePos="0:209:8";
		this.vars.x--;
		// End IF
		this.aoz.sourcePos="0:210:4";
	};
	this.blocks[4]=function()
	{
		// Inc tail_index
		this.aoz.sourcePos="0:212:4";
		this.root.vars.tail_index++;
		// body_x(tail_index) = x
		this.aoz.sourcePos="0:213:4";
		this.root.vars.body_x_array.setValue([this.root.vars.tail_index],Math.floor(this.vars.x));
		// body_y(tail_index) = y
		this.aoz.sourcePos="0:214:4";
		this.root.vars.body_y_array.setValue([this.root.vars.tail_index],Math.floor(this.vars.y));
		// grid(body_x(tail_index), body_y(tail_index)) = dir
		this.aoz.sourcePos="0:216:4";
		this.root.vars.grid_array.setValue([this.root.vars.body_x_array.getValue([this.root.vars.tail_index]),this.root.vars.body_y_array.getValue([this.root.vars.tail_index])],Math.floor(this.vars.dir));
		// End Proc
		return{type:0};
	};
	this.blocks[5]=function()
	{
		return{type:0}
	};
};
function procCheck_X_Wrap(aoz,root,parent)
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
			xpos:0
		};
	};
	this.blocks=[];
	this.blocks[0]=function()
	{
		// If xpos > 32
		this.aoz.sourcePos="0:220:4";
		if(!((this.vars.xpos)>(32)))
			return{type:1,label:1};
		// xxpos = 0
		this.aoz.sourcePos="0:221:8";
		this.vars.xxpos=0;
		// End If
		this.aoz.sourcePos="0:222:4";
	};
	this.blocks[1]=function()
	{
		// If xpos < 0
		this.aoz.sourcePos="0:223:4";
		if(!((this.vars.xpos)<(0)))
			return{type:1,label:2};
		// xpos = 32
		this.aoz.sourcePos="0:224:8";
		this.vars.xpos=32;
		// End If
		this.aoz.sourcePos="0:225:4";
	};
	this.blocks[2]=function()
	{
		// End Proc[xpos]
		this.parent.procParam=this.vars.xpos;
		this.aoz.results[this.currentResult]=this.vars.xpos;
		return{type:0};
	};
	this.blocks[3]=function()
	{
		return{type:0}
	};
};
function procChecYWrap(aoz,root,parent)
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
			ypos:0
		};
	};
	this.blocks=[];
	this.blocks[0]=function()
	{
		// If ypos > 32
		this.aoz.sourcePos="0:229:4";
		if(!((this.vars.ypos)>(32)))
			return{type:1,label:1};
		// ypos = 0
		this.aoz.sourcePos="0:230:8";
		this.vars.ypos=0;
		// End If
		this.aoz.sourcePos="0:231:4";
	};
	this.blocks[1]=function()
	{
		// If ypos < 0
		this.aoz.sourcePos="0:232:4";
		if(!((this.vars.ypos)<(0)))
			return{type:1,label:2};
		// ypos = 32
		this.aoz.sourcePos="0:233:8";
		this.vars.ypos=32;
		// End If
		this.aoz.sourcePos="0:234:4";
	};
	this.blocks[2]=function()
	{
		// End Proc[ypos]
		this.parent.procParam=this.vars.ypos;
		this.aoz.results[this.currentResult]=this.vars.ypos;
		return{type:0};
	};
	this.blocks[3]=function()
	{
		return{type:0}
	};
};
function procmoveSnake(aoz,root,parent)
{
	this.aoz=aoz;
	this.root=root;
	this.parent=parent;
	this.procParam=0;
	this.procParam$="";
	var self=this;
	this.vars={};
	this.blocks=[];
	this.blocks[0]=function()
	{
		// x = body_x(0)
		this.aoz.sourcePos="0:238:4";
		this.vars.x=Math.floor(this.root.vars.body_x_array.getValue([0]));
		// y = body_y(0)
		this.aoz.sourcePos="0:239:4";
		this.vars.y=Math.floor(this.root.vars.body_y_array.getValue([0]));
		// If Direction = South
		this.aoz.sourcePos="0:241:4";
		if(!((this.root.vars.Direction)==(this.root.vars.South)))
			return{type:1,label:1};
		// Inc y
		this.aoz.sourcePos="0:242:8";
		this.vars.y++;
		// End IF
		this.aoz.sourcePos="0:243:4";
	};
	this.blocks[1]=function()
	{
		// If Direction = North
		this.aoz.sourcePos="0:244:4";
		if(!((this.root.vars.Direction)==(this.root.vars.North)))
			return{type:1,label:2};
		// Dec y
		this.aoz.sourcePos="0:245:8";
		this.vars.y--;
		// End IF
		this.aoz.sourcePos="0:246:4";
	};
	this.blocks[2]=function()
	{
		// If Direction = West
		this.aoz.sourcePos="0:247:4";
		if(!((this.root.vars.Direction)==(this.root.vars.West)))
			return{type:1,label:3};
		// Dec x
		this.aoz.sourcePos="0:248:8";
		this.vars.x--;
		// End IF
		this.aoz.sourcePos="0:249:4";
	};
	this.blocks[3]=function()
	{
		// If Direction = East
		this.aoz.sourcePos="0:250:4";
		if(!((this.root.vars.Direction)==(this.root.vars.East)))
			return{type:1,label:4};
		// Inc x
		this.aoz.sourcePos="0:251:8";
		this.vars.x++;
		// End IF
		this.aoz.sourcePos="0:252:4";
	};
	this.blocks[4]=function()
	{
		// If x > 32
		this.aoz.sourcePos="0:254:4";
		if(!((this.vars.x)>(32)))
			return{type:1,label:5};
		// x = 0
		this.aoz.sourcePos="0:255:8";
		this.vars.x=0;
		// End If
		this.aoz.sourcePos="0:256:4";
	};
	this.blocks[5]=function()
	{
		// If x < 0
		this.aoz.sourcePos="0:257:4";
		if(!((this.vars.x)<(0)))
			return{type:1,label:6};
		// x = 32
		this.aoz.sourcePos="0:258:8";
		this.vars.x=32;
		// End If
		this.aoz.sourcePos="0:259:4";
	};
	this.blocks[6]=function()
	{
		// If y > 18
		this.aoz.sourcePos="0:263:4";
		if(!((this.vars.y)>(18)))
			return{type:1,label:7};
		// y = 0
		this.aoz.sourcePos="0:264:8";
		this.vars.y=0;
		// End If
		this.aoz.sourcePos="0:265:4";
	};
	this.blocks[7]=function()
	{
		// If y < 0
		this.aoz.sourcePos="0:266:4";
		if(!((this.vars.y)<(0)))
			return{type:1,label:8};
		// y = 18
		this.aoz.sourcePos="0:267:8";
		this.vars.y=18;
		// End If
		this.aoz.sourcePos="0:268:4";
	};
	this.blocks[8]=function()
	{
		// tempbody_x(0) = x
		this.aoz.sourcePos="0:270:4";
		this.root.vars.tempbody_x_array.setValue([0],Math.floor(this.vars.x));
		// tempbody_y(0) = y
		this.aoz.sourcePos="0:271:4";
		this.root.vars.tempbody_y_array.setValue([0],Math.floor(this.vars.y));
		// For i = 0 To tail_index-1 Step 1
		this.aoz.sourcePos="0:273:4";
		this.vars.i=0;
	};
	this.blocks[9]=function()
	{
		// tempbody_x( i + 1) = body_x(i)
		this.aoz.sourcePos="0:274:8";
		this.root.vars.tempbody_x_array.setValue([this.vars.i+1],Math.floor(this.root.vars.body_x_array.getValue([this.vars.i])));
		// tempbody_y( i + 1) = body_y(i)
		this.aoz.sourcePos="0:275:8";
		this.root.vars.tempbody_y_array.setValue([this.vars.i+1],Math.floor(this.root.vars.body_y_array.getValue([this.vars.i])));
		// Next
		this.aoz.sourcePos="0:276:4";
		this.vars.i+=1;
		if(this.vars.i<=this.root.vars.tail_index-1)
			return{type:1,label:9};
	};
	this.blocks[10]=function()
	{
		// For i = 0 To tail_index Step 1
		this.aoz.sourcePos="0:277:4";
		this.vars.i=0;
	};
	this.blocks[11]=function()
	{
		// body_x(i) = tempbody_x(i)
		this.aoz.sourcePos="0:278:8";
		this.root.vars.body_x_array.setValue([this.vars.i],Math.floor(this.root.vars.tempbody_x_array.getValue([this.vars.i])));
		// body_y(i) = tempbody_y(i)
		this.aoz.sourcePos="0:279:8";
		this.root.vars.body_y_array.setValue([this.vars.i],Math.floor(this.root.vars.tempbody_y_array.getValue([this.vars.i])));
		// Next
		this.aoz.sourcePos="0:280:4";
		this.vars.i+=1;
		if(this.vars.i<=this.root.vars.tail_index)
			return{type:1,label:11};
	};
	this.blocks[12]=function()
	{
		// End Proc
		return{type:0};
	};
	this.blocks[13]=function()
	{
		return{type:0}
	};
};
function procgenerateFood(aoz,root,parent)
{
	this.aoz=aoz;
	this.root=root;
	this.parent=parent;
	this.procParam=0;
	this.procParam$="";
	var self=this;
	this.vars={};
	this.blocks=[];
	this.blocks[0]=function()
	{
		// mushx = RND(32)
		this.aoz.sourcePos="0:284:4";
		this.root.vars.mushx=Math.floor(this.aoz.rnd(32));
		// mushy = RND(18)
		this.aoz.sourcePos="0:285:4";
		this.root.vars.mushy=Math.floor(this.aoz.rnd(18));
		// grid(mushx, mushy) = MUSH
		this.aoz.sourcePos="0:286:4";
		this.root.vars.grid_array.setValue([this.root.vars.mushx,this.root.vars.mushy],Math.floor(this.root.vars.MUSH));
		// End Proc
		return{type:0};
	};
	this.blocks[1]=function()
	{
		return{type:0}
	};
};
function procgenerateWall(aoz,root,parent)
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
			xpos:0,
			ypos:0
		};
	};
	this.blocks=[];
	this.blocks[0]=function()
	{
		// wallx = xpos
		this.aoz.sourcePos="0:291:4";
		this.vars.wallx=Math.floor(this.vars.xpos);
		// wally = ypos
		this.aoz.sourcePos="0:292:4";
		this.vars.wally=Math.floor(this.vars.ypos);
		// If xpos = -1
		this.aoz.sourcePos="0:293:4";
		if(!((this.vars.xpos)==(-1)))
			return{type:1,label:1};
		// wallx = RND(32)
		this.aoz.sourcePos="0:294:8";
		this.vars.wallx=Math.floor(this.aoz.rnd(32));
		// End If
		this.aoz.sourcePos="0:295:4";
	};
	this.blocks[1]=function()
	{
		// IF ypos = -1
		this.aoz.sourcePos="0:296:4";
		if(!((this.vars.ypos)==(-1)))
			return{type:1,label:2};
		// wally = RND(18)
		this.aoz.sourcePos="0:297:8";
		this.vars.wally=Math.floor(this.aoz.rnd(18));
		// End If
		this.aoz.sourcePos="0:298:4";
	};
	this.blocks[2]=function()
	{
		// grid(wallx, wally) = WALL
		this.aoz.sourcePos="0:299:4";
		this.root.vars.grid_array.setValue([this.vars.wallx,this.vars.wally],Math.floor(this.root.vars.WALL));
		// Paste Bob wallx * 32, wally * 32, 22, PSCALE
		this.aoz.sourcePos="0:301:4";
		this.aoz.currentScreen.pasteImage('images',22,this.vars.wallx*32,this.vars.wally*32,this.root.vars.PSCALE,undefined,undefined*this.aoz.degreeRadian,);
		// End Proc
		return{type:0};
	};
	this.blocks[3]=function()
	{
		return{type:0}
	};
};
function proccheckKeys(aoz,root,parent)
{
	this.aoz=aoz;
	this.root=root;
	this.parent=parent;
	this.procParam=0;
	this.procParam$="";
	var self=this;
	this.vars={};
	this.blocks=[];
	this.blocks[0]=function()
	{
		// If Key State(37)
		this.aoz.sourcePos="0:305:4";
		if(!(this.aoz.keyState(37)))
			return{type:1,label:1};
		// Direction = West
		this.aoz.sourcePos="0:307:8";
		this.root.vars.Direction=Math.floor(this.root.vars.West);
		// End If
		this.aoz.sourcePos="0:308:4";
	};
	this.blocks[1]=function()
	{
		// If Key State(39)
		this.aoz.sourcePos="0:309:4";
		if(!(this.aoz.keyState(39)))
			return{type:1,label:2};
		// Direction = East
		this.aoz.sourcePos="0:311:8";
		this.root.vars.Direction=Math.floor(this.root.vars.East);
		// End If
		this.aoz.sourcePos="0:312:4";
	};
	this.blocks[2]=function()
	{
		// If Key State(38)
		this.aoz.sourcePos="0:313:4";
		if(!(this.aoz.keyState(38)))
			return{type:1,label:3};
		// Direction = North
		this.aoz.sourcePos="0:315:8";
		this.root.vars.Direction=Math.floor(this.root.vars.North);
		// End if
		this.aoz.sourcePos="0:316:4";
	};
	this.blocks[3]=function()
	{
		// If Key State(40)
		this.aoz.sourcePos="0:317:4";
		if(!(this.aoz.keyState(40)))
			return{type:1,label:4};
		// Direction = South
		this.aoz.sourcePos="0:319:8";
		this.root.vars.Direction=Math.floor(this.root.vars.South);
		// End If
		this.aoz.sourcePos="0:320:4";
	};
	this.blocks[4]=function()
	{
		// End Proc
		return{type:0};
	};
	this.blocks[5]=function()
	{
		return{type:0}
	};
};
function procCenter_Text(aoz,root,parent)
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
			y:0,
			t$:"",
			height:0
		};
	};
	this.blocks=[];
	this.blocks[0]=function()
	{
		// Shared font_name$
		this.aoz.sourcePos="0:325:4";
		// Set Font font_name$, height
		this.aoz.sourcePos="0:327:4";
		return{type:8,instruction:"setFont",args:[this.root.vars.font_name$,this.vars.height]};
	};
	this.blocks[1]=function()
	{
		// Text Screen Width / 2, y, t$, "#center"
		this.aoz.sourcePos="0:328:4";
		this.aoz.currentScreen.text({x:this.aoz.currentScreen.dimension.width/2,y:this.vars.y},this.vars.t$,"#center");
		// End Proc
		return{type:0};
	};
	this.blocks[2]=function()
	{
		return{type:0}
	};
};
