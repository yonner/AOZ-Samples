/*@*****************************************************************************
*                                                                              *
*   █████╗  ██████╗ ███████╗    ███████╗████████╗██╗   ██╗██████╗ ██╗ ██████╗  *
*  ██╔══██╗██╔═══██╗╚══███╔╝    ██╔════╝╚══██╔══╝██║   ██║██╔══██╗██║██╔═══██╗ *
*  ███████║██║   ██║  ███╔╝     ███████╗   ██║   ██║   ██║██║  ██║██║██║   ██║ *
*  ██╔══██║██║   ██║ ███╔╝      ╚════██║   ██║   ██║   ██║██║  ██║██║██║   ██║ *
*  ██║  ██║╚██████╔╝███████╗    ███████║   ██║   ╚██████╔╝██████╔╝██║╚██████╔╝ *
*  ╚═╝  ╚═╝ ╚═════╝ ╚══════╝    ╚══════╝   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝ ╚═════╝  *
*                                                                              *
* This file is part of AOZ Studio.                                             *
* Copyright (c) AOZ Studio. All rights reserved.                               *
*                                                                              *
* Licensed under the GNU General Public License v3.0.                          *
* More info at: https://choosealicense.com/licenses/gpl-3.0/                   *
* And in the file AOZ_StudioCodeLicense.pdf.                                   *
*                                                                              *
*****************************************************************************@*/
/** @file
 *
 * AOZ Runtime
 *
 * The return of Basic!
 *
 * @author FL (Francois Lionet)
 * @date first pushed on 03/12/2018
 */
