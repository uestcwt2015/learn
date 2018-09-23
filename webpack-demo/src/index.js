import _ from 'lodash';
import './style.css';
import './style2.css';
import imgdemo from './asset/images/demo2.jpg';

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.className = 'hello';

  return element;
}

document.body.appendChild(component());

var img = new Image();
img.src = imgdemo;

document.body.appendChild(img);
