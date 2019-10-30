var dataPromise = d3.json("teams.json")

dataPromise.then(

function(dataPromise)
    {
        maketable(dataPromise);
        console.log("good", dataPromise)
        
        
    },

function(error)
    {
        console.log ("error", (error))
}
       
)




var maketable = function(dataPromise)
{
  d3.select("#tableTitle")  
    .append("table")
    .attr("id", "MLBTeams")
    d3.select("#MLBTeams")
    .append("body")
    .selectAll("tr")
    .data(dataPromise)
    .enter()
    .append("tr")
    .attr("id", function(d){return d.team_id})
    .text(function(d){return d.team_id})
     .on("click", function(d) {displayInfo(d)}) // {console.log(d.abbreviation) 
    // d3.select("#"+ d.teamID)

}
var displayInfo = function(info)
{
    var box= 
    d3.select("#teamInfo");
    
     box.append("p")
    .text("Team Abbreviation: " + info.abbreviation)
    
    box.append("p")
    .text("Active Franchise?: " + info.active)
    
    box.append("p")
    .text("City: " + info.city)
    
     box.append("p")
    .text("Conference: " + info.conference)
    
     box.append("p")
    .text("Division: " + info.division)
    
     box.append("p")
    .text("Stadium Name: " + info.site_name)
    
     box.append("p")
    .text("State: " + info.state)

}
          

