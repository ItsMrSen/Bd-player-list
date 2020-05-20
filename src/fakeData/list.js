const list =
[{key: "A2012", name:"Mahmudullah",age:"26", avg:"--(ODI)",email:"nasum@odi.com",salary: '15,200',
imgLinkLink:"https://www.mykhel.com/thumb/247x100x233/cricket/players/5/3555.1506323472.jpg",role:"all-rounder"},
{key: "B2D10", name:"Nasum Ahmed",age:"34", avg:"33.64(ODI)",email:"mahamullah@odi.com",salary: '10,200',
imgLink:"https://s3.amazonaws.com/batsman/Nasum%20Ahmed_24a7284b-866a-4493-99e2-41b28ef16bbd.JPG",role:"all-rounder"},
{key: "A0010", name:"Shafiul Islam",age:"31", avg:"6.09(ODI)",email:"shafiul@odi.com",salary: '11,200',
imgLink:"https://www.mykhel.com/thumb/247x100x233/cricket/players/9/4579.1506323751.jpg",role:"bowler"},
{key: "A0B11", name:"Mosaddek Hossain",age:"25", avg:"87.04(ODI)",email:"mosaddek@odi.com",salary: '13,200',
imgLink:"https://www.mykhel.com/thumb/247x100x233/cricket/players/0/5560.1506323656.jpg",role:"Middle Order Batsman"},
{key: "A0012", name:"Mehedi Hasan",age:"23", avg:"77.36(ODI)",email:"mehedi@odi.com",salary: '20,200',
imgLink:"https://www.mykhel.com/thumb/247x100x233/cricket/players/0/6750.1506323385.jpg",role:"all-rounder"},
{key: "A0013", name:"Mustafizur Rahman",age:"25", avg:"57.35(ODI)",email:"mustafizur@odi.com",salary: '25,200',
imgLink:"https://www.mykhel.com/thumb/247x100x233/cricket/players/2/6752.1506323718.jpg",role:"bowler"},
{key: "A0014", name:"Liton Das",age:"26", avg:"95.23(ODI)",email:"liton@odi.com",salary: '30,200',
imgLink:"https://www.mykhel.com/thumb/247x100x233/cricket/players/7/5567.1506323355.jpg",role:"wicket keeper"},
{key: "A0015", name:"Tamim Iqbal",age:"31", avg:"36.74(ODI)",email:"tamim@odi.com",salary: '34,200',
imgLink:"https://www.mykhel.com/thumb/247x100x233/cricket/players/7/3497.1506324086.jpg",role:"batsman"},
{key: "A0016", name:"Afif Hossain",age:"21", avg:"7.00(ODI)",email:"afif@odi.com",salary: '22,200',
imgLink:"https://www.mykhel.com/thumb/247x100x233/cricket/players/8/4488.1559279480.jpg",role:"wicket Keeper"},
{key: "A0017", name:"Mohammad Mithun",age:"29", avg:"28.75(ODI)",email:"mithun@odi.com",salary: '10,200',
imgLink:"https://www.mykhel.com/thumb/247x100x233/cricket/players/8/4488.1559279480.jpg",role:"bowler"},
{key: "A0018", name:"Mashrafe Mortaza",age:"37", avg:"13.75(ODI)",email:"mash@odi.com",salary: '30,200',
imgLink:"https://www.mykhel.com/thumb/247x100x233/cricket/players/5/2995.1506323372.jpg",role:"bowler"},
{key: "A0019", name:"Mushfiqur Rahim",age:"33", avg:"36.02(ODI)",email:"rahim@odi.com",salary: '25,200',
imgLink:"https://www.mykhel.com/thumb/247x100x233/cricket/players/9/3279.1506323675.jpg",role:"wicket keeper"},
{key: "A0020", name:"Mohammad Saifuddin",age:"24", avg:"86.09(ODI)",email:"saifuddin@odi.com",salary: '12,200',
imgLink:"https://www.mykhel.com/thumb/247x100x233/cricket/players/1/6751.1559279894.jpg",role:"all rounder"},
{key: "A001a0", name:"Sakib Al Hasan",age:"33", avg:"37.86(ODI)",email:"sakib@odi.com",salary: '30,200',
imgLink:"https://www.mykhel.com/thumb/247x100x233/cricket/players/0/3420.1506323766.jpg",role:"all rounder"},
{key: "A001a1", name:"Al Amin Hossain",age:"30", avg:"2.86(ODI)",email:"amin@odi.com",salary: '15,200',
imgLink:"https://www.mykhel.com/thumb/247x100x233/cricket/players/7/6757.1571725264.jpg",role:"bowler"},
{key: "A001a2", name:"Soumya Sarkar",age:"27", avg:"33.86(ODI)",email:"sarker@odi.com",salary: '25,200',
imgLink:"https://www.mykhel.com/thumb/247x100x233/cricket/players/0/5570.1506323939.jpg",role:"all rounder"}]

const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(list);

export default list;