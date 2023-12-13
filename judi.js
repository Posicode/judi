var roll = document.getElementById('roll');

function firstclick() {
    var roll = document.getElementById('roll');
    var computedStyle = window.getComputedStyle(roll);
    var leftValue = parseInt(computedStyle.left);
    document.getElementById('leftimg').src = 'material-symbols_arrow-circle-left.svg'
    if (leftValue <= -1170) {
        document.getElementById('rightimg').src = 'material-symbols_arrow-circle-right-outline-rounded.svg'
    }
    if (leftValue <= -2310) {
        // document.getElementById('rightimg').src = 'material-symbols_arrow-circle-right-outline-rounded.svg'
    }
    else{
        roll.style.left = leftValue - 810 + "px";
    }
}




function secclick() {
    var roll = document.getElementById('roll');
    var computedStyle = window.getComputedStyle(roll);
    var leftValue = parseInt(computedStyle.left, 10);
    document.getElementById('rightimg').src = 'material-symbols_arrow-circle-right.svg'

    if (leftValue >= -1140) {
        document.getElementById('leftimg').src = 'material-symbols_arrow-circle-left-outline.svg'
    }
    if (leftValue >= 0) {
        // document.getElementById('leftimg').src = 'material-symbols_arrow-circle-left.svg'
    }
    else{
        roll.style.left = leftValue + 810 + "px";
    }
}