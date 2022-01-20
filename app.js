const getPrevData = () => {
    var PrevData = localStorage.getItem('txt-notepad');
    if (PrevData == null || PrevData == '') { } else {
        document.getElementById('notepadtxt').innerHTML = PrevData;
        var characterLength = document.getElementById('notepadtxt').value.length;
        var lines = document.getElementById('notepadtxt').value.split(/\r|\r\n|\n/);
        document.getElementById('characters').innerHTML = `${characterLength} Characters written, ${lines.length} Lines`
        document.getElementById('notificationb').style.display = 'inline-block';
        setTimeout(function(){document.getElementById('notificationb').style.display = 'none';}, 1500)
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
    var lines = document.getElementById('notepadtxt').value.split(/\r|\r\n|\n/);
    document.getElementById('characters').innerHTML = `${characterLength} Characters written, ${lines.length} Lines`
    document.getElementById('notification').style.display = 'inline-block';
    setTimeout(function(){document.getElementById('notification').style.display = 'none';}, 1500)
}

const clearData = () => {
    localStorage.setItem('txt-notepad', '');
    window.location.reload();
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
