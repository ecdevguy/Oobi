document.querySelectorAll(".copyBtn").forEach(e=>{let r=e.parentElement.previousElementSibling;e.addEventListener("click",()=>{r.focus(),r.select(),document.execCommand("copy"),e.textContent="Copied!",setTimeout(function(){window.getSelection().removeAllRanges(),e.textContent="Copy"},3e3)}),r.addEventListener("click",()=>{r.focus(),r.select(),document.execCommand("copy"),e.textContent="Copied!",setTimeout(function(){window.getSelection().removeAllRanges(),e.textContent="Copy"},3e3)})}),(()=>{const s=$("#form"),l=s.find("#name"),a=s.find("#subject"),c=s.find("#grade"),i=s.find("#length"),d=s.find("#acceptTerms"),m=s.find("#submit"),p=$("#responses"),u=$("#results");s.submit(function(e){e.preventDefault(),m.blur();let r=l.val(),t=a.find("input:checked").val(),n=c.find("input:checked").val(),o=i.find("input:checked").val();e=0;return""==r?(l.addClass("error"),l.parent().has(".error-msg").length||$("<p class='error-msg'>"+l.data("error")+"</p>").insertAfter("#name"),e++):(l.removeClass("error"),l.next(".error-msg").remove()),null==t?(a.addClass("error"),a.parent().has(".error-msg").length||$("<p class='error-msg'>"+a.data("error")+"</p>").insertAfter("#subject"),e++):(a.removeClass("error"),a.next(".error-msg").remove()),null==n?(c.addClass("error"),c.parent().has(".error-msg").length||$("<p class='error-msg'>"+c.data("error")+"</p>").insertAfter("#grade"),e++):(c.removeClass("error"),c.next(".error-msg").remove()),null==o?(i.addClass("error"),i.parent().has(".error-msg").length||$("<p class='error-msg'>"+i.data("error")+"</p>").insertAfter("#length"),e++):(i.removeClass("error"),i.next(".error-msg").remove()),d.is(":checked")?d.next().next(".error-msg").remove():(d.parent().has(".error-msg").length||$("<p class='error-msg checkbox'>"+d.data("error")+"</p>").insertAfter("#acceptTerms + label"),e++),0==e&&(m.val("Creating comments..."),$.ajax({type:s.attr("method"),url:s.attr("action"),data:{name:r,subject:t,grade:n,length:o},dataType:"json",success:function(n){console.log("Success!"),u.find(".studentName").text(r),l.val(""),m.val(m.data("value"));var o=document.querySelector("#responses").children;let s=0;for(let t=0;t<n.data.length;t++){let e=n.data[t],r=o[t].children[0];r.innerHTML=e.trim(),setTimeout(function(){r.style.height="1px",r.style.height=50+r.scrollHeight+"px",r.scrollHeight>s&&(s=r.scrollHeight)},100)}for(let r=0;r<o.length;r++){let e=o[r].children[0];setTimeout(function(){e.style.height=s+"px"},100)}u.show(),$("html, body").animate({scrollTop:p.offset().top},2e3),$("#try").insertAfter("#results"),$("#try h2.sr-only").removeClass("sr-only"),d.parent().remove()}})),!1})})(),(()=>{document.querySelectorAll('#form .select input[type="radio"] + label').forEach(r=>{r.addEventListener("click",()=>{var e=r.parentNode.parentNode.parentNode;r.parentNode.previousElementSibling.textContent=r.textContent,e.classList.remove("error"),e.nextSibling.remove()})});const e=document.querySelector("#name");e.addEventListener("keyup",()=>{e.classList.contains("error")&&""!=e.nodeValue&&(e.classList.remove("error"),e.nextSibling.remove())})})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2l0ZS5qcyIsInNvdXJjZXMiOlsiU2l0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvcHlCdG5cIikuZm9yRWFjaCgoZT0+e2xldCByPWUucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCgpPT57ci5mb2N1cygpLHIuc2VsZWN0KCksZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpLGUudGV4dENvbnRlbnQ9XCJDb3BpZWQhXCIsc2V0VGltZW91dCgoZnVuY3Rpb24oKXt3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCksZS50ZXh0Q29udGVudD1cIkNvcHlcIn0pLDNlMyl9KSksci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKCk9PntyLmZvY3VzKCksci5zZWxlY3QoKSxkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIiksZS50ZXh0Q29udGVudD1cIkNvcGllZCFcIixzZXRUaW1lb3V0KChmdW5jdGlvbigpe3dpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKSxlLnRleHRDb250ZW50PVwiQ29weVwifSksM2UzKX0pKX0pKSwoKCk9Pntjb25zdCBlPSQoXCIjZm9ybVwiKSxyPWUuZmluZChcIiNuYW1lXCIpLHQ9ZS5maW5kKFwiI3N1YmplY3RcIiksbj1lLmZpbmQoXCIjZ3JhZGVcIiksbz1lLmZpbmQoXCIjbGVuZ3RoXCIpLHM9ZS5maW5kKFwiI2FjY2VwdFRlcm1zXCIpLGw9ZS5maW5kKFwiI3N1Ym1pdFwiKSxhPSQoXCIjcmVzcG9uc2VzXCIpLGM9JChcIiNyZXN1bHRzXCIpO2xldCBpPSExO2Uuc3VibWl0KChmdW5jdGlvbihkKXtkLnByZXZlbnREZWZhdWx0KCksbC5ibHVyKCk7bGV0IG09ci52YWwoKSxwPXQuZmluZChcImlucHV0OmNoZWNrZWRcIikudmFsKCksdT1uLmZpbmQoXCJpbnB1dDpjaGVja2VkXCIpLnZhbCgpLGc9by5maW5kKFwiaW5wdXQ6Y2hlY2tlZFwiKS52YWwoKTt2YXIgaD0wO3JldHVyblwiXCI9PW0/KHIuYWRkQ2xhc3MoXCJlcnJvclwiKSxyLnBhcmVudCgpLmhhcyhcIi5lcnJvci1tc2dcIikubGVuZ3RofHwkKFwiPHAgY2xhc3M9J2Vycm9yLW1zZyc+XCIrci5kYXRhKFwiZXJyb3JcIikrXCI8L3A+XCIpLmluc2VydEFmdGVyKFwiI25hbWVcIiksaCsrKTooci5yZW1vdmVDbGFzcyhcImVycm9yXCIpLHIubmV4dChcIi5lcnJvci1tc2dcIikucmVtb3ZlKCkpLG51bGw9PXA/KHQuYWRkQ2xhc3MoXCJlcnJvclwiKSx0LnBhcmVudCgpLmhhcyhcIi5lcnJvci1tc2dcIikubGVuZ3RofHwkKFwiPHAgY2xhc3M9J2Vycm9yLW1zZyc+XCIrdC5kYXRhKFwiZXJyb3JcIikrXCI8L3A+XCIpLmluc2VydEFmdGVyKFwiI3N1YmplY3RcIiksaCsrKToodC5yZW1vdmVDbGFzcyhcImVycm9yXCIpLHQubmV4dChcIi5lcnJvci1tc2dcIikucmVtb3ZlKCkpLG51bGw9PXU/KG4uYWRkQ2xhc3MoXCJlcnJvclwiKSxuLnBhcmVudCgpLmhhcyhcIi5lcnJvci1tc2dcIikubGVuZ3RofHwkKFwiPHAgY2xhc3M9J2Vycm9yLW1zZyc+XCIrbi5kYXRhKFwiZXJyb3JcIikrXCI8L3A+XCIpLmluc2VydEFmdGVyKFwiI2dyYWRlXCIpLGgrKyk6KG4ucmVtb3ZlQ2xhc3MoXCJlcnJvclwiKSxuLm5leHQoXCIuZXJyb3ItbXNnXCIpLnJlbW92ZSgpKSxudWxsPT1nPyhvLmFkZENsYXNzKFwiZXJyb3JcIiksby5wYXJlbnQoKS5oYXMoXCIuZXJyb3ItbXNnXCIpLmxlbmd0aHx8JChcIjxwIGNsYXNzPSdlcnJvci1tc2cnPlwiK28uZGF0YShcImVycm9yXCIpK1wiPC9wPlwiKS5pbnNlcnRBZnRlcihcIiNsZW5ndGhcIiksaCsrKTooby5yZW1vdmVDbGFzcyhcImVycm9yXCIpLG8ubmV4dChcIi5lcnJvci1tc2dcIikucmVtb3ZlKCkpLHMuaXMoXCI6Y2hlY2tlZFwiKT9zLm5leHQoKS5uZXh0KFwiLmVycm9yLW1zZ1wiKS5yZW1vdmUoKToocy5wYXJlbnQoKS5oYXMoXCIuZXJyb3ItbXNnXCIpLmxlbmd0aHx8JChcIjxwIGNsYXNzPSdlcnJvci1tc2cgY2hlY2tib3gnPlwiK3MuZGF0YShcImVycm9yXCIpK1wiPC9wPlwiKS5pbnNlcnRBZnRlcihcIiNhY2NlcHRUZXJtcyArIGxhYmVsXCIpLGgrKyksMD09aCYmKGwudmFsKFwiQ3JlYXRpbmcgY29tbWVudHMuLi5cIiksJC5hamF4KHt0eXBlOmUuYXR0cihcIm1ldGhvZFwiKSx1cmw6ZS5hdHRyKFwiYWN0aW9uXCIpLGRhdGE6e25hbWU6bSxzdWJqZWN0OnAsZ3JhZGU6dSxsZW5ndGg6Z30sZGF0YVR5cGU6XCJqc29uXCIsc3VjY2VzczpmdW5jdGlvbihlKXtjb25zb2xlLmxvZyhcIlN1Y2Nlc3MhXCIpLGMuZmluZChcIi5zdHVkZW50TmFtZVwiKS50ZXh0KG0pLHIudmFsKFwiXCIpLGk9ITAsbC52YWwobC5kYXRhKFwidmFsdWVcIikpO2NvbnN0IHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXNwb25zZXNcIikuY2hpbGRyZW47bGV0IG49MDtmb3IobGV0IHI9MDtyPGUuZGF0YS5sZW5ndGg7cisrKXtsZXQgbz1lLmRhdGFbcl0scz10W3JdLmNoaWxkcmVuWzBdO3MuaW5uZXJIVE1MPW8udHJpbSgpLHNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7cy5zdHlsZS5oZWlnaHQ9XCIxcHhcIixzLnN0eWxlLmhlaWdodD01MCtzLnNjcm9sbEhlaWdodCtcInB4XCIscy5zY3JvbGxIZWlnaHQ+biYmKG49cy5zY3JvbGxIZWlnaHQpfSksMTAwKX1mb3IobGV0IGU9MDtlPHQubGVuZ3RoO2UrKyl7bGV0IHI9dFtlXS5jaGlsZHJlblswXTtzZXRUaW1lb3V0KChmdW5jdGlvbigpe3Iuc3R5bGUuaGVpZ2h0PW4rXCJweFwifSksMTAwKX1jLnNob3coKSwkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtzY3JvbGxUb3A6YS5vZmZzZXQoKS50b3B9LDJlMyksJChcIiN0cnlcIikuaW5zZXJ0QWZ0ZXIoXCIjcmVzdWx0c1wiKSwkKFwiI3RyeSBoMi5zci1vbmx5XCIpLnJlbW92ZUNsYXNzKFwic3Itb25seVwiKSxzLnBhcmVudCgpLnJlbW92ZSgpfX0pKSwhMX0pKX0pKCksKCgpPT57ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2Zvcm0gLnNlbGVjdCBpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbCcpLmZvckVhY2goKGU9PntlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgoKT0+e2NvbnN0IHI9ZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtlLnBhcmVudE5vZGUucHJldmlvdXNFbGVtZW50U2libGluZy50ZXh0Q29udGVudD1lLnRleHRDb250ZW50LHIuY2xhc3NMaXN0LnJlbW92ZShcImVycm9yXCIpLHIubmV4dFNpYmxpbmcucmVtb3ZlKCl9KSl9KSk7Y29uc3QgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hbWVcIik7ZS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwoKCk9PntlLmNsYXNzTGlzdC5jb250YWlucyhcImVycm9yXCIpJiZcIlwiIT1lLm5vZGVWYWx1ZSYmKGUuY2xhc3NMaXN0LnJlbW92ZShcImVycm9yXCIpLGUubmV4dFNpYmxpbmcucmVtb3ZlKCkpfSkpfSkoKTsiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImUiLCJsZXQiLCJyIiwicGFyZW50RWxlbWVudCIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJhZGRFdmVudExpc3RlbmVyIiwiZm9jdXMiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsInRleHRDb250ZW50Iiwic2V0VGltZW91dCIsIndpbmRvdyIsImdldFNlbGVjdGlvbiIsInJlbW92ZUFsbFJhbmdlcyIsIiQiLCJmaW5kIiwidCIsIm4iLCJvIiwicyIsImwiLCJhIiwiYyIsInN1Ym1pdCIsImQiLCJwcmV2ZW50RGVmYXVsdCIsImJsdXIiLCJtIiwidmFsIiwicCIsInUiLCJnIiwiaCIsImFkZENsYXNzIiwicGFyZW50IiwiaGFzIiwibGVuZ3RoIiwiZGF0YSIsImluc2VydEFmdGVyIiwicmVtb3ZlQ2xhc3MiLCJuZXh0IiwicmVtb3ZlIiwiaXMiLCJhamF4IiwidHlwZSIsImF0dHIiLCJ1cmwiLCJuYW1lIiwic3ViamVjdCIsImdyYWRlIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsInRleHQiLCJxdWVyeVNlbGVjdG9yIiwiY2hpbGRyZW4iLCJpbm5lckhUTUwiLCJ0cmltIiwic3R5bGUiLCJoZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJzaG93IiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIm9mZnNldCIsInRvcCIsInBhcmVudE5vZGUiLCJjbGFzc0xpc3QiLCJuZXh0U2libGluZyIsImNvbnRhaW5zIiwibm9kZVZhbHVlIl0sIm1hcHBpbmdzIjoiQUFBQUEsU0FBU0MsaUJBQWlCLFVBQVUsRUFBRUMsUUFBU0MsSUFBSUMsSUFBSUMsRUFBRUYsRUFBRUcsY0FBY0MsdUJBQXVCSixFQUFFSyxpQkFBaUIsUUFBUSxLQUFNSCxFQUFFSSxNQUFNLEVBQUVKLEVBQUVLLE9BQU8sRUFBRVYsU0FBU1csWUFBWSxNQUFNLEVBQUVSLEVBQUVTLFlBQVksVUFBVUMsV0FBVyxXQUFZQyxPQUFPQyxhQUFhLEVBQUVDLGdCQUFnQixFQUFFYixFQUFFUyxZQUFZLE1BQU8sRUFBRSxHQUFHLENBQUUsQ0FBQyxFQUFFUCxFQUFFRyxpQkFBaUIsUUFBUSxLQUFNSCxFQUFFSSxNQUFNLEVBQUVKLEVBQUVLLE9BQU8sRUFBRVYsU0FBU1csWUFBWSxNQUFNLEVBQUVSLEVBQUVTLFlBQVksVUFBVUMsV0FBVyxXQUFZQyxPQUFPQyxhQUFhLEVBQUVDLGdCQUFnQixFQUFFYixFQUFFUyxZQUFZLE1BQU8sRUFBRSxH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
