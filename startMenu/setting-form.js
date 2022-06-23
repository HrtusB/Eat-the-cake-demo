import { createSizeXSetting, createSizeYSetting } from "./settingForm/size-range.js";
import { createSizeOfMapLabel } from "./settingForm/size-label.js";
import { getSizeX, getSizeY } from "./settingForm/get-size.js";
import { createCancelBtn, createStartBtn } from "./settingForm/create-btn.js";

export function createSettingForm() {
    
    var sizeX = getSizeX();
    var sizeY = getSizeY();

    const settingGameForm = document.createElement('div');
    settingGameForm.id = ('setting-game-div');

    document.getElementById('setting-game').appendChild(settingGameForm);

    createSizeXSetting(sizeX);
    createSizeYSetting(sizeY);
    createSizeOfMapLabel(sizeX, sizeY);
    createStartBtn();
    createCancelBtn();
    


}


