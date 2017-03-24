$(document).ready(function (){
    //load image slider
    var offset = 0;
    var limit = 2;
    var array_image = [
        'communication_science.jpg',
        'science_culture.jpg',
        'terhebat_1.jpg',
        'why_book2.jpg',
        'why_book3.jpg',
    ];

    function loadImage(offset,limit){
        $('.image-container').html("");
        for(offset;offset<=limit;offset++){
            $('.image-container').append("<div class='image'><img src=assets/book_image/science/"+array_image[offset]+" width='100' height='150'></div>");
        }
    }


    loadImage(offset,limit);

    //button slider kiri + kanan
    $('#slide-left').click(function (){
        offset++;
        limit++;
        if(limit > array_image.length-1){
            offset=0;
            limit = 2;
        }
        console.log(offset);
        console.log(limit);
        loadImage(offset,limit);
    });

    $('#slide-right').click(function(){
        offset--;
        limit--;
        if(offset < 0){
            limit = array_image.length-1;
            offset = limit - 2;
        }
        console.log(offset);
        console.log(limit);
        loadImage(offset,limit);
    });
});