const firebaseConfig = {
      apiKey: "AIzaSyA7DXZ2XzG-d_ReQqJt3EqFlPv2I8SaYt8",
      authDomain: "chatapp-66d55.firebaseapp.com",
      databaseURL: "https://chatapp-66d55-default-rtdb.firebaseio.com",
      projectId: "chatapp-66d55",
      storageBucket: "chatapp-66d55.appspot.com",
      messagingSenderId: "573921724229",
      appId: "1:573921724229:web:4151309b9c74659e7da02c"
};
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "scribblsync_page.html";
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "scribblsync_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "scribblsync.html";
}