const elConsole = document.querySelector("#console");

export function log() {
    console.log("arguments : ", ...arguments);
    const pre = document.createElement("pre");
    for (let arg of arguments) {
        switch (typeof arg) {
            case "string":
                pre.append(arg);
                break;
            default:
                pre.append(JSON.stringify(arg, null, 2));
        }
        pre.append(" ");
    }
    elConsole.append(pre);
}