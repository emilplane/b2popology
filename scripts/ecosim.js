import RunSim from "./ecosim/runSim.js"
import StatusUI from "./ecosim/statusUI.js"

// Displays any unhandled exceptions to the user
window.onerror = (message, source, lineno, colno, error) => {
    StatusUI.setLight("error").setText(error)
};

// Logic to detect whether the browser supports web workers
if (!window.Worker) {
    new RunSim()
} else {
    throw "Error: Web workers are not supported on this browser"
}