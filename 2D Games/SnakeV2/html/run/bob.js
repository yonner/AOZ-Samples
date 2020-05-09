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
 * AOZ - Bob Class
 *
 * @author FL (Francois Lionet)
 * @date first pushed on 10/11/2019
 */

function Bob( aoz, parent, tags )
{
	this.aoz = aoz;
	this.banks = aoz.banks;
	this.screen = parent;
	this.tags = tags;

	this.position = { x: 0, y: 0, z: 0 };
	this.dimension = { x: 0, y: 0, z: 0 };
	this.scale = { x: 1, y: 1, z: 1 };
	this.skew = { x: 0, y: 0, z: 0 };
	this.angle = { x: 0, y: 0, z: 0 };
	this.image = 0;
	this.hRev = false;
	this.vRev = false;
	this.positionDisplay = {};
	this.dimensionDisplay = {};
	this.scaleDisplay = {};
	this.skewDisplay = {};
	this.angleDisplay = {};
	this.alpha = 1.0;
	this.hRevDisplay = false;
	this.vRevDisplay = false;
	this.visible = true;
	this.bankIndex = undefined;
	this.bankReserveNumber = -1;

	this.clipping = null;
	this.limits = null;
	this.toUpdate = false;
	this.toUpdateCollisions = false;
	this.collisions =
	{
		rectangle: { x1: 10000000, y1: 10000000, x2: -10000000, y2: -10000000 },
		rectangleClamp: { x1: 10000000, y1: 10000000, x2: -10000000, y2: -10000000 }
	};
}
Bob.prototype.set = function( position, image, tags )
{
	var toUpdate = 0;
	if ( typeof image != 'undefined' )
	{
		if ( typeof image == 'number' )
		{
			this.hRev = ( image & AOZ.HREV ) != 0;
			this.vRev = ( image & AOZ.VREV ) != 0;
			image &= ~( AOZ.HREV | AOZ.VREV );
		}
		else
		{
			this.hRev = false;
			this.vRev = false;
		}
		this.bank = this.aoz.banks.getBank( this.bankIndex, this.aoz.currentContextName, 'images' );
		this.bankIndex = this.bank.index;
		this.bankReserveNumber = this.bank.reserveNumber;
		this.image = image;
		this.imageObject = this.bank.getElement( this.image );
		this.dimension.width = this.imageObject.width * this.scale.x;
		this.dimension.height = this.imageObject.height * this.scale.y;
		toUpdate++;
	}
	if ( typeof position.x != 'undefined' )
	{
		this.position.x = this.limits ? Math.max( this.limits.x, Math.min( this.position.x, this.limits.x + this.limits.width ) ) : position.x;
		toUpdate++;
	}
	if ( typeof position.y != 'undefined' )
	{
		this.position.y = this.limits ? Math.max( this.limits.y, Math.min( this.position.y, this.limits.y + this.limits.height ) ) : position.y;
		toUpdate++;
	}
	if ( typeof position.z != 'undefined' )
	{
		this.position.z = position.z;
		toUpdate++;
	}
	if ( toUpdate > 0 )
		this.setModified();
};
Bob.prototype.setModified = function()
{
	this.toUpdate = true;
	this.toUpdateCollisions = true;
	this.screen.setModified();
};
Bob.prototype.updateBank = function( newBank, newBankIndex, contextName )
{
	if ( this.bankIndex == newBankIndex )
	{
		if ( newBank )
		{
			if ( this.bankReserveNumber != newBank.reserveNumber )
			{
				this.bank = newBank;
				this.bankReserveNumber = newBank.reserveNumber;
				this.imageObject = newBank.getElement( this.image );
				if ( !this.imageObject )
					this.destroy();
				else
				{
					this.dimension.width = this.imageObject.width * this.scale.x;
					this.dimension.height = this.imageObject.height * this.scale.y;
					this.setModified();
				}
				return true;
			}
		}
		else
		{
			this.destroy();
			return true;
		}
	}
};
Bob.prototype.destroy = function( options )
{
	this.screen.destroyBob( this.index );
	this.setModified();
};
Bob.prototype.update = function( options )
{
	if ( this.toUpdate || options.force )
	{
		this.toUpdate = false;
		if ( this.imageObject )
		{
			this.positionDisplay.x = this.position.x;
			this.positionDisplay.y = this.position.y;
			this.dimensionDisplay.width = this.dimension.width;
			this.dimensionDisplay.height = this.dimension.height;
			this.scaleDisplay.x = this.scale.x;
			this.scaleDisplay.y = this.scale.y;
			this.skewDisplay.x = this.skew.x;
			this.skewDisplay.y = this.skew.y;
			this.angleDisplay.z = this.angle.z;
			var hRev = this.hRev;
			var vRev = this.vRev;
			if ( this.scale.x < 0 )
				hRev |= 0x4000;
			if ( this.scale.y < 0 )
				vRev |= 0x8000;
			this.canvas = this.imageObject.getCanvas( hRev, vRev );
			this.hotSpot = this.imageObject.getHotSpot( hRev, vRev );
		}
		return true;
	}
	return false;
};
Bob.prototype.setVisible = function( yesNo )
{
	this.visible = yesNo;
	this.setModified();
};
Bob.prototype.setClipping = function( rectangle, options )
{
	rectangle.x = typeof rectangle.x != 'undefined' ? rectangle.x : 0;
	rectangle.y = typeof rectangle.y != 'undefined' ? rectangle.y : 0;
	rectangle.width = typeof rectangle.width != 'undefined' ? rectangle.width : this.screen.width;
	rectangle.height = typeof rectangle.height != 'undefined' ? rectangle.height : this.screen.height;
	this.clipping = rectangle;
	this.setModified();
};
Bob.prototype.setLimits = function( rectangle, options )
{
	rectangle.x = typeof rectangle.x != 'undefined' ? rectangle.x : 0;
	rectangle.y = typeof rectangle.y != 'undefined' ? rectangle.y : 0;
	rectangle.width = typeof rectangle.width != 'undefined' ? rectangle.width : this.screen.width;
	rectangle.height = typeof rectangle.height != 'undefined' ? rectangle.height : this.screen.height;
	if ( this.aoz.manifest.compilation.emulation.toLowerCase() != 'pc' )
		rectangle.width &= 0xFFFFFFF0;
	this.limits = rectangle;
	this.clipping = rectangle;
	this.setModified();
};
Bob.prototype.setAlpha = function( alpha, tags )
{
	if ( alpha < 0 || alpha > 1.0 )
		throw 'illegal_function_call';
	this.alpha = alpha;
	this.setModified();
};
Bob.prototype.setScale = function( vector, tags )
{
	vector.x = typeof vector.x == 'undefined' ? 1 : vector.x;
	vector.y = typeof vector.y == 'undefined' ? 1 : vector.y;
	vector.z = typeof vector.z == 'undefined' ? 1 : vector.z;
	this.scale = vector;
	this.setModified();
};
Bob.prototype.setSkew = function( vector, tags )
{
	vector.x = typeof vector.x == 'undefined' ? 0 : vector.x;
	vector.y = typeof vector.y == 'undefined' ? 0 : vector.y;
	vector.z = typeof vector.z == 'undefined' ? 0 : vector.z;
	this.skew = vector;
	this.setModified();
};
Bob.prototype.setAngle = function( angle, tags )
{
	angle.x = typeof angle.x == 'undefined' ? 0 : angle.x;
	angle.y = typeof angle.y == 'undefined' ? 0 : angle.y;
	angle.z = typeof angle.z == 'undefined' ? 0 : angle.z;
	this.angle = angle;
	this.setModified();
};
Bob.prototype.updateCollisionData = function()
{
	if ( this.toUpdateCollisions )
	{
		var collisions = this.collisions;
		if ( this.imageObject )
		{
			var x1, x2, y1, y2;
			if ( this.scale.x >= 0 )
				x1 = this.position.x - this.imageObject.hotSpotX * this.scale.x;
			else
				x1 = this.position.x - ( this.imageObject.width - this.imageObject.hotSpotX ) * ( -this.scale.x );
			x2 = x1 + this.imageObject.width * Math.abs( this.scale.x );

			if ( this.scale.y >= 0 )
				y1 = this.position.y - this.imageObject.hotSpotY * this.scale.y;
			else
				y1 = this.position.y - ( this.imageObject.height - this.imageObject.hotSpotY ) * ( -this.scale.y );
			y2 = y1 + this.imageObject.height * Math.abs( this.scale.y );

			var x1Clamp = Math.max( Math.min( x1, this.screen.dimension.width ), 0 );
			var y1Clamp = Math.max( Math.min( y1, this.screen.dimension.height ), 0 );
			var x2Clamp = Math.max( Math.min( x2, this.screen.dimension.width ), 0 );
			var y2Clamp = Math.max( Math.min( y2, this.screen.dimension.height ), 0 );

			if ( x1Clamp != x2Clamp && y1Clamp != y2Clamp )
			{
				collisions.rectangle.x1 = x1 * this.screen.renderScale.x + this.screen.position.x;
				collisions.rectangle.y1 = y1 * this.screen.renderScale.y + this.screen.position.y;
				collisions.rectangle.x2 = x2 * this.screen.renderScale.x + this.screen.position.x;
				collisions.rectangle.y2 = y2 * this.screen.renderScale.y + this.screen.position.y;
				collisions.rectangleClamp.x1 = x1Clamp * this.screen.renderScale.x + this.screen.position.x;
				collisions.rectangleClamp.y1 = y1Clamp * this.screen.renderScale.y + this.screen.position.y;
				collisions.rectangleClamp.x2 = x2Clamp * this.screen.renderScale.x + this.screen.position.x;
				collisions.rectangleClamp.y2 = y2Clamp * this.screen.renderScale.y + this.screen.position.y;
				/*
				if ( this.angle.z != 0 )
				{
					var xCenter = this.position.x * this.screen.renderScale.x + this.screen.position.x;
					var yCenter = this.position.y * this.screen.renderScale.y + this.screen.position.y;
					this.utilities.rotateCollisionRectangle( this.collisions.rectangle, { x: xCenter, y: yCenter }, this.angle.z );
					this.utilities.rotateCollisionRectangle( this.collisions.rectangleClamp, { x: xCenter, y: yCenter }, this.angle.z );
				}
				*/
			}
		}
		else
		{
			collisions.rectangle = { x1: 10000000, y1: 10000000, x2: -10000000, y2: -10000000 };
			collisions.rectangleClamp = { x1: 10000000, y1: 10000000, x2: -10000000, y2: -10000000 };
		}
		collisions.xPlus = this.scale.x;
		collisions.yPlus = this.scale.y;
		this.toUpdateCollisions = false;
	}
};
