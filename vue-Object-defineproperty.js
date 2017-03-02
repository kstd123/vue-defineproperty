var userInfo = {};//创建对象集合
Object.defineProperty (userInfo,'nickname',{
    get: function(){
        return document.getElementById('nickName').innerHTML;
    },
    set: function(nick){
        document.getElementById('nickName').innerHTML = nick;
    }
});
Object.defineProperty(userInfo,"introduce",{
    get:function(){
        return document.getElementById('introduce').innerHTML;
    },
    set:function(introduce){
        document.getElementById('introduce').innerHTML = introduce;
    }
});
function changevalue(value) {//监听文本框变化并赋值
    userInfo.nickname = value;
}
function change_value(value) {
    userInfo.introduce = value;
}
// userInfo.introduce = "hello,kstd"