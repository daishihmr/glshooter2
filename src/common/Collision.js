gls2.Collision = {

    isHit: function(a, b) {

        var awl = a.boundingWidthLeft;
        var awr = a.boundingWidthRight;
        var aht = a.boundingHeightTop;
        var ahb = a.boundingHeightBottom;

        var aleft = a.x - awl;
        var aright = a.x + awr;
        var atop = a.y - aht;
        var abottom = a.y + ahb;
    
        var bwl = b.boundingWidthLeft;
        var bwr = b.boundingWidthRight;
        var bht = b.boundingHeightTop;
        var bhb = b.boundingHeightBottom;

        var bleft = b.x - bwl;
        var bright = b.x + bwr;
        var btop = b.y - bht;
        var bbottom = b.y + bhb;

        return (aleft < bright) && (aright > bleft) && (atop < bbottom) && (abottom > btop)
    },

};
