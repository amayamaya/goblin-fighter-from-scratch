export function renderOpponent(OpponentData) {
    console.log(OpponentData, 'what is the data type?');
    const OpponentEl = document.createElement('div');
    const faceEl = document.createElement('p');
    const streetNameEl = document.createElement('p');
    const hutzpahEl = document.createElement('p');

    OpponentEl.classList.add('opponent');

    streetNameEl.textContent = OpponentData.streetName;
    hutzpahEl.textContent = OpponentData.hutzpah < 0 ? 0 : OpponentData.hutzpah;
   
   
    // ternary to display hutzpah stats
    faceEl.textContent = OpponentData.hutzpah > 0 ? '🐁' : '🪩​';
    // suggested input : take the face DOM element and change it's text content. If the opponents hutzpah is greater than 0, make the text content a mouse- otherwise make it a disco ball.


    if (OpponentData.hutzpah <= 0) {
        // if < 0 add a CSS class
        OpponentEl.classList.add('dead');
    }

    OpponentEl.append(streetNameEl, faceEl, hutzpahEl);

    return OpponentEl;    
}