API_KEY = '358df054457df80cfd78f38ef349d222';
var currentX = 48;
var currentZ = 45;
var imageLinks =
    ["https://d1fdloi71mui9q.cloudfront.net/NhnapimYTxazOQV2FPXJ_6fb7a1fcc54b5e9d17560f2e4df39b4f7",
    "https://i.imgur.com/Dt0MnLf.jpg",
    "https://i.imgur.com/vBu9f7C.jpg",
    "https://i.imgur.com/4TJ5Ltg.png",
    "https://i.imgur.com/S6uCMok.jpg"];
FetchTopType();

function seeAnotherPicture() {
    var image = document.getElementById("profile-img");
    newImages = imageLinks.filter(e => e != image.src);
    var randomInt = Math.floor(Math.random() * newImages.length);
    image.src = newImages[randomInt];
}

function rotateCube(direction) {
    var cube = document.getElementById("shape-cube");
    var degreesToRotate = 25;
    if (direction == "left") {
        currentZ = currentZ + degreesToRotate;
        cube.style.transform = 'rotateX(' + currentX + 'deg) rotateY(0deg) rotateZ(' + currentZ + 'deg)';
    }
    else if (direction == "right") {
        currentZ = currentZ - degreesToRotate;
        cube.style.transform = 'rotateX(' + currentX + 'deg) rotateY(0deg) rotateZ(' + currentZ + 'deg)';
    }
    else if (direction == "up") {
        currentX = currentX + degreesToRotate;
        cube.style.transform = 'rotateX(' + currentX + 'deg) rotateY(0deg) rotateZ(' + currentZ + 'deg)';
    }
    else if (direction == "down") {
        currentX = currentX - degreesToRotate;
        cube.style.transform = 'rotateX(' + currentX + 'deg) rotateY(0deg) rotateZ(' + currentZ + 'deg)';
    }
    else if (direction == "reset") {
        cube.classList.remove('rotate');
        currentX = 48;
        currentZ = 45;
        cube.style.transform = 'rotateX(' + currentX + 'deg) rotateY(0deg) rotateZ(' + currentZ + 'deg)';
    }
    else if (direction == 'continuous') {
        if (cube.classList.contains('rotate')) {
            cube.classList.remove('rotate');
            return;
        }
        cube.classList.add('rotate');
    }
}

const toggleBody = document.querySelector('.toggle-body');
const toggleBtn = document.querySelector('.toggle-btn');
const bodyClasses = document.querySelector('body').classList;

toggleBtn.addEventListener('click', () => {
    toggleBody.classList.toggle('toggle-body--on');
    toggleBtn.classList.toggle('toggle-btn--on');
    toggleBtn.classList.toggle('toggle-btn--scale');
    if (bodyClasses.contains('dark-mode')) {
        bodyClasses.remove('dark-mode');
        return;
    }
    bodyClasses.add('dark-mode');
});

async function FetchTopType() {
    var chosenTimeFrame = document.getElementById("timeSelect").value;
    var chosenType = document.getElementById("typeSelect").value;
    StartLoading();
    await FetchAndSetTopType(chosenType, chosenTimeFrame).then(data => { setHtmlForTopType(chosenType, data); });
    StopLoading();
}

async function FetchAndSetTopType(type, chosenTimeFrame) {
    var response = await fetch('http://ws.audioscrobbler.com/2.0/?method=user.gettop'+type+'s&user=kilseic&api_key=' + API_KEY + '&format=json&limit=15&period=' + chosenTimeFrame);
    return await response.json();
}

function setHtmlForTopType(type, data) {
    for (var i = 0; i < 15; i++) {
        var listNumber = (i + 1).toString();
        var nameOfListing = data['top'+type+'s'][type][i]['name'];
        if (nameOfListing.length >= 30) {
            nameOfListing = nameOfListing.substring(0, 27) + '...'
        }
        listingHtml = document.getElementById("listing" + listNumber);
        listingHtml.innerHTML = listNumber + ". " + nameOfListing + ' (' + data['top'+type+'s'][type][i]['playcount'] + ' plays)';
        listingHtml.href = data['top'+type+'s'][type][i]['url'];
    }
}

function StartLoading() {
    document.getElementById("timeSelect").disabled = true;
    document.getElementById("typeSelect").disabled = true;
    document.getElementById("listings").style.display = "none";
    document.getElementById("loading-spinner").style.display = "block";
}

function StopLoading() {
    document.getElementById("timeSelect").disabled = false;
    document.getElementById("typeSelect").disabled = false;
    document.getElementById("loading-spinner").style.display = "none";
    document.getElementById("listings").style.display = "block";
}