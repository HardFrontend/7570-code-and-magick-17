'use strict';

var  NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья','Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var  fireball = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var randomArrayNumber = function (array) {
    var randArrayNumber =  Math.floor(Math.random() * array.length);

    return randArrayNumber;
};

var creatMagesArray = function () {
    var mages = [];

    for (var i = 0; i < NAMES.length; i ++) {
        var randName = randomArrayNumber(NAMES);
        var randSurname = randomArrayNumber(SURNAMES);
        var randcoatColor = randomArrayNumber(coatColor);
        var randEyesColor = randomArrayNumber(eyesColor);

        var mage = {
            name: NAMES[randName] + ' ' + SURNAMES[randSurname],
            surname: SURNAMES[randSurname],
            coatColor: coatColor[randcoatColor],
            eyesColor: eyesColor[randEyesColor]
        };

        mages[i] = mage;
    }

    return mages;
};

var mageArray = creatMagesArray();

console.log(mageArray);

var setupSimilarList = document.querySelector('.setup-similar-list');
var setupsimilar = document.querySelector('.setup-similar');
var overlay = document.querySelector('.overlay');
var wizardTemplate = document.querySelector('#similar-wizard-template').content
    .querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
    var wizardElement = wizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
};

var renderWizards = function (array) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < 4; i++) {
        fragment.appendChild(renderWizard(mageArray[i]));
    }

    setupSimilarList.appendChild(fragment);

    setupsimilar.classList.remove('hidden');
    //overlay.classList.remove('hidden');
};

renderWizards(mageArray);

// pop up

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userCommentTextarea = document.querySelector('.setup-user-name');

var setupWizard = document.querySelector('.setup-wizard');
var wizardCoatSetup = setupWizard.querySelector('.wizard-coat');
var wizardEyesSetup = setupWizard.querySelector('.wizard-eyes');
var wizardFireballSetup = document.querySelector('.setup-fireball-wrap');

setupOpen.addEventListener('click', function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
});

var onPopupEscPress = function (evt) {
    var isFocusedTextarea = (document.activeElement === userCommentTextarea);
    if (evt.keyCode === 27 && !isFocusedTextarea) {
        onButtonClose();
    }
};

var onButtonClose = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
};

setupClose.addEventListener('click', onButtonClose);

//мантия

var wizardSetup = function ( array) {
    var style = array[randomArrayNumber(array)];

    return style;
};

wizardCoatSetup.addEventListener('click', function () {
    var color = wizardSetup(coatColor);
    this.style.fill = color;

    setup.querySelector('.wizard-coat-input').value = color;
});


wizardEyesSetup.addEventListener('click', function () {
    var color = wizardSetup(eyesColor);
    this.style.fill = color;

    setup.querySelector('.eyes-color-input').value = color;
});

wizardFireballSetup.addEventListener('click', function () {
    var color = wizardSetup(fireball);

    this.style.background = color;
    this.querySelector('input').value = color
});
