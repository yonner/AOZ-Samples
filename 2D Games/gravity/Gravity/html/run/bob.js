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
	this.collisions = {};
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
	this.parent.destroyBob( this.index );
	this.setModified();
};
Bob.prototype.update = function( options )
{
	if ( this.toUpdate || options.force )
	{
		this.toUpdate = false;
		this.canvas = this.imageObject.getCanvas( this.hRev, this.vRev );
		this.positionDisplay.x = this.position.x;
		this.positionDisplay.y = this.position.y;
		this.dimensionDisplay.width = this.dimension.width;
		this.dimensionDisplay.height = this.dimension.height;
		this.scaleDisplay.x = this.scale.x;
		this.scaleDisplay.y = this.scale.y;
		this.skewDisplay.x = this.skew.x;
		this.skewDisplay.y = this.skew.y;
		this.angleDisplay.z = this.angle.z;
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
	rectangle.width = typeof rectangle.width != 'undefined' ? rectangle.width : this.parent.width;
	rectangle.height = typeof rectangle.height != 'undefined' ? rectangle.height : this.parent.height;
	this.clipping = rectangle;
	this.setModified();
};
Bob.prototype.setLimits = function( rectangle, options )
{
	rectangle.x = typeof rectangle.x != 'undefined' ? rectangle.x : 0;
	rectangle.y = typeof rectangle.y != 'undefined' ? rectangle.y : 0;
	rectangle.width = typeof rectangle.width != 'undefined' ? rectangle.width : this.parent.width;
	rectangle.height = typeof rectangle.height != 'undefined' ? rectangle.height : this.parent.height;
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
			var xHard = this.position.x * this.parent.scale.x + this.parent.position.x;
			var yHard = this.position.y * this.parent.scale.y + this.parent.position.y;
			var xHotspotHard = this.imageObject.hotSpotX * this.parent.scale.x;
			var yHotspotHard = this.imageObject.hotSpotY * this.parent.scale.y;
			var widthHard = this.imageObject.width * this.parent.scale.x;
			var heightHard = this.imageObject.height * this.parent.scale.y;
			if ( this.angle.z == 0 )
			{
				collisions.x1 = xHard - xHotspotHard * this.scale.x;
				collisions.y1 = yHard - yHotspotHard * this.scale.y;
				collisions.x2 = collisions.x1 + widthHard * this.scale.x;
				collisions.y2 = collisions.y1 + heightHard * this.scale.y;
			}
			else
			{
				var x1 = xHard - xHotspotHard * this.scale.x;
				var y1 = yHard - yHotspothard * this.scale.y;
				var coords = this.aoz.utilities.rotate( x1, y1,	xHard, yHard, this.angle.z );
				collisions.x1 = coords.x;
				collisions.y1 = coords.y;
				coords = this.aoz.utilities.rotate( x1 + widthHard * this.scale.x, y1 + heightHard * this.scale.y, xHard, yHard, this.angle.z );
				collisions.x2 = coords.x;
				collisions.y2 = coords.y;
			}
		}
		else
		{
			collisions.x1 = 10000000;
			collisions.y1 = 10000000;
			collisions.x2 = -10000000;
			collisions.y2 = -10000000;
		}
		this.toUpdateCollisions = false;
	}
};
