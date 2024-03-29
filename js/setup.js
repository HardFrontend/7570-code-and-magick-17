'use strict';
(function () {
var  NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья','Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
    window.coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
    window.eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
    window.fireball = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

 window.randomArrayNumber = function (array) {
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

})();