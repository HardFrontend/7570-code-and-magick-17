'use strict';

(function () {
    // pop up
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