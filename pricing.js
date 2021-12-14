<script>
jQuery(document).ready(function($){
    $(document).on('change', '#et_pb_contact_plans_0', function() {
        if( this.value =='50k Credits'){
            $('.ch-price').text('$30 / month')
        } else if( this.value =='100k Credits'){
            $('.ch-price').text('$60 / month')
        } else if( this.value =='200k Credits'){
            $('.ch-price').text('$120 / month')
        } else if( this.value =='300k Credits'){
            $('.ch-price').text('$180 / month')
        } else if( this.value =='400k Credits'){
            $('.ch-price').text('$240 / month')
        } else if( this.value =='500k Credits'){
            $('.ch-price').text('$30 / month') 
        } else if( this.value =='600k Credits'){
            $('.ch-price').text('$330 / annual')
        } else if( this.value =='1200k Credits'){
            $('.ch-price').text('$660 / annual')
        } else if( this.value =='2400k Credits'){
            $('.ch-price').text('$1320 / annual')
        } else if( this.value =='3600k Credits'){
            $('.ch-price').text('$1980/ annual')
        } else if( this.value =='4800k Credits'){
            $('.ch-price').text('$2640 / annual')
        } else if( this.value =='6000k Credits'){
            $('.ch-price').text('$3300 / annual')
        }
    });
})
</script>
