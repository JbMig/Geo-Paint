<?php
if ("POST" === $_SERVER["REQUEST_METHOD"]) {
    $engine = "mysql";
    $host = "localhost";
    $port = 3306;
    $dbname = "test";
    $username = "root";
    $password = "root";
    $pdo = new PDO("$engine:host=$host:$port;dbname=$dbname", $username, $password);

    $user_id = 1;
    $data = filter_input(INPUT_POST, "array");
    $projectName = filter_input(INPUT_POST, "projectName");

    $maRequete = $pdo->prepare("SELECT `id`, `project_name`, `user_id` FROM `projet` WHERE `project_name` = :projectName;");
    $maRequete->execute([
        ":projectName" => $projectName
    ]);

    $projet_server = $maRequete->fetch();
    
    if ($projet_server["project_name"] == $projectName) {
        $maRequete = $pdo->prepare("UPDATE `projet` SET `data`= :oneData, `date` = CURRENT_TIMESTAMP WHERE `project_name` = :projectName;");
        $maRequete->execute([
            ":projectName" => $projectName,
            ":oneData" => $data
    ]);
    } else {
        $maRequete = $pdo->prepare(
            "INSERT INTO `projet` (`project_name`, `user_id`, `data`)
            VALUES(:projectName, :userId, :oneData)");
            $maRequete->execute([
                ":projectName" => $projectName,
                ":userId" => $user_id,
                ":oneData" => $data
            ]);
    }
    $_SESSION["projet"] = $projet;
    http_response_code(302);
    header('Location: /test/js_to_json.php');
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #form {
            visibility: hidden;
        }
    </style>
</head>
<body>
    <button id="open_form">click</button>
    <form id="form" method="post">
        <input id="get_json" type="hidden" name="array">
        <input id="name_of" type="text" name="projectName" required>
        <button id="save" type="submit">save</button>
    </form>
    <footer>
        <script>
            var variable = "super ok";
            var data = [1, variable, [2, "ca marche"]];
            var array_json = JSON.stringify(data);
            console.log(array_json);
            var save = document.querySelector("#save");
            var get_json = document.querySelector("#get_json");
            var open_form = document.querySelector("#open_form");
            function switch_hidden() {
                form.style.visibility = "visible";
            }
            function save_it() {
                get_json.value = array_json;
            }
            open_form.addEventListener("click", switch_hidden)
            save.addEventListener("click", save_it);
        </script>
    </footer>
</body>
</html>