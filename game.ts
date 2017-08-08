class Player{
  id: string;
  symbole: string;
  constructor(id: string,symbole: string){
   this.id = id;
   this.symbole = symbole;
   }
}
class Build{
  value: string;
  id: string;
  count: number = 0;
  constructor(id: string,value: string=''){
   this.id=id;
   this.value=value;
  }
  BuildCase(){
   var case = document.creatElement("input");
   case.setAttribute("type",button);
   case.setAttribute("id",this.value);
   case.addEventListnair("click",function()=>
   count++;
   if (count%2==0){
    case.setAttribute("value","X");
    //check("X");
   }
   else{
    case.setAttribute("value","O");
    //check("O");
   }
   );
  }
  check(symbole: string){
   if(checkHorizontal(symbol))
   if(checkVertical(symbol))
   if(checkDiagonal(symbol))
  }
  checkHorizontal(symbole: string ): boolean{

  }
  checkVertical(symbole: string ): boolean{

  }
  checkDiagonal(symbole: string ): boolean{

  }
}

windows.onLoad= () =>{
for (var i=1;i<10;i++){
            var button = new Build(i.toString(),i.toString());
            button.BuildCase();
        }
}
