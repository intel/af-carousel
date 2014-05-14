<script type="text/html" id="carousel_edit_tpl">
    <div id='carousel_items'></div>
    <br>
    <div class="propsRow" style="border-top: 1px solid #969696;box-shadow: 0 -1px 0 #444;padding-top:8px">
        <a id='edit_add' value='Add New Row' class="button_sprite add_prefs" style="float:left;"></a>     
    </div>
    <br style="clear:both">
    <div class="propsRow">
        <label class="props">ID </label><input class="props" type='text' name='target' id='id' placeholder='id'>
    </div>
    <div class="propsRow">
        <label class="props">Height </label><input class="props" type='text' name='target' id='id' placeholder='height'>
    </div>
    <div class="propsRow">
        <label class="props">Width </label><input class="props" type='text' name='target' id='width' placeholder='width'>
    </div>
    </div>
</script>

<script type="text/html" id="carousel_edit_item_tpl">
<div class="propsRow" style="">
    <label class="props textArea" >Item <%=i%></label> <textarea  name="carousel_item" class="text_input_scroll"><%=value%></textarea>
    <a class="button_sprite delete_prefs" href="javascript:;" onclick="$(this.parentNode).remove()"></a>
</div>
</script>