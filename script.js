function checkDOB() {
    var dob = document.getElementById("dob").value;
    var currentDate = document.getElementById("currentDate").value;

    var birthDate = new Date(dob);
    var today = new Date(currentDate);

    var ageInMilliseconds = today - birthDate;

    var years = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
    var months = Math.floor((ageInMilliseconds % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
    var days = Math.floor((ageInMilliseconds % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

    var resultMessage = '<div class="alert alert-success" role="alert">';
    resultMessage += 'You are eligible. Age: ';
    resultMessage += years > 0 ? years + ' years, ' : '';
    resultMessage += months > 0 ? months + ' months, ' : '';
    resultMessage += days > 0 ? days + ' days' : '';
    resultMessage += '</div>';

    document.getElementById("result").innerHTML = resultMessage;
}
