/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["High hopes", "Sunflower", "Happier", "Silence"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var songImages = [""];
var artists = ["Panic! at the Disco","Post Malone,Swae Lee","Marshmello & Bastile", "Marshmello and Khalid"]; 
var songLength = [3:14,2:41,3:12,3:17]; 
var link = ["https://www.youtube.com/watch?v=IPXIgEAGe4U","https://www.youtube.com/watch?v=ApXoWvfEYVU","https://www.youtube.com/watch?v=m7Bc3pLyij0","https://www.youtube.com/watch?v=MbT_grBSt38"]; 



function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
        song.forEach(function(song)){
    $(".songs").append("<li>I want to watch" + song + " </li> " ) ; 
    
});
}

function emptySongInfo(){
    $("#songs").empty();
    $("").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
artists.forEach(function(artists)){
    $(".artists").append("<li>I want to watch" + song + "</li>" ); 
}
}

}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
