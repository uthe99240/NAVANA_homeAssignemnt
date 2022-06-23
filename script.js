function layout1() {
    document.getElementById("layout1-container").innerHTML = `<div id="grid-cols-container">
            <div class="card" id="card1">
                <h2>Card 1</h2>
            </div>
            <div class="card" id="card2">
                <h2>Card 2</h2>
            </div>
            <div class="card" id="card3">
                <h2>Card 3</h2>
            </div>
            <div class="card" id="card4">
                <h2>Card 4</h2>
            </div>
            <div class="card" id="card5">
                <h2>Card 5</h2>
            </div>
        </div>`;
    document.getElementById("layout2-container").innerHTML = "";
    document.getElementById("layout3-container").innerHTML = "";
}

function layout2() {
    document.getElementById("layout2-container").innerHTML = `<div id="grid-rows-container">
            <div class="card" id="card1">
                <h2>Card 1</h2>
            </div>
            <div class="card" id="card2">
                <h2>Card 2</h2>
            </div>
            <div class="card" id="card3">
                <h2>Card 3</h2>
            </div>
            <div class="card" id="card4">
                <h2>Card 4</h2>
            </div>
            <div class="card" id="card5">
                <h2>Card 5</h2>
            </div>
        </div>`;
    document.getElementById("layout1-container").innerHTML = "";
    document.getElementById("layout3-container").innerHTML = "";
}
function layout3() {
    document.getElementById("layout3-container").innerHTML = `<div id="grid-rowsPLUScols-container">
            <div class="card" id="card1">
                <h2>Card 1</h2>
            </div>
            <div class="child-grid-cols">
            <div class="card" id="card2">
                <h2>Card 2</h2>
            </div>
            <div class="card" id="card3">
                <h2>Card 3</h2>
            </div>
            <div class="card" id="card4">
                <h2>Card 4</h2>
            </div>
            </div>
            <div class="card" id="card5">
                <h2>Card 5</h2>
            </div>
        </div>`;
    document.getElementById("layout1-container").innerHTML = "";
    document.getElementById("layout2-container").innerHTML = "";
}