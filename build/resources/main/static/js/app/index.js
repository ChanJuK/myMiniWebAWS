var main = {
    init : function(){
        var _this = this;
        $('#btn-save').on('click', function(){
            console.log('i clicked save btn');
            _this.save();
        });

        $('#btn-update').on('click',function(){
            _this.update();
        });

        $('#btn-delete').on('click',function(){
            _this.delete();
        });


    },
    save : function(){
        var data = {
            title: $('#title').val(),
            author: $('#author').val(),
            content: $('#content').val()
        };
        console.log("i am in save function");
        console.log(data);

        $.ajax({
            type: 'POST',
            url: '/api/v1/posts',//+id,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function(){
            alert('글이 등록되었습니다.');
            window.location.href='/';//글 등록 성공하면 /로이동
        }).fail(function(error){
            alert(JSON.stringify(error));
        });
    }
    ,update : function(){
        var data = {
            title: $('#title').val(),
            content: $('#content').val()
        };

        var id = $('#id').val();
        console.log("i am in update function"+id);
        console.log(data);

        $.ajax({
            type: 'PUT',
            url: '/api/v1/posts/'+id,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function(){
            alert('글이 등록되었습니다.');
            window.location.href='/';//글 등록 성공하면 /로이동
        }).fail(function(error){
            alert(JSON.stringify(error));
        });
    }
    ,delete : function(){
        var r = confirm("정말 삭제 하시겠습니까?");
        if(!r){
            return;
        }


        var id = $('#id').val();

        console.log("i am in delete function"+$('#id').val());


        $.ajax({
            type: 'DELETE',
            url: '/api/v1/posts/'+id,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
        }).done(function(){
            alert('글이 삭제되었습니다.');
            window.location.href='/';//글 등록 성공하면 /로이동
        }).fail(function(error){
            alert(JSON.stringify(error));
        });
    }
};

main.init();