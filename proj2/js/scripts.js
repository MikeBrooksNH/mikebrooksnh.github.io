/*

Project:  GBCC Web Dev I Class project
Filename: scripts.js

*/

var myIntervalTimer = setInterval(showimages, 4000);
var whichDiv = 1;

/*

    General Routines - used anywhere on the site

*/
/*

    Routines specific to handling the resume

*/
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
        "sybaseCW", "Udemy2021CW", "udemy2020CW", "cleancodeCW", "udemyCW1","udemyCW2","udemyCW3", "corespondenceCW", "launchDarklyCW"
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


/*

    Routines specific to the project and contact pages

*/
function showimages() {

    var imgcnt = 29;
    var images = [
        "artifactory.png", "bitbucket.png", "blackduck.png", "c.png", "confluence.png", "cpp.png", "devops.jpg", "git.png", "github.png", "java.png", "jenkins.png", "jira.png", "linux.jpg", "perforce.png", "puppet.png", "python.png", "sonatype.jpg", "teamcity.png", "windows.png", "docker.png", "sqlserver.jpg", "mysql.jpg", "vmware.jpg", "ruby.jpg", "cs.jpg", "ansible.png", "aws.png", "html.png", "css.png"
                 ];

    var idx = Math.random() * imgcnt;

    if (whichDiv === 1) {
        document.getElementById("rotateimg2").innerHTML = "";

        document.getElementById("rotateimg1").innerHTML = "<img src=img/" + images[parseInt(idx)] + " alt=\"generated image" + parseInt(idx) + "\" class=\"fadeinout techicons\">";

        whichDiv = 2;
    } else {
        document.getElementById("rotateimg1").innerHTML = "";

        document.getElementById("rotateimg2").innerHTML = "<img src=img/" + images[parseInt(idx)] + " alt=\"generated image" + parseInt(idx) + "\" class=\"fadeinout techicons\">";

        whichDiv = 1;

    }
}


/*

    Routines for managing form data

*/
