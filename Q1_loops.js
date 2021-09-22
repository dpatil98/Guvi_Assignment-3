/*  Name    : Dhananjay Patil
    Battch  : B28
    Q1 - For the given JSON iterate over all for loops (for, for in, for of, forEach)
*/    
console.log("Q1-For the given JSON iterate over all for loops (for, for in, for of, forEach)");
Guvi_data = [{"Batch" :"B28" ,"Name" :"A","Email" :"a@lorem.com"},
             {"Batch" :"B28" ,"Name" :"B","Email" :"b@lorem.com"},
             {"Batch" :"B28" ,"Name" :"C","Email" :"c@lorem.com"}];

for(let i=0;i<Guvi_data.length;i++)
    {
        console.log(Guvi_data[i]);
    }

console.log("----------------------------------------");

for(let data_index in Guvi_data)
{
    console.log(Guvi_data[data_index]);
} 


console.log("----------------------------------------");

for(let data of Guvi_data)
{
    console.log(data);
}

console.log("----------------------------------------");

Guvi_data.forEach(d => {    console.log(d)    });
