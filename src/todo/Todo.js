import { upload } from "@testing-library/user-event/dist/upload";
import './Todo.css';
import { type } from "@testing-library/user-event/dist/type";
const { useState, useEffect, useReducer } = require("react");

const getlocalitem=()=>{
   let list= localStorage.getItem('item')
   if(list){
    return JSON.parse(localStorage.getItem('item'));
   }
   else
   return [];
}

const reducer=(state,action)=>{
    console.log(state,action)
    switch(action.type){
        case 'edit':
            console.log('hi');
            return{...state,edit:action.value}
        case 'input':
            return{...state,input:action.value}
        case 'list':
            return{...state,list:action.value}
    }
}

    
const Todo=()=>{
    console.log(getlocalitem(),'local item val')
    let f;
    const initialState={edit:true,input:'',list:getlocalitem(),}
    const [state ,dispatch]=useReducer(reducer,initialState);
    //const [result,setresult]=useState();
   // const [list,setlist]=useState(/*getlocalitem()*/[]);
   // const [edit,newedit]=useState(true);
    const [up,newup]=useState()
    //const [done,updateD]=useState(true);
    console.log(state,'hr',state.edit);
    const c=getlocalitem();
    console.log(getlocalitem(),'harsh')
    localStorage.setItem('item',JSON.stringify(state.list))
    // useEffect(()=>{
    //     dispatch({type:'list',value:getlocalitem()});
    //     console.log("useEffect called")
    // },[]);
    

    




    const change=(event)=>{
        dispatch({type:'input',value:event.target.value})}

    const add=()=>{
        console.log('sss')
        dispatch({type:'list',value:[...state.list,{id:new Date().getTime().toString(),valu:state.input}]})







        /*})*/
        
        dispatch({type:'input',value:' '})
       // let ins=JSON.stringify(list);
        //localStorage.setItem('info',ins);
        // dispatch({type:'list',value:''});
    
    }
   

    const deletes=(event)=>{
        console.log(event.target.value,'hello')
        dispatch({type:'list',value:state.list.filter((arrayE,index)=>{
            console.log(arrayE.id,'hello')
            return arrayE.id!==event.target.value;
        })})
        
        
        // (oldlist)=>{
        //     return oldlist.filter
        // }}
        // )

        //console.log("delete h",event.target.value);
    }


   
    

    const edits=(event)=>{
        console.log('hello')
     const editited=state.list.find((elem)=>{
            return elem.id===event.target.value;
      })
     {dispatch({type:'edit',value:false})};
     // newedit(false);
     dispatch({type:'input',value:editited.valu})
     // setresult(editited.valu);
      console.log(editited.valu,editited.id,'hii');
      newup(editited);
    }

    const saveedit=()=>{
       { dispatch({type:'list',value:(
            state.list.map((item)=>{
                console.log(item.id,'id')
                console.log(up.id,'1ID')
                if(item.id===up.id){
                console.log(item.id,'hiji')
                return {...item,valu:state.input}}
            return item;
            }
            )
              
        )})}
        {dispatch({type:'edit',value:true})}
        //newedit(true);
        dispatch({type:'input',value:' '}) 
       //setresult('');

    }
    
   const comp=(event)=>{
   { dispatch({type:'list',value:(
        state.list.map((data1)=>{
           if(data1.id===event.target.value){
            
            return{...data1,valu:<del>{data1.valu}</del>}}
           return data1;
        }
       
        )
     ) } )
   }}
   console.log(state,'state value')
//    useEffect(()=>{
//     localStorage.setItem('item',JSON.stringify(state.list))},[state.list]);
        
    return(
        <div className="back">
            <section>
            <h2>TODO LIST</h2>
            <div className="inputtask">  
              <input type="text" value={state.input} onChange={change} placeholder="Enter task" />
              
                {  
               
                state.edit?
                
                //edit ?           
                <button  className="save" onClick={add}>save</button>:
                <button onClick={saveedit}>save edit</button>
                }
                </div>
            <div className="task">

                {state.list.map((val1)=>{
                     
                    return <div className="task1">
                        <button className="done" value={val1.id} onClick={comp}>Done</button>
                       <div className="todoval"><h3>{val1.valu}</h3></div>
                       <div className="todoed">
                    <button className="delete" value={val1.id} onClick={deletes} >delete</button>
                     
                        <button className="edits" value={val1.id} onClick={edits} >edit</button>
                        </div>
                        </div>
                   

                })}
            </div>
            </section>
        </div>
    );
}
export default Todo;