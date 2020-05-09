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
// The Math Instructions
// By Francois Lionet
// Version 0.99
// 24/01/2020
// (c) AOZ Studio 2019-2020
//
// Compiled with AOZ Transpiler Version 0.9.9 Test 5 - 08/05/2020 on the 09/05/2020-12:41:49
//

function v1_0_maths( aoz )
{
	this.manifest=JSON.parse(atob('eyJ2ZXJzaW9uIjoiOSIsInZlcnNpb25Nb2R1bGUiOiIxIiwiaW5mb3MiOnsiYXBwbGljYXRpb25OYW1lIjoiVGhlIE1hdGggSW5zdHJ1Y3Rpb25zIiwiYXV0aG9yIjoiQnkgRnJhbmNvaXMgTGlvbmV0IiwidmVyc2lvbiI6IlZlcnNpb24gMC45OSIsImRhdGUiOiIyNC8wMS8yMDIwIiwiY29weXJpZ2h0IjoiKGMpIEFPWiBTdHVkaW8gMjAxOS0yMDIwIiwic3RhcnQiOiJtYXRocy5hb3oiLCJvYmplY3QiOiJtYXRocyJ9LCJjb21waWxhdGlvbiI6eyJub1dhcm5pbmciOlsiaW5zdHJ1Y3Rpb25fbm90X2ltcGxlbWVudGVkIl0sImVycm9ycyI6eyJlbiI6W10sImZyIjpbXX0sImRpc3BsYXlFbmRBbGVydCI6ZmFsc2UsImRpc3BsYXlFcnJvckFsZXJ0Ijp0cnVlfSwiYm9vdFNjcmVlbiI6eyJhY3RpdmUiOmZhbHNlLCJ3YWl0U291bmRzIjpmYWxzZSwiY2xpY2tTb3VuZHMiOmZhbHNlfSwiZXJyb3JzIjp7fX0='));
	this.parent=this;
	this.root=this;
	this.aoz=aoz;
	this.contextName='v1_0_maths';
	this.aoz.use["maths"]=this;
	this.aoz.useSounds|=false;
	this.aoz.finalWait++;

	this.blocks=[];
	this.blocks[0]=function()
	{
		// Javascript
		this.aoz.moduleMaths = this;
		// End Javascript
		// End
		this.aoz.sourcePos="0:344:0";
		return{type:0}
	};
	this.blocks[1]=function()
	{
		return{type:0}
	};
	this.aoz.run(this,0,null);
};
