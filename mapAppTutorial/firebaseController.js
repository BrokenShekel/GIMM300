var locationsRef = firebase.database().ref('locationData/');
var locationsDataArray = [];

locationsRef.on('value', function(snapshot) {
	snapshotToArray(snapshot);
	updateLocations();
})

function snapshotToArray(snapshot){
	var locationArray = [];
	snapshot.forEach(function(childSnapShot){
		var item = childSnapshot.val();
		locationsArray.push(item);
	});
	locationsDataArray = locationArray;
}