(()=>{const o=$("#form"),s=o.find("#name"),l=o.find("#subject"),d=o.find("#grade"),c=o.find("#length"),i=o.find("#acceptTerms"),u=o.find("#submit"),m=$("#responses");let v=!1;o.submit(function(e){e.preventDefault(),u.blur();var e=s.val(),r=l.find("input:checked").val(),t=d.find("input:checked").val(),a=c.find("input:checked").val(),n=0;return""==e?(s.addClass("error"),n++):s.removeClass("error"),null==r?(l.addClass("error"),n++):l.removeClass("error"),null==t?(d.addClass("error"),n++):d.removeClass("error"),null==a?(c.addClass("error"),n++):c.removeClass("error"),i.is(":checked")||n++,0==n&&(u.val("Creating comments..."),$.ajax({type:o.attr("method"),url:o.attr("action"),data:{name:e,subject:r,grade:t,length:a},dataType:"json",success:function(r){console.log("Success!"),$("html, body").animate({scrollTop:m.offset().top},2e3),i.parent().remove(),s.val(""),v||(v=!0,u.val(u.data("value")),u.removeAttr("data-value"));var t=document.querySelector("#responses").children;for(let e=0;e<r.data.length;e++){var a=r.data[e];t[e].children[0].innerHTML=a}}})),!1})})(),(()=>{document.querySelectorAll('#form .select input[type="radio"] + label').forEach(e=>{e.addEventListener("click",()=>{e.parentNode.previousElementSibling.textContent=e.textContent,e.parentNode.parentNode.parentNode.classList.remove("error")})});const e=document.querySelector("#name");e.addEventListener("keyup",()=>{e.classList.contains("error")&&""!=e.nodeValue&&e.classList.remove("error")})})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2l0ZS5qcyIsInNvdXJjZXMiOlsiU2l0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoKCk9Pntjb25zdCBlPSQoXCIjZm9ybVwiKSxyPWUuZmluZChcIiNuYW1lXCIpLHQ9ZS5maW5kKFwiI3N1YmplY3RcIiksYT1lLmZpbmQoXCIjZ3JhZGVcIiksbj1lLmZpbmQoXCIjbGVuZ3RoXCIpLG89ZS5maW5kKFwiI2FjY2VwdFRlcm1zXCIpLGw9ZS5maW5kKFwiI3N1Ym1pdFwiKSxzPSQoXCIjcmVzcG9uc2VzXCIpO2xldCBkPSExO2Uuc3VibWl0KChmdW5jdGlvbihjKXtjLnByZXZlbnREZWZhdWx0KCksbC5ibHVyKCk7bGV0IGk9ci52YWwoKSx1PXQuZmluZChcImlucHV0OmNoZWNrZWRcIikudmFsKCksbT1hLmZpbmQoXCJpbnB1dDpjaGVja2VkXCIpLnZhbCgpLHY9bi5maW5kKFwiaW5wdXQ6Y2hlY2tlZFwiKS52YWwoKTt2YXIgcD0wO3JldHVyblwiXCI9PWk/KHIuYWRkQ2xhc3MoXCJlcnJvclwiKSxwKyspOnIucmVtb3ZlQ2xhc3MoXCJlcnJvclwiKSxudWxsPT11Pyh0LmFkZENsYXNzKFwiZXJyb3JcIikscCsrKTp0LnJlbW92ZUNsYXNzKFwiZXJyb3JcIiksbnVsbD09bT8oYS5hZGRDbGFzcyhcImVycm9yXCIpLHArKyk6YS5yZW1vdmVDbGFzcyhcImVycm9yXCIpLG51bGw9PXY/KG4uYWRkQ2xhc3MoXCJlcnJvclwiKSxwKyspOm4ucmVtb3ZlQ2xhc3MoXCJlcnJvclwiKSxvLmlzKFwiOmNoZWNrZWRcIil8fHArKywwPT1wJiYobC52YWwoXCJDcmVhdGluZyBjb21tZW50cy4uLlwiKSwkLmFqYXgoe3R5cGU6ZS5hdHRyKFwibWV0aG9kXCIpLHVybDplLmF0dHIoXCJhY3Rpb25cIiksZGF0YTp7bmFtZTppLHN1YmplY3Q6dSxncmFkZTptLGxlbmd0aDp2fSxkYXRhVHlwZTpcImpzb25cIixzdWNjZXNzOmZ1bmN0aW9uKGUpe2NvbnNvbGUubG9nKFwiU3VjY2VzcyFcIiksJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOnMub2Zmc2V0KCkudG9wfSwyZTMpLG8ucGFyZW50KCkucmVtb3ZlKCksci52YWwoXCJcIiksZHx8KGQ9ITAsbC52YWwobC5kYXRhKFwidmFsdWVcIikpLGwucmVtb3ZlQXR0cihcImRhdGEtdmFsdWVcIikpO2NvbnN0IHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXNwb25zZXNcIikuY2hpbGRyZW47Zm9yKGxldCByPTA7cjxlLmRhdGEubGVuZ3RoO3IrKyl7bGV0IGE9ZS5kYXRhW3JdO3Rbcl0uY2hpbGRyZW5bMF0uaW5uZXJIVE1MPWF9fX0pKSwhMX0pKX0pKCksKCgpPT57ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2Zvcm0gLnNlbGVjdCBpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbCcpLmZvckVhY2goKGU9PntlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgoKT0+e2UucGFyZW50Tm9kZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50PWUudGV4dENvbnRlbnQsZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3JcIil9KSl9KSk7Y29uc3QgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hbWVcIik7ZS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwoKCk9PntlLmNsYXNzTGlzdC5jb250YWlucyhcImVycm9yXCIpJiZcIlwiIT1lLm5vZGVWYWx1ZSYmZS5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3JcIil9KSl9KSgpOyJdLCJuYW1lcyI6WyJlIiwiJCIsInIiLCJmaW5kIiwidCIsImEiLCJuIiwibyIsImwiLCJzIiwibGV0IiwiZCIsInN1Ym1pdCIsImMiLCJwcmV2ZW50RGVmYXVsdCIsImJsdXIiLCJpIiwidmFsIiwidSIsIm0iLCJ2IiwicCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJpcyIsImFqYXgiLCJ0eXBlIiwiYXR0ciIsInVybCIsImRhdGEiLCJuYW1lIiwic3ViamVjdCIsImdyYWRlIiwibGVuZ3RoIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiLCJwYXJlbnQiLCJyZW1vdmUiLCJyZW1vdmVBdHRyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2hpbGRyZW4iLCJpbm5lckhUTUwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXJlbnROb2RlIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsInRleHRDb250ZW50IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJub2RlVmFsdWUiXSwibWFwcGluZ3MiOiJDQUFBLEtBQU0sTUFBTUEsRUFBRUMsRUFBRSxPQUFPLEVBQUVDLEVBQUVGLEVBQUVHLEtBQUssT0FBTyxFQUFFQyxFQUFFSixFQUFFRyxLQUFLLFVBQVUsRUFBRUUsRUFBRUwsRUFBRUcsS0FBSyxRQUFRLEVBQUVHLEVBQUVOLEVBQUVHLEtBQUssU0FBUyxFQUFFSSxFQUFFUCxFQUFFRyxLQUFLLGNBQWMsRUFBRUssRUFBRVIsRUFBRUcsS0FBSyxTQUFTLEVBQUVNLEVBQUVSLEVBQUUsWUFBWSxFQUFFUyxJQUFJQyxFQUFFLENBQUEsRUFBR1gsRUFBRVksT0FBTyxTQUFVQyxHQUFHQSxFQUFFQyxlQUFlLEVBQUVOLEVBQUVPLEtBQUssRUFBRUwsSUFBSU0sRUFBRWQsRUFBRWUsSUFBSSxFQUFFQyxFQUFFZCxFQUFFRCxLQUFLLGVBQWUsRUFBRWMsSUFBSSxFQUFFRSxFQUFFZCxFQUFFRixLQUFLLGVBQWUsRUFBRWMsSUFBSSxFQUFFRyxFQUFFZCxFQUFFSCxLQUFLLGVBQWUsRUFBRWMsSUFBSSxFQUFNSSxFQUFFLEVBQUUsTUFBTSxJQUFJTCxHQUFHZCxFQUFFb0IsU0FBUyxPQUFPLEVBQUVELENBQUMsSUFBSW5CLEVBQUVxQixZQUFZLE9BQU8sRUFBRSxNQUFNTCxHQUFHZCxFQUFFa0IsU0FBUyxPQUFPLEVBQUVELENBQUMsSUFBSWpCLEVBQUVtQixZQUFZLE9BQU8sRUFBRSxNQUFNSixHQUFHZCxFQUFFaUIsU0FBUyxPQUFPLEVBQUVELENBQUMsSUFBSWhCLEVBQUVrQixZQUFZLE9BQU8sRUFBRSxNQUFNSCxHQUFHZCxFQUFFZ0IsU0FBUyxPQUFPLEVBQUVELENBQUMsSUFBSWYsRUFBRWlCLFlBQVksT0FBTyxFQUFFaEIsRUFBRWlCLEdBQUcsVUFBVSxHQUFHSCxDQUFDLEdBQUcsR0FBR0EsSUFBSWIsRUFBRVMsSUFBSSxzQkFBc0IsRUFBRWhCLEVBQUV3QixLQUFLLENBQUNDLEtBQUsxQixFQUFFMkIsS0FBSyxRQUFRLEVBQUVDLElBQUk1QixFQUFFMkIsS0FBSyxRQUFRLEVBQUVFLEtBQUssQ0FBQ0MsS0FBS2QsRUFBRWUsUUFBUWIsRUFBRWMsTUFBTWIsRUFBRWMsT0FBT2IsQ0FBQyxFQUFFYyxTQUFTLE9BQU9DLFFBQVEsU0FBU25DLEdBQUdvQyxRQUFRQyxJQUFJLFVBQVUsRUFBRXBDLEVBQUUsWUFBWSxFQUFFcUMsUUFBUSxDQUFDQyxVQUFVOUIsRUFBRStCLE9BQU8sRUFBRUMsR0FBRyxFQUFFLEdBQUcsRUFBRWxDLEVBQUVtQyxPQUFPLEVBQUVDLE9BQU8sRUFBRXpDLEVBQUVlLElBQUksRUFBRSxFQUFFTixJQUFJQSxFQUFFLENBQUEsRUFBR0gsRUFBRVMsSUFBSVQsRUFBRXFCLEtBQUssT0FBTyxDQUFDLEVBQUVyQixFQUFFb0MsV0FBVyxZQUFZLEdBQUcsSUFBTXhDLEVBQUV5QyxTQUFTQyxjQUFjLFlBQVksRUFBRUMsU0FBUyxJQUFJckMsSUFBSVIsRUFBRSxFQUFFQSxFQUFFRixFQUFFNkIsS0FBS0ksT0FBTy9CLENBQUMsR0FBRyxDQUFDUSxJQUFJTCxFQUFFTCxFQUFFNkIsS0FBSzNCLEdBQUdFLEVBQUVGLEdBQUc2QyxTQUFTLEdBQUdDLFVBQVUzQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQSxDQUFHLENBQUMsQ0FBRSxHQUFFLEdBQUUsS0FBTXdDLFNBQVNJLGlCQUFpQiwyQ0FBMkMsRUFBRUMsUUFBU2xELElBQUlBLEVBQUVtRCxpQkFBaUIsUUFBUSxLQUFNbkQsRUFBRW9ELFdBQVdDLHVCQUF1QkMsWUFBWXRELEVBQUVzRCxZQUFZdEQsRUFBRW9ELFdBQVdBLFdBQVdBLFdBQVdHLFVBQVVaLE9BQU8sT0FBTyxDQUFFLENBQUMsQ0FBRSxDQUFDLEVBQUUsTUFBTTNDLEVBQUU2QyxTQUFTQyxjQUFjLE9BQU8sRUFBRTlDLEVBQUVtRCxpQkFBaUIsUUFBUSxLQUFNbkQsRUFBRXVELFVBQVVDLFNBQVMsT0FBTyxHQUFHLElBQUl4RCxFQUFFeUQsV0FBV3pELEVBQUV1RCxVQUFVWixPQUFPLE9BQU8sQ0FBRSxDQUFDLENBQUUsR0FBRSJ9
