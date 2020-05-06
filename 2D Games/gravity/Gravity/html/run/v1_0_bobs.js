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
// The Bob Instructions
// By Francois Lionet
// Version 0.99
// 11/11/2019
// (c) AOZ Studio 2019
//
// Compiled with AOZ Transpiler Version 0.9.4 Test - 03/02/2020 on the 03/02/2020-21:06:44
//

function v1_0_bobs( aoz )
{
	this.manifest=JSON.parse('{"version":"9","versionModule":"1","infos":{"applicationName":"The Bob Instructions","author":"By Francois Lionet","version":"Version 0.99","date":"11/11/2019","copyright":"(c) AOZ Studio 2019","start":"bobs.aoz","object":"bobs"},"compilation":{"noWarning":["instruction_not_implemented"]}}');
	this.parent=this;
	this.root=this;
	this.aoz=aoz;
	this.contextName='v1_0_bobs';
	this.aoz.use["bobs"]=this;

	this.blocks=[];
	this.blocks[0]=function()
	{
		// Javascript
		this.aoz.moduleBobs = this;
		// End Javascript
	};
	this.blocks[1]=function()
	{
		return{type:0}
	};
	this.aoz.run(this,0,null);
};
