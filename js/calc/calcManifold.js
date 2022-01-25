export function calcManifold(cardElement, fields) {
    let squares = generateSquareFormulas(cardElement, fields);
    let sum = calculateSumSquare(cardElement, squares);
    const minDiameter = calculateManifoldDiameter(cardElement, sum);
    const closestDiameter = findClosestDiameter(minDiameter);
    showResult(cardElement, closestDiameter);
}

function generateSquareFormulas(cardElement, fields) {
    let squares = [];
    for (let i = 0; i < fields.length; i++) {
        let className = "pipe" + i.toString();
        const htmlFormula = `<p class="element__paragraph">Трубопровод №${i + 1}</p>
                             <p class="element__paragraph">
                                <span class=${className}></span>
                             </p>`
        cardElement.querySelector('.element__group').insertAdjacentHTML("beforeend", htmlFormula);
        const el = cardElement.querySelector(`.${className}`);
        const diameter = fields[i].querySelector('.form__input').value;
        const result = 3.14 * diameter * diameter / 4;
        squares.push(result);
        katex.render(String.raw`S_${i + 1} = \dfrac{3.14 \cdot ${diameter}^2}{4} = ${result} \space мм^2 `, el, {throwOnError: false});
    }
    return squares;
}

function calculateSumSquare(cardElement, squares) {
    const htmlHeader = `<p class="element__paragraph">Сумма площадей всех трубопроводов равна:</p>
                        <p class="element__paragraph"><span class="square__summ"></span></p>`;
    cardElement.querySelector('.element__group').insertAdjacentHTML("beforeend", htmlHeader);
    const el = cardElement.querySelector('.square__summ');
    const sum = arraySum(squares);
    katex.render(String.raw`S_т = ${squares.join('+')} = ${sum} \space мм^2 `,
        el, {throwOnError: false});
    return sum;
}

function calculateManifoldDiameter(cardElement, sum) {
    const htmlHeader = `<p class="element__paragraph">Находим минимальный диаметр коллектора по следующей формуле:</p>
                        <p class="element__paragraph"><span class="manifold__diameter"></span></p>`;
    cardElement.querySelector('.element__group').insertAdjacentHTML("beforeend", htmlHeader);
    const el = cardElement.querySelector('.manifold__diameter');
    const result = Math.sqrt(sum * 4 / 3.14);
    katex.render(String.raw`D_k = \sqrt[4]{ \dfrac{S_т \cdot 4}{\pi}} = \sqrt[4]{ \dfrac{${sum} \cdot 4}{3.14}} = ${result.toFixed(1)} \space мм `,
        el, {throwOnError: false});
    return result;
}

function showResult(cardElement, value) {
    const htmlHeader = `<p class="element__paragraph">Наиболее подходящий диаметр коллектора - ${value} мм</p>`;
    cardElement.querySelector('.element__group').insertAdjacentHTML("beforeend", htmlHeader);
}

function findClosestDiameter(value) {
    const diameterList = [10, 15, 20, 25, 40, 50, 65, 80, 100, 125, 150,
        200, 225, 250, 300, 325, 350, 400, 450, 500, 600, 700, 800, 900, 1000, 1200, 1400, 1600, 1800, 2000];

    for (let i = 0; i<diameterList.length; i++){
        if (diameterList[i]>=value){
            return diameterList[i];
        }
    }

}

function arraySum(array) {
    let s = 0;
    for (let i = 0; i < array.length; i++) {
        s += array[i]
    }
    return s
}
