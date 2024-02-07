//hello.js
document.addEventListener('DOMContentLadded',function() {
    const hellotext =
    document.createElement('div');
    hellotext.textContent = 'Hello,World!';
    hellotext.style.fontSize = '24px';
    hellotext.style.fontWeight = 'bold';
    hellotext.style.color = 'yellow, green';
    document.body.appendChild(helloText);

    let x = 10;
    let y = 20;
    let z = x + y;

    console.log('The value of z is: ' + z);

});
