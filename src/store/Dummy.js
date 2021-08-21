export const tasks = [
    {
        id: 1,
        title: 'ABC of Code Review',
        duedate: 'August 3, 2021',
        type: 'Course',
        status: 'Completed',
        user: 1
    },
    {
        id: 2,
        title: 'Oratory and Presentations',
        duedate: 'August 25, 2021',
        type: 'Course',
        status: 'Active',
        user: 2
    },
    {
        id: 3,
        title: 'How to build a Full Stack App',
        duedate: 'October 15, 2021',
        type: 'Course',
        status: 'Active',
        user: 3
    },
    {
        id: 4,
        title: 'Fintech Values',
        duedate: 'August 10, 2021',
        type: 'Course',
        status: 'Completed',
        user: 4
    },
    {
        id: 5,
        title: 'Scrum - from zero to hero',
        duedate: 'July 27, 2021',
        type: 'Course',
        status: 'Ended',
        user: 5
    },
]

export const users = [
    {
        id: 1,
        name: 'Andrea Lamas',
        email: 'andrealamas@mail.com',
        img: 'https://randomuser.me/api/portraits/women/90.jpg',
        company: 'Asana',
        role: 'UX/UI Lead',
        forecast: '30%',
        activity: '6 Hours ago',
    },
    {
        id: 2,
        name: 'Rodrigo Ferrari',
        email: 'rodrigoferrari@mail.com',
        img: 'https://randomuser.me/api/portraits/men/36.jpg',
        company: 'Google',
        role: 'Tech Lead',
        forecast: '10%',
        activity: '15 Hours ago',
    },
    {
        id: 3,
        name: 'Jorge Carranza',
        email: 'jorgecarranza@mail.com',
        img: 'https://randomuser.me/api/portraits/men/11.jpg',
        company: 'Auth0',
        role: 'Senior Dev',
        forecast: '41%',
        activity: 'Aug 10, 2021',
    },
    {
        id: 4,
        name: 'Daniela Praga',
        email: 'danielapraga@mail.com',
        img: 'https://randomuser.me/api/portraits/women/28.jpg',
        company: 'Coca Cola',
        role: 'QA',
        forecast: '63%',
        activity: '2 Hours ago',
    },
    {
        id: 5,
        name: 'Julio Trotta',
        email: 'juliotrotta@mail.com',
        img: 'https://randomuser.me/api/portraits/men/46.jpg',
        company: 'Mercado Libre',
        role: 'Back End Lead',
        forecast: '30%',
        activity: '6 Hours ago',
    },
    {
        id: 6,
        name: 'Rosana Lorenzato',
        email: 'rosanalorenzato@mail.com',
        img: 'https://randomuser.me/api/portraits/women/65.jpg',
        company: 'Mercado Libre',
        role: 'Front End Lead',
        forecast: '40%',
        activity: 'August 2, 2021',
    },
    {
        id: 7,
        name: 'Ricardo Malfran',
        email: 'ricardomalfran@mail.com',
        img: 'https://randomuser.me/api/portraits/men/24.jpg',
        company: 'Media Monks',
        role: 'Dev Op',
        forecast: '71%',
        activity: '1 Hour ago',
    },
    {
        id: 8,
        name: 'Belén Aguirre',
        email: 'belenaguirre@mail.com',
        img: 'https://randomuser.me/api/portraits/women/74.jpg',
        company: 'Coder House',
        role: 'Full Stack Dev',
        forecast: '55%',
        activity: '22 Hours ago',
    },
    {
        id: 9,
        name: 'Amilkar Figueroa',
        email: 'amilkarfigueroa@mail.com',
        img: 'https://randomuser.me/api/portraits/men/27.jpg',
        company: 'Plataforma 5',
        role: 'Tech Lead',
        forecast: '15%',
        activity: 'July 3, 2021',
    },
    {
        id: 10,
        name: 'Diego Pereyra',
        email: 'facundopereyra@mail.com',
        img: 'https://randomuser.me/api/portraits/men/42.jpg',
        company: 'Banco Santander',
        role: 'Front End Dev',
        forecast: '85%',
        activity: '3 Hours ago',
    },
]

export const chats = [
    {
        sender: users[0].name,
        senderImg: users[0].img,
        message: ['Affronting everything discretion men now own did. Still round match we to. Frankness pronounce daughters remainder extensive has but.'],
        date: 'An hour ago'
    },
    {
        sender: users[1].name,
        senderImg: users[1].img,
        message: ['Happiness cordially one determine concluded fat. Plenty season beyond by hardly giving of'],
        date: '18.08.2021'
    },
    {
        sender: users[2].name,
        senderImg: users[2].img,
        message: ['Consulted or acuteness dejection an smallness if. Outward general passage another as it. Very his are come man walk one next. Delighted prevailed supported too not remainder perpetual who furnished. Nay affronting bed projection compliment instrument. '],
        date: '10.08.2021'
    },
    {
        sender: users[3].name,
        senderImg: users[3].img,
        message: ['And sir dare view but over man. So at within mr to simple assure. Mr disposing continued it offending arranging in we. Extremity as if breakfast agreement. Off now mistress provided out horrible opinions. '],
        date: '15.07.2021'
    },
    {
        sender: users[4].name,
        senderImg: users[4].img,
        message: ['Remember outweigh do he desirous no cheerful. Plenty season beyond by hardly giving of'],
        date: '30.06.2021'
    },
]

const now = Date.now()
const today = new Date(now)

