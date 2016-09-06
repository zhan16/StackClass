var MyStackClass={
    stack:[],
    push:function(lastobj){
        this.stack[this.stack.length]=lastobj;        
    },
    pop:function(){
        var ret = this.stack[this.stack.length-1];
        this.stack.length=this.stack.length-1;
        return ret;
    },
    peek:function(){
        var ret = this.stack[this.stack.length-1];
        return ret;
    }
};

function MyStackClassConstructor(){
    var o = Object.create(MyStackClass);
    return o;
}

var instance = MyStackClassConstructor();
instance.push('a');
instance.push('b');
instance.push('c');

console.log(instance.peek());
console.log(instance.pop());

