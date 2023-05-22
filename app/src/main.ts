import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
declare var $:any;

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  $(document).ready(function(){
    $('.loading').fadeOut(1000 , function(){
      $('.spnr').fadeOut(1000 , function(){
        $('body').css('overflow' , 'auto')
      })
    })
  })
