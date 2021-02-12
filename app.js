function seeAnotherPicture() {
    var imageLinks = 
    ["https://d1fdloi71mui9q.cloudfront.net/NhnapimYTxazOQV2FPXJ_6fb7a1fcc54b5e9d17560f2e4df39b4f7"
    ,"https://media-exp1.licdn.com/dms/image/C4E03AQG5bYd8xLcxGw/profile-displayphoto-shrink_200_200/0/1581275721923?e=1617235200&v=beta&t=_UGzne368R7Vxj_LxJ6IUHsI76fnidaDptZdiijj_YM"
    ,"https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-9/117680947_10158775388843304_1332791736078542510_o.jpg?_nc_cat=109&ccb=3&_nc_sid=8bfeb9&_nc_eui2=AeErYh3CSy6EfCyciNKHkrXoDETIsG_a0p8MRMiwb9rSn2DZCRZrSAjtsAk3Je-98xdae4nhT1bMDj747b3D6QKo&_nc_ohc=vmFaLsvCHvYAX9wIFWG&_nc_ht=scontent-lhr8-1.xx&oh=9d36c730f266e00b79acd9db24d6a441&oe=604A7C57"]
    var image = document.getElementById("profile-img");
    newImages = imageLinks.filter(e => e != imageLinks.src);
    var randomInt = Math.floor(Math.random() * newImages.length);
    image.src = imageLinks[randomInt];
}