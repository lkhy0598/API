$(function(){
    $.ajax({
        url:'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-063?Authorization=CWB-7B6F597B-72C7-408A-AA1A-2BF6F5E0B265&locationName=%E4%B8%AD%E6%AD%A3%E5%8D%80,string&elementName=T',
        type:"GET",
        dataType:"json",
        success:function(resource){
            console.log(resource);
            let tempture = resource.records.locations[0].location[0].weatherElement[0].time[0].elementValue[0].value;
            let weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            $('#city_name').html(resource.records.locations[0].locationsName);
            $('#district').html(resource.records.locations[0].location[0].locationName);
            $('#tempture').html(tempture+ "&#176;");
            let j = 0;
            for(let i =0; i<10 ; i++){
                // console.log($('.block').eq(i).find('small').html());
                // console.log($('.block').eq(i).find('h6').html());
                
                if( i % 2 == 0){
                    let t = resource.records.locations[0].location[0].weatherElement[0].time[i].elementValue[0].value;
                    let temp = `<strong>${t}&#176;</strong>`;
                    let wd = resource.records.locations[0].location[0].weatherElement[0].time[i].startTime;
                    console.log(temp);
                    $('.block').eq(j).find('h6').html(temp);
                    const d = new Date(wd);
                    let day_index = d.getDay();
                    $('.block').eq(j).find('small').html(weekday[day_index]);
                    j++;
                }
            }
        },
        error:function(error){
            console.log(error);
        }
    })
})