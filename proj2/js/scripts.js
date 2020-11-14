/* JavaScript document */
function lastupdated() {
    var x = document.lastModified;
    document.getElementById("lastupdated").innerHTML = x;
}

function hideunhide(elemid) {
    // The intent for this functionis to allow an element to be hiden or made visible

    var imageID = document.getElementById(elemid);
    console.assert("hideunhide called for " + imageID);

    try {
        if (imageID.style.display === "none") {
            console.assert("Image Not Visible");
            imageID.style.display = "block";
        } else {
            console.assert("Image Visible");
            imageID.style.display = "none";
        }
    } catch (err) {
        console.error("there was an error in hideunhide()" + err.message);
        alert("Error: " + err.message);
    }
}

function hidejobdescriptions() {
    // The intent for this function is to hide all the job descriptions
    // when the resume page loads.

    var jds = [
        "crdJD", "sovosJD", "sonusJD", "shivaJD", "aimJD", "teleJD",
        "gbccCW", "sovosCW", "umlCW", "bduckCW", "puppetCW", "dwcCW",
        "votechCW", "oxnardCW", "ulowellCW", "rationalCW", "ishieldCW",
        "sybaseCW", "udemyCW", "corespondenceCW"
              ];

    var i;
    for (i = 0; i < jds.length; i++) {
        try {
            hideunhide(jds[i]);
        } catch (err) {
            console.assert("Error trying to hideunhide " + jds[i] + "\n" + err.message)
        }

    }

}

function detectMob() {

    /*  document.getElementById("devtype").innerText = "test";


    var toMatch = [
          /Android/i,
          /webOS/i,
          /iPhone/i,
          /iPad/i,
          /iPod/i,
          /BlackBerry/i,
          /Windows Phone/i
      ];

    var device = "Not Mobile";
    var i;
    for (i = 0; i <= toMatch.length; i++)
        if (navigator.userAgent.match(toMatchItem))
            break;
    if (i = < toMatch.length)
        device = "Mobile";
*/
    document.getElementById("devtype").innerHTML = navigator.platform;


}
