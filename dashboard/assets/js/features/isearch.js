// iSearch

function SearchResult() { //Function to render Search Result
    iSearchResult="";
    for( let i=0; i<Fusers.length; i++) {
        if(Fusers[i]!=null || Fusers[i]!=undefined )
        {
            iSearchResult+= `
            <div class="iSearchResults"> 
                <div class="iSearchInfo">
                    <img src= "${Fusers[i].img}">
                </div>
                <div class="iSearch-container">
                    <h2>${Fusers[i].fullName}</h2><br>
                    <p>${Fusers[i].location}</p>
                </div>
                <button class="btn pos">View Profile</button> &nbsp; <button class="btn">Message</button>
            </div>
            `;
        }
    }
    document.getElementById("iSearch-result").innerHTML += `${iSearchResult}`;
}

foundLocation ="";
function search() {
    iSearchResultNo ="";
    iSearchResult="";
    foundLocation = (document.getElementById("iSearchInput").value).toLowerCase();
    Fusers = iusers.filter(x=>x.location.toLowerCase().includes(foundLocation));
    if (Fusers == null || Fusers == undefined || Fusers ==""){
        iSearchResult+= 
        `<h3>No User Found in ${foundLocation}`
        document.getElementById("iSearch-result").innerHTML = `${iSearchResult}`;
    }
    else {
        iSearchResultNo+= 
        `<h3>${Fusers.length} User(s) Found`
        document.getElementById("iSearch-result").innerHTML = `${iSearchResultNo}`;
        SearchResult()
    }
}