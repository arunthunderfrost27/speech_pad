
async function microphone() {
    const response = await fetch('NotePad-main\src\Components\demo2.py');
    const text = await response.text();
    console.log(text);
}
