import React ,{useState} from 'react'
import './todo.css'
import { ListItem,ListItemText,List, ListItemAvatar,Button, Modal,ListItemIcon,ListItemSecondaryAction } from '@material-ui/core'
import db from './firebase';
import {makeStyles} from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import WifiIcon from '@material-ui/icons/Wifi';
import EventIcon from '@material-ui/icons/Event';


const useStyles = makeStyles((theme)=>({
    paper:{
        position:'absolute',
        width:'40%',
        backgroundColor:theme.palette.background.paper,
        borger:'2px solid #000',
        boxShodow:theme.shadows[5],
        padding:theme.spacing(2,4,3),
    },
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        padding:theme.spacing(2,1,3),

      },

}))

const currDate=new Date().toLocaleDateString();

export default function Todo(props) {
    const classes =useStyles();
    const [open,setOpen]=useState(false);
    const [input,setInput]=useState();


   const handleOpen=()=>{
       setOpen(true);
   }

       const updateTodo=()=>{
       db.collection('todos').doc(props.todo.id).set({
        todo:  input
       },{merge:true})
       setOpen(false);
   }
 
    return (
        <>
      <Modal
      open={open}
      onClose={e =>setOpen(false)}
      >
          <div className={classes.paper}>
              <h1>this am a modal</h1>
              <input placeholder={props.todo.todo} value={input} onChange={event=>setInput(event.target.value)}/>
              <Button onClick={updateTodo}>Update todo time</Button>
          </div>
          
     </Modal>
             <List  className={classes.root}>
                <ListItem>
                    <ListItemIcon>
                    <EventIcon />
                    </ListItemIcon>
                <ListItemText id="switch-list-label-wifi" primary={props.todo.todo} secondary={currDate} />
                <ListItemSecondaryAction>
                <EditIcon onClick={e=>setOpen(true)}>Edit</EditIcon>
                <DeleteIcon onClick={event =>db.collection('todos').doc(props.todo.id).delete()}>DElETE ME</DeleteIcon>
                </ListItemSecondaryAction> 
                </ListItem>
                </List>
            
        </>
    )
}