export const signals = [
    {
        type: 'Long',
        probability: '59.15%',
        name: 'Exit from a narrowing range up',
        instrument: 'TESLA (TSLA)',
        timeframe: 'D1',
        tipe: today.toDateString(),
        price: '668.28 USD',
        holding: today.toDateString(),
        stoploss: '545.16 USD',
        takeprofit: '914.52 USD',
        pathname: 'https://telegra.ph/Trading-Signal-for-TSLA---Statistical-Odds-07-29',
        etoro: 'https://www.etoro.com/markets/tsla'
    },
    {
        type: 'Long',
        probability: '53.58%',
        name: 'Uptrend range: 2 consecutive growing candles',
        instrument: 'iShare 20+ YTB-ETF (TLT)',
        timeframe: 'D1',
        tipe: today.toDateString(),
        price: '150.72 USD',
        holding: today.toDateString(),
        stoploss: '145.16 USD',
        takeprofit: '158.54 USD',
        pathname: 'https://telegra.ph/Trading-Signal-for-TLT---Statistical-Odds-08-20',
        etoro: 'https://www.etoro.com/markets/tlt'
    },
    {
        type: 'Long',
        probability: '65.8%',
        name: 'The candle crossed ema(22) from bottom to top',
        instrument: 'APPLE (AAPL)',
        timeframe: 'D1',
        tipe: today.toDateString(),
        price: '147.34 USD',
        holding: today.toDateString(),
        stoploss: '137.91 USD',
        takeprofit: '189.77 USD',
        pathname: 'https://telegra.ph/Trading-Signal-for-AAPL---Statistical-Odds-08-20',
        etoro: 'https://www.etoro.com/markets/aapl'
    },
    {
        type: 'Long',
        probability: '52.17%',
        name: 'The naked maximum of the candle',
        instrument: 'Ripple (XRP)',
        timeframe: 'D1',
        tipe: today.toDateString(),
        price: '1.2328 USD',
        holding: today.toDateString(),
        stoploss: '0.7471 USD',
        takeprofit: '3.66515 USD',
        pathname: 'https://telegra.ph/Trading-Signal-for-XRPUSD---Statistical-Odds-08-20',
        etoro: 'https://www.etoro.com/markets/xrp'
    }
]

export const dataSource = [{
    date: new Date(2021, 7, 30),
    l: 24.00,
    h: 25.00,
    o: 25.00,
    c: 24.875
  }, {
    date: new Date(2021, 7, 31),
    l: 23.625,
    h: 25.125,
    o: 24.00,
    c: 24.875
  }, {
    date: new Date(2021, 8, 1),
    l: 26.25,
    h: 28.25,
    o: 26.75,
    c: 27.00
  }, {
    date: new Date(2021, 8, 2),
    l: 26.50,
    h: 27.875,
    o: 26.875,
    c: 27.25
  }, {
    date: new Date(2021, 8, 3),
    l: 26.375,
    h: 27.50,
    o: 27.375,
    c: 26.75
  }, {
    date: new Date(2021, 8, 4),
    l: 25.75,
    h: 26.875,
    o: 26.75,
    c: 26.00
  }, {
    date: new Date(2021, 8, 5),
    l: 25.75,
    h: 26.75,
    o: 26.125,
    c: 26.25
  }, {
    date: new Date(2021, 8, 6),
    l: 25.75,
    h: 26.375,
    o: 26.375,
    c: 25.875
  }, {
    date: new Date(2021, 8, 7),
    l: 24.875,
    h: 26.125,
    o: 26.00,
    c: 25.375
  }, {
    date: new Date(2021, 8, 8),
    l: 25.125,
    h: 26.00,
    o: 25.625,
    c: 25.75
  }, {
    date: new Date(2021, 8, 9),
    l: 25.875,
    h: 26.625,
    o: 26.125,
    c: 26.375
  }, {
    date: new Date(2021, 8, 10),
    l: 26.25,
    h: 27.375,
    o: 26.25,
    c: 27.25
  }, {
    date: new Date(2021, 8, 11),
    l: 26.875,
    h: 27.25,
    o: 27.125,
    c: 26.875
  }, {
    date: new Date(2021, 8, 12),
    l: 26.375,
    h: 27.125,
    o: 27.00,
    c: 27.125
  }, {
    date: new Date(2021, 8, 13),
    l: 26.75,
    h: 27.875,
    o: 26.875,
    c: 27.75
  }, {
    date: new Date(2021, 8, 14),
    l: 26.75,
    h: 28.375,
    o: 27.50,
    c: 27.00
  }, {
    date: new Date(2021, 8, 15),
    l: 26.875,
    h: 28.125,
    o: 27.00,
    c: 28.00
  }, {
    date: new Date(2021, 8, 16),
    l: 26.25,
    h: 27.875,
    o: 27.75,
    c: 27.625
  }, {
    date: new Date(2021, 8, 17),
    l: 27.50,
    h: 28.75,
    o: 27.75,
    c: 28.00
  }, {
    date: new Date(2021, 8, 18),
    l: 25.75,
    h: 28.25,
    o: 28.00,
    c: 27.25
  }, {
    date: new Date(2021, 8, 19),
    l: 26.375,
    h: 27.50,
    o: 27.50,
    c: 26.875
  }, {
    date: new Date(2021, 8, 20),
    l: 25.75,
    h: 27.50,
    o: 26.375,
    c: 26.25
  }, {
    date: new Date(2021, 8, 21),
    l: 24.75,
    h: 27.00,
    o: 26.50,
    c: 25.25
  }];
  