import { Application } from '@splinetool/runtime';

const canvas1 = document.getElementById('canvas3d');
const app1 = new Application(canvas1);
app1.load('https://prod.spline.design/apobIC-eu2V8GmdZ/scene.splinecode');

const canvas2 = document.getElementById('canvas4d');
const app2 = new Application(canvas2);
app2.load('https://prod.spline.design/JV20Vi5dtkuCsOuv/scene.splinecode');
