/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Swervin","Sad","Sorry not sorry", "Dont"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
var artists = ["Aboogie wit da hoodie","xxxtentacion","Bryson Tiller","Bryson Tiller"];
var songlengths= ["3:08","2:47","3:23","3:43"];
var images_links=["https://i.ytimg.com/vi/v-rxFHRTrJc/maxresdefault.jpg","https://i.ytimg.com/vi/pgN-vvVVxMA/maxresdefault.jpg","https://static.qobuz.com/images/covers/93/72/0886445447293_600.jpg","https://static.qobuz.com/images/covers/93/72/0886445447293_600.jpg"];
var videolink=["https://www.youtube.com/watch?v=v-rxFHRTrJc","https://www.youtube.com/watch?v=pgN-vvVVxMA","https://www.youtube.com/watch?v=U4MHrrIQuis&list=OLAK5uy_loApZIRhGPzbZWlGKe7Enavi_FBdryPfY&index=11","https://www.youtube.com/watch?v=d7cVLE4SaN0"];
// Make sure they match the same order as your array above



function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    songs.forEach(function(x){
        $("#songs").append("<p>"+x+"</p>");
    });
    
    artists.forEach(function(artist){
       $("#artists").append("<p>"+artist+"</p>");
    });
    songlengths.forEach(function(length){
        $("#lengths").append("<p>"+length+"</p>");
    });
    images_links.forEach(function(image){
        $("#images").append("<img src='"+image+"'>");
    });
    console.log(videolink);
    videolink.forEach(function(links){
        console.log(links);
        $("#links").append("<a href="+links+">click here to listen</a>");
    });
};
function emptySongInfo(){
    // Use jQuery to empty all of the remaining divs
    $("#artists").empty();
    $("#images").empty();
    $("#songs").empty();
    $("#lengths").empty();
    $("#links").empty();

};


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
var songname= $("#song").val();
songs.push(songname);

var artistname= $("#artist").val();
artists.push(artistname);

var lengths=$("#length").val();
songlengths.push(lengths);

var images= $("#image").val();
images_links.push(images);

var links= $("#link").val();
videolink.push(links);

};

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
console.log("Loaded");
