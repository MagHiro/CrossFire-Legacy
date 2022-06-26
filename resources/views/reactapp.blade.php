<!DOCTYPE html>

<head>
    <html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <meta charset=utf-8>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CF Legacy</title>
    <link href="{{mix('css/app.css')}}" rel=stylesheet>
</head>

<body class=antialiased>
    <div id=app></div>
    <script src="{{mix('js/app.js')}}"></script>