AOZ_Files = {};
function AOZ( canvasId, manifest )
{
	//this.dos = new DOS( this );
	//this.utilities = new Utilities( this );
	var self = this;
	this.aoz = this;
	this.currentContextName = 'application';
	this.manifest = manifest;
	this.memoryHashMultiplier = 1000000000000;
	this.loadingCount = 0;
	this.loadingMax = 0;
	this.finalWait = 0;
	this.use = {};

	this.utilities = new Utilities( this );
	this.errors = new Errors( this );
	this.banks = new Banks( this );
	this.filesystem = new Filesystem( this );
	this.renderer = new Renderer( this, canvasId );
	this.amal = new AMAL( this );
	this.fonts = new Fonts( this );

	this.setKeyboard();
	this.setMouse();
	this.setGamepads();

	this.sections = [];
	this.returns = [];
	this.section = null;
	this.position = 0;
	this.parent = null;
	this.maxLoopTime = 18;
	this.timeCheckCounter = 10000;
	this.manifest = manifest;
	this.onError = false;
	this.resume = 0;
	this.resumeLabel = 0;
	this.isErrorOn = false;
	this.isErrorProc = false;
	this.lastError = 0;
	this.displayEndAlert = this.aoz.manifest.compilation.displayEndAlert ? true : false;
	this.displayErrorAlert = this.aoz.manifest.compilation.displayErrorAlert ? true : false;
	this.fix = 16;
	this.degreeRadian=1.0;
	this.key$ = [];
	this.stringKey$ = '';
	this.handleKey$ = null;
	this.results = [];
	this.inkeyShift = 0;
	this.memoryBlocks = [];
	this.memoryNumbers = 1;
	this.nowEvery = false;
	this.everyDefinition = null;
	this.everyReturn = -1;
	this.everyEndProc = -1;
	this.everySave = null;
	this.everySection = null;
	this.fps = [];
	this.fpsPosition = 0;
	this.frameCounter = 0;
	for ( var f = 0; f < 50; f++ )
		this.fps[ f ] = 20;
	this.channelsTo = [];
	this.amalErrors = [];
	this.amalErrorNumberCount = 0;
	this.amalErrorStringCount = 0;
	this.updateEvery = 0;
	this.updateEveryCount = 0;
	this.isUpdate = true;
	this.blocks = [];
	this.cBlocks = [];
	this.setBufferSize = 0;
	this.xMouse = 0;
	this.yMouse = 0;
	this.trapPosition = -1;
	this.trappedErrorNumber = 0;
	this.trapPosition = -1;

	//this.renderer.setScreenDisplay();

	// TODO -> virer!
	this.usePalette = typeof manifest.compilation.usePalette != 'undefined' ? manifest.compilation.usePalette : true,
	this.useShortColors = typeof manifest.compilation.useShortColors != 'undefined' ? manifest.compilation.useShortColors : true,
	this.showCopperBlack = typeof manifest.compilation.showCopperBlack != 'undefined' ? manifest.compilation.showCopperBlack : true,
	this.unlimitedScreens = typeof manifest.compilation.unlimitedScreens != 'undefined' ? manifest.compilation.unlimitedScreens : false,
	this.unlimitedWindows = typeof manifest.compilation.unlimitedWindows != 'undefined' ? manifest.compilation.unlimitedWindows : false,
	this.maskHardwareCoordinates = typeof manifest.compilation.maskHardwareCoordinates != 'undefined' ? manifest.compilation.maskHardwardeCoordinates : true,

	this.defaultPalette = [];
	if ( this.usePalette )
	{
		for ( var c = 0; c < this.manifest.default.screen.palette.length; c++ )
			this.defaultPalette[ c ] = this.manifest.default.screen.palette[ c ];
	}

	this.waitInstructions =
	{
		waitKey: this.waitKey,
		waitKey_wait: this.waitKey_wait,
		wait: this.wait,
		wait_wait: this.wait_wait,
		waitVbl: this.waitVbl,
		waitVbl_wait: this.waitVbl_wait,
		input: this.input,
		input_wait: this.input_wait,
		input$: this.input$,
		input$_wait: this.input$_wait,
		bLoad: this.bLoad,
		bLoad_wait: this.fileOperation_wait,
		bSave: this.bSave,
		bSave_wait: this.fileOperation_wait,
		openOut: this.openOut,
		openOut_wait: this.fileOperation_wait,
		openIn: this.openIn,
		openIn_wait: this.fileOperation_wait,
		append: this.append,
		append_wait: this.fileOperation_wait,
		close: this.close,
		close_wait: this.fileOperation_wait,
		openRandom: this.openRandom,
		openRandom_wait: this.fileOperation_wait,
		amalStart: this.amalStart,
		amalStart_wait: this.amalStart_wait,
		setFont: this.setFont,
		setFont_wait: this.setFont_wait
	};
	this.waitThis = null;
	this.waiting = null;

	// Initialisation of mathematic functions
	Math.tanh = Math.tanh || function( x )
	{
		var a = Math.exp( +x ), b = Math.exp( -x );
		return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (a + b);
	};
	Math.sinh = Math.sinh || function( x )
	{
		return ( Math.exp( x ) - Math.exp( -x ) ) / 2;
	};
	Math.cosh = Math.cosh || function( x )
	{
		return ( Math.exp( x ) + Math.exp( -x ) ) / 2;
	};

	// Main loop
	this.break = false;
	this.breakOn = true;

	// Available properties
	this.propertyContexts = {};
	this.propertyContext =
	{
		name: 'AOZ',
		self: this,
		setTags: this.setTags,
		properties:
		{
			break: { type: PROPERTYTYPE_BOOLEAN, doTags: '', addTags: [], removeTags: [] },
			breakOn: { type: PROPERTYTYPE_BOOLEAN, doTags: '', addTags: [], removeTags: [] },
			//manifest: { type: PROPERTYTYPE_OBJECT, addTags: [ '#restart' ], removeTags: [ ] },
			maxLoopTime: { type: PROPERTYTYPE_INTEGER, doTags: '', addTags: [], removeTags: [] },
			timeCheckCounter: { type: PROPERTYTYPE_INTEGER, doTags: '', addTags: [], removeTags: [] },
			lastError: { type: PROPERTYTYPE_INTEGER, doTags: '', addTags: [], removeTags: [] },
			displayEndAlert: { type: PROPERTYTYPE_BOOLEAN, doTags: '', addTags: [], removeTags: [] },
			currentScreen: { type: PROPERTYTYPE_OBJECT, context: 'Screen', doTags: '', addTags: [], removeTags: [] }
		}
	};
	this.propertyContexts[ "AOZ" ] = this.propertyContext;

	// Create contexts
	this.screensContext = new AOZContext( this.aoz, this.currentContextName, { sorted: true } );
	this.spritesContext = new AOZContext( this.aoz, this.currentContextName, { sorted: true } );

	// Load welcome images
	var images = [];
	var imageCount = 5;
	var welcomeStep = 0;
	var welcomeWaitEnd = 0;
	var welcomeAlpha = 0;
	this.welcomeClick = false;
	if ( this.manifest.bootScreen.active )
	{
		for ( var i = 0; i < 7; i++ )
		{
			this.utilities.loadUnlockedImage( "./run/resources/made_with_aoz_" + i + ".png", {}, function ( response, image, count )
			{
				if ( response )
				{
					images[ count ] = image;
					imageCount--;
					if ( imageCount == 0 )
						welcomeStep = 1;
				}
			}, i );
		}
	}
	else
	{
		welcomeStep = -100;
	}
	// Wait for initiialization / display welcome screen...
	var self = this;
	var handle = setInterval( function()
	{
		if ( welcomeStep >= 0 )
		{
			// Wait?
			var now = new Date().getTime();
			if ( welcomeWaitEnd )
			{
				if ( now > welcomeWaitEnd )
				{
					welcomeStep++;
					welcomeWaitEnd = 0;
				}
				return;
			}
			else
			{
				// Step!
				var welcomeWait = 0;
				switch ( welcomeStep )
				{
					case 0:
						break;
					case 1:
						// White renderer screem
						self.renderer.context.fillStyle = self.utilities.getRGBAString( welcomeAlpha, welcomeAlpha, welcomeAlpha );
						self.renderer.context.fillRect( 0, 0, self.renderer.canvas.width, self.renderer.canvas.height );
						welcomeAlpha += 5;
						if ( welcomeAlpha >= 256 )
						{
							self.renderer.context.fillStyle = '#FFFFFF';
							self.renderer.context.fillRect( 0, 0, self.renderer.canvas.width, self.renderer.canvas.height );
							welcomeWait = 100;
						}
						break;
					case 2:
						drawI( images[ 0 ], 144, -89, 1.0 );
						drawI( images[ 1 ], 225, -89, 1.0 );
						drawI( images[ 2 ], -165, 0, 1.0 );
						welcomeStep = 4;
						welcomeAlpha = 0;
						break;
					case 3:
						break;
					case 4:
						drawI( images[ 3 ], 110, 15, welcomeAlpha );
						welcomeAlpha += 0.03;
						if ( welcomeAlpha >= 1 )
							welcomeWait = 500;
						break;
					case 5:
						welcomeStep = -7;
						break;
					case 6:
						welcomeStep++;
						break;
					case 7:
						if ( self.useSounds || self.manifest.bootScreen.waitSounds )
						{
							drawI( images[ 6 ], 0, -48, 1.0, '#bottom' );
							welcomeStep++;
							break;
						}
						else
						{
							drawI( images[ 4 ], 110, 15, 1.0 );
							drawI( images[ 5 ], 247, 110, 1.0 );
							welcomeStep = 99;
							welcomeWait = 1000;
						}
						break;
					case 8:
						if ( self.welcomeClick )
						{
							drawI( images[ 6 ], 0, -48, 1.0, '#nodraw #bottom' );
							drawI( images[ 4 ], 110, 15, 1.0 );
							drawI( images[ 5 ], 247, 110, 1.0 );
							welcomeWait = 1000;
							welcomeStep = 99;
						}
						break;
					case 99:
						break;
					case 100:
						clearInterval( handle );
						self.default( 'application' );
						self.timer = 0;
						window.requestAnimationFrame( doUpdate );
						break;
				}
				if ( welcomeWait )
					welcomeWaitEnd = now + welcomeWait;
			}
			return;
		}
		if ( self.loadingCount == self.loadingMax )
		{
			if ( self.loadingError )
			{
				clearInterval( handle );
				var message = self.errors.getError( self.loadingError ).message;
				alert( message );
			}
			else
			{
				if ( self.loadingCount != 0 )
				{
					self.loadingCount = 0;
					self.loadingMax = 0;
					welcomeStep = -welcomeStep;
				}
			}
		}
		function drawI( image, x, y, alpha, options )
		{
			self.renderer.context.imageSmoothingEnabled = true;
			self.renderer.context.imageRendering = 'pixelated';
			var ratioX = ( self.renderer.width / 1280 ) * 0.6;
			var ratioY = ratioX;
			var xx = self.renderer.width / 2;
			var yy = self.renderer.height / 2;
			if ( options && options.indexOf( '#bottom' ) >= 0 )
				yy = self.renderer.height;
			self.renderer.context.fillStyle = '#FFFFFF';
			self.renderer.context.globalAlpha = 1;
			self.renderer.context.fillRect( xx + ( x - image.width / 2 ) * ratioX, yy + ( y - image.height / 2 ) * ratioY, image.width * ratioX, image.height * ratioY );
			if ( !( options && options.indexOf( '#nodraw' ) >= 0 ) )
			{
				self.renderer.context.globalAlpha = alpha;
				self.renderer.context.drawImage( image, 0, 0, image.width, image.height, xx + ( x - image.width / 2 )* ratioX, yy + ( y - image.height / 2 ) * ratioY, image.width * ratioX, image.height * ratioY );
			}
		}
	}, 20 );

	function doUpdate()
	{
		if ( self.section )
		{
			var time = new Date().getTime();
			if ( !self.previousTime ) self.previousTime = time;
			self.fps[ self.fpsPosition++ ] = time - self.previousTime;
			self.fpsPosition = self.fpsPosition >= self.fps.length ? 0 : self.fpsPosition;
			self.timer += self.manifest.compilation.emulation.toLowerCase() == 'pc' ? ( time - self.previousTime ) / 1000 : ( time - self.previousTime ) / 20;
			self.previousTime = time;
			self.frameCounter++;
			self.scanGamepads();
			if ( self.amal && self.amal.isSynchro )
				self.amal.doSynchro();

			self.loopCounter = self.timeCheckCounter;
			ret = null;
			while( !self.break )
			{
				do
				{
					try
					{
						if ( self.waiting )
						{
							if ( self.caughtError )
								throw self.caughtError;
							self.waiting.call( self.waitThis );
							if ( self.waiting || self.everyNow )
								break;
						}
						while( !ret )
						{
							ret = self.section.blocks[ self.position++ ].call( self.section );
						};
					}
					catch( error )
					{
						self.waiting = null;
						self.caughtError = null;
						if ( error.stack )
						{
							self.badEnd = true;
							self.errorObject = self.errors.getError( 'internal_error' );
							self.setErrorNumber( self.errorObject.number );
							console.log( error.message );
							console.log( error.stack );
							self.renderer.captureCrash( error );
							if ( self.aoz.manifest.compilation.emulation.toLowerCase() != "pc" )
							{
								self.renderer.meditate();
								self.clickMouse = false;
								self.waiting = self.waitForGuru;
								self.waitThis = self;
							}
							else
							{
								self.utilities.sendCrashMail();
								self.break = true;
							}
							break;
						}
						self.errorObject = self.errors.getError( error );
						self.setErrorNumber( self.errorObject.number );

						// Trap? No error and branch to the next instruction
						if ( self.trapPosition == self.position )
						{
							self.trappedErrorNumber = self.error;
							self.trapPosition = -1;
							self.error = 0;
							self.lastError = 0;
							self.loopCounter--;
							ret = null;
							continue;
						}
						else if ( self.onError )
						{
							if ( typeof self.onError == 'number' )
							{
								self.resume = self.position;
								self.position = self.onError;
								self.isErrorOn = true;
							}
							else
							{
								// Push previous section
								self.sections.push(
								{
									section: self.section,
									position: self.position,
									parent: self.parent,
									onError: self.onError,
									isErrorProc: self.isErrorProc
								} );

								// Initialize procedure parameters
								self.position = 0;
								self.parent = self.section;
								self.section = self.onError;
								self.onError = false;
								self.isErrorProc = true;
							}
						}
						// Break application
						self.badEnd = true;
						self.break = true;
						break;
					}

					if ( self.everyNow )
						break;

					switch ( ret.type )
					{
						// End!
						case 0:
							popSection();
							if ( self.sections.length == self.everyEndProc )
							{
								self.everyEndProc = -1;
								self.waiting = self.everyWaiting;
								ret = self.everySave;
								continue;
							}
							break;

						// Goto
						case 1:
							self.position = ret.label;
							break;

						// Gosub
						case 2:
							self.returns.push( ret.return );
							self.position = ret.label;
							break;

						// Return
						case 3:
							if ( self.returns.length == 0 )
							{
								self.setErrorNumber( self.errors.getError( 'return_without_gosub' ).number );
								self.break = true;
								break;
							}
							self.position = self.returns.pop();
							if ( self.returns.length == self.everyReturn )
							{
								self.waiting = self.everyWaiting;
								ret = self.everySave;
								continue;
							}
							break;

						// Procedure call
						case 4:
							// Push previous section
							self.sections.push(
							{
								section: self.section,
								position: self.position,
								parent: self.parent,
								onError: self.onError,
								isErrorProc: self.isErrorProc,
								currentResult: self.section.currentResult
							} );

							// Initialize procedure parameters
							self.onError = false;
							self.isErrorProc = false;
							self.position = 0;
							self.parent = self.section;
							self.section = new ret.procedure( self, self.root, self.section );
							if ( self.section.reset )
								self.section.reset();
							for ( var a in ret.args )
								self.section.vars[ a ] = ret.args[ a ];
							self.section.currentResult = ret.result;
							break;

						// Resume
						case 5:
							if ( !self.isErrorOn && !self.isErrorProc )
							{
								self.break = true;
							}
							else
							{
								if ( self.isErrorProc )
									popSection();
								if ( !ret.label )
									self.position = self.resume - 1;
								else
									self.position = ret.label;
								self.isErrorOn = false;
								self.lastError = 0;
							}
							break;

						// Resume next
						case 6:
							if ( !self.isErrorOn && !self.isErrorProc )
							{
								self.break = true;
							}
							else
							{
								if ( self.isErrorProc )
									popSection();
								self.position = self.resume;
								self.isErrorOn = false;
								self.lastError = 0;
							}
							break;

						// Resume label
						case 7:
							if ( !self.isErrorOn && !self.isErrorProc )
							{
								self.break = true;
							}
							else
							{
								if ( self.isErrorProc )
									popSection();
								self.position = self.resumeLabel;
								self.isErrorOn = false;
								self.lastError = 0;
							}
							break;

						// Blocking instruction
						case 8:
							self.waiting = self.waitInstructions[ ret.instruction + '_wait' ];
							self.waitThis = self;
							try
							{
								self.waitInstructions[ ret.instruction ].call( self, ret.args );
							}
							catch( error )
							{
								self.caughtError = error;
							}
							break;

						// Blocking function
						case 9:
							self.waiting = self.waitInstructions[ ret.instruction + '_wait' ];
							self.waitThis = self;
							self.waitInstructions[ ret.instruction ].call( self, ret.result, ret.args );
							break;

						// Instruction
						case 10:
							// Push previous section
							self.sections.push(
							{
								section: self.section,
								position: self.position,
								parent: self.parent,
								onError: self.onError,
								isErrorProc: self.isErrorProc,
								currentResult: self.section.currentResult
							} );

							// Initialize instruction parameters
							self.onError = false;
							self.isErrorProc = false;
							self.position = 0;
							self.parent = self.section;
							if ( ret.klass )
								self.section = self[ ret.klass ][ 'i' + ret.instruction ];
							else
								self.section = self.section[ 'i' + ret.instruction ];
							if ( self.section.reset )
								self.section.reset();
							for ( var a in ret.args )
								self.section.vars[ a ] = ret.args[ a ];
							self.section.currentResult = ret.result;
							break;

						// Function
						case 11:
							// Push previous section
							self.sections.push(
							{
								section: self.section,
								position: self.position,
								parent: self.parent,
								onError: self.onError,
								isErrorProc: self.isErrorProc,
								currentResult: self.section.currentResult
							} );

							// Initialize function parameters
							self.onError = false;
							self.isErrorProc = false;
							self.position = 0;
							self.parent = self.section;
							if ( ret.klass )
								self.section = self[ ret.klass ][ 'f' + ret.instruction ];
							else
								self.section = self.section[ 'f' + ret.instruction ];
							if ( self.section.reset )
								self.section.reset();
							for ( var a in ret.args )
								self.section.vars[ a ] = ret.args[ a ];
							self.section.currentResult = ret.result;
							break;

						// Blocking instruction from language definition
						case 12:
							self.waitThis = ret.waitThis;
							self.waiting = self.waitThis[ ret.waitFunction ];
							try
							{
								self.waitThis[ ret.callFunction ].call( self.waitThis, ret.args );
							}
							catch( error )
							{
								self.caughtError = error;
							}
							break;

						// Pop
						case 13:
							if ( self.returns.length == 0 )
							{
								self.setErrorNumber( self.errors.getError( 'return_without_gosub' ).number );
								self.break = true;
								break;
							}
							self.returns.pop();
							break;

						// Edit
						case 14:
							self.break = true;
							self.displayEndAlert = false;
							break;

					}
					ret = null;
					self.loopCounter--;
				} while( !self.break && self.loopCounter > 0 && !self.waiting )

				// Every?
				if ( self.everyNow )
				{
					if ( self.everyHandle )
					{
						clearTimeout( self.everyHandle );
					}
					self.everyHandle = setTimeout( function()
					{
						self.everyNow = true;
					}, self.everyInterval * 20 );

					self.everyNow = false;
					self.everySave = ret;
					self.everySection = self.section;
					self.everyWaiting = self.waiting;
					self.waiting = null;
					ret = self.everyDefinition;
					if ( ret.type == 2 )
					{
						self.everyReturn = self.returns.length;
						self.everyEndProc = -1;
						ret.return = self.position;
					}
					else
					{
						self.everyEndProc = self.sections.length;
						self.everyReturn = -1;
					}
					continue;
				}

				// Check time in loop
				self.loopCounter = self.timeCheckCounter;
				if ( new Date().getTime() - time >= self.maxLoopTime || self.waiting )
					break;

				ret = null;
			}

			// Render the display!
			//var now = new Date().getTime();
			//console.log( 'Time since loop entry: ' + ( now - time ) + ' - Time since previous loop: ' + ( now - timeBefore ) );
			self.renderer.render();

			if ( self.break )
			{
				// Force render
				self.renderer.blackAtFirstCount = 0;
				self.renderer.render( true );

				// Stop update
				clearInterval( self.handle );

				var message = '';
				if ( self.lastError )
				{
					message = self.errorObject.message;
					if ( self.lastErrorPos )
					{
						var pos = self.lastErrorPos.split( ':' );
						var number = parseInt( pos[ 0 ] );
						var path = self.sources[ number ].path;
						var line = parseInt( pos[ 1 ] ) + 1;
						var column = parseInt( pos[ 2 ] ) + 1;
						message += ' ' + self.errors.getError( 'at_line' ).message + line + ', ';
						message += self.errors.getError( 'at_column' ).message + column + ' ';
						message += self.errors.getError( 'in_source' ).message + self.utilities.getFilename( path ) + '.' + self.utilities.getFilenameExtension( path );
					}
					message += '.';
					console.log( message );
				}

				var text = self.badEnd ? 'Program ended.' : 'Program ended successfully.';
				var display = false;
				if ( message != '' )
				{
					// An error...
					text = message + '\n' + text;
					if ( self.displayErrorAlert )
						display = true;
				}
				else
				{
					// End of program...
					if ( self.displayEndAlert )
						display = true;
				}

				if ( display )
				{
					setTimeout( function()
					{
						alert( text );
					}, 500 );
				}
				else
				{
					// Put program on "HALT"
					var count = 0;
					var speed = 60;
					var visible = 0;
					self.renderer.viewOn = true;
					function onHalt( doUpdate )
					{
						count++;
						if ( count == speed )
						{
							count = 0;
							visible = 1 - visible;
							self.renderer.halted = visible ? text : null;
							self.renderer.modified = true;
						}
						self.renderer.render();
						window.requestAnimationFrame( onHalt );
					};
					window.requestAnimationFrame( onHalt );
				}
			}
			else
			{
				timeBefore = new Date().getTime();
				window.requestAnimationFrame( doUpdate );
			}
		}
		function popSection()
		{
			// Pop section
			var pop = self.sections.pop();
			self.section = pop.section;
			if ( self.section == null )
			{
				self.break = true;
			}
			else
			{
				//self.currentContextName = self.section.contextName;
				self.position = pop.position;
				self.parent = pop.parent;
				self.onError = pop.onError;
				self.isErrorProc = pop.isErrorProc;
				self.section.currentResult = pop.currentResult;

				if ( self.finalWait )
				{
					self.finalWait--;
					if ( self.finalWait == 0 )
					{
						self.waitThis = self;
						self.waiting = self.waitForFinalLoad;
					}
				}
			}
		}
	}
};
AOZ.prototype.waitForFinalLoad = function()
{
	if ( this.loadingCount == this.loadingMax )
	{
		this.waiting = null;
	}
};
AOZ.prototype.waitForGuru = function()
{
	if ( this.clickMouse )
	{
		if ( this.clickMouse & 0x01 )
			this.utilities.sendCrashMail();
		this.waiting = null;
		this.break = true;
	}
};
AOZ.prototype.run = function( section, position, parent, root )
{
	// Run the extensions first
	this.sections.push(
	{
		section: this.section,
		position: this.position,
		parent: this.parent,
		isErrorProc: this.isErrorProc,
		onError: this.onError
	} );
	this.section = section;
	//this.currentContextName = section.contextName;
	if ( typeof root != 'undefined' )
		this.root = root;
	this.position = position;
	this.parent = parent;
	this.isErrorProc = false;
	this.onError = null;
};
AOZ.prototype.pushExtension = function( section )
{
	this.extensionsToRun.push( section );
};
AOZ.HREV = 0x8000;
AOZ.VREV = 0x4000;


AOZ.prototype.free = function()
{
	return 0;
};
AOZ.prototype.fastFree = function()
{
	return 0;
};
AOZ.prototype.chipFree = function()
{
	return 0;
};

/////////////////////////////////////////////////////////////////////////
//
// UPDATE PROCESSUS - TODO -> a voir pas clar ici!
//
/////////////////////////////////////////////////////////////////////////
AOZ.prototype.setUpdate = function( onOff )
{
	this.isUpdate = onOff;
};
AOZ.prototype.setBobsUpdate = function( onOff )
{
	if ( this.isUpdate != onOff )
	{
		this.isUpdate = onOff;
		for ( var screen = this.screensContext.getFirstElement(); screen != null; screen = this.screensContext.getNextElement() )
			screen.setBobsUpdate( onOff );
	}
}
AOZ.prototype.rendererUpdate = function()
{
	this.updateEveryCount++;
	if ( this.updateEveryCount > this.updateEvery )
	{
		this.updateEveryCount = 0;
		this.update();
	}
}
AOZ.prototype.update = function( force )
{
	if ( !force )
		force = this.isUpdate;
	//else ???
	//	force = !this.isUpdate;
	if ( force )
	{
		if ( this.sprites )
			this.sprites.update( force );
		for ( var screen = this.screensContext.getFirstElement(); screen != null; screen = this.screensContext.getNextElement() )
			screen.bobsUpdate( force );
	}
};
AOZ.prototype.bobsUpdate = function( force )
{
	if ( !force )
		force = this.isUpdate;
	//else
	//	force = !this.isUpdate;
	if ( force )
	{
		for ( var screen = this.screensContext.getFirstElement(); screen != null; screen = this.screensContext.getNextElement() )
			screen.bobsUpdate( force );
	}
};
AOZ.prototype.updateEvery = function( every )
{
	if ( every < 1 )
		throw 'illegal_function_call';
	this.updateEvery = every;
	this.updateEveryCount = 0;
};


