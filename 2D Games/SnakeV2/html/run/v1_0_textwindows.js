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
// The Text Window Instructions
// By Francois Lionet
// Version 0.99
// 11/11/2019
// (c) AOZ Studio 2019
//
// Compiled with AOZ Transpiler Version 0.9.9 Test 5 - 08/05/2020 on the 09/05/2020-12:41:50
//

function v1_0_textwindows( aoz )
{
	this.manifest=JSON.parse(atob('eyJ2ZXJzaW9uIjoiOSIsInZlcnNpb25Nb2R1bGUiOiIxIiwiaW5mb3MiOnsiYXBwbGljYXRpb25OYW1lIjoiVGhlIFRleHQgV2luZG93IEluc3RydWN0aW9ucyIsImF1dGhvciI6IkJ5IEZyYW5jb2lzIExpb25ldCIsInZlcnNpb24iOiJWZXJzaW9uIDAuOTkiLCJkYXRlIjoiMTEvMTEvMjAxOSIsImNvcHlyaWdodCI6IihjKSBBT1ogU3R1ZGlvIDIwMTkiLCJzdGFydCI6InRleHR3aW5kb3dzLmFveiIsIm9iamVjdCI6InRleHR3aW5kb3dzIn0sImNvbXBpbGF0aW9uIjp7Im5vV2FybmluZyI6WyJpbnN0cnVjdGlvbl9ub3RfaW1wbGVtZW50ZWQiXSwiZXJyb3JzIjp7ImVuIjpbXSwiZnIiOltdfSwiZGlzcGxheUVuZEFsZXJ0IjpmYWxzZSwiZGlzcGxheUVycm9yQWxlcnQiOnRydWV9LCJib290U2NyZWVuIjp7ImFjdGl2ZSI6ZmFsc2UsIndhaXRTb3VuZHMiOmZhbHNlLCJjbGlja1NvdW5kcyI6ZmFsc2V9LCJlcnJvcnMiOnt9fQ=='));
	this.parent=this;
	this.root=this;
	this.aoz=aoz;
	this.contextName='v1_0_textwindows';
	this.aoz.use["textwindows"]=this;
	this.aoz.useSounds|=false;
	this.aoz.finalWait++;

	this.blocks=[];
	this.blocks[0]=function()
	{
		// Javascript
		this.aoz.moduleTextWindows = this;
		this.readText = function( args )
		{
			var self = this;
			this.read_done = false;
			var address = args[ 1 ];
			var length = args[ 2 ];
			if ( typeof address == 'undefined' )
			{
				var descriptor = this.aoz.filesystem.getFile( args[ 0 ] );
				if ( descriptor.filename == '' )
					throw 'illegal_function_call';
				this.aoz.filesystem.loadFile( descriptor, { binary: false }, function( response, text, extra )
				{
					if ( response )
					{
						var reader = new TextReader( this.aoz, descriptor.filename, text, {}, function( response, data, extra )
						{
							self.read_done = true;
						} );
					}
					else
					{
						self.read_done = false;
						self.error = 'cannot_load_file';
					}
				} );
			}
			else
			{
				var info = self.aoz.getMemory( address );
				var text = info.block.extractString( info.start, typeof length != 'undefined' ? length : info.length );
				var reader = new TextReader( this.aoz, args[ 0 ], text, {}, function( response, data, extra )
				{
					self.read_done = true;
				} );
			}
		};
		this.read_wait = function()
		{
			if ( this.read_done )
			{
				if ( this.error )
					throw this.error;
				this.aoz.waiting = null;
			}
		};
		// End Javascript
		// End
		this.aoz.sourcePos="0:883:0";
		return{type:0}
	};
	this.blocks[1]=function()
	{
		return{type:0}
	};
	this.aoz.run(this,0,null);
};
