let usuario = "agustina";
let password = "0000";
let user, pass;
let condicion;

do{
    user = (prompt("Ingrese su nombre de usuario"));
    pass = (prompt("Ingrese su contraseña"));

    if(user!=usuario || pass!=password){
        alert ("Su usuario o contraseña son incorrectos");
        condicion = true;
    }else{
        condicion = false;
        alert("¡Bienvenido!")
    }

}while (condicion);
