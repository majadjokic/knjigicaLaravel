<nav>
    <div class="navbar navbar-expand-lg navbar-light">
        <a href="{{route("home")}}" class="navbar-brand"><img src="{{asset('assets/img/knjigicaM2.png')}}"></a>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul class="navbar-nav">
                @if(!request()->routeIs('admin'))
                @foreach($menuM as $m)
                    @if(!Session::get('role')||Session::get('role')!=1)
                        @if($m->href!='admin')
                    <li class="nav-item @if(request()->routeIs($m->href)) active @endif"><a class="nav-link" href="{{route($m->href)}}">{{$m->name}}</a></li>
                        @endif
                    @else
                        @if($m->href!='admin')
                            <li class="nav-item @if(request()->routeIs($m->href)) active @endif"><a class="nav-link" href="{{route($m->href)}}">{{$m->name}}</a></li>
                        @endif
{{--                        <li class="nav-item @if(request()->routeIs($m->href)) active @endif"><a class="nav-link" href="{{route($m->href)}}">{{$m->name}}</a></li>--}}
                        @if($m->href=='admin')
                            <li class="nav-item @if(request()->routeIs($m->href)) active @endif"><a class="nav-link" target="_blank" href="{{route($m->href)}}">{{$m->name}}</a></li>
                        @endif
                    @endif

            @endforeach
                @else
                    <li><h4>Admin panel</h4></li>
                @endif
            </ul>
            <ul class="navbar-nav ml-auto">

                        @if(!Session::get('user'))
                    @foreach($menuU as $u)
                    <li class="nav-item">
                        <a class="nav-link" href="{{route($u->href)}}">{{$u->name}}</a>
                    </li>
                    @endforeach
                    @else
                        <li class="nav-item">
                            <a class="nav-link">&emsp;&emsp;{{Session::get('user')}}</a></li>
                        <li class="nav-item">
                            <form action="{{route('logout')}}" method="GET" name="logOutForm">
                                <button class="nav-link btn" name="logOutBtn" id="logOutBtn">LOG OUT</button>
                            </form></li>
                    @endif

            </ul></div></div>
</nav>
