/*jslint indent: 2 */
/*global $: false, document: false, togglbutton: false*/

'use strict';

togglbutton.render('.form-cb-toolbar:not(.toggl)', {observe: true}, function (elem) {
  var link,
    newlink = createTag('div', 'form-cb-attach-zone'),
    container = $('.js-component-toolbar-right', elem),
    projectElem = $('.cb__header-inner .tb-element-subtitle a'),
    titleElem = $('.cb__header-inner .js-element-title-inner');

  link = togglbutton.createTimerLink({
    className: 'redbooth',
    description: titleElem.textContent,
    projectName: projectElem && projectElem.textContent
  });

  newlink.appendChild(link);

  container.appendChild(newlink);
});

togglbutton.render('.js-active-tasks-container .js-task-element:not(.toggl)', {observe: true}, function (elem) {
  var link,
      newlink = createTag('div', 'form-cb-attach-zone'),
      container = $('.js-element-title-inner h3', elem),
      projectElem = $('.workspace-navigation__title'),
      titleElem = $('.js-element-title-inner', elem);

  link = togglbutton.createTimerLink({
    className: 'redbooth',
    description: titleElem.textContent,
    projectName: projectElem && projectElem.textContent
  });

  newlink.appendChild(link);

  container.appendChild(newlink);
});
