//buat handle login di index.html 
function handleLogin(event) {
    event.preventDefault(); //ini tujuannya kasih tau html kalo yang ngatur perpindahan antar page itu script java (script ini)
    
    //dpt username & password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;


    //variable nama & password buat nnti cek
    //krn ini blom pake database jd hrs bikin manual kek gini : 
    const validUsername = "noah"; //kt ngatur, disini pake "noah"
    const validPassword = "noahstephentjiang"; //sm aj kek username
    const validEmail = "noahstephentjiang@gmail.com";

    //if else buat cek sesuai dengan yang diatas td
    if (username === validUsername || email === validEmail  && password === validPassword) 
    {
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        window.location.href = "swiftcart.html"; //kalo sesuai maka bkl ke page kedua
    } 
    else 
    {
        //kalo g sesuai, ksh tw user ap yg salah
        alert("Incorrect username or password. Please try again.");
    }
}

