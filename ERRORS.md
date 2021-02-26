ERROR :Line 33:31:  Expected an assignment or function call and instead saw an expression  no-unused-expressions
https://stackoverflow.com/questions/53013437/expected-assignment-or-function-call-no-unused-expressions-reactjs

wrong :setTasks(tasks.map((task)=>{task.id ===id? {...task,virgin:!task.virgin}:task}))}
correct : setTasks(tasks.map((task)=>task.id ===id? {...task,virgin:!task.virgin}:task))}