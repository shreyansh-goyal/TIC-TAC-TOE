app.controller("myctrl",($scope,TICTACTOE)=>{
$scope.buttons=TICTACTOE.fillarray();
$scope.user_no=(TICTACTOE.state)?"X":"O";

$scope.user_update=()=>
{
    if(!TICTACTOE.win_conditions())
    $scope.user_no=(TICTACTOE.state)?"X":"O";
}
$scope.print=(i)=>
{   
    if(TICTACTOE.checkduplicate(i)&&!TICTACTOE.win_conditions())
    {
        TICTACTOE.print(i);
    }    
    if(TICTACTOE.win_conditions())
    {   var a=(TICTACTOE.state)?"O":"X";
        $scope.winner="WINNER IS "+a;
    }
}

$scope.buttons=TICTACTOE.fillarray();
});