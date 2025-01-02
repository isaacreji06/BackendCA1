const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    res.send("successful")
})
const PORT=8080
app.listen(PORT,()=>{
    console.log(`app is listening in http://localhost:${PORT}`)
})
app.get('/user-signUp',(req,res)=>{
    const data=req.params
    userName=data.userName 
    userName=String(userName)
    email=data.email
    password=data.password
    password=String(password)
    DOB=data.DOB
    for (let i=0; i<userName.length; i++){
        if (userName[i]!=='a'||userName[i]!=='q'||userName[i]!=='w'||userName[i]!=='e'||userName[i]!=='r'||userName[i]!=='t'||userName[i]!=='y'||userName[i]!=='u'||userName[i]!=='i'||userName[i]!=='o'||userName[i]!=='p'||userName[i]!=='s'||userName[i]!=='d'||userName[i]!=='f'||userName[i]!=='g'||userName[i]!=='h'||userName[i]!=='j'||userName[i]!=='k'||userName[i]!=='l'||userName[i]!=='z'||userName[i]!=='x'||userName[i]!=='c'||userName[i]!=='v'||userName[i]!=='b'||userName[i]!=='n'||userName[i]!=='m'||userName[i]!=='1'||userName[i]!=='2'||userName[i]!=='3'||userName[i]!=='4'||userName[i]!=='5'||userName[i]!=='6'||userName[i]!=='7'||userName[i]!=='8'||userName[i]!=='9'||userName[i]!=='0'){
            return res.send("invalid username")
        }
    }
    if (password.length<=8){
        res.send("min length of password is 8")
    }
})