/////////////////////////////////////////////////////////////////////////
//
// PROPERTIES
//
/////////////////////////////////////////////////////////////////////////
const PROPERTYTYPE_UNKNOWN = 0;
const PROPERTYTYPE_INTEGER = 1;
const PROPERTYTYPE_FLOAT = 2;
const PROPERTYTYPE_STRING = 3;
const PROPERTYTYPE_FUNCTION = 4;
const PROPERTYTYPE_BOOLEAN = 5;
const PROPERTYTYPE_OBJECT = 6;
const PROPERTYTYPE_JAVASCRIPTOBJECT = 7;

AOZ.prototype.registerPropertyContext = function( context, options )
{
	this.propertyContexts[ context.name ] = context;
};
AOZ.prototype.setProperty = function( propertyString, value, tags )
{
	var dot = propertyString.indexOf( '.' );
	if ( dot >= 0 )
	{
		var contextString = propertyString.substring( 0, dot );
		if ( contextString == 'AOZ' )
		{
			this.doSetProperty( propertyString.substring( dot + 1 ), value, tags );
		}
	}
	else
	{
		throw 'context_not_found'
	}
};
AOZ.prototype.doSetProperty = function( propertyString, value, tags )
{
	tags = typeof tags == 'undefined' ? '' : tags;
	var dot = propertyString.indexOf( '.' );
	if ( dot >= 0 )
	{
		var propertyName = propertyString.substring( 0, dot );

		// TODO: can pick value when passing and remove it!
		var propertyDefinition = this.propertyContext.properties[ propertyName ];
		if ( propertyDefinition )
		{
			var propertyNext = propertyString.substring( dot + 1 );
			switch ( propertyDefinition.type )
			{
				case PROPERTYTYPE_OBJECT:
					var contextNext = this.propertyContexts[ propertyDefinition.context ];
					if ( !contextNext )
						throw 'internal_error';
					this.doSetProperty.call( contextNext.self, propertyNext, value, tags );
					break;

				default:
					throw 'property_not_defined';
			}
			return;
		}
	}
	else
	{
		// TODO: can pick value when passing and remove it!
		var propertyDefinition = this.propertyContext.properties[ propertyString ];
		if ( propertyDefinition )
		{
			if ( propertyDefinition.addTags )
			{
				for ( var t = 0; t < propertyDefinition.addTags.length; t++ )
				{
					var tag = propertyDefinition.addTags[ t ];
					if ( tags.indexOf( '#' + tag >= 0 ) )
						tags += '#' + tag;
				}
			}
			switch ( propertyDefinition.type )
			{
				case PROPERTYTYPE_OBJECT:
					throw 'internal_error';

				case PROPERTYTYPE_FUNCTION:
					this[ propertyString ]( value, tags );
					break;

				default:
				case PROPERTYTYPE_BOOLEAN:
				case PROPERTYTYPE_FLOAT:
				case PROPERTYTYPE_STRING:
					this[ propertyString ] = value;
					break;
			}
			if ( propertyDefinition.removeTags )
			{
				for ( var t = 0; t < propertyDefinition.removeTags.length; t++ )
				{
					var tag = propertyDefinition.removeTags[ t ];
					if ( ( pos = tags.indexOf( '#' + tag ) ) >= 0 )
						tags = tags.substring( 0, pos ) + tags.substring( pos + tag.length + 1 );
				}
			}
			if ( propertyDefinition.doTags && propertyDefinition.doTags.length > 0 )
				this.setTags( propertyDefinition.doTags );
		}
	}
	if ( tags != '' )
	{
		this.setTags( tags );
	}
};
AOZ.prototype.getProperty = function( propertyString, tags )
{
	var dot = propertyString.indexOf( '.' );
	if ( dot >= 0 )
	{
		var contextString = propertyString.substring( 0, dot );
		if ( contextString == 'AOZ' )
		{
			return this.doGetProperty( propertyString.substring( dot + 1 ), tags );
		}
	}
	else
	{
		throw 'context_not_found'
	}
};
AOZ.prototype.doGetProperty = function( propertyString, tags )
{
	tags = typeof tags == 'undefined' ? '' : tags;
	var dot = propertyString.indexOf( '.' );
	if ( dot >= 0 )
	{
		var propertyName = propertyString.substring( 0, dot );

		// TODO: can pick value when passing and remove it!
		var propertyDefinition = this.propertyContext.properties[ propertyName ];
		if ( propertyDefinition )
		{
			var propertyNext = propertyString.substring( dot + 1 );
			switch ( propertyDefinition.type )
			{
				case PROPERTYTYPE_OBJECT:
					var contextNext = this.propertyContexts[ propertyDefinition.context ];
					if ( !contextNext )
						throw 'internal_error';
					return this.doGetProperty.call( contextNext.self, propertyNext, tags );

				default:
					throw 'property_not_defined';
			}
		}
	}
	else
	{
		// TODO: can pick value when passing and remove it!
		var propertyDefinition = this.propertyContext.properties[ propertyString ];
		if ( propertyDefinition )
		{
			switch ( propertyDefinition.type )
			{
				case PROPERTYTYPE_OBJECT:
					throw 'internal_error';

				case PROPERTYTYPE_FUNCTION:
					return this[ propertyString ]( tags );

				default:
				case PROPERTYTYPE_BOOLEAN:
				case PROPERTYTYPE_FLOAT:
				case PROPERTYTYPE_STRING:
					return this[ propertyString ];
			}
		}
	}
};

AOZ.prototype.setTags = function( tags )
{
	if ( this.utilities.getTag( tags, [ 'refresh' ] ) != '' )
		this.renderer.setModified();
	if ( this.utilities.getTag( tags, [ 'restart' ] ) != '' )
		this.run();
	if ( this.utilities.getTag( tags, [ 'debugger' ] ) != '' )
		debugger;
	if ( this.utilities.getTag( tags, [ 'break' ] ) != '' )
		this.break;
	/*
	Possible tags:
	#step-> go in step-through mode after property has been set in AOZ debugger (do today?)
	#record -> record all the values of the property with time
	*/
};

AOZ.prototype.displayWidth = function()
{
	var result;
	if ( this.manifest.compilation.emulation != 'PC' )
	{
		result = 342;
	}
	else
	{
		result = this.renderer.width;
	}
	return result;
};
AOZ.prototype.displayHeight = function()
{
	var result;
	if ( this.manifest.compilation.emulation != 'PC' )
	{
		result = this.manifest.display.tvStandard == 'ntsc' ? 261 : 311;
	}
	else
	{
		result = this.renderer.height;
	}
	return result;
};
AOZ.prototype.ntsc = function()
{
	return this.manifest.compilation.emulation != 'PC' && this.manifest.display.tvStandard == 'ntsc';
};
AOZ.prototype.allowRefresh = function()
{
	if ( this.loopCounter > self.timeCheckCounter / 4 )
		this.loopCounter /= 2;
};
AOZ.prototype.stop = function()
{
	debugger;
	//throw 'program_interrupted';
};
AOZ.prototype.every = function( interval, definition )
{
	if ( this.everyDefinition )
		throw 'every_already_defined';
	if ( interval <= 0 )
		throw 'illegal_function_call';
	this.everyInterval = interval;
	this.everyDefinition = definition;
	this.everyNow = true;
};
AOZ.prototype.everyOnOff = function( onOff )
{
	if ( ! this.everyInterval )
		throw 'every_not_defined';

	if ( onOff )
	{
		if ( !this.everyHandle )
		{
			this.everyNow = true;
		}
	}
	else
	{
		if ( this.everyHandle )
		{
			clearTimeout( this.everyHandle );
			this.everyHandle = 0;
		}
		this.everyNow = false;
		this.everyDefinition = null;
		this.section.every = null;
		this.everySection = null;
		this.everyReturn = -1;
		this.everyEndProc = -1;
	}
};

/////////////////////////////////////////////////////////////////////////
//
// SCREENS
//
/////////////////////////////////////////////////////////////////////////
AOZ.prototype.screenOpen = function( number, width, height, numberOfColors, pixelMode, palette )
{
	var screenDefinition = this.manifest.default.screen;
	if ( number < 0 )
		throw 'illegal_function_call';

	width = typeof width != 'undefined' ? width : screenDefinition.width;
	height = typeof height != 'undefined' ? height : screenDefinition.height;
	numberOfColors = typeof numberOfColors != 'undefined' ? numberOfColors : screenDefinition.numberOfColors;
	pixelMode = typeof pixelMode != 'undefined' ? pixelMode : screenDefinition.pixelMode;
	palette = typeof palette != 'undefined' ? palette : this.utilities.copyArray( this.defaultPalette );
	if ( !this.unlimitedScreens && number > 8 )
		throw 'illegal_function_call';

	screenDefinition.width = width;
	screenDefinition.height = height;
	screenDefinition.numberOfColors = numberOfColors;
	screenDefinition.pixelMode = pixelMode;
	screenDefinition.palette = palette;

	// Close screen if same number?
	var previousScreen = this.screensContext.getElement( this.currentContextName, number );
	if ( previousScreen )
		this.screenClose( number );
	else if ( this.currentScreen && this.currentScreen.number >= 0  )
		this.currentScreen.deactivate();
	this.currentScreen = new Screen( this, this.renderer, this.currentContextName, screenDefinition );
	this.currentScreen.number = number;
	this.screensContext.setElement( this.currentContextName, this.currentScreen, number, true );
	this.renderer.setModified();
	return this.currentScreen;
};
AOZ.prototype.screenClose = function( number )
{
	var screen = this.getScreen( number );

	// Close cloned screens
	var self = this;
	do
	{
		var redo = false;
		for ( var s = this.screensContext.getFirstElement( this.currentContextName ); s != null; s = this.screensContext.getNextElement( this.currentContextName ) )
		{
			if ( s.cloned == screen )
			{
				closeIt( s );
				redo = true;
				break;
			}
		}
	} while( redo );

	// Close screen
	closeIt( screen );
	this.renderer.setModified();

	function closeIt( screen )
	{
		screen.deactivate();
		self.screensContext.deleteElement( self.currentContextName, screen );
		self.currentScreen = self.screensContext.getLastElement( self.currentContextName );
		if ( !self.currentScreen )
		{
			self.currentScreen = new Screen.ScreenEmpty( self );
			self.currentScreen.number = -1;
		}
	}
};
AOZ.prototype.screenClone = function( number )
{
	//var screen = this.getScreen( number );
	var oldScreen = this.currentScreen;
	var screen = this.screenOpen( number, this.currentScreen.width, this.currentScreen.height, this.currentScreen.numberOfColors, this.currentScreen.pixelMode, this.currentScreen.palette );
	screen.setCloned( oldScreen );
	this.setScreen( oldScreen.number );
	this.renderer.setModified();
};
AOZ.prototype.setScreen = function( number )
{
	var screen = this.getScreen( number );
	if ( this.currentScreen )
		this.currentScreen.deactivate();
	this.currentScreen = screen;
	this.currentScreen.activate();
};
AOZ.prototype.getScreen = function( number )
{
	if ( typeof number == 'undefined' )
		return this.currentScreen;
	return this.screensContext.getElement( this.currentContextName, number, 'screen_not_opened' );
};
AOZ.prototype.getScreenOrCreateOne = function( number, width, height, numberOfColors, pixelMode )
{
	if ( typeof number == 'undefined' )
	{
		if ( this.currentScreen.emptyScreen )
			throw 'screen_not_opened'
		return this.currentScreen;
	}

	var screen = this.screensContext.getElement( this.currentContextName, number );
	if ( screen )
		return screen;

	// Create screen, and cursoff!
	this.screenOpen( number, width, height, numberOfColors, pixelMode );
	this.currentScreen.currentTextWindow.setCursor( false );
	return this.currentScreen;
};
AOZ.prototype.screenIn = function( number, position )
{
	if ( typeof number != 'undefined' )
	{
		return this.getScreen( number ).isIn( position ) ? number : -1;
	}
	for ( var screen = this.screensContext.getLastElement( this.currentContextName ); screen != null; screen = this.screensContext.getPreviousElement( this.currentContextName ) )
	{
		if ( screen.isIn( position ) )
		{
			return screen.number;
		}
	}
	return -1;
};
AOZ.prototype.mouseScreen = function( position )
{
	for ( var screen = this.screensContext.getLastElement( this.currentContextName ); screen !=null; screen = this.screensContext.getPreviousElement( this.currentContextName ) )
	{
		if ( screen.isIn( position ) )
		{
			return screen.number;
		}
	}
	return -1;
};

AOZ.prototype.screenToBack = function( number )
{
	var screen = this.getScreen( number );
	for ( var s = 0; s < this.screensZ.length; s++ )
	{
		if ( this.screensZ[ s ] == screen )
			break;
	}
	this.screensZ.splice( s, 1 );
	this.screensZ.splice( 0, 0, screen );
	this.renderer.setModified();
};
AOZ.prototype.screenSkew = function( number, xSkew, ySkew )
{
	var screen = this.getScreen( number );
	screen.xSkewDisplay = typeof xSkew != 'undefined' ? xSkew : screen.xSkewDisplay;
	screen.ySkewDisplay = typeof ySkew != 'undefined' ? ySkew : screen.ySkewDisplay;
	screen.setModified();
};
AOZ.prototype.screenScale = function( number, xScale, yScale )
{
	var screen = this.getScreen( number );
	screen.xScaleDisplay = typeof xScale != 'undefined' ? xScale : screen.xScaleDisplay;
	screen.yScaleDisplay = typeof yScale != 'undefined' ? yScale : screen.yScaleDisplay;
	screen.setModified();
};

