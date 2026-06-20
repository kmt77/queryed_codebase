const button = document.getElementById("calculateBtn");

button.addEventListener("click", calculateGrade);

function calculateGrade() {

    const name = document.getElementById("studentName").value;

    const html = Number(
        document.getElementById("htmlMark").value
    );

    const css = Number(
        document.getElementById("cssMark").value
    );

    const javascript = Number(
        document.getElementById("jsMark").value
    );

    const average = (html + css + javascript) / 3;

    let grade;

    if (average >= 80) {
        grade = "A";
    }
    else if (average >= 70) {
        grade = "B";
    }
    else if (average >= 60) {
        grade = "C";
    }
    else if (average >= 50) {
        grade = "D";
    }
    else {
        grade = "F";
    }

    const resultDiv =
        document.getElementById("result");

    resultDiv.style.display = "block";

    resultDiv.innerHTML = `
        <h3>Result</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Average:</strong> ${average.toFixed(2)}</p>
        <p><strong>Grade:</strong> ${grade}</p>
    `;
}
