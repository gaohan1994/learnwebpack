import './index.css';
import Img from './1.jpg'

export default function component () {
    var element = document.createElement('div');
    element.textContent = 'Hello webpack';
    element.className="hello";

    var myImg = new Image();
    myImg.src = Img;
    element.appendChild(myImg);

    return element;
}
