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
// The File System Instructions
// By Francois Lionet
// Version 0.99
// 13/12/2019
// (c) AOZ Studio 2019
//
// Compiled with AOZ Transpiler Version 0.9.9 Test 5 - 08/05/2020 on the 09/05/2020-12:41:48
//

function v1_0_filesystem( aoz )
{
	this.manifest=JSON.parse(atob('eyJ2ZXJzaW9uIjoiOSIsInZlcnNpb25Nb2R1bGUiOiIxIiwiaW5mb3MiOnsiYXBwbGljYXRpb25OYW1lIjoiVGhlIEZpbGUgU3lzdGVtIEluc3RydWN0aW9ucyIsImF1dGhvciI6IkJ5IEZyYW5jb2lzIExpb25ldCIsInZlcnNpb24iOiJWZXJzaW9uIDAuOTkiLCJkYXRlIjoiMTMvMTIvMjAxOSIsImNvcHlyaWdodCI6IihjKSBBT1ogU3R1ZGlvIDIwMTkiLCJzdGFydCI6ImZpbGVzeXN0ZW0uYW96Iiwib2JqZWN0IjoiZmlsZXN5c3RlbSJ9LCJjb21waWxhdGlvbiI6eyJub1dhcm5pbmciOlsiaW5zdHJ1Y3Rpb25fbm90X2ltcGxlbWVudGVkIl0sImVycm9ycyI6eyJlbiI6W10sImZyIjpbXX0sImRpc3BsYXlFbmRBbGVydCI6ZmFsc2UsImRpc3BsYXlFcnJvckFsZXJ0Ijp0cnVlfSwiYm9vdFNjcmVlbiI6eyJhY3RpdmUiOmZhbHNlLCJ3YWl0U291bmRzIjpmYWxzZSwiY2xpY2tTb3VuZHMiOmZhbHNlfSwiZXJyb3JzIjp7fX0='));
	this.parent=this;
	this.root=this;
	this.aoz=aoz;
	this.contextName='v1_0_filesystem';
	this.aoz.use["filesystem"]=this;
	this.aoz.useSounds|=false;
	this.aoz.finalWait++;

	this.blocks=[];
	this.blocks[0]=function()
	{
		// #include_javascript:"ilbm.js-master/jdataview.js"
		// Javascript
		this.aoz.moduleFilesystem = this;
		this.loadImage = function( args )
		{
			this.load_done = false;
			var number = args[ 1 ];
			var tags = args[ 2 ];
			var isIff = args[ 3 ];
			var descriptor = this.aoz.filesystem.getFile( args[ 0 ] );
			if ( descriptor.filename == '' )
				throw 'file_not_found';
			var self = this;
			if ( !isIff )
			{
				var extension = this.aoz.utilities.getFilenameExtension( args[ 0 ] );
				if ( extension.toLowerCase() == 'iff' )
					isIff = true;
			}
			if ( descriptor.isFileSystem )
			{
				this.aoz.filesystem.loadFile( descriptor, { binary: true }, function( response, arrayBuffer, extra )
				{
					if ( response )
					{
						if ( isIff )
						{
							var canvas = loadIffBuffer( canvas, arrayBuffer, false ) ;
							var screen = self.aoz.getScreenOrCreateOne( number, canvas.width, canvas.height, 32, 0 );
							screen.pasteCanvas( canvas, { x: 0, y: 0 } );
							self.load_done = true;
						}
						else
						{
							var blob = new Blob( [ arrayBuffer ], { type: 'image/png' } );
							var urlCreator = window.URL || window.webkitURL;
							var imageUrl = urlCreator.createObjectURL( blob );
							var image = new Image();
							image.onload = function()
							{
								var screen = self.aoz.getScreenOrCreateOne( number, this.width, this.height, 32, 0 );
								var horizontal = 'center';
								var vertical = 'middle';
								var resize = 'fit';
								if ( tags )
								{
									var temp;
									if ( ( temp = self.aoz.utilities.getTag( tags, [ 'left', 'center', 'right' ] ) ) != '' )
										horizontal = temp;
									if ( ( temp = self.aoz.utilities.getTag( tags, [ 'top', 'middle', 'bottom' ] ) ) != '' )
										vertical = temp;
									if ( ( temp = self.aoz.utilities.getTag( tags, [ 'fit', 'paste' ] ) ) != '' )
										resize = temp;
								}
								var ratio = 1;
								if ( resize == 'fit' )
								{
									var hRatio = screen.dimension.width / this.width;
									var vRatio = screen.dimension.height / this.height;
									ratio = Math.min ( hRatio, vRatio );
								}
								var x, y, width, height;
								switch ( horizontal )
								{
									case 'center':
										x = screen.dimension.width / 2 - this.width / 2 * ratio;
										break;
									case 'right':
										x = screen.dimension.width - this.width * ratio;
										break;
									default:
									case 'left':
										x = 0;
										break;
								}
								switch ( vertical )
								{
									case 'middle':
										y = screen.dimension.height / 2 - this.height / 2 * ratio;
										break;
									case 'bottom':
										y = screen.dimension.height - this.height * ratio;
										break;
									default:
									case 'top':
										y = 0;
										break;
								}
								screen.pasteCanvas( this, { x: x, y: y, width: this.width * ratio, height: this.height * ratio } );
								self.load_done = true;
							};
							image.src = imageUrl;
						}
					}
					else
					{
						self.load_done = false;
						throw 'cannot_load_file';
					}
				}, number );
			}
			else
			{
				if ( !isIff )
				{
					var canvas = document.createElement( 'canvas' );
					canvas.onload( function()
					{
						var screen = self.aoz.getScreenOrCreateOne( number, this.width, this.height, 32, 0 );
						screen.pasteCanvas( this, { x: 0, y: 0 } );
						self.load_done = true;
					} );
					canvas.src = descriptor.URL;
				}
				else
				{
				}
			}
		};
		this.load_wait = function()
		{
			if ( this.load_done )
			{
				this.aoz.waiting = null;
			}
		};
		this.loadABK = function( args )
		{
			var path = args[ 0 ];
			var bankNumber = args[ 1 ];
			var tags = args[ 2 ];
			var self = this;
			this.loadIt( path, function( response, block, extra )
			{
				if ( response )
				{
					this.load_done = false;
					var convertedBank = self.convert_bank( 'bank', block , { convert: true });
					if ( convertedBank )
					{
						bankNumber = typeof bankNumber != 'undefined' ? bankNumber : convertedBank.number;
						self.aoz.banks.erase( bankNumber, true );
						switch ( convertedBank.type )
						{
							case 'images':
								bank = self.aoz.banks.reserve( bankNumber, convertedBank.type, 0, self.aoz.currentContextName );
								for ( var i = 0; i < convertedBank.data.images.length; i++ )
									self.aoz.banks.insertImage( convertedBank.type, i + 1, undefined, undefined, tags, bankNumber, convertedBank.data.images[ i ], convertedBank.data.hotSpots[ i ] );
								bank.setPalette( convertedBank.data.palette );
								self.aoz.banks.updateBank( bank, bank.index, self.aoz.currentContextName );
								this.load_done = true;
								break;
							case 'samples':
								bank = self.aoz.banks.reserve( bankNumber, 'samples', convertedBank.data.length, self.aoz.currentContextName );
								var count = convertedBank.data.length;
								for ( var i = 0; i < convertedBank.data.length; i++ )
								{
									bank.addSound( i, 'sample_' + i, convertedBank.data[ i ].buffer, tags, function( response, data, extra )
									{
										count--;
										if ( count == 0 )
										{
											self.load_done = true;
										}
									} );
								}
								self.aoz.banks.updateBank( bank, bank.index, self.aoz.currentContextName );
								break;
							case 'tracker':
							case 'data':
							case 'work':
							default:
								bank = self.aoz.banks.reserve( bankNumber, convertedBank.type, convertedBank.data.length, self.aoz.currentContextName );
								bank.getElement( 1 ).copyFrom( 0, convertedBank.data, 0, convertedBank.data.length );
								self.aoz.banks.updateBank( bank, bank.index, self.aoz.currentContextName );
								this.load_done = true;
								break;
						}
					}
					else
					{
						this.load_done = true;
					}
				}
			} );
		}
		this.loadIt = function( path, callback, extra )
		{
			var descriptor = this.aoz.filesystem.getFile( path );
			if ( descriptor.filename == '' )
				throw 'illegal_function_call';
			var self = this;
			this.load_done = false;
			this.aoz.filesystem.loadFile( descriptor, { binary: true }, function( response, arrayBuffer, extra )
			{
				var block;
				if ( response )
					block = new MemoryBlock( self.aoz, arrayBuffer, 'big' );
				else
					throw 'cannot_load_file';
				callback( response, block, extra );
				self.load_done = true;
			}, extra );
		};
		this.bLoad = function( args )
		{
			var path = args[ 0 ];
			var start = args[ 1 ];
			var self = this;
			this.load_done = false;
			this.aoz.filesystem.loadBinary( path, start, function( response, data, extra )
			{
				self.load_done = true;
				if ( !response )
					throw data;
			} );
		};
		this.bSave = function( args )
		{
			var startBlock = this.aoz.getMemoryBlockFromAddress( args[ 1 ] );
			var endBlock = this.aoz.getMemoryBlockFromAddress( args[ 2 ] );
			if ( startBlock != endBlock )
				throw 'illegal_function_call';
			var self = this;
			this.load_done = false;
			var options = { start: args[ 1 ], end: args[ 2 ] };
			this.aoz.filesystem.saveBinary( args[ 0 ], options, function( response, data, extra )
			{
				self.load_done = true;
				if ( !response )
					throw data;
			} );
		};
		this.openOut = function( args )
		{
			var self = this;
			this.load_done = false;
			this.aoz.filesystem.openOut( args[ 0 ], args[ 1 ], function( response, data, extra )
			{
				self.load_done = true;
				if ( !response )
					throw data;
			} );
		};
		this.openIn = function( args )
		{
			var self = this;
			this.load_done = false;
			this.aoz.filesystem.openIn( args[ 0 ], args[ 1 ], function( response, data, extra )
			{
				self.load_done = true;
				if ( !response )
					throw data;
			} );
		};
		this.append = function( args )
		{
			var self = this;
			this.load_done = false;
			this.aoz.filesystem.append( args[ 0 ], args[ 1 ], function( response, data, extra )
			{
				self.load_done = true;
				if ( !response )
					throw data;
			} );
		};
		this.openRandom = function( args )
		{
			var self = this;
			this.load_done = false;
			this.aoz.filesystem.openRandom( args[ 0 ], args[ 1 ], function( response, data, extra )
			{
				self.load_done = true;
				if ( !response )
					throw data;
			} );
		};
		this.close = function( args )
		{
			var self = this;
			this.load_done = false;
			this.aoz.filesystem.close( args[ 0 ], function( response, data, extra )
			{
				self.load_done = true;
				if ( !response )
					throw data;
			} );
		};
		var ID_AMOS = 0x414D4F53;
		var ID_AmBs = 0x416D4273;
		var ID_AmBk = 0x416D426B;
		var ID_AmSp = 0x416D5370;
		var ID_AmIc = 0x416D4963;
		var IFF_ILBM_HEADER_LEN = 0xb0;
		var iff_ilbm_header =
		[
			'F', 'O', 'R', 'M',    	/* 00 FORM                        */
			0,   0,   0,   0,     	/* 04   form length               */
			'I', 'L', 'B', 'M',    	/* 08   ILBM                      */
			'B', 'M', 'H', 'D',    	/* 0c   BMHD                      */
			0,   0,   0,   20,    	/* 10     bmhd chunk length (20)  */
			0,   0,               	/* 14     width                   */
			0,   0,               	/* 16     height                  */
			0,   0,               	/* 18     x offset (0)            */
			0,   0,              	/* 1a     y offset (0)            */
			0,                    	/* 1c     number of bitplanes     */
			0,                    	/* 1d     masking (0)             */
			0,                    	/* 1e     compression (0)         */
			0,                    	/* 1e     reserved1 (0)           */
			0,   0,               	/* 20     transparent colour (0)  */
			1,                    	/* 22     x aspect (1)            */
			1,                    	/* 23     x aspect (1)            */
			0,   0,               	/* 24     page width              */
			0,   0,               	/* 26     page height             */
			'C', 'A', 'M', 'G',    	/* 28   CAMG                      */
			0,   0,   0,   4,     	/* 2c     camg chunk length (4)   */
			0,   0,   0,   0,     	/* 30     viewmode                */
			'G', 'R', 'A', 'B',    	/* 34   GRAB                      */
			0,   0,   0,   4,     	/* 38     grab chunk length (4)   */
			0,   0,               	/* 3C     x hotspot               */
			0,   0,               	/* 3E     y hotspot               */
			'C', 'M', 'A', 'P',    	/* 40   CMAP                      */
			0,   0,   0,   96    	/* 44     cmap chunk length (96)  */
		];
		var IFF_8SVX_HEADER_LEN = 0x30;
		var iff_8svx_header =
		[
			'F', 'O', 'R', 'M',    	/* 00 FORM                        */
			0,   0,   0,   0,     	/* 04   form length               */
			'8', 'S', 'V', 'X',    	/* 08   8SVX                      */
			'V', 'H', 'D', 'R',    	/* 0c   VHDR                      */
			0,   0,   0,   20,    	/* 10     vhdr chunk length (20)  */
			0,   0,   0,   0,     	/* 14     one-shot length         */
			0,   0,   0,   0,     	/* 18     repeat length (0)       */
			0,   0,   0,   0,     	/* 1c     average rate (0)        */
			0,   0,               	/* 20     frequency in hz         */
			1,                    	/* 22     number of octaves (1)   */
			0,                   	/* 23     compression mode (0)    */
			0,   1,   0,   0,     	/* 24     volume (0x10000)        */
			'B', 'O', 'D', 'Y',    	/* 28   BODY                      */
			0,   0,   0,   0      	/* 2c     body length             */
		];
		this.convert_amos = function( name, block, options )
		{
			options = typeof options == 'undefined' ? { convert: true } : options;
			var result;
			if ( block.length < 4 )
			{
				throw 'unknown_bank_format';
			}
			else
			{
				switch ( block.leek( 0 ) )
				{
				case ID_AMOS:
					result = this.convert_source( name, block, options );
					break;
				case ID_AmBs:
					result = this.convert_banks( name, block, options );
					break;
				case ID_AmBk:
				case ID_AmSp:
				case ID_AmIc:
					result = this.convert_bank( name, block, options );
					break;
				default:
					throw 'unknown_bank_format';
				}
			}
			return result;
		};
		this.convert_source = function( name, block, options )
		{
			var result;
			options = typeof options == 'undefined' ? { convert: true } : options;
			if ( block.length < 30 )
			{
				throw 'unknown_bank_format';
			}
			else 1
			{
				var src_len = block.leek( 16 ) + 20;
				var header = block.peek$( 0, 16 );
				if ( src_len < block.length )
				{
					var block_bank = new MemoryBlock( this.aoz, 2, 'big' );
					block_bank.setFromMemoryBlock( block, src_len );
					result = this.convert_banks( name, block_bank, options );
				}
			}
			return result;
		}
		function convert_banks( name, block, options )
		{
			options = typeof options == 'undefined' ? { convert: true } : options;
			if ( block.length < 6)
			{
				throw 'unknown_bank_format';
			}
			else
			{
				var count = 0;
				var result = {};
				var num_banks = block.deek( 4 );
				var bank_pos = 6;
				while ( num_banks-- )
				{
					var bank_len = this.get_bank_length( block, bank_pos );
					var bank_num = this.get_bank_number( block, bank_pos );
					var bank_type = this.get_bank_type( block, bank_pos );
					var block_bank = new MemoryBlock( this.aoz, 2, 'big' );
					block_bank.setFromMemoryBlock( block, bank_pos, bank_pos + bank_len );
					if ( bank_num > 0)
					{
						var outname = "bank" + bank_num + ".abk";
						var bankResult = this.convert_bank( outname, block_bank, options );
						if ( bankResult )
							result[ count++ ] = bankResult;
					}
					bank_pos += bank_len;
				}
			}
			return result;
		}
		this.convert_bank = function( name, block, options )
		{
			options = typeof options == 'undefined' ? { convert: true } : options;
			var bank_length = this.get_bank_length( block );
			if ( !bank_length )
				return;
			var bank_num = this.get_bank_number( block );
			var id = block.leek( 0 );
			var result, type;
			switch ( id )
			{
				case ID_AmSp:
					type = 'images';
					result = this.convert_sprites( name, block, options );
					break;
				case ID_AmIc:
					type = 'icons';
					result = this.convert_sprites( name, block, options );
					break;
				case ID_AmBk:
					{
						var id2 = block.peek$( 12, 8 );
						if ( id2 == "img" )
						{
							type = 'pacpic';
							result = this.convert_pacpic( name, block, options );
						}
						else if ( id2 == "Samples " )
						{
							type = 'samples';
							result = this.convert_samples( name, block, options );
						}
						else if ( id2 == "Tracker " )
						{
							type = 'tracker';
							result = this.convert_tracker( name, block, options );
						}
						else
						{
							type = 'data';
							result = this.convert_data( name, block, options );
						}
					}
					break;
				default:
					throw 'unknown_bank_format';
			}
			return { type: type, number: bank_num, data: result };
		};
		this.convert_sprites = function( name, block, options )
		{
			options = typeof options == 'undefined' ? { convert: true } : options;
			var sprites = { images: [], palette: [], hotSpots: [] };
			var num_sprites = block.deek( 4 );
			var sp = 6;
			var pal = block.length - 64;
			for ( var i = 0; i < num_sprites; i++ )
			{
				var w, h, d, sp_len, ilbm_len, line, plane;
				var body;
				w = block.deek( sp + 0 ) * 2;
				h = block.deek( sp + 2 );
				d = block.deek( sp + 4 );
				sp_len = w * h * d;
				ilbm_len = IFF_ILBM_HEADER_LEN + sp_len;
				var ilbmBlock = new MemoryBlock( this.aoz, ilbm_len, 'big' );
				ilbmBlock.copyArray( 0, iff_ilbm_header, 'byte' );
				ilbmBlock.loke( 0x04, ilbm_len - 8 );
				ilbmBlock.doke( 0x14, w * 8 );  				/* width */
				ilbmBlock.doke( 0x16, h );      				/* height */
				ilbmBlock.poke( 0x1c, d & 0xFF );          		/* number of bitplanes */
				ilbmBlock.doke( 0x24, w * 8 );  				/* page width */
				ilbmBlock.doke( 0x26, h );      				/* page height */
				ilbmBlock.copyFrom( 0x3C, block, sp + 6, 4 ); 	/* x/y hotspot */
				ilbmBlock.poke$( 0xA8, "BODY" );
				ilbmBlock.loke( 0xAC, sp_len ); 				/* body length */
				sprites.hotSpots[ i ] = { x: block.deek( sp + 6, true ), y: block.deek( sp + 8, true ) };
				var color0;
				for ( var j = 0; j < 32; j++ )
				{
					var c = block.deek( pal + j * 2 );
					var r = ( (c >> 8) & 0xF ) * 0x11;
					var g = ( (c >> 4) & 0xF ) * 0x11;
					var b = ( (c     ) & 0xF ) * 0x11;
					ilbmBlock.poke( 0x48 + ( j * 3 ) + 0, r );
					ilbmBlock.poke( 0x48 + ( j * 3 ) + 1, g );
					ilbmBlock.poke( 0x48 + ( j * 3 ) + 2, b );
					sprites.palette[ j ] = this.aoz.utilities.getRGBAString( r, g, b, 255 );
					if ( j == 0 )
						color0 = { r: r, g: g, b: b };
				}
				var body = IFF_ILBM_HEADER_LEN;
				for ( var line = 0; line < h; line++ )
				{
					for ( var plane = 0; plane < d; plane++ )
					{
						ilbmBlock.copyFrom( body, block, sp + 10 + line * w + plane * w * h, w );
						body += w;
					}
				}
				if ( options.convert )
				{
					var canvas = loadIffBuffer( undefined, ilbmBlock.buffer );
					if ( canvas.width <= 0 || canvas.height <= 0 )
					{
						canvas.width = 8;
						canvas.height = 8;
					}
					var context = canvas.getContext( '2d' );
					this.aoz.utilities.remapBlock( context, [ color0 ], [ { r: 0, g: 0, b: 0, a: 0 } ], { x: 0, y: 0, width: canvas.width, height: canvas.height } );
					sprites.images[ i ] = canvas;
				}
				else
				{
					sprites.images[ i ] = ilbmBlock;
				}
				sp += 10 + sp_len;
			}
			return sprites;
		}
		this.convert_pacpic = function( name, block, options )
		{
			options = typeof options == 'undefined' ? { convert: true } : options;
			var end = block.length;
			var s, pal, picdata, rledata, points, ilbm;
			var i, j, k, l, bplcon0, width, ilbm_width, lumps,
				lump_height, ilbm_height, bitplanes, ilbm_len, ilbm_line,
				rledata_offset, points_offset;
			if ( block.length < 24)
				return;
			i = block.leek( 20 );
			if ( block.length > 134 && (i == 0x12031990 || i == 0x00031990 || i == 0x12030090) )
			{
				bplcon0 = block.deek( 20 + 20 ); 		/* screen mode */
				pal = 20 + 26; 							/* palette */
				s = 110; 								/* picture header */
			}
			else if (block.length > 44 && (i == 0x06071963 || i == 0x06070063))
			{
				bplcon0 = block.deek( 20 + 14 ) << 12 | 0x200; 	/* guess BPLCON0 */
				pal = -1; 										/* no palette */
				s = 20; 										/* picture header */
			}
			else
			{
				throw 'unknown_picpac_header';
			}
			width 				= block.deek( s + 8 );
			lumps            	= block.deek( s + 10 );
			lump_height      	= block.deek( s + 12 );
			bitplanes        	= block.deek( s + 14 );
			rledata_offset   	= block.leek( s + 16 );
			points_offset    	= block.leek( s + 20 );
			if (rledata_offset > ( block.length - s) || points_offset > (block.length - s))
			{
				return;
			}
			ilbm_width = width;
			if (ilbm_width & 1)
				ilbm_width++;
			ilbm_line = ilbm_width * bitplanes;
			ilbm_height = lumps * lump_height;
			ilbm_len = IFF_ILBM_HEADER_LEN + ilbm_line * ilbm_height;
			var ilbmBlock = new MemoryBlock( this.aoz, ilbm_len, 'big' );
			var plane, rbit, rrbit, picbyte, rlebyte;
			ilbmBlock.copyArray( 0, iff_ilbm_header, 'byte' );
			ilbmBlock.loke( 0x04, ilbm_len - 8 );
			ilbmBlock.doke( 0x14, ilbm_width * 8 );  				/* width */
			ilbmBlock.doke( 0x16, ilbm_height );     				/* height */
			ilbmBlock.poke( 0x1c, bitplanes & 0xFF );          		 /* number of bitplanes */
			ilbmBlock.doke( 0x24, ilbm_width * 8 );		  			/* page width */
			ilbmBlock.doke( 0x26, ilbm_height );     				/* page height */
			ilbmBlock.loke( 0x30, bplcon0 );         				/* viewmode */
			ilbmBlock.poke$( 0xA8, "BODY" );
			ilbmBlock.loke( 0xAC, ilbm_len - IFF_ILBM_HEADER_LEN); 	/* body length */
			var palette = [];
			for ( var i = 0; i < 32; i++)
			{
				var c = ( pal >= 0 ) ? block.deek( pal + i*2 ) : (i & 0x0F) * 0x111;
				var r = ((c >> 8) & 0xF) * 0x11;
				var g = ((c >> 4) & 0xF) * 0x11;
				var b = ((c     ) & 0xF) * 0x11;
				ilbmBlock.poke( 0x48 + (i * 3) + 0, r );
				ilbmBlock.poke( 0x48 + (i * 3) + 1, g );
				ilbmBlock.poke( 0x48 + (i * 3) + 2, b );
				palette[ i ] = this.aoz.utilities.getRGBAString( r, g, b );
			}
			rbit = 7;
			rrbit = 6;
			picdata = block.peek( s + 24 );
			rledata = block.peek( s + rledata_offset );
			points  = block.peek( s + points_offset );
			picbyte = block.peek( picdata++ );
			rlebyte = block.peek( rledata++ );
			if ( block.peek( points ) & 0x80 )
				rlebyte = block.peek( rledata++ );
			plane = IFF_ILBM_HEADER_LEN;
			for (i = 0; i < bitplanes; i++)
			{
				var lump_start = plane;
				for (j = 0; j < lumps; j++)
				{
					var lump_offset = lump_start;
					for (k = 0; k < width; k++)
					{
						var d = lump_offset;
						for (l = 0; l < lump_height; l++)
						{
							if (rlebyte & (1 << rbit--))
							{
								picbyte = block.peek( picdata++ );
								if (picdata > end)
								{
									return;
								}
							}
							ilbmBlock.poke( d, picbyte );
							d += ilbm_line;
							if (rbit > 7)
							{
								rbit = 7;
								if (block.peek( points ) & (1 << rrbit--))
								{
									rlebyte = block.peek( rledata++ );
									if (rledata > end)
									{
										return;
									}
								}
								if (rrbit > 7)
								{
									rrbit = 7, points++;
									if (points > end)
									{
										return;
									}
								}
							}
						}
						lump_offset++;
					}
					lump_start += ilbm_line * lump_height;
				}
				plane += ilbm_width; 		/* ILBM interleaved bitplanes */
			}
			if ( options.convert )
			{
				return { palette: palette, image: loadIffBuffer( undefined, ilbmBlock.buffer ) };
			}
			return ilbmBlock;
		};
		this.convert_samples = function( name, block, options )
		{
			options = typeof options == 'undefined' ? {} : options;
			var samples = [];
			var num_samples;
			if (block.length < 22)
				return;
			num_samples = block.deek( 20 );
			if (block.length < 22 + (num_samples * 4))
				return;
			for ( var i = 0; i < num_samples; i++)
			{
				var offset = block.leek( 22 + i*4 ) + 22;
				var freq, sam_len, svx_len;
				if (offset > block.length)
					return;
				name = block.peek$( offset, 6 );
				freq    = block.deek( offset + 8 );
				sam_len = block.leek( offset + 10 );
				{
					sam_len = (block.length - (offset + 14));
				}
				svx_len = IFF_8SVX_HEADER_LEN + sam_len;
				var svxBlock = new MemoryBlock( this.aoz, svx_len, 'big');
				svxBlock.copyArray(0, iff_8svx_header, 'byte');
				svxBlock.loke( 0x04, svx_len - 8);
				svxBlock.doke( 0x20, freq);
				svxBlock.loke( 0x2C, sam_len);
				svxBlock.copyFrom( 0x30, block, offset + 14, sam_len );
				if ( options.convert )
				{
					samples[ i ] = svxBlock;
				}
				else
				{
					samples[ i ] = svxBlock;
				}
			}
			return samples;
		};
		this.convert_tracker = function( name, block, options )
		{
			options = typeof options == 'undefined' ? { convert: true } : options;
			var mod_len = block.length - 20;
			var bank_block = new MemoryBlock( this.aoz, mod_len, 'big' );
			bank_block.copyFrom( 0, block, 20, mod_len );
			return bank_block;
		}
		this.convert_data = function( name, block, options )
		{
			options = typeof options == 'undefined' ? { convert: true } : options;
			var bank_len = block.length - 20;
			var bank_block = new MemoryBlock( this.aoz, bank_len, 'big' );
			bank_block.copyFrom( 0, block, 20, bank_len );
			return bank_block;
		}
		this.get_bank_length = function( block, offset )
		{
			offset = typeof offset == 'undefined' ? 0 : offset;
			if ( block.length  >= 6 && ( block.leek( offset + 0 ) == ID_AmSp || block.leek(offset + 0 ) == ID_AmIc ) )
			{
				var num_sprites = block.deek( offset + 4 );
				var pos = 6, w, h, d;
				while ( num_sprites-- )
				{
					if ( pos + 10 > block.length )
						return 0;
					w = block.deek( offset + pos ) * 2;
					h = block.deek( offset + pos + 2 );
					d = block.deek(	offset + pos + 4 );
					pos += 10 +  w * h * d;
				}
				pos += 64; /* include palette */
				return pos > block.length ? 0 : pos;
			}
			else if ( block.length >= 20 && block.leek( offset + 0 ) == ID_AmBk )
			{
				var bank_len = ( block.leek( offset + 8 ) & 0x0FFFFFFF ) + 20 - 8;
				return bank_len > block.length ? 0 : bank_len;
			}
			return 0;
		};
		this.get_bank_number = function( block, offset )
		{
			offset = typeof offset == 'undefined' ? 0 : offset;
			if ( block.length >= 6 && block.leek( offset + 0 ) == ID_AmSp )
			{
				return 1; /* Sprites always bank 1 */
			}
			if ( block.length >= 6 && block.leek( offset + 0 ) == ID_AmIc )
			{
				return 2; /* Icons always bank 2 */
			}
			if ( block.length >= 20 && block.leek( offset + 0 ) == ID_AmBk)
			{
				return block.deek( 4 );
			}
			return 0;
		};
		this.get_bank_type = function( block, offset )
		{
			offset = typeof offset == 'undefined' ? 0 : offset;
			if ( block.length >= 6 && block.leek( offset + 0 ) == ID_AmSp )
			{
				return "Sprites";
			}
			if ( block.length >= 6 && block.leek( offset + 0 ) == ID_AmIc )
			{
				return "Icons";
			}
			if ( block.length >= 20 && block.leek( offset + 0 ) == ID_AmBk )
			{
				var type = block.extractString( offset + 12, 8 );
				return utilities.trimString( type, { right: true } );
			}
			return null;
		};
		// End Javascript
		// End
		this.aoz.sourcePos="0:1516:0";
		return{type:0}
	};
	this.blocks[1]=function()
	{
		return{type:0}
	};
	this.aoz.run(this,0,null);
};
