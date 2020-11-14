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
    // this function is used to check if the site is hit from a mobile browser or a desktop browser.
    // It is also the intention that this functino be called on load for every page on the site

    if (navigator.userAgent.match(/Android|webOS|iPhone|iPod|BlackBerry|Windows Phone/i)) {
        document.getElementById("devtype").innerText = "Mobile device";
    } else {
        document.getElementById("devtype").innerText = "Non-Mobile device";
    }
}

function showimages() {
    var images = [
        "artifactory.png", "bitbucket.png", "blackduck.png", "c.png", "confluence.png", "cpp.png", "devops.jpg", "git.png", "github.png", "java.png", "jenkins.png", "jira.png", "linux.jpg", "perforce.png", "puppet.png", "python.png", "sonatype.jpg", "teamcity.png", "windows.png"
                 ];

    var idx = Math.random() * 19;

    document.getElementById("rotateimg").innerHTML = "<img src=img/" + images[parseInt(idx)] + " alt=\"generated image" + parseInt(idx) + "\" style=\"width=.25vw;transition-timing-function: ease-in-out 5s;\">";

}