AOZ.prototype.dualPlayfield = function( screen1, screen2 )
{
	screen1 = this.getScreen( screen1 );
	screen2 = this.getScreen( screen2 );
	screen1.setDualPlayfield( screen2 );
};
AOZ.prototype.dualPriority = function( screen1, screen2 )
{
	screen1 = this.getScreen( screen1 );
	screen2 = this.getScreen( screen2 );
	screen1.dualPriority( screen2 );
};
AOZ.prototype.setDefaultPalette = function( palette )
{
	for ( var p = 0; p < palette.length; p++ )
	{
		if ( typeof palette[ p ] != 'undefined' )
		{
			this.defaultPalette[ p ] = this.utilities.getModernColorString( palette[ p ] );
		}
	}
};
AOZ.prototype.colourBack = function( color, isIndex )
{
	if ( !isIndex )
		color = this.utilities.getModernColorString( color );
	else
	{
		if ( color < 0 )
			throw 'illegal_function_call';
		color %= this.currentScreen.numberOfColors;
		color = this.currentScreen.palette[ color ];
	}
	this.renderer.setBackgroundColor( color );
};
AOZ.prototype.swapZScreenPosition = function( screen1, screen2 )
{
	var z1, z2;
	for ( z1 = 0; z1 < this.screensZ.length; z1++ )
	{
		if ( this.screensZ[ z1 ] == screen1 )
			break;
	}
	for ( z2 = 0; z2 < this.screensZ.length; z2++ )
	{
		if ( this.screensZ[ z2 ] == screen2 )
			break;
	}
	var temp = this.screensZ[ z1 ];
	this.screensZ[ z1 ] = this.screensZ[ z2 ];
	this.screensZ[ z2 ] = temp;
};
AOZ.prototype.setBelowZScreenPosition = function( screen1, screen2 )
{
	var z1, z2;
	for ( z1 = 0; z1 < this.screensZ.length; z1++ )
	{
		if ( this.screensZ[ z1 ].number == screen1.number )
			break;
	}
	for ( z2 = 0; z2 < this.screensZ.length; z2++ )
	{
		if ( this.screensZ[ z2 ].number == screen2.number )
			break;
	}
	if ( z1 > z2 )
	{
		this.screensZ.splice( z1, 1 );
		this.screensZ.splice( z2, 0, screen1 );
	}
}
AOZ.prototype.default = function( contextName )
{
	this.screenOpen( 0 );
};











AOZ.prototype.setErrorNumber = function( number )
{
	this.error = number;
	this.lastError = this.error;
	this.lastErrorPos = this.sourcePos;
};
AOZ.prototype.doError = function( number )
{
	throw this.errors.getErrorFromNumber( number ).index;
};

AOZ.prototype.asc = function( text )
{
	if ( text != '' )
		return text.charCodeAt( 0 );
	return 0;
};
AOZ.prototype.repeat$ = function( text, number )
{
	if ( number < 0 )
		throw( 'illegal_text_window_parameter' );
	var result = '';
	for ( var n = 0; n < number; n++ )
		result += text;
	return result;
};
AOZ.prototype.str$ = function( value )
{
	if ( value === false )
		value = 0;
	if ( this.manifest.compilation.emulation.toLowerCase() != 'pc' )
	{
		if ( value === true )
			value = -1;
	}
	else
	{
		if ( value === true )
			value = 1;
	}
	var space = value >= 0 ? ' ' : '';

	var result;
	if ( this.fix == 16 )
		result = '' + value;
	else if ( this.fix >= 0 )
		result = value.toFixed( this.fix );
	else
		result = value.toExponential( -this.fix );

	// Fix -0.00 problem...
	if ( result.substring( 0, 3 ) == '-0.' )
	{
		var onlyZeros = true;
		for ( var p = 0; p < result.length; p++ )
		{
			var c = result.charAt( p );
			if ( c >= '1' && c <= '9' )
			{
				onlyZeros = false;
				break;
			}
		}
		if ( onlyZeros )
			result = result.substring( 1 );
	}
	return space + result;
};
AOZ.prototype.val = function( value )
{
	var base = 10;
	if ( value.substring( 0, 1 ) == '$' )
	{
		value = value.substring( 1 );
		base = 16;
	}
	if ( value.substring( 0, 1 ) == '%' )
	{
		value = value.substring( 1 );
		base = 2;
	}
	var result = parseFloat( value, base );
	if ( isNaN( result ) )
		result = 0;
	return result;
};
AOZ.prototype.space$ = function( value )
{
	if ( value < 0 )
		throw( 'illegal_function_call' );

	var result = '';
	for ( var s = 0; s < value; s++ )
		result += ' ';
	return result;
}
AOZ.prototype.toRadian = function( value )
{
	if ( this.degrees )
	 	return value / 180 * ( Math.PI / 2 );
	return value;
};
AOZ.prototype.toDegree = function( value )
{
	if ( this.degrees )
	 	return value * 180 / ( Math.PI / 2 );
	return value;
};

// Keyboard / mouse
AOZ.SHIFT = 0x0001;
AOZ.CAPSLOCK = 0x0004;
AOZ.CONTROL = 0x0008;
AOZ.ALT = 0x0010;
AOZ.META = 0x0040;

// JAVASCRIPT - AMIGA
AOZ.keyCodeToScanCode =
{
	37: 0x4f,		// Left
	39: 0x4e,		// Right
	38: 0x4c,		// Up
	40: 0x4d, 		// Down
	13: 0x44,		// Return
	46: 0x46,		// Del
	8:  0x41,		// Backspace
	34: 0,			// Page down
	112: 0x50,		// F1
	113: 0x51,		// F2
	114: 0x52,		// F3
	115: 0x53,		// F4
	116: 0x54,		// F5
	117: 0x55,		// F6
	118: 0x56,		// F7
	119: 0x57,		// F8
	120: 0x58,		// F9
	121: 0x59,		// F10
	122: 0x60,		// F11
	123: 0x61,		// F12
	48: 10,			// 0
	49: 1,			// 1
	50: 2,			// 2
	51: 3,			// 3
	52: 4,			// 4
	53: 5,			// 5
	54: 6,			// 6
	55: 7,			// 7
	56: 8,			// 8
	57: 9,			// 9
	96: 0x0f,		// Numpad 0
	97: 0x1d,		// Numpad 1
	98: 0x1e,		// Numpad 2
	99: 0x1f,		// Numpad 3
	100: 0x2d,		// Numpad 4
	101: 0x2e,		// Numpad 5
	102: 0x2f,		// Numpad 6
	103: 0x3d,		// Numpad 7
	104: 0x3e,		// Numpad 8
	105: 0x3f,		// Numpad 9
	144: 0,			// Numlock
	81: 0x10,		// Q
	87: 0x11,		// W
	69: 0x12,		// E
	82: 0x13,		// R
	84: 0x14,		// T
	89: 0x15,		// Y
	85: 0x16,		// U
	73: 0x17,		// I
	79: 0x18,		// O
	80: 0x19,		// P
	65: 0x20,		// A
	83: 0x21,		// S
	68: 0x22,		// D
	70: 0x23,		// F
	71: 0x24,		// G
	72: 0x25,		// H
	74: 0x26,		// J
	75: 0x27,		// K
	76: 0x28,		// L
	90: 0x31,		// Z
	88: 0x32,		// X
	67: 0x33,		// C
	86: 0x34,		// V
	66: 0x35,		// B
	78: 0x36,		// N
	77: 0x37,		// M
	222: 0x2a,		// '
	186: 0x29,		// ;
	219: 0x1a,		// [
	221: 0x1b,		//
	220: 0x2b,		// \
	188: 0x38, 		// ,
	190: 0x39,		// .
	191: 0x3a,		// /
	189: 0x0b, 		// -
	187: 0x0c, 		// =
	111: 0x5c,		// Numpad /
	106: 0x5d,		// Numpad *
	109: 0x4a, 		// Numpad -
	107: 0x5e, 		// Numpad +
	32:  0x40, 		// Space
	145: 0,			// Scroll lock
	110: 0x3c,		// Numpad .
	17:  0x63,		// Control
	91:  0x66,		// Meta
	18:  0x64, 		// Alt
	16:  0x60, 		// Shift
	45:  0,			// Ins
	36:  0,			// Home
	33:  0,			// Page up
	35:  0,			// End
	27:  0x45		// Esc
};
AOZ.keyPressed =
{
	// Javascript | Amiga
	amiga:
	{
		37: 29,
		39: 28,
		38: 30,
		40: 31,
		33: 28,
		34: 27,
		13: 'Enter',
		8: 'Backspace',
		46: 'Del',
		35: 'End',
		36: 'Home',
		145: 'ScrollLock',
		19: 'Pause',
		144: 'NumLock',
		9: 'Tab',
		20: 'Capslock',
		16: 'Shift',
		17: 'Control',
		91: 'Meta',
		112: 'F1',
		113: 'F2',
		114: 'F3',
		115: 'F4',
		116: 'F5',
		117: 'F6',
		118: 'F7',
		119: 'F8',
		120: 'F9',
		121: 'F10',
		122: 'F11',
		123: 'F12'

	}
};

AOZ.prototype.setKeyboard = function()
{
	this.keymap = [];
	for ( var c = 0; c < 256; c++ )
		this.keymap[ c ] = false;
	this.modifiers = 0;
	this.lastKeyPressed = 0;
	this.lastKeyPressedJavascript = 0;
	this.lastKeyPressedModifier = 0;
	this.lastScancode = 0;


	document.onkeydown = onKeyDown;
	document.onkeyup = onKeyUp;

	var self = this;
	function onKeyDown( event )
	{
		if ( event.defaultPrevented )
		{
			return;
		}
		self.modifiers = 0;
		self.modifiers |= event.shiftKey ? AOZ.SHIFT : 0;
		self.modifiers |= event.altKey ? AOZ.ALT : 0;
		self.modifiers |= event.ctrlKey ? AOZ.CONTROL : 0;
		self.modifiers |= event.metaKey ? AOZ.META : 0;
		self.keymap[ event.keyCode ] = true;
		self.lastEventKeycode = event.keyCode;

		self.lastKeyPressedModifiers = self.modifiers;
		self.lastScancodeJavascript = event.keyCode;
		self.lastScancode = event.keyCode;
		if ( event.key != 'Shift' && event.key != 'Control' && event.key != 'Meta' && event.key != 'Alt' )
		{
			self.lastKeyPressedJavascript = event.key;

			self.lastKeyPressed = self.lastKeyPressedJavascript;
			if ( self.manifest.compilation.emulation.toLowerCase() != 'pc' )
			{
				self.lastScancode = AOZ.keyCodeToScanCode[ event.keyCode ];
				if ( AOZ.keyPressed[ 'amiga' ][ event.keyCode ] )
					self.lastKeyPressed = AOZ.keyPressed[ 'amiga' ][ event.keyCode ];
			}

			// Function keys?
			if ( event.keyCode >= 112 && event.keyCode < 122 )
			{
				var number = event.keyCode - 112;
				if ( ( self.modifier & AOZ.SHIFT ) != 0 )
					number += 10;
				if ( self.key$[ number + 1 ] && self.key$[ number + 1 ] != '' )
				{
					self.startKeyboardInput( self.key$[ number + 1 ] );
				}
			}
		}

		// Control-C?
		if ( event.keyCode == 67 && ( self.modifiers & AOZ.CONTROL ) != 0 && self.breakOn == true )
		{
			self.break = true;
		}
	};
	function onKeyUp( event )
	{
		if ( event.defaultPrevented || event.repeat )
		{
			return;
		}
		self.modifiers = 0;
		self.modifiers |= event.shiftKey ? AOZ.SHIFT : 0;
		self.modifiers |= event.altKey ? AOZ.ALT : 0;
		self.modifiers |= event.ctrlKey ? AOZ.CONTROL : 0;
		self.modifiers |= event.metaKey ? AOZ.META : 0;
		self.keymap[ event.keyCode ] = false;
	}
};
AOZ.prototype.keyState = function( code )
{
	if ( this.manifest.compilation.emulation.toLowerCase() != 'pc' )
	{
		for ( var k in AOZ.keyCodeToScanCode )
		{
			if ( AOZ.keyCodeToScanCode[ k ] == code )
			{
				code = parseInt( k );
				break;
			}
		}
	}
	if ( code )
		return this.keymap[ code ];
	return false;
};
AOZ.prototype.keyShift = function( shift )
{
	return this.modifiers;
};
AOZ.prototype.startKeyboardInput = function( text )
{
	var self = this;
	self.positionKey$ = 0;
	self.stringKey$ += text;
	self.lastScancode = 0;
	self.lastKeyPressed = 0;
	self.modifiers = 0;
	self.clearKeyFlag = false;
	if ( !self.handleKey$ )
	{
		setTimeout( function()
		{
			self.handleKey$ = setInterval( function()
			{
				if ( self.clearKeyFlag )
				{
					clearInterval( self.handleKey$ );
					self.handleKey$ = null;
					self.stringKey$ = '';
				}
				else
				{
					self.modifiers = 0;
					if ( self.stringKey$.indexOf( '$(SCAN', self.positionKey$ ) == self.positionKey$ )
					{
						var end = self.stringKey$.indexOf( 'SCAN)$', self.positionKey$ + 6 );
						if ( end > 0 )
						{
							self.lastScancode = parseInt( self.stringKey$.substring( self.positionKey$ + 6, end ) );
							switch ( self.lastScancode )
							{
								case 13: self.lastKeyPressed = 13; break;	// Return
								case 37: self.lastKeyPressed = 29; break;	// Left
								case 39: self.lastKeyPressed = 28; break;	// Right
								case 38: self.lastKeyPressed = 30; break;  	// Up
								case 40: self.lastKeyPressed = 31; break;	// Down
							}
						}
						self.positionKey$ = end + 6;
					}
					else if ( self.stringKey$.indexOf( '$(MASK', self.positionKey$ ) == self.positionKey$ )
					{
						var end = self.stringKey$.indexOf( 'MASK)$', self.positionKey$ + 6 );
						if ( end > 0 )
						{
							var mask = parseInt( self.stringKey$.substring( self.positionKey$ + 6, end ) );
							if ( ( mask & 0x0003 ) != 0 )			// Shift
								self.modifiers |= AOZ.SHIFT;
							else if ( ( mask & 0x0004 ) != 0 )		// Caps lock
								self.modifiers |= AOZ.SHIFT;
							else if ( ( mask & 0x0008 )	!= 0 )		// Ctrl
								self.modifiers |= AOZ.CONTROL;
							else if ( ( mask & 0x0030 ) != 0 )		// Alt
								self.modifiers |= AOZ.ALT;
							else if ( ( mask & 0x0040 ) != 0 )		// Meta
								self.modifiers |= AOZ.META;
						}
						self.positionKey$ = end + 6;
					}
					else

					{
						self.lastKeyPressed = self.stringKey$.charCodeAt( self.positionKey$++ );
						self.lastKeyPressedModifiers = 0;
					}
					if ( self.positionKey$ >= self.stringKey$.length )
					{
						clearInterval( self.handleKey$ );
						self.handleKey$ = null;
						self.stringKey$ = '';
					}
				}
			}, 20 );
		}, 100 );
	}
};
AOZ.prototype.debugOnKeyPress = function( key )
{
	if ( this.lastKeyPressed == key.charCodeAt( 0 ) )
	{
		debugger;
	}
};
AOZ.prototype.putKey = function( text )
{
	this.startKeyboardInput( text );
};
AOZ.prototype.clearKey = function()
{
	this.lastKeyPressed = 0;
	this.clearKeyFlag = true;
};
AOZ.prototype.inkey$ = function()
{
	var key = this.lastKeyPressed;
	if ( key )
	{
		this.lastKeyPressed = null;
		return key;
	}
	return '';
};
AOZ.prototype.scanShift = function()
{
	var key = this.lastKeyPressedModifiers;
	if ( key )
	{
		this.lastKeyPressedModifiers = null;
		return key;
	}
	return '';
};
AOZ.prototype.scanCode = function()
{
	if ( this.lastScancode )
	{
		var key = this.lastScancode;
		this.lastScancode = 0;
		return key;
	}
	return 0;
};
AOZ.prototype.waitKey = function()
{
	this.lastKeyPressedJavascript = null;
};
AOZ.prototype.waitKey_wait = function()
{
	if ( this.lastKeyPressedJavascript )
	{
		this.waiting = null;
		this.lastKeyPressedJavascript = null;
		this.lastScancodeJavascript = 0;
		this.lastKeyPressed = null;
		this.lastScancode = 0;
		this.lastKeyPressedModifiers = 0;
	}
};
AOZ.prototype.waitVbl = function()
{
	this.waitVblCount = 1;
};
AOZ.prototype.waitVbl_wait = function()
{
	this.waitVblCount--;
	if ( this.waitVblCount == 0 )
	{
		this.waiting = null;
	}
};
AOZ.prototype.setKey$ = function( value, number, mask )
{
	if ( number <= 0 || number > 20 )
		throw 'illegal_function_call';
	this.key$[ number ] = value;
};
AOZ.prototype.getKey$ = function( number, mask )
{
	if ( number < 0 || number > 20 )
		throw 'illegal_function_call';
	return this.key$[ number ];
};
AOZ.prototype.scan$ = function( number, mask )
{
	var result = '$(SCAN' + number + 'SCAN)$';
	if ( typeof mask != 'undefined' )
	{
		result += '$(MASK' + mask + 'MASK)$';
	}
	return result;
};

