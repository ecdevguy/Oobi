jQuery(r=>{const c=r("#form");c.submit(function(e){e.preventDefault();var e=c.find("#name").val(),t=c.find("#subject input:checked").val(),n=c.find("#grade input:checked").val(),a=c.find("#length input:checked").val();return r.ajax({type:c.attr("method"),url:c.attr("action"),data:{name:e,subject:t,grade:n,length:a},dataType:"json",success:function(t){var n=document.querySelector("#responses").children;for(let e=0;e<t.data.length;e++){var a=t.data[e];n[e].children[0].innerHTML=a}}}),!1})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2l0ZS5qcyIsInNvdXJjZXMiOlsiU2l0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJqUXVlcnkoKGU9Pntjb25zdCB0PWUoXCIjZm9ybVwiKTt0LnN1Ym1pdCgoZnVuY3Rpb24obil7bi5wcmV2ZW50RGVmYXVsdCgpO2NvbnN0IGE9dC5maW5kKFwiI25hbWVcIikudmFsKCksYz10LmZpbmQoXCIjc3ViamVjdCBpbnB1dDpjaGVja2VkXCIpLnZhbCgpLHI9dC5maW5kKFwiI2dyYWRlIGlucHV0OmNoZWNrZWRcIikudmFsKCksZD10LmZpbmQoXCIjbGVuZ3RoIGlucHV0OmNoZWNrZWRcIikudmFsKCk7cmV0dXJuIGUuYWpheCh7dHlwZTp0LmF0dHIoXCJtZXRob2RcIiksdXJsOnQuYXR0cihcImFjdGlvblwiKSxkYXRhOntuYW1lOmEsc3ViamVjdDpjLGdyYWRlOnIsbGVuZ3RoOmR9LGRhdGFUeXBlOlwianNvblwiLHN1Y2Nlc3M6ZnVuY3Rpb24oZSl7dmFyIHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXNwb25zZXNcIikuY2hpbGRyZW47Zm9yKGxldCBuPTA7bjxlLmRhdGEubGVuZ3RoO24rKyl7bGV0IGE9ZS5kYXRhW25dO3Rbbl0uY2hpbGRyZW5bMF0uaW5uZXJIVE1MPWF9fX0pLCExfSkpfSkpOyJdLCJuYW1lcyI6WyJqUXVlcnkiLCJlIiwidCIsInN1Ym1pdCIsIm4iLCJwcmV2ZW50RGVmYXVsdCIsImEiLCJmaW5kIiwidmFsIiwiYyIsInIiLCJkIiwiYWpheCIsInR5cGUiLCJhdHRyIiwidXJsIiwiZGF0YSIsIm5hbWUiLCJzdWJqZWN0IiwiZ3JhZGUiLCJsZW5ndGgiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjaGlsZHJlbiIsImxldCIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6IkFBQUFBLE9BQVFDLElBQUksTUFBTUMsRUFBRUQsRUFBRSxPQUFPLEVBQUVDLEVBQUVDLE9BQU8sU0FBVUMsR0FBR0EsRUFBRUMsZUFBZSxFQUFFLElBQU1DLEVBQUVKLEVBQUVLLEtBQUssT0FBTyxFQUFFQyxJQUFJLEVBQUVDLEVBQUVQLEVBQUVLLEtBQUssd0JBQXdCLEVBQUVDLElBQUksRUFBRUUsRUFBRVIsRUFBRUssS0FBSyxzQkFBc0IsRUFBRUMsSUFBSSxFQUFFRyxFQUFFVCxFQUFFSyxLQUFLLHVCQUF1QixFQUFFQyxJQUFJLEVBQUUsT0FBT1AsRUFBRVcsS0FBSyxDQUFDQyxLQUFLWCxFQUFFWSxLQUFLLFFBQVEsRUFBRUMsSUFBSWIsRUFBRVksS0FBSyxRQUFRLEVBQUVFLEtBQUssQ0FBQ0MsS0FBS1gsRUFBRVksUUFBUVQsRUFBRVUsTUFBTVQsRUFBRVUsT0FBT1QsQ0FBQyxFQUFFVSxTQUFTLE9BQU9DLFFBQVEsU0FBU3JCLEdBQUcsSUFBSUMsRUFBRXFCLFNBQVNDLGNBQWMsWUFBWSxFQUFFQyxTQUFTLElBQUlDLElBQUl0QixFQUFFLEVBQUVBLEVBQUVILEVBQUVlLEtBQUtJLE9BQU9oQixDQUFDLEdBQUcsQ0FBQ3NCLElBQUlwQixFQUFFTCxFQUFFZSxLQUFLWixHQUFHRixFQUFFRSxHQUFHcUIsU0FBUyxHQUFHRSxVQUFVckIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUEsQ0FBRyxDQUFDLENBQUUsQ0FBQyJ9
