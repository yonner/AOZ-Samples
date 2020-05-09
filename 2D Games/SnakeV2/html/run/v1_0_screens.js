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
// The Screen Instructions
// By Francois Lionet
// Version 0.99
// 11/11/2019
// (c) AOZ Studio 2019
//
// Compiled with AOZ Transpiler Version 0.9.9 Test 5 - 08/05/2020 on the 09/05/2020-12:41:49
//

function v1_0_screens( aoz )
{
	this.manifest=JSON.parse(atob('eyJ2ZXJzaW9uIjoiOSIsInZlcnNpb25Nb2R1bGUiOiIxIiwiaW5mb3MiOnsiYXBwbGljYXRpb25OYW1lIjoiVGhlIFNjcmVlbiBJbnN0cnVjdGlvbnMiLCJhdXRob3IiOiJCeSBGcmFuY29pcyBMaW9uZXQiLCJ2ZXJzaW9uIjoiVmVyc2lvbiAwLjk5IiwiZGF0ZSI6IjExLzExLzIwMTkiLCJjb3B5cmlnaHQiOiIoYykgQU9aIFN0dWRpbyAyMDE5Iiwic3RhcnQiOiJzY3JlZW5zLmFveiIsIm9iamVjdCI6InNjcmVlbnMifSwiY29tcGlsYXRpb24iOnsibm9XYXJuaW5nIjpbImluc3RydWN0aW9uX25vdF9pbXBsZW1lbnRlZCJdLCJlcnJvcnMiOnsiZW4iOltdLCJmciI6W119LCJkaXNwbGF5RW5kQWxlcnQiOmZhbHNlLCJkaXNwbGF5RXJyb3JBbGVydCI6dHJ1ZX0sImJvb3RTY3JlZW4iOnsiYWN0aXZlIjpmYWxzZSwid2FpdFNvdW5kcyI6ZmFsc2UsImNsaWNrU291bmRzIjpmYWxzZX0sImVycm9ycyI6e319'));
	this.parent=this;
	this.root=this;
	this.aoz=aoz;
	this.contextName='v1_0_screens';
	this.aoz.use["screens"]=this;
	this.aoz.useSounds|=false;
	this.aoz.finalWait++;

	this.blocks=[];
	this.blocks[0]=function()
	{
		// Javascript
		this.aoz.moduleScreens = this;
		// End Javascript
		// End
		this.aoz.sourcePos="0:1045:0";
		return{type:0}
	};
	this.blocks[1]=function()
	{
		return{type:0}
	};
	this.aoz.run(this,0,null);
};
