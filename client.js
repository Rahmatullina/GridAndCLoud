Webcam.set({
  width: 320,
  height: 240,
  image_format: 'jpeg',
  jpeg_quality: 90
 });
Webcam.attach( '#onlineVideo' );
function take_snapshot() {
Webcam.snap( function(data_uri) {
    // display results in page
    document.getElementById('screenshots').innerHTML = 
    '<img src="'+ data_uri +'"/>';
  } );
}