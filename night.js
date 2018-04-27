var Link = {
    anchorTags : document.getElementsByTagName("a"),
    setColor : function (color){
        var i = 0;
        while ( i < this.anchorTags.length){
            this.anchorTags[i].style.color = color;
            i++;
        }
    }
}

var Body = {
    // body : document.body,
    bodyColorSet : function (self){
        document.body.style.backgroundColor = self
    },
    bodyFontColor : function (self){
        document.body.style.color = self
    }
    
}

function nightColorHandler(elem){
    // var button = document.querySelector("#button");
    if (elem.value === "Night"){
        Link.setColor("white");
        Body.bodyColorSet("black");
        Body.bodyFontColor("white");
        elem.value = "Day";
    } else {
        Link.setColor("black");
        Body.bodyColorSet("white");
        Body.bodyFontColor("black");
        elem.value = "Night";
    }
}
