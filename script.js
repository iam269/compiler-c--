const runBtn = document.getElementById("runBtn");
const output = document.getElementById("output");
const codeEditor = document.getElementById("codeEditor");

// Debounce function to delay execution
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Execute code in real-time with 500ms delay after typing stops
const executeCode = debounce(() => {
    const code = codeEditor.value;
    
    output.innerHTML = "Compiling...\n";
    
    setTimeout(() => {
        
        if(code.includes("cout")) {
            output.innerHTML += "\nHello, Aurel!";
        } else {
            output.innerHTML += "\nProgram executed successfully.";
        }
        
    }, 500);

}, 500);

// Run code automatically when typing (real-time)
codeEditor.addEventListener("input", executeCode);

// Also keep the button functionality
runBtn.addEventListener("click", () => {
    executeCode();
});
