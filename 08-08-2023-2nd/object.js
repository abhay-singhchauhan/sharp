class Student{
    constructor(name, age, marks){
        this.name = name;
        this.age = age;
        this.marks = marks
    }
    setPlacementAge(minPlacementAge){
        return (minMarks) => {
            if(this.marks > minMarks && this.age > minPlacementAge){
                console.log(this.name + " is ready for placements")
            }else {
                console.log(this.name + " is not ready for placements")
            }
        }
    }
}

const Abhay = new Student("Abhay", 21, 80);
const Vaibhav = new Student("Vaibhav", 14, 42);

Abhay.setPlacementAge(18)(40)