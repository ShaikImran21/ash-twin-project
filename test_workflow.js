// Test file to trigger GitHub Actions workflows

function testFunction(param1,param2) {
  var oldStyle = "testing workflows"
  let unused = "this is unused";
  
    if(param1=="test"){
        console.log("This will fail linting and formatting checks")
    }
  
  return "missing semicolon"
}

const arrow=(x)=>{return x*2}
