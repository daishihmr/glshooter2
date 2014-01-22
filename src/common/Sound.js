(function() {

gls2.currentBgm = null;
gls2.playBgm = function(bgmName, continuePrevBgm) {
    if (!continuePrevBgm) gls2.stopBgm();

    var bgm = tm.asset.AssetManager.get(bgmName);
    var loop = tm.asset.AssetManager.get("bgmLoopInfo");
    if (bgm) {
        gls2.currentBgm = bgm.clone();
        gls2.currentBgm.volume = gls2.core.bgmVolume * 0.1;
        gls2.currentBgm.loop = true;
        gls2.currentBgm.play();

        if (loop.data[bgmName]) {
            gls2.currentBgm.source["loopStart"] = loop.data[bgmName].start;
            gls2.currentBgm.source["loopEnd"] = loop.data[bgmName].end;
        }
    }
};
gls2.stopBgm = function() {
    if (gls2.currentBgm !== null && gls2.currentBgm.source["playbackState"] === AudioBufferSourceNode.PLAYING_STATE) gls2.currentBgm.stop();
};
gls2.fadeOutBgm = function() {
    if (gls2.currentBgm !== null) {
        var bgm = gls2.currentBgm;
        gls2.currentBgm = null;
        bgm.loop = false;
        var downVol = function() {
            bgm.volume -= 0.001;
            if (bgm.volume <= 0) {
                if(bgm.playbackState === AudioBufferSourceNode.PLAYING_STATE) bgm.stop();
            } else {
                setTimeout(downVol, 10);
            }
        };
        setTimeout(downVol, 10);
    }
}

gls2.playSound = function(soundName) {
    if (gls2.core.seVolume === 0) return;
    if (gls2.playSound.played[soundName] === gls2.core.frame) return;

    var sound = tm.asset.AssetManager.get("sound/"+soundName);
    if (sound) {
        sound = sound.clone().play();
        if (soundName.substring(0, 2) === "vo") {
            sound.volume = gls2.core.seVolume * 0.5;

            if (gls2.playSound.voice !== null) gls2.playSound.voice.stop();
            gls2.playSound.voice = sound;
        } else {
            sound.volume = gls2.core.seVolume * 0.1;
        }
    }
    gls2.playSound.played[soundName] = gls2.core.frame;
};
gls2.playSound.played = {};
gls2.playSound.voice = null;

})();
