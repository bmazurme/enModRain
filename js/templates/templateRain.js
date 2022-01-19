export function templateRain(item) {
    let obj = calcRain(item.slope, item.roof, item.facade, item.q20, item.n);
  
    if (item.slope < 1.5) {
      const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
      const deleteButton = cardElement.querySelector('.box__remove');
      const el1 = cardElement.querySelector('.formula1');
      const el2 = cardElement.querySelector('.formula2');
      const el4 = cardElement.querySelector('.formula4');
      const el7 = cardElement.querySelector('.formula7');
      const el10 = cardElement.querySelector('.formula10');
      const el13 = cardElement.querySelector('.formula13');
      const el14 = cardElement.querySelector('.formula14');
      const el27 = cardElement.querySelector('.formula27');
  
      katex.render(String.raw`Q`, el1, {throwOnError: false});
      katex.render(String.raw`Q = \dfrac {F \cdot q_{20}}{10000}`, el2, {throwOnError: false});
      katex.render(String.raw`q_{20}`, el4, {throwOnError: false});
      katex.render(String.raw`F_1 = ${roof.value} \space м^2`, el7, {throwOnError: false});
      katex.render(String.raw`F_2 = ${facade.value} \space м^2`, el10, {throwOnError: false});
      katex.render(String.raw`F = F_1 + 0.3 \cdot F_2`, el13, {throwOnError: false});
      katex.render(String.raw`F = ${roof.value} + 0.3 \cdot ${facade.value} = ${obj.sumArea} \space м^2`, el14, {throwOnError: false});
      deleteButton.addEventListener("click", deleteCard);
      cardElement.querySelector('.element__name').textContent = item.name;
      katex.render(String.raw`Q = \dfrac {${q20.value} \cdot ${obj.sumArea}}{10000} = ${obj.q.toFixed(2)} \space л/с`, el27, {throwOnError: false});
      
      return cardElement;
    }
    else {
      const card1Element = card1Template.querySelector('.element').cloneNode(true);
      const deleteButton = card1Element.querySelector('.box__remove');
      const el1 = card1Element.querySelector('.formula1');
      const el3 = card1Element.querySelector('.formula3');
      const el4 = card1Element.querySelector('.formula4');
      const el5 = card1Element.querySelector('.formula5');
      const el6 = card1Element.querySelector('.formula6');
      const el7 = card1Element.querySelector('.formula7');
      const el27 = card1Element.querySelector('.formula27');
      const el10 = card1Element.querySelector('.formula10');
      const el13 = card1Element.querySelector('.formula13');
      const el14 = card1Element.querySelector('.formula14');
      const el21 = card1Element.querySelector('.formula21');
  
      katex.render(String.raw`Q`, el1, {throwOnError: false});
      katex.render(String.raw`Q = \dfrac {F \cdot q_{5}}{10000}`, el3, {throwOnError: false});
      katex.render(String.raw`q_{20}`, el4, {throwOnError: false});
      katex.render(String.raw`q_{5}`, el5, {throwOnError: false});
      katex.render(String.raw`q_{5} = 4^n \cdot q_{20}`, el6, {throwOnError: false});
      katex.render(String.raw`q_{5} = 4^{${n.value}} \cdot ${q20.value} = ${obj.q5} \space л/с`, el21, {throwOnError: false});
      katex.render(String.raw`F_1 = ${roof.value} \space м^2`, el7, {throwOnError: false});
      katex.render(String.raw`F_2 = ${facade.value} \space м^2`, el10, {throwOnError: false});
      katex.render(String.raw`F = F_1 + 0.3 \cdot F_2`, el13, {throwOnError: false});
      katex.render(String.raw`F = ${roof.value} + 0.3 \cdot ${facade.value} = ${obj.sumArea} \space м^2`, el14, {throwOnError: false});
    
      deleteButton.addEventListener("click", deleteCard);
      card1Element.querySelector('.element__name').textContent = item.name;
      katex.render(String.raw`Q = \dfrac { ${obj.q5} \cdot ${obj.sumArea}}{10000} = ${obj.q.toFixed(2)} \space л/с`, el27, {throwOnError: false});
  
      return card1Element;
    }
  }