let app = new Vue({
    el: '#app',
    data: {

        // booleans to indicate if the present day image is visible, start default as being visible
        afterpicOneIsVisible: true,
        afterpicTwoIsVisible: true,
        afterpicThreeIsVisible: true,
        afterpicFourIsVisible: true,
        afterpicFiveIsVisible: true,
        
        // booleans to indicate if the image from the past is visible, start default as being not visible
        beforepicOneIsVisible: false,
        beforepicTwoIsVisible: false,
        beforepicThreeIsVisible: false,
        beforepicFourIsVisible: false,
        beforepicFiveIsVisible: false,

        // image one data, including filenames and alt text
        FirstpicBeforeHover: "images/nalacuddle-before.JPG",
        FirstpicAltTxtBefore: "Nala and I lookin pretty relaxed",
        FirstpicAfterHover: "images/nalacuddle-after.JPG",
        FirstpicAltTxtAfter: "Nala and I lookin happy",

        // image two data, including filenames and alt text
        SecondpicBeforeHover: "images/modelpriyam-before.PNG",
        SecondpicAltTxtBefore: "Priyam looking homeless",
        SecondpicAfterHover: "images/modelpriyam-after.PNG",
        SecondpicAltTxtAfter: "Priyam looking like a model",

        // image three data, including filenames and alt text
        ThirdpicBeforeHover: "images/Lincoln-before.JPG",
        ThirdpicAltTxtBefore: "Priyam posing for a shot",
        ThirdpicAfterHover: "images/Lincoln-after.JPG",
        ThirdpicAltTxtAfter: "Priyam posing better for a shot",

        // image four data, including filenames and alt text
        FourthpicBeforeHover: "images/Boston-before.JPG",
        FourthpicAltTxtBefore: "Boston Calling With Kylie",
        FourthpicAfterHover: "images/Boston-after.JPG",
        FourthpicAltTxtAfter: "After Taking A Sip of Beer",

    },

    methods: {

        /* ---------- First Picture Hover ---------- */
        showbeforepicOne: function(){
            this.afterpicOneIsVisible = false; 
            this.beforepicOneIsVisible = true; 
        },
        
        changepicOne: function(){
            this.afterpicOneIsVisible = true; 
            this.beforepicOneIsVisible = false; 
        }, 


        /* ---------- Second Picture Hover ---------- */
        showbeforepicTwo: function(){
            this.afterpicTwoIsVisible = false; 
            this.beforepicTwoIsVisible = true; 
        },
        
        changepicTwo: function(){
            this.afterpicTwoIsVisible = true; 
            this.beforepicTwoIsVisible = false; 
        }, 


        /* ---------- Third Picture Hover ---------- */
        showbeforepicThree: function(){
            this.afterpicThreeIsVisible = false; 
            this.beforepicThreeIsVisible = true; 
        },
        
        changepicThree: function(){
            this.afterpicThreeIsVisible = true; 
            this.beforepicThreeIsVisible = false; 
        },

        /* ---------- Fourth Picture Hover ---------- */
        showbeforepicFour: function(){
            this.afterpicFourIsVisible = false; 
            this.beforepicFourIsVisible = true; 
        },
        
        changepicFour: function(){
            this.afterpicFourIsVisible = true; 
            this.beforepicFourIsVisible = false; 
        }, 

        /* ---------- Fifth Picture Hover ---------- */
        showbeforepicFive: function(){
            this.afterpicFiveIsVisible = false; 
            this.beforepicFiveIsVisible = true; 
        },
        
        changepicFive: function(){
            this.afterpicFiveIsVisible = true; 
            this.beforepicFiveIsVisible = false; 
        },


     }
});