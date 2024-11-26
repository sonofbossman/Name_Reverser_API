const home = (req, res)=>{
    res.status(200).send('<h2 align=center>Name Reverser API Network</h2>')
}

const reversedName = (req, res)=>{
    const { name } = req.query // Destructuring the query params from the request body
    
    if(!name){
        return res.status(400).json({ error: "Name query parameter must be provided!"})
    }

    res.json(reverseNameFunc(name))
}

const submitName = (req, res)=>{
    // Destructuring the query params from the request body
    const { name } = req.body 
    
    if(!name){
        return res.status(400).json({ error: "Name query parameter must be provided!"})
    }

    res.json(reverseNameFunc(name))
}

function reverseNameFunc(name){

    /*
        we can reverse the name with the in-built reverse() func but it only work on arrays
        so we need to convert the name into an array with the help of in-built split() func
        then apply the reverse() func, afterwards convert the array into a string with the join() func
    */

    const reversed_name = name.split('').reverse().join('')
    console.log(reversed_name) 
    return {
        original: name,
        reversed: reversed_name
    }    
}
export { home, reversedName, submitName }