const travels = [
  {
    university: 'Purdue',
    beforeEvent: {
      pickupsBefore: [
        {
          time: '2/22/2019 at 12:45PM EST',
          locations: [
            'Purdue Univ, Lawson Hall of Computer Science, 305 N University St, West Lafayette, IN 47907',
          ],
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
          time: '2/24/2019 at 5:15PM CST',
          locations: ['Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801'],
        },
      ],
      arrivalsAfter: [
        {
          time: '7:45PM EST',
          locations: [
            'Purdue Univ, Lawson Hall of Computer Science, 305 N University St, West Lafayette, IN 47907',
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
          time: '2/22/2019 at 9:00AM EST',
          locations: [
            'UMichigan Electrical Engineering and Computer Science Building, 1301 Beal Ave, Ann Arbor, MI 48109',
          ],
        },
        {
          time: '2/22/2019 at 10:30AM EST',
          locations: [
            'Michigan State University Engineering Building, 428 S Shaw Ln #3115, East Lansing, MI 48824',
          ],
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
          time: '2/24/2019 at 5:15PM CST',
          locations: ['Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801'],
        },
      ],
      arrivalsAfter: [
        {
          time: 'Michigan State: 10:30 PM EST',
          locations: [
            'Michigan State University Engineering Building, 428 S Shaw Ln #3115, East Lansing, MI 48824',
          ],
        },
        {
          time: 'University of Michigan: 11:45PM EST',
          locations: [
            'UMichigan Electrical Engineering and Computer Science Building, 1301 Beal Ave, Ann Arbor, MI 48109',
          ],
        },
      ],
    },
  },
  {
    university: 'Northwestern / DePaul / UIC / UChicago',
    beforeEvent: {
      pickupsBefore: [
        {
          time: '2/22/2019 at 10:00AM CST',
          locations: [
            'Northwestern University Technological University, 2145 Sheridan Rd, Evanston, IL 60208',
          ],
        },
        {
          time: '2/22/2019 at 11:00AM CST',
          locations: ['DePaul University, 243 S Wabash Ave, Chicago, IL 60604'],
        },
        {
          time: '2/22/2019 at 11:45AM CST',
          locations: [
            'University of Illinois at Chicago Computer Science Department, 851 S Morgan St, Chicago, IL 60607',
          ],
        },
        {
          time: '2/22/2019 at 12:30PM CST',
          locations: [
            'University of Chicago Computation Institute, 5735 S Ellis Ave, Chicago, IL 60637',
          ],
        },
      ],
      arrivalsBefore: [
        {
          time: '4:00PM CST',
          locations: ['Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801'],
        },
      ],
    },
    afterEvent: {
      pickupsAfter: [
        {
          time: '2/24/2019 at 5:15PM CST',
          locations: ['Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801'],
        },
      ],
      arrivalsAfter: [
        {
          time: 'UChicago: 8:00PM CST',
          locations: [
            'University of Chicago Computation Institute, 5735 S Ellis Ave, Chicago, IL 60637',
          ],
        },
        {
          time: 'UIC: 9:00PM CST',
          locations: [
            'University of Illinois at Chicago Computer Science Department, 851 S Morgan St, Chicago, IL 60607',
          ],
        },
        {
          time: 'DePaul University: 9:45PM CST',
          locations: ['DePaul University, 243 S Wabash Ave, Chicago, IL 60604'],
        },
        {
          time: 'Northwestern University: 10:30PM CST',
          locations: [
            'Northwestern University Technological University, 2145 Sheridan Rd, Evanston, IL 60208',
          ],
        },
      ],
    },
  },
];

export default travels;
