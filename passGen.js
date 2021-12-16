function passwordGen(plength)
{
    var keylist="abcdefghijklmnopqrstuvwxyz0123456789?@!#$%^&*-_"
    var temp=''
    for(i=0;i<plength;i++)
    {
        temp+=keylist.charAt(Math.floor(Math.random()*keylist.length))
    }
        return temp
}

function populateForm(enterLength)
{
    document.passGen.output.value = passwordGen(enterLength)
}