AOZ.prototype.setVariable = function( variable, value )
{
	if ( !variable.dimensions )
	{
		if ( variable.parent )
			this.section.parent.vars[ variable.name ] = value;
		else if ( variable.root )
			this.section.root.vars[ variable.name ] = value;
		else
			this.section.vars[ variable.name ] = value;
	}
	else
	{
		if ( variable.parent )
			this.section.parent.vars[ variable.name ].setValue( variable.dimensions, value );
		else if ( variable.root )
			this.section.root.vars[ variable.name ].setValue( variable.dimensions, value );
		else
			this.section.vars[ variable.name ].setValue( variable.dimensions, value );
	}
};
AOZ.prototype.getVariable = function( variable )
{
	if ( !variable.dimensions )
	{
		if ( variable.parent )
			return this.section.parent.vars[ variable.name ];
		else if ( variable.root )
			return this.section.root.vars[ variable.name ];
		else
			return this.section.vars[ variable.name ];
	}
	else
	{
		if ( variable.parent )
			return this.section.parent.vars[ variable.name ].getValue( variable.dimensions );
		else if ( variable.root )
			return this.section.root.vars[ variable.name ].getValue( variable.dimensions );
		else
			return this.section.vars[ variable.name ].getValue( variable.dimensions );
	}
};
AOZ.prototype.input = function( args )
{
	this.inputArgs = args;
	this.inputPosition = 0;
	this.inputString = '';
	this.lastKeyPressed = 0;
	this.lastScanCode = 0;
	this.inputCursor = 0;
	if ( args.text != '' )
		this.currentScreen.currentTextWindow.print( args.text );
	else
		this.currentScreen.currentTextWindow.print( '?' );
	this.currentScreen.currentTextWindow.print( ' ' );
	this.inputXCursor = this.currentScreen.currentTextWindow.xCursor;
	this.currentScreen.currentTextWindow.anchorYCursor();
};
AOZ.prototype.input_wait = function( args )
{
	if ( this.lastKeyPressedJavascript )
	{
		switch ( this.lastKeyPressedJavascript )
		{
			case 'Enter':
				var previousComma = 0;
				var inputString;
				while( true )
				{
					var comma = this.inputString.indexOf( ',', previousComma );
					if ( this.inputArgs.variables.length > 1 && comma >= 0 && !this.inputArgs.isLineInput )
					{
						inputString = this.inputString.substring( previousComma, comma );
						previousComma = comma + 1;
					}
					else
					{
						inputString = this.inputString.substring( previousComma );
						previousComma = this.inputString.length;
					}
					var variable = this.inputArgs.variables[ this.inputPosition ];
					var value;
					if ( variable.type == 0 )
						value = inputString.length > 0 ? parseInt( inputString ) : 0;
					else if ( variable.type == 1 )
						value = inputString.length > 0 ? parseFloat( inputString ) : 0;
					else
						value = inputString;
					if ( variable.type != 2 && isNaN( value ) )
					{
						this.currentScreen.currentTextWindow.print( '', true );
						this.currentScreen.currentTextWindow.print( this.errors.getError( 'please_redo_from_start' ).message );
						this.inputXCursor = this.currentScreen.currentTextWindow.xCursor;
						this.currentScreen.currentTextWindow.anchorYCursor();
						this.inputPosition = 0;
						this.inputString = '';
						break;
					}
					this.setVariable( variable, value );
					this.inputPosition++;
					if ( this.inputPosition >= this.inputArgs.variables.length )
					{
						if ( this.inputArgs.newLine )
							this.currentScreen.currentTextWindow.print( '', true );
						this.waiting = null;
						break;
					}
					if ( previousComma >= this.inputString.length )
					{
						this.currentScreen.currentTextWindow.locate( { x: this.inputXCursor, y: this.currentScreen.currentTextWindow.yCursorAnchor } );
						this.currentScreen.currentTextWindow.cMove( { x: this.inputString.length, y: 0 } );
						this.currentScreen.currentTextWindow.print( '', true );
						this.currentScreen.currentTextWindow.print( '?? ' );
						this.inputXCursor = this.currentScreen.currentTextWindow.xCursor;
						this.currentScreen.currentTextWindow.anchorYCursor();
						this.inputString = '';
						this.inputCursor = 0;
						break;
					}
				}
				break;
			case 'ArrowLeft':
				if ( this.inputCursor > 0 )
				{
					this.inputCursor--;
					this.currentScreen.currentTextWindow.locate( { x: this.inputXCursor, y: this.currentScreen.currentTextWindow.yCursorAnchor } );
					this.currentScreen.currentTextWindow.cMove( { x: this.inputCursor, y: 0 } );
				}
				break;
			case 'ArrowRight':
				if ( this.inputCursor < this.inputString.length )
				{
					this.inputCursor++;
					this.currentScreen.currentTextWindow.locate( { x: this.inputXCursor, y: this.currentScreen.currentTextWindow.yCursorAnchor } );
					this.currentScreen.currentTextWindow.cMove( { x: this.inputCursor, y: 0 } );
				}
				break;
			case 'Backspace':
				if ( this.inputCursor > 0 )
				{
					this.inputCursor--;
					this.inputString = this.inputString.substring( 0, this.inputCursor ) + this.inputString.substring( this.inputCursor + 1 );
					this.currentScreen.currentTextWindow.locate( { x: this.inputXCursor, y: this.currentScreen.currentTextWindow.yCursorAnchor } );
					this.currentScreen.currentTextWindow.print( this.inputString + ' ' );
					this.currentScreen.currentTextWindow.locate( { x: this.inputXCursor, y: this.currentScreen.currentTextWindow.yCursorAnchor } );
					this.currentScreen.currentTextWindow.cMove( { x: this.inputCursor, y: 0 } );
				}
				break;
			case 'Del':
				if ( this.inputCursor < this.inputString.length )
				{
					this.inputString = this.inputString.substring( 0, this.inputCursor ) + this.inputString.substring( this.inputCursor + 1 );
					this.currentScreen.currentTextWindow.locate( { x: this.inputXCursor, y: this.currentScreen.currentTextWindow.yCursorAnchor } );
					this.currentScreen.currentTextWindow.print( this.inputString + ' ' );
					this.currentScreen.currentTextWindow.locate( { x: this.inputXCursor, y: this.currentScreen.currentTextWindow.yCursorAnchor } );
					this.currentScreen.currentTextWindow.cMove( { x: this.inputCursor, y: 0 } );
				}
				break;
			default:
				if ( this.lastKeyPressedJavascript.length == 1 )
				{
					// Normal character
					this.inputString = this.inputString.substring( 0, this.inputCursor ) + this.lastKeyPressedJavascript + this.inputString.substring( this.inputCursor );
					this.inputCursor++;
					this.currentScreen.currentTextWindow.locate( { x: this.inputXCursor, y: this.currentScreen.currentTextWindow.yCursorAnchor } );
					this.currentScreen.currentTextWindow.print( this.inputString );
					this.currentScreen.currentTextWindow.locate( { x: this.inputXCursor, y: this.currentScreen.currentTextWindow.yCursorAnchor } );
					this.currentScreen.currentTextWindow.cMove( { x: this.inputCursor, y: 0 }  );
				}
				break;
		}
		this.lastKeyPressed = null;
		this.lastScanCode = 0;
		this.lastKeyPressedJavascript = null;
		this.lastScancodeJavascript = 0;
	}
};

AOZ.prototype.input$ = function( resultNumber, args )
{
	this.resultNumber = resultNumber;
	this.input$String = '';
	this.input$Length = args[ 0 ];
	if ( this.input$length <= 0 )
		throw 'illegal_function_call';
	this.lastKeyPressed = 0;
	this.lastScanCode = 0;
};
AOZ.prototype.input$_wait = function( args )
{
	if ( this.lastKeyPressed )
	{
		this.input$String += String.fromCharCode( this.lastKeyPressed );
		this.lastKeyPressed = 0;
	}
	if ( this.input$String.length >= this.input$Length )
	{
		this.waiting = null;
		this.results[ this.resultNumber ] = this.input$String;
	}
};

