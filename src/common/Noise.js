gls2.Noise = {
    generate: function(dataSize) {
        var interpolation = function(a, b, ratio) {
            var f = (1 - Math.cos(ratio*Math.PI)) * 0.5;
            return a*(1-f) + b*f;
        };
        var createLayer = function(interval) {
            if (interval < 1) { 
                return null;
            }

            var data = [];
            var a = Math.random();
            var b;
            var i;
            for (i = 0; i < dataSize; i += ~~interval) {
                b = Math.random();
                for (var j = 0; j < interval; j++) {
                    data[i+j] = interpolation(a, b, j/interval);
                }
                a = b;
            }

            a = data[dataSize - ~~interval];
            b = data[0];
            for (var j = 0; j < interval; j++) {
                data[dataSize - ~~interval + j] = interpolation(a, b, j/interval);
            }

            return data;
        };

        var layers = [];
        for (var i = 0, b = Math.pow(2, 4); i < 8; i++, b *= 2) {
            var d = createLayer(dataSize / b);
            if (d === null) {
                break;
            }
            layers.push(d);
        }

        var result = [].concat(layers[0]);
        for (var i = 1, b = 0.5; i < layers.length; i++, b *= 0.5) {
            for (var j = 0; j < dataSize; j++) {
                result[j] += layers[i][j] * b;
            }
        }
        for (var i = 0; i < result.length; i++) {
            result[i] /= 2;
        }
        return result;
    }
};

gls2.Noise.noise = gls2.Noise.generate(512);
