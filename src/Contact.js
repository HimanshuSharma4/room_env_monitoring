import React , {useState} from 'react';
import Developer from './Developer';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './Contact.css';
import SendIcon from '@material-ui/icons/Send';
import firebase from './firebase';
import HS from './assets/HS.jpg';
import ST from './assets/ST.jpeg';

function Contact() {
    const useStyles = makeStyles((theme) => ({
        button: {
          margin: theme.spacing(1),
        },
      }));
      
    const SendQuery = (e) => {
        e.preventDefault();
        firebase.firestore().collection('Contacts').add({
            Name : Name,
            Email : Email,
            Number : Number,
            Message : Query,  
        })
        .then(()=> {
            alert("message has been submitted ")
        })
        .catch(error => {
            alert(error.message);
        })
        setName('');
        setEmail('');
        setNumber('');
        setQuery('');
    }

    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Number,setNumber] = useState('');
    const [Query, setQuery] = useState('');

    const classes = useStyles();
    return (
        <div className='contact'>
            <div className="contact__left">
                <Developer  avatar = {HS} 
                    title='Himanshu Sharma' 
                    FB__id='https://www.facebook.com/harry.kingstorm.99/' 
                    LinkedIn__Url='https://www.linkedin.com/in/himanshu-sharma-5289451ab/'
                    Github_url="https://github.com/HimanshuSharma4"
                    Contribution="The Website Development, the UI configuration and responsiveness is done by me using React JS. Debugging DataBase using Firebase is done by me in IoT and the Website."
                />
                  
                <Developer  avatar = {ST} 
                    title='Siddhant Tewathia' 
                    FB__id='https://www.facebook.com/siddhant.tewathia' 
                    LinkedIn__Url='https://www.facebook.com/siddhant.tewathia'
                    Github_url="https://www.facebook.com/siddhant.tewathia"
                    Contribution="The Hardware Connection is set up by me, the code for NodeMCU Micro-Controller is written and installed by me."
                />

            </div>
            
            <div className="contact__right">
            
            <form className="contact-form" onSubmit={SendQuery}>
                
                <input  className="Contact__input"
                style={{      
                    border: "2px solid skyblue",
                  }} 
                        type="text"
                        value={Name} 
                        placeholder="Name" 
                        onChange={(event)=>{setName(event.target.value)}}/>
                
                <input  className="Contact__input" 
                style={{      
                    border: "2px solid skyblue",
                  }}
                        type="email"
                        value={Email} 
                        placeholder="Email" 
                        onChange={(event)=>{setEmail(event.target.value)}}/> 

                <input  className="Contact__input" 
                style={{      
                    border: "2px solid skyblue",
                  }}
                        type="number"
                        value={Number} 
                        placeholder="Contact Number" 
                        onChange={(event)=>{
                            setNumber(event.target.value); 
                            if (event.target.value.length > 10) {
                            alert('Enter a Valid Contact Number');
                        }}}/> 
                

                <input  className="Query__input"   
                style={{      
                    border: "2px solid skyblue",
                  }}
                        type="text" 
                        value={Query}    
                        placeholder="Query"
                        onChange={(event)=>{setQuery(event.target.value)}}/> 
               
                <Button type="Submit"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        endIcon={<SendIcon />} 
                        style = {{
                                "margin-left" : "0px" 
                                ,height:"30%"
                                ,width:"93%"}}>

                        Send
            
                </Button>
            
            </form>
        </div>
    </div>
    )
}

export default Contact
