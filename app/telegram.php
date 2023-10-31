<?php

//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "6351129981:AAFb5wjtJ9QJw3XpNtTeRjPgKVfxE4GbMFk";

//Сюда вставляем chat_id
$chat_id = "-915395868";

//Определяем переменные для передачи данных из нашей формы

$name = ($_POST['name']);
$phone = ($_POST['phone']);

//Собираем в массив то, что будет передаваться боту
$arr = array(
    'Имя:' => $name,
    'Телефон:' => $phone
);

//Настраиваем внешний вид сообщения в телеграме
foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
};

//Передаем данные боту
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>
