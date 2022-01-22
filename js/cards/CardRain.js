import { settings } from '../config.js';
import { Card } from './Card.js';

export class CardRain extends Card {
  constructor(item, cardTemplate, openPopup, closePopup) {
    super();
    this._item = item;
    this._cardTemplate = cardTemplate;
    this._openPopup = openPopup;
    this._closePopup = closePopup;
    this._cardName = settings.cardName;
    this._element = settings.element;
    this._elementRemove = settings.elementRemove;
  }

  createCard() {
    const cardTemplate = document.querySelector(this._cardTemplate).content;
    const cardElement = cardTemplate.querySelector(this._element).cloneNode(true);
    const deleteButton = cardElement.querySelector(this._elementRemove);
    
    const el1 = cardElement.querySelector('.formula1');
    const el4 = cardElement.querySelector('.formula4');
    const el7 = cardElement.querySelector('.formula7');
    const el27 = cardElement.querySelector('.formula27');
    const el10 = cardElement.querySelector('.formula10');
    const el13 = cardElement.querySelector('.formula13');
    const el14 = cardElement.querySelector('.formula14');
    cardElement.querySelector(this._cardName).textContent = this._item.name;
    deleteButton.addEventListener("click", (evt) => super._deleteCard(evt));


    var graphScope = new paper.PaperScope();
    var canvas_1 = document.getElementById('canvas_1');
    graphScope.setup(canvas_1);
    graphScope.activate();
    const latexToImg = function(formula) {
      let wrapper = MathJax.tex2svg(formula, {
        em: 50,
        ex: 50,
        display: true
      })
      return wrapper.querySelector('svg');
    }
    const svgGroup = graphScope.project.importSVG(latexToImg('Q = \\dfrac {F \\cdot q_{20}}{10000}'));
    var bounds;
    svgGroup.scale(10);
    // for automatic scaling, use these lines instead:
    // bounds = svgGroup.strokeBounds;
    // svgGroup.scale(40 / bounds.height);
    bounds = svgGroup.strokeBounds;
    svgGroup.position.x = -bounds.x +10;
    svgGroup.position.y = -bounds.y +10;



    var svg = canvas_1;//document.querySelector('svg');
    var canvas = document.createElement('canvas');
    canvas.height = svg.getAttribute('height');
    canvas.width = svg.getAttribute('width');
    canvg(canvas, svg.parentNode.innerHTML.trim());
    var dataURL = canvas.toDataURL('image/png');
    var data = atob(dataURL.substring('data:image/png;base64,'.length)),
            asArray = new Uint8Array(data.length);
    
    for (var i = 0, len = data.length; i < len; ++i) {
        asArray[i] = data.charCodeAt(i);
    }
    
    var blob = new Blob([asArray.buffer], {type: 'image/png'});
    saveAs(blob, 'export_' + Date.now() + '.png');



    

    // const doc = new jsPDF();
    // //var imgData = canvas.toDataURL('image/png');
    // //doc.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
    // var img = svgGroup.toDataURL("image/png");
    // doc.addImage(img, 'png', 10, 10, 50, 50, 'monkey');
    // doc.save('Test.pdf');


    //console.log(svgGroup);




    // const doc = new jsPDF();
    // console.log(doc.text(20, 20, katex.renderToString("c = \\pm\\sqrt{a^2 + b^2}", {
    //        throwOnError: false})));
    //        console.log('===');

    // function(canvas) {
    //   var imgData = canvas.toDataURL('image/png');cd vendor

    //   // Generate PDF
    //   //var doc = new jsPDF('p', 'pt', 'a4');
    //   //doc.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
    //   //doc.save('test.pdf');
    // }

    //card-template


    //var myCanvas = document.getElementById('card-template');
    //var ctx = myCanvas.getContext('2d');
    //var img = new Image;
    //console.log(ctx);
    // img.onload = function(){
    //   ctx.drawImage(img,0,0); // Or at whatever offset you like
    // };
    // img.src = strDataURI;


    // var canvas = document.getElementById("card-template");
    // const doc = new jsPDF();
    // var imgData = canvas.toDataURL('image/png');
    // doc.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
    // doc.save('Test.pdf');




    
    katex.render(String.raw`Q`, el1, {throwOnError: false});
    katex.render(String.raw`q_{20}`, el4, {throwOnError: false});
    katex.render(String.raw`F_1 = ${this._item.roof} \space м^2`, el7, {throwOnError: false});
    katex.render(String.raw`F = F_1 + 0.3 \cdot F_2`, el13, {throwOnError: false});
    katex.render(String.raw`F = ${this._item.roof} + 0.3 \cdot ${this._item.facade} 
      = ${this._item.sumArea} \space м^2`, 
      el14, {throwOnError: false});
    katex.render(String.raw`F_2 = ${this._item.facade} \space м^2`, el10, {throwOnError: false});

    if (this._item.slope < 1.5) {
      const el2 = cardElement.querySelector('.formula2');
      katex.render(String.raw`Q = \dfrac {F \cdot q_{20}}{10000}`, el2, {throwOnError: false});
      katex.render(String.raw`Q = \dfrac {${this._item.q20} \cdot ${this._item.sumArea}}{10000} 
        = ${this._item.q.toFixed(2)} \space л/с`, el27, {throwOnError: false});






      return cardElement;
    }
    else {
      const el3 = cardElement.querySelector('.formula3');
      const el5 = cardElement.querySelector('.formula5');
      const el6 = cardElement.querySelector('.formula6');
      const el21 = cardElement.querySelector('.formula21');
      katex.render(String.raw`Q = \dfrac {F \cdot q_{5}}{10000}`, el3, {throwOnError: false});
      katex.render(String.raw`q_{5}`, el5, {throwOnError: false});
      katex.render(String.raw`q_{5} = 4^n \cdot q_{20}`, el6, {throwOnError: false});
      katex.render(String.raw`q_{5} = 4^{${this._item.n}} \cdot ${this._item.q20} 
        = ${this._item.q5} \space л/с`, el21, {throwOnError: false});
      katex.render(String.raw`Q = \dfrac { ${this._item.q5} \cdot ${this._item.sumArea}}{10000} 
        = ${this._item.q.toFixed(2)} \space л/с`, 
        el27, {throwOnError: false});
      return cardElement;
    }
  }
}