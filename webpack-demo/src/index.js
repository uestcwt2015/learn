function component() {
  return import(/* webpackChunkName: "lodash" */ 'lodash')
  .then(_ => {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.onclick = printMe;
    btn.innerHTML = 'Click me and check the console!';

    element.appendChild(btn);
  })
  .catch(error => 'An error occurred while loading the component');
}

getComponent().then(component => {
  document.body.appendChild(component());
})
