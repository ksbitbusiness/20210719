var url = "https://www.gizmodo.jp/index.xml";

$.get(url).done(function(result) {
    var ret = $('item', result);
    console.log(ret);

    var item1 = ret[0];
    $("#first").text( $('title', item1).text() )

    var item2 = ret[1];
    $("#second").text( $('title', item2).text() )

    var item3 = ret[2];
    $("#third").text( $('title', item3).text() )

}).fail(function(result) {
    console.log(result);
});
