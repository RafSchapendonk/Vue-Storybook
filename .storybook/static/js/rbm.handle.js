/************************************************************************************************
 *
 *                            RB-Media Internet Solutions
 *                                    JS Loader
 *                                 www.rb-media.nl
 *
 ************************************************************************************************/

 window.addEventListener('load', function () {
    var notificationElm = document.getElementById('notification');
    if (notificationElm != null && notificationElm != undefined) {
        scrollElmView('[data-role="contact-form"]', 1);
    } else {
        var notificationElm = document.querySelectorAll('.mark-error');
        if (notificationElm.length != 0) {
            scrollElmView('.mark-error', 1);
        }
    }

    loadFonts();
    lazyVideo();
    openMenuMobile();
    closeMenuMobile();
    uploadfields();
    textAreaHeight();
});

window.addEventListener("resize", function () {
    textAreaHeight();
});

function textAreaHeight() {
    var textAreaField = document.getElementsByClassName("scalable");

    if (textAreaField.length != 0) {
        for (var i = 0; i < textAreaField.length; i++) {
            textAreaField[i].setAttribute(
                "style",
                "height:" +
                textAreaField[i].scrollHeight +
                "px;overflow-y:hidden;"
            );
            textAreaField[i].addEventListener("input", OnInput, false);
        }

        function OnInput(e) {
            this.style.height = "auto";
            this.style.height = this.scrollHeight + "px";
        }
    }
}

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect(), top = rect.top, height = rect.height,
        el = el.parentNode
    // Check if bottom of the element is off the page
    if (rect.bottom < 0) return false
    // Check its within the document viewport
    if (top > document.documentElement.clientHeight) return false
    do {
        rect = el.getBoundingClientRect()
        if (top <= rect.bottom === false) return false
        // Check if the element is out of view due to a container scrolling
        if ((top + height) <= rect.top) return false
        el = el.parentNode
    } while (el != document.body)
    return true
}

if (!('remove' in Element.prototype)) {
    Element.prototype['remove'] = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}

function scrollElmView(selector, minus) {
    if (minus > 0) {
        var e = document.querySelectorAll(selector)[0];

        tempDiv = document.createElement('div');
        tempDiv.id = "tempDiv";
        tempDiv.style.background = "transparent";
        tempDiv.style.width = "10px";
        tempDiv.style.height = "10px";
        tempDiv.style.position = "absolute";
        tempDiv.style.top = (0 - minus) + "px";
        e.appendChild(tempDiv);

        // var e = document.querySelectorAll(selector)[0];
        tempDiv.scrollIntoView({ behavior: "smooth", block: "start" });

        tempDiv.remove();
    }
    else {
        var e = document.querySelectorAll(selector)[0];
        e.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return [curtop];
    }
}

function appendHtml(el, str) {
    var div = document.createElement('div');
    div.innerHTML = str;
    while (div.children.length > 0) {
        el.appendChild(div.children[0]);
    }
}

function loadFonts() {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = '/css/fonts.css';
    link.media = 'all';
    head.appendChild(link);
}

function hasJsonStructure(str) {
    if (typeof str !== 'string') return false;
    try {
        const result = JSON.parse(str);
        const type = Object.prototype.toString.call(result);
        return type === '[object Object]'
            || type === '[object Array]';
    } catch (err) {
        return false;
    }
}

function lazyVideo() {
    var videos = document.querySelectorAll(".play-video");
    if (videos) {
        for (var i = 0; i < videos.length; i++) {
            videos[i].addEventListener("click", function () {
                var src = this.getAttribute("data-src");
                var parent = this.parentNode;

                parent.classList.toggle("added-video");

                var iframe = document.createElement("iframe");
                iframe.setAttribute("modestbranding", "0");
                iframe.setAttribute("frameborder", "0");
                iframe.setAttribute("allowfullscreen", "");
                iframe.setAttribute("allow", "autoplay");
                iframe.setAttribute("src", src);

                parent.innerHTML = "";
                parent.appendChild(iframe);
            });
        }
    }
}

function openMenuMobile() {
    var menuBtn = document.querySelectorAll('#menu-trigger');
    var menu = document.querySelectorAll('.mobile-menu');

    if (menuBtn.length > 0) {
        for (var i = 0; i < menuBtn.length; i++) {

            menuBtn[i].addEventListener("click", function (e) {
                document.querySelector('body').classList.add('mobile-open');
                e.stopPropagation();
            });
        }
    }

    if (menu.length > 0) {
        for (var i = 0; i < menu.length; i++) {

            menu[i].addEventListener("click", function (e) {
                e.stopPropagation();
            });
        }
    }
}

function closeMenuMobile() {
    var closeBtn = document.querySelectorAll('#close-menu');
    if (closeBtn.length > 0) {
        for (var i = 0; i < closeBtn.length; i++) {

            closeBtn[i].addEventListener("click", function (e) {
                document.querySelector('body').classList.remove('mobile-open');
                e.stopPropagation();
            });

        }
    }

    document.addEventListener('click', function (e) {
        document.querySelector('body').classList.remove('mobile-open');
    });

    var mq = window.matchMedia("(min-width: 1230px)");
    if (mq.matches) {
        document.querySelector('body').classList.remove('mobile-open');
    }
}

function closeItems(subjectSelector, closeSelector, classesToRemoveFromBody) {
    if (subjectSelector.length != 0) {
        var subjectElement = document.querySelector(subjectSelector);
    }

    if (closeSelector.length != 0) {
        var closeElement = document.querySelector(closeSelector);
    }

    if (closeElement != undefined) {
        closeElement.addEventListener("click", function (e) {
            classesToRemoveFromBody.forEach(classToRemoveFromBody => {
                document.querySelector('body').classList.remove(classToRemoveFromBody);
            });
        });

    }

    if (subjectElement != undefined) {
        subjectElement.addEventListener("click", function (e) {
            e.stopPropagation();
        });
    }

    document.addEventListener('click', function (e) {
        classesToRemoveFromBody.forEach(classToRemoveFromBody => {
            document.querySelector('body').classList.remove(classToRemoveFromBody);
        });
    });
}

function uploadfields() {
    var inputs = document.querySelectorAll(".inputfile");
    if (inputs.length > 0) {
        Array.prototype.forEach.call(inputs, function (input) {
            console.log("test");
            var label = input.nextElementSibling;

            input.addEventListener("change", function (e) {
                if (input.files[0].size > 4000000) {
                    e.preventDefault();
                    window.alert(
                        "Selecteer a.u.b. een bestand dat niet groter is dan 4MB"
                    );
                    return;
                }

                var MIMEtypes = input.accept
                    .split(",")
                    .map(function (MIMEtype) {
                        return new RegExp(MIMEtype.replace("*", "[^\\/,]+"));
                    });

                // Ensure each of the input's files' types conform to the above
                passes = Array.prototype.every.call(
                    input.files,
                    function passesAcceptedFormat(file) {
                        return MIMEtypes.some(function (MIMEtype) {
                            return MIMEtype.test(file.type);
                        });
                    }
                );

                if (passes == false) {
                    e.preventDefault();
                    window.alert(
                        "Selecteer a.u.b. een bestand met een van de volgende extensies:" +
                            input.accept.replaceAll(".", " ")
                    );
                    return;
                }

                var files = this.files;
                var fileCount = 0;
                var arr = [];

                for (var i = 0; i < files.length; i++) {
                    arr.push(files[i].name);
                    fileCount = i + 1;
                }

                label.querySelector("em").innerHTML =
                    "Bestanden (" + fileCount + ") :" + arr.join(", ");
                label.classList.add("active");
            });
        });
    }
}
