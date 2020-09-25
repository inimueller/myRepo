(function () {
    // console.log('$: ',$);
    var currentPlayer = "player1";

    $(".column").on("click", function (e) {
        // console.log('clicked on col!!');
        var col = $(e.currentTarget);
        // console.log('col: ',col);
        var slotsInCol = col.children();
        // console.log('slotsInCol: ',slotsInCol);

        for (var i = slotsInCol.length - 1; i >= 0; i--) {
            // console.log('slotsInCol.eq(i): ',slotsInCol.eq(i));
            // console.log(
            //     'slotsInCol.eq(i).hasClass("player1"): ',
            //     slotsInCol.eq(i).hasClass('player1')
            // );
            if (
                !slotsInCol.eq(i).hasClass("player1") &&
                !slotsInCol.eq(i).hasClass("player2")
            ) {
                // console.log('time to do something....');
                slotsInCol.eq(i).addClass(currentPlayer);
                break;
            }
        }
        console.log("i: ", i);
        // this checks if col is full...
        if (i === -1) {
            return;
        }

        var slotsInRow = $(".row" + i);
        console.log("slotsInRow: ", slotsInRow);
        if (checkForVictory(slotsInCol)) {
            // here i want to do the victory dance!
            console.log("column victory!!!");
        } else if (checkForVictory(slotsInRow)) {
            // here i want to do the victory dance!
            console.log("ROW victory!!!");
        }

        switchPlayer();
    });

    function checkForVictory(slots) {
        // in  here we will loop over some slots, and check if there are 4 in a row..
        console.log("about to check!!!!", slots);
        var count = 0;
        for (var i = 0; i < slots.length; i++) {
            if (slots.eq(i).hasClass(currentPlayer)) {
                // if the slot has the class current player
                // increment count...
                count++;
                console.log("count: ", count);
                if (count === 4) {
                    return true;
                }
            } else {
                // if not, then reset it back to 0.
                count = 0;
                console.log("count after resetting: ", count);
            }
        }
    }

    function switchPlayer() {
        // if (currentPlayer === 'player1') {
        //     currentPlayer = 'player2';
        // } else {
        //     currentPlayer = 'player1';
        // }
        currentPlayer = currentPlayer === "player1" ? "player2" : "player1";
        // currentPlayer === "player1" ?
        //     currentPlayer = 'player2' :
        //     currentPlayer = 'player1'
    }
    // console.log("currentPlayer before calling switch: ", currentPlayer);
    // console.log("currentPlayer after calling switch: ", currentPlayer);
})();
