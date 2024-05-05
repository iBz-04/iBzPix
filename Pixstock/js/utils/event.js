/**
 * @copyright iBz 2024
 * @author ibz <ibz.04dev@gmail.com>
 */

"use strict";

/**
 * Add event on multiple elements
 * @param {NodeList} $elements NodeList
 * @param {String} eventType Event type eg. "click"
 * @param {Function} callback  Callback function
 */

export const addEventOnElements = function ($elements, eventType, callback) {
  $elements.forEach(($element) =>
    $element.addEventListener(eventType, callback)
  );
};
