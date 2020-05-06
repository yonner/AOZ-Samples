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
// Compiled with AOZ Transpiler Version 0.9.4 Test - 03/02/2020 on the 03/02/2020-21:06:43
//

function v1_0_maths( aoz )
{
	this.manifest=JSON.parse('{"version":"9","versionModule":"1","infos":{"applicationName":"The Math Instructions","author":"By Francois Lionet","version":"Version 0.99","date":"24/01/2020","copyright":"(c) AOZ Studio 2019-2020","start":"maths.aoz","object":"maths"},"compilation":{"noWarning":["instruction_not_implemented"]}}');
	this.parent=this;
	this.root=this;
	this.aoz=aoz;
	this.contextName='v1_0_maths';
	this.aoz.use["maths"]=this;

	this.blocks=[];
	this.blocks[0]=function()
	{
		// Javascript
		this.aoz.moduleMaths = this;
		// End Javascript
	};
	this.blocks[1]=function()
	{
		return{type:0}
	};
	this.aoz.run(this,0,null);
};
