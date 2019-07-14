'use strict';

(function () {
    // pop up
      /*  var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
    var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];*/
    window.coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
    window.eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
    window.fireball = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
    var ESC_KEYCODE = 27;
    var ENTER_KEYCODE = 13;

    var setup = document.querySelector('.setup');
    var setupOpen = document.querySelector('.setup-open');
    var setupClose = setup.querySelector('.setup-close');
    var userCommentTextarea = document.querySelector('.setup-user-name');

    var setupWizard = document.querySelector('.setup-wizard');
    var wizardCoatSetup = setupWizard.querySelector('.wizard-coat');
    var wizardEyesSetup = setupWizard.querySelector('.wizard-eyes');
    var wizardFireballSetup = document.querySelector('.setup-fireball-wrap');

    var openPopup = function () {
        setup.classList.remove('hidden');
        document.addEventListener('keydown', onPopupEscPress);
    };

    var onPopupEscPress = function (evt) {
        var isFocusedTextarea = (document.activeElement === userCommentTextarea);
        if (evt.keyCode === ESC_KEYCODE && !isFocusedTextarea) {
            onButtonClose();
        }
    };

    var onButtonClose = function () {
        setup.classList.add('hidden');
        document.removeEventListener('keydown', onPopupEscPress);
    };

    setupOpen.addEventListener('click', function () {
        openPopup();
    });

    setupOpen.addEventListener('keydown', function(evt) {
        if (evt.keyCode === ENTER_KEYCODE) {
            openPopup();
        }
    });

    setupClose.addEventListener('click', onButtonClose);

//мантия

    var wizardSetup = function ( array) {
        var style = array[window.randomArrayNumber(array)];

        return style;
    };

    wizardCoatSetup.addEventListener('click', function () {
        var color = wizardSetup(window.coatColor);
        this.style.fill = color;

        setup.querySelector('.wizard-coat-input').value = color;
    });


    wizardEyesSetup.addEventListener('click', function () {
        var color = wizardSetup(window.eyesColor);
        this.style.fill = color;

        setup.querySelector('.eyes-color-input').value = color;
    });

    wizardFireballSetup.addEventListener('click', function () {
        var color = wizardSetup(window.fireball);

        this.style.background = color;
        this.querySelector('input').value = color
    });

})();