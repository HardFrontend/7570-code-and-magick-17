'use strict';

(function () {
    window.randomArrayNumber = function (array) {
        var randArrayNumber = Math.floor(Math.random() * array.length);

        return randArrayNumber;
    };

    var body = document.querySelector('body');
    var setupSimilarList = document.querySelector('.setup-similar-list');
    var setup = document.querySelector('.setup');
    var setupsimilar = document.querySelector('.setup-similar');
    var wizardTemplate = document.querySelector('#similar-wizard-template').content
        .querySelector('.setup-similar-item');


    var renderWizard = function (wizard) {
        var wizardElement = wizardTemplate.cloneNode(true);

        wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
        wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
        wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
        wizardElement.querySelector('.wizard-hands').style.fill = wizard.colorFireball;

        return wizardElement;
    };

    var renderWizards = function (array) {
        var fragment = document.createDocumentFragment();
        for (var i = 0; i < 4; i++) {
            fragment.appendChild(renderWizard(array[i]));
        }

        setupSimilarList.appendChild(fragment);

        setupsimilar.classList.remove('hidden');
    };

    var errorHandler = function (errorMessage) {
        var node = document.createElement('div');
        node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
        node.style.position = 'absolute';
        node.style.left = 0;
        node.style.right = 0;
        node.style.fontSize = '30px';

        node.textContent = errorMessage;
        body.insertAdjacentElement('afterbegin', node);
    };

    window.load(renderWizards, errorHandler);

    var form = document.querySelector('.setup-wizard-form');

    var closePopUp = function () {
        setup.classList.add('hidden');
    };

        form.addEventListener('submit', function (evt) {
            evt.preventDefault();
            window.upload(new FormData(form), closePopUp, errorHandler);

        });
})();