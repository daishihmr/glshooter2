/** @class */
gls2.ConsoleWindow = tm.createClass(
/** @lends {gls2.ConsoleWindow.prototype} */
{
    superClass: tm.app.RectangleShape,
    label: null,
    buf: null,
    init: function(w) {
        this.superInit(w, 64, {
            fillStyle: "rgba(1,2,48,0.5)",
            strokeStyle: "rgba(0,0,0,0)",
        });
        this.label = tm.app.Label("_", 10)
            // .setFontFamily("'Consolas', 'Monaco', 'ＭＳ ゴシック'")
            .setAlign("left")
            .setBaseline("top")
            .setPosition(-this.width/2+4, -this.height/2+4)
            .setFillStyle("rgba(255,255,255,0.5)")
            .addChildTo(this);
        this.buf = [];
    },
    addLine: function(string) {
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
        if (app.frame % 2 === 0 && this.buf.length !== 0) {
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
        this.label.text = text + ((~~(app.frame/6) % 2) ? "_" : " ");
    },
});
