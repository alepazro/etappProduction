var lastFetchOn = 0;
var qtyPanels = 1;
var devicesPerPanel = 0;
var Job = {};
var resendEmail = false;
var jobuniqueKey = "";
function getBoardbrokers() {
    try {

        var token = getTokenCookie('ETTK');
        var data = 'lastFetchOn=' + escape(lastFetchOn) + '&qtyPanels=' + qtyPanels + '&devicesPerPanel=' + devicesPerPanel;
        $.ajax({
            type: "GET",
            url: 'https://localhost:44385/etrack.svc/getDevicesbrokers/' + escape(token),
            contentType: 'application/json',
            data: data,
            dataType: "json",
            processdata: false,
            success: getBrokersDevices,
            error: getBrokersDevicesError,
            async: false
        });
    }
    catch (err) {
        console.log("error==> " + err);
        alert('getBoardDevices: ' + err.description);
    }
}
function getBrokersDevices(data, textStatus, jqXHR) {
    
    let colorstatus = "";
    let speedcolor = "";
    let Workinprogress = "";
    try {
        $("#tbody_brokerlist").empty();
        var row = "";
        if (data != null) {
            if (data.length == 1) {
                if (data[0].isOk == false) {
                    return;
                }
            }
           $.each(data, function (key, value) {
               
               colorstatus = eventColor(value.eventCode);
               speedcolor = speedingColor(value.speed)

               row += "<tr>";  

              
               row += "<td style=display:none>" + value.id + "</td>";
               if (value.hasAssignments > 0) {
                   row += "<td><button type='button' data-toggle='modal' data-target='#formbroker' onclick=savebroker() disabled>New</button></td>";
                   Workinprogress = "Work in progress";
               } else {
                   row += "<td><button type='button' data-toggle='modal' data-target='#formbroker' onclick=savebroker()>New</button></td>";
                   Workinprogress = "No assignment";

               }
               row += "<td><button type='button' data-toggle='modal' data-target='#formbroker' onclick=View()>View Broker</button></td>";
                row += "<td><button type='button' data-toggle='modal' data-target='#formtrakingnput' onclick=alert('Finish')>Finish</button></td>";
               
                /*row += "<td><a href=" + value.iconUrl + " target=_blank disabled>View Map</a></td>";*/
                row += "<td><img src=" + value.iconUrl+" alt='image'></td>";
                row += "<td>" + value.name + "</td>";
                row += "<td style=background-color:" + colorstatus + ">" + value.eventName + "</td>";
               row += "<td>" + value.eventDate + "</td>";
               row += "<td>" + value.address + "</td>";
               //row += "<td onclick=showLocationInMap('mapCanvas'," + device.latitude + "," + device.longitude+");>"+ value.address + "</td>";
                row += "<td>" + value.driverName + "</td>";
                row += "<td  style=background-color:" + speedcolor + ">" + value.speed + "</td>";
               row += "<td></td>";   
               row += "<td>" + Workinprogress + "</td>"; 
               row += "<td style=display:none>" + value.jobuniqueKey + "</td>";
               row += "</tr>";

            });
            $("#tbody_brokerlist").append(row)
        }
    }
    catch (err) {
        alert('getBoardDevicesOk: ' + err.description);
    }
}
function setLastFetchOn() {
    try {
        if (lastFetchOn == 0) {
            lastFetchOn = '1-1-2000';
        }
        else {
            var now = new Date();
            var now_utc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
            lastFetchOn = now_utc.getFullYear().toString() + '-' + pad((now_utc.getMonth() + 1).toString(), 2) + '-' + pad(now_utc.getDate().toString(), 2) + ' ' + now_utc.getHours().toString() + ':' + pad(now_utc.getMinutes().toString(), 2) + ':' + pad(now_utc.getSeconds().toString(), 2);
        }
    }
    catch (err) {
        alert('setLastFetchOn: ' + err.description);
    }
}
function getBrokersDevicesError(jqXHR, textStatus, errorThrown) {
    try {
        var a = 1;
    }
    catch (err) {
        alert('getBoardDevicesError: ' + err.description);
    }
}
function loadbrokerOrder(){
    getBoardbrokers();
}
function savebroker() {
    //clearinputs();
    try {
        
        
        var bool = true;
        //e.preventDefault();
        //var dataItem = this.dataItem($(e.currentTarget).closest("tr"));
        //window.open('crmViewCustomer.html?' + 'uid=' + dataItem.uniqueKey, target = "_blank");
        $("#brokerlist tr").click(function () {
            
            if (bool) {
                var tr = $(this)[0];
                var brokerdeviceguid = tr.cells[0].innerText;
                var brokerdevice = tr.cells[5].innerText; 
                var brokerdriver = tr.cells[9].innerText == "" ? "Unassigned" : tr.cells[9].innerText; 
                $("#brokerdevice").text(brokerdevice);
                $("#brokerdriver").text(brokerdriver);
                $("#brokerdeviceguid").val(brokerdeviceguid);                           
            }
            bool = false

        });
    }
    catch (err) {
        alert('Error: ' + err.message);
    }
}
function savebroker2() {
    try {
        debugger;
        if (resendEmail) {//from boton View()
            let sendemail = $('#chksendtraking').prop('checked') == true ? true : false;
            if (sendemail) {
                resendEmailDB(jobuniqueKey, $("#emailto").val());
            }
        }else {
            var loadt = $('select[name=type] option').filter(':selected').val();
            if (validadteForm()) {
                Job.JobName = $("#name").val();
                Job.JobNumber = $("#Ordernumber").val();
                Job.deviceId = $("#brokerdeviceguid").val();
                Job.driverId = $("#brokerdriver").val() == "" ? "0" : $("#brokerdriver").val();
                Job.geof_Id == "";
                Job.job_description = $("#Observations").val();
                Job.geof_latitud = 0.0;
                Job.geof_longitud = 0.0;
                Job.hour = 0;
                Job.minute = 0;
                Job.dueDate = "1900-01-01 00:00:00";
                Job.StartOn = "1900-01-01 00:00:00";
                Job.jobcategories = "0Frh6hU8Hf";
                Job.jobpriority = "owqiQpXWoV";
                Job.UniqueKey = "";
                Job.StatusID = "20";
                Job.UpdateFrom = 3;
                Job.LoadType = loadt;
                Job.notes = [];
                Job.picturesList = [];
                Job.jobstoplist = [];
                Job.Pickupdetetime = $("#PickupDatetime").val();
                Job.Deliverydatetime = $("#DeliveryDatetime").val();
                Job.EmailTo = $("#emailto").val();
                //Job.CommentsEmail = $("#emailComments").val();
                Job.HasEmail = $('#chksendtraking').prop('checked') == true ? true : false;
                Job.DeviceName = $("#brokerdevice").innerText;
                Job.Flat_FromJob = false;
                Job.Flat_FromBrokerOrder = true;

                if (postDbJob2("postjob", JSON.stringify(Job))) {
                    clearform();
                    toastr.success('job created successfully');
                    loadbrokerOrder();
                } else {
                    toastr.error('ERROR create job');
                }
            }
        }
        
       /*
        *Note: This information is retrieved from the search events of the creation form.
        Job.PickupAddresscoordinatesLat = "";
        Job.PickupAddresscoordinatesLng = "";
        Job.DeliveryAddressscoordinatesLat = "";
        Job.DeliveryAddressscoordinatesLng = "";
        */
    }
    catch (err) {
        alert('Error: ' + err.message);
    }
}

