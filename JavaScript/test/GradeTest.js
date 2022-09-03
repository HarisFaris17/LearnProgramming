const average = (values=[]) =>{
    if (!Array.isArray(values)) return new TypeError('The argument of average should be array')
    if (!values.every(value=> typeof value==='number')) return new ReferenceError('Elements of the array should be number')
    let sum = values.reduce((accumulator, currentValue)=>{
        return accumulator+currentValue;
    })
    return sum/values.length
}

const determineGrade = (average) =>{
    if(!(typeof average ==='number')) return new ReferenceError('Argument should be number')
    if(average>=80&&average<=100) return 'A';
    else if(average<80&&average>=70) return 'B';
    else if(average<70&&average>=60) return 'C';
    else if(average<60&&average>=50) return 'D';
    else if(average<50&&average>=0) return 'E';
    else return 'Enter valid average between 0 and 100'

}


export {average,determineGrade}