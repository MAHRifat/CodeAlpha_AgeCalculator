document.getElementById('ageForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let day = parseInt(document.getElementById('day').value);
    let month = parseInt(document.getElementById('month').value);
    let year = parseInt(document.getElementById('year').value);
    let resultBox = document.getElementById('result');

    if (!day || !month || !year) {
        resultBox.innerHTML = "⚠ Please enter a valid date.";
        resultBox.style.opacity = 1;
        return;
    }

    let today = new Date();
    let birthDate = new Date(year, month - 1, day);

    if (birthDate > today) {
        resultBox.innerHTML = "⚠ Birth date cannot be in the future.";
        resultBox.style.opacity = 1;
        return;
    }

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        ageDays += prevMonth;
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    resultBox.innerHTML = `🎉 You are <span style="color:#ffcc70">${ageYears}</span> years, <span style="color:#ffcc70">${ageMonths}</span> months, and <span style="color:#ffcc70">${ageDays}</span> days old.`;
    resultBox.style.opacity = 1;
});
