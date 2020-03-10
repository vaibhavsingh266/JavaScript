class Admin {
    constructor()   {
        if(localStorage.getItem('Students') == null)    {
            localStorage.setItem('Students', JSON.stringify(Array.from(new Map())));
        }
    }
    
    addStudent(student)    {
        let id = student.Name.slice(0,3).toLowerCase();
        let students = new Map(JSON.parse(localStorage.getItem('Students')));
        let name = student.Name;
        let emailInput = student.Email;
        var dd = new Date();
        var uniqueEmail = true;
        students.forEach((v,i)=>
        {
            var ch;
            var str =v.Name;
            var email = v.Email;
            if(name.toLowerCase()==str.toLowerCase())
            {
                ch = `${name.substr(0,3)}${dd.getDate()}${dd.getMonth()+1}${dd.getFullYear()}`;
                id = ch.toLowerCase();

            }
            if(email == emailInput) {
                uniqueEmail = false;   
            }
        });
        if(!uniqueEmail)
            return false;
        students.set(id, student);
        localStorage.setItem('Students', JSON.stringify(Array.from(students)));
        return true;
    }

    getStudent()    {
        let students = new Map(JSON.parse(localStorage.getItem('Students')));
        return students;
    }

    deleteStudent(id) {
        let students = new Map(JSON.parse(localStorage.getItem('Students')));
        students.delete(id);
        localStorage.setItem('Students', JSON.stringify(Array.from(students)));
        return students;
    }

    getCredentials()    {
        let crd = new Map();
        crd.set('id', 1);
        crd.set('pwd', "admin")
        return crd;
    }

    search(inputData, option="certificates")    {        
        let searchData = new Map(JSON.parse(localStorage.getItem(option)));
        let students = new Map(JSON.parse(localStorage.getItem('Students')));
        let studentList = new Map();
        searchData.forEach((v,i) => {
            if(i.startsWith(inputData))  {
                for(var j in v) {
                    let data = students.get(v[j]);
                    console.log(data);
                    studentList.set(v[j], data);
                }
            }
        });
        return studentList;
    }
}