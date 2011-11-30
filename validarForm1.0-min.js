/*
 * @author Luis Carlos Boch luis.c.boch@gmail.com
 * 
 * */
 (function(b){b.fn.validarForm=function(i){var g=11,j="]",l=true,f="",d=false;i=b.extend({useAlert:d,htmlError:'<div class="validar-form-msg-erro" style="position:absolute; color:#666666; padding:7px; font-size:11px; margin:-5px 0px 0px 0px;width:200px; background: #FDD; z-index:99999; border:1px dotted #999;display:none;">!-msg-!</div>',attrRequired:"require",attrMesage:"mesage",attrType:"validate",attrTest:"test",homologacao:d},i);var s=i.attrMesage,o=i.attrType,k=i.attrRequired,u=i.attrTest,c=f,m,w=i.homologacao,h,e;b(this).each(function(){h=this;b(h).submit(function(){var e="#FFF",a="background";try{valido=l;b(h).unbind("click");b(h).click(function(){b(h).find("["+o+j).css(a,e);b(h).find("["+k+j).css(a,e)});b(h).find("[validar]").each(function(){!b(this).attr(k)&&b(this).val()!=f&&b(this).attr(k,"aux")});b(h).find("["+k+j).each(function(){var i="diferente",g=this;if(valido){tipo=b(g).attr(o);c=b(g).attr(s);require=b(g).attr(k);dependencia=b(g).attr(u);teste=l;if(dependencia){tp=f;if(dependencia.indexOf("=")!=-1){tp="igual";campos=dependencia.split("=")}else if(dependencia.indexOf("!=")!=-1){tp=i;campos=dependencia.split("!=")}else if(dependencia.indexOf(">")!=-1){tp="maior";campos=dependencia.split(">")}else if(dependencia.indexOf("<")!=-1){tp="menor";campos=dependencia.split("<")}campo_a=b("#"+campos[0]);campo_b=campos[1];if(campo_a.length==0)campo_a=b("[name="+campos[0]+j);if(campo_a.length==0)throw new Exeption("O campo definido para teste deve ser definido com o name ou id do item");switch(tp){case"maior":if(campo_a.val()<=campo_b)teste=d;break;case"menor":if(campo_a.val()>=campo_b)teste=d;break;case i:if(campo_a.val()==campo_b)teste=d;break;case"igual":if(campo_a.val()!=campo_b)teste=d}}if(teste){if(b(g).val()!=f)require=l;if(require)valido=v(b(g),tipo,h);if(!valido){g.focus();b(g).css(a,"#fFD");p(c,b(g))}else b(g).css(a,e)}else{n=b(g).css(a,e).next();n.attr("class")=="erro_form"&&n.fadeOut(200)}}});b(h).find("["+k+"=aux]").each(function(){b(this).removeAttr(k)})}catch(g){return d}if(w&&valido){alert("Formulário Válidado!");return d}return valido})});function p(c,a){if(i.useAlert)alert(c);else{html=i.htmlError.replace("!-msg-!",c);m&&m.remove();a.after(html);m=a.next();a.next().css({left:a.offset().left+a.width()-5+"px",top:a.offset().top+15+"px",display:"none"});a.next().fadeIn(500);e.unbind("change");e.change(function(){m.animate({opacity:0},500,function(){b(this).remove()})});e.unbind("keyup");e.unbind("click");e.click(function(){m.animate({opacity:0},500,function(){b(this).remove()})});e.unbind("keyup");e.keyup(function(){m.animate({opacity:0},500,function(){b(this).remove()})})}}function v(g,o,n){var m=":checked",k="Este campo não deve ficar vazio!",h=" opçõe(s)!",i="Este campo deve ser numero com ";tag_search=g.get(0).tagName.toLowerCase();itm_name=g.attr("name");if(o)switch(tipo){case"float":reDigits=/^[+-]?((\d+|\d{1,3}(\.\d{3})+)(\,\d*)?|\,\d+)$/;if(g.val()==f||!reDigits.test(g.val())){if(!c)c="Este campo deve ser numero!";e=g;return d}break;case"integer":reDigits=/^\d+$/;if(g.val()==f||!reDigits.test(g.val())){if(!c)c="Este campo deve ser numero inteiro!";e=g;return d}break;case"cpf":if(!r(g.val().replace(".",f).replace(".",f).replace(".",f).replace("-",f))){if(!c)c="Este campo deve ser cpf válido!";e=g;return d}break;case"cnpj":if(!q(g.val().replace(".",f).replace(".",f).replace("/",f).replace("-",f))){if(!c)c="Este campo deve ser CNPJ válido!";e=g;return d}break;case"email":reEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,3})+$/;if(!reEmail.test(g.val())){if(!c)c="Este campo deve ser um email válido!";e=g;return d}break;case"cep":reCEP=/^\d{8}$/;if(!reCEP.test(g.val().replace("-",f))){e=g;if(!c)c="Este campo deve ser um CEP válido!";return d}break;default:if(tipo.indexOf("integer")!=-1){num=parseInt(tipo.substr(8,9));reDigits=/^\d+$/;if(!reDigits.test(g.val())){if(!c)c=i+num+"!";e=g;return d}else if(parseInt(g.val().length)!=num){if(!c)c=i+num+"!";e=g;return d}}else if(tipo.indexOf("count")!=1){aux=Array();aux[0]=tipo.indexOf("[")+1;aux[1]=tipo.indexOf(j);aux[1]=aux[1]-aux[0];a=tipo.substr(aux[0],aux[1]);t=a.split(",");t[1]=parseInt(t[1]);if(itm_name!=undefined)itm_name=itm_name.replace("[]",f).replace("[]",f);e=b(n).find(tag_search+"[name^="+itm_name+j);if(t[2]==undefined&&e.filter(":"+t[0]).length<t[1]){if(!c)c="Selecione pelo menos "+t[1]+h;return d}else if(t[2]=="="&&e.filter(":"+t[0]).length!=t[1]){if(!c)c="Selecione apenas "+t[1]+h;return d}else if(t[2]=="<"&&e.filter(":"+t[0]).length>=t[1]){if(!c)c="Selecione no máximo "+(t[1]-1)+h;return d}else if(t[2]==">"&&e.filter(":"+t[0]).length<=t[1]){if(!c)c="Selecione mais que "+t[1]+h;return d}}else if(g.val()==f){e=g;if(!c)c=k;return d}}else if(tag_search=="input"&&g.attr("type")=="radio"){e=b(n).find(tag_search+"[name^="+itm_name+j);if(e.filter(m).length==0||e.filter(m).val()==f){if(!c)c="Selecione uma opcão válida!";return d}}else if(g.val()==f){if(!c)c=k;return d}return l}function r(c){var f,i,b,a,e,h;h=1;if(c.length<g)return d;for(a=0;a<c.length-1;a++)if(c.charAt(a)!=c.charAt(a+1)){h=0;break}if(!h){f=c.substring(0,9);i=c.substring(9);b=0;for(a=10;a>1;a--)b+=f.charAt(10-a)*a;e=b%g<2?0:g-b%g;if(e!=i.charAt(0))return d;f=c.substring(0,10);b=0;for(a=g;a>1;a--)b+=f.charAt(g-a)*a;e=b%g<2?0:g-b%g;return e!=i.charAt(1)?d:l}else return d}function q(c){var i,k,e,a,h,f,b,j;j=1;if(c.length<14&&c.length<15)return d;for(a=0;a<c.length-1;a++)if(c.charAt(a)!=c.charAt(a+1)){j=0;break}if(!j){b=c.length-2;i=c.substring(0,b);k=c.substring(b);e=0;f=b-7;for(a=b;a>=1;a--){e+=i.charAt(b-a)*f--;if(f<2)f=9}h=e%g<2?0:g-e%g;if(h!=k.charAt(0))return d;b=b+1;i=c.substring(0,b);e=0;f=b-7;for(a=b;a>=1;a--){e+=i.charAt(b-a)*f--;if(f<2)f=9}h=e%g<2?0:g-e%g;return h!=k.charAt(1)?d:l}else d}}})(jQuery);