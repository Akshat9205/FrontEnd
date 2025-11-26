let globalvar = "globalvar"
console.log(globalvar);

function newfunc()
{
    let localvar = "localvar"
    console.log(globalvar); 
    console.log(localvar);
    
}

console.log(localvar);


if(true)
{
    let scopevar = "scope"
    console.log(scopevar);
}

console.log(scopevar);


function newFunct()
{
    let lexicalvar = "lexical"

    function innerFunc()
    {
        console.log(lexicalvar);
        
    }
    console.log(lexicalvar);
}