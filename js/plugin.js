let html = document.querySelector('#html'),
    css = document.querySelector('#css'),
    js = document.querySelector('#js'),
    sass = document.querySelector('#sass'),
    gulp = document.querySelector('#gulp'),
    github = document.querySelector('#github'),
    pug = document.querySelector('#pug')
    jquery = document.querySelector('#jquery'),

html.style.color = '#E44D26';
css.style.color = '#0F5298';
js.style.color = '#FBA91A';
gulp.style.color = '#DB4446';
sass.style.color = '#CD6799';
github.style.color = '#333333';
pug.style.color = '#453014';
jquery.style.color = '#0868AC';

$(function (){
    'use strict';
    $('#say-hello-form .input-form input').on('focusout', function(){
      if ($(this).val() != '') {
        $(this).parent().addClass('has-data');
      } else {
        $(this).parent().removeClass('has-data');
      }
      
    })
  })