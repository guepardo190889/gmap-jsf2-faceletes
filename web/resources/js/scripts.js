/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var map;
var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(24.73843341943274, -98.02840495199455),
    mapTypeId: google.maps.MapTypeId.ROADMAP
    };

function init() {
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

function begin(){
    map.setOptions(mapOptions);
}
