export function renderOpponent(OpponentData) {
    const OpponentEl = document.createElement('div');
    const faceEl = document.createElement('p');
    const streetNameEl = document.createElement('p');
    const hutzpahEl = document.createElement('p');

    OpponentEl.classList.add('opponent');

    streetNameEl.textContent = OpponentData.streetName;
    hutzpahEl.textContent = OpponentData.hutzpah < 0 ? 0 : OpponentData.hutzpah;
   
   
    // ternary to display hutzpah stats
    faceEl.textContent = OpponentData.hutzpah > 0 ? '🐁' : '🪩​';

    if (OpponentData.hutzpah < 0) {
        OpponentEl.classList.add('dead');
    }

    OpponentEl.append(streetNameEl, faceEl, hutzpahEl);

    return OpponentEl;    
}