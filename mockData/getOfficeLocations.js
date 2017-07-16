export default () => new Promise((res) => {
    const offices = [
        {"officeName":"Delft Center for Systems and Control, Delft, Netherlands","endDate":"2017-05-25T23:00:00.000Z","lat":"52.001742","lng":"4.371436","startDate":"2017-05-16T23:00:00.000Z","officeType":"Perm","id":1495105818},
        {"officeName":"Afragola, Metropolitan City of Naples, Italy","endDate":"2017-05-17T23:00:00.000Z","lat":"40.923039","lng":"14.309304","startDate":"2017-05-23T23:00:00.000Z","officeType":"Perm","id":1495105829},
        {"officeName":"Stratford & District Christian School, Queensland Road, Stratford, ON, Canada","endDate":"2017-05-22T23:00:00.000Z","lat":"43.365978","lng":"-81.004590","startDate":"2017-05-28T23:00:00.000Z","officeType":"Temp","id":1495105833}
    ]
    res(offices)
})
