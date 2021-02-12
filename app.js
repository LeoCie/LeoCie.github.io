function seeAnotherPicture() {
    var imageLinks = 
    ["https://d1fdloi71mui9q.cloudfront.net/NhnapimYTxazOQV2FPXJ_6fb7a1fcc54b5e9d17560f2e4df39b4f7"
    ,"https://media-exp1.licdn.com/dms/image/C4E03AQG5bYd8xLcxGw/profile-displayphoto-shrink_200_200/0/1581275721923?e=1617235200&v=beta&t=_UGzne368R7Vxj_LxJ6IUHsI76fnidaDptZdiijj_YM"
    ,"https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-9/117680947_10158775388843304_1332791736078542510_o.jpg?_nc_cat=109&ccb=3&_nc_sid=8bfeb9&_nc_eui2=AeErYh3CSy6EfCyciNKHkrXoDETIsG_a0p8MRMiwb9rSn2DZCRZrSAjtsAk3Je-98xdae4nhT1bMDj747b3D6QKo&_nc_ohc=vmFaLsvCHvYAX9wIFWG&_nc_ht=scontent-lhr8-1.xx&oh=9d36c730f266e00b79acd9db24d6a441&oe=604A7C57"
    ,"https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/84533393_135352291340709_4084054298297338048_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=109&_nc_ohc=NW0tWPjm62MAX-vIC1D&tp=1&oh=d4a77ad99fdf6ac7e22e5deded5a4ea6&oe=604E29B6"
    ,"https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/118050202_594077614615978_7184177503539444492_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=110&_nc_ohc=rVgX4bj6GDEAX9XH-5N&tp=1&oh=82e4e2a3e2c367097280f72b155c6cb5&oe=60508B42"
]
    var image = document.getElementById("profile-img");
    newImages = imageLinks.filter(e => e != imageLinks.src);
    var randomInt = Math.floor(Math.random() * newImages.length);
    image.src = imageLinks[randomInt];
}