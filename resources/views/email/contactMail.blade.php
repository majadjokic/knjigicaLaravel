@component('mail::message')

    <h2>Neko nam je poslao mejl!!!</h2>
    <br/>
    <h3>Odgovorite im što pre!</h3>
    <br/>
    <p>Ko nam se javlja: {{$firstName}} {{$lastName}}</p>
    <br/>
    <p>Njihova email adresa: {{$email}}</p>
    <br/>
    <p>Njigova poruka:</p>
    <br/>
    <p>{{$text}}</p>


@endcomponent
