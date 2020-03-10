
var aa ='aderd';
var dd = new Date();
data.forEach((v,i)=>
{
    var ch;
    var str =v.Name;
    if(aa.toLowerCase()==str.toLowerCase())
    {
        ch = `${aa.substr(0,3)}${dd.getDate()}${dd.getMonth()+1}${dd.getFullYear()}`;
        v.Name = ch;
    }
    
});
console.log(data);



if(this.value.startswith()