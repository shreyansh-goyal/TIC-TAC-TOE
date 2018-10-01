app.factory("TICTACTOE",()=>{
       const butobj=
       {
        buttons:[],
        state:true,
        fillarray()
        {
            for(i in [1,2,3,4,5,6,7,8,9])
            this.buttons.push(new button());
            return this.buttons;
        }
        ,print(index)
        {
            (this.state)?this.buttons[index-1].value="X":this.buttons[index-1].value="O"
           this.state=!this.state;
        }
        ,checkduplicate(index)
        {
            if(this.buttons[index-1].value!="")
            return false;
            else
            return true;
        },win_conditions()
        {
            var a=this.checkequivalent(0,1,2);
            if(a==true)
            {
                return a;
            }
            a=this.checkequivalent(0,3,6);
            if(a==true)
            {
                return a;
            }
            a=this.checkequivalent(3,4,5);
            if(a==true)
            {
                return a;
            }
            a=this.checkequivalent(1,4,7);
            if(a==true)
            {
                return a;
            }
            a=this.checkequivalent(2,5,8);
            if(a==true)
            {
                return a;
            }
            a=this.checkequivalent(6,7,8);
            if(a==true)
            {
                return a;
            }
            a=this.checkequivalent(0,4,8);
            if(a==true)
            {
                return a;
            }
            a=this.checkequivalent(2,4,6);
            if(a==true)
            {
                return a;
            }
            return false;
        }
        ,checkequivalent(a,b,c)
        {
            if(this.buttons[a].value==""||this.buttons[b].value==""||this.buttons[c].value=="")
            return false;
            else if(this.buttons[a].value=="X"&&this.buttons[b].value=="X"&&this.buttons[c].value=="X")
            return true;
            else if(this.buttons[a].value=="O"&&this.buttons[b].value=="O"&&this.buttons[c].value=="O")
            return true;
            else
            {
                return false;
            }
        }
       }
       return butobj;
});