// Mouse
AOZ.buttonToMouse =
{
	0: 0x0001,
	1: 0x0004,
	2: 0x0002
};
AOZ.prototype.setMouse = function()
{
	this.renderer.canvas.onmousemove = onMouseMove;
	this.renderer.canvas.onmouseleave = onMouseLeave;
	this.renderer.canvas.onmouseenter = onMouseEnter;
	this.renderer.canvas.onmousedown = onMouseDown;
	this.renderer.canvas.onmouseup = onMouseUp;
	this.renderer.canvas.onclick = onClick;
	this.renderer.canvas.ondblclick = onDblClick;
	this.renderer.canvas.oncontextmenu = onContextMenu;
	document.onclick = onClickDocument;
	if ( document.body.addEventListener)
	{
    	document.body.addEventListener( 'mousewheel', onMouseWheel, false );
    	document.body.addEventListener( 'DOMMouseScroll', onMouseWheel, false );
	}
	else
	{
		document.body.attachEvent( 'onmousewheel', onMouseWheel );
	}

	this.xMouse = 0;
	this.yMouse = 0;
	this.mouseInside = false;
	this.mouseButtons = 0;
	this.clickMouse = 0;
	this.doubleClick = false;
	this.wheelMouse = 0;
	this.mouseCurrent = 'auto';
	this.mouseShown = true;
	this.limitMouse = null;

	var self = this;
	function onMouseMove( event )
	{
		self.xMouseDebug = event.clientX;
		self.yMouseDebug = event.clientY;
		//console.log( "Client X: " + event.clientX + " - Client Y: " + event.clientY );
		var x = ( event.clientX - self.renderer.canvas.offsetLeft - self.renderer.xLeftDraw ) / self.renderer.xRatioDisplay + self.renderer.hardLeftX;
		var y = ( event.clientY - self.renderer.canvas.offsetTop - self.renderer.yTopDraw ) / self.renderer.yRatioDisplay + self.renderer.hardTopY;
		if ( self.limitMouse )
		{
			if ( x < self.limitMouse.x )
				x = self.limitMouse.x;
			if ( x > self.limitMouse.x + self.limitMouse.width )
				x = self.limitMouse.x + self.limitMouse.width;
			if ( y < self.limitMouse.y )
				y = self.limitMouse.y;
			if ( y > self.limitMouse.y + self.limitMouse.height )
				y = self.limitMouse.y + self.limitMouse.height;
		}
		self.xMouse = x;
		self.yMouse = y;
		//console.log( "X Mouse: " + self.xMouse + " - Y Mouse: " + self.yMouse );
		console.log( "." );
	}
	function onMouseEnter( event )
	{
		self.mouseInside = true;
	}
	function onMouseLeave( event )
	{
		self.mouseInside = false;
	}
	function onMouseWheel( event )
	{
		self.wheelMouse = Math.max( -1, Math.min( 1, ( event.wheelDelta || -event.detail ) ) );
	}
	function onMouseDown( event )
	{
		self.mouseButtons |= AOZ.buttonToMouse[ event.button ];
		self.clickMouse = self.mouseButtons;
	}
	function onMouseUp( event )
	{
		self.mouseButtons &= ~AOZ.buttonToMouse[ event.button ];
	}
	function onClick( event )
	{
		self.welcomeClick = true;
	}
	function onClickDocument( event )
	{
		self.welcomeClick = true;
		if ( self.renderer.isInFullScreenIcon( { x: self.xMouseDebug, y: self.yMouseDebug } ) )
		{
			self.renderer.swapFullScreen();
		}
	}
	function onDblClick( event )
	{
		self.doubleClick = true;
	}
	function onContextMenu( event )
	{
		if (event.preventDefault != undefined )
		 	event.preventDefault();
		if( event.stopPropagation != undefined )
		 	event.stopPropagation();
	}
};
AOZ.prototype.setMouseLimits = function( rectangle )
{
	this.limitMouse = rectangle;
};
AOZ.prototype.xor = function( a, b )
{
	return ( a && !b ) || ( !a && b );
};
AOZ.prototype.mouseScreen = function()
{
	return this.screenIn( undefined, this.xMouse, this.yMouse );
};
AOZ.prototype.mouseWheel = function()
{
	var temp = this.wheelMouse;
	this.wheelMouse = 0;
	return temp;
};
AOZ.prototype.showMouse = function( flag )
{
	if ( flag != this.mouseShown )
	{
		this.mouseShown = flag;
		if ( !flag )
			this.renderer.canvas.style.cursor = 'none';
		else
			this.renderer.canvas.style.cursor = this.mouseCurrent;
	}
};
AOZ.prototype.mouseClick = function()
{
	var click = this.clickMouse;
	this.clickMouse = 0;
	return click;
};
AOZ.prototype.changeMouse = function( type )
{
	switch ( type )
	{
		case 1:
		default:
			this.mouseCurrent = 'auto';
			break;
		case 2:
			this.mouseCurrent = 'crosshair';
			break;
		case 3:
			this.mouseCurrent = 'wait';
			break;
	}
	if ( this.mouseShown )
		this.renderer.canvas.style.cursor = this.mouseCurrent;
};
AOZ.prototype.xHard = function( x, screen )
{
	screen = this.getScreen( screen );
};
AOZ.prototype.yHard = function( y, screen )
{
	screen = this.getScreen( screen );
	return y * screen.renderScaleY + screen.y;
};
AOZ.prototype.xScreen = function( x, screen )
{
	screen = this.getScreen( screen );
	return ( x - screen.x ) / screen.renderScaleX / screen.displayScale.x;
};
AOZ.prototype.yScreen = function( y, screen )
{
	screen = this.getScreen( screen );
	return ( y - screen.y ) / screen.renderScaleY / screen.displayScale.x;
};
AOZ.prototype.isIn = function( x, y )
{
	x = ( x - screen.x ) / screen.renderScaleX;
	y = ( y - screen.y ) / screen.renderScaleY;
	this.currentScreen.isIn( x, y );
};
AOZ.prototype.hZone = function( number, x, y )
{
	var screen = this.getScreen( number );
	x = ( x - screen.x ) / screen.renderScaleX;
	y = ( y - screen.y ) / screen.renderScaleY;
	return screen.zone( number, x, y );
};
AOZ.prototype.mouseZone = function()
{
	return this.hZone( undefined, this.xMouse, this.yMouse );
};
AOZ.prototype.setXMouse = function( x )
{
	this.xMouse = x;
};
AOZ.prototype.setYMouse = function( y )
{
	this.yMouse = y;
};
AOZ.prototype.getXMouse = function( x )
{
	return this.xMouse;
};
AOZ.prototype.getYMouse = function( y )
{
	return this.yMouse;
};

// Data/read
AOZ.prototype.read = function( type )
{
	if ( this.section.dataPosition >= this.section.datas.length )
		throw( 'out_of_data' );

	var value = this.section.datas[ this.section.dataPosition++ ];
	if ( typeof value == 'function' )
		value = value.call( this.section );
	if ( type == 0 || type == 1 )
	{
		if ( typeof value == 'string' )
			throw( 'type_mismatch' );
	}
	else
	{
		if ( typeof value != 'string' )
			throw( 'type_mismatch' );
	}
	return value;
};
AOZ.prototype.add = function( variable, plus, start, end )
{
	var number = this.getVariableFromDescription( variable );
	number += plus;
	if ( typeof start != 'undefined' && typeof end != 'undefined' )
	{
		if ( number > end )
			number = start;
		if ( number < start )
			number = end;
	}
	this.setVariableFromDescription( variable, number );
};
AOZ.prototype.getVariableFromDescription = function( variable )
{
	var result;
	if ( variable.dimensions )
	{
		if ( !variable.root )
			result = this.section.vars[ variable.name ].getValue( variable.dimensions );
		else
			result = this.sections[ 1 ].section.vars[ variable.name ].getValue( variable.dimensions );
	}
	else
	{
		if ( !variable.root )
			result = this.section.vars[ variable.name ];
		else
			result = this.sections[ 1 ].section.vars[ variable.name ];
	}
	return result;
};
AOZ.prototype.setVariableFromDescription = function( variable, value )
{
	if ( variable.dimensions )
	{
		if ( !variable.root )
			this.section.vars[ variable.name ].setValue( variable.dimensions, value );
		else
			this.sections[ 1 ].section.vars[ variable.name ].setValue( variable.dimensions, value );
	}
	else
	{
		if ( !variable.root )
			this.section.vars[ variable.name ] = value;
		else
			this.sections[ 1 ].section.vars[ variable.name ] = value;
	}
};


// AOZ Array class
function AArray( aoz, defaultValue, oneBased )
{
	this.aoz = aoz;
	this.defaultValue = defaultValue;
	this.oneBased = oneBased;
};
AArray.prototype.dim = function( dimensions )
{
	if ( typeof this.array != 'undefined' )
	{
		this.aoz.error = 10;
		return;
	}
	var self = this;
	this.dimensions = dimensions;
	this.array = createArray( 0 );
	function createArray( d )
	{
		var arr = [];
		if ( d == dimensions.length - 1 )
		{
			for ( var dd = 0; dd <= dimensions[ d ]; dd++ )
				arr[ dd ] = self.defaultValue;
		}
		else
		{
			for ( var dd = 0; dd <= dimensions[ d ]; dd++ )
				arr[ dd ] = createArray( d + 1 );
		}
		return arr;
	}
}
AArray.prototype.getValue = function( dimensions )
{
	var obj = this.getVariable( dimensions );
	return obj.array[ obj.pointer ];
};
AArray.prototype.setValue = function( dimensions, value )
{
	var obj = this.getVariable( dimensions );
	obj.array[ obj.pointer ] = value;
};
AArray.prototype.sort = function( dimensions )
{
	var obj = this.getVariable( dimensions );
	if ( typeof this.defaultValue == 'string' )
		obj.array = obj.array.sort();
	else
	{
		obj.array = obj.array.sort( function( a, b )
		{
			return a - b;
		} );
	}
};
AArray.prototype.match = function( dimensions, value )
{
	if ( dimensions.length > 1 )
		throw 'illegal_function_call';
	var arr = this.getVariable( dimensions ).array;
	for ( var d = 0; d < arr.length; d++ )
	{
		if ( arr[ d ] == value )
		{
			return d;
		}
	}
	return -1;
};
AArray.prototype.inc = function( dimensions )
{
	var obj = this.getVariable( dimensions );
	obj.array[ obj.pointer ]++;
};
AArray.prototype.dec = function( dimensions )
{
	var obj = this.getVariable( dimensions );
	obj.array[ obj.pointer ]--;
};
AArray.prototype.getVariable = function( dimensions )
{
	if ( typeof this.array == 'undefined' )
		throw 'non_dimensionned_array';
	var pArr = this.array;
	for ( var d = 0; d < this.dimensions.length - 1; d++ )
	{
		dd = dimensions[ d ] - this.oneBased;
		if ( dd < 0 || dd > this.dimensions[ d ] )
			throw 'illegal_function_call';
		pArr = pArr[ dd ];
	}
	var dd = dimensions[ d ] - this.oneBased;
	if ( dd < 0 || dd > this.dimensions[ d ] )
		throw 'illegal_function_call';
	return { array: pArr, pointer: dd };
};


// Instruction set
AOZ.prototype.string$ = function( text, number )
{
	if ( number < 0 )
		throw 'illegal_function_call';
	var result = '';
	var chr = text.charAt( 0 );
	for ( var c = 0; c < number; c++ )
		result += chr;
	return result;
};
AOZ.prototype.flip$ = function( text )
{
	var result = '';
	for ( var c = text.length -1; c >= 0; c-- )
		result += text.charAt( c );
	return result;
};
AOZ.prototype.getLeft$ = function( text, position )
{
	if ( position < 0 )
		throw( 'illegal_function_call' );
	return text.substring( 0, position );
};
AOZ.prototype.setLeft$ = function( text, variable, position )
{
	this.setMid$( text, variable, 0, position );
};
AOZ.prototype.getMid$ = function( text, start, len )
{
	if ( start < 0 )
		throw( 'illegal_function_call' );

	start = Math.max( start - 1, 0 );
	if ( typeof len == 'undefined' )
		len = text.length;
	else if ( len < 0 )
		throw( 'illegal_function_call )' );

	return text.substr( start, len );
};
AOZ.prototype.setMid$ = function( text, variable, start, len )
{
	if ( start < 0 )
		throw( 'illegal_function_call' );
	start = Math.max( start - 1, 0 );

	if ( typeof len == 'undefined' )
		len = text.length;
	else if ( len < 0 )
		throw( 'illegal_function_call )' );

	var value = this.getVariable( variable );
	if ( start > value.length )
		start = value.length;
	len = Math.min( len, text.length );
	if ( start + len > value.length )
		len = value.length - start;
	value = value.substring( 0, start ) + text.substr( 0, len ) + value.substring( start + len );
	this.setVariable( variable, value );
};
AOZ.prototype.getRight$ = function( text, len )
{
	if ( len < 0 )
		throw( 'illegal_function_call )' );

	return text.substring( text.length - len );
};
AOZ.prototype.setRight$ = function( text, variable, len )
{
	var value = this.getVariable( variable );
	if ( typeof len == 'undefined' )
		len = value.length;
	if ( len < 0 )
		throw( 'illegal_function_call )' );

	len = Math.min( len, value.length );
	var start = Math.max( 0, value.length - len );
	len = Math.min( len, text.length );
	value = value.substring( 0, start ) + text.substr( 0, len ) + value.substring( start + len );
	this.setVariable( variable, value );
};
AOZ.prototype.subtractString = function( string1, string2 )
{
	return this.utilities.replaceStringInText( string1, string2, '' );
};
AOZ.prototype.wait = function( args )
{
	var delay = args[ 0 ];
	if ( delay < 0 )
		throw( 'illegal_function_call' );
	this.waitEnd = new Date().getTime() + ( this.manifest.compilation.emulation.toLowerCase() != 'pc' ? delay * 20 : delay * 1000 );
};
AOZ.prototype.wait_wait = function()
{
	var now = new Date().getTime();
	if ( now >= this.waitEnd )
		this.waiting = null;
};
AOZ.prototype.bin$ = function( value, digits )
{
	var result = value.toString( 2 );
	if ( typeof value != 'undefined' )
	{
		if ( value < 0 )
			throw 'illegal_function_call';
		for ( var l = result.length; l < digits; l++ )
			result = '0' + result;
	}
	return '%' + result;
};
AOZ.prototype.hex$ = function( value, digits )
{
	var result = value.toString( 16 ).toUpperCase();
	if ( typeof value != 'undefined' )
	{
		if ( value < 0 )
			throw 'illegal_function_call';
		for ( var l = result.length; l < digits; l++ )
			result = '0' + result;
	}
	return '$' + result;
};
AOZ.prototype.instr = function( text, search, position )
{
	if ( position < 0 )
		throw 'illegal_function_call';
	if ( typeof position == 'undefined' )
		position = 1;
	position = Math.max( position - 1, 0 );
	var result = text.indexOf( search, position );
	if ( result >= 0 )
		return result + 1;
	return 0;
};
AOZ.prototype.setTimer = function( time )
{
	if ( time < 0 )
		throw 'illegal_function_call';
	this.timer = time;
};
AOZ.prototype.getTimer = function()
{
	return this.manifest.compilation.emulation.toLowerCase() == 'pc' ?  this.timer : Math.floor( this.timer );
};

