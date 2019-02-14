const travels = [
  {
    university: 'Purdue',
    beforeEvent: {
      pickupsBefore: [
        {
          time: '2/23/2018 at 4:15PM EST',
          locations: ['Purdue Univ, Lawson Hall of Computer Science, 305 N University St, West'],
        },
      ],
      arrivalsBefore: [
        {
          time: '5:00PM CST',
          locations: ['Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801'],
        },
      ],
    },
    afterEvent: {
      pickupsAfter: [
        {
          time: '2/25/2018 at 5:15PM CST',
          locations: ['Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801'],
        },
      ],
      arrivalsAfter: [
        {
          time: '7:45PM EST',
          locations: ['Purdue Univ, Lawson Hall of Computer Science, 305 N University St, West'],
        },
      ],
    },
  },
  {
    university: 'Florida / Georgia Tech',
    beforeEvent: {
      pickupsBefore: [
        {
          time: '2/23/2018 at 2:30AM EST',
          locations: ['Florida, UF Commuter Lot, 1950 Gale Lemerand Drive, Gainesville, FL 32603'],
        },
        {
          time: '2/23/2018 at 7:30AM EST',
          locations: ['Georgia Tech, 266 4th St NW, Atlanta, GA 30332'],
        },
      ],
      arrivalsBefore: [
        {
          time: '5:30PM CST',
          locations: ['Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801'],
        },
      ],
    },
    afterEvent: {
      pickupsAfter: [
        {
          time: '2/25/2018 at 5.15PM CST',
          locations: ['Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801'],
        },
      ],
      arrivalsAfter: [
        {
          time: 'Atlanta: 4:00PM EST // Gainsville: 9:00AM EST',
          locations: [
            'Georgia Tech, 266 4th St NW, Atlanta, GA 30332',
            'Florida, UF Commuter Lot, 1950 Gale Lemerand Drive, Gainesville, FL 32603',
          ],
        },
      ],
    },
  },
  {
    university: 'UMichigan / Michigan State',
    beforeEvent: {
      pickupsBefore: [
        {
          time: '2/23/2018 at 10:30AM EST',
          locations: [
            'UMichigan, Rackham Auditorium, 915 East Washington Street, Ann Arbor, MI 48109',
          ],
        },
        {
          time: '2/23/2018 at 12:00PM EST',
          locations: ['Michigan State, Spartan Stadium, 570 Red Cedar Rd, East Lansing, MI 48824'],
        },
      ],
      arrivalsBefore: [
        {
          time: '4:15PM CST',
          locations: ['Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801'],
        },
      ],
    },
    afterEvent: {
      pickupsAfter: [
        {
          time: '2/25/2018 at 5:15PM CST',
          locations: ['Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801'],
        },
      ],
      arrivalsAfter: [
        {
          time: 'Michigan State: 10:30 PM EST // UMichigan: 11:45AM EST',
          locations: [
            'Michigan State, Spartan Stadium, 570 Red Cedar Rd, East Lansing, MI 48824',
            'UMichigan, Rackham Auditorium, 915 East Washington Street, Ann Arbor, MI 48109',
          ],
        },
      ],
    },
  },
];

export default travels;
