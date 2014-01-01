/*
 * License
 * http://daishihmr.mit-license.org/
 */

/** @class */
gls2.ConsoleWindow = tm.createClass(
/** @lends {gls2.ConsoleWindow.prototype} */
{
    width: 0,
    label: null,
    buf: null,
    age: 0,
    posX: 0,
    posY: 0,
    init: function(w) {
        this.width = w;
        this.label = tm.display.Label("_", 10)
            .setAlign("left")
            .setBaseline("top")
            .setPosition(-this.width/2+4, -this.height/2+4)
            .setFillStyle("rgba(255,255,255,0.5)");
        this.buf = [];

        this.posX = SC_W - this.width - 5;
        this.posY = 5;
    },
    addLine: function(string, intercept) {
        if (intercept === true) {
            this.buf.clear();
            this.buf.push("");
        }
        if (this.buf.length > 5) {
            this.buf.splice(1, this.buf.length - 4);
        }
        this.buf.push(string);
        return this;
    },
    clearBuf: function() {
        this.buf.clear();
        return this;
    },
    clear: function() {
        this.label.text = "_";
        return this;
    },
    update: function(app) {
        var text = this.label.text;
        text = text.substring(0, text.length - 1);
        if (this.buf.length !== 0) {
            if (this.buf[0] !== "") {
                var c = this.buf[0][0];
                this.buf[0] = this.buf[0].substring(1);
                text += c;
            } else {
                this.buf.shift();
                var lines = text.split("\n");
                if (lines.length > 3) {
                    lines.shift();
                    text = lines.join("\n");
                }
                text += "\n";
            }
        }
        this.label.text = text + (this.age%2 === 0 ? "_" : " ");

        this.age += 1;
    },
    draw: function(canvas) {
        canvas.save();

        canvas.context.globalCompositeOperation = "source-over";

        canvas.translate(this.posX, this.posY);
        canvas.fillStyle = "rgba(1,2,48,0.5)";
        canvas.fillRect(0, 0, this.width, 64);

        canvas.translate(5, 5);
        canvas.fillStyle = "rgba(255,255,255,0.5)";
        canvas.setText(this.label.fontStyle, this.label.align, this.label.baseline);
        this.label._lines.each(function(elm, i) {
            canvas.fillText(elm, 0, this.label.textSize*i);
        }.bind(this));

        canvas.restore();
    }
});
