var DropdownListIdValue = "DropdownListID";
var LeadingImagesIdValue = "ImageID";

function SelectAnItem(ndx) {
var d = document.getElementById(DropdownListIdValue);
for( var i=0; i<d.length; i++ ) {
   d[i].selected = false;
   var imgi = i + 1;
   if( imgi < d.length ) { document.getElementById(LeadingImagesIdValue+imgi).style.borderColor = "#07EF9E"; }
   }
d[ndx].selected = true;
if( ndx > 0 ) { document.getElementById(LeadingImagesIdValue+ndx).style.borderColor = "black"; }
}

SelectAnItem( document.getElementById(DropdownListIdValue).selectedIndex );