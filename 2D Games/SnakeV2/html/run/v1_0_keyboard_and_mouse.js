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
// The Keyboard and Mouse Instructions
// By Francois Lionet
// Version 0.99
// 12/04/2020
// (c) AOZ Studio 2019-2020
//
// Compiled with AOZ Transpiler Version 0.9.9 Test 5 - 08/05/2020 on the 09/05/2020-12:41:48
//

function v1_0_keyboard_and_mouse( aoz )
{
	this.manifest=JSON.parse(atob('eyJ2ZXJzaW9uIjoiOSIsInZlcnNpb25Nb2R1bGUiOiIxIiwiaW5mb3MiOnsiYXBwbGljYXRpb25OYW1lIjoiVGhlIEtleWJvYXJkIGFuZCBNb3VzZSBJbnN0cnVjdGlvbnMiLCJhdXRob3IiOiJCeSBGcmFuY29pcyBMaW9uZXQiLCJ2ZXJzaW9uIjoiVmVyc2lvbiAwLjk5IiwiZGF0ZSI6IjEyLzA0LzIwMjAiLCJjb3B5cmlnaHQiOiIoYykgQU9aIFN0dWRpbyAyMDE5LTIwMjAiLCJzdGFydCI6ImtleWJvYXJkX2FuZF9tb3VzZS5hb3oiLCJvYmplY3QiOiJrZXlib2FyZF9hbmRfbW91c2UifSwiY29tcGlsYXRpb24iOnsibm9XYXJuaW5nIjpbImluc3RydWN0aW9uX25vdF9pbXBsZW1lbnRlZCJdLCJlcnJvcnMiOnsiZW4iOltdLCJmciI6W119LCJkaXNwbGF5RW5kQWxlcnQiOmZhbHNlLCJkaXNwbGF5RXJyb3JBbGVydCI6dHJ1ZX0sImJvb3RTY3JlZW4iOnsiYWN0aXZlIjpmYWxzZSwid2FpdFNvdW5kcyI6ZmFsc2UsImNsaWNrU291bmRzIjpmYWxzZX0sImVycm9ycyI6e319'));
	this.parent=this;
	this.root=this;
	this.aoz=aoz;
	this.contextName='v1_0_keyboard_and_mouse';
	this.aoz.use["keyboard_and_mouse"]=this;
	this.aoz.useSounds|=false;
	this.aoz.finalWait++;

	this.blocks=[];
	this.blocks[0]=function()
	{
		// Javascript
		this.aoz.moduleKeyboadrAndMouse = this;
		// End Javascript
		// End
		this.aoz.sourcePos="0:325:0";
		return{type:0}
	};
	this.blocks[1]=function()
	{
		return{type:0}
	};
	this.aoz.run(this,0,null);
};
