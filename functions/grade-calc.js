function gradeCalc(studentScore, maxScore) {
    let studentGrade = setGrade(studentScore)
    let studentPercentage = setPercentage(studentScore, maxScore)
    return `You scored ${studentScore} out of ${maxScore}, You got a ${studentGrade} (${studentPercentage}%)`
    
}

function setPercentage(studentScore, maxScore) {
    let percent = (studentScore / maxScore) * 100
    return percent
    
}

function setGrade(studentScore) {
    let studentGrade = ''
    if (studentScore >= 90) {
        studentGrade = 'A'
    } else if (studentScore <= 89 && studentScore >= 80) {
        studentGrade = 'B'
    } else if (studentScore <= 79 && studentScore >= 70) {
        studentGrade = 'C'
    } else if (studentScore <= 69 && studentScore >= 60) {
        studentGrade = 'D'
    } else {
        studentGrade = 'F'
    }
    return studentGrade
}


console.log(gradeCalc(73, 100))