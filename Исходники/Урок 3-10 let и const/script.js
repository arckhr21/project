function makeArray() {
    var items = [];

    for (var i = 0; i < 10; i++){
        var item = function() {
            console.log(i);
        }
        items.push(item);
    }
return items;
}

var arr = makeArray();

arr[1]();
arr[2]();
arr[7]();