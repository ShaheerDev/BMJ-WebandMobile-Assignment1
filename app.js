const getPrevData = () => {
    var PrevData = localStorage.getItem('txt-notepad');
    if (PrevData == null || PrevData == '') { } else {
        document.getElementById('notepadtxt').innerHTML = PrevData;
        var characterLength = document.getElementById('notepadtxt').value.length;
        document.getElementById('characters').innerHTML = `${characterLength} Characters written.`

        var alignData = localStorage.getItem('align');
        if (alignData == '' || alignData == null) { } else {
            if (alignData == 'left') {
                document.getElementById('centerbtn').value = 'Align Text Center';
                document.getElementById('notepadtxt').style.textAlign = 'left';
                localStorage.setItem('align', 'left')
            } else {
                document.getElementById('centerbtn').value = 'Align Text Left';
                document.getElementById('notepadtxt').style.textAlign = 'center';
                localStorage.setItem('align', 'center')
            }
        }
    }
}

const updateData = () => {
    localStorage.setItem('txt-notepad', document.getElementById('notepadtxt').value);

    var characterLength = document.getElementById('notepadtxt').value.length;
    document.getElementById('characters').innerHTML = `${characterLength} Characters written.`
}

const clearData = () => {
    localStorage.setItem('txt-notepad', '');
    window.location.reload();
    document.getElementById('characters').innerHTML = `${characterLength} Characters written.`
}


const alignText = () => {
    if (document.getElementById('centerbtn').value == 'Align Text Left') {
        document.getElementById('centerbtn').value = 'Align Text Center';
        document.getElementById('notepadtxt').style.textAlign = 'left';
        localStorage.setItem('align', 'left')
    } else {
        document.getElementById('centerbtn').value = 'Align Text Left';
        document.getElementById('notepadtxt').style.textAlign = 'center';
        localStorage.setItem('align', 'center')
    }
}