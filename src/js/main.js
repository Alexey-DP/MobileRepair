import tabs from './modules/tabs';
import upSelect from './modules/upSelect';
import accordion from './modules/accordion';
import moreProducts from './modules/moreProducts';
import modals from './modules/modals';
import dropMenu from './modules/dropMenu';
import forms from './modules/forms';
import mask from './modules/mask';
import inputs from './modules/inputs';
import footerDate from './modules/footerDate';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    tabs('.repair-phones', '.repair-phones-link', '.repair-price-phone');
    upSelect('.up');
    accordion('.products-group');
    mask('[name="phone"]');
    moreProducts('.show-group', '.hide-group', '.products-group');
    modals('[data-form]', '.modal-form', '.close');
    modals('.burger-menu', '.modal-burger', '.close');
    dropMenu('.header__nav-drop a', '.repair-phones-link');
    forms('form', '5195101832:AAHpzXr7lQaBNtdpBDSVEZl1nk77xNLEWDI', '-753634730');
    inputs('[name="name"]', '[name="message"]');
    footerDate(2022, '[data-date]');
});