// Mersene Twister random generator
AOZ.prototype.rnd = function( value )
{
	if ( this.merseneTwister )
	{
		var number = this.merseneTwister.genrand_res53() * ( value + 1 );
		return Math.floor( number );
	}
	if ( Math.floor( value ) == value )
		return Math.floor( Math.random() * ( value + 1 ) );
	else
		return Math.random() * value;
};
AOZ.prototype.randomize = function( initial )
{
	this.merseneTwister = new MersenneTwister( initial );
}

function MersenneTwister( seed )
{
	if ( seed == undefined )
	{
	  	seed = new Date().getTime();
	}
	this.N = 624;
	this.M = 397;
	this.MATRIX_A = 0x9908b0df;
	this.UPPER_MASK = 0x80000000;
	this.LOWER_MASK = 0x7fffffff;

	this.mt = new Array(this.N);
	this.mti=this.N+1;

	this.init_genrand(seed);
}

MersenneTwister.prototype.init_genrand = function( s )
{
	this.mt[ 0 ] = s >>> 0;
	for ( this.mti=1; this.mti < this.N; this.mti++ )
	{
		var s = this.mt[ this.mti -1 ] ^ ( this.mt[ this.mti -1 ] >>> 30 );
		this.mt[ this.mti ] = ( ( ( ( ( s & 0xffff0000 ) >>> 16 ) * 1812433253 ) << 16 ) + ( s & 0x0000ffff ) * 1812433253 ) + this.mti;
		this.mt[ this.mti ] >>>= 0;
	}
}
MersenneTwister.prototype.genrand_int32 = function()
{
	var y;
	var mag01 = new Array( 0x0, this.MATRIX_A );

	if ( this.mti >= this.N )
	{
	  	var kk;

	  	if ( this.mti == this.N+1 )
			this.init_genrand( 5489 );

		for ( kk=0; kk< this.N - this.M; kk++ )
		{
			y = ( this.mt[ kk ] & this.UPPER_MASK ) | ( this.mt[ kk + 1 ] & this.LOWER_MASK );
			this.mt[ kk ] = this.mt[ kk + this.M ] ^ ( y >>> 1 ) ^ mag01[ y & 0x1 ];
	  	}
		for ( ; kk < this.N - 1; kk++ )
		{
			y = ( this.mt[ kk ] & this.UPPER_MASK ) | ( this.mt[ kk + 1 ] & this.LOWER_MASK );
			this.mt[ kk ] = this.mt[ kk + ( this.M - this.N ) ] ^ ( y >>> 1 ) ^ mag01[ y & 0x1 ];
	  	}
	  	y = ( this.mt[ this.N - 1] & this.UPPER_MASK ) | ( this.mt[ 0 ] & this.LOWER_MASK );
	  	this.mt[ this.N - 1 ] = this.mt[ this.M - 1 ] ^ ( y >>> 1 ) ^ mag01[ y & 0x1 ];
  		this.mti = 0;
	}

	y = this.mt[ this.mti++ ];

	y ^= ( y >>> 11 );
	y ^= ( y << 7 ) & 0x9d2c5680;
	y ^= ( y << 15 ) & 0xefc60000;
	y ^= ( y >>> 18 );

	return y >>> 0;
}

MersenneTwister.prototype.genrand_real1 = function()
{
	return this.genrand_int32()*(1.0/4294967295.0);
}
MersenneTwister.prototype.genrand_res53 = function()
{
	var a = this.genrand_int32() >>> 5, b = this.genrand_int32() >>> 6;
	return( a * 67108864.0 + b ) * ( 1.0 / 9007199254740992.0 );
}

//
// MEMORY BANKS
//
AOZ.prototype.allocMemoryBlock = function( data, endian )
{
	var memoryBlock = new MemoryBlock( this, data, endian );
	memoryBlock.memoryHash = this.memoryNumbers++;
	if ( this.memoryNumber > 9000 )
		this.memoryNumber = 1;
	this.memoryBlocks.push( memoryBlock );
	return memoryBlock;
};
AOZ.prototype.freeMemoryBlock = function( block )
{
	for ( var b = 0; b < this.memoryBlocks.length; b++ )
	{
		if ( this.memoryBlocks[ b ] == block )
		{
			this.memoryBlocks = this.utilities.slice( this.memoryBlocks, b, 1 );
			break;
		}
	}
};
AOZ.prototype.getMemoryBlockFromAddress = function( address )
{
	var index = Math.floor( address / this.memoryHashMultiplier );
	for ( var b = 0; b < this.memoryBlocks.length; b++ )
	{
		if ( this.memoryBlocks[ b ].memoryHash == index )
		{
			return this.memoryBlocks[ b ];
		}
	}
	throw 'illegal_function_call';
};
AOZ.prototype.getMemory = function( number )
{
	var result;
	var index = Math.floor( number / this.memoryHashMultiplier );
	if ( index == 0 )
	{
		var bank = this.banks.getBank( number );
		if ( !bank.isType( [ 'picpac', 'amal', 'work', 'tracker', 'data' ] ) )
			throw 'bank_type_mismatch';
		result =
		{
			bank: bank,
			block: bank.getElement( 1 ),
			start: this.banks.getStart( number ),
			length: this.banks.getLength( number )
		};
	}
	else
	{
		var block = this.getMemoryBlockFromAddress( number );
		result =
		{
			block: block,
			start: number,
			length: block.length
		}
	}
	return result;
};
AOZ.prototype.poke = function( address, value )
{
	var memoryBlock = this.getMemoryBlockFromAddress( address );
	memoryBlock.poke( address, value );
};
AOZ.prototype.doke = function( address, value )
{
	var memoryBlock = this.getMemoryBlockFromAddress( address );
	memoryBlock.doke( address, value );
};
AOZ.prototype.loke = function( address, value )
{
	var memoryBlock = this.getMemoryBlockFromAddress( address );
	memoryBlock.loke( address, value );
};
AOZ.prototype.peek = function( address )
{
	var memoryBlock = this.getMemoryBlockFromAddress( address );
	return memoryBlock.peek( address, false );
};
AOZ.prototype.deek = function( address )
{
	var memoryBlock = this.getMemoryBlockFromAddress( address );
	return memoryBlock.deek( address, false );
};
AOZ.prototype.leek = function( address )
{
	var memoryBlock = this.getMemoryBlockFromAddress( address );
	return memoryBlock.leek( address, false );
};
AOZ.prototype.poke$ = function( address, text )
{
	var memoryBlock = this.getMemoryBlockFromAddress( address );
	memoryBlock.poke$( address, text );
};
AOZ.prototype.doke$ = function( address, text )
{
	var memoryBlock = this.getMemoryBlockFromAddress( address );
	memoryBlock.doke$( address, text );
};
AOZ.prototype.peek$ = function( address, length, stop )
{
	var memoryBlock = this.getMemoryBlockFromAddress( address );
	return memoryBlock.peek$( address, length, stop );
};
AOZ.prototype.deek$ = function( address, length, stop )
{
	var memoryBlock = this.getMemoryBlockFromAddress( address );
	return memoryBlock.deek$( address, length, stop );
};
AOZ.prototype.fill = function( start, end, value )
{
	var startBlock = this.getMemoryBlockFromAddress( start );
	var endBlock = this.getMemoryBlockFromAddress( end );
	if ( startBlock != endBlock )
		throw 'illegal_function_call';
	startBlock.fill( start, end, value );
};
AOZ.prototype.copy = function( source, length, destination )
{
	var sourceBlock = this.getMemoryBlockFromAddress( source );
	sourceBlock.copy( destination, length );
};
AOZ.prototype.hunt = function( start, end, text )
{
	var startBlock = this.getMemoryBlockFromAddress( start );
	var endBlock = this.getMemoryBlockFromAddress( end );
	if ( startBlock != endBlock )
		throw 'illegal_function_call';
	return startBlock.hunt( start, end, text );
};






AOZ.prototype.bSet = function( variable, shift )
{
	var value = this.getVariable( variable );
	this.setVariable( variable, value | ( 1 << shift ) );
};
AOZ.prototype.bClr = function( variable, shift )
{
	var value = this.getVariable( variable );
	this.setVariable( variable, value & ( ~( 1 << shift ) ) );
};
AOZ.prototype.bChg = function( variable, shift )
{
	var value = this.getVariable( variable );
	this.setVariable( variable, value ^ ( 1 << shift ) );
};
AOZ.prototype.rolB = function( variable, shift )
{
	var value = this.getVariable( variable );
	var carry = ( value & 0x80 ) != 0 ? 0x01 : 0x00;
	this.setVariable( variable, ( value & 0xFFFFFF00 ) | ( ( value << shift ) & 0xFF ) | carry );
};
AOZ.prototype.rolW = function( variable, shift )
{
	var value = this.getVariable( variable );
	var carry = ( value & 0x8000 ) != 0 ? 0x01 : 0x00;
	this.setVariable( variable, ( value & 0xFFFF0000 ) | ( ( value << shift ) & 0xFFFF ) | carry );
};
AOZ.prototype.rolL = function( variable, shift )
{
	var value = this.getVariable( variable );
	var carry = ( value & 0x80000000 ) != 0 ? 0x01 : 0x00;
	this.setVariable( variable, ( value << shift ) | carry );
};
AOZ.prototype.rorB = function( variable, shift )
{
	var value = this.getVariable( variable );
	var carry = ( value & 0x01 ) != 0 ? 0x80 : 0x00;
	this.setVariable( variable, ( value & 0xFFFFFF00 ) | ( ( value >>> shift ) & 0xFF ) | carry );
};
AOZ.prototype.rorW = function( variable, shift )
{
	var value = this.getVariable( variable );
	var carry = ( value & 0x01 ) != 0 ? 0x8000 : 0x0000;
	this.setVariable( variable, ( value & 0xFFFF0000 ) | ( ( value >>> shift ) & 0xFFFF ) | carry );
};
AOZ.prototype.rorL = function( variable, shift )
{
	var value = this.getVariable( variable );
	var carry = ( value & 0x01 ) != 0 ? 0x80000000 : 0x00000000;
	this.setVariable( variable, ( value >>> shift ) | carry );
};


// Gamepads
AOZ.GAMEPAD_FIRE = 0;
AOZ.GAMEPAD_UP = 12;
AOZ.GAMEPAD_DOWN = 13;
AOZ.GAMEPAD_RIGHT = 15;
AOZ.GAMEPAD_LEFT = 14;
AOZ.GAMEPAD_A = 0;
AOZ.GAMEPAD_B = 1;
AOZ.GAMEPAD_X = 2;
AOZ.GAMEPAD_Y = 3;
AOZ.GAMEPAD_STICKLEFT = 10;
AOZ.GAMEPAD_STICKRIGHT = 11;
AOZ.GAMEPAD_BOTTOMLEFT = 6;
AOZ.GAMEPAD_TOPLEFT = 4;
AOZ.GAMEPAD_BOTTOMRIGHT = 7;
AOZ.GAMEPAD_TOPRIGHT = 5;
AOZ.GAMEPAD_CENTERLEFT = 8;
AOZ.GAMEPAD_CENTERRIGHT = 9;
AOZ.GAMEPAD_HAXELEFT = 0;
AOZ.GAMEPAD_VAXELEFT = 1;
AOZ.GAMEPAD_HAXERIGHT = 2;
AOZ.GAMEPAD_VAXERIGHT = 3;
AOZ.MAPPING_BUTTONS = 0;
AOZ.MAPPING_AXES = 16;
AOZ.MAPPING_TRIGGERS = 32
AOZ.prototype.setGamepads = function()
{
	this.gamepads = navigator.getGamepads();
	this.gamepadMaps = {};
};
AOZ.prototype.scanGamepads = function()
{
	this.gamepads = navigator.getGamepads();
};
AOZ.prototype.getMapping = function( gamepad, key, delta )
{
	if ( gamepad.mapping == 'standard' )
		return key;
	if ( this.gamepadMaps[ gamepad.id ] )
	{
		var keyMapped = this.gamepadMaps[ gamepad.id ][ key + delta ];
		if ( typeof keyMapped != 'undefined' )
			return keyMapped;
	}
	return key;
};
AOZ.prototype.getKeyMapping = function( key )
{
	var k = this.manifest.gamepad.mapping[ key ];
	if ( k )
	{
		return this.keymap[ k ];
	}
	return false;
};
AOZ.prototype.jUp = function( number )
{
	if ( number < 0 || number > 4 )
		throw 'illegal_function_call';
	if ( this.gamepads )
	{
		var gamepad = this.gamepads[ number ];
		if ( gamepad && gamepad.connected )
		{
			if ( gamepad.mapping == 'standard' )
			{
				return gamepad.buttons[ this.getMapping( gamepad, AOZ.GAMEPAD_UP, AOZ.MAPPING_BUTTONS ) ].pressed;
			}
		}
	}
	return 	this.getKeyMapping( 'up' ) ? 0x01 : 0x00;
};
AOZ.prototype.jDown = function( number )
{
	if ( number < 0 || number > 4 )
		throw 'illegal_function_call';
	if ( this.gamepads )
	{
		var gamepad = this.gamepads[ number ];
		if ( gamepad && gamepad.connected )
		{
			if ( gamepad.mapping == 'standard' )
			{
				return gamepad.buttons[ this.getMapping( gamepad, AOZ.GAMEPAD_DOWN, AOZ.MAPPING_BUTTONS ) ].pressed;
			}
		}
	}
	return 	this.getKeyMapping( 'down' ) ? 0x01 : 0x00;
};
AOZ.prototype.jLeft = function( number )
{
	if ( number < 0 || number > 4 )
		throw 'illegal_function_call';
	if ( this.gamepads )
	{
		var gamepad = this.gamepads[ number ];
		if ( gamepad && gamepad.connected )
		{
			if ( gamepad.mapping == 'standard' )
			{
				return gamepad.buttons[ this.getMapping( gamepad, AOZ.GAMEPAD_LEFT, AOZ.MAPPING_BUTTONS ) ].pressed;
			}
		}
	}
	return 	this.getKeyMapping( 'left' ) ? 0x01 : 0x00;
};
AOZ.prototype.jRight = function( number )
{
	if ( number < 0 || number > 4 )
		throw 'illegal_function_call';
	if ( this.gamepads )
	{
		var gamepad = this.gamepads[ number ];
		if ( gamepad && gamepad.connected )
		{
			if ( gamepad.mapping == 'standard' )
			{
				return gamepad.buttons[ this.getMapping( gamepad, AOZ.GAMEPAD_RIGHT, AOZ.MAPPING_BUTTONS ) ].pressed;
			}
		}
	}
	return 	this.getKeyMapping( 'right' ) ? 0x01 : 0x00;
};
AOZ.prototype.fire = function( number )
{
	if ( number < 0 || number > 4 )
		throw 'illegal_function_call';
	if ( this.gamepads )
	{
		var gamepad = this.gamepads[ number ];
		if ( gamepad && gamepad.connected )
		{
			if ( gamepad.mapping == 'standard' )
			{
				return gamepad.buttons[ this.getMapping( gamepad, AOZ.GAMEPAD_FIRE, AOZ.MAPPING_BUTTONS ) ].pressed;
			}
		}
	}
	return 	this.getKeyMapping( 'fire' ) ? 0x01 : 0x00;
};
AOZ.prototype.joy = function( number )
{
	if ( number < 0 || number > 4 )
		throw 'illegal_function_call';
	var result = 0;
	if ( this.gamepads )
	{
		var gamepad = this.gamepads[ number ];
		if ( gamepad && gamepad.connected )
		{
			if ( gamepad.mapping == 'standard' )
			{
				result |= gamepad.buttons[ this.getMapping( gamepad, AOZ.GAMEPAD_UP, AOZ.MAPPING_BUTTONS ) ].pressed ? 0x01 : 0x00;
				result |= gamepad.buttons[ this.getMapping( gamepad, AOZ.GAMEPAD_DOWN, AOZ.MAPPING_BUTTONS ) ].pressed ? 0x02 : 0x00;
				result |= gamepad.buttons[ this.getMapping( gamepad, AOZ.GAMEPAD_LEFT, AOZ.MAPPING_BUTTONS ) ].pressed ? 0x04 : 0x00;
				result |= gamepad.buttons[ this.getMapping( gamepad, AOZ.GAMEPAD_RIGHT, AOZ.MAPPING_BUTTONS ) ].pressed ? 0x08 : 0x00;
				result |= gamepad.buttons[ this.getMapping( gamepad, AOZ.GAMEPAD_FIRE, AOZ.MAPPING_BUTTONS ) ].pressed ? 0x10 : 0x00;
				return result;
			}
		}
	}
	result |= this.getKeyMapping( 'up' ) ? 0x01 : 0x00;
	result |= this.getKeyMapping( 'down' ) ? 0x02 : 0x00;
	result |= this.getKeyMapping( 'left' ) ? 0x04 : 0x00;
	result |= this.getKeyMapping( 'right' ) ? 0x08 : 0x00;
	result |= this.getKeyMapping( 'fire' ) ? 0x10 : 0x00;
	return result;
};
AOZ.prototype.gamepadConnected = function( number )
{
	if ( number < 0 || number > 4 )
		throw 'illegal_function_call';
	return ( this.gamepads && this.gamepads[ number ] && this.gamepads[ number ].connected );
};
AOZ.prototype.gamepadButton = function( number, button )
{
	if ( number < 0 || number > 4 )
		throw 'illegal_function_call';
	if ( this.gamepads )
	{
		var gamepad = this.gamepads[ number ];
		if ( gamepad && gamepad.connected )
		{
			var b = gamepad.buttons[ this.getMapping( gamepad, button, AOZ.MAPPING_BUTTONS ) ];
			if ( b )
			{
				return b.pressed;
			}
	   	}
   	}
	return false;
};
AOZ.prototype.gamepadAxe = function( number, axe )
{
	if ( number < 0 || number > 4 )
		throw 'illegal_function_call';
	if ( this.gamepads )
	{
		var gamepad = this.gamepads[ number ];
		if ( gamepad && gamepad.connected )
	   	{
			if ( gamepad.axes )
			{
				var value = gamepad.axes[ this.getMapping( gamepad, axe, AOZ.MAPPING_AXES ) ];
				return typeof value != 'undefined' ? value : 0;
			}
	   	}
   	}
	return 0;
};
AOZ.prototype.gamepadTrigger = function( number, trigger )
{
	if ( number < 0 || number > 4 )
		throw 'illegal_function_call';
	if ( this.gamepads )
	{
		var gamepad = this.gamepads[ number ];
		if ( gamepad && gamepad.connected )
		{
			if ( gamepad.mapping == 'standard' )
			{
				trigger = ( trigger == 0 ? AOZ.GAMEPAD_BOTTOMLEFT : AOZ.GAMEPAD_BOTTOMRIGHT );
				return gamepad.buttons[ trigger ].value;
			}
			else if ( gamepad.axes )
			{
				var value = gamepad.axes[ this.getMapping( gamepad, trigger, AOZ.MAPPING_TRIGGERS ) ];
				return typeof value != 'undefined' ? value : 0;
			}
		}
	}
	return 0;
};

// Set font
AOZ.prototype.setFont= function( args )
{
	var self = this;
	this.fontLoaded = false;
	this.currentScreen.setFont( args[ 0 ], args[ 1 ], args[ 2 ], args[ 3 ], args[ 4 ], function( response, data, extra )
	{
		if ( response )
			self.fontLoaded = true;
		else
			throw 'cannot_load_font';
	} );
}
AOZ.prototype.setFont_wait = function( channel, source, address )
{
	if ( this.fontLoaded )
	{
		this.waiting = null;
	}
};

///////////////////////////////////////////////////////////////////////////
//
// AMAL!
//
///////////////////////////////////////////////////////////////////////////
AOZ.prototype.amalOnOff = function( onOff, channelNumber )
{
	this.initializeChannels();
	this.amal.setOnOff( onOff, channelNumber );
}
AOZ.prototype.amalStart = function( args )
{
	var channel = args[ 0 ];
	var source = args[ 1 ];
	var address = args[ 2 ];
	var compiler = new AMALCompiler( this );
	if ( typeof source == 'number' )
		debugger;

	this.amalErrors = [];
	this.amalErrorNumberCount = 0;
	this.amalErrorStringCount = 0;
	var code = compiler.compile( source, {} )
	if ( this.utilities.isArray( code ) )
	{
		this.amalErrors = code;
		throw 'amal_error';
	}

	if ( this.channelsTo[ channel ] )
		this.channelsTo[ channel ].initialized = false;

	var self = this;
	this.amalStarted = false;
	this.amal.runChannel( channel, code, function( response, data, extra )
	{
		if ( !response )
			throw 'illegal_function_call';

		self.amalStarted = true;
		if ( !data )
		{
			self.initializeChannels();
		}
		else if ( data.toUpdate )
		{
			if ( self.channelsTo[ channel ] )
			{
				var channelTo = self.channelsTo[ data.channelNumber ];
				switch ( channelTo.type )
				{
					case 'bob':
						if ( self.currentScreen.isBob( channelTo.bobNumber ) )
							channelTo.screen.bob( channelTo.bobNumber, { x: data.x, y: data.y }, data.image );
						break;
					case 'sprite':
						if ( self.sprites && self.sprites.isSprite( channelTo.spriteNumber ) )
							self.sprites.sprite( channelTo.spriteNumber, { x: data.x, y: data.y }, data.image );
						break;
					case 'screenPos':
						channelTo.screen.setDisplay( { x: data.x, y: data.y } );
						break;
					case 'screenSize':
						channelTo.screen.setDisplay( { x: undefined, y: undefined, width: data.x, height: data.y } );
						break;
					case 'screenScroll':
						channelTo.screen.setOffset( { x: data.x, y: data.y } );
						break;
					case 'rainbow':
						self.moduleRainbows.getRainbow( channelTo.rainbowNumber ).setDisplay( data.x, data.y, data.image );
						break;
				}
			}
		}
	} );
	if ( !this.channelsTo[ channel ] )
		this.amalChannelToSprite( channel, channel );
};
AOZ.prototype.amalStart_wait = function( channel, source, address )
{
	if ( this.amalStarted )
	{
		this.waiting = null;
	}
};
AOZ.prototype.initializeChannels = function()
{
	for ( var c = 0; c < this.channelsTo.length; c++ )
	{
		var channelTo = this.channelsTo[ c ];
		if ( channelTo && !channelTo.initialized )
		{
			switch ( channelTo.type )
			{
				case 'bob':
					if ( this.currentScreen.isBob( channelTo.bobNumber ) )
					{
						this.amal.setChannelPosition( c, this.currentScreen.xBob( channelTo.bobNumber ), this.currentScreen.yBob( channelTo.bobNumber ), this.currentScreen.iBob( channelTo.bobNumber ) );
						channelTo.initialized = true;
					}
					break;
				case 'sprite':
					if ( this.sprites && this.sprites.isSprite( channelTo.spriteNumber ) )
					{
						this.amal.setChannelPosition( c, this.sprites.getX( channelTo.spriteNumber ), this.sprites.getY( channelTo.spriteNumber ), this.sprites.getI( channelTo.spriteNumber ) );
						channelTo.initialized = true;
					}
					break;
				case 'screenPos':
					this.amal.setChannelPosition( c, channelTo.screen.position.x, channelTo.screen.position.y, 0 );
					channelTo.initialized = true;
					break;
				case 'screenSize':
					this.amal.setChannelPosition( c, channelTo.screen.display.width, channelTo.screen.display.height, 0 );
					channelTo.initialized = true;
					break;
				case 'screenScroll':
					this.amal.setChannelPosition( c, channelTo.screen.offset.x, channelTo.screen.offset.y, 0 );
					channelTo.initialized = true;
					break;
				case 'rainbow':
					var rainbow = this.moduleRainbows.getRainbow( channelTo.rainbowNumber, false );
					if ( rainbow )
					{
						var rainbowDisplay = rainbow.getDisplay();
						this.amal.setChannelPosition( c, rainbowDisplay.offset, rainbowDisplay.y, rainbowDisplay.height );
						channelTo.initialized = true;
					}
					break;
			}
		}
	}
	for ( var c = 0; c < this.channelsTo.length; c++ )
	{
		var channelTo = this.channelsTo[ c ];
		if ( channelTo && channelTo.initialized )
		{
			var channel = this.amal.getChannel( channelTo.channelNumber );
			if ( channel )
				channel.initialized = true;
		}
	}
}

AOZ.prototype.amalError = function()
{
	if ( this.amalErrorNumberCount < this.amalErrors.length )
	{
		return this.amalErrors[ this.amalErrorNumberCount++ ].position;
	}
	return 0;
};
AOZ.prototype.amalError$ = function()
{
	if ( this.amalErrorStringCount < this.amalErrors.length )
	{
		return this.errors.getError( this.amalErrors[ this.amalErrorStringCount++ ].error );
	}
	return '';
};
AOZ.prototype.amalChannelToSprite = function( channel, number )
{
	this.channelsTo[ channel ] = { type: 'sprite', spriteNumber: number, channelNumber: channel };
	if ( this.sprites && this.sprites.isSprite( number ) )
	{
		this.channelsTo[ channel ].initialized = this.amal.setChannelPosition( channel, this.sprites.getX( number ), this.sprites.getY( number ), this.sprites.getI( number ) );
	}
};
AOZ.prototype.amalChannelToBob = function( channel, number )
{
	this.channelsTo[ channel ] = { type: 'bob', screen: this.currentScreen, bobNumber: number, channelNumber: channel };
	if ( this.currentScreen.isBob( number ) )
	{
		this.channelsTo[ channel ].initialized = this.amal.setChannelPosition( channel, this.currentScreen.xBob( number ), this.currentScreen.yBob( number ), this.currentScreen.iBob( number ) );
	}
};
AOZ.prototype.amalChannelToScreenPos = function( channel, number )
{
	this.channelsTo[ channel ] = { type: 'screenPos', screen: this.currentScreen, channelNumber: channel };
	var screen = this.getScreen( number );
	if ( screen )
	{
		this.channelsTo[ channel ].initialized = this.amal.setChannelPosition( channel, screen.position.x, screen.position.y );
	}
};
AOZ.prototype.amalChannelToScreenSize = function( channel, number )
{
	this.channelsTo[ channel ] = { type: 'screenSize', screen: this.currentScreen, channelNumber: channel };
	var screen = this.getScreen( number );
	if ( screen )
	{
		this.channelsTo[ channel ].initialized = this.amal.setChannelPosition( channel, screen.display.width, screen.display.height );
	}
};
AOZ.prototype.amalChannelToScreenOffset = function( channel, number )
{
	this.channelsTo[ channel ] = { type: 'screenScroll', screen: this.currentScreen, channelNumber: channel };
	var screen = this.getScreen( number );
	if ( screen )
	{
		this.channelsTo[ channel ].initialized = this.amal.setChannelPosition( channel, screen.offset.x, screen.offset.y );
	}
};
AOZ.prototype.amalChannelToRainbow = function( channel, number )
{
	this.channelsTo[ channel ] = { type: 'rainbow', rainbowNumber: number, channelNumber: channel };
	var rainbow = this.moduleRainbows.getRainbow( number );
	if ( rainbow )
	{
		var display = rainbow.getDisplay();
		this.channelsTo[ channel ].initialized = this.amal.setChannelPosition( channel, display.offset, display.y, display.height );
	}
};


// Temporary!
AOZ.prototype.setFakeVariable = function()
{
};
AMAL.prototype.getFakeVariable = function()
{
	return 0;
};
AOZ.prototype.setFakeVariable$ = function()
{
};
AMAL.prototype.getFakeVariable$ = function()
{
	return '';
};
