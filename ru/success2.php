<?php
header("Content-Type: text/html; charset=utf-8");
$type = htmlspecialchars($_POST["type"]);
$year = htmlspecialchars($_POST["year"]);
$name = htmlspecialchars($_POST["name"]);
$tel = htmlspecialchars($_POST["tel"]);

$check = is_array($_POST['check']) ? $_POST['check'] : array();
$check = implode (', ', $check );

$refferer = getenv('HTTP_REFERER');
$date=date("d.m.y"); // число.месяц.год  
$time=date("H:i"); // часы:минуты:секунды 
$myemail = "Parkauto.import@gmail.com";

$tema = "Тема письма админу";
$message_to_myemail = "Текст письма:
<br><br>
Форма подбора оптимальных моделей<br>
Имя: $name<br>
Телефон: $tel<br>
Помещениие: $type<br>
Тип работ: $year<br>
Источник (ссылка): $refferer
";

mail($myemail, $tema, $message_to_myemail, "From: Parkauto <parkauto.com.ua> \r\n Reply-To: Parkauto \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );

$myemail = $email;

$arr = array(
'Форма' => 'Калькулятор',
'Имя' => $name,
'Телефон' => $tel,
'Помещениие' => $radio,
'Тип работ' => $radiotw,
'Площадь стен и потолков' => $radioth,
'Место расположения' => $radiofr,
'Тип объекта' => $radiofv
);
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
mail($myemail, $tema, $message_to_myemail, "From: Parkauto <parkauto.com.ua> \r\n Reply-To: Parkauto \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );


$f = fopen("leads.xls", "a+");
fwrite($f," <tr>");    
fwrite($f," <td>$email</td> <td>$name</td> <td>$tel</td>   <td>$date / $time</td>");   
fwrite($f," <td>$refferer</td>");    
fwrite($f," </tr>");  
fwrite($f,"\n ");    
fclose($f);


?>
