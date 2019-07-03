<?php
    //var_dump($_COOKIE);
    if ( !isset($_COOKIE['email']) OR trim($_COOKIE['email']) ==''){
        header("Location: index.html");
        exit; 
    }
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link rel="stylesheet" href="css/materialize.min.css">
    <link rel="stylesheet" href="css/style.css" type="text/css" media="screen, projection">
    <title>Your account</title>
</head>

<body>

    <div class="container">
        <div class="row">
            <div class="col s12 center-align">
                <h1 class="cabinet_title">Your cabinet</h1>
            </div>
            <div class="col s12 center-align">
                <button id="out" class="waves-effect waves-light btn deep-purple"><i class="material-icons right">keyboard_tab</i> Log out</button>
            </div>
        </div>
        <div class="row center-align text-center content-center">
            <div class="col s12">
                <form>
                    <div class="row">
                      <div class="input-field col l4 s12">
                        <input value=" " id="signup-name" type="text" class="validate" name="name">
                        <label class="active" for="signup-name">Name</label>
                      </div>
                      <div class="input-field col l4 s12">
                        <input value=" " id="signup-pass" type="text" class="validate" name="pass">
                        <label class="active" for="signup-pass">Password</label>
                      </div>
                      <div class="input-field col l4 s12">
                        <input value=" " id="signup-birthday" type="text" class="datepicker" name="birthday">
                        <label class="active" for="signup-birthday">Birthday</label>
                      </div>
                      <div class="col l12 center-align">
                          <input type="submit" value="Change!" id="signup-submit" class="red accent-1 btn">
                      </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script src="script/ajax.js"></script>
    <script src="script/get_user_data.js"></script>
    <script src="script/out.js"></script>
    <script src="script/materialize.min.js"></script>
    <script src="script/birth.js"></script>
</body>

</html>