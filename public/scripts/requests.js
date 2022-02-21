// Module is responsible for server requests

const activeDevices = [10, 11, 12, 20, 21, 30]; // array of active devices

// When user clicks the list element this block of code receives device category and it's id
// If smart device is active then it POST them to server and get response - object with respective properties
// then using clicked element's id and category we generate dashboard element id (deviceCategory_id) and make it visible
// At the same time code renders data in accordance to deviceCategory helper.js function

const deviceListElement = $('.slide')


deviceListElement.click(async function(){
    const idNumber = this.id.split('_')[1];
    if (activeDevices.indexOf(parseInt(idNumber)) != -1) {
        dataUpdatePromise(this)
    }
});

// Overall status update 

$('#update').click(()=>{
    const visibleDashboardElements = [$('.device').filter(':visible')]// updates only visible elements
    for (element of visibleDashboardElements[0]) {
        dataUpdatePromise(element)
    } 
})

// promise to update device properties. Is used for for one device and for all devices update

const dataUpdatePromise = (element) => {
    const deviceCategory = element.title;
        const idNumber = element.id.split('_')[1];
        const dashboardElement = $(`#${deviceCategory}_${idNumber}`);
        dashboardElement.empty();
        dashboardElement.append(`<button class="closeButton"><i class="material-icons">close</i></button>`);
        getDeviceStatus(idNumber, deviceCategory)
        .then(response => {
            dashboardElement.css("display", "flex");
            if (deviceCategory === "bulbs") {
            dashboardElement.append(createBulbHTML(response))
        } else if (deviceCategory === "outlets") {
            dashboardElement.append(createOutletHTML(response))
        } else if (deviceCategory === "temperatureSensors") {
            dashboardElement.append(createTemperatureSensorHTML(response))
        }
    })

}

// POST request to server to get smart device properties

const getDeviceStatus = async (id, deviceCategory) => {
    const data = { id, deviceCategory };
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };
    const response = await fetch('/api/v1/devices', options);
    const responseData = await response.json();
    return responseData;
}

const closeButton = $('.closeButton')


$(document).on('click', '.closeButton', function(){
    const dashboardElementId = $(this).parent().attr('id');
    document.getElementById(dashboardElementId).style.display = "none"
});

$(document).on('click', '.device', function(){
    const childId = $(this).children().attr('class');
    console.log(childId)
})


