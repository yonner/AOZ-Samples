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
// The Bank Instructions
// By Francois Lionet
// Version 0.99
// 19/12/2019
// (c) AOZ Studio 2019
//
// Compiled with AOZ Transpiler Version 0.9.4 Test - 03/02/2020 on the 03/02/2020-21:06:44
//

function v1_0_banks( aoz )
{
	this.manifest=JSON.parse('{"version":"9","versionModule":"1","infos":{"applicationName":"The Bank Instructions","author":"By Francois Lionet","version":"Version 0.99","date":"19/12/2019","copyright":"(c) AOZ Studio 2019","start":"banks.aoz","object":"banks"},"compilation":{"noWarning":["instruction_not_implemented"]}}');
	this.parent=this;
	this.root=this;
	this.aoz=aoz;
	this.contextName='v1_0_banks';
	this.aoz.use["banks"]=this;

	this.blocks=[];
	this.blocks[0]=function()
	{
		// Javascript
		this.aoz.moduleBanks = this;
		// End Javascript
	};
	this.blocks[1]=function()
	{
		return{type:0}
	};
	this.aoz.run(this,0,null);
};
