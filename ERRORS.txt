ERROR :Line 33:31:  Expected an assignment or function call and instead saw an expression  no-unused-expressions
https://stackoverflow.com/questions/53013437/expected-assignment-or-function-call-no-unused-expressions-reactjs

wrong :setTasks(tasks.map((task)=>{task.id ===id? {...task,virgin:!task.virgin}:task}))}
correct : setTasks(tasks.map((task)=>task.id ===id? {...task,virgin:!task.virgin}:task))}


Error:expected-onSubmit-listener-to-be-a-function-instead-got-type-object-react
wrong : <form className="add-form"   onSubmit={{onSubmit}} >
 <form className="add-form"   onSubmit={onSubmit} >


wrong : <form className="add-form"  onSubmit={onSubmit()}} >
correct: <form className="add-form"   onSubmit={onSubmit}} >


wrong  :setTasks(...tasks,newTask)  
correct:setTasks([...tasks,newTask])  


<!-- DESTUCTURING 
and  .... -->