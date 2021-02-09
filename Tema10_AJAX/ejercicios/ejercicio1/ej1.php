<?php
	$servername = "localhost";
	$dbName = "dwec_biblioteca";
	$username = "javier";
	$password = "root";

	try {
		$conn = new PDO("mysql:host=$servername;dbname=$dbName;charset=utf8", $username, $password);
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

		if(isset($_GET["titulo"])) {
			$titulo = $_GET["titulo"];
			foreach($conn->query("SELECT titulo FROM libros where editorial ='" . $editorial . "'") as $fila) {
				echo "<option value='".$fila["Id"]."'>".$fila["titulo"]."</option>";
			}
		} else {
			foreach($conn->query("SELECT distinct editorial FROM libros order by editorial") as $fila) {
				echo "<option>".$fila["editorial"]."</option>";
			}
		}

	} catch(PDOException $e) {
		echo "Fallo la conexión: " . $e->getMessage();
	}
?>