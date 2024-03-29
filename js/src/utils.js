export function resizeInterval() {
    // Resize very 200ms
    function resizeWindow() {
        window.dispatchEvent(new Event("resize"));
    }
    var interval = setInterval(resizeWindow, 200);

    // Clear interval after 2 seconds
    setTimeout(function () {
        clearInterval(interval);
    }, 2000);
}

export function getTagValue(tags, tag, join = "") {
    if (!tags) {
        return;
    }
    let exists = tags.filter((tag_) => tag_.startsWith(`${tag}=`));
    if (exists.length > 0) {
        return exists.map((cls) => cls.replace(`${tag}=`, "")).join(join);
    }
    return "";
}

export function slugify(string) {
    const a =
        "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;";
    const b =
        "aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------";
    const p = new RegExp(a.split("").join("|"), "g");

    if (string) {
        return string
            .toString()
            .toLowerCase()
            .replace(/\s+/g, "-") // Replace spaces with -
            .replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
            .replace(/&/g, "-and-") // Replace & with 'and'
            .replace(/[^\w-]+/g, "") // Remove all non-word characters
            .replace(/--+/g, "-") // Replace multiple - with single -
            .replace(/^-+/, "") // Trim - from start of text
            .replace(/-+$/, ""); // Trim - from end of text
    }

    return "";
}

export function createMarkup(html) {
    return { __html: html };
}

export function uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (
        c
    ) {
        var r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

export function onNextFrame(callback) {
    setTimeout(function () {
        window.requestAnimationFrame(callback);
    });
}

export function insertItemInArray(array, func) {
    return array.flatMap((value, index, array) =>
        array.length - 1 !== index // check for the last item
            ? [value, func(index)]
            : value
    );

    // return array.flatMap((value, index, array) =>
    //     array.length - 1 !== index // check for the last item
    //         ? [value, item]
    //         : value
    // );
}
