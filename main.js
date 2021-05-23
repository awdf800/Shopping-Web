// 此處為您的程式碼!
var shopWeb2= new Vue({
    el: "#shopWeb2",
    data: {
        itemList: [
            {
                id: "1",
                itemName: "RTX2060",
                imgUrl: "https://i.imgur.com/4PXvJND.png",
                price: "13000",
                count: "1"
            },
            {
                id: "2",
                itemName: "RTX2070",
                imgUrl: "https://i.imgur.com/uUMENQC.png",
                price: "18000",
                count: "1"
            },
            {
                id: "3",
                itemName: "RTX2080",
                imgUrl: "https://i.imgur.com/O8F6N5h.png",
                price: "22000",
                count: "1"
            },
            {
                id: "4",
                itemName: "RTX2080Ti",
                imgUrl: "https://i.imgur.com/16cCcv8.png",
                price: "28000",
                count: "1"
            },
        ]
    },
    methods: {
        buttonPlus: function (item) {
            console.log(item);
            item.count++;
        },
        buttonSub: function (item) {
            console.log(item);
            if (item.count > 1) {
                item.count--;
            }
        },
        buttonDelete: function (index) {
            this.itemList.splice(index, 1);
        }
    },
    computed: {

    }
})

var i = 1;
$(".Return .turn a").click(function () {
    if (i == 0) {
        $(".Return").animate({ left: "-5px" }, 500);
        i = 1;
    } else if (i == 1) {
        $(".Return").animate({ left: "-440px" }, 500);
        window.setTimeout("window.location='page.html' ", 500);
        i = 0;
    }
});