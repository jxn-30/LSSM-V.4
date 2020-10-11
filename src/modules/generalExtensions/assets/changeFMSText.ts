export default (LSSM: Vue): void => {



    let radioMessageBuffer = radioMessage;
    const radioMessage = function (t) {
        switch (t.fms) {
            case 0:
                break;
            case 1: t.fms_text = "Frei über Funk <br>";
                break;
            case 2: t.fms_text = "Frei auf Wache <br>";
                break;
            case 3: t.fms_text = "Zum Berufungsort <br>";
                break;
            case 4: t.fms_text = "Am Berufungsort <br>";
                break;
            case 5:
                break;
            case 7: t.fms_text = "Zum Zielort <br>";
                break;
            case 8:
                break;
            case 9:
                break;
        }

        radioMessageBuffer(t);
    }
};