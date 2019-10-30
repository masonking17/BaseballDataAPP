var dataPromise = d3.json("teams.json")

dataPromise.then(

function(dataPromise)
    {
        maketable(dataPromise);
        console.log("good", (dataPromise))
        
        
    },

function(error)
    {
        console.log ("error", (error))
}
       
)




var maketable = function(dataPromise)
{
  d3.select("body")  
    .append("table")
    .attr("id", "MLBTeams")
    d3.select("#MLBTeams")
    .append("body")
    .selectAll("tr")
    .data(dataPromise)
    .enter()
    .append("tr")    
}
