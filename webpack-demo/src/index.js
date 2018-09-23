import _ from 'lodash';
import './style.css';
import './style2.css';
import demo from './asset/images/demo.jpeg';
import demo2 from './asset/images/demo2.jpg';

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.className = 'hello';

  return element;
}

document.body.appendChild(component());

var img = new Image();
img.src = demo;

var img2 = new Image();
img2.src = demo2;

document.body.appendChild(img);
document.body.appendChild(img2);