function clearform() {
    $("#name").val('');
    $("#Ordernumber").val('');
    $("#PickupAddress").val('');
    $("#PickupDatetime").val('');
    $("#address").val('');
    $("#DeliveryDatetime").val('');
    $("#Observations").val('');
    

}
function validadteForm() {
    if ($("#name").val().length == 0) {
        document.getElementById('msg').innerHTML = 'Broker Name field is empty';
        return false;
    } else if ($("#Ordernumber").val().length == 0) {
        document.getElementById('msg').innerHTML = 'Order Number field is empty';
        return false;
    } else if ($("#PickupAddress").val().length == 0) {
        document.getElementById('msg').innerHTML = 'Pick up Address field is empty';
        return false;
    } else if ($("#PickupDatetime").val().length == 0) {
        document.getElementById('msg').innerHTML = 'Pick up Datetime field is empty';
        return false;
    } else if ($("#address").val().length == 0) {
        document.getElementById('msg').innerHTML = 'Delivery Address field is empty';
        return false;
    } else if ($("#DeliveryDatetime").val().length == 0) {
        document.getElementById('msg').innerHTML = 'Delivery Datetime field is empty';
        return false;
    } 
    else if ($("#DeliveryDatetime").val().length == 0) {
        document.getElementById('msg').innerHTML = 'Delivery Datetime field is empty';
        return false;
    } 
    else {
        if ($('#chksendtraking').prop('checked')) {
            if ($("#emailto").val().length == 0) {
                document.getElementById('msg').innerHTML = 'Email field is empty';
                return false;

            }
            //else if ($("#emailComments").val().length == 0) {
            //    document.getElementById('msg').innerHTML = 'Comments email field is empty';
            //    return false;
            //}
        }
        return true;
    }
}
function viewtraking() {
    if ($('#chksendtraking').prop('checked')) {        
        $("#emailstraking").fadeIn(1000).show();
    } else {
        $('#emailstraking').fadeOut(1000).hide();        
    }
    
}
function View() {
    var bool = true;
    var broker = [];
    clearinputs();
    
    try {
        $("#tbody_brokerlist tr").click(function () {
            if (bool) {               

                var tr = $(this)[0];
                jobuniqueKey = tr.cells[13].innerText;
                resendEmail = true;
                broker = getDbBroker("detail", jobuniqueKey);
                debugger;
                if (broker.length > 0) {
                    debugger;
                    $("#title").text("Broker Information")
                    $("#brokerdevice").text(broker[0].DeviceName);
                    $("#brokerdriver").text(broker[0].DriverName);
                    $("#name").val(broker[0].JobName);
                    $("#name").prop('disabled', true);
                    $("#Ordernumber").val(broker[0].JobNumber);
                    $("#Ordernumber").prop('disabled', true);
                    $("#PickupAddress").val(broker[0].PickupAddress);
                    $("#PickupAddress").prop('disabled', true);
                    $("#PickupDatetime").val(broker[0].Pickupdetetime);
                    $("#PickupDatetime").prop('disabled', true);
                    $("#address").val(broker[0].DeliveryAddress);
                    $("#address").prop('disabled', true);
                    $("#DeliveryDatetime").val(broker[0].Deliverydatetime);
                    $("#DeliveryDatetime").prop('disabled', true);
                    $("#Observations").val(broker[0].Observations);
                    $("#Observations").prop('disabled', true);
                    $("#emailto").val(broker[0].SendTo);
                    debugger;
                    if (broker[0].SendTo != "") {
                        $("#notificacation").text('The tracking was sent to email  ');
                        $("#spanemailtraking").text(" " + broker[0].SendTo);
                        $("#linktraking").text(" View Tracking")
                        $("#linktraking").attr("href", "https://pre.easitrack.net/trakingnumber.html?guid=" + broker[0].TrackingNumber);
                        $("#linktraking").attr("target","_blank");
                         
                    } else {
                        $("#notificacation").text('No tracking sent was found');
                    }

                } else {
                    toastr.error('The device does not have an assigned order');
                }
                         
            }
            bool = false

        });

    }
    catch (error) {
        
    }
}
function clearinputs() {

    $("#title").text('');
    $("#brokerdevice").text('');
    $("#name").text('');
    $("#Ordernumber").text('');
    $("#PickupAddress").text('');
    $("#PickupDatetime").text('');
    $("#address").text('');
    $("#DeliveryDatetime").text('');
    $("#Observations").text('');
    $("#emailto").text('');   
    $("#notificacation").text('');
    $("#spanemailtraking").text('');
    $("#linktraking").text('');

    
}



