var Student = {
    data:[],
    viewStu: function(){
        var listStu = this.data;
        for(var  i =0;i<listStu.length;i++){
            document.write("<div>"+listStu[i].id+"|"+listStu[i].name+"|"+listStu[i].email);
        }
    },
    addStu: function(id,name,email){
        var item={
            id: id,
            name: name,
            email: mail
        };
        this.data.push(item);
    },
    removeStu: function(id){
        for(var i = 0;i<this.data.length;i++){
            if(this.data.id[i] ==id){
                this.data.splice(i,1);
            }
        }
    },
    editStu: function(id,name,email){
        for(var i = 0;i<this.data.length;i++){
            if(this.data.id[i] == id){
                this.data.name[i] = name;
                this.data.email[i] = email;
            }
        }
    }

};

