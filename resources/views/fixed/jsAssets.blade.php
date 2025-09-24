<script src="{{asset('assets/js/jquery.min.js')}}"></script>
<script src="{{asset('assets/js/bootstrap.min.js')}}"></script>

@if(request()->routeIs('home'))
    <script src="{{asset('assets/js/home.js')}}"></script>
@endif
@if(request()->routeIs('products'))
    <script src="{{asset('assets/js/products.js')}}"></script>
@endif
@if(request()->routeIs('contact'))
    <script src="{{asset('assets/js/contact.js')}}"></script>
@endif

