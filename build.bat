erase build\gls2.js

java -jar tools/compiler.jar ^
--externs libs/tmlib.js ^
--js libs/bulletml.js ^
--js libs/bulletml.walker.js ^
--js libs/bulletml.dsl.js ^
--js libs/bulletml.tmlib.js ^
--js src/main.js ^
--js src/GlShooter2.js ^
--js src/Player.js ^
--js src/ShotBullet.js ^
--js src/Laser.js ^
--js src/Stage.js ^
--js src/StageData.js ^
--js src/Effect.js ^
--js src/common/Scene.js ^
--js src/common/DialogMenu.js ^
--js src/common/Particle.js ^
--js src/common/ConsoleWindow.js ^
--js src/scene/TitleScene.js ^
--js src/scene/ShipSelectScene.js ^
--js src/scene/GameScene.js ^
--js src/scene/ResultScene.js ^
--js src/scene/GameOverScene.js ^
--js src/scene/ContinueConfirmScene.js ^
--js src/scene/EndingScene.js ^
--js src/enemy/Enemy.js ^
--js src/enemy/EnemyHard.js ^
--js src/enemy/EnemySoft.js ^
--js src/enemy/EnemyUnit.js ^
--js src/enemy/Danmaku.js ^
--js libs/math.js ^
--compilation_level ADVANCED_OPTIMIZATIONS ^
--language_in ECMASCRIPT5 ^
--js_output_file build/gls2.js
rem --formatting PRETTY_PRINT
