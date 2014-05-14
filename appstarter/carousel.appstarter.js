{
    //This is the name of our widget
    name:"carousel",
    //This is special CSS to allow our div to scroll so users can see each page
    css:"div.carousel { background:#ccc;width:100%;overflow:hidden;overflow-x:auto;height:200px;-webkit-box-orient:horizontal;box-orient:horizontal;display:-webkit-box;display:box;margin:0;padding:0;} div.carousel > div {width:320px;height:100%;border-right:1px solid black;}",
    //This is the name of our template file which App Starter will load for us
    template:"carousel.appstarter.tpl",
    //This is the name of our edit template file which App Starter will load for us
    editTemplate:"carousel.appstarter.edit.tpl",
    //We add a class carousel to each widget, so we can import by that too.
    importSelector:"div.carousel",
    //These are the JS includes we need for our plugin
    jsIncludes:["af.carousel.js"],
    //These are the CSS inclueds needed for our plugin
    cssIncludes:["af.carousel.css"],

    //This function gets called when we edit our widget
    //$prefs is a reference to the edit area that we can modify
    //activeItem is a reference to the active widget
    editInit: function() {
        //Each carousel page is a div, so we find them all           
        var $items = activeItem.children().filter('div');
        //Our edit div has a container "carousel_items" we will append our list to
        var holder= $('#carousel_items');
        var adder=0;

        //Loop through each item and create a new carousel_edit_item_tpl entry
        //Since the carousel has dynamic entries, we have another template that we use
        //for each item
        $items.each(function(i) {
            holder.append($.template('carousel_edit_item_tpl', {
                value: this.innerHTML,
                'i': i
            }));
        adder = i;
        });

        //When the edit_add buttin is clicked, add a new row
        $('#edit_add').bind('click', function() {
            holder.append($.template('carousel_edit_item_tpl', {
                value: '',
                'i': ++adder
            }));
        });

        //These are properties well set on the widget.
        $prefs.find("#id").val(activeItem.prop("id"));
        $prefs.find("#width").val(activeItem.css("width"));
        $prefs.find("#height").val(activeItem.css("height"));        
    },

    //This function gets called after each edit, or a save.  We must take the values
    //from App Starter and update our widget.
    editSave: function() {
        //We need to clear out our carousel elements and update them
        activeItem.empty();
        //Our template is multiple rows of text areas that we enter the content for each page.
        //Here we loop through them and create a <div> with the contents inde
        $('textarea[name=carousel_item]').each(function() {
            activeItem.append('<div>' + this.value + '</div>');
        });

        //Let's set the ID of the widget
        activeItem.prop("id",$prefs.find("#id").val());
        //Here we can set the width/heigth of the carousel
        activeItem.css("width",$prefs.find("#width").val());
        activeItem.css("height",$prefs.find("#height").val());
    },
    
    //This is called on every save from every widget
    onSave:function(components){        
        //We need to register a startup script that will get executed when the page is ready
        //We pass in the function we want to execute, which is then executed on $(document).ready()        
        this.registerStartupScript(function(){
            //Find all div.carousel objects and create a carousel
            $('div.carousel').carousel({wrap:true,preventDefaults:false});
        });
    }
}