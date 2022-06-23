
//creates button to show rules
export function createRulesBtn() {
    const rulesBtn = document.createElement('button');
    rulesBtn.id = ('rules');
    rulesBtn.innerText = ('Rules');
    rulesBtn.onclick = showRules;

    document.getElementById('main-menu').appendChild(rulesBtn);
}
//function to show rules by creating <div>
//and run function to create button that will remove this <div> with rules
function showRules() {
    
    let exist = document.getElementById('rules-list');    //protection against duplication
    if (exist) {
        return;
    }
    
    const rulesList = document.createElement('div');
    rulesList.id = ('rules-list');
    rulesList.innerHTML = 'Just eat that stupid cake!<br />Oh and use arrows.<br />';

    document.getElementById('main-menu').appendChild(rulesList);

    removeRulesBtn();
}
//function to creates button for removal of rules
function removeRulesBtn() {
    const removeRulesBtn = document.createElement('button');
    removeRulesBtn.id = ('remove-rules');
    removeRulesBtn.innerText = ('OK');

    document.getElementById('rules-list').appendChild(removeRulesBtn);
    
    removeRulesBtn.onclick = function () {                
        document.getElementById('rules-list').remove();
    }
}