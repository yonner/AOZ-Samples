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
// The Sound Instructions
// By Francois Lionet
// Version 0.99
// 24/10/2019
// (c) AOZ Studio 2019
//
// Compiled with AOZ Transpiler Version 0.9.4 Test - 03/02/2020 on the 03/02/2020-21:06:42
//

function v1_0_sounds( aoz )
{
	this.manifest=JSON.parse('{"version":"9","versionModule":"1","infos":{"applicationName":"The Sound Instructions","author":"By Francois Lionet","version":"Version 0.99","date":"24/10/2019","copyright":"(c) AOZ Studio 2019","start":"sounds.aoz","object":"sounds"},"compilation":{"noWarning":["instruction_not_implemented"]}}');
	this.parent=this;
	this.root=this;
	this.aoz=aoz;
	this.contextName='v1_0_sounds';
	this.aoz.use["sounds"]=this;

	this.blocks=[];
	this.blocks[0]=function()
	{
		// #include_javascript:"howler.js-master/dist/howler.spatial.min.js"
		// Javascript
		this.aoz.moduleSounds = this;
		this.banks = this.aoz.banks;
		this.soundBank = this.banks.soundBank;
		this.utilities = this.aoz.utilities;
		this.voices = [];
		this.maxVoices = 32;
		this.numberOfLoops = 1;
		this.aoz.useSounds = true;
		if ( this.aoz.manifest.sounds.mode == 'amiga' )
		{
			this.numberOfVoices = 4;
			this.voices[ 0 ] = new Voice( this, 0, 'Left-0', -1, 0, 0 );
			this.voices[ 1 ] = new Voice( this, 1, 'Right-1', 1, 0, 0 );
			this.voices[ 2 ] = new Voice( this, 2, 'Left-2', -1, 0, 0 );
			this.voices[ 3 ] = new Voice( this, 3, 'Right-2', 1, 0, 0 );
			this.amigaToPCVolume = 1 / 64;
		}
		else
		{
			this.numberOfVoices = 32;
			for ( var n = 0; n < this.numberOfVoices; n++ )
			{
				this.voices[ n ] = new Voice( this, n, 'Voice #' + n, 0, 0, 0 );
			}
			this.amigaToPCVolume = 1;
		}
		this.callVoices = function( functionName, voices, args, contextName )
		{
			voices = typeof voices == 'undefined' ? 0xFFFFFFFF : voices;
			for ( var v = 0; v < this.voices.length; v++ )
			{
				var mask = ( 1 << v );
				if ( ( voices & mask ) != 0 )
				{
					this.voices[ v ][ functionName ]( args, contextName );
				}
			}
		};
		function Voice( parent, index, name, x, y, z )
		{
			this.parent = parent;
			this.aoz = parent.aoz;
			this.banks = this.aoz.banks;
			this.soundBank = parent.soundBank;
			this.index = index;
			this.name = name;
			this.volume = 1;
			this.numberOfLoops = 1;
			this.muted = false;
			this.loopCount = 1;
			this.x = typeof x != 'undefined' ? x : 0;
			this.y = typeof y != 'undefined' ? y : 0;
			this.z = typeof z != 'undefined' ? z : 0;
			this.playing = {};
		};
		Voice.prototype.playSound = function( args, contextName )
		{
			var self = this;
			var name = args[ 0 ];
			var rate = args[ 1 ];
			var startTime = args[ 2 ];
			var cueStart = args[ 3 ];
			self.rate = typeof rate == 'undefined' ? 1 : rate;
			cueStart = typeof cueStart == 'undefined' ? 0 : cueStart;
			startTime = typeof startTime == 'undefined' ? 0 : startTime;
			if ( self.playing[ name ] )
			{
				var sound = self.playing[ name ];
				sound.amLoopCount = self.numberOfLoops;
				sound.volume( self.volume );
				sound.rate( self.rate );
				sound.stereo( self.x );
				sound.seek( cueStart );
			}
			else
			{
				this.banks.getSound( name, function( response, sound )
				{
					if ( response )
					{
						sound.amLoopCount = self.numberOfLoops;
						sound.volume( self.volume );
						sound.rate( self.rate );
						sound.stereo( self.x );
						sound.seek( cueStart );
						sound.play();
						self.playing[ name ] = sound;
						sound.on( "end", function( param )
						{
							if ( sound.amLoopCount > 0 )
							{
								sound.amLoopCount--;
								if ( sound.amLoopCount == 0 )
								{
									sound.stop();
									self.playing = self.aoz.utilities.cleanObject( self.playing, sound );
								}
								else
									sound.play();
							}
						} );
						sound.on( "fade", function( param )
						{
							if ( sound.amToDestroy )
							{
								sound.stop();
								self.playing = self.utilities.cleanObject( self.playing, sound );
								sound.amToDestroy = false;
							}
						} );
					}
				}, {}, contextName );
			}
		};
		Voice.prototype.stopSound = function( args )
		{
			for ( var name in this.playing )
			{
				var sound;
				if ( ( sound = this.playing[ name ] ) )
				{
					sound.stop();
				}
			}
			this.playing = {};
		};
		Voice.prototype.setPan = function( args )
		{
			var position = args[ 0 ];
			this.x = position;
			for ( var p in this.playing )
			{
				this.playing[ p ].stereo( this.x );
			}
		};
		Voice.prototype.setVolume = function( args )
		{
			this.volume = args[ 0 ];
			for ( var p in this.playing )
			{
				this.playing[ p ].volume( this.volume );
			}
		};
		Voice.prototype.setPitch = function( args )
		{
			this.pitch = args[ 0 ];
			for ( var p in this.playing )
			{
				this.playing[ p ].rate( pitch );
			}
		};
		// End Javascript
	};
	this.blocks[1]=function()
	{
		return{type:0}
	};
	this.aoz.run(this,0,null);
};
