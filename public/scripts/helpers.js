// Response renders

// Render response for bulb HTML

const createBulbHTML = (data) => {
    const connectionState = data.connectionState;
    const brightnessProperty = 180*data.brightness/100;
    if (connectionState != 'Disconnected') {
        return  `<table>
            <thead>
                <tr>
                    <th colspan="2">${data.name}</th>
                </tr>
            </thead>
            <tbody>
                <tr class="status">
                    <td class="first">Status</td>
                    <td class="second">${data.connectionState}</td>
                </tr>
                <tr>
                    <td class="name" colspan="2">Bulb is turned on</td>
                </tr>
                <tr class="brightness">
                    <td class="first">Brightness</td>
                    <td class="second">
                        <div class="circle-wrap">
                        <div class="circle">
                            <div class="mask half">
                                <div class="fill" style = "transform: rotate(${brightnessProperty}deg)"></div>
                            </div>
                            <div class="mask full" style = "transform: rotate(${brightnessProperty}deg)">
                                <div class="fill" style = "transform: rotate(${brightnessProperty}deg)"></div>
                            </div>
                        </div>
                        <div class="inside-circle"> ${data.brightness} % </div>
                        </div>
                    </td>
                </tr>
                <tr class="color">
                    <td class="first">Color</td>
                    <td class="second"> <i style = "color:${data.color}; font-size: 2.75rem;" class="fa-solid fa-lightbulb"></i></td>
                </tr>
            </tbody>
        </table>`
    } else {
        return `<table>
        <thead>
            <tr>
                <th colspan="2">${data.name}</th>
            </tr>
        </thead>
        <tbody>
            <tr class="status">
                <td class="first">Status</td>
                <td class="second">${data.connectionState}</td>
            </tr>
        </table>`
    }
}

// Render response for outlet HTML

const createOutletHTML = (data) => {
    const powerProperty = 180*data.powerConsumption/2500;
    const powerToKW = (data.powerConsumption/1000).toFixed(1)
    const isTurnedOn = data.isTurnedOn;
    const connectionsState = data.connectionState;
    if( isTurnedOn && connectionsState != 'Disconnected') {
        return `<table>
        <thead>
            <tr>
                <th colspan="2">${data.name}</th>
            </tr>
        </thead>
        <tbody>
            <tr class="status">
                <td class="first">Status</td>
                <td class="second">${data.connectionState}</td>
            </tr>
            <tr>
                <td class="name" colspan="2">Bulb is turned on</td>
            </tr>
            <tr class="brightness">
                <td class="first">Power Consumption</td>
                <td class="second">
                    <div class="circle-wrap">
                    <div class="circle">
                        <div class="mask half">
                            <div class="fill" style = "transform: rotate(${powerProperty}deg); background-color : red"></div>
                        </div>
                        <div class="mask full" style = "transform: rotate(${powerProperty}deg)">
                            <div class="fill" style = "transform: rotate(${powerProperty}deg); background-color: red"></div>
                        </div>
                    </div>
                    <div class="inside-circle"> ${powerToKW} kW</div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>`
    } else {
        return `<table>
        <thead>
            <tr>
                <th colspan="2">${data.name}</th>
            </tr>
        </thead>
        <tbody>
            <tr class="status">
                <td class="first">Status</td>
                <td class="second">${data.connectionState}</td>
            </tr>
            <tr>
                <td class="name" colspan="2">Bulb is turned Off</td>
            </tr>`
    }
}

// Render response for temperature sensor HTML

const createTemperatureSensorHTML = (data) => {
    const connectionState = data.connectionState;
    if (connectionState != 'Disconnected') {
        return `<table>
        <thead>
            <tr>
                <th colspan="2">${data.name}</th>
            </tr>
        </thead>
        <tbody>
            <tr class="status">
                <td class="first">Status</td>
                <td class="second">${data.connectionState}</td>
            </tr>
            <tr>
                <td class="name" colspan="2">Temperature sensor is on use</td>
            </tr>
            <tr class="brightness">
                <td class="first">Current temperature</td>
                <td class="second"><i class="material-icons temperatureSensors">device_thermostat</i> ${data.temperature} °C</td>
            </tr>
        </tbody>
    </table>` 
    } else {
        return `<table>
        <thead>
            <tr>
                <th colspan="2">${data.name}</th>
            </tr>
        </thead>
        <tbody>
            <tr class="status">
                <td class="first">Status</td>
                <td class="second">${data.connectionState}</td>
            </tr>
            <tr>
                <td class="name" colspan="2">Temperature sensor not connected</td>
            </tr>`
    }
}

// Menu buttons

$('#close_button').click(() => {
    $('#navigation').css("display", "none");
    $('#open_button').css("display", "block")
})

$('#open_button').click(() => {
    $('#navigation').css("display", "flex");
    $('#open_button').css("display", "none")
})