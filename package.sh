./build.sh $1

rm -rf package

mkdir package
mkdir package/assets
mkdir package/assets2
mkdir package/extern
mkdir package/font
mkdir package/libs
mkdir package/target

cp assets/* package/assets/
cp assets2/* package/assets2/
cp extern/* package/extern/
cp font/* package/font/
cp libs/* package/libs/
cp target/* package/target/
cp index.html